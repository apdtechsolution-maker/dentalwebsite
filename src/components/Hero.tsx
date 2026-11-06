import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { ArrowDown, ArrowUpRight, Star } from "lucide-react";
import { useRef } from "react";

export default function Hero() {
  const ref = useRef<HTMLElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", reduce ? "0%" : "18%"]);
  const fade = useTransform(scrollYProgress, [0, 0.7], [1, 0]);

  return (
    <section ref={ref} id="home" className="relative flex min-h-[100svh] flex-col overflow-hidden bg-charcoal" aria-label="Welcome to Aurel Dental Studio">
      {/* Background */}
      <motion.div style={{ y: bgY }} className="absolute inset-0" aria-hidden>
        <img
          src="https://images.pexels.com/photos/4269268/pexels-photo-4269268.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=1920"
          alt=""
          className="img-warm h-full w-full scale-105 object-cover"
          fetchPriority="high"
        />
        {/* warm cinematic grade */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#1E1B18]/85 via-[#1E1B18]/55 to-[#1E1B18]/25" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#1E1B18]/85 via-transparent to-[#1E1B18]/40" />
        <div className="absolute inset-0 bg-[#624B40]/20 mix-blend-multiply" />
      </motion.div>

      {/* content */}
      <motion.div style={{ opacity: fade }} className="relative mx-auto flex w-full max-w-[1320px] flex-1 flex-col justify-end px-5 pt-32 pb-10 sm:px-8 lg:px-10 lg:pb-14">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
          className="mb-6 inline-flex w-fit items-center gap-3 rounded-full border border-ivory/25 bg-ivory/10 py-2 pr-5 pl-2 backdrop-blur-md"
        >
          <span className="rounded-full bg-ivory px-3 py-1 text-[0.65rem] font-extrabold tracking-[0.18em] text-cocoa">WELCOME</span>
          <span className="text-[0.72rem] font-bold tracking-[0.22em] text-ivory/90">TO AUREL DENTAL STUDIO</span>
        </motion.div>

        <h1 className="max-w-4xl font-serif text-[2.9rem] leading-[1.02] font-light text-balance text-ivory sm:text-6xl lg:text-[5.4rem]">
          {["Beautiful smiles", "begin with", "thoughtful care."].map((line, i) => (
            <span key={line} className="block overflow-hidden">
              <motion.span
                className={`block ${i === 2 ? "text-[#E8DDC9] italic" : ""}`}
                initial={{ y: "110%" }}
                animate={{ y: 0 }}
                transition={{ duration: 1, delay: 0.25 + i * 0.12, ease: [0.22, 1, 0.36, 1] }}
              >
                {line}
              </motion.span>
            </span>
          ))}
        </h1>

        <div className="mt-8 flex flex-col gap-10 lg:flex-row lg:items-end lg:justify-between">
          <motion.p
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.7 }}
            className="max-w-xl text-lg leading-relaxed text-ivory/85"
          >
            Exceptional dentistry, a calmer experience, and care designed around you — from first conversation to final polish.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.85 }}
            className="flex flex-wrap items-center gap-4"
          >
            <a href="#booking" className="group inline-flex items-center gap-2 rounded-full bg-ivory px-7 py-4 text-sm font-bold text-charcoal transition-all hover:bg-cream hover:shadow-[0_16px_40px_-12px_rgba(246,242,235,0.5)]">
              Book a Consultation
              <span className="flex h-6 w-6 items-center justify-center rounded-full bg-cocoa text-ivory transition-transform group-hover:rotate-45"><ArrowUpRight className="h-3.5 w-3.5" /></span>
            </a>
            <a href="#treatments" className="inline-flex items-center gap-2 rounded-full border border-ivory/35 px-7 py-4 text-sm font-bold text-ivory backdrop-blur-sm transition-colors hover:bg-ivory/10">
              Explore Our Care
            </a>
          </motion.div>
        </div>

        {/* bottom strip */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.1 }}
          className="mt-12 flex flex-col gap-6 border-t border-ivory/15 pt-6 sm:flex-row sm:items-center sm:justify-between"
        >
          <div className="flex items-center gap-4">
            <div className="flex -space-x-3">
              {[
                "https://images.pexels.com/photos/3762400/pexels-photo-3762400.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=100&w=100",
                "https://images.pexels.com/photos/6171662/pexels-photo-6171662.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=100&w=100",
                "https://images.pexels.com/photos/33669405/pexels-photo-33669405.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=100&w=100",
              ].map((s) => (
                <img key={s} src={s} alt="" className="h-10 w-10 rounded-full border-2 border-charcoal object-cover" loading="lazy" />
              ))}
            </div>
            <div className="text-sm">
              <div className="flex items-center gap-1 text-ivory" aria-label="Sample rating placeholder">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="h-3.5 w-3.5 fill-[#D8C39A] text-[#D8C39A]" />
                ))}
              </div>
              <p className="mt-1 text-ivory/70">Calm visits · Transparent plans · <span className="text-ivory/50 italic">Demo content</span></p>
            </div>
          </div>

          <div className="hidden items-center gap-8 text-[0.72rem] font-bold tracking-[0.18em] text-ivory/60 md:flex">
            <span>PRIVATE DENTISTRY</span>
            <span className="h-8 w-px bg-ivory/15" aria-hidden />
            <span>TRANSPARENT FEES</span>
            <span className="h-8 w-px bg-ivory/15" aria-hidden />
            <span>CALM SPACE</span>
          </div>

          <a href="#philosophy" className="group flex items-center gap-3 text-[0.72rem] font-bold tracking-[0.22em] text-ivory/70 hover:text-ivory" aria-label="Scroll to philosophy">
            SCROLL
            <span className="flex h-10 w-10 items-center justify-center rounded-full border border-ivory/30 transition-colors group-hover:bg-ivory group-hover:text-charcoal">
              <ArrowDown className="h-4 w-4 animate-bounce" />
            </span>
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
}
