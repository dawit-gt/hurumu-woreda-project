"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { 
  ArrowRight, 
  Search, 
  Sparkles, 
  MapPin, 
  Mountain, 
  History, 
  Building2 
} from "lucide-react";
import HeroCarousel from "@/components/HeroCarousel";
import LocalizedText from "@/components/layout/LocalizedText";

// Interface Definitions for Backend Data
interface NewsItem {
  id: string;
  title: string;
  excerpt?: string;
  tag?: string;
  isUrgent?: boolean;
  featuredImage?: string;
  createdAt: string;
}

interface ServiceItem {
  id: string;
  title: { en: string; om: string; am: string } | string;
  desc?: { en: string; om: string; am: string } | string;
  icon?: string;
  href?: string;
  category?: string;
}

const staticStats = [
  { value: "124,000+", label: { en: "Residents", om: "Jiraattota", am: "ነዋሪዎች" } },
  { value: "18", label: { en: "Kebeles", om: "Kebeleewwan", am: "ቀበሌዎች" } },
  { value: "847 km²", label: { en: "Total Area", om: "Bal'ina Guutuu", am: "አጠቃላይ ስፋት" } },
  { value: "12+", label: { en: "Gov't Offices", om: "Waajjirawwan Mootummaa", am: "የመንግስት ቢሮዎች" } },
];

