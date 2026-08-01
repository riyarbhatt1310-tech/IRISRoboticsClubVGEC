import { site } from "../../data/site";
import Section from "../fx/Section";
import Reveal from "../fx/Reveal";

export default function Mentors() {
  return (
    <Section id="mentors" eyebrow="Guided by" title="Faculty Mentors">
      <div className="mx-auto grid max-w-4xl gap-6 sm:grid-cols-3">
        {site.mentors.map((m, i) => (
          <Reveal key={m.name} delay={i * 0.1}>
            <div className="glass flex h-full flex-col items-center rounded-2xl p-6 text-center transition-colors hover:border-brand-violet/40">
              <div className="relative mb-4 h-24 w-24">
                <div className="absolute inset-0 rounded-full bg-gradient-to-br from-brand-cyan to-brand-violet p-[2px]">
                  <img
                    src={m.image}
                    alt={m.name}
                    loading="lazy"
                    className="h-full w-full rounded-full object-cover"
                  />
                </div>
              </div>
              <h3 className="text-lg font-semibold">{m.name}</h3>
              <p className="mt-0.5 text-sm font-medium text-brand-violet">
                {m.title}
              </p>
              <p className="mt-1 text-xs text-slate-500">{m.department}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
