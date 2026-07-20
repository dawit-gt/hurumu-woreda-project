'use client';
import Link from 'next/link';
import { ArrowRight, Clock, Banknote } from 'lucide-react';

const CATEGORY_COLORS: Record<string, string> = {
  CIVIL_REGISTRATION: 'bg-blue-50 text-blue-700',
  LAND_ADMINISTRATION: 'bg-green-50 text-green-700',
  BUSINESS_LICENSE: 'bg-yellow-50 text-yellow-700',
  AGRICULTURE: 'bg-emerald-50 text-emerald-700',
  HEALTH: 'bg-red-50 text-red-700',
  EDUCATION: 'bg-purple-50 text-purple-700',
};

const CATEGORY_LABELS: Record<string, string> = {
  CIVIL_REGISTRATION: 'Civil Registration',
  LAND_ADMINISTRATION: 'Land Administration',
  BUSINESS_LICENSE: 'Business License',
  AGRICULTURE: 'Agriculture',
  HEALTH: 'Health',
  EDUCATION: 'Education',
};

export default function ServicesList({ services }: { services: any[] }) {
  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
      {services.map(svc => (
        <Link key={svc.slug} href={`/services/${svc.slug}`}
          className="bg-white rounded-xl border border-gray-100 p-6 hover:shadow-md hover:-translate-y-0.5 transition group">
          <div className="flex items-start justify-between mb-4">
            <div className="text-3xl">{svc.icon}</div>
            <span className={`text-xs font-bold px-2 py-0.5 rounded uppercase tracking-wide ${CATEGORY_COLORS[svc.category] ?? 'bg-gray-100 text-gray-600'}`}>
              {CATEGORY_LABELS[svc.category]}
            </span>
          </div>
          <h3 className="text-base font-bold text-gray-900 mb-0.5 group-hover:text-green-800 transition">{svc.name}</h3>
          <p className="text-xs text-gray-400 mb-3 italic">{svc.nameOromoo}</p>
          <p className="text-sm text-gray-500 leading-relaxed mb-5">{svc.description}</p>
          <div className="flex items-center gap-4 text-xs text-gray-400 mb-4">
            <span className="flex items-center gap-1"><Banknote size={12} />{svc.fee === 0 ? 'Free' : `${svc.fee} ETB`}</span>
            <span className="flex items-center gap-1"><Clock size={12} />{svc.processingDays} {svc.processingDays === 1 ? 'day' : 'days'}</span>
          </div>
          <div className="flex items-center gap-1 text-xs font-semibold text-green-800 group-hover:gap-2 transition-all">
            View details <ArrowRight size={12} />
          </div>
        </Link>
      ))}
    </div>
  );
}