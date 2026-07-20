import Link from 'next/link';
import { notFound } from 'next/navigation';
import { ArrowLeft, Phone, Mail, Users, ArrowRight } from 'lucide-react';

const DEPARTMENTS: Record<string, any> = {
  agriculture: {
    name: 'Agriculture & Natural Resources', nameOromoo: 'Qonnaa fi Qabeenya Uumamaa',
    description: 'The Agriculture and Natural Resources Office oversees all agricultural development, extension services, natural resource management, and livestock programs across the 18 kebeles of Hurumu Woreda.',
    icon: '🌾', headName: 'Ato Gemechu Tadesse', phone: '+251 577 001 001', email: 'agriculture@hurumu.pro.et',
    hours: 'Monday – Friday, 8:00 AM – 5:00 PM',
    responsibilities: ['Agricultural extension and farmer support', 'Improved seed and fertilizer distribution', 'Livestock health and veterinary services', 'Natural resource conservation', 'Irrigation development and water harvesting', 'Forest management and environmental protection'],
    services: [{ name: 'Agricultural Extension', slug: 'agricultural-extension' }],
  },
  health: {
    name: 'Health & Social Affairs', nameOromoo: 'Fayyaa fi Dhimma Hawaasaa',
    description: 'The Health Office coordinates primary healthcare delivery, social welfare programs, and community health initiatives across Hurumu Woreda, overseeing 3 health centers and multiple health posts.',
    icon: '🏥', headName: 'Dr. Fatuma Ali', phone: '+251 577 001 002', email: 'health@hurumu.pro.et',
    hours: 'Monday – Friday, 8:00 AM – 5:00 PM',
    responsibilities: ['Primary healthcare coordination', 'Maternal and child health programs', 'Vaccination and immunization campaigns', 'Nutrition programs', 'Social welfare and vulnerable group support', 'Health education and promotion'],
    services: [],
  },
  education: {
    name: 'Education', nameOromoo: 'Barnoota',
    description: 'The Education Office administers primary and secondary education across Hurumu Woreda, supporting 47 schools, teacher development, and student welfare programs.',
    icon: '🏫', headName: 'Ato Berhanu Girma', phone: '+251 577 001 003', email: 'education@hurumu.pro.et',
    hours: 'Monday – Friday, 8:00 AM – 5:00 PM',
    responsibilities: ['School administration and oversight', 'Teacher recruitment and development', 'Student enrollment and welfare', 'School construction and maintenance', 'Adult literacy programs', 'Special needs education support'],
    services: [],
  },
  finance: {
    name: 'Finance & Economy', nameOromoo: 'Maallaqaa fi Dinagdee',
    description: 'The Finance Office manages the woreda budget, revenue collection, financial reporting, and economic planning to ensure transparent and accountable use of public funds.',
    icon: '💰', headName: 'Ato Tadesse Wolde', phone: '+251 577 001 004', email: 'finance@hurumu.pro.et',
    hours: 'Monday – Friday, 8:00 AM – 5:00 PM',
    responsibilities: ['Annual budget preparation and management', 'Revenue collection and tax administration', 'Financial reporting and auditing', 'Economic development planning', 'Public procurement oversight', 'Payroll management for woreda staff'],
    services: [],
  },
  infrastructure: {
    name: 'Infrastructure & Construction', nameOromoo: 'Insfiraastirakcharii fi Ijaarsa',
    description: 'The Infrastructure Office oversees construction and maintenance of roads, public buildings, water supply systems, and other infrastructure projects across Hurumu Woreda.',
    icon: '🏗️', headName: 'Engr. Mohammed Hussien', phone: '+251 577 001 005', email: 'infrastructure@hurumu.pro.et',
    hours: 'Monday – Friday, 8:00 AM – 5:00 PM',
    responsibilities: ['Road construction and maintenance', 'Public building construction', 'Water supply and sanitation projects', 'Rural electrification coordination', 'Construction quality supervision', 'Infrastructure project planning'],
    services: [],
  },
  land: {
    name: 'Land Administration', nameOromoo: 'Bulchiinsa Lafaa',
    description: 'The Land Administration Office handles land registration, certification, dispute resolution, and urban planning to ensure secure land tenure for all residents of Hurumu Woreda.',
    icon: '📋', headName: 'Ato Lemma Fikadu', phone: '+251 577 001 006', email: 'land@hurumu.pro.et',
    hours: 'Monday – Friday, 8:00 AM – 5:00 PM',
    responsibilities: ['Land registration and certification', 'Land use planning and zoning', 'Land dispute resolution', 'Urban land administration', 'Rural land holding records', 'Land measurement and surveying'],
    services: [{ name: 'Land Use Certificate', slug: 'land-certificate' }],
  },
};

