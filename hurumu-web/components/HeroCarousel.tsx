"use client";

import { useEffect, useMemo, useState } from "react";
import Image from "next/image";
import { ArrowLeft, ArrowRight } from "lucide-react";
import Link from "next/link";
import { useLanguage } from "@/components/layout/LanguageProvider";
import { selectByLanguage } from "@/lib/i18n";

const slides = [
  {
    title: {
      en: "Connecting Hurumu Residents with Services",
      om: "Jiraattota Hurumu waliin Tajaajiloota Walitti Hidhu",
      am: "ዜጎችን ከአገልግሎቶች ጋር ማገናኘት",
    },
    description: {
      en: "Fast, transparent access to civil, land, health, and education services for every community member.",
      om: "Tajaajiloota seeraa, lafaa, fayyaa fi barnootaa saffisaan, ifaadhaan hawaasa maraaf argamsiisa.",
      am: "ለእያንዳንዱ ሕብረተሰብ አባል ፈጣንና ግልጽ የሆነ የሕግ፣ የመሬት፣ የጤና እና የትምህርት አገልግሎት መዳረሻ ይሰጣል።",
    },
    image: "/hero-1.jpg",
    actionLabel: {
      en: "Explore services",
      om: "Tajaajiloota Ilaali",
      am: "አገልግሎቶችን ይመልከቱ",
    },
    actionHref: "/services",
  },
  {
    title: {
      en: "News, Projects, and Community Updates",
      om: "Odeeffannoo, Proojektoota, fi Haala Hawaasaa",
      am: "ዜና፣ ፕሮጀክቶች እና የማህበረሰብ አዳዲስ ዕድገቶች",
    },
    description: {
      en: "Stay informed about local development, announcements, and public meetings across Hurumu Woreda.",
      om: "Haala misoomaa, beeksisaalee fi walgaʼii uummataa Hurumu Woreeda keessatti odeeffannoo argadhu.",
      am: "ስለ የአካባቢ እድገት፣ ማስታወቂያዎችና የህብረተሰብ ስብሰባዎች ይማሩ።",
    },
    image: "/hero-2.jpg",
    actionLabel: {
      en: "See news",
      om: "Odeeffannoo Ilaali",
      am: "ዜናዎችን ይመልከቱ",
    },
    actionHref: "/news",
  },
  {
    title: {
      en: "Transparent Local Government for Oromia",
      om: "Bulchiinsa Ifaa fi Hawaasummaa Oromiaaf",
      am: "የኦሮሚያ ግልጽ እና የማህበረሰብ መንግሥት",
    },
    description: {
      en: "Reporting, transparency, and contact channels to strengthen trust and civic participation.",
      om: "Gabaasa, iftoomina fi karaa qunnamtii hirkoo amanamummaa fi hirmaannaa hawaasaa cimsu.",
      am: "ሪፖርቲንግ፣ ግልጽነት እና የግንኙነት መንገዶች እምነትን እና ሕዝብ ማስተዋልን ይጨምራሉ።",
    },
    image: "/hero-3.jpg",
    actionLabel: {
      en: "Learn more",
      om: "Dabalataan Baradhu",
      am: "በተጨማሪ ያማሩ",
    },
    actionHref: "/about",
  },
];

const AUTO_ADVANCE_MS = 8000;

export default function HeroCarousel() {
  const [activeIndex, setActiveIndex] = useState(0);
  const { language } = useLanguage();

  useEffect(() => {
    const timer = window.setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % slides.length);
    }, AUTO_ADVANCE_MS);

    return () => window.clearInterval(timer);
  }, []);

  const activeSlide = slides[activeIndex];
  const title = selectByLanguage(
    language,
    activeSlide.title.en,
    activeSlide.title.om,
    activeSlide.title.am,
  );
  const description = selectByLanguage(
    language,
    activeSlide.description.en,
    activeSlide.description.om,
    activeSlide.description.am,
  );
  const actionLabel = selectByLanguage(
    language,
    activeSlide.actionLabel.en,
    activeSlide.actionLabel.om,
    activeSlide.actionLabel.am,
  );

  const navDots = useMemo(
    () => (
      <div className="flex items-center gap-2 mt-6 justify-center lg:justify-start">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setActiveIndex(index)}
            className={`h-2.5 w-2.5 rounded-full transition ${index === activeIndex ? "bg-yellow-400" : "bg-white/60 hover:bg-white"}`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    ),
    [activeIndex],
  );

  return (
    <section
      className="relative overflow-hidden min-h-[560px]"
      style={{
        backgroundImage: `url(${activeSlide.image})`,
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="absolute inset-0 bg-slate-950/45" />
      <div className="relative max-w-7xl mx-auto px-4 py-24 lg:py-32">
        <div className="grid gap-10 lg:grid-cols-[0.9fr,1.1fr] items-center">
          <div className="relative z-10 text-white">
            <div className="inline-flex items-center gap-2 bg-yellow-500/20 border border-yellow-400/40 rounded-full px-4 py-2 text-xs font-semibold uppercase tracking-widest text-yellow-100 mb-6">
              Hurumu Woreda · Community Services
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold leading-tight mb-6">
              {title}
            </h1>
            <p className="max-w-2xl text-sm sm:text-base text-slate-100/90 leading-relaxed mb-8">
              {description}
            </p>
            <div className="flex flex-wrap items-center gap-4">
              <Link
                href={activeSlide.actionHref}
                className="inline-flex items-center justify-center rounded-full bg-yellow-400 px-6 py-3 text-sm font-semibold text-slate-900 shadow-lg shadow-yellow-500/20 hover:bg-yellow-300 transition"
              >
                {actionLabel}
              </Link>
              <button
                type="button"
                onClick={() =>
                  setActiveIndex(
                    (activeIndex - 1 + slides.length) % slides.length,
                  )
                }
                className="inline-flex h-12 w-12 items-center justify-center rounded-full border border-white/20 bg-white/10 text-white hover:bg-white/20 transition"
                aria-label="Previous slide"
              >
                <ArrowLeft size={20} />
              </button>
              <button
                type="button"
                onClick={() =>
                  setActiveIndex((activeIndex + 1) % slides.length)
                }
                className="inline-flex h-12 w-12 items-center justify-center rounded-full border border-white/20 bg-white/10 text-white hover:bg-white/20 transition"
                aria-label="Next slide"
              >
                <ArrowRight size={20} />
              </button>
            </div>
            {navDots}
          </div>
        </div>
      </div>
    </section>
  );
}
