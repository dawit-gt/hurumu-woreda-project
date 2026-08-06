import Link from 'next/link';
import { notFound } from 'next/navigation';
import { ArrowLeft, Phone, Mail, Users, ArrowRight } from 'lucide-react';
import LocalizedText from '@/components/layout/LocalizedText';
import { departmentData } from '@/lib/i18n';

const DEPARTMENTS: Record<string, any> = {
  agriculture: {
    name: 'Agriculture & Natural Resources', nameOromoo: 'Qonnaa fi Qabeenya Uumamaa',
    description: 'The Agriculture and Natural Resources Office oversees all agricultural development, extension services, natural resource management, and livestock programs across the 18 kebeles of Hurumu Woreda.',
    icon: '🌾', headName: 'Ato Gemechu Tadesse', phone: '+251 577 001 001', email: 'agriculture@hurumu.pro.et',
    hours: 'Monday – Friday, 8:00 AM – 5:00 PM',
    responsibilities: [
      { en: 'Agricultural extension and farmer support', om: 'Deeggarsa babal\u2019inaa fi qonnaan bultootaa', am: '\u12e8\u130d\u1265\u122d\u1293 \u121b\u1235\u134b\u1275 \u12a5\u1293 \u12e8\u12a0\u122d\u1233\u12cd \u12f0\u130b\u134d' },
      { en: 'Improved seed and fertilizer distribution', om: 'Raabsa sanyii fooyya\u2019ee fi xurii', am: '\u12e8\u1270\u123b\u1240\u1208 \u12d8\u122d \u12a5\u1293 \u121b\u12f3\u1263\u122a\u12eb \u121b\u12f5\u1228\u1235' },
      { en: 'Livestock health and veterinary services', om: 'Fayyaa horii fi tajaajila ogeessa beeyladaa', am: '\u12e8\u12a5\u1295\u1231\u1233\u1275 \u1323\u120a\u1295\u1293 \u12e8\u1350\u1200\u1293 \u12a0\u1308\u120d\u130e\u1275' },
      { en: 'Natural resource conservation', om: 'Kunuunsa qabeenya uumamaa', am: '\u12e8\u1270\u134d\u1325\u1226 \u1204\u1265\u1275 \u1323\u1263\u1245' },
      { en: 'Irrigation development and water harvesting', om: 'Misooma dhiqannaa fi walitti qabuu bishaanii', am: '\u12e8\u1218\u1235\u1240\u12eb \u120a\u121b\u1275 \u12a5\u1293 \u12e8\u12ca\u1203 \u12a0\u1230\u1298\u1230\u121d' },
      { en: 'Forest management and environmental protection', om: 'Bulchiinsa bosonaa fi eegumsa naannoo', am: '\u12e8\u12ff\u122d \u12a0\u1235\u1270\u12f3\u12f0\u122d \u12a5\u1293 \u12e8\u12a0\u12ab\u1263\u1262 \u1325\u1260\u1244' },
    ],
    services: [{ name: 'Agricultural Extension', slug: 'agricultural-extension' }],
  },
  health: {
    name: 'Health & Social Affairs', nameOromoo: 'Fayyaa fi Dhimma Hawaasaa',
    description: 'The Health Office coordinates primary healthcare delivery, social welfare programs, and community health initiatives across Hurumu Woreda, overseeing 3 health centers and multiple health posts.',
    icon: '🏥', headName: 'Dr. Fatuma Ali', phone: '+251 577 001 002', email: 'health@hurumu.pro.et',
    hours: 'Monday – Friday, 8:00 AM – 5:00 PM',
    responsibilities: [
      { en: 'Primary healthcare coordination', om: 'Qindeessuu tajaajila fayyaa bu\u2019uraa', am: '\u12e8\u1218\u1230\u1228\u1273\u12cd \u1303\u1293 \u12a0\u1308\u120d\u130e\u1275 \u121b\u1205\u1260\u122d' },
      { en: 'Maternal and child health programs', om: 'Sagantaa fayyaa haadhaa fi daa\u2019immanii', am: '\u12e8\u12a5\u1293\u1275 \u12a5\u1293 \u1215\u133b\u1293\u1275 \u1323\u120a\u1293 \u1234\u122b\u1275' },
      { en: 'Vaccination and immunization campaigns', om: 'Duulaa talaallii', am: '\u12e8\u12ad\u1273\u1265 \u12a0\u1230\u1325\u1290\u1275 \u12ab\u121d\u1354\u129e\u127d' },
      { en: 'Nutrition programs', om: 'Sagantaa nyaataa', am: '\u12e8\u1218\u1218\u130d\u1262 \u1348\u122d \u12ad\u1295\u12cd\u1293\u1275' },
      { en: 'Social welfare and vulnerable group support', om: 'Deeggarsa hawaasummaa fi gareewwan laafoo', am: '\u121b\u1215\u1260\u122b\u12ca \u12f5\u130b\u134d \u12a5\u1293 \u1208\u1270\u1266\u1206 \u12a0\u1263\u120b\u1275 \u12f5\u130b\u134d' },
      { en: 'Health education and promotion', om: 'Barnoota fayyaa fi tamsaasa', am: '\u12e8\u1323\u120a\u1293 \u1275\u121d\u122d\u1275 \u12a5\u1293 \u121b\u1235\u12f0\u130b' },
    ],
    services: [],
  },
  education: {
    name: 'Education', nameOromoo: 'Barnoota',
    description: 'The Education Office administers primary and secondary education across Hurumu Woreda, supporting 47 schools, teacher development, and student welfare programs.',
    icon: '🏫', headName: 'Ato Berhanu Girma', phone: '+251 577 001 003', email: 'education@hurumu.pro.et',
    hours: 'Monday – Friday, 8:00 AM – 5:00 PM',
    responsibilities: [
      { en: 'School administration and oversight', om: 'Bulchiinsa fi to\u2019annoo mana barumsaa', am: '\u12e8\u1275\u121d\u1215\u122d\u1275 \u1264\u1275 \u12a0\u1235\u1270\u12f3\u12f0\u122d \u12a5\u1293 \u121a\u1215' },
      { en: 'Teacher recruitment and development', om: 'Qacaruu fi guddisuu barsiisota', am: '\u12e8\u1218\u121d\u1215\u122b\u1295 \u1245\u1325\u122d \u12a5\u1293 \u12a0\u12ed\u1290\u1275' },
      { en: 'Student enrollment and welfare', om: 'Galmee fi deeggarsa barattootaa', am: '\u12e8\u1270\u121b\u122a \u121d\u12dd\u1308\u1263 \u12a5\u1293 \u12f0\u1205\u1290\u1275' },
      { en: 'School construction and maintenance', om: 'Ijaarsa fi suphaa mana barumsaa', am: '\u1275\u121d\u1205\u122d\u1275 \u1264\u1275 \u130d\u1295\u1263\u1275 \u12a5\u1293 \u1325\u1308\u1293' },
      { en: 'Adult literacy programs', om: 'Sagantaa barnoota manguddootaa', am: '\u12e8\u1265\u1244\u1275 \u1290\u12cb\u122a\u12eb\u1295 \u1218\u1233\u1230\u1263\u12ca\u1275 \u12a5\u1245\u12f5' },
      { en: 'Special needs education support', om: 'Deeggarsa barnoota hawwii addaa', am: '\u12e8\u1268\u1206\u12cd \u1348\u120b\u1309\u1290\u1275 \u12ad\u1295\u12cd\u1293\u1275 \u12f5\u130b\u134d' },
    ],
    services: [],
  },
  finance: {
    name: 'Finance & Economy', nameOromoo: 'Maallaqaa fi Dinagdee',
    description: 'The Finance Office manages the woreda budget, revenue collection, financial reporting, and economic planning to ensure transparent and accountable use of public funds.',
    icon: '💰', headName: 'Ato Tadesse Wolde', phone: '+251 577 001 004', email: 'finance@hurumu.pro.et',
    hours: 'Monday – Friday, 8:00 AM – 5:00 PM',
    responsibilities: [
      { en: 'Annual budget preparation and management', om: 'Qopheessuu fi bulchuu baajata waggaa', am: '\u12e8\u12d3\u1218\u1275 \u1263\u1300\u1275 \u12a0\u12ed\u1290\u1275 \u12a5\u1293 \u12a0\u1235\u1270\u12f3\u12f0\u122d' },
      {  en: 'Revenue collection and tax administration',  om: 'Walitti qabuu galii fi bulchiinsa gibiraa',  am: 'የገንዘብ ስብሰባ እና የታክስ አስተዳደር'  },
      { en: 'Economic development planning', om: 'Karoora misooma dinagdee', am: '\u12e8\u12a5\u1245\u12f5 \u12a5\u12f5\u1308\u1275 \u12a5\u1275\u12ab\u1265\u120d' },
      { en: 'Public procurement oversight', om: 'To\u2019annoo bittaa mootummaa', am: '\u12e8\u1218\u1295\u130d\u1235\u1275 \u130d\u12d8\u1273 \u1218\u1240\u1295\u1240\u1235' },
      { en: 'Payroll management for woreda staff', om: 'Bulchiinsa mindaa hojjettoota woreedaa', am: '\u12e8\u12c8\u1228\u12f3 \u1230\u122b\u1270\u129e\u127d \u12f0\u1218\u12c8\u12dd \u12a0\u1235\u1270\u12f3\u12f0\u122d' },
    ],
    services: [],
  },
  infrastructure: {
    name: 'Infrastructure & Construction', nameOromoo: 'Insfiraastirakcharii fi Ijaarsa',
    description: 'The Infrastructure Office oversees construction and maintenance of roads, public buildings, water supply systems, and other infrastructure projects across Hurumu Woreda.',
    icon: '🏗️', headName: 'Engr. Mohammed Hussien', phone: '+251 577 001 005', email: 'infrastructure@hurumu.pro.et',
    hours: 'Monday – Friday, 8:00 AM – 5:00 PM',
    responsibilities: [
      { en: 'Road construction and maintenance', om: 'Ijaarsa fi suphaa daandii', am: '\u12e8\u1218\u1295\u1308\u12f5 \u130d\u1295\u1263\u1273 \u12a5\u1293 \u1325\u1308\u1293' },
      { en: 'Public building construction', om: 'Ijaarsa bakka bulchiinsa ummataa', am: '\u12e8\u1215\u12d8\u1265 \u1215\u1295\u133b \u130d\u1295\u1263\u1273' },
      { en: 'Water supply and sanitation projects', om: 'Pirojektoota dhiyeessii bishaanii fi qulqullina', am: '\u12e8\u12ca\u1203 \u12a0\u1235\u1300\u1263\u1265\u1275 \u12a5\u1293 \u1295\u133d\u1205\u1293 \u1355\u122e\u1300\u12ad\u1276\u127d' },
      { en: 'Rural electrification coordination', om: 'Qindeessuu ibsaa baadiyyaa', am: '\u12e8\u1308\u1320\u122d \u1218\u1265\u122b\u1275 \u1245\u1295\u1265\u122d \u121b\u1235\u1270\u1263\u1260\u1245' },
      { en: 'Construction quality supervision', om: 'To\u2019annoo qulqullina ijaarsaa', am: '\u12e8\u130d\u1295\u1263\u1273 \u1325\u122b\u1275 \u1218\u1240\u1295\u1240\u1235' },
      { en: 'Infrastructure project planning', om: 'Karoorfannaa pirojektoota bu\u2019uuraa', am: '\u12e8\u1218\u1230\u1228\u1273 \u130d\u1295\u1263\u1273 \u12a5\u1245\u12f5' },
    ],
    services: [],
  },
  land: {
    name: 'Land Administration', nameOromoo: 'Bulchiinsa Lafaa',
    description: 'The Land Administration Office handles land registration, certification, dispute resolution, and urban planning to ensure secure land tenure for all residents of Hurumu Woreda.',
    icon: '📋', headName: 'Ato Lemma Fikadu', phone: '+251 577 001 006', email: 'land@hurumu.pro.et',
    hours: 'Monday – Friday, 8:00 AM – 5:00 PM',
    responsibilities: [
      { en: 'Land registration and certification', om: 'Galmeessuu fi ragaa lafaa', am: '\u12e8\u1218\u122c\u1275 \u121d\u12dd\u1308\u1263 \u12a5\u1293 \u121b\u1228\u130b\u1308\u132a' },
      { en: 'Land use planning and zoning', om: 'Karoorfannaa fayyadama lafaa', am: '\u12e8\u1218\u1228\u1275 \u12a0\u1320\u1240\u1219 \u12a5\u1245\u12f5 \u12a0\u12c8\u1233\u1230\u122d' },
      { en: 'Land dispute resolution', om: 'Furuu wal falmii lafaa', am: '\u12e8\u1218\u122c\u1275 \u127b\u122d\u12ab\u1275 \u12a0\u134b\u1273\u1275' },
      { en: 'Urban land administration', om: 'Bulchiinsa lafa magaalaa', am: '\u12e8\u12ad\u1265\u1265 \u121d\u122c\u1275 \u12a0\u1235\u1270\u12f3\u12f0\u122d' },
      { en: 'Rural land holding records', om: 'Galmee qabiinsa lafa baadiyyaa', am: '\u12e8\u1308\u1320\u122d \u121d\u122c\u1275 \u12ac\u12ed\u1290\u1275 \u1218\u12dd\u1308\u1263' },
      { en: 'Land measurement and surveying', om: 'Safaruu fi kaartaa lafaa', am: '\u12e8\u121d\u12f5\u1273 \u12a5\u1293 \u12a5\u1245\u12f5 \u1215\u12eb\u1275' },
    ],
    services: [{ name: 'Land Use Certificate', slug: 'land-certificate' }],
  },
};

export function generateStaticParams() {
  return Object.keys(DEPARTMENTS).map(slug => ({ slug }));
}

export default function DepartmentDetailPage({ params }: { params: { slug: string } }) {
  const dept = DEPARTMENTS[params.slug];
  if (!dept) notFound();
  const extra = departmentData[params.slug];

  return (
    <div className="bg-gray-50 min-h-screen">
      <div className="bg-green-900 text-white py-10 px-4">
        <div className="max-w-4xl mx-auto">
          <Link href="/departments" className="inline-flex items-center gap-2 text-green-300 hover:text-white text-sm mb-6 transition">
            <ArrowLeft size={15} />
            <LocalizedText en="Back to Departments" om="Waajjirawwanitti Deebi'i" am="ወደ ክፍሎች ተመለስ" />
          </Link>
          <div className="flex items-center gap-4">
            <div className="text-4xl">{dept.icon}</div>
            <div>
              <h1 className="text-2xl lg:text-3xl font-extrabold">
                <LocalizedText en={dept.name} om={dept.nameOromoo} am={extra?.nameAmharic ?? dept.name} />
              </h1>
              <p className="text-green-300 text-sm italic mt-0.5">{dept.nameOromoo}</p>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 py-10 grid md:grid-cols-3 gap-6">
        <div className="md:col-span-2 space-y-6">
          <div className="bg-white rounded-xl border border-gray-100 p-6 shadow-sm">
            <h2 className="text-base font-bold text-gray-900 mb-3">
              <LocalizedText en="About" om="Waa'ee" am="ስለ" />
            </h2>
            <p className="text-sm text-gray-600 leading-relaxed">
              <LocalizedText
                en={dept.description}
                om={extra?.descriptionOromoo ?? dept.description}
                am={extra?.descriptionAmharic ?? dept.description}
              />
            </p>
          </div>

          <div className="bg-white rounded-xl border border-gray-100 p-6 shadow-sm">
            <h2 className="text-base font-bold text-gray-900 mb-4 flex items-center gap-2">
              <Users size={16} className="text-green-700" />
              <LocalizedText en="Responsibilities" om="Itti Gaafatamummaa" am="ኃላፊነቶች" />
            </h2>
            <ul className="space-y-2">
              {dept.responsibilities.map((r: { en: string; om: string; am: string }, i: number) => (
                <li key={i} className="flex items-start gap-2.5 text-sm text-gray-700">
                  <span className="w-1.5 h-1.5 rounded-full bg-green-600 flex-shrink-0 mt-1.5" />
                  <LocalizedText en={r.en} om={r.om} am={r.am} />
                </li>
              ))}
            </ul>
          </div>

          {dept.services.length > 0 && (
            <div className="bg-white rounded-xl border border-gray-100 p-6 shadow-sm">
              <h2 className="text-base font-bold text-gray-900 mb-4">
                <LocalizedText en="Related Services" om="Tajaajiloota Walqabatan" am="ተዛማጅ አገልግሎቶች" />
              </h2>
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
            <h3 className="text-sm font-bold text-gray-900 mb-4">
              <LocalizedText en="Contact" om="Quunnamtii" am="ግንኙነት" />
            </h3>
            <div className="space-y-3 text-sm">
              <p className="font-medium text-gray-800">{dept.headName}</p>
              <p className="text-xs text-gray-500">
                <LocalizedText en="Department Head" om="Hoogganaa Waajjiraa" am="የክፍል ኃላፊ" />
              </p>
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
            <h3 className="text-sm font-bold mb-1">
              <LocalizedText en="Get in Touch" om="Nu Qunnami" am="እባክዎን ተገናኝ" />
            </h3>
            <p className="text-xs text-green-200">
              <LocalizedText
                en="Contact this department directly for inquiries."
                om="Gaaffiif kallattiin waajjira kana quunnami."
                am="ለጥያቄዎች ይህንን ክፍል በቀጥታ ያግኙ።"
              />
            </p>
          </Link>
        </div>
      </div>
    </div>
  );
}