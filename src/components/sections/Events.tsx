import { Calendar, ArrowUpRight } from "lucide-react";
import { site } from "../../data/site";
import Section from "../fx/Section";
import Reveal from "../fx/Reveal";

export default function Events() {
  return (
    <Section
      id="events"
      eyebrow="What's on"
      title="Events & Workshops"
      subtitle="Hands-on sessions, talks, and our flagship fest — open to all."
    >
      <div className="space-y-4">
        {site.events.map((e, i) => (
          <Reveal key={e.title} delay={(i % 4) * 0.05}>
            <div className="group glass flex flex-col gap-4 rounded-2xl p-5 transition-all duration-300 hover:border-brand-cyan/40 sm:flex-row sm:items-center">
              <div className="flex items-center gap-4 sm:w-48 sm:shrink-0">
                <div className="rounded-xl bg-gradient-to-br from-brand-cyan/20 to-brand-violet/20 p-3 text-brand-cyan ring-1 ring-white/10">
                  <Calendar className="h-5 w-5" />
                </div>
                <span className="font-display text-sm font-bold tracking-wider text-slate-300">
                  {e.date}
                </span>
              </div>
              <div className="flex-1">
                <div className="flex items-center gap-2">
                  <h3 className="text-lg font-semibold">{e.title}</h3>
                  <span className="rounded-full bg-brand-violet/10 px-2 py-0.5 text-[11px] font-medium text-brand-violet ring-1 ring-brand-violet/30">
                    {e.type}
                  </span>
                </div>
                <p className="mt-1 text-sm text-slate-400">{e.description}</p>
              </div>
              <ArrowUpRight className="hidden h-5 w-5 text-slate-600 transition-colors group-hover:text-brand-cyan sm:block" />
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
