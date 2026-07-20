import Link from 'next/link';
import { ArrowRight, Clock, Banknote, Wifi } from 'lucide-react';

const SERVICES = [
  {
    slug: 'birth-certificate',
    name: 'Birth Certificate',
    nameOromoo: 'Ragaa Dhalootaa',
    description: 'Register a new birth and obtain an official birth certificate for your child.',
    category: 'CIVIL_REGISTRATION',
    icon: '🪪',
    fee: 0,
    processingDays: 3,
    isOnline: false,
  },
  {
    slug: 'land-certificate',
    name: 'Land Use Certificate',
    nameOromoo: 'Ragaa Fayyadama Lafaa',
    description: 'Obtain official certification for rural or urban land use rights.',
    category: 'LAND_ADMINISTRATION',
    icon: '📋',
    fee: 150,
    processingDays: 14,
    isOnline: false,
  },
  {
    slug: 'business-license',
    name: 'Business License',
    nameOromoo: 'Hayyama Daldalaa',
    description: 'Register a new business or renew your existing trade license.',
    category: 'BUSINESS_LICENSE',
    icon: '🏪',
    fee: 300,
    processingDays: 7,
    isOnline: false,
  },
  {
    slug: 'agricultural-extension',
    name: 'Agricultural Extension',
    nameOromoo: "Tajaajila Babal'insa Qonnaa",
    description: 'Access expert agricultural advice, improved seeds, and input subsidies.',
    category: 'AGRICULTURE',
    icon: '🌾',
    fee: 0,
    processingDays: 1,
    isOnline: false,
  },
  {
    slug: 'marriage-certificate',
    name: 'Marriage Certificate',
    nameOromoo: 'Ragaa Fuudhaa fi Heerumaa',
    description: 'Register a marriage and obtain an official marriage certificate.',
    category: 'CIVIL_REGISTRATION',
    icon: '💍',
    fee: 0,
    processingDays: 5,
    isOnline: false,
  },
  {
    slug: 'id-card',
    name: 'National ID Card',
    nameOromoo: 'Kaardii Eenyummaa',
    description: 'Apply for or renew your national identification card.',
    category: 'CIVIL_REGISTRATION',
    icon: '🪪',
    fee: 50,
    processingDays: 10,
    isOnline: false,
  },
];

const CATEGORY_LABELS: Record<string, string> = {
  CIVIL_REGISTRATION: 'Civil Registration',
  LAND_ADMINISTRATION: 'Land Administration',
  BUSINESS_LICENSE: 'Business License',
  AGRICULTURE: 'Agriculture',
  HEALTH: 'Health',
  EDUCATION: 'Education',
  INFRASTRUCTURE: 'Infrastructure',
  SOCIAL_SERVICES: 'Social Services',
};

const CATEGORY_COLORS: Record<string, string> = {
  CIVIL_REGISTRATION: 'bg-blue-50 text-blue-700',
  LAND_ADMINISTRATION: 'bg-green-50 text-green-700',
  BUSINESS_LICENSE: 'bg-yellow-50 text-yellow-700',
  AGRICULTURE: 'bg-emerald-50 text-emerald-700',
  HEALTH: 'bg-red-50 text-red-700',
  EDUCATION: 'bg-purple-50 text-purple-700',
};

export default function ServicesPage() {
  return (
    <div className="bg-gray-50 min-h-screen">
      <div className="bg-green-900 text-white py-12 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-xs font-bold text-yellow-400 uppercase tracking-widest mb-2">Citizen Services</div>
          <h1 className="text-3xl font-extrabold mb-2">Government Services</h1>
          <p className="text-green-200 text-sm">Access official services from Hurumu Woreda Administration</p>
        </div>
      </div>

      {/* Track application bar */}
      <div className="bg-yellow-50 border-b border-yellow-200 px-4 py-3">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
          <p className="text-sm text-yellow-800 font-medium">Already applied? Track your application status.</p>
          <Link href="/services/track" className="inline-flex items-center gap-2 bg-yellow-600 text-white text-xs font-bold px-4 py-2 rounded-lg hover:bg-yellow-500 transition">
            Track Application <ArrowRight size={13} />
          </Link>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-10">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {SERVICES.map(svc => (
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
                <span className="flex items-center gap-1">
                  <Banknote size={12} />
                  {svc.fee === 0 ? 'Free' : `${svc.fee} ETB`}
                </span>
                <span className="flex items-center gap-1">
                  <Clock size={12} />
                  {svc.processingDays} {svc.processingDays === 1 ? 'day' : 'days'}
                </span>
                {svc.isOnline && (
                  <span className="flex items-center gap-1 text-green-600">
                    <Wifi size={12} /> Online
                  </span>
                )}
              </div>
              <div className="flex items-center gap-1 text-xs font-semibold text-green-800 group-hover:gap-2 transition-all">
                View details <ArrowRight size={12} />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}