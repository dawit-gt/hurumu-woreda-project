import Image from "next/image";
import Link from "next/link";
import { MapPin, Mountain, History, ArrowRight } from "lucide-react";
import LocalizedText from "@/components/layout/LocalizedText";

export default function HurumuOverview() {
  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 via-white to-gray-50 px-4">
      <div className="max-w-7xl mx-auto space-y-20">

        {/* --- SECTION 1: ABOUT HURUMU & LOCATION (Image Left, Text Right) --- */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* Image Container */}
          <div className="relative h-[380px] sm:h-[450px] w-full rounded-3xl overflow-hidden shadow-2xl group">
            <Image
              src="https://images.unsplash.com/photo-1542601906990-b4d3fb778b09" 
              alt="Hurumu Landscape and Town View"
              fill
              className="object-cover group-hover:scale-105 transition duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
            
            {/* Quick Location Badge Overlay */}
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

          {/* Text Content */}
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

            {/* Feature Bullet Points */}
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
                  <h4 className="text-xs font-bold text-gray-900">Coffee Haven</h4>
                  <p className="text-[12px] text-gray-500">World-renowned organic forest coffee cultivation.</p>
                </div>
              </div>
            </div>

            <div className="pt-2">
              <Link 
                href="/about" 
                className="inline-flex items-center gap-2 px-6 py-3 bg-green-800 hover:bg-green-900 text-white text-xs font-bold rounded-xl transition shadow-md"
              >
                <LocalizedText en="Explore Full History" om="Seenaa Guutuu Ilaali" am="ሙሉ ታሪኩን ይመልከቱ" />
                <ArrowRight size={14} />
              </Link>
            </div>
          </div>

        </div>


        {/* --- SECTION 2: TOPOGRAPHY & GEOGRAPHY (Text Left, Image Right) --- */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* Text Content */}
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

            {/* Stat Badges */}
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

          {/* Image Container */}
          <div className="relative h-[380px] sm:h-[450px] w-full rounded-3xl overflow-hidden shadow-2xl group lg:order-2 order-1">
            <Image
              src="https://images.unsplash.com/photo-1500382017468-9049fed747ef" 
              alt="Topography and Agriculture of Hurumu"
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


        {/* --- SECTION 3: HISTORY & HERITAGE (Banner Card Layout) --- */}
        <div className="bg-gradient-to-r from-green-900 via-green-950 to-green-900 rounded-3xl p-8 sm:p-12 text-white shadow-2xl relative overflow-hidden">
          
          {/* Subtle decorative background watermark */}
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

            <div className="pt-4 flex flex-wrap gap-4">
              <div className="flex items-center gap-2 text-xs font-bold text-green-100 bg-white/10 px-4 py-2.5 rounded-xl backdrop-blur-sm border border-white/10">
                ✨ Traditional Gadaa Governance Values
              </div>
              <div className="flex items-center gap-2 text-xs font-bold text-green-100 bg-white/10 px-4 py-2.5 rounded-xl backdrop-blur-sm border border-white/10">
                🌿 Agro-Forestry Preservation
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}