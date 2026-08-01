import { Trophy } from "lucide-react";
import { site } from "../../data/site";
import Section from "../fx/Section";
import Reveal from "../fx/Reveal";

export default function Teams() {
  return (
    <Section
      id="teams"
      eyebrow="We compete"
      title="Competition Teams"
      subtitle="Specialised squads that take VGEC to the national and international stage."
    >
      <div className="grid gap-6 md:grid-cols-2">
        {site.teams.map((t, i) => (
          <Reveal key={t.name} delay={(i % 2) * 0.1}>
            <div className="group glass relative h-full overflow-hidden rounded-2xl p-6 transition-all duration-300 hover:border-brand-violet/40">
              <div className="absolute right-0 top-0 h-24 w-24 translate-x-8 -translate-y-8 rounded-full bg-brand-violet/10 blur-2xl transition-all group-hover:bg-brand-violet/25" />
              <div className="relative flex items-start justify-between gap-4">
                <div>
                  <p className="text-xs font-medium uppercase tracking-wider text-brand-violet">
                    {t.competition}
                  </p>
                  <h3 className="mt-1 text-2xl font-semibold">{t.name}</h3>
                </div>
                <div className="rounded-xl bg-white/5 p-2.5 text-brand-cyan ring-1 ring-white/10">
                  <Trophy className="h-5 w-5" />
                </div>
              </div>
              <p className="relative mt-3 text-sm leading-relaxed text-slate-400">
                {t.description}
              </p>
              <div className="relative mt-5 inline-flex items-center gap-2 rounded-full bg-brand-cyan/10 px-3 py-1.5 text-xs font-semibold text-brand-cyan ring-1 ring-brand-cyan/30">
                <Trophy className="h-3.5 w-3.5" />
                {t.achievement}
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
