/* ————————————————————————————————————————————————
  AUREL DENTAL STUDIO — Central Client Configuration
  A developer can localise an entire deployment by editing
  ONLY this file. Nothing in the UI hard-codes brand,
  contact, team, pricing, legal or booking details.
———————————————————————————————————————————————— */

export type Region = "US" | "UK" | "IN";

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  portrait: string;
  portraitAlt: string;
  bio: string;
  focus: string[];
}

export interface Treatment {
  id: string;
  name: string;
  short: string;
  long: string;
  image: string;
  imageAlt: string;
  duration: string;
  suitableFor: string[];
  priceHint?: string;
}

export interface SmileCase {
  id: string;
  index: string;
  title: string;
  tag: string;
  image: string;
  imageAlt: string;
  description: string;
  detail: string;
  duration: string;
}

export const siteConfig = {
  brand: {
    wordmark: "AUREL",
    descriptor: "DENTAL STUDIO",
    tagline: "A brighter smile. A better experience.",
    closingLine: "Thoughtful care. Beautifully delivered.",
  },

  // ── Localisation: switch region per deployment ──
  // US | UK | IN — controls phone hint, wording, currency
  region: "US" as Region,

  locale: {
    US: {
      countryLabel: "United States",
      phonePlaceholder: "(415) 555-0132",
      phoneHrefPrefix: "+1",
      currency: "USD",
      currencySymbol: "$",
      careWording: "Private dental care with transparent fees discussed before treatment.",
      languageNote: "English (US)",
    },
    UK: {
      countryLabel: "United Kingdom",
      phonePlaceholder: "020 7946 0018",
      phoneHrefPrefix: "+44",
      currency: "GBP",
      currencySymbol: "£",
      careWording: "Private dental care. This studio does not assume NHS status.",
      languageNote: "English (UK)",
    },
    IN: {
      countryLabel: "India",
      phonePlaceholder: "+91 98200 12345",
      phoneHrefPrefix: "+91",
      currency: "INR",
      currencySymbol: "₹",
      careWording: "Private dental care with clear estimates shared before treatment.",
      languageNote: "English (India) · Hindi & regional languages on request",
      whatsapp: true,
    },
  },

  contact: {
    // PLACEHOLDERS — replace with verified client details before launch
    addressLines: ["123 Studio Lane, Suite 200", "Configurable City, ST 94100"],
    addressNote: "Demonstration address — replace with verified clinic address.",
    phoneDisplay: "(415) 555-0132",
    phoneHref: "tel:+14155550132",
    emailDisplay: "hello@aureldental.studio",
    emailHref: "mailto:hello@aureldental.studio",
    hours: [
      { days: "Monday — Friday", time: "8:30am — 6:00pm" },
      { days: "Saturday", time: "9:00am — 2:00pm (by appointment)" },
      { days: "Sunday", time: "Closed" },
    ],
    hoursNote: "Demonstration hours — confirm with clinic.",
    mapNote: "Map placeholder — connect Google Maps or Apple Maps on deployment.",
  },

  booking: {
    provider: "demo", // e.g. "dentally" | "pabau" | "hubspot" | "calendly" | "custom-endpoint"
    endpoint: "", // POST endpoint for production integration
    demoMode: true,
    demoNote: "Demonstration form — requests are validated in your browser and not sent anywhere until a booking provider is connected.",
    timeSlots: ["Morning (8–11am)", "Midday (11am–2pm)", "Afternoon (2–5pm)", "Evening (5–7pm)"],
  },

  socials: [
    { label: "Instagram", href: "#", handle: "@aurel.dental" },
    { label: "Facebook", href: "#", handle: "Aurel Dental Studio" },
    { label: "TikTok", href: "#", handle: "@aureldental" },
  ],

  legal: {
    privacyHref: "#legal",
    privacyLabel: "Privacy Policy",
    termsHref: "#legal",
    termsLabel: "Terms of Care",
    notice: "Demonstration website. All practitioner identities, imagery pairings, testimonials and business details are placeholders.",
  },

  treatments: [
    {
      id: "general",
      name: "General Dentistry",
      short: "Complete everyday care that keeps teeth, gums and bite healthy — gently and thoroughly.",
      long: "Unhurried examinations, hygiene care, tooth-coloured fillings and preventive planning. We explain everything we see, prioritise what matters, and never rush a diagnosis.",
      image: "https://images.pexels.com/photos/6627563/pexels-photo-6627563.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
      imageAlt: "Dentist performing a gentle check-up",
      duration: "45–60 min first visit",
      suitableFor: ["Routine check-ups", "Hygiene & gum health", "Tooth-coloured fillings"],
      priceHint: "Transparent estimate before treatment",
    },
    {
      id: "whitening",
      name: "Teeth Whitening",
      short: "A brighter, even tone — professionally guided for enamel-safe, natural-looking results.",
      long: "We assess shade, enamel and sensitivity first, then tailor professional whitening to your smile. Expect an even lift of several shades with aftercare that protects your result.",
      image: "https://images.pexels.com/photos/3762453/pexels-photo-3762453.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200",
      imageAlt: "Close-up of a bright natural smile",
      duration: "60–90 min in-studio",
      suitableFor: ["Coffee & tea staining", "Event-ready brightness", "Even tone"],
    },
    {
      id: "veneers",
      name: "Porcelain Veneers",
      short: "Hand-crafted porcelain fronts that refine shape, symmetry and light — not a one-shade mask.",
      long: "Digital previews, trial smiles and minimal-preparation techniques. Each veneer is designed around your face, lip line and personality, then finished by a master ceramist.",
      image: "https://images.pexels.com/photos/3762402/pexels-photo-3762402.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200",
      imageAlt: "Refined smile with natural veneers",
      duration: "2–3 visits",
      suitableFor: ["Chips & uneven edges", "Gaps & asymmetry", "Discolouration"],
    },
    {
      id: "aligners",
      name: "Clear Aligners",
      short: "Discreet straightening mapped digitally from day one — see your projected smile early.",
      long: "3D scans instead of messy impressions, a step-by-step digital plan you approve, and remote check-ins between visits. Ideal for mild to moderate crowding and spacing.",
      image: "https://images.pexels.com/photos/6627325/pexels-photo-6627325.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
      imageAlt: "Dentist discussing a clear aligner plan with patient",
      duration: "4–12 months typical",
      suitableFor: ["Crowding", "Spacing", "Relapse after braces"],
    },
    {
      id: "implants",
      name: "Dental Implants",
      short: "A secure, natural-feeling replacement for missing teeth — planned in 3D, placed with care.",
      long: "From digital imaging to final crown, one team guides healing, fit and bite. We are candid about timelines, bone health and alternatives so you can decide with confidence.",
      image: "https://images.pexels.com/photos/6629415/pexels-photo-6629415.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200",
      imageAlt: "Modern implant dentistry equipment",
      duration: "Plan over several months",
      suitableFor: ["Single missing tooth", "Multiple teeth", "Denture stability"],
    },
    {
      id: "makeovers",
      name: "Smile Makeovers",
      short: "A composed plan combining whitening, shaping, alignment and artistry — in the right order.",
      long: "We begin with photographs, conversation and a digital preview. Then we sequence treatments conservatively, so every step earns its place and the result still looks like you.",
      image: "https://images.pexels.com/photos/33669405/pexels-photo-33669405.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200",
      imageAlt: "Joyful natural smile after makeover planning",
      duration: "Bespoke timeline",
      suitableFor: ["Weddings & milestones", "Full smile refresh", "Confidence rebuild"],
    },
    {
      id: "emergency",
      name: "Emergency Dental Care",
      short: "Fast, calming help when something hurts, chips or breaks — we leave room every day.",
      long: "Call as early as you can. We triage by phone, relieve discomfort first, and explain options clearly. Generic guidance only — availability is confirmed at booking.",
      image: "https://images.pexels.com/photos/7803059/pexels-photo-7803059.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
      imageAlt: "Dentist providing urgent reassuring care",
      duration: "Same-day triage when possible",
      suitableFor: ["Toothache", "Chipped tooth", "Lost filling or crown"],
    },
  ] as Treatment[],

  smileCases: [
    {
      id: "whitening",
      index: "01",
      title: "Professional Whitening",
      tag: "Tone & brightness",
      image: "https://images.pexels.com/photos/3762453/pexels-photo-3762453.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200",
      imageAlt: "Close-up smile illustration for whitening demonstration",
      description: "Illustrative example of lifting everyday staining for a cleaner, more even tone while keeping natural translucency at the edges.",
      detail: "Demo case · 1 in-studio session + home maintenance",
      duration: "60–90 min",
    },
    {
      id: "veneers",
      index: "02",
      title: "Porcelain Veneers",
      tag: "Shape & symmetry",
      image: "https://images.pexels.com/photos/3762402/pexels-photo-3762402.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200",
      imageAlt: "Close-up smile illustration for veneer demonstration",
      description: "Illustrative example of refining proportion and symmetry — softening uneven edges and closing a small gap with a light-reflective finish.",
      detail: "Demo case · Digital preview + 2–3 visits",
      duration: "2–3 visits",
    },
    {
      id: "aligners",
      index: "03",
      title: "Clear Aligner Transformation",
      tag: "Alignment & balance",
      image: "https://images.pexels.com/photos/33669405/pexels-photo-33669405.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200",
      imageAlt: "Close-up smile illustration for aligner demonstration",
      description: "Illustrative example of easing crowding and centring the midline so the smile reads wider, calmer and more balanced.",
      detail: "Demo case · 3D-planned aligner sequence",
      duration: "6–9 months typical",
    },
  ] as SmileCase[],

  team: [
    {
      id: "maya",
      name: "Dr. Maya Ellis",
      role: "Lead Dentist",
      portrait: "https://images.pexels.com/photos/5355860/pexels-photo-5355860.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=800",
      portraitAlt: "Portrait placeholder for Dr. Maya Ellis",
      bio: "Maya leads clinical care at Aurel with a quiet, methodical approach. Her first visits are known for unhurried conversation, clear photographs and treatment plans written in plain language. She focuses on preventive and restorative dentistry that ages well.",
      focus: ["First visits & diagnosis", "Restorative planning", "Gentle routine care"],
    },
    {
      id: "daniel",
      name: "Dr. Daniel Reed",
      role: "Cosmetic Dentistry",
      portrait: "https://images.pexels.com/photos/37458047/pexels-photo-37458047.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=800",
      portraitAlt: "Portrait placeholder for Dr. Daniel Reed",
      bio: "Daniel designs smile improvements that respect facial proportion and personality. He works from digital previews and trial smiles, so patients can see and feel the direction before anything definitive is done.",
      focus: ["Veneers & bonding", "Whitening", "Smile design previews"],
    },
    {
      id: "sofia",
      name: "Dr. Sofia Bennett",
      role: "General & Preventive Dentistry",
      portrait: "https://images.pexels.com/photos/37458154/pexels-photo-37458154.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=800",
      portraitAlt: "Portrait placeholder for Dr. Sofia Bennett",
      bio: "Sofia looks after families and nervous patients with particular patience. She champions small, consistent habits, honest recalls and comfort-first appointments — especially for children and first-time visitors.",
      focus: ["Family care", "Gum health", "Comfort-first visits"],
    },
  ] as TeamMember[],

  testimonials: [
    {
      quote: "It never felt like a clinic. Warm light, no rush, and everything explained before it happened. I actually look forward to my check-ups now.",
      name: "Sample feedback",
      context: "General dentistry · Demo placeholder",
    },
    {
      quote: "I asked a hundred questions about whitening and every one was answered patiently. The result is bright but still completely me.",
      name: "Sample feedback",
      context: "Whitening · Demo placeholder",
    },
    {
      quote: "From the first scan to the final reveal, I always knew what was next and what it would cost. That clarity made all the difference.",
      name: "Sample feedback",
      context: "Smile planning · Demo placeholder",
    },
    {
      quote: "As someone who avoided dentists for years, the calm pace and gentle check-ins changed everything for me.",
      name: "Sample feedback",
      context: "Nervous patient · Demo placeholder",
    },
  ],

  faqs: [
    {
      q: "What happens at my first appointment?",
      a: "Expect conversation first. We listen to your concerns, take photographs and any needed images, check teeth, gums and bite gently, then talk through what we see in plain language. You will leave with a clear written plan and time to decide — no pressure to commit on the day.",
    },
    {
      q: "How can I request an appointment?",
      a: "Use the consultation form below with your preferred dates, or call / email the studio. This demonstration form validates your details in the browser and shows how a real booking request would work once a booking provider or CRM is connected.",
    },
    {
      q: "Do you offer cosmetic consultations?",
      a: "Yes. Cosmetic consultations start with your goals, photographs and a discussion of what is conservatively possible. If whitening, veneers, aligners or a combined plan could help, we will show reference directions and outline steps, timelines and estimates before anything begins.",
    },
    {
      q: "What payment options are available?",
      a: "Every plan includes a written estimate before treatment so there are no surprises. Specific payment methods, instalment options and insurance handling vary by clinic and must be confirmed with the real practice — this demo makes no claims about accepted schemes.",
    },
    {
      q: "What should I do for a dental emergency?",
      a: "Contact the studio as early as possible and describe your symptoms. We triage by severity, relieve discomfort first and advise next steps. If you have swelling, trauma or uncontrolled bleeding, seek urgent care promptly. Availability claims are confirmed at booking, not promised here.",
    },
  ],
};

export type SiteConfig = typeof siteConfig;
