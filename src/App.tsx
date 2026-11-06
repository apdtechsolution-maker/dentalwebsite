import Booking from "./components/Booking";
import Contact from "./components/Contact";
import Experience from "./components/Experience";
import Faq from "./components/Faq";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Philosophy from "./components/Philosophy";
import SmileGallery from "./components/SmileGallery";
import Team from "./components/Team";
import Technology from "./components/Technology";
import Testimonials from "./components/Testimonials";
import Treatments from "./components/Treatments";

function Marquee() {
  const words = ["General Dentistry", "Whitening", "Veneers", "Clear Aligners", "Implants", "Smile Makeovers", "Emergency Care"];
  const row = [...words, ...words];
  return (
    <div className="overflow-hidden border-y border-cocoa/12 bg-ivory py-5" aria-hidden>
      <div className="animate-marquee flex w-max items-center gap-8">
        {row.map((w, i) => (
          <span key={i} className="flex items-center gap-8 whitespace-nowrap">
            <span className="font-serif text-xl text-charcoal/70 italic sm:text-2xl">{w}</span>
            <span className="text-[0.65rem] tracking-[0.3em] text-cocoa/50">✦</span>
          </span>
        ))}
      </div>
    </div>
  );
}

function TrustBar() {
  return (
    <div className="bg-ivory">
      <div className="mx-auto flex max-w-[1320px] flex-wrap items-center justify-between gap-4 px-5 py-6 text-[0.72rem] font-extrabold tracking-[0.18em] text-charcoal/50 sm:px-8 lg:px-10">
        <span>EST. FOR CALM DENTISTRY</span>
        <span className="hidden sm:inline">TRANSPARENT ESTIMATES</span>
        <span className="hidden md:inline">DIGITAL-FIRST PLANNING</span>
        <span>PRIVATE STUDIO · DEMO</span>
      </div>
    </div>
  );
}

export default function App() {
  return (
    <div className="min-h-screen bg-ivory text-charcoal antialiased">
      <a href="#booking" className="sr-only focus:not-sr-only focus:absolute focus:top-2 focus:left-2 focus:z-[100] focus:rounded-full focus:bg-charcoal focus:px-5 focus:py-3 focus:text-ivory">
        Skip to booking
      </a>
      <Header />
      <main>
        <Hero />
        <TrustBar />
        <Philosophy />
        <Marquee />
        <WhyChooseSection />
        <Treatments />
        <SmileGallery />
        <Team />
        <Technology />
        <Experience />
        <Testimonials />
        <Faq />
        <Booking />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

// Local wrapper to keep import order clean (WhyChoose file exports default)
import WhyChoose from "./components/WhyChoose";
function WhyChooseSection() {
  return <WhyChoose />;
}
