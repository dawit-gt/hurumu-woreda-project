import Link from 'next/link';
import { notFound } from 'next/navigation';
import { ArrowLeft, Clock, Banknote, CheckCircle, FileText, ArrowRight } from 'lucide-react';

const SERVICES: Record<string, any> = {
  'birth-certificate': {
    name: 'Birth Certificate',
    nameOromoo: 'Ragaa Dhalootaa',
    description: 'Register a new birth and obtain an official birth certificate.',
    category: 'Civil Registration',
    icon: '🪪',
    fee: 0,
    processingDays: 3,
    department: 'Civil Registration Office',
    phone: '+251 577 001 007',
    requiredDocs: ['Both parents\' valid ID cards', 'Hospital or health center delivery record', 'Two witnesses with valid IDs', 'Completed registration form'],
    steps: ['Visit the Civil Registration Office at the Woreda Administration building', 'Submit all required documents to the registration clerk', 'Pay any applicable processing fee at the finance window', 'Receive your collection receipt', 'Return after 3 working days to collect the certificate'],
  },
  'land-certificate': {
    name: 'Land Use Certificate',
    nameOromoo: 'Ragaa Fayyadama Lafaa',
    description: 'Obtain official certification for rural or urban land use rights.',
    category: 'Land Administration',
    icon: '📋',
    fee: 150,
    processingDays: 14,
    department: 'Land Administration Office',
    phone: '+251 577 001 006',
    requiredDocs: ['Valid ID card', 'Previous land holding documents', 'Neighbor confirmation letters (3)', 'Site survey diagram', 'Kebele administration letter'],
    steps: ['Submit application at the Land Administration Office', 'Pay the processing fee (150 ETB)', 'Site inspection by survey team (within 5 days)', 'Public notice period — 7 days', 'Certificate issuance if no disputes filed'],
  },
  'business-license': {
    name: 'Business License',
    nameOromoo: 'Hayyama Daldalaa',
    description: 'Register a new business or renew your existing trade license.',
    category: 'Business License',
    icon: '🏪',
    fee: 300,
    processingDays: 7,
    department: 'Trade & Industry Office',
    phone: '+251 577 001 008',
    requiredDocs: ['Valid ID card', 'Business description and plan', 'Location lease agreement', 'Tax Identification Number (TIN)', 'Completed application form'],
    steps: ['Complete the business registration form at the Trade Office', 'Submit all required documents', 'Pay the licensing fee (300 ETB)', 'Premises inspection by trade officer', 'License issued within 7 working days'],
  },
  'agricultural-extension': {
    name: 'Agricultural Extension',
    nameOromoo: "Tajaajila Babal'insa Qonnaa",
    description: 'Access expert agricultural advice, improved seeds, and input subsidies.',
    category: 'Agriculture',
    icon: '🌾',
    fee: 0,
    processingDays: 1,
    department: 'Agriculture & Natural Resources Office',
    phone: '+251 577 001 001',
    requiredDocs: ['Valid Farmer ID card', 'Land use certificate copy', 'Completed registration form'],
    steps: ['Register at your local kebele administration office', 'You will be assigned to a dedicated extension worker', 'Extension worker visits your farm for assessment', 'Receive inputs, advice, and training as needed'],
  },
  'marriage-certificate': {
    name: 'Marriage Certificate',
    nameOromoo: 'Ragaa Fuudhaa fi Heerumaa',
    description: 'Register a marriage and obtain an official marriage certificate.',
    category: 'Civil Registration',
    icon: '💍',
    fee: 0,
    processingDays: 5,
    department: 'Civil Registration Office',
    phone: '+251 577 001 007',
    requiredDocs: ['Both spouses\' valid ID cards', 'Two witnesses with valid IDs', 'Completed registration form', 'Proof of single status (if previously married, divorce/death certificate)'],
    steps: ['Both spouses visit the Civil Registration Office together', 'Submit all required documents', 'Witnesses sign the registration form', 'Marriage registered and certificate issued within 5 working days'],
  },
  'id-card': {
    name: 'National ID Card',
    nameOromoo: 'Kaardii Eenyummaa',
    description: 'Apply for or renew your national identification card.',
    category: 'Civil Registration',
    icon: '🪪',
    fee: 50,
    processingDays: 10,
    department: 'Civil Registration Office',
    phone: '+251 577 001 007',
    requiredDocs: ['Birth certificate or baptismal record', 'Kebele resident confirmation letter', 'Two passport-size photographs', 'Old ID card (for renewal)'],
    steps: ['Visit the Civil Registration Office', 'Submit required documents and photos', 'Pay the 50 ETB processing fee', 'Biometric data capture (photo and fingerprint)', 'Collect ID card after 10 working days'],
  },
};

