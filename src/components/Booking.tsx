import { AnimatePresence, motion } from "framer-motion";
import { ArrowUpRight, BadgeCheck, CalendarDays, Loader2, ShieldCheck } from "lucide-react";
import { useMemo, useState } from "react";
import { siteConfig } from "../config/site";
import { Eyebrow, Reveal } from "./Reveal";

interface FormState {
  name: string;
  email: string;
  phone: string;
  country: string;
  treatment: string;
  date: string;
  time: string;
  message: string;
  consent: boolean;
}

const initial: FormState = {
  name: "",
  email: "",
  phone: "",
  country: "United States",
  treatment: "",
  date: "",
  time: "",
  message: "",
  consent: false,
};

const countries = ["United States", "United Kingdom", "India", "Canada", "Australia", "United Arab Emirates", "Other"];

export default function Booking() {
  const [form, setForm] = useState<FormState>(initial);
  const [errors, setErrors] = useState<Partial<Record<keyof FormState, string>>>({});
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [touched, setTouched] = useState<Record<string, boolean>>({});

  const todayStr = useMemo(() => new Date().toISOString().split("T")[0], []);

  const set = (k: keyof FormState, v: string | boolean) => {
    setForm((f) => ({ ...f, [k]: v }));
    if (touched[k]) validateField(k, typeof v === "boolean" ? v : String(v));
  };

  const validateField = (k: keyof FormState, raw?: string | boolean): string | undefined => {
    const v = raw !== undefined ? raw : form[k];
    let msg: string | undefined;
    if (k === "name") {
      if (!String(v).trim()) msg = "Please tell us your full name.";
      else if (String(v).trim().length < 2) msg = "Name looks too short.";
    }
    if (k === "email") {
      if (!String(v).trim()) msg = "Email is required so we can reply.";
      else if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(String(v).trim())) msg = "That email doesn't look quite right.";
    }
    if (k === "phone") {
      if (!String(v).trim()) msg = "A phone number helps us confirm quickly.";
      else if (String(v).replace(/\D/g, "").length < 7) msg = "Please include a valid phone number.";
    }
    if (k === "treatment" && !v) msg = "Choose a treatment interest.";
    if (k === "date") {
      if (!v) msg = "Pick a preferred date.";
      else if (String(v) < todayStr) msg = "Please choose a future date.";
    }
    if (k === "time" && !v) msg = "Pick a preferred time.";
    if (k === "consent" && !v) msg = "Please accept so we can contact you about your request.";
    setErrors((e) => ({ ...e, [k]: msg }));
    return msg;
  };

  const validateAll = () => {
    const keys: (keyof FormState)[] = ["name", "email", "phone", "treatment", "date", "time", "consent"];
    let bad = 0;
    const next: typeof errors = {};
    keys.forEach((k) => {
      const msg = validateField(k, form[k] as string | boolean);
      if (msg) {
        next[k] = msg;
        bad++;
      }
    });
    setErrors(next);
    setTouched({ name: true, email: true, phone: true, treatment: true, date: true, time: true, consent: true });
    return bad === 0;
  };

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateAll()) {
      document.getElementById("booking-form")?.querySelector("[aria-invalid='true']")?.scrollIntoView({ behavior: "smooth", block: "center" });
      return;
    }
    setStatus("loading");
    // Honest demo behaviour — simulate network, structure ready for real endpoint
    try {
      await new Promise((res, rej) => {
        setTimeout(() => {
          // 8% simulated failure to demonstrate error state honestly
          if (Math.random() < 0.06) rej(new Error("demo"));
          else res(null);
        }, 1600);
      });
      if (siteConfig.booking.endpoint) {
        // Production: POST JSON { ...form } to siteConfig.booking.endpoint
        // fetch(siteConfig.booking.endpoint, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(form) })
      }
      setStatus("success");
    } catch {
      setStatus("error");
    }
  };

  const inputCls = (k: keyof FormState) =>
    `w-full rounded-2xl border px-5 py-3.5 text-[0.95rem] outline-none transition-all bg-white/10 border-white/15 text-ivory placeholder:text-ivory/35 focus:border-white/40 focus:ring-4 focus:ring-white/10 ${
      errors[k] ? "border-red-300/70 bg-red-500/10" : ""
    }`;

  return (
    <section id="booking" className="relative overflow-hidden bg-ivory py-24 lg:py-36" aria-label="Book a consultation">
      <div className="mx-auto grid max-w-[1320px] gap-10 px-5 sm:px-8 lg:grid-cols-12 lg:px-10">
        {/* left pitch */}
        <div className="lg:col-span-5">
          <Reveal><Eyebrow>Booking Experience</Eyebrow></Reveal>
          <Reveal delay={0.1}>
            <h2 className="mt-6 font-serif text-4xl leading-[1.06] font-light text-balance text-charcoal sm:text-5xl">
              Request your <span className="italic text-cocoa">consultation.</span>
            </h2>
            <p className="mt-5 leading-relaxed text-charcoal/65">
              Tell us how to reach you and what you'd like to explore. We'll respond with times, guidance and a clear next step — no commitment, no pressure.
            </p>
          </Reveal>
          <Reveal delay={0.2}>
            <div className="mt-8 space-y-4">
              {[
                { icon: CalendarDays, t: "Replies within one working day", s: "Demonstration timing — confirm with clinic" },
                { icon: ShieldCheck, t: "Minimal details only", s: "We never ask for medical histories in this form" },
                { icon: BadgeCheck, t: "Transparent from the start", s: "Written estimates before any treatment" },
              ].map((r) => (
                <div key={r.t} className="flex items-center gap-4 rounded-2xl border border-cocoa/12 bg-cream/50 p-4">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-cocoa text-ivory"><r.icon className="h-5 w-5" /></span>
                  <div>
                    <p className="text-sm font-extrabold text-charcoal">{r.t}</p>
                    <p className="text-xs text-charcoal/55">{r.s}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-6 rounded-2xl bg-sage-soft/70 p-5 text-[0.82rem] leading-relaxed text-sage-deep">
              <span className="font-extrabold tracking-widest uppercase text-[0.68rem]">Demo notice · </span>
              {siteConfig.booking.demoNote}
            </div>
          </Reveal>
        </div>

        {/* form */}
        <Reveal delay={0.15} className="lg:col-span-7">
          <form
            id="booking-form"
            onSubmit={onSubmit}
            noValidate
            className="relative rounded-[28px] bg-charcoal p-7 text-ivory shadow-[0_40px_80px_-32px_rgba(30,27,24,0.6)] sm:p-10"
          >
            <div className="pointer-events-none absolute inset-0 overflow-hidden rounded-[28px] bg-[radial-gradient(60%_40%_at_80%_0%,rgba(169,179,162,0.2),transparent)]" aria-hidden />
            <div className="relative">
              <AnimatePresence mode="wait">
                {status === "success" ? (
                  <motion.div key="ok" initial={{ opacity: 0, scale: 0.97 }} animate={{ opacity: 1, scale: 1 }} className="flex min-h-[480px] flex-col items-center justify-center py-10 text-center">
                    <span className="flex h-16 w-16 items-center justify-center rounded-full bg-sage text-charcoal"><BadgeCheck className="h-8 w-8" /></span>
                    <h3 className="mt-6 font-serif text-3xl font-light">Thank you, {form.name.split(" ")[0] || "friend"}.</h3>
                    <p className="mt-3 max-w-md text-ivory/70">
                      Your consultation <em>request</em> has been validated and recorded in this demo. In production it would be sent to {siteConfig.booking.provider || "your booking provider"}.
                      Nothing has been confirmed yet — we'll be in touch to arrange a time.
                    </p>
                    <div className="mt-6 w-full max-w-sm rounded-2xl bg-ivory/10 p-5 text-left text-sm">
                      <p><span className="text-ivory/50">Treatment:</span> <strong>{siteConfig.treatments.find((t) => t.id === form.treatment)?.name || form.treatment}</strong></p>
                      <p className="mt-1"><span className="text-ivory/50">Preferred:</span> <strong>{form.date} · {form.time}</strong></p>
                      <p className="mt-1"><span className="text-ivory/50">Contact:</span> <strong>{form.email} · {form.phone}</strong></p>
                    </div>
                    <button type="button" onClick={() => { setStatus("idle"); setForm(initial); setErrors({}); setTouched({}); }} className="mt-8 rounded-full bg-ivory px-7 py-3.5 text-sm font-bold text-charcoal hover:bg-cream">
                      Make another request
                    </button>
                  </motion.div>
                ) : (
                  <motion.div key="form" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
                    <div className="grid gap-5 sm:grid-cols-2">
                      <div className="sm:col-span-1">
                        <label htmlFor="bk-name" className="mb-2 block text-[0.72rem] font-extrabold tracking-[0.16em] text-ivory/60 uppercase">Full name *</label>
                        <input id="bk-name" value={form.name} onChange={(e) => set("name", e.target.value)} onBlur={() => { setTouched((t) => ({ ...t, name: true })); validateField("name"); }} placeholder="Amelia Hart" aria-invalid={!!errors.name} aria-describedby={errors.name ? "err-name" : undefined} className={inputCls("name")} autoComplete="name" />
                        {errors.name && <p id="err-name" className="mt-1.5 text-xs text-[#E8AFA0]">{errors.name}</p>}
                      </div>
                      <div>
                        <label htmlFor="bk-email" className="mb-2 block text-[0.72rem] font-extrabold tracking-[0.16em] text-ivory/60 uppercase">Email address *</label>
                        <input id="bk-email" type="email" value={form.email} onChange={(e) => set("email", e.target.value)} onBlur={() => { setTouched((t) => ({ ...t, email: true })); validateField("email"); }} placeholder="you@example.com" aria-invalid={!!errors.email} className={inputCls("email")} autoComplete="email" />
                        {errors.email && <p className="mt-1.5 text-xs text-[#E8AFA0]">{errors.email}</p>}
                      </div>
                      <div>
                        <label htmlFor="bk-phone" className="mb-2 block text-[0.72rem] font-extrabold tracking-[0.16em] text-ivory/60 uppercase">Phone number *</label>
                        <input id="bk-phone" type="tel" value={form.phone} onChange={(e) => set("phone", e.target.value)} onBlur={() => { setTouched((t) => ({ ...t, phone: true })); validateField("phone"); }} placeholder={siteConfig.locale[siteConfig.region].phonePlaceholder} aria-invalid={!!errors.phone} className={inputCls("phone")} autoComplete="tel" />
                        {errors.phone && <p className="mt-1.5 text-xs text-[#E8AFA0]">{errors.phone}</p>}
                      </div>
                      <div>
                        <label htmlFor="bk-country" className="mb-2 block text-[0.72rem] font-extrabold tracking-[0.16em] text-ivory/60 uppercase">Country / region</label>
                        <select id="bk-country" value={form.country} onChange={(e) => set("country", e.target.value)} className="w-full appearance-none rounded-2xl border border-ivory/15 bg-ivory/10 px-5 py-3.5 text-[0.95rem] text-ivory outline-none focus:border-ivory/40">
                          {countries.map((c) => (
                            <option key={c} value={c} className="text-charcoal">{c}</option>
                          ))}
                        </select>
                      </div>
                      <div>
                        <label htmlFor="bk-treatment" className="mb-2 block text-[0.72rem] font-extrabold tracking-[0.16em] text-ivory/60 uppercase">Treatment interest *</label>
                        <select id="bk-treatment" value={form.treatment} onChange={(e) => set("treatment", e.target.value)} onBlur={() => { setTouched((t) => ({ ...t, treatment: true })); validateField("treatment"); }} aria-invalid={!!errors.treatment} className="w-full appearance-none rounded-2xl border border-ivory/15 bg-ivory/10 px-5 py-3.5 text-[0.95rem] text-ivory outline-none focus:border-ivory/40">
                          <option value="" className="text-charcoal">Select a treatment…</option>
                          {siteConfig.treatments.map((t) => (
                            <option key={t.id} value={t.id} className="text-charcoal">{t.name}</option>
                          ))}
                          <option value="not-sure" className="text-charcoal">Not sure yet — advise me</option>
                        </select>
                        {errors.treatment && <p className="mt-1.5 text-xs text-[#E8AFA0]">{errors.treatment}</p>}
                      </div>
                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <label htmlFor="bk-date" className="mb-2 block text-[0.72rem] font-extrabold tracking-[0.16em] text-ivory/60 uppercase">Preferred date *</label>
                          <input id="bk-date" type="date" min={todayStr} value={form.date} onChange={(e) => set("date", e.target.value)} onBlur={() => { setTouched((t) => ({ ...t, date: true })); validateField("date"); }} aria-invalid={!!errors.date} className="w-full rounded-2xl border border-ivory/15 bg-ivory/10 px-4 py-3.5 text-[0.9rem] text-ivory outline-none focus:border-ivory/40 [color-scheme:dark]" />
                          {errors.date && <p className="mt-1.5 text-xs text-[#E8AFA0]">{errors.date}</p>}
                        </div>
                        <div>
                          <label htmlFor="bk-time" className="mb-2 block text-[0.72rem] font-extrabold tracking-[0.16em] text-ivory/60 uppercase">Preferred time *</label>
                          <select id="bk-time" value={form.time} onChange={(e) => set("time", e.target.value)} onBlur={() => { setTouched((t) => ({ ...t, time: true })); validateField("time"); }} aria-invalid={!!errors.time} className="w-full appearance-none rounded-2xl border border-ivory/15 bg-ivory/10 px-4 py-3.5 text-[0.9rem] text-ivory outline-none focus:border-ivory/40">
                            <option value="" className="text-charcoal">Select…</option>
                            {siteConfig.booking.timeSlots.map((s) => (
                              <option key={s} value={s} className="text-charcoal">{s}</option>
                            ))}
                          </select>
                          {errors.time && <p className="mt-1.5 text-xs text-[#E8AFA0]">{errors.time}</p>}
                        </div>
                      </div>
                      <div className="sm:col-span-2">
                        <label htmlFor="bk-msg" className="mb-2 block text-[0.72rem] font-extrabold tracking-[0.16em] text-ivory/60 uppercase">Optional message <span className="font-medium normal-case">(no health details please)</span></label>
                        <textarea id="bk-msg" rows={3} value={form.message} onChange={(e) => set("message", e.target.value)} placeholder="Anything that helps us prepare — e.g. nervous patient, wedding date, questions…" className="w-full resize-none rounded-2xl border border-ivory/15 bg-ivory/10 px-5 py-3.5 text-[0.95rem] text-ivory outline-none placeholder:text-ivory/35 focus:border-ivory/40" />
                      </div>
                      <div className="sm:col-span-2">
                        <label className="flex cursor-pointer items-start gap-3 rounded-2xl bg-ivory/[0.06] p-4 text-sm leading-relaxed">
                          <input type="checkbox" checked={form.consent} onChange={(e) => set("consent", e.target.checked)} onBlur={() => { setTouched((t) => ({ ...t, consent: true })); validateField("consent"); }} aria-invalid={!!errors.consent} className="mt-1 h-4 w-4 shrink-0 accent-[#A9B3A2]" />
                          <span className="text-ivory/75">
                            I consent to Aurel Dental Studio contacting me about my consultation request by email or phone. <span className="text-ivory/50">Demo consent — see privacy placeholder.</span> *
                          </span>
                        </label>
                        {errors.consent && <p className="mt-1.5 text-xs text-[#E8AFA0]">{errors.consent}</p>}
                      </div>
                    </div>

                    {status === "error" && (
                      <p role="alert" className="mt-5 rounded-2xl bg-red-500/15 p-4 text-sm text-[#F2B8A8]">
                        Something interrupted this demo submission. Please check your connection and try again — nothing has been sent.
                      </p>
                    )}

                    <button
                      type="submit"
                      disabled={status === "loading"}
                      className="group mt-7 flex w-full items-center justify-center gap-2 rounded-full bg-ivory px-7 py-4 text-sm font-extrabold text-charcoal transition-all hover:bg-cream disabled:opacity-70"
                    >
                      {status === "loading" ? (
                        <>
                          <Loader2 className="h-4 w-4 animate-spin" /> Sending request…
                        </>
                      ) : (
                        <>
                          Request my consultation <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                        </>
                      )}
                    </button>
                    <p className="mt-4 text-center text-xs leading-relaxed text-ivory/45">
                      Front-end demo only — validated locally, not confirmed as an appointment. Integration-ready for {siteConfig.booking.provider} / CRM / email / calendar.
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </form>
        </Reveal>
      </div>
    </section>
  );
}
