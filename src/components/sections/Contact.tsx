import { useState } from "react";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import { site } from "../../data/site";
import Section from "../fx/Section";
import Reveal from "../fx/Reveal";
import { Icon } from "../../lib/icons";

export default function Contact() {
  const [sent, setSent] = useState(false);

  const details = [
    { icon: Mail, label: "Email", value: site.club.email, href: `mailto:${site.club.email}` },
    { icon: Phone, label: "Phone", value: site.club.phone, href: `tel:${site.club.phone}` },
    { icon: MapPin, label: "Find us", value: site.club.location, href: undefined },
  ];

  return (
    <Section id="contact" eyebrow="Say hello" title={site.contact.heading} subtitle={site.contact.body}>
      <div className="grid gap-8 lg:grid-cols-5">
        {/* info */}
        <Reveal className="lg:col-span-2">
          <div className="space-y-4">
            {details.map((d) => {
              const Cmp = d.icon;
              const inner = (
                <div className="glass flex items-center gap-4 rounded-2xl p-4 transition-colors hover:border-brand-cyan/40">
                  <div className="rounded-xl bg-brand-cyan/10 p-3 text-brand-cyan">
                    <Cmp className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-xs uppercase tracking-wider text-slate-500">
                      {d.label}
                    </p>
                    <p className="text-sm font-medium text-slate-200">{d.value}</p>
                  </div>
                </div>
              );
              return d.href ? (
                <a key={d.label} href={d.href} className="block">
                  {inner}
                </a>
              ) : (
                <div key={d.label}>{inner}</div>
              );
            })}

            <div className="flex gap-2 pt-2">
              {site.socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  aria-label={s.label}
                  className="glass rounded-xl p-3 text-slate-300 transition-colors hover:text-brand-cyan"
                >
                  <Icon name={s.icon} className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>
        </Reveal>

        {/* form (UI only — wire to a backend / form service later) */}
        <Reveal delay={0.1} className="lg:col-span-3">
          <form
            className="glass space-y-4 rounded-2xl p-6"
            onSubmit={(e) => {
              e.preventDefault();
              setSent(true);
            }}
          >
            <div className="grid gap-4 sm:grid-cols-2">
              <Field label="Name" placeholder="Ada Lovelace" />
              <Field label="Email" type="email" placeholder="you@vgec.ac.in" />
            </div>
            <Field label="Subject" placeholder="I'd like to join / sponsor" />
            <div>
              <label className="mb-1.5 block text-sm text-slate-400">Message</label>
              <textarea
                required
                rows={4}
                placeholder="Tell us a bit about yourself…"
                className="w-full resize-none rounded-xl bg-white/5 px-4 py-3 text-sm text-slate-100 ring-1 ring-white/10 outline-none transition focus:ring-brand-cyan/60"
              />
            </div>
            <button
              type="submit"
              className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-brand-cyan to-brand-violet px-6 py-3 font-semibold text-ink transition-transform hover:scale-105"
            >
              <Send className="h-4 w-4" />
              {sent ? "Message sent!" : "Send message"}
            </button>
            {sent && (
              <p className="text-sm text-brand-cyan">
                Thanks! This demo form doesn't send yet — connect it to a form
                service or email backend to go live.
              </p>
            )}
          </form>
        </Reveal>
      </div>
    </Section>
  );
}

function Field({
  label,
  type = "text",
  placeholder,
}: {
  label: string;
  type?: string;
  placeholder?: string;
}) {
  return (
    <div>
      <label className="mb-1.5 block text-sm text-slate-400">{label}</label>
      <input
        required
        type={type}
        placeholder={placeholder}
        className="w-full rounded-xl bg-white/5 px-4 py-3 text-sm text-slate-100 ring-1 ring-white/10 outline-none transition focus:ring-brand-cyan/60"
      />
    </div>
  );
}