export function generateStaticParams() {
  return Object.keys(SERVICES).map(slug => ({ slug }));
}

export default function ServiceDetailPage({ params }: { params: { slug: string } }) {
  const svc = SERVICES[params.slug];
  if (!svc) notFound();

  return (
    <div className="bg-gray-50 min-h-screen">
      <div className="bg-green-900 text-white py-10 px-4">
        <div className="max-w-4xl mx-auto">
          <Link href="/services" className="inline-flex items-center gap-2 text-green-300 hover:text-white text-sm mb-6 transition">
            <ArrowLeft size={15} /> Back to Services
          </Link>
          <div className="flex items-center gap-4">
            <div className="text-4xl">{svc.icon}</div>
            <div>
              <p className="text-xs text-yellow-400 font-bold uppercase tracking-widest mb-1">{svc.category}</p>
              <h1 className="text-2xl lg:text-3xl font-extrabold">{svc.name}</h1>
              <p className="text-green-300 text-sm italic mt-0.5">{svc.nameOromoo}</p>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 py-10 grid md:grid-cols-3 gap-6">

        {/* Main content */}
        <div className="md:col-span-2 space-y-6">
          <div className="bg-white rounded-xl border border-gray-100 p-6 shadow-sm">
            <h2 className="text-base font-bold text-gray-900 mb-3">About this service</h2>
            <p className="text-sm text-gray-600 leading-relaxed">{svc.description}</p>
          </div>

          <div className="bg-white rounded-xl border border-gray-100 p-6 shadow-sm">
            <h2 className="text-base font-bold text-gray-900 mb-4 flex items-center gap-2">
              <FileText size={16} className="text-green-700" /> Required Documents
            </h2>
            <ul className="space-y-2">
              {svc.requiredDocs.map((doc: string, i: number) => (
                <li key={i} className="flex items-start gap-2.5 text-sm text-gray-700">
                  <CheckCircle size={15} className="text-green-600 flex-shrink-0 mt-0.5" />
                  {doc}
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-white rounded-xl border border-gray-100 p-6 shadow-sm">
            <h2 className="text-base font-bold text-gray-900 mb-4">How to Apply — Step by Step</h2>
            <ol className="space-y-3">
              {svc.steps.map((step: string, i: number) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="w-6 h-6 rounded-full bg-green-800 text-white text-xs font-bold flex items-center justify-center flex-shrink-0 mt-0.5">
                    {i + 1}
                  </span>
                  <span className="text-sm text-gray-700 leading-relaxed">{step}</span>
                </li>
              ))}
            </ol>
          </div>
        </div>

        {/* Sidebar */}
        <div className="space-y-4">
          <div className="bg-white rounded-xl border border-gray-100 p-5 shadow-sm">
            <h3 className="text-sm font-bold text-gray-900 mb-4">Service Info</h3>
            <div className="space-y-3">
              <div className="flex items-center gap-2.5">
                <Banknote size={15} className="text-gray-400" />
                <div>
                  <p className="text-xs text-gray-400">Fee</p>
                  <p className="text-sm font-bold text-gray-900">{svc.fee === 0 ? 'Free' : `${svc.fee} ETB`}</p>
                </div>
              </div>
              <div className="flex items-center gap-2.5">
                <Clock size={15} className="text-gray-400" />
                <div>
                  <p className="text-xs text-gray-400">Processing Time</p>
                  <p className="text-sm font-bold text-gray-900">{svc.processingDays} working {svc.processingDays === 1 ? 'day' : 'days'}</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl border border-gray-100 p-5 shadow-sm">
            <h3 className="text-sm font-bold text-gray-900 mb-3">Contact Office</h3>
            <p className="text-xs text-gray-600 mb-1">{svc.department}</p>
            <p className="text-xs text-green-800 font-semibold">{svc.phone}</p>
            <p className="text-xs text-gray-400 mt-2">Mon – Fri, 8:00 AM – 5:00 PM</p>
          </div>

          <div className="bg-green-800 rounded-xl p-5 text-white">
            <h3 className="text-sm font-bold mb-2">Already applied?</h3>
            <p className="text-xs text-green-200 mb-3">Track the status of your application with your reference number.</p>
            <Link href="/services/track" className="inline-flex items-center gap-1.5 bg-white text-green-800 text-xs font-bold px-4 py-2 rounded-lg hover:bg-green-50 transition">
              Track Application <ArrowRight size={12} />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}