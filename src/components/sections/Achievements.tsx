import { Award } from "lucide-react";
import { site } from "../../data/site";
import Section from "../fx/Section";
import Reveal from "../fx/Reveal";

export default function Achievements() {
  return (
    <Section
      id="achievements"
      eyebrow="Track record"
      title="Achievements"
      subtitle="Milestones on our journey — and we're just getting started."
    >
      <div className="relative mx-auto max-w-2xl pl-8 sm:pl-10">
        {/* vertical rail */}
        <div className="absolute left-3 top-2 bottom-2 w-px bg-gradient-to-b from-brand-cyan via-brand-violet to-transparent sm:left-4" />

        <div className="space-y-6">
          {site.achievements.map((a) => (
            <Reveal key={a.title}>
              <div className="relative">
                {/* node */}
                <div className="absolute -left-8 top-4 flex h-7 w-7 items-center justify-center rounded-full bg-ink ring-2 ring-brand-cyan sm:-left-[26px]">
                  <Award className="h-3.5 w-3.5 text-brand-cyan" />
                </div>
                <div className="glass rounded-2xl p-5 transition-colors hover:border-brand-cyan/40">
                  <span className="font-display text-sm font-bold text-brand-violet">
                    {a.year}
                  </span>
                  <h3 className="mt-1 text-lg font-semibold">{a.title}</h3>
                  <p className="mt-1 text-sm text-slate-400">{a.detail}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </Section>
  );
}
