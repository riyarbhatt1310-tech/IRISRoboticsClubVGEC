import { site } from "../../data/site";
import Section from "../fx/Section";
import Reveal from "../fx/Reveal";
import type { Sponsor } from "../../data/site";

const tierOrder: Sponsor["tier"][] = ["Platinum", "Gold", "Silver", "Community"];

const tierAccent: Record<Sponsor["tier"], string> = {
  Platinum: "from-slate-200/20 to-slate-400/10 text-slate-200",
  Gold: "from-amber-300/20 to-yellow-500/10 text-amber-200",
  Silver: "from-slate-300/20 to-slate-500/10 text-slate-300",
  Community: "from-brand-cyan/20 to-brand-violet/10 text-brand-cyan",
};

export default function Sponsors() {
  return (
    <Section
      id="sponsors"
      eyebrow="Backed by"
      title="Our Sponsors"
      subtitle="Partners who fuel our builds. Interested in sponsoring? Let's talk."
    >
      <div className="space-y-10">
        {tierOrder.map((tier) => {
          const list = site.sponsors.filter((s) => s.tier === tier);
          if (!list.length) return null;
          return (
            <Reveal key={tier}>
              <div>
                <div className="mb-4 flex items-center gap-3">
                  <span
                    className={`rounded-full bg-gradient-to-r px-3 py-1 text-xs font-semibold ring-1 ring-white/10 ${tierAccent[tier]}`}
                  >
                    {tier}
                  </span>
                  <div className="h-px flex-1 bg-white/10" />
                </div>
                <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
                  {list.map((s) => (
                    <div
                      key={s.name}
                      className="glass flex h-24 items-center justify-center rounded-xl p-4 grayscale transition-all duration-300 hover:grayscale-0 hover:border-brand-cyan/40"
                      title={s.name}
                    >
                      <img
                        src={s.logo}
                        alt={s.name}
                        loading="lazy"
                        className="max-h-12 max-w-full rounded object-contain opacity-80"
                      />
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>
          );
        })}
      </div>
    </Section>
  );
}