export default function HomePage() {
  const [news, setNews] = useState<NewsItem[]>([]);
  const [services, setServices] = useState<ServiceItem[]>([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [loading, setLoading] = useState(true);

  // Resilient fetch with fallback handling to prevent 'Failed to fetch' crashes
  useEffect(() => {
    async function fetchData() {
      const baseUrl = process.env.NEXT_PUBLIC_API_URL || "http://localhost:5000";

      try {
        const [newsRes, servicesRes] = await Promise.allSettled([
          fetch(`${baseUrl}/api/news?status=PUBLISHED`),
          fetch(`${baseUrl}/api/services`),
        ]);

        if (newsRes.status === "fulfilled" && newsRes.value.ok) {
          const newsData = await newsRes.value.json();
          setNews(newsData.slice(0, 4));
        }

        if (servicesRes.status === "fulfilled" && servicesRes.value.ok) {
          const servicesData = await servicesRes.value.json();
          setServices(servicesData);
        }
      } catch (err) {
        console.error("Network error loading homepage data:", err);
      } finally {
        setLoading(false);
      }
    }

    fetchData();
  }, []);

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      {/* 1. Hero Section */}
      <HeroCarousel />

      {/* 2. Interactive Quick Search Bar */}
      <section className="bg-white border-b border-gray-100 py-6 px-4 -mt-6 relative z-10 max-w-5xl mx-auto w-full rounded-2xl shadow-lg">
        <div className="flex flex-col md:flex-row items-center gap-4">
          <div className="relative flex-1 w-full">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
            <input
              type="text"
              placeholder="Search services (e.g. Birth Certificate, Land Title, Business License)..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-11 pr-4 py-3 bg-gray-50 rounded-xl border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-green-600 focus:bg-white transition"
            />
          </div>
          <button className="w-full md:w-auto px-6 py-3 bg-green-800 hover:bg-green-900 text-white font-semibold text-sm rounded-xl transition flex items-center justify-center gap-2">
            <Sparkles size={16} />
            <LocalizedText en="Find Service" om="Tajaajila Barbaadi" am="አገልግሎት ፈልግ" />
          </button>
        </div>
      </section>

      {/* 3. Stats Bar */}
      <section className="bg-gradient-to-r from-green-900 via-green-800 to-green-900 py-8 px-4 mt-8">
        <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          {staticStats.map((stat, i) => (
            <div key={i} className="p-4 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10">
              <div className="text-3xl font-extrabold text-white tracking-tight">{stat.value}</div>
              <div className="text-xs text-green-200 uppercase tracking-widest mt-1">
                <LocalizedText en={stat.label.en} om={stat.label.om} am={stat.label.am} />
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 4. Citizens' Services Grid */}
      <section className="py-16 px-4 max-w-7xl mx-auto w-full">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-xs font-bold text-yellow-700 uppercase tracking-widest bg-yellow-100/60 px-3 py-1 rounded-full">
            <LocalizedText en="Citizens' Services" om="Tajaajilawwan Jiraattotaa" am="የዜጎች አገልግሎቶች" />
          </span>
          <h2 className="text-3xl font-extrabold text-gray-900 mt-3">
            <LocalizedText en="What Can We Help You With Today?" om="Maaliin Si Gargaaruu Dandeenya?" am="እንዴት እንረዳዎታለን?" />
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all group">
            <div className="w-12 h-12 bg-green-50 rounded-xl flex items-center justify-center text-2xl mb-4 group-hover:scale-110 transition">
              🪪
            </div>
            <h3 className="text-lg font-bold text-gray-900 mb-2">
              <LocalizedText en="Civil Registration" om="Galmee Ummataa" am="የዜጎች ምዝገባ" />
            </h3>
            <p className="text-xs text-gray-500 mb-4 leading-relaxed">
              <LocalizedText 
                en="Official birth, marriage, and vital status certificate applications and renewals." 
                om="Ragaalee dhalootaa, fuudhaa fi duʼaa" 
                am="ልደት፣ ጋብቻ እና ሞት ማረጋገጫዎች" 
              />
            </p>
            <Link 
              href="/services/birth-certificate" 
              className="text-xs font-bold text-green-700 group-hover:text-green-900 flex items-center gap-1"
            >
              <LocalizedText en="Apply Online" om="Iyyadhu" am="በመስመር ላይ ያመልክቱ" />
              <ArrowRight size={14} className="group-hover:translate-x-1 transition" />
            </Link>
          </div>

          <div className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all group">
            <div className="w-12 h-12 bg-amber-50 rounded-xl flex items-center justify-center text-2xl mb-4 group-hover:scale-110 transition">
              🌾
            </div>
            <h3 className="text-lg font-bold text-gray-900 mb-2">
              <LocalizedText en="Agricultural Support" om="Deeggarsa Qonnaa" am="የግብርና ድጋፍ" />
            </h3>
            <p className="text-xs text-gray-500 mb-4 leading-relaxed">
              <LocalizedText 
                en="Fertilizer access, extension service consultations, and seasonal guidance." 
                om="Tajaajiloota babalʼinaa fi deeggarsa qabeenya" 
                am="እርሻ አገልግሎቶችና የእንቅስቃሴ እድሎች" 
              />
            </p>
            <Link 
              href="/services/agricultural-extension" 
              className="text-xs font-bold text-green-700 group-hover:text-green-900 flex items-center gap-1"
            >
              <LocalizedText en="View Programs" om="Ilaali" am="ፕሮግራሞችን ይመልከቱ" />
              <ArrowRight size={14} className="group-hover:translate-x-1 transition" />
            </Link>
          </div>

          <div className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all group">
            <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center text-2xl mb-4 group-hover:scale-110 transition">
              🏪
            </div>
            <h3 className="text-lg font-bold text-gray-900 mb-2">
              <LocalizedText en="Business License" om="Hayyama Daldalaa" am="የንግድ ፈቃድ" />
            </h3>
            <p className="text-xs text-gray-500 mb-4 leading-relaxed">
              <LocalizedText 
                en="Issue new commercial permits, process tax assessments, and license renewals." 
                om="Hayyamoota haaraa, haaromsaa fi geejjiba" 
                am="ፈቃዶች አዲስ፣ እንደገና እና ማሻሻያ" 
              />
            </p>
            <Link 
              href="/services/business-license" 
              className="text-xs font-bold text-green-700 group-hover:text-green-900 flex items-center gap-1"
            >
              <LocalizedText en="Get Started" om="Jalqabi" am="ይጀምሩ" />
              <ArrowRight size={14} className="group-hover:translate-x-1 transition" />
            </Link>
          </div>
        </div>
      </section>

      {/* 5. ABOUT HURUMU: Location, Topography & History */}
      <section className="py-20 bg-gradient-to-b from-gray-50 via-white to-gray-50 px-4 border-t border-gray-100">
        <div className="max-w-7xl mx-auto space-y-20">

          {/* Location Section: Image Left, Text Right */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative h-[380px] sm:h-[450px] w-full rounded-3xl overflow-hidden shadow-2xl group">
              <Image
                src="https://images.unsplash.com/photo-1542601906990-b4d3fb778b09"
                alt="Hurumu Woreda Town and Location"
                fill
                className="object-cover group-hover:scale-105 transition duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
              <div className="absolute bottom-6 left-6 right-6 bg-white/10 backdrop-blur-md p-4 rounded-2xl border border-white/20 text-white flex items-center gap-3">
                <div className="w-10 h-10 bg-green-600 rounded-xl flex items-center justify-center shrink-0">
                  <MapPin size={22} className="text-white" />
                </div>
                <div>
                  <p className="text-xs text-green-200 uppercase tracking-widest font-semibold">Location</p>
                  <p className="text-sm font-bold">Illubabor Zone, Oromia Region, Ethiopia</p>
                </div>
              </div>
            </div>

            <div className="space-y-5">
              <span className="inline-flex items-center gap-2 text-xs font-extrabold text-green-800 uppercase tracking-widest bg-green-100/80 px-3 py-1 rounded-full">
                <MapPin size={14} />
                <LocalizedText en="About Our Woreda" om="Waa'ee Aanaa Keenyaa" am="ስለ ወረዳችን" />
              </span>

              <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 leading-tight">
                <LocalizedText 
                  en="Welcome to Hurumu Woreda" 
                  om="Baga Gara Aanaa Hurumuotti Dhuftan" 
                  am="እንኳን ወደ ሁሩሙ ወረዳ በደህና መጡ" 
                />
              </h2>

              <p className="text-gray-600 leading-relaxed text-sm sm:text-base">
                Hurumu Woreda is a vibrant district situated in the heart of the Illubabor Zone within the Oromia Region of Southwestern Ethiopia. Known for its rich natural resource base, dense forest coverage, and thriving agricultural communities, Hurumu serves as a key economic hub for high-quality coffee production and ecological heritage.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                <div className="p-4 bg-white rounded-xl border border-gray-100 shadow-sm flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-green-50 text-green-700 flex items-center justify-center font-bold text-sm shrink-0">
                    📍
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-gray-900">Strategic Position</h4>
                    <p className="text-[12px] text-gray-500">Connected to major trade routes in Western Oromia.</p>
                  </div>
                </div>

                <div className="p-4 bg-white rounded-xl border border-gray-100 shadow-sm flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-amber-50 text-amber-700 flex items-center justify-center font-bold text-sm shrink-0">
                    ☕
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-gray-900">Coffee Cultivation</h4>
                    <p className="text-[12px] text-gray-500">Renowned for high-grade organic forest coffee.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Topography Section: Text Left, Image Right */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-5 lg:order-1 order-2">
              <span className="inline-flex items-center gap-2 text-xs font-extrabold text-amber-800 uppercase tracking-widest bg-amber-100/80 px-3 py-1 rounded-full">
                <Mountain size={14} />
                <LocalizedText en="Geography & Topography" om="Teessuma Lafaa" am="የመሬት አቀማመጥ" />
              </span>

              <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 leading-tight">
                <LocalizedText 
                  en="Lush Highlands, Valleys & Fertile Soils" 
                  om="Badaa, Gammoojjii fi Lafa Gabbata" 
                  am="ለም መሬቶችና ተራራማ አቀማመጥ" 
                />
              </h2>

              <p className="text-gray-600 leading-relaxed text-sm sm:text-base">
                The topography of Hurumu Woreda is characterized by undulating hills, high plateau areas, and lush valley basins. Benefiting from a favorable highland climatic condition (*Bada-Daree*), the region experiences abundant annual rainfall, supporting pristine natural water streams and dense vegetation year-round.
              </p>

              <div className="grid grid-cols-3 gap-4 pt-2">
                <div className="p-3 bg-gray-50 rounded-xl border border-gray-200/60 text-center">
                  <span className="text-xs font-bold text-gray-400 block">Climate</span>
                  <span className="text-sm font-extrabold text-green-900">Bada-Daree</span>
                </div>
                <div className="p-3 bg-gray-50 rounded-xl border border-gray-200/60 text-center">
                  <span className="text-xs font-bold text-gray-400 block">Elevation</span>
                  <span className="text-sm font-extrabold text-green-900">1,600m+</span>
                </div>
                <div className="p-3 bg-gray-50 rounded-xl border border-gray-200/60 text-center">
                  <span className="text-xs font-bold text-gray-400 block">Forest Cover</span>
                  <span className="text-sm font-extrabold text-green-900">&gt; 35%</span>
                </div>
              </div>
            </div>

            <div className="relative h-[380px] sm:h-[450px] w-full rounded-3xl overflow-hidden shadow-2xl group lg:order-2 order-1">
              <Image
                src="https://images.unsplash.com/photo-1500382017468-9049fed747ef"
                alt="Hurumu Topography and Nature"
                fill
                className="object-cover group-hover:scale-105 transition duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
              <div className="absolute bottom-6 left-6 right-6 bg-white/10 backdrop-blur-md p-4 rounded-2xl border border-white/20 text-white flex items-center gap-3">
                <div className="w-10 h-10 bg-amber-600 rounded-xl flex items-center justify-center shrink-0">
                  <Mountain size={22} className="text-white" />
                </div>
                <div>
                  <p className="text-xs text-amber-200 uppercase tracking-widest font-semibold">Environment</p>
                  <p className="text-sm font-bold">Fertile Agricultural Basins & River Streams</p>
                </div>
              </div>
            </div>
          </div>

          {/* History Section: Full-Width Heritage Banner */}
          <div className="bg-gradient-to-r from-green-900 via-green-950 to-green-900 rounded-3xl p-8 sm:p-12 text-white shadow-2xl relative overflow-hidden">
            <History className="absolute -right-10 -bottom-10 text-white/5 w-80 h-80 pointer-events-none" />

            <div className="max-w-3xl space-y-4 relative z-10">
              <span className="inline-flex items-center gap-2 text-xs font-extrabold text-yellow-400 uppercase tracking-widest bg-yellow-400/10 border border-yellow-400/20 px-3 py-1 rounded-full">
                <History size={14} />
                <LocalizedText en="Cultural Heritage" om="Aadaa fi Seenaa" am="ታሪክና ባህል" />
              </span>

              <h2 className="text-2xl sm:text-3xl font-extrabold">
                <LocalizedText 
                  en="Rich Cultural Legacy & Community Heritage" 
                  om="Seenaa Hawaasaa fi Aadaa Badhaadhaa" 
                  am="የበለፀገ የህብረተሰብ ታሪክና ባህላዊ እሴቶች" 
                />
              </h2>

              <p className="text-green-200 text-sm sm:text-base leading-relaxed">
                Hurumu has a long-standing history of community harmony, traditional Oromo governance systems, and vibrant local markets. The district's historical legacy is deeply rooted in communal collaboration (*Dabo*), indigenous conflict resolution values, and sustainable land stewardship passed down across generations.
              </p>

              <div className="pt-2 flex flex-wrap gap-4">
                <div className="flex items-center gap-2 text-xs font-bold text-green-100 bg-white/10 px-4 py-2.5 rounded-xl backdrop-blur-sm border border-white/10">
                  ✨ Traditional Gadaa Values
                </div>
                <div className="flex items-center gap-2 text-xs font-bold text-green-100 bg-white/10 px-4 py-2.5 rounded-xl backdrop-blur-sm border border-white/10">
                  🌿 Forest Conservation Culture
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* 6. Live News & Media Section */}
      <section className="bg-white py-16 px-4 border-t border-gray-100">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end mb-10 gap-4">
            <div>
              <span className="text-xs font-bold text-green-700 uppercase tracking-widest bg-green-50 px-3 py-1 rounded-full">
                <LocalizedText en="Updates & Media" om="Odeeffannoo Haaraa" am="የአዳዲስ ዜናዎች" />
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-900 mt-2">
                <LocalizedText en="News & Announcements" om="Odeessaa fi Beeksisa" am="ዜናና ማስታወቂያዎች" />
              </h2>
            </div>
            <Link
              href="/news"
              className="px-4 py-2 bg-gray-100 hover:bg-gray-200 text-gray-800 rounded-xl text-xs font-bold transition flex items-center gap-1"
            >
              <LocalizedText en="View All News" om="Hundumaa Ilaali" am="ሁሉንም ዜናዎች ይመልከቱ" />
              <ArrowRight size={14} />
            </Link>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {news.length > 0 ? (
              news.map((item) => (
                <article key={item.id} className="bg-white rounded-2xl border border-gray-100 overflow-hidden shadow-sm hover:shadow-lg transition flex flex-col group">
                  <div className="relative h-44 bg-gray-200 w-full overflow-hidden">
                    <Image
                      src={item.featuredImage || "https://images.unsplash.com/photo-1500382017468-9049fed747ef"}
                      alt={item.title}
                      fill
                      className="object-cover group-hover:scale-105 transition duration-300"
                    />
                    {item.isUrgent && (
                      <span className="absolute top-3 left-3 bg-red-600 text-white text-[10px] font-extrabold px-2.5 py-1 rounded-full uppercase tracking-wider shadow">
                        Urgent
                      </span>
                    )}
                  </div>
                  <div className="p-5 flex-1 flex flex-col justify-between">
                    <div>
                      <span className="text-[11px] font-bold text-green-700 uppercase tracking-wide">
                        {item.tag || "Notice"}
                      </span>
                      <h3 className="text-sm font-bold text-gray-900 mt-1 mb-2 line-clamp-2 leading-snug">
                        {item.title}
                      </h3>
                      {item.excerpt && (
                        <p className="text-xs text-gray-500 line-clamp-2 mb-4">{item.excerpt}</p>
                      )}
                    </div>
                    <Link
                      href={`/news/${item.id}`}
                      className="text-xs font-bold text-green-800 hover:text-green-900 flex items-center gap-1 mt-2"
                    >
                      <LocalizedText en="Read Story" om="Dabalataan Ilaali" am="ሙሉውን ያንብቡ" />
                      <ArrowRight size={12} />
                    </Link>
                  </div>
                </article>
              ))
            ) : (
              [1, 2, 3, 4].map((n) => (
                <div key={n} className="animate-pulse bg-gray-100 h-64 rounded-2xl"></div>
              ))
            )}
          </div>
        </div>
      </section>

      {/* 7. Call to Action (CTA) Banner */}
      <section className="bg-gradient-to-br from-green-950 via-green-900 to-green-950 py-16 px-4 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <Building2 className="mx-auto mb-4 text-yellow-400" size={40} />
          <h2 className="text-3xl font-extrabold mb-4">
            <LocalizedText 
              en="Need Urgent Assistance from Local Woreda Officials?" 
              om="Gargaarsi Ariifachiisaa Isin Barbaachisaa?" 
              am="ከወረዳ አስተዳደር አስቸኳይ እርዳታ ይፈልጋሉ?" 
            />
          </h2>
          <p className="text-green-200 text-sm max-w-xl mx-auto mb-8 leading-relaxed">
            Submit public inquiries, report community updates, or schedule an appointment with local kebele administrators online.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link 
              href="/contact" 
              className="px-8 py-3.5 bg-yellow-500 hover:bg-yellow-400 text-green-950 font-bold text-sm rounded-xl transition shadow-lg"
            >
              <LocalizedText en="Contact Office" om="Nu Quunnamaa" am="ቢሮውን ያነጋግሩ" />
            </Link>
            <Link 
              href="/services" 
              className="px-8 py-3.5 bg-white/10 hover:bg-white/20 text-white font-bold text-sm rounded-xl border border-white/20 transition backdrop-blur-sm"
            >
              <LocalizedText en="Browse Portal" om="Tajaajila Ilaala" am="አገልግሎቶችን ይመልከቱ" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}