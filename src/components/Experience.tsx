import { Eyebrow, Reveal } from "./Reveal";

const steps = [
  {
    n: "01",
    title: "Begin with a conversation",
    copy: "Tell us what brings you in — a concern, a wish, or simply time for a check-up. We listen, photograph and understand before we suggest.",
    img: "https://images.pexels.com/photos/6627325/pexels-photo-6627325.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
  },
  {
    n: "02",
    title: "Explore your options",
    copy: "See your smile on screen, compare conservative and comprehensive paths, and ask everything. No jargon, no pressure — just clarity.",
    img: "https://images.pexels.com/photos/7800666/pexels-photo-7800666.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=800",
  },
  {
    n: "03",
    title: "Plan your care",
    copy: "Approve a sequenced plan with written estimates and honest timelines. We schedule around your life and pace treatment for comfort.",
    img: "https://images.pexels.com/photos/19879740/pexels-photo-19879740.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
  },
  {
    n: "04",
    title: "Feel confident in your smile",
    copy: "Gentle treatment, careful review and simple aftercare. Then easy recalls keep your result healthy, bright and unmistakably yours.",
    img: "https://images.pexels.com/photos/33669405/pexels-photo-33669405.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200",
  },
];

export default function Experience() {
  return (
    <section id="experience" className="relative bg-charcoal py-24 text-ivory lg:py-36" aria-label="Patient experience">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(50%_35%_at_50%_0%,rgba(246,242,235,0.08),transparent)]" aria-hidden />
      <div className="relative mx-auto max-w-[1320px] px-5 sm:px-8 lg:px-10">
        <div className="mx-auto max-w-2xl text-center">
          <Reveal><div className="flex justify-center"><Eyebrow light>The Patient Experience</Eyebrow></div></Reveal>
          <Reveal delay={0.1}>
            <h2 className="mt-6 font-serif text-4xl leading-[1.06] font-light text-balance sm:text-5xl">
              Four calm steps to a <span className="italic text-[#E8DDC9]">confident smile.</span>
            </h2>
          </Reveal>
        </div>

        <div className="relative mt-16">
          {/* vertical line */}
          <div className="absolute top-0 bottom-0 left-[27px] w-px bg-ivory/15 sm:left-1/2" aria-hidden />
          <div className="flex flex-col gap-12">
            {steps.map((s, i) => {
              const imageLeft = i % 2 === 0;
              return (
                <Reveal key={s.n}>
                  <div className="relative flex flex-col gap-6 sm:grid sm:grid-cols-2 sm:gap-14">
                    {/* dot */}
                    <span className="absolute top-2 left-[27px] z-10 flex h-14 w-14 -translate-x-1/2 items-center justify-center rounded-full bg-ivory font-serif text-lg text-cocoa shadow-xl sm:left-1/2" aria-hidden>
                      {s.n}
                    </span>
                    {/* left column */}
                    <div className="pl-20 sm:pl-0 sm:pr-16 sm:text-right">
                      {imageLeft ? (
                        <div className="overflow-hidden rounded-3xl">
                          <img src={s.img} alt="" loading="lazy" className="img-warm aspect-[16/10] w-full object-cover transition-transform duration-[1.6s] hover:scale-105" />
                        </div>
                      ) : (
                        <div className="sm:pt-2">
                          <p className="eyebrow text-sage sm:justify-end">STEP {s.n}</p>
                          <h3 className="mt-3 font-serif text-3xl font-light">{s.title}</h3>
                          <p className="mt-3 max-w-md leading-relaxed text-ivory/65 sm:ml-auto">{s.copy}</p>
                        </div>
                      )}
                    </div>
                    {/* right column */}
                    <div className="pl-20 sm:pl-16 sm:pr-0">
                      {imageLeft ? (
                        <div className="sm:pt-2 sm:text-left">
                          <p className="eyebrow text-sage">STEP {s.n}</p>
                          <h3 className="mt-3 font-serif text-3xl font-light">{s.title}</h3>
                          <p className="mt-3 max-w-md leading-relaxed text-ivory/65">{s.copy}</p>
                        </div>
                      ) : (
                        <div className="overflow-hidden rounded-3xl">
                          <img src={s.img} alt="" loading="lazy" className="img-warm aspect-[16/10] w-full object-cover transition-transform duration-[1.6s] hover:scale-105" />
                        </div>
                      )}
                    </div>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>

        <Reveal delay={0.1}>
          <div className="mx-auto mt-16 flex max-w-3xl flex-col items-center gap-5 rounded-[28px] border border-ivory/12 bg-ivory/[0.05] p-8 text-center backdrop-blur sm:flex-row sm:text-left">
            <img src="https://images.pexels.com/photos/37458081/pexels-photo-37458081.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=800" alt="" loading="lazy" className="h-20 w-20 shrink-0 rounded-full object-cover ring-2 ring-ivory/20" />
            <div>
              <p className="font-serif text-xl italic">“Nervous? Tell us on arrival. We'll slow down, explain each step and check in often.”</p>
              <p className="mt-2 text-xs tracking-[0.18em] text-ivory/50 uppercase">Our promise to anxious patients</p>
            </div>
            <a href="#booking" className="shrink-0 rounded-full bg-ivory px-6 py-3.5 text-sm font-bold text-charcoal transition-colors hover:bg-cream sm:ml-auto">Book gently</a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
