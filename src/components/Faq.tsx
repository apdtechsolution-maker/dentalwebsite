import { AnimatePresence, motion } from "framer-motion";
import { Plus } from "lucide-react";
import { useState } from "react";
import { siteConfig } from "../config/site";
import { Eyebrow, Reveal } from "./Reveal";

export default function Faq() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section className="bg-cream/60 py-24 lg:py-32" aria-label="First visit and FAQs">
      <div className="mx-auto grid max-w-[1320px] gap-12 px-5 sm:px-8 lg:grid-cols-12 lg:px-10">
        <div className="lg:col-span-5">
          <Reveal><Eyebrow>Your First Visit · FAQ</Eyebrow></Reveal>
          <Reveal delay={0.1}>
            <h2 className="mt-6 font-serif text-4xl leading-[1.08] font-light text-charcoal sm:text-5xl">
              Everything feels easier <span className="italic text-cocoa">when you know what to expect.</span>
            </h2>
            <p className="mt-5 text-charcoal/65">Practical answers in plain language. Still curious? Ask us at your consultation — we love thorough questions.</p>
          </Reveal>
          <Reveal delay={0.2}>
            <div className="mt-8 overflow-hidden rounded-3xl shadow-lg">
              <img src="https://images.pexels.com/photos/4269268/pexels-photo-4269268.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=1920" alt="Welcoming studio interior" loading="lazy" className="img-warm aspect-[16/10] w-full object-cover" />
            </div>
            <div className="mt-5 rounded-2xl bg-cocoa p-6 text-ivory">
              <p className="font-serif text-xl italic">First visits are unhurried — 45 to 60 minutes, conversation first.</p>
              <a href="#booking" className="mt-4 inline-block rounded-full bg-ivory px-5 py-2.5 text-sm font-bold text-charcoal transition-colors hover:bg-cream">Request yours</a>
            </div>
          </Reveal>
        </div>

        <div className="lg:col-span-7">
          <div className="flex flex-col gap-4">
            {siteConfig.faqs.map((f, i) => {
              const isOpen = open === i;
              return (
                <Reveal key={f.q} delay={i * 0.06}>
                  <div className={`overflow-hidden rounded-[20px] border transition-all duration-300 ${isOpen ? "border-cocoa/25 bg-ivory shadow-[0_20px_40px_-20px_rgba(67,50,43,0.35)]" : "border-cocoa/12 bg-ivory/70 hover:border-cocoa/25 hover:bg-ivory"}`}>
                    <button
                      onClick={() => setOpen(isOpen ? null : i)}
                      aria-expanded={isOpen}
                      aria-controls={`faq-panel-${i}`}
                      className="flex w-full items-center justify-between gap-5 px-6 py-6 text-left sm:px-8"
                    >
                      <span className="flex items-center gap-4">
                        <span className={`font-serif text-sm ${isOpen ? "text-cocoa" : "text-charcoal/40"}`}>{String(i + 1).padStart(2, "0")}</span>
                        <span className="font-serif text-xl leading-snug text-charcoal sm:text-[1.35rem]">{f.q}</span>
                      </span>
                      <span className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-full transition-all duration-300 ${isOpen ? "rotate-45 bg-cocoa text-ivory" : "bg-cream text-cocoa"}`}>
                        <Plus className="h-5 w-5" />
                      </span>
                    </button>
                    <AnimatePresence initial={false}>
                      {isOpen && (
                        <motion.div
                          id={`faq-panel-${i}`}
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                          className="overflow-hidden"
                        >
                          <p className="px-6 pb-7 pl-[3.7rem] leading-relaxed text-charcoal/70 sm:px-8 sm:pl-[4.2rem]">{f.a}</p>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
