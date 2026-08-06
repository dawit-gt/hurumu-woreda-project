import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import ServicesList from '@/components/services/ServicesList';
import LocalizedText from '@/components/layout/LocalizedText';

const SERVICES = [
  {
    slug: 'birth-certificate',
    name: 'Birth Certificate',
    nameOromoo: 'Ragaa Dhalootaa',
    nameAmharic: 'የልደት ማረጋገጫ',
    description: 'Register a new birth and obtain an official birth certificate for your child.',
    descriptionOromoo: 'Dhaloota haaraa galmeessi, ragaa dhalootaa seera qabeessa argadhu.',
    descriptionAmharic: 'የልጅዎን ልደት ይመዝግቡ እና የውስጥ የልደት ማረጋገጫ ይቀበሉ።',
    category: 'CIVIL_REGISTRATION',
    icon: '🪪',
    fee: 0,
    processingDays: 3,
  },
  {
    slug: 'land-certificate',
    name: 'Land Use Certificate',
    nameOromoo: 'Ragaa Fayyadama Lafaa',
    nameAmharic: 'የመሬት አስተዳደር ማረጋገጫ',
    description: 'Obtain official certification for rural or urban land use rights.',
    descriptionOromoo: 'Mirgoota fayyadamummaa lafaaf ragaa seeraa argadhu.',
    descriptionAmharic: 'የመንደር ወይም የከተማ የመሬት አገልግሎት መብቶች የሚረጋገጥ ማረጋገጫ ይውሰዱ።',
    category: 'LAND_ADMINISTRATION',
    icon: '📋',
    fee: 150,
    processingDays: 14,
  },
  {
    slug: 'business-license',
    name: 'Business License',
    nameOromoo: 'Hayyama Daldalaa',
    nameAmharic: 'የንግድ ፈቃድ',
    description: 'Register a new business or renew your existing trade license.',
    descriptionOromoo: 'Daldalaa haaraa galmeessi ykn hayyama kee haaromsii.',
    descriptionAmharic: 'ንግድ አዲስ ይመዝግቡ ወይም የቀድሞዎትን ፈቃድ ያደጉ።',
    category: 'BUSINESS_LICENSE',
    icon: '🏪',
    fee: 300,
    processingDays: 7,
  },
  {
    slug: 'agricultural-extension',
    name: 'Agricultural Extension',
    nameOromoo: "Tajaajila Babal'insa Qonnaa",
    nameAmharic: 'እርሻ አገልግሎት',
    description: 'Access expert agricultural advice, improved seeds, and input subsidies.',
    descriptionOromoo: 'Deeggarsa qonnaa, beellada fooyyaʼaa fi deeggarsa qabeenya argadhu.',
    descriptionAmharic: 'የግብርና ምክር፣ የተሻለ ዘርና የእንቅስቃሴ ድጋፍ ይውሰዱ።',
    category: 'AGRICULTURE',
    icon: '🌾',
    fee: 0,
    processingDays: 1,
  },
  {
    slug: 'marriage-certificate',
    name: 'Marriage Certificate',
    nameOromoo: 'Ragaa Fuudhaa fi Heerumaa',
    nameAmharic: 'የጋብቻ ማረጋገጫ',
    description: 'Register a marriage and obtain an official marriage certificate.',
    descriptionOromoo: 'Fuudhaa heerumaa galmeessi ragaa seera qabeessa argadhu.',
    descriptionAmharic: 'ጋብቻን ይመዝግቡ እና የጋብቻ የመዘጋጃ ሰነድ ይቀበሉ።',
    category: 'CIVIL_REGISTRATION',
    icon: '💍',
    fee: 0,
    processingDays: 5,
  },
  {
    slug: 'id-card',
    name: 'National ID Card',
    nameOromoo: 'Kaardii Eenyummaa',
    nameAmharic: 'ሕጋዊ መታወቂያ ካርድ',
    description: 'Apply for or renew your national identification card.',
    descriptionOromoo: 'Kaardii eenyummaa haaromsuu yookaan haaraa argachuuf dhiyeessi.',
    descriptionAmharic: 'የብሔራዊ መታወቂያ ካርድ ይጠይቁ ወይም ይደግፉ።',
    category: 'CIVIL_REGISTRATION',
    icon: '🪪',
    fee: 50,
    processingDays: 10,
  },
];

export default function ServicesPage() {
  return (
    <div className="bg-gray-50 min-h-screen">
      <div className="bg-green-900 text-white py-12 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-xs font-bold text-yellow-400 uppercase tracking-widest mb-2">
            <LocalizedText
              en="Citizen Services"
              om="Tajaajiloota Jiraattotaa"
              am="የዜጎች አገልግሎቶች"
            />
          </div>
          <h1 className="text-3xl font-extrabold mb-2">
            <LocalizedText
              en="Government Services"
              om="Tajaajilawwan Mootummaa"
              am="የመንግሥት አገልግሎቶች"
            />
          </h1>
          <p className="text-green-200 text-sm">
            <LocalizedText
              en="Access official services from Hurumu Woreda Administration"
              om="Tajaajiloota seeraa irraa Hurumu Woreeda irraa argadhu"
              am="ከሁሩሙ ወረዳ አስተዳደር የተዘጋጁ አገልግሎቶችን ይገናኙ"
            />
          </p>
        </div>
      </div>
      <div className="bg-yellow-50 border-b border-yellow-200 px-4 py-3">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
          <p className="text-sm text-yellow-800 font-medium">
            <LocalizedText
              en="Already applied? Track your application status."
              om="Yeroo dura galmee goote? Haala isaa hordofi."
              am="እስከዚህ ጊዜ እቃውን አስገባሽ? የማመልከቻዎን ሁኔታ ይከታተሉ።"
            />
          </p>
          <Link href="/services/track" className="inline-flex items-center gap-2 bg-yellow-600 text-white text-xs font-bold px-4 py-2 rounded-lg hover:bg-yellow-500 transition">
            <LocalizedText
              en="Track Application"
              om="Galmee Hordofu"
              am="ሂደቱን እይ"
            />
            <ArrowRight size={13} />
          </Link>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-4 py-10">
        <ServicesList services={SERVICES} />
      </div>
    </div>
  );
}