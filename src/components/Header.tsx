import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { siteConfig } from "../config/site";

const links = [
  { label: "Home", href: "#home" },
  { label: "Our Philosophy", href: "#philosophy" },
  { label: "Treatments", href: "#treatments" },
  { label: "Smile Gallery", href: "#gallery" },
  { label: "Our Team", href: "#team" },
  { label: "Patient Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("Home");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open ]);

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
          open
            ? "bg-transparent"
            : scrolled
              ? "bg-ivory/90 shadow-[0_1px_0_#DDD3C2,0_12px_32px_-16px_rgba(40,37,33,0.25)] backdrop-blur-xl"
              : "bg-transparent"
        }`}
      >
        <div className="mx-auto flex max-w-[1320px] items-center justify-between px-5 py-4 sm:px-8 lg:px-10">
          <a href="#home" className="group flex items-center gap-3" aria-label="Aurel Dental Studio home">
            <span className={`flex h-10 w-10 items-center justify-center rounded-full font-serif text-xl transition-colors ${open ? "bg-ivory text-charcoal" : scrolled ? "bg-cocoa text-ivory" : "bg-ivory/15 text-ivory backdrop-blur-md ring-1 ring-ivory/40"}`}>
              A
            </span>
            <span className="leading-none">
              <span className={`block font-serif text-[1.35rem] tracking-[0.18em] ${open ? "text-ivory" : scrolled ? "text-charcoal" : "text-ivory"}`}>
                {siteConfig.brand.wordmark}
              </span>
              <span className={`block text-[0.6rem] font-bold tracking-[0.32em] ${open ? "text-ivory/70" : scrolled ? "text-cocoa" : "text-ivory/80"}`}>
                {siteConfig.brand.descriptor}
              </span>
            </span>
          </a>

          <nav className="hidden items-center gap-7 lg:flex" aria-label="Primary">
            {links.map((l) => (
              <a
                key={l.label}
                href={l.href}
                onClick={() => setActive(l.label)}
                className={`link-underline text-[0.82rem] font-semibold tracking-wide transition-colors ${
                  active === l.label
                    ? scrolled
                      ? "text-cocoa"
                      : "text-ivory"
                    : scrolled
                      ? "text-charcoal/70 hover:text-charcoal"
                      : "text-ivory/80 hover:text-ivory"
                } ${active === l.label ? "active" : ""}`}
              >
                {l.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <a
              href="#booking"
              className="group hidden items-center gap-2 rounded-full bg-cocoa px-5 py-3 text-[0.82rem] font-bold tracking-wide text-ivory transition-all hover:bg-cocoa-deep hover:shadow-[0_12px_28px_-10px_rgba(98,75,64,0.7)] sm:inline-flex"
            >
              Book a Consultation
              <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
            <button
              onClick={() => setOpen(!open)}
              aria-label={open ? "Close menu" : "Open menu"}
              aria-expanded={open}
              className={`flex h-11 w-11 items-center justify-center rounded-full transition-colors lg:hidden ${
                scrolled && !open ? "bg-charcoal text-ivory" : open ? "bg-cocoa text-ivory" : "bg-ivory/15 text-ivory ring-1 ring-ivory/40 backdrop-blur-md"
              }`}
            >
              {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>
      </header>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.35 }}
            className="fixed inset-0 z-40 flex flex-col bg-charcoal/98 pt-24 backdrop-blur-xl lg:hidden"
          >
            <div className="absolute inset-0 bg-[radial-gradient(80%_60%_at_50%_0%,rgba(169,179,162,0.25),transparent),radial-gradient(60%_50%_at_80%_100%,rgba(98,75,64,0.5),transparent)]" aria-hidden />
            <nav className="relative flex flex-1 flex-col justify-center gap-1 px-8" aria-label="Mobile">
              {links.map((l, i) => (
                <motion.a
                  key={l.label}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  initial={{ opacity: 0, x: -24 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.06 * i, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                  className="group flex items-center justify-between border-b border-ivory/10 py-4"
                >
                  <span className="font-serif text-3xl font-light text-ivory transition-colors group-hover:text-sage">
                    {l.label}
                  </span>
                  <span className="text-xs tracking-[0.2em] text-ivory/40">0{i + 1}</span>
                </motion.a>
              ))}
              <motion.a
                href="#booking"
                onClick={() => setOpen(false)}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.45 }}
                className="mt-8 inline-flex items-center justify-center gap-2 rounded-full bg-ivory px-6 py-4 text-sm font-bold text-charcoal"
              >
                Book a Consultation <ArrowUpRight className="h-4 w-4" />
              </motion.a>
              <p className="mt-6 text-center text-xs tracking-widest text-ivory/40 uppercase">
                {siteConfig.brand.tagline}
              </p>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
