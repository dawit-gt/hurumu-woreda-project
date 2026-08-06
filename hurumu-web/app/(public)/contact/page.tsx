import { Phone, Mail, MapPin, Clock, Building2 } from 'lucide-react';
import ContactForm from '@/components/contact/ContactForm';
import LocalizedText from '@/components/layout/LocalizedText';

const DEPARTMENTS = [
  { name: { en: 'Agriculture & Natural Resources', om: 'Qonnaa fi Qabeenya Uumamaa', am: 'ግብርና እና ተፈጥሮ ሀብት' }, phone: '+251 577 001 001', email: 'agriculture@hurumu.pro.et' },
  { name: { en: 'Health & Social Affairs', om: 'Fayyaa fi Dhimma Hawaasaa', am: 'ጤና እና ማህበራዊ ጉዳዮች' }, phone: '+251 577 001 002', email: 'health@hurumu.pro.et' },
  { name: { en: 'Education', om: 'Barnoota', am: 'ትምህርት' }, phone: '+251 577 001 003', email: 'education@hurumu.pro.et' },
  { name: { en: 'Finance & Economy', om: 'Maallaqaa fi Dinagdee', am: 'ፋይናንስ እና ኢኮኖሚ' }, phone: '+251 577 001 004', email: 'finance@hurumu.pro.et' },
  { name: { en: 'Infrastructure & Construction', om: 'Insfiraastirakcharii fi Ijaarsa', am: 'ኢንፍራስትራክቸር እና ሕንጻ' }, phone: '+251 577 001 005', email: 'infrastructure@hurumu.pro.et' },
  { name: { en: 'Land Administration', om: 'Bulchiinsa Lafaa', am: 'የመሬት አስተዳደር' }, phone: '+251 577 001 006', email: 'land@hurumu.pro.et' },
];

export default function ContactPage() {
  return (
    <div className="bg-gray-50 min-h-screen">
      <div className="bg-green-900 text-white py-12 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-xs font-bold text-yellow-400 uppercase tracking-widest mb-2">
            <LocalizedText en="Get in Touch" om="Nu Qunnami" am="እባክዎን ተገናኝ" />
          </div>
          <h1 className="text-3xl font-extrabold mb-2">
            <LocalizedText en="Contact Us" om="Quunnamtii" am="ግንኙነት" />
          </h1>
          <p className="text-green-200 text-sm">
            <LocalizedText
              en="Reach out to Hurumu Woreda Administration"
              om="Bulchiinsa Hurumu Woreedaa Qunnamaa"
              am="የሁሩሙ ወረዳ አስተዳደርን ያግኙ"
            />
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-10 grid lg:grid-cols-3 gap-8">

        {/* Left — info */}
        <div className="space-y-5">
          <div className="bg-white rounded-xl border border-gray-100 p-6 shadow-sm">
            <h2 className="text-sm font-bold text-gray-900 mb-4">
              <LocalizedText en="Main Office" om="Waajjira Guddaa" am="ዋና ቢሮ" />
            </h2>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <MapPin size={16} className="text-green-700 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="text-sm text-gray-700 font-medium">
                    <LocalizedText en="Hurumu Woreda Administration" om="Bulchiinsa Hurumu Woreedaa" am="የሁሩሙ ወረዳ አስተዳደር" />
                  </p>
                  <p className="text-xs text-gray-500 mt-0.5">Hurumu Town, Ilu Aba Bora Zone</p>
                  <p className="text-xs text-gray-500">Oromia Region, Ethiopia</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Phone size={16} className="text-green-700 flex-shrink-0" />
                <div>
                  <p className="text-xs text-gray-400">
                    <LocalizedText en="Main line" om="Sarara Guddaa" am="ዋና መስመር" />
                  </p>
                  <p className="text-sm text-gray-700 font-medium">+251 57 XXX XXXX</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Mail size={16} className="text-green-700 flex-shrink-0" />
                <div>
                  <p className="text-xs text-gray-400">
                    <LocalizedText en="Email" om="Imeelii" am="ኢሜይል" />
                  </p>
                  <p className="text-sm text-gray-700 font-medium">info@hurumu.pro.et</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Clock size={16} className="text-green-700 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="text-xs text-gray-400">
                    <LocalizedText en="Working hours" om="Sa'aatii Hojii" am="የስራ ሰዓት" />
                  </p>
                  <p className="text-sm text-gray-700 font-medium">
                    <LocalizedText en="Mon – Fri, 8:00 AM – 5:00 PM" om="Wiixata – Jimaata, 8:00 AM – 5:00 PM" am="ሰኞ – አርብ፣ 8:00 AM – 5:00 PM" />
                  </p>
                  <p className="text-xs text-gray-500">
                    <LocalizedText en="Closed on public holidays" om="Guyyaa ayyaanaa cufaadha" am="በሕዝብ በዓላት ዝግ ነው" />
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl border border-gray-100 p-6 shadow-sm">
            <h2 className="text-sm font-bold text-gray-900 mb-4 flex items-center gap-2">
              <Building2 size={15} className="text-green-700" />
              <LocalizedText en="Department Contacts" om="Quunnamtii Waajjiraalee" am="የክፍል ግንኙነቶች" />
            </h2>
            <div className="space-y-4">
              {DEPARTMENTS.map(dept => (
                <div key={dept.name.en} className="border-b border-gray-50 last:border-0 pb-3 last:pb-0">
                  <p className="text-xs font-semibold text-gray-800 mb-1">
                    <LocalizedText en={dept.name.en} om={dept.name.om} am={dept.name.am} />
                  </p>
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
            <h2 className="text-base font-bold text-gray-900 mb-1">
              <LocalizedText en="Send us a Message" om="Ergaa Nuuf Ergi" am="መልእክት ይላኩልን" />
            </h2>
            <p className="text-sm text-gray-500 mb-6">
              <LocalizedText
                en="We will respond within 2 working days."
                om="Guyyaa hojii 2 keessatti deebii kennina."
                am="በ2 የስራ ቀናት ውስጥ ምላሽ እንሰጣለን።"
              />
            </p>
            <ContactForm />
          </div>
        </div>
      </div>
    </div>
  );
}