"use client";
import Link from "next/link";
import { ArrowRight, Clock, Banknote } from "lucide-react";
import { useLanguage } from "@/components/layout/LanguageProvider";
import { selectByLanguage } from "@/lib/i18n";

const CATEGORY_COLORS: Record<string, string> = {
  CIVIL_REGISTRATION: "bg-blue-50 text-blue-700",
  LAND_ADMINISTRATION: "bg-green-50 text-green-700",
  BUSINESS_LICENSE: "bg-yellow-50 text-yellow-700",
  AGRICULTURE: "bg-emerald-50 text-emerald-700",
  HEALTH: "bg-red-50 text-red-700",
  EDUCATION: "bg-purple-50 text-purple-700",
};

const CATEGORY_LABELS: Record<string, { en: string; om: string; am: string }> = {
  CIVIL_REGISTRATION: { en: "Civil Registration", om: "Galmee Ummataa", am: "የዜጎች ምዝገባ" },
  LAND_ADMINISTRATION: { en: "Land Administration", om: "Bulchiinsa Lafaa", am: "የመሬት አስተዳደር" },
  BUSINESS_LICENSE: { en: "Business License", om: "Hayyama Daldalaa", am: "የንግድ ፈቃድ" },
  AGRICULTURE: { en: "Agriculture", om: "Qonnaa", am: "ግብርና" },
  HEALTH: { en: "Health", om: "Fayyaa", am: "ጤና" },
  EDUCATION: { en: "Education", om: "Barnoota", am: "ትምህርት" },
};

export default function ServicesList({ services }: { services: any[] }) {
  const { language } = useLanguage();

  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
      {services.map((svc) => {
        const title = selectByLanguage(
          language,
          svc.name,
          svc.nameOromoo ?? svc.name,
          svc.nameAmharic ?? svc.name,
        );
        const description = selectByLanguage(
          language,
          svc.description,
          svc.descriptionOromoo ?? svc.description,
          svc.descriptionAmharic ?? svc.description,
        );
        const subtitle = selectByLanguage(
          language,
          svc.nameOromoo ?? svc.name,
          svc.nameAmharic ?? svc.name,
          svc.name,
        );
        const feeLabel =
          language === "om"
            ? svc.fee === 0
              ? "Bilisummaa"
              : `${svc.fee} ETB`
            : language === "am"
              ? svc.fee === 0
                ? "ነጻ"
                : `${svc.fee} ኢትቢ`
              : svc.fee === 0
                ? "Free"
                : `${svc.fee} ETB`;
        const daysLabel =
          language === "om"
            ? svc.processingDays === 1
              ? "guyyaa"
              : "guyyoota"
            : language === "am"
              ? svc.processingDays === 1
                ? "ቀን"
                : "ቀናት"
              : svc.processingDays === 1
                ? "day"
                : "days";
        const detailsText =
          language === "om"
            ? "Faayila ilaali"
            : language === "am"
              ? "ዝርዝር ይመልከቱ"
              : "View details";

        return (
          <Link
            key={svc.slug}
            href={`/services/${svc.slug}`}
            className="bg-white rounded-xl border border-gray-100 p-6 hover:shadow-md hover:-translate-y-0.5 transition group"
          >
            <div className="flex items-start justify-between mb-4">
              <div className="text-3xl">{svc.icon}</div>
              <span className={`text-xs font-bold px-2 py-0.5 rounded uppercase tracking-wide ${CATEGORY_COLORS[svc.category] ?? "bg-gray-100 text-gray-600"}`}>
               {selectByLanguage(language, CATEGORY_LABELS[svc.category].en, CATEGORY_LABELS[svc.category].om, CATEGORY_LABELS[svc.category].am)}
              </span>
            </div>
            <h3 className="text-base font-bold text-gray-900 mb-0.5 group-hover:text-green-800 transition">
              {title}
            </h3>
            <p className="text-xs text-gray-400 mb-3 italic">{subtitle}</p>
            <p className="text-sm text-gray-500 leading-relaxed mb-5">
              {description}
            </p>
            <div className="flex items-center gap-4 text-xs text-gray-400 mb-4">
              <span className="flex items-center gap-1">
                <Banknote size={12} />
                {feeLabel}
              </span>
              <span className="flex items-center gap-1">
                <Clock size={12} />
                {svc.processingDays} {daysLabel}
              </span>
            </div>
            <div className="flex items-center gap-1 text-xs font-semibold text-green-800 group-hover:gap-2 transition-all">
              {detailsText} <ArrowRight size={12} />
            </div>
          </Link>
        );
      })}
    </div>
  );
}
