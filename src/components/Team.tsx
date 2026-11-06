import { ArrowUpRight } from "lucide-react";
import { siteConfig } from "../config/site";
import { Eyebrow, Reveal } from "./Reveal";

export default function Team() {
  return (
    <section id="team" className="relative bg-cream/60 py-24 lg:py-36" aria-label="Our team">
      <div className="mx-auto max-w-[1320px] px-5 sm:px-8 lg:px-10">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-2xl">
            <Reveal><Eyebrow>Our Team</Eyebrow></Reveal>
            <Reveal delay={0.1}>
              <h2 className="mt-6 font-serif text-4xl leading-[1.06] font-light text-balance text-charcoal sm:text-5xl">
                Meet the people <span className="italic text-cocoa">behind the smiles.</span>
              </h2>
              <p className="mt-5 text-charcoal/65">Three clinicians, one shared standard — listen first, explain clearly, treat gently. <span className="italic">Demonstration profiles — replace with verified team before launch.</span></p>
            </Reveal>
          </div>
          <Reveal delay={0.2}>
            <p className="max-w-xs text-sm leading-relaxed text-charcoal/55">We intentionally keep our team small so you see familiar faces at every visit.</p>
          </Reveal>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {siteConfig.team.map((m, i) => (
            <Reveal key={m.id} delay={i * 0.12}>
              <article className="group relative flex h-full flex-col overflow-hidden rounded-[28px] bg-ivory shadow-[0_24px_48px_-24px_rgba(67,50,43,0.35)] ring-1 ring-cocoa/10 transition-transform duration-500 hover:-translate-y-2">
                <div className="relative overflow-hidden">
                  <img
                    src={m.portrait}
                    alt={m.portraitAlt}
                    loading="lazy"
                    className="img-warm aspect-[3/4] w-full object-cover transition-transform duration-[1.6s] group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-charcoal/45 via-transparent to-transparent opacity-80" />
                  <span className="absolute top-4 left-4 rounded-full bg-ivory/90 px-3.5 py-1.5 text-[0.68rem] font-extrabold tracking-[0.16em] text-cocoa backdrop-blur">DEMO PROFILE</span>
                  <div className="absolute right-5 bottom-5 left-5 text-ivory">
                    <p className="text-[0.7rem] font-bold tracking-[0.22em] text-ivory/70">{String(i + 1).padStart(2, "0")} — AUREL STUDIO</p>
                    <h3 className="mt-1 font-serif text-3xl font-light">{m.name}</h3>
                    <p className="text-sm text-ivory/80">{m.role}</p>
                  </div>
                </div>
                <div className="flex flex-1 flex-col p-7">
                  <p className="text-[0.95rem] leading-relaxed text-charcoal/70">{m.bio}</p>
                  <div className="mt-5 flex flex-wrap gap-2">
                    {m.focus.map((f) => (
                      <span key={f} className="rounded-full border border-cocoa/15 px-3 py-1 text-xs font-semibold text-cocoa">{f}</span>
                    ))}
                  </div>
                  <a href="#booking" className="group/link mt-6 inline-flex items-center gap-1.5 border-t border-cocoa/10 pt-5 text-sm font-bold text-cocoa">
                    <span className="link-underline">Meet {m.name.split(" ")[1]} at a consultation</span>
                    <ArrowUpRight className="h-4 w-4 transition-transform group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5" />
                  </a>
                </div>
              </article>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.2}>
          <p className="mt-8 rounded-2xl border border-cocoa/15 bg-ivory/60 px-6 py-4 text-center text-xs leading-relaxed text-charcoal/55">
            Placeholder practitioner identities for design demonstration only. Do not present as real credentials, awards, or certifications. Confirm GDC / ADA / DCI registration details with the real clinic before launch.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
