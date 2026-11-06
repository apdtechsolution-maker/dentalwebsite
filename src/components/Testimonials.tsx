import { AnimatePresence, motion } from "framer-motion";
import { ArrowLeft, ArrowRight, Quote } from "lucide-react";
import { useCallback, useEffect, useState } from "react";
import { siteConfig } from "../config/site";
import { Eyebrow, Reveal } from "./Reveal";

export default function Testimonials() {
  const [index, setIndex] = useState(0);
  const [dir, setDir] = useState(1);
  const total = siteConfig.testimonials.length;

  const go = useCallback((d: 1 | -1) => {
    setDir(d);
    setIndex((i) => (i + d + total) % total);
  }, [total]);

  useEffect(() => {
    const t = setInterval(() => go(1), 7000);
    return () => clearInterval(t);
  }, [go, index]);

  const item = siteConfig.testimonials[index];

  return (
    <section className="relative overflow-hidden bg-ivory py-24 lg:py-36" aria-label="Patient stories">
      <div className="mx-auto max-w-[1080px] px-5 sm:px-8">
        <div className="text-center">
          <Reveal><div className="flex justify-center"><Eyebrow>Patient Stories</Eyebrow></div></Reveal>
          <Reveal delay={0.1}>
            <h2 className="mt-6 font-serif text-4xl leading-tight font-light text-charcoal sm:text-5xl">
              Kind words, <span className="italic text-cocoa">calmly earned.</span>
            </h2>
          </Reveal>
        </div>

        <Reveal delay={0.15}>
          <div className="relative mt-12 rounded-[32px] border border-cocoa/12 bg-cream/50 px-7 py-12 text-center sm:px-14 lg:px-20">
            <span className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-cocoa text-ivory" aria-hidden>
              <Quote className="h-6 w-6 fill-current" />
            </span>
            <div className="relative mt-8 min-h-[190px] sm:min-h-[150px]" aria-live="polite">
              <AnimatePresence mode="wait" custom={dir}>
                <motion.figure
                  key={index}
                  custom={dir}
                  initial={{ opacity: 0, x: 40 * dir }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -40 * dir }}
                  transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                >
                  <blockquote className="mx-auto max-w-2xl font-serif text-2xl leading-snug font-light text-balance text-charcoal sm:text-[1.9rem]">
                    “{item.quote}”
                  </blockquote>
                  <figcaption className="mt-6">
                    <p className="text-sm font-extrabold tracking-wide text-cocoa">{item.name}</p>
                    <p className="mt-1 text-xs tracking-[0.14em] text-charcoal/50 uppercase">{item.context}</p>
                  </figcaption>
                </motion.figure>
              </AnimatePresence>
            </div>

            <div className="mt-10 flex items-center justify-center gap-4">
              <button onClick={() => go(-1)} aria-label="Previous story" className="flex h-12 w-12 items-center justify-center rounded-full border border-cocoa/20 text-cocoa transition-all hover:bg-cocoa hover:text-ivory">
                <ArrowLeft className="h-4 w-4" />
              </button>
              <div className="flex gap-2" role="tablist" aria-label="Choose story">
                {siteConfig.testimonials.map((_, i) => (
                  <button
                    key={i}
                    role="tab"
                    aria-selected={i === index}
                    aria-label={`Story ${i + 1}`}
                    onClick={() => { setDir(i > index ? 1 : -1); setIndex(i); }}
                    className={`h-2 rounded-full transition-all duration-300 ${i === index ? "w-10 bg-cocoa" : "w-2 bg-cocoa/25 hover:bg-cocoa/50"}`}
                  />
                ))}
              </div>
              <button onClick={() => go(1)} aria-label="Next story" className="flex h-12 w-12 items-center justify-center rounded-full border border-cocoa/20 text-cocoa transition-all hover:bg-cocoa hover:text-ivory">
                <ArrowRight className="h-4 w-4" />
              </button>
            </div>
          </div>
        </Reveal>
        <p className="mx-auto mt-6 max-w-xl text-center text-xs leading-relaxed text-charcoal/50">
          Sample patient feedback — replace with verified reviews before launch. Do not display ratings, counts or platform badges until they are genuine and verifiable.
        </p>
      </div>
    </section>
  );
}
