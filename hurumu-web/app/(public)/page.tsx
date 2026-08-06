import Link from "next/link";
import { ArrowRight, Star, Map, Globe, Building2 } from "lucide-react";
import HeroCarousel from "@/components/HeroCarousel";

const services = [
  {
    icon: "🪪",
    title: "Civil Registration",
    desc: "Birth, marriage & death certificates",
    href: "/services/birth-certificate",
  },
  {
    icon: "📋",
    title: "Land Administration",
    desc: "Land certificates & title registration",
    href: "/services/land-certificate",
  },
  {
    icon: "🏪",
    title: "Business License",
    desc: "New licenses, renewals & transfers",
    href: "/services/business-license",
  },
  {
    icon: "🌾",
    title: "Agricultural Support",
    desc: "Extension services & input access",
    href: "/services/agricultural-extension",
  },
  {
    icon: "🏥",
    title: "Health Services",
    desc: "Community health & clinic referrals",
    href: "/services",
  },
  {
    icon: "🏫",
    title: "Education Services",
    desc: "School enrollment & student support",
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
              Citizens' Services
            </div>
            <h2 className="text-3xl font-extrabold text-green-900">
              What Can We Help You With?
            </h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {services.map((svc) => (
              <Link
                key={svc.title}
                href={svc.href}
                className="bg-white rounded-xl p-5 border border-gray-100 hover:shadow-md hover:-translate-y-0.5 transition group text-center"
              >
                <div className="text-3xl mb-3">{svc.icon}</div>
                <div className="text-sm font-bold text-gray-900 mb-1">
                  {svc.title}
                </div>
                <div className="text-xs text-gray-500">{svc.desc}</div>
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
                Latest Updates
              </div>
              <h2 className="text-2xl font-extrabold text-green-900">
                News & Announcements
              </h2>
            </div>
            <Link
              href="/news"
              className="text-sm font-semibold text-green-800 hover:underline flex items-center gap-1"
            >
              View all <ArrowRight size={14} />
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