export function generateStaticParams() {
  return Object.keys(DEPARTMENTS).map(slug => ({ slug }));
}

export default function DepartmentDetailPage({ params }: { params: { slug: string } }) {
  const dept = DEPARTMENTS[params.slug];
  if (!dept) notFound();

  return (
    <div className="bg-gray-50 min-h-screen">
      <div className="bg-green-900 text-white py-10 px-4">
        <div className="max-w-4xl mx-auto">
          <Link href="/departments" className="inline-flex items-center gap-2 text-green-300 hover:text-white text-sm mb-6 transition">
            <ArrowLeft size={15} /> Back to Departments
          </Link>
          <div className="flex items-center gap-4">
            <div className="text-4xl">{dept.icon}</div>
            <div>
              <h1 className="text-2xl lg:text-3xl font-extrabold">{dept.name}</h1>
              <p className="text-green-300 text-sm italic mt-0.5">{dept.nameOromoo}</p>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 py-10 grid md:grid-cols-3 gap-6">
        <div className="md:col-span-2 space-y-6">
          <div className="bg-white rounded-xl border border-gray-100 p-6 shadow-sm">
            <h2 className="text-base font-bold text-gray-900 mb-3">About</h2>
            <p className="text-sm text-gray-600 leading-relaxed">{dept.description}</p>
          </div>

          <div className="bg-white rounded-xl border border-gray-100 p-6 shadow-sm">
            <h2 className="text-base font-bold text-gray-900 mb-4 flex items-center gap-2">
              <Users size={16} className="text-green-700" /> Responsibilities
            </h2>
            <ul className="space-y-2">
              {dept.responsibilities.map((r: string, i: number) => (
                <li key={i} className="flex items-start gap-2.5 text-sm text-gray-700">
                  <span className="w-1.5 h-1.5 rounded-full bg-green-600 flex-shrink-0 mt-1.5" />
                  {r}
                </li>
              ))}
            </ul>
          </div>

          {dept.services.length > 0 && (
            <div className="bg-white rounded-xl border border-gray-100 p-6 shadow-sm">
              <h2 className="text-base font-bold text-gray-900 mb-4">Related Services</h2>
              <div className="space-y-2">
                {dept.services.map((svc: any) => (
                  <Link key={svc.slug} href={`/services/${svc.slug}`}
                    className="flex items-center justify-between p-3 rounded-lg border border-gray-100 hover:border-green-300 hover:bg-green-50 transition group">
                    <span className="text-sm font-medium text-gray-800 group-hover:text-green-800">{svc.name}</span>
                    <ArrowRight size={14} className="text-gray-400 group-hover:text-green-700" />
                  </Link>
                ))}
              </div>
            </div>
          )}
        </div>

        <div className="space-y-4">
          <div className="bg-white rounded-xl border border-gray-100 p-5 shadow-sm">
            <h3 className="text-sm font-bold text-gray-900 mb-4">Contact</h3>
            <div className="space-y-3 text-sm">
              <p className="font-medium text-gray-800">{dept.headName}</p>
              <p className="text-xs text-gray-500">Department Head</p>
              <div className="pt-2 space-y-2">
                <p className="flex items-center gap-2 text-xs text-gray-600"><Phone size={12} /> {dept.phone}</p>
                <p className="flex items-center gap-2 text-xs text-gray-600"><Mail size={12} /> {dept.email}</p>
              </div>
              <div className="pt-2 border-t border-gray-100">
                <p className="text-xs text-gray-400">{dept.hours}</p>
              </div>
            </div>
          </div>

          <Link href="/contact" className="block bg-green-800 rounded-xl p-5 text-white hover:bg-green-700 transition">
            <h3 className="text-sm font-bold mb-1">Get in Touch</h3>
            <p className="text-xs text-green-200">Contact this department directly for inquiries.</p>
          </Link>
        </div>
      </div>
    </div>
  );
}