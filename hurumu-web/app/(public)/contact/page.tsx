import { Phone, Mail, MapPin, Clock, Building2 } from 'lucide-react';
import ContactForm from '@/components/contact/ContactForm';

const DEPARTMENTS = [
  { name: 'Agriculture & Natural Resources', phone: '+251 577 001 001', email: 'agriculture@hurumu.pro.et' },
  { name: 'Health & Social Affairs', phone: '+251 577 001 002', email: 'health@hurumu.pro.et' },
  { name: 'Education', phone: '+251 577 001 003', email: 'education@hurumu.pro.et' },
  { name: 'Finance & Economy', phone: '+251 577 001 004', email: 'finance@hurumu.pro.et' },
  { name: 'Infrastructure & Construction', phone: '+251 577 001 005', email: 'infrastructure@hurumu.pro.et' },
  { name: 'Land Administration', phone: '+251 577 001 006', email: 'land@hurumu.pro.et' },
];

export default function ContactPage() {
  return (
    <div className="bg-gray-50 min-h-screen">
      <div className="bg-green-900 text-white py-12 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-xs font-bold text-yellow-400 uppercase tracking-widest mb-2">Get in Touch</div>
          <h1 className="text-3xl font-extrabold mb-2">Contact Us</h1>
          <p className="text-green-200 text-sm">Reach out to Hurumu Woreda Administration</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-10 grid lg:grid-cols-3 gap-8">

        {/* Left — info */}
        <div className="space-y-5">
          <div className="bg-white rounded-xl border border-gray-100 p-6 shadow-sm">
            <h2 className="text-sm font-bold text-gray-900 mb-4">Main Office</h2>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <MapPin size={16} className="text-green-700 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="text-sm text-gray-700 font-medium">Hurumu Woreda Administration</p>
                  <p className="text-xs text-gray-500 mt-0.5">Hurumu Town, Ilu Aba Bora Zone</p>
                  <p className="text-xs text-gray-500">Oromia Region, Ethiopia</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Phone size={16} className="text-green-700 flex-shrink-0" />
                <div>
                  <p className="text-xs text-gray-400">Main line</p>
                  <p className="text-sm text-gray-700 font-medium">+251 57 XXX XXXX</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Mail size={16} className="text-green-700 flex-shrink-0" />
                <div>
                  <p className="text-xs text-gray-400">Email</p>
                  <p className="text-sm text-gray-700 font-medium">info@hurumu.pro.et</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Clock size={16} className="text-green-700 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="text-xs text-gray-400">Working hours</p>
                  <p className="text-sm text-gray-700 font-medium">Mon – Fri, 8:00 AM – 5:00 PM</p>
                  <p className="text-xs text-gray-500">Closed on public holidays</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl border border-gray-100 p-6 shadow-sm">
            <h2 className="text-sm font-bold text-gray-900 mb-4 flex items-center gap-2">
              <Building2 size={15} className="text-green-700" /> Department Contacts
            </h2>
            <div className="space-y-4">
              {DEPARTMENTS.map(dept => (
                <div key={dept.name} className="border-b border-gray-50 last:border-0 pb-3 last:pb-0">
                  <p className="text-xs font-semibold text-gray-800 mb-1">{dept.name}</p>
                  <p className="text-xs text-gray-500 flex items-center gap-1"><Phone size={10} /> {dept.phone}</p>
                  <p className="text-xs text-gray-500 flex items-center gap-1 mt-0.5"><Mail size={10} /> {dept.email}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right — form */}
        <div className="lg:col-span-2">
          <div className="bg-white rounded-xl border border-gray-100 p-8 shadow-sm">
            <h2 className="text-base font-bold text-gray-900 mb-1">Send us a Message</h2>
            <p className="text-sm text-gray-500 mb-6">We will respond within 2 working days.</p>
            <ContactForm />
          </div>
        </div>
      </div>
    </div>
  );
}