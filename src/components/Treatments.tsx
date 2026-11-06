import { AnimatePresence, motion } from "framer-motion";
import { ArrowRight, ArrowUpRight, Check, Clock } from "lucide-react";
import { useState } from "react";
import { siteConfig } from "../config/site";
import { Eyebrow, Reveal } from "./Reveal";

export default function Treatments() {
  const [activeId, setActiveId] = useState(siteConfig.treatments[5].id);
  const active = siteConfig.treatments.find((t) => t.id === activeId)!;
  const [expanded, setExpanded] = useState<string | null>(null);

  return (
    <section id="treatments" className="relative bg-charcoal py-24 text-ivory lg:py-36" aria-label="Treatments">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(60%_40%_at_20%_0%,rgba(169,179,162,0.18),transparent),radial-gradient(50%_40%_at_90%_100%,rgba(98,75,64,0.5),transparent)]" aria-hidden />
      <div className="relative mx-auto max-w-[1320px] px-5 sm:px-8 lg:px-10">
        <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-2xl">
            <Reveal><Eyebrow light>Treatments</Eyebrow></Reveal>
            <Reveal delay={0.1}>
              <h2 className="mt-6 font-serif text-4xl leading-[1.06] font-light text-balance sm:text-5xl lg:text-[3.8rem]">
                Care composed <span className="italic text-[#E8DDC9]">around your smile.</span>
              </h2>
              <p className="mt-5 max-w-xl text-ivory/65">Seven disciplines, one philosophy — conservative where possible, transformative where it counts. Select a treatment to explore.</p>
            </Reveal>
          </div>
          <Reveal delay={0.2}>
            <a href="#booking" className="inline-flex w-fit items-center gap-2 rounded-full border border-ivory/25 px-6 py-3.5 text-sm font-bold text-ivory transition-colors hover:bg-ivory hover:text-charcoal">
              Discuss your options <ArrowUpRight className="h-4 w-4" />
            </a>
          </Reveal>
        </div>

        {/* interactive showcase */}
        <div className="mt-12 grid gap-6 lg:grid-cols-12">
          {/* list */}
          <Reveal className="lg:col-span-5">
            <div className="flex flex-col overflow-hidden rounded-[24px] border border-ivory/12 bg-ivory/[0.04] backdrop-blur" role="tablist" aria-label="Treatment options">
              {siteConfig.treatments.map((t, i) => {
                const isActive = t.id === activeId;
                return (
                  <button
                    key={t.id}
                    role="tab"
                    aria-selected={isActive}
                    onClick={() => setActiveId(t.id)}
                    onMouseEnter={() => setActiveId(t.id)}
                    onFocus={() => setActiveId(t.id)}
                    className={`group flex items-center justify-between gap-4 border-b border-ivory/10 px-6 py-5 text-left transition-all last:border-0 ${isActive ? "bg-ivory text-charcoal" : "hover:bg-ivory/[0.07]"}`}
                  >
                    <span className="flex items-center gap-4">
                      <span className={`font-serif text-xs tracking-[0.18em] ${isActive ? "text-cocoa" : "text-ivory/40"}`}>0{i + 1}</span>
                      <span>
                        <span className="block font-serif text-lg leading-tight sm:text-xl">{t.name}</span>
                        <span className={`mt-0.5 block text-xs ${isActive ? "text-charcoal/60" : "text-ivory/50"}`}>{t.duration}</span>
                      </span>
                    </span>
                    <span className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full transition-all ${isActive ? "bg-cocoa text-ivory" : "border border-ivory/20 text-ivory/60 group-hover:border-ivory/50 group-hover:text-ivory"}`}>
                      <ArrowRight className={`h-4 w-4 transition-transform ${isActive ? "-rotate-45" : "group-hover:translate-x-0.5"}`} />
                    </span>
                  </button>
                );
              })}
            </div>
          </Reveal>

          {/* detail panel */}
          <div className="lg:col-span-7">
            <AnimatePresence mode="wait">
              <motion.article
                key={active.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -12 }}
                transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
                className="grain relative flex h-full min-h-[540px] flex-col overflow-hidden rounded-[28px] bg-ivory text-charcoal"
                role="tabpanel"
              >
                <div className="relative h-64 overflow-hidden sm:h-80">
                  <motion.img
                    key={active.image}
                    src={active.image}
                    alt={active.imageAlt}
                    initial={{ scale: 1.06 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 1.2 }}
                    className="img-warm h-full w-full object-cover"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-ivory via-ivory/10 to-transparent" />
                  <div className="absolute top-5 left-5 flex gap-2">
                    <span className="rounded-full bg-charcoal/85 px-4 py-1.5 text-[0.7rem] font-bold tracking-[0.14em] text-ivory backdrop-blur">{active.name.toUpperCase()}</span>
                  </div>
                  <div className="absolute top-5 right-5 flex items-center gap-1.5 rounded-full bg-ivory/90 px-3.5 py-1.5 text-xs font-bold text-cocoa backdrop-blur">
                    <Clock className="h-3.5 w-3.5" /> {active.duration}
                  </div>
                </div>

                <div className="flex flex-1 flex-col p-7 sm:p-10">
                  <h3 className="font-serif text-3xl leading-tight font-light sm:text-4xl">{active.short}</h3>
                  <p className="mt-4 leading-relaxed text-charcoal/70">{active.long}</p>

                  <div className="mt-6 flex flex-wrap gap-2">
                    {active.suitableFor.map((s) => (
                      <span key={s} className="inline-flex items-center gap-1.5 rounded-full bg-sage-soft px-3.5 py-1.5 text-[0.8rem] font-semibold text-sage-deep">
                        <Check className="h-3.5 w-3.5" /> {s}
                      </span>
                    ))}
                  </div>

                  <div className="mt-auto flex flex-col gap-3 pt-8 sm:flex-row">
                    <button
                      onClick={() => setExpanded(expanded === active.id ? null : active.id)}
                      className="inline-flex flex-1 items-center justify-center gap-2 rounded-full border border-charcoal/20 px-6 py-3.5 text-sm font-bold transition-colors hover:border-charcoal hover:bg-charcoal hover:text-ivory"
                      aria-expanded={expanded === active.id}
                    >
                      Explore Treatment
                      <ArrowRight className={`h-4 w-4 transition-transform ${expanded === active.id ? "rotate-90" : ""}`} />
                    </button>
                    <a href="#booking" className="inline-flex flex-1 items-center justify-center gap-2 rounded-full bg-cocoa px-6 py-3.5 text-sm font-bold text-ivory transition-colors hover:bg-cocoa-deep">
                      Book this care <ArrowUpRight className="h-4 w-4" />
                    </a>
                  </div>

                  <AnimatePresence>
                    {expanded === active.id && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                        className="overflow-hidden"
                      >
                        <div className="mt-6 rounded-2xl bg-cream/70 p-6 text-sm leading-relaxed text-charcoal/75">
                          <p className="font-bold text-charcoal">What to expect</p>
                          <ol className="mt-3 space-y-2.5">
                            <li className="flex gap-3"><span className="font-serif text-cocoa">1.</span> Conversation & photographs — we understand your goals and baseline.</li>
                            <li className="flex gap-3"><span className="font-serif text-cocoa">2.</span> Digital assessment & options — you see choices with honest pros and timelines.</li>
                            <li className="flex gap-3"><span className="font-serif text-cocoa">3.</span> Written plan & estimate — transparent fees before anything begins.</li>
                            <li className="flex gap-3"><span className="font-serif text-cocoa">4.</span> Gentle treatment & aftercare — paced for comfort, reviewed together.</li>
                          </ol>
                          {active.priceHint && <p className="mt-4 border-t border-cocoa/15 pt-3 text-xs tracking-wide text-cocoa">◆ {active.priceHint}</p>}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </motion.article>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
