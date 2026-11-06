import { ArrowUp, ArrowUpRight } from "lucide-react";
import { siteConfig } from "../config/site";

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-ink text-ivory" aria-label="Footer">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(70%_50%_at_50%_0%,rgba(169,179,162,0.15),transparent),radial-gradient(50%_40%_at_90%_100%,rgba(98,75,64,0.45),transparent)]" aria-hidden />
      <div className="relative mx-auto max-w-[1320px] px-5 pt-16 sm:px-8 lg:px-10 lg:pt-20">
        <div className="flex flex-col gap-10 lg:flex-row lg:justify-between">
          <div className="max-w-sm">
            <a href="#home" className="flex items-center gap-3">
              <span className="flex h-11 w-11 items-center justify-center rounded-full bg-ivory font-serif text-xl text-charcoal">A</span>
              <span className="leading-none">
                <span className="block font-serif text-2xl tracking-[0.18em]">AUREL</span>
                <span className="block text-[0.62rem] font-bold tracking-[0.32em] text-ivory/60">DENTAL STUDIO</span>
              </span>
            </a>
            <p className="mt-5 text-[0.95rem] leading-relaxed text-ivory/60">{siteConfig.brand.tagline} Contemporary private dentistry combining clinical excellence, transparent care, and a beautiful, relaxed experience.</p>
            <div className="mt-6 flex gap-2.5">
              {siteConfig.socials.map((s) => (
                <a key={s.label} href={s.href} aria-label={`${s.label} (placeholder)`} className="group flex h-11 w-11 items-center justify-center rounded-full border border-ivory/15 text-ivory/70 transition-all hover:border-ivory hover:bg-ivory hover:text-charcoal">
                  <ArrowUpRight className="h-4 w-4" />
                </a>
              ))}
            </div>
            <p className="mt-4 text-xs text-ivory/40">{siteConfig.socials.map((s) => s.handle).join(" · ")} · placeholders</p>
          </div>

          <div className="grid grid-cols-2 gap-10 sm:grid-cols-3 lg:gap-16">
            <nav aria-label="Explore">
              <p className="text-[0.7rem] font-extrabold tracking-[0.22em] text-ivory/40">EXPLORE</p>
              <ul className="mt-4 space-y-2.5 text-[0.95rem]">
                {[
                  ["Our Philosophy", "#philosophy"],
                  ["Treatments", "#treatments"],
                  ["Smile Gallery", "#gallery"],
                  ["Our Team", "#team"],
                  ["Patient Experience", "#experience"],
                ].map(([l, h]) => (
                  <li key={l}><a href={h} className="link-underline text-ivory/75 hover:text-ivory">{l}</a></li>
                ))}
              </ul>
            </nav>
            <nav aria-label="Care">
              <p className="text-[0.7rem] font-extrabold tracking-[0.22em] text-ivory/40">CARE</p>
              <ul className="mt-4 space-y-2.5 text-[0.95rem]">
                {[
                  ["Book a Consultation", "#booking"],
                  ["First Visit & FAQ", "#booking"],
                  ["Emergency Guidance", "#booking"],
                  ["Contact", "#contact"],
                ].map(([l, h]) => (
                  <li key={l}><a href={h} className="link-underline text-ivory/75 hover:text-ivory">{l}</a></li>
                ))}
              </ul>
            </nav>
            <div>
              <p className="text-[0.7rem] font-extrabold tracking-[0.22em] text-ivory/40">STUDIO</p>
              <div className="mt-4 space-y-2 text-[0.95rem] text-ivory/75">
                {siteConfig.contact.addressLines.map((l) => (
                  <p key={l}>{l}</p>
                ))}
                <p className="pt-2"><a href={siteConfig.contact.phoneHref} className="hover:text-ivory">{siteConfig.contact.phoneDisplay}</a></p>
                <p><a href={siteConfig.contact.emailHref} className="break-all hover:text-ivory">{siteConfig.contact.emailDisplay}</a></p>
                <p className="pt-2 text-xs text-ivory/45">{siteConfig.contact.hours[0].days} · {siteConfig.contact.hours[0].time}</p>
              </div>
            </div>
          </div>
        </div>

        {/* giant wordmark */}
        <div className="mt-16 overflow-hidden border-t border-ivory/10 pt-8" aria-hidden>
          <p className="text-center font-serif text-[16.5vw] leading-[0.9] font-light tracking-[0.08em] text-ivory/[0.09] select-none lg:text-[11rem]">
            AUREL
          </p>
        </div>

        <div id="legal" className="flex scroll-mt-24 flex-col gap-4 border-t border-ivory/10 py-7 text-xs text-ivory/45 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} {siteConfig.brand.wordmark} {siteConfig.brand.descriptor}. {siteConfig.legal.notice}</p>
          <div className="flex items-center gap-5">
            <a href={siteConfig.legal.privacyHref} className="hover:text-ivory">{siteConfig.legal.privacyLabel}</a>
            <a href={siteConfig.legal.termsHref} className="hover:text-ivory">{siteConfig.legal.termsLabel}</a>
            <button onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })} aria-label="Back to top" className="flex h-9 w-9 items-center justify-center rounded-full border border-ivory/15 text-ivory/70 transition-colors hover:bg-ivory hover:text-charcoal">
              <ArrowUp className="h-4 w-4" />
            </button>
          </div>
        </div>
        <p className="pb-8 text-center font-serif text-lg italic text-ivory/55">{siteConfig.brand.closingLine}</p>
      </div>
    </footer>
  );
}
