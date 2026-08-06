import Link from "next/link";
import { ArrowRight, Star, Map, Globe, Building2 } from "lucide-react";
import HeroCarousel from "@/components/HeroCarousel";
import LocalizedText from "@/components/layout/LocalizedText";

const services = [
  {
    icon: "🪪",
    title: {
      en: "Civil Registration",
      om: "Galmee Ummataa",
      am: "የዜጎች ምዝገባ",
    },
    desc: {
      en: "Birth, marriage & death certificates",
      om: "Ragaalee dhalootaa, fuudhaa fi duʼaa",
      am: "ልደት፣ ጋብቻ እና ሞት ማረጋገጫዎች",
    },
    href: "/services/birth-certificate",
  },
  {
    icon: "📋",
    title: {
      en: "Land Administration",
      om: "Bulchiinsa Lafaa",
      am: "የመሬት አስተዳደር",
    },
    desc: {
      en: "Land certificates & title registration",
      om: "Ragaalee lafaa fi galmee mirgaa",
      am: "የመሬት ማረጋገጫዎችና ርእሰ መዝገቦች",
    },
    href: "/services/land-certificate",
  },
  {
    icon: "🏪",
    title: {
      en: "Business License",
      om: "Hayyama Daldalaa",
      am: "የንግድ ፈቃድ",
    },
    desc: {
      en: "New licenses, renewals & transfers",
      om: "Hayyamoota haaraa, haaromsaa fi geejjiba",
      am: "ፈቃዶች አዲስ፣ እንደገና እና ማሻሻያ",
    },
    href: "/services/business-license",
  },
  {
    icon: "🌾",
    title: {
      en: "Agricultural Support",
      om: "Deeggarsa Qonnaa",
      am: "የግብርና ድጋፍ",
    },
    desc: {
      en: "Extension services & input access",
      om: "Tajaajiloota babalʼinaa fi deeggarsa qabeenya",
      am: "እርሻ አገልግሎቶችና የእንቅስቃሴ እድሎች",
    },
    href: "/services/agricultural-extension",
  },
  {
    icon: "🏥",
    title: {
      en: "Health Services",
      om: "Tajaajiloota Fayyaa",
      am: "የጤና አገልግሎቶች",
    },
    desc: {
      en: "Community health & clinic referrals",
      om: "Fayyaa hawaasaa fi doorsisa kilinika",
      am: "ጤና ማህበረሰብና ክሊኒክ መላኪያዎች",
    },
    href: "/services",
  },
  {
    icon: "🏫",
    title: {
      en: "Education Services",
      om: "Tajaajiloota Barnootaa",
      am: "የትምህርት አገልግሎቶች",
    },
    desc: {
      en: "School enrollment & student support",
      om: "Galmee mana barumsaa fi deeggarsa barattoota",
      am: "የትምህርት መዝገብና የተማሪ ድጋፍ",
    },
    href: "/services",
  },
];

const stats = [
  { value: "124,000+", label: "Residents" },
  { value: "18", label: "Kebeles" },
  { value: "847 km²", label: "Total Area" },
  { value: "12+", label: "Gov't Offices" },
];

export default function HomePage() {
  return (
    <>
      <HeroCarousel />

      {/* Services */}
      <section className="bg-gray-50 py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-10">
            <div className="text-xs font-bold text-yellow-600 uppercase tracking-widest mb-2">
              <LocalizedText
                en="Citizens' Services"
                om="Tajaajilawwan Jiraattotaa"
                am="የዜጎች አገልግሎቶች"
              />
            </div>
            <h2 className="text-3xl font-extrabold text-green-900">
              <LocalizedText
                en="What Can We Help You With?"
                om="Maaliin Si Gargaaruu Dandeenya?"
                am="እንንዴት እንረዳዎታለን?"
              />
            </h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {services.map((svc) => (
              <Link
                key={svc.title.en}
                href={svc.href}
                className="bg-white rounded-xl p-5 border border-gray-100 hover:shadow-md hover:-translate-y-0.5 transition group text-center"
              >
                <div className="text-3xl mb-3">{svc.icon}</div>
                <div className="text-sm font-bold text-gray-900 mb-1">
                  <LocalizedText
                    en={svc.title.en}
                    om={svc.title.om}
                    am={svc.title.am}
                  />
                </div>
                <div className="text-xs text-gray-500">
                  <LocalizedText
                    en={svc.desc.en}
                    om={svc.desc.om}
                    am={svc.desc.am}
                  />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* News placeholder */}
      <section className="bg-white py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-between items-end mb-8">
            <div>
              <div className="text-xs font-bold text-yellow-600 uppercase tracking-widest mb-1">
                <LocalizedText
                  en="Latest Updates"
                  om="Odeeffannoo Haaraa"
                  am="የአዳዲስ ዜናዎች"
                />
              </div>
              <h2 className="text-2xl font-extrabold text-green-900">
                <LocalizedText
                  en="News & Announcements"
                  om="Odeessaa fi Beeksisa"
                  am="ዜናና ማስታወቂያዎች"
                />
              </h2>
            </div>
            <Link
              href="/news"
              className="text-sm font-semibold text-green-800 hover:underline flex items-center gap-1"
            >
              <LocalizedText
                en="View all"
                om="Hundumaa Ilaali"
                am="ሁሉንም ተመልከት"
              />
              <ArrowRight size={14} />
            </Link>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
            {[
              "Agricultural Season 2025/26 Support Open",
              "Q3 Performance Review Meeting",
              "Civil Registration Extended Hours",
              "Road Rehabilitation Work Begins",
            ].map((title, i) => (
              <div
                key={i}
                className="border border-gray-100 rounded-xl overflow-hidden hover:shadow-md transition"
              >
                <div
                  className={`h-1 ${i === 0 ? "bg-gradient-to-r from-red-500 to-yellow-500" : "bg-gradient-to-r from-green-700 to-green-500"}`}
                />
                <div className="p-4">
                  <span className="text-xs font-bold uppercase tracking-wide text-gray-400">
                    {["Announcement", "Event", "Notice", "Project"][i]}
                  </span>
                  <h3 className="text-sm font-bold text-gray-900 mt-1 mb-2 leading-snug">
                    {title}
                  </h3>
                  <Link
                    href="/news"
                    className="text-xs font-semibold text-green-800 hover:underline flex items-center gap-1"
                  >
                    Read more <ArrowRight size={11} />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
