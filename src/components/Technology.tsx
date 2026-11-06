import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { Eyebrow, Reveal } from "./Reveal";

const features = [
  {
    n: "01",
    title: "3D digital scans, no messy moulds",
    copy: "A small wand captures your smile in minutes. See your teeth on screen immediately and follow along as we plan — comfortable, fast and remarkably precise.",
    img: "https://images.pexels.com/photos/6629415/pexels-photo-6629415.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200",
  },
  {
    n: "02",
    title: "Digital imaging with a light touch",
    copy: "Low-dose imaging shows us roots, bone and bite in fine detail, so recommendations rest on evidence — not guesswork. We only image when clinically useful.",
    img: "https://images.pexels.com/photos/6502543/pexels-photo-6502543.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200",
  },
  {
    n: "03",
    title: "Preview before you commit",
    copy: "Photographs and digital mock-ups let you see the direction of whitening, veneers or aligners early. Adjust shape and shade together before anything definitive.",
    img: "https://images.pexels.com/photos/7800666/pexels-photo-7800666.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=800",
  },
  {
    n: "04",
    title: "Comfort woven into the room",
    copy: "Weighted blankets, noise-softening sound, warm light and unhurried pacing. Example amenities shown — confirm equipment and comforts with the real clinic.",
    img: "https://images.pexels.com/photos/4269277/pexels-photo-4269277.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1000&w=800",
  },
];

export default function Technology() {
  const [active, setActive] = useState(0);
  const f = features[active];

  return (
    <section className="relative overflow-hidden bg-ivory py-24 lg:py-36" aria-label="Technology and comfort">
      <div className="mx-auto grid max-w-[1320px] gap-12 px-5 sm:px-8 lg:grid-cols-2 lg:gap-16 lg:px-10">
        <div>
          <Reveal><Eyebrow>Technology & Comfort</Eyebrow></Reveal>
          <Reveal delay={0.1}>
            <h2 className="mt-6 font-serif text-4xl leading-[1.06] font-light text-balance text-charcoal sm:text-5xl">
              Modern tools. <span className="italic text-cocoa">Human pace.</span>
            </h2>
            <p className="mt-5 max-w-lg text-charcoal/65">Example capabilities presented for demonstration — equipment and amenities should be confirmed for a real client deployment.</p>
          </Reveal>

          <div className="mt-10 flex flex-col">
            {features.map((feat, i) => {
              const isActive = i === active;
              return (
                <Reveal key={feat.n} delay={i * 0.06}>
                  <button
                    onClick={() => setActive(i)}
                    onMouseEnter={() => setActive(i)}
                    aria-expanded={isActive}
                    className={`group flex w-full gap-6 border-t border-cocoa/15 py-7 text-left transition-colors last:border-b ${isActive ? "" : "opacity-70 hover:opacity-100"}`}
                  >
                    <span className={`font-serif text-sm ${isActive ? "text-cocoa" : "text-charcoal/40"}`}>{feat.n}</span>
                    <span className="flex-1">
                      <span className={`block font-serif text-2xl leading-snug font-light transition-transform duration-300 ${isActive ? "text-charcoal" : "text-charcoal/80"}`}>{feat.title}</span>
                      <AnimatePresence initial={false}>
                        {isActive && (
                          <motion.span
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                            className="block overflow-hidden"
                          >
                            <span className="mt-3 block max-w-md text-[0.95rem] leading-relaxed text-charcoal/65">{feat.copy}</span>
                          </motion.span>
                        )}
                      </AnimatePresence>
                    </span>
                    <span className={`mt-1 hidden h-2.5 w-2.5 shrink-0 rounded-full transition-colors sm:block ${isActive ? "bg-cocoa" : "bg-cocoa/20"}`} aria-hidden />
                  </button>
                </Reveal>
              );
            })}
          </div>
        </div>

        <Reveal delay={0.2} className="relative">
          <div className="lg:sticky lg:top-28">
            <div className="grain relative overflow-hidden rounded-[32px] rounded-tl-[90px] shadow-[0_40px_80px_-32px_rgba(67,50,43,0.5)]">
              <AnimatePresence mode="wait">
                <motion.img
                  key={f.n}
                  src={f.img}
                  alt=""
                  initial={{ opacity: 0, scale: 1.04 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.6 }}
                  className="img-warm aspect-[4/5] w-full object-cover"
                  loading="lazy"
                />
              </AnimatePresence>
              <div className="absolute inset-0 bg-gradient-to-t from-charcoal/55 via-transparent to-transparent" />
              <div className="absolute right-6 bottom-6 left-6 flex items-center justify-between rounded-2xl bg-ivory/90 p-5 backdrop-blur-md">
                <div>
                  <p className="text-[0.7rem] font-extrabold tracking-[0.2em] text-cocoa">{f.n} — {f.title.split(",")[0].toUpperCase()}</p>
                  <p className="mt-1 font-serif text-lg text-charcoal italic">Designed for calm, built for precision</p>
                </div>
                <span className="font-serif text-4xl text-cocoa/30">{f.n}</span>
              </div>
            </div>
            <p className="mt-4 text-center text-xs text-charcoal/45 italic">Illustrative imagery — confirm actual surgery equipment on deployment.</p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
