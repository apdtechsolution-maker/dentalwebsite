import { ArrowUpRight, Clock, Mail, MapPin, Phone } from "lucide-react";
import { siteConfig } from "../config/site";
import { Eyebrow, Reveal } from "./Reveal";

export default function Contact() {
  return (
    <section id="contact" className="bg-cream/60 py-24 lg:py-32" aria-label="Contact and location">
      <div className="mx-auto max-w-[1320px] px-5 sm:px-8 lg:px-10">
        <div className="grid gap-10 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <Reveal><Eyebrow>Contact & Location</Eyebrow></Reveal>
            <Reveal delay={0.1}>
              <h2 className="mt-6 font-serif text-4xl leading-[1.06] font-light text-charcoal sm:text-5xl">
                Find your way <span className="italic text-cocoa">to calm.</span>
              </h2>
              <p className="mt-5 text-charcoal/65">Placeholder details below — connect verified address, hours and contact channels before launch.</p>
            </Reveal>
            <div className="mt-8 flex flex-col gap-4">
              {[
                { icon: MapPin, label: "STUDIO", lines: siteConfig.contact.addressLines, note: siteConfig.contact.addressNote },
                { icon: Clock, label: "HOURS", lines: siteConfig.contact.hours.map((h) => `${h.days} · ${h.time}`), note: siteConfig.contact.hoursNote },
              ].map((b, i) => (
                <Reveal key={b.label} delay={0.1 + i * 0.08}>
                  <div className="rounded-3xl border border-cocoa/12 bg-ivory p-6">
                    <div className="flex items-center gap-3">
                      <span className="flex h-10 w-10 items-center justify-center rounded-full bg-cocoa text-ivory"><b.icon className="h-4 w-4" /></span>
                      <p className="text-[0.7rem] font-extrabold tracking-[0.22em] text-cocoa">{b.label}</p>
                    </div>
                    <div className="mt-4 space-y-1">
                      {b.lines.map((l) => (
                        <p key={l} className="font-serif text-xl text-charcoal">{l}</p>
                      ))}
                    </div>
                    <p className="mt-2 text-xs text-charcoal/50 italic">{b.note}</p>
                  </div>
                </Reveal>
              ))}
              <Reveal delay={0.25}>
                <div className="grid gap-4 sm:grid-cols-2">
                  <a href={siteConfig.contact.phoneHref} className="group rounded-3xl bg-charcoal p-6 text-ivory transition-transform hover:-translate-y-1">
                    <Phone className="h-5 w-5 text-sage" />
                    <p className="mt-3 text-[0.7rem] font-extrabold tracking-[0.22em] text-ivory/60">CALL</p>
                    <p className="mt-1 font-serif text-xl">{siteConfig.contact.phoneDisplay}</p>
                    <p className="mt-2 inline-flex items-center gap-1 text-xs font-bold text-sage">Call now <ArrowUpRight className="h-3.5 w-3.5" /></p>
                  </a>
                  <a href={siteConfig.contact.emailHref} className="group rounded-3xl bg-cocoa p-6 text-ivory transition-transform hover:-translate-y-1">
                    <Mail className="h-5 w-5 text-ivory/80" />
                    <p className="mt-3 text-[0.7rem] font-extrabold tracking-[0.22em] text-ivory/60">WRITE</p>
                    <p className="mt-1 font-serif text-lg break-all">{siteConfig.contact.emailDisplay}</p>
                    <p className="mt-2 inline-flex items-center gap-1 text-xs font-bold text-ivory/80">Email us <ArrowUpRight className="h-3.5 w-3.5" /></p>
                  </a>
                </div>
              </Reveal>
            </div>
          </div>

          <Reveal delay={0.15} className="lg:col-span-7">
            <div className="relative flex h-full min-h-[480px] flex-col overflow-hidden rounded-[32px] bg-ivory shadow-[0_32px_64px_-28px_rgba(67,50,43,0.45)] ring-1 ring-cocoa/10">
              {/* map placeholder */}
              <div className="map-grid relative flex-1 bg-[#EDE6D9] p-8">
                <div className="absolute top-1/3 left-1/4 h-24 w-40 rotate-[-8deg] rounded-2xl bg-sage/25" aria-hidden />
                <div className="absolute top-1/2 right-1/4 h-16 w-56 rotate-[6deg] rounded-2xl bg-cocoa/10" aria-hidden />
                <div className="absolute top-8 right-8 rounded-full bg-ivory px-4 py-2 text-[0.7rem] font-bold tracking-[0.16em] text-cocoa shadow">MAP PLACEHOLDER</div>
                {/* pin */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center">
                  <span className="relative mx-auto flex h-16 w-16 items-center justify-center">
                    <span className="absolute inset-0 animate-ping rounded-full bg-cocoa/20" aria-hidden />
                    <span className="relative flex h-14 w-14 items-center justify-center rounded-full bg-cocoa text-ivory shadow-xl">
                      <MapPin className="h-6 w-6" />
                    </span>
                  </span>
                  <span className="mt-3 inline-block rounded-full bg-charcoal px-4 py-2 font-serif text-sm text-ivory shadow-lg">Aurel Dental Studio</span>
                </div>
                {/* roads */}
                <svg className="absolute inset-0 h-full w-full opacity-30" aria-hidden>
                  <path d="M0 220 C 200 200, 400 260, 800 210 S 1200 180, 1400 220" stroke="#624B40" strokeWidth="10" fill="none" />
                  <path d="M300 0 C 320 150, 280 350, 340 600" stroke="#fff" strokeWidth="8" fill="none" />
                  <path d="M650 0 C 640 200, 680 400, 620 700" stroke="#A9B3A2" strokeWidth="6" fill="none" />
                </svg>
              </div>
              <div className="flex flex-col gap-4 border-t border-cocoa/10 bg-ivory p-7 sm:flex-row sm:items-center sm:justify-between">
                <div>
                  <p className="font-serif text-2xl text-charcoal">Visit the studio</p>
                  <p className="mt-1 text-sm text-charcoal/55">{siteConfig.contact.mapNote}</p>
                </div>
                <div className="flex gap-3">
                  <button className="rounded-full border border-charcoal/20 px-5 py-3 text-sm font-bold text-charcoal transition-colors hover:bg-charcoal hover:text-ivory" onClick={() => window.open("https://maps.google.com/?q=dental+studio", "_blank")}>
                    Open in Maps
                  </button>
                  <a href="#booking" className="rounded-full bg-cocoa px-5 py-3 text-sm font-bold text-ivory transition-colors hover:bg-cocoa-deep">Plan a visit</a>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
