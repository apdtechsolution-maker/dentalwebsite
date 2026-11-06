import { useRef, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Eyebrow, Reveal } from "./Reveal";

const items = [
  {
    n: "01",
    title: "Care that listens",
    copy: "Your first visit starts with conversation, not a chair. We learn what matters to you — comfort, timing, budget, long-term goals — and shape everything around it.",
    img: "https://images.pexels.com/photos/6627325/pexels-photo-6627325.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    alt: "Clinician listening to a patient",
  },
  {
    n: "02",
    title: "Precision with purpose",
    copy: "Digital scans, magnified detail and photographic planning mean smaller preparations, better fits and fewer surprises. Technology serves judgment — never replaces it.",
    img: "https://images.pexels.com/photos/6502543/pexels-photo-6502543.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200",
    alt: "Precise modern dental instruments",
  },
  {
    n: "03",
    title: "Comfort in every detail",
    copy: "Warm blankets, noise-softening headphones, gentle pacing and clear stop-signals. Nervous patients tell us the atmosphere alone lowers their shoulders.",
    img: "https://images.pexels.com/photos/4269268/pexels-photo-4269268.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=1920",
    alt: "Serene treatment space",
  },
  {
    n: "04",
    title: "Clear guidance, always",
    copy: "Photographs of your own smile, plain-language options and written estimates before anything begins. You will always know the why, the what-next and the what-if.",
    img: "https://images.pexels.com/photos/7800666/pexels-photo-7800666.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=800",
    alt: "Team reviewing a digital treatment plan",
  },
  {
    n: "05",
    title: "Your smile, for the long term",
    copy: "We plan conservatively and maintain proactively — protecting enamel, gums and bite so today's work still looks and feels right in ten years.",
    img: "https://images.pexels.com/photos/6171662/pexels-photo-6171662.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200",
    alt: "Natural lasting smile",
  },
];

export default function WhyChoose() {
  const stickyRef = useRef<HTMLDivElement>(null);
  const [activeImg, setActiveImg] = useState(0);
  const { scrollYProgress } = useScroll({ target: stickyRef, offset: ["start center", "end center"] });
  const imgY = useTransform(scrollYProgress, [0, 1], [0, 60]);

  return (
    <section className="relative bg-cream/60 py-24 lg:py-36" aria-label="Why choose Aurel">
      <div className="mx-auto max-w-[1320px] px-5 sm:px-8 lg:px-10">
        <div className="max-w-2xl">
          <Reveal><Eyebrow>Why choose Aurel</Eyebrow></Reveal>
          <Reveal delay={0.1}>
            <h2 className="mt-6 font-serif text-4xl leading-[1.06] font-light text-charcoal sm:text-5xl">
              Considered at <span className="italic text-cocoa">every step.</span>
            </h2>
            <p className="mt-5 text-charcoal/65">Five quiet promises shape each appointment — from how we greet you to how we plan for decades ahead.</p>
          </Reveal>
        </div>

        <div ref={stickyRef} className="mt-14 grid gap-10 lg:grid-cols-2 lg:gap-16">
          {/* sticky visual */}
          <div className="relative hidden lg:block">
            <div className="sticky top-28 overflow-hidden rounded-[32px] shadow-[0_32px_64px_-24px_rgba(67,50,43,0.45)]">
              <motion.div style={{ y: imgY }} className="relative aspect-[4/5]">
                {items.map((it, i) => (
                  <img
                    key={it.n}
                    src={it.img}
                    alt={it.alt}
                    loading="lazy"
                    className={`img-warm absolute inset-0 h-full w-full object-cover transition-opacity duration-700 ${i === activeImg ? "opacity-100" : "opacity-0"}`}
                  />
                ))}
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal/50 via-transparent to-transparent" />
                <div className="absolute bottom-6 left-6 right-6 flex items-end justify-between text-ivory">
                  <div>
                    <p className="text-[0.7rem] font-bold tracking-[0.22em] text-ivory/70">{items[activeImg].n} — 05</p>
                    <p className="mt-1 font-serif text-2xl italic">{items[activeImg].title}</p>
                  </div>
                  <span className="rounded-full bg-ivory/20 px-3 py-1 text-xs backdrop-blur">{activeImg + 1} / 5</span>
                </div>
              </motion.div>
            </div>
          </div>

          {/* scrolling content */}
          <div className="flex flex-col">
            {items.map((it, i) => (
              <motion.div
                key={it.n}
                onViewportEnter={() => setActiveImg(i)}
                viewport={{ margin: "-40% 0px -40% 0px" }}
                className={`group border-t border-cocoa/15 py-10 transition-colors last:border-b ${i === activeImg ? "" : ""}`}
              >
                <Reveal>
                  <div className="flex items-baseline gap-5">
                    <span className={`font-serif text-sm tracking-widest ${i === activeImg ? "text-cocoa" : "text-charcoal/40"}`}>{it.n}</span>
                    <h3 className="font-serif text-3xl font-light text-charcoal transition-transform duration-500 group-hover:translate-x-1 sm:text-4xl">{it.title}</h3>
                  </div>
                  <p className="mt-4 max-w-md leading-relaxed text-charcoal/65">{it.copy}</p>
                  {/* mobile image */}
                  <div className="mt-6 overflow-hidden rounded-2xl lg:hidden">
                    <img src={it.img} alt={it.alt} loading="lazy" className="img-warm aspect-[16/10] w-full object-cover" />
                  </div>
                  <div className="mt-6 flex items-center gap-2">
                    <span className={`h-1 rounded-full transition-all duration-500 ${i === activeImg ? "w-14 bg-cocoa" : "w-7 bg-cocoa/20"}`} aria-hidden />
                    <span className="text-xs font-bold tracking-[0.18em] text-cocoa/60">AUREL STANDARD</span>
                  </div>
                </Reveal>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
