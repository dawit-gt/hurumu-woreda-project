import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import ServicesList from '@/components/services/ServicesList';

const SERVICES = [
  { slug: 'birth-certificate', name: 'Birth Certificate', nameOromoo: 'Ragaa Dhalootaa', description: 'Register a new birth and obtain an official birth certificate for your child.', category: 'CIVIL_REGISTRATION', icon: '🪪', fee: 0, processingDays: 3 },
  { slug: 'land-certificate', name: 'Land Use Certificate', nameOromoo: 'Ragaa Fayyadama Lafaa', description: 'Obtain official certification for rural or urban land use rights.', category: 'LAND_ADMINISTRATION', icon: '📋', fee: 150, processingDays: 14 },
  { slug: 'business-license', name: 'Business License', nameOromoo: 'Hayyama Daldalaa', description: 'Register a new business or renew your existing trade license.', category: 'BUSINESS_LICENSE', icon: '🏪', fee: 300, processingDays: 7 },
  { slug: 'agricultural-extension', name: 'Agricultural Extension', nameOromoo: "Tajaajila Babal'insa Qonnaa", description: 'Access expert agricultural advice, improved seeds, and input subsidies.', category: 'AGRICULTURE', icon: '🌾', fee: 0, processingDays: 1 },
  { slug: 'marriage-certificate', name: 'Marriage Certificate', nameOromoo: 'Ragaa Fuudhaa fi Heerumaa', description: 'Register a marriage and obtain an official marriage certificate.', category: 'CIVIL_REGISTRATION', icon: '💍', fee: 0, processingDays: 5 },
  { slug: 'id-card', name: 'National ID Card', nameOromoo: 'Kaardii Eenyummaa', description: 'Apply for or renew your national identification card.', category: 'CIVIL_REGISTRATION', icon: '🪪', fee: 50, processingDays: 10 },
];

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
      <div className="bg-yellow-50 border-b border-yellow-200 px-4 py-3">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
          <p className="text-sm text-yellow-800 font-medium">Already applied? Track your application status.</p>
          <Link href="/services/track" className="inline-flex items-center gap-2 bg-yellow-600 text-white text-xs font-bold px-4 py-2 rounded-lg hover:bg-yellow-500 transition">
            Track Application <ArrowRight size={13} />
          </Link>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-4 py-10">
        <ServicesList services={SERVICES} />
      </div>
    </div>
  );
}