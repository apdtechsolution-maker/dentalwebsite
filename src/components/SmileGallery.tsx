import { AnimatePresence, motion } from "framer-motion";
import { ArrowLeft, ArrowRight, MoveHorizontal } from "lucide-react";
import { useCallback, useEffect, useRef, useState } from "react";
import { siteConfig } from "../config/site";
import { Eyebrow, Reveal } from "./Reveal";

function clamp(v: number, min = 2, max = 98) {
  return Math.min(max, Math.max(min, v));
}

export default function SmileGallery() {
  const [caseIndex, setCaseIndex] = useState(0);
  const [pos, setPos] = useState(50);
  const [hasInteracted, setHasInteracted] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const draggingRef = useRef(false);
  const activeCase = siteConfig.smileCases[caseIndex];

  const updateFromClientX = useCallback((clientX: number) => {
    const el = containerRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const pct = ((clientX - rect.left) / rect.width) * 100;
    setPos(clamp(pct));
  }, []);

  const onPointerDown = (e: React.PointerEvent) => {
    draggingRef.current = true;
    setHasInteracted(true);
    (e.currentTarget as HTMLElement).setPointerCapture?.(e.pointerId);
    updateFromClientX(e.clientX);
  };
  const onPointerMove = (e: React.PointerEvent) => {
    if (!draggingRef.current) return;
    e.preventDefault();
    updateFromClientX(e.clientX);
  };
  const endDrag = () => {
    draggingRef.current = false;
  };

  const onKeyDown = (e: React.KeyboardEvent) => {
    const step = e.shiftKey ? 10 : 3;
    if (e.key === "ArrowLeft" || e.key === "ArrowDown") {
      e.preventDefault();
      setPos((p) => clamp(p - step));
      setHasInteracted(true);
    } else if (e.key === "ArrowRight" || e.key === "ArrowUp") {
      e.preventDefault();
      setPos((p) => clamp(p + step));
      setHasInteracted(true);
    } else if (e.key === "Home") {
      e.preventDefault();
      setPos(2);
    } else if (e.key === "End") {
      e.preventDefault();
      setPos(98);
    }
  };

  const goTo = useCallback(
    (dir: 1 | -1) => {
      setCaseIndex((i) => (i + dir + siteConfig.smileCases.length) % siteConfig.smileCases.length);
    },
    []
  );

  useEffect(() => {
    setPos(50);
    setHasInteracted(false);
  }, [caseIndex]);

  // reset handled on case change; keyboard is on the slider handle itself
  useEffect(() => {
    // no global keys needed — keeps page scroll undisturbed
  }, []);

  return (
    <section id="gallery" className="relative overflow-hidden bg-ivory py-24 lg:py-36" aria-label="Smile gallery">
      {/* backdrop word */}
      <div className="pointer-events-none absolute top-10 left-1/2 -translate-x-1/2 font-serif text-[18vw] leading-none whitespace-nowrap text-cocoa/[0.04] select-none" aria-hidden>
        Smile
      </div>

      <div className="relative mx-auto max-w-[1320px] px-5 sm:px-8 lg:px-10">
        <div className="mx-auto max-w-3xl text-center">
          <Reveal><div className="flex justify-center"><Eyebrow>Smile Gallery</Eyebrow></div></Reveal>
          <Reveal delay={0.1}>
            <h2 className="mt-6 font-serif text-4xl leading-[1.06] font-light text-balance text-charcoal sm:text-5xl lg:text-[3.8rem]">
              See the difference <span className="italic text-cocoa">a smile</span> can make.
            </h2>
            <p className="mx-auto mt-5 max-w-xl text-charcoal/65">Explore example smile transformations through our interactive gallery. Drag the handle to compare.</p>
          </Reveal>
          <Reveal delay={0.2}>
            <div className="mt-8 flex flex-wrap justify-center gap-2.5" role="tablist" aria-label="Smile transformation cases">
              {siteConfig.smileCases.map((c, i) => (
                <button
                  key={c.id}
                  role="tab"
                  aria-selected={i === caseIndex}
                  onClick={() => setCaseIndex(i)}
                  className={`group flex items-center gap-2.5 rounded-full px-5 py-3 text-[0.82rem] font-bold transition-all ${
                    i === caseIndex
                      ? "bg-cocoa text-ivory shadow-[0_14px_30px_-12px_rgba(98,75,64,0.7)]"
                      : "border border-cocoa/20 bg-ivory text-charcoal/70 hover:border-cocoa/50 hover:text-charcoal"
                  }`}
                >
                  <span className={`font-serif text-xs ${i === caseIndex ? "text-ivory/70" : "text-cocoa/60"}`}>{c.index}</span>
                  {c.title}
                </button>
              ))}
            </div>
          </Reveal>
        </div>

        <div className="mt-12 grid items-stretch gap-6 lg:grid-cols-12">
          {/* Slider */}
          <Reveal className="lg:col-span-8">
            <div className="relative">
              <div
                ref={containerRef}
                id="smile-slider"
                className="ba-container grain relative aspect-[4/3] w-full overflow-hidden rounded-[28px] bg-cream shadow-[0_40px_80px_-32px_rgba(67,50,43,0.5)] ring-1 ring-cocoa/10 select-none sm:aspect-[16/10]"
                onPointerDown={onPointerDown}
                onPointerMove={onPointerMove}
                onPointerUp={endDrag}
                onPointerCancel={endDrag}
                onPointerLeave={endDrag}
              >
                {/* AFTER — bottom layer, full */}
                <AnimatePresence mode="wait">
                  <motion.div key={activeCase.id + "-after"} initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.4 }} className="absolute inset-0">
                    <img
                      src={activeCase.image}
                      alt={activeCase.imageAlt + " — after illustration"}
                      draggable={false}
                      className="h-full w-full object-cover"
                      style={{ filter: "brightness(1.04) saturate(1.1) contrast(1.03)" }}
                    />
                    {/* subtle warm grade for after */}
                    <div className="absolute inset-0 bg-gradient-to-t from-charcoal/10 via-transparent to-transparent" aria-hidden />
                  </motion.div>
                </AnimatePresence>

                {/* BEFORE — top layer, clipped to left */}
                <div
                  className="absolute inset-0"
                  style={{ clipPath: `inset(0 ${100 - pos}% 0 0)`, willChange: "clip-path" }}
                  aria-hidden={false}
                >
                  <img
                    src={activeCase.image}
                    alt=""
                    draggable={false}
                    aria-hidden
                    className="h-full w-full object-cover"
                    style={{ filter: "sepia(0.42) saturate(0.72) brightness(0.86) contrast(0.94)" }}
                  />
                  <div className="absolute inset-0 bg-[#5a4a28]/15 mix-blend-multiply" aria-hidden />
                </div>

                {/* labels */}
                <span className="pointer-events-none absolute top-5 left-5 z-10 rounded-full bg-charcoal/80 px-4 py-1.5 text-[0.7rem] font-extrabold tracking-[0.2em] text-ivory backdrop-blur-md">
                  BEFORE
                </span>
                <span className="pointer-events-none absolute top-5 right-5 z-10 rounded-full bg-ivory/90 px-4 py-1.5 text-[0.7rem] font-extrabold tracking-[0.2em] text-cocoa backdrop-blur-md">
                  AFTER
                </span>

                {/* divider line */}
                <div className="pointer-events-none absolute inset-y-0 z-10" style={{ left: `${pos}%` }} aria-hidden>
                  <div className="absolute inset-y-0 -translate-x-1/2">
                    <div className="h-full w-[2px] bg-ivory shadow-[0_0_12px_rgba(0,0,0,0.4)]" />
                  </div>
                </div>

                {/* handle */}
                <div className="absolute inset-y-0 z-20 flex items-center" style={{ left: `${pos}%` }}>
                  <button
                    className="ba-handle -translate-x-1/2 focus:outline-none"
                    role="slider"
                    aria-label={`Compare before and after for ${activeCase.title}. Use arrow keys to adjust.`}
                    aria-valuemin={0}
                    aria-valuemax={100}
                    aria-valuenow={Math.round(pos)}
                    aria-valuetext={`${Math.round(pos)} percent before, ${Math.round(100 - pos)} percent after`}
                    onKeyDown={onKeyDown}
                    onPointerDown={(e) => e.stopPropagation()}
                    style={{ touchAction: "none" }}
                  >
                    <span className="flex h-14 w-14 items-center justify-center rounded-full bg-ivory text-cocoa shadow-[0_12px_32px_-8px_rgba(0,0,0,0.5)] ring-4 ring-charcoal/15 transition-transform hover:scale-105 focus-visible:ring-4 focus-visible:ring-cocoa sm:h-16 sm:w-16">
                      <MoveHorizontal className="h-6 w-6" />
                    </span>
                    <span className="sr-only">Drag to reveal before and after</span>
                  </button>
                </div>

                {/* hint */}
                {!hasInteracted && (
                  <div className="pointer-events-none absolute bottom-5 left-1/2 z-10 -translate-x-1/2">
                    <span className="flex items-center gap-2 rounded-full bg-charcoal/75 px-4 py-2 text-xs font-bold tracking-wide text-ivory backdrop-blur-md">
                      <MoveHorizontal className="h-4 w-4" /> Drag to compare
                    </span>
                  </div>
                )}

                {/* bottom shade meter */}
                <div className="pointer-events-none absolute right-5 bottom-5 left-5 z-10 hidden items-center gap-3 sm:flex" aria-hidden>
                  <div className="h-1 flex-1 overflow-hidden rounded-full bg-ivory/30 backdrop-blur">
                    <div className="h-full rounded-full bg-ivory transition-[width] duration-75" style={{ width: `${pos}%` }} />
                  </div>
                </div>
              </div>

              {/* controls row */}
              <div className="mt-5 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <button onClick={() => goTo(-1)} aria-label="Previous case" className="flex h-11 w-11 items-center justify-center rounded-full border border-cocoa/20 text-cocoa transition-all hover:bg-cocoa hover:text-ivory">
                    <ArrowLeft className="h-4 w-4" />
                  </button>
                  <button onClick={() => goTo(1)} aria-label="Next case" className="flex h-11 w-11 items-center justify-center rounded-full border border-cocoa/20 text-cocoa transition-all hover:bg-cocoa hover:text-ivory">
                    <ArrowRight className="h-4 w-4" />
                  </button>
                  <span className="ml-2 font-serif text-sm text-charcoal/60">{activeCase.index} / 03</span>
                </div>
                {/* accessible range fallback */}
                <label className="flex items-center gap-3 text-xs font-bold tracking-widest text-charcoal/50 uppercase">
                  Adjust
                  <input
                    type="range"
                    min={0}
                    max={100}
                    value={Math.round(pos)}
                    onChange={(e) => {
                      setPos(clamp(Number(e.target.value)));
                      setHasInteracted(true);
                    }}
                    aria-label="Reveal amount"
                    className="h-1 w-28 accent-[#624B40] sm:w-40"
                  />
                </label>
              </div>
            </div>
          </Reveal>

          {/* Info panel */}
          <Reveal delay={0.15} className="lg:col-span-4">
            <AnimatePresence mode="wait">
              <motion.aside
                key={activeCase.id}
                initial={{ opacity: 0, x: 24 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -16 }}
                transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
                className="flex h-full flex-col rounded-[28px] bg-charcoal p-8 text-ivory lg:p-9"
              >
                <p className="eyebrow text-sage">{activeCase.tag}</p>
                <h3 className="mt-4 font-serif text-3xl leading-tight font-light">{activeCase.title}</h3>
                <p className="mt-4 text-[0.95rem] leading-relaxed text-ivory/70">{activeCase.description}</p>

                <div className="mt-6 space-y-3 border-t border-ivory/12 pt-6 text-sm">
                  <div className="flex justify-between gap-4">
                    <span className="text-ivory/50">Treatment</span>
                    <span className="text-right font-semibold">{activeCase.detail}</span>
                  </div>
                  <div className="flex justify-between gap-4">
                    <span className="text-ivory/50">Typical timeline</span>
                    <span className="font-semibold">{activeCase.duration}</span>
                  </div>
                  <div className="flex justify-between gap-4">
                    <span className="text-ivory/50">Preview</span>
                    <span className="font-semibold">Digital preview first</span>
                  </div>
                </div>

                <div className="mt-auto pt-8">
                  <a href="#booking" className="flex w-full items-center justify-center gap-2 rounded-full bg-ivory px-6 py-3.5 text-sm font-bold text-charcoal transition-colors hover:bg-cream">
                    Start with a consultation
                  </a>
                  <p className="mt-4 text-center text-[0.72rem] leading-relaxed text-ivory/45">
                    Illustrative examples only.<br />Individual results vary.
                  </p>
                </div>
              </motion.aside>
            </AnimatePresence>
          </Reveal>
        </div>

        <Reveal delay={0.1}>
          <p className="mx-auto mt-8 max-w-2xl text-center text-xs leading-relaxed text-charcoal/50">
            Demonstration gallery — paired images use consistent framing with illustrative tone enhancement for preview. No implication of actual patient results. Replace with verified, consented cases before launch.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
