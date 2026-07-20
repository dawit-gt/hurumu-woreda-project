import Link from 'next/link';
import { ArrowRight, Phone, Mail } from 'lucide-react';

const DEPARTMENTS = [
  { slug: 'agriculture', name: 'Agriculture & Natural Resources', nameOromoo: 'Qonnaa fi Qabeenya Uumamaa', description: 'Agricultural extension, natural resource management, and livestock services for all kebeles.', icon: '🌾', headName: 'Ato Gemechu Tadesse', phone: '+251 577 001 001', email: 'agriculture@hurumu.pro.et', services: 4 },
  { slug: 'health', name: 'Health & Social Affairs', nameOromoo: 'Fayyaa fi Dhimma Hawaasaa', description: 'Primary healthcare, social welfare, and community health programs across Hurumu Woreda.', icon: '🏥', headName: 'Dr. Fatuma Ali', phone: '+251 577 001 002', email: 'health@hurumu.pro.et', services: 3 },
  { slug: 'education', name: 'Education', nameOromoo: 'Barnoota', description: 'Primary and secondary education administration, teacher support, and school enrollment.', icon: '🏫', headName: 'Ato Berhanu Girma', phone: '+251 577 001 003', email: 'education@hurumu.pro.et', services: 2 },
  { slug: 'finance', name: 'Finance & Economy', nameOromoo: 'Maallaqaa fi Dinagdee', description: 'Budget management, revenue collection, and economic planning for the woreda.', icon: '💰', headName: 'Ato Tadesse Wolde', phone: '+251 577 001 004', email: 'finance@hurumu.pro.et', services: 2 },
  { slug: 'infrastructure', name: 'Infrastructure & Construction', nameOromoo: 'Insfiraastirakcharii fi Ijaarsa', description: 'Roads, public buildings, water supply infrastructure, and construction oversight.', icon: '🏗️', headName: 'Engr. Mohammed Hussien', phone: '+251 577 001 005', email: 'infrastructure@hurumu.pro.et', services: 3 },
  { slug: 'land', name: 'Land Administration', nameOromoo: 'Bulchiinsa Lafaa', description: 'Land registration, certification, dispute resolution, and urban planning.', icon: '📋', headName: 'Ato Lemma Fikadu', phone: '+251 577 001 006', email: 'land@hurumu.pro.et', services: 2 },
];

export default function DepartmentsPage() {
  return (
    <div className="bg-gray-50 min-h-screen">
      <div className="bg-green-900 text-white py-12 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-xs font-bold text-yellow-400 uppercase tracking-widest mb-2">Government Offices</div>
          <h1 className="text-3xl font-extrabold mb-2">Woreda Departments</h1>
          <p className="text-green-200 text-sm">Our offices serving all 18 kebeles of Hurumu Woreda</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-10">
        <div className="grid md:grid-cols-2 gap-5">
          {DEPARTMENTS.map(dept => (
            <div key={dept.slug} className="bg-white rounded-xl border border-gray-100 p-6 shadow-sm hover:shadow-md transition">
              <div className="flex items-start gap-4 mb-4">
                <div className="text-3xl flex-shrink-0">{dept.icon}</div>
                <div className="flex-1 min-w-0">
                  <h3 className="text-base font-bold text-gray-900 leading-tight">{dept.name}</h3>
                  <p className="text-xs text-gray-400 italic mt-0.5">{dept.nameOromoo}</p>
                </div>
              </div>
              <p className="text-sm text-gray-500 leading-relaxed mb-4">{dept.description}</p>
              <div className="border-t border-gray-50 pt-4 space-y-1.5">
                <p className="text-xs text-gray-500"><span className="font-semibold text-gray-700">Head:</span> {dept.headName}</p>
                <p className="text-xs text-gray-500 flex items-center gap-1.5"><Phone size={11} /> {dept.phone}</p>
                <p className="text-xs text-gray-500 flex items-center gap-1.5"><Mail size={11} /> {dept.email}</p>
              </div>
              <div className="mt-4 flex items-center justify-between">
                <span className="text-xs text-gray-400">{dept.services} services available</span>
                <Link href={`/departments/${dept.slug}`} className="inline-flex items-center gap-1 text-xs font-semibold text-green-800 hover:gap-2 transition-all">
                  View details <ArrowRight size={12} />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}