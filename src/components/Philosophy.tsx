import { ArrowUpRight } from "lucide-react";
import { Eyebrow, Reveal } from "./Reveal";

export default function Philosophy() {
  return (
    <section id="philosophy" className="relative overflow-hidden bg-ivory py-24 lg:py-36" aria-label="Our philosophy">
      <div className="pointer-events-none absolute -top-20 -right-24 font-serif text-[22rem] leading-none text-cocoa/[0.05] select-none" aria-hidden>A</div>
      <div className="mx-auto grid max-w-[1320px] gap-14 px-5 sm:px-8 lg:grid-cols-12 lg:gap-10 lg:px-10">
        {/* text */}
        <div className="lg:col-span-5 lg:pt-10">
          <Reveal><Eyebrow>Our Philosophy</Eyebrow></Reveal>
          <Reveal delay={0.1}>
            <h2 className="mt-6 font-serif text-4xl leading-[1.08] font-light text-balance text-charcoal sm:text-5xl lg:text-[3.6rem]">
              A different feeling. <span className="italic text-cocoa">A higher standard</span> of care.
            </h2>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="mt-7 text-[1.05rem] leading-relaxed text-charcoal/75">
              Dentistry is at its best when precision feels personal. At Aurel, modern digital planning meets unhurried conversation — so every recommendation is understood, every option is open, and every visit feels considered.
            </p>
            <p className="mt-5 leading-relaxed text-charcoal/65">
              Soft light instead of harsh fluorescents. Oak and stone instead of cold steel. Clear photographs, honest timelines and written estimates — because trust is built in the details long before treatment begins.
            </p>
          </Reveal>
          <Reveal delay={0.3}>
            <div className="mt-9 flex flex-wrap gap-8 border-t border-line pt-8">
              {[
                { n: "45+", l: "Minutes for first visits — never rushed" },
                { n: "3D", l: "Digital scans & visual planning" },
                { n: "1:1", l: "A clinician who listens first" },
              ].map((s) => (
                <div key={s.n}>
                  <p className="font-serif text-3xl text-cocoa">{s.n}</p>
                  <p className="mt-1 max-w-[160px] text-[0.82rem] leading-snug text-charcoal/60">{s.l}</p>
                </div>
              ))}
            </div>
            <a href="#experience" className="group mt-9 inline-flex items-center gap-2 text-sm font-bold text-cocoa">
              <span className="link-underline">Discover the Aurel experience</span>
              <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
          </Reveal>
        </div>

        {/* images asymmetric */}
        <div className="relative lg:col-span-7">
          <div className="grid grid-cols-12 gap-4 sm:gap-5">
            <Reveal className="col-span-7" delay={0.1}>
              <div className="grain relative overflow-hidden rounded-[28px] rounded-tr-[90px] shadow-[0_32px_64px_-24px_rgba(67,50,43,0.4)]">
                <img
                  src="https://images.pexels.com/photos/4269277/pexels-photo-4269277.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1000&w=800"
                  alt="Calm Aurel treatment suite in warm natural light"
                  className="img-warm aspect-[3/4] w-full object-cover transition-transform duration-[1.8s] hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute bottom-4 left-4 rounded-full bg-ivory/90 px-4 py-2 text-[0.7rem] font-bold tracking-[0.14em] text-cocoa backdrop-blur">TREATMENT SUITE · 02</div>
              </div>
            </Reveal>
            <div className="col-span-5 flex flex-col gap-4 sm:gap-5">
              <Reveal delay={0.2}>
                <div className="overflow-hidden rounded-[24px] shadow-[0_24px_48px_-20px_rgba(67,50,43,0.35)]">
                  <img
                    src="https://images.pexels.com/photos/7749055/pexels-photo-7749055.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200"
                    alt="Warm minimal studio lounge with natural textures"
                    className="img-warm aspect-[4/3] w-full object-cover transition-transform duration-[1.8s] hover:scale-105"
                    loading="lazy"
                  />
                </div>
              </Reveal>
              <Reveal delay={0.3} className="flex-1">
                <div className="flex h-full flex-col justify-between rounded-[24px] bg-cocoa p-7 text-ivory">
                  <p className="font-serif text-2xl leading-snug font-light italic">“We design appointments around people — not the other way round.”</p>
                  <div className="mt-6 flex items-center gap-3">
                    <img src="https://images.pexels.com/photos/5355860/pexels-photo-5355860.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=100&w=100" alt="" className="h-11 w-11 rounded-full object-cover ring-2 ring-ivory/30" loading="lazy" />
                    <div>
                      <p className="text-sm font-bold">Dr. Maya Ellis</p>
                      <p className="text-xs text-ivory/60">Lead Dentist · Demo profile</p>
                    </div>
                  </div>
                </div>
              </Reveal>
            </div>
          </div>
          {/* floating badge */}
          <Reveal delay={0.4} className="absolute -bottom-6 left-6 sm:left-10">
            <div className="flex items-center gap-4 rounded-2xl border border-line bg-ivory/95 py-3 pr-6 pl-3 shadow-xl backdrop-blur">
              <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-sage-soft font-serif text-xl text-sage-deep">✦</span>
              <div>
                <p className="text-sm font-extrabold text-charcoal">Calm-first dentistry</p>
                <p className="text-xs text-charcoal/60">Noise-cancelling · blankets · unhurried pace</p>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
