import Link from 'next/link';
import { notFound } from 'next/navigation';
import { ArrowLeft, Clock, Banknote, CheckCircle, FileText, ArrowRight } from 'lucide-react';
import LocalizedText from '@/components/layout/LocalizedText';

const CATEGORY_LABELS: Record<string, { en: string; om: string; am: string }> = {
  'Civil Registration': { en: 'Civil Registration', om: 'Galmee Ummataa', am: 'የዜጎች ምዝገባ' },
  'Land Administration': { en: 'Land Administration', om: 'Bulchiinsa Lafaa', am: 'የመሬት አስተዳደር' },
  'Business License': { en: 'Business License', om: 'Hayyama Daldalaa', am: 'የንግድ ፈቃድ' },
  'Agriculture': { en: 'Agriculture', om: 'Qonnaa', am: 'ግብርና' },
};

const SERVICES: Record<string, any> = {
  'birth-certificate': {
    name: 'Birth Certificate',
    nameOromoo: 'Ragaa Dhalootaa',
    nameAmharic: 'የልደት ማረጋገጫ',
    description: {
      en: 'Register a new birth and obtain an official birth certificate.',
      om: 'Dhaloota haaraa galmeessi, ragaa dhalootaa seera qabeessa argadhu.',
      am: 'የልጅዎን ልደት ይመዝግቡ እና ኦፊሴላዊ የልደት ማረጋገጫ ይቀበሉ።',
    },
    category: 'Civil Registration',
    icon: '🪪',
    fee: 0,
    processingDays: 3,
    department: { en: 'Civil Registration Office', om: 'Waajjira Galmee Ummataa', am: 'የዜጎች ምዝገባ ጽ/ቤት' },
    phone: '+251 577 001 007',
    requiredDocs: [
      { en: "Both parents' valid ID cards", om: "Kaardii eenyummaa haadhaa fi abbaa lamaanuu sirrii", am: 'የሁለቱም ወላጆች ትክክለኛ መታወቂያ ካርድ' },
      { en: 'Hospital or health center delivery record', om: 'Galmee deemsa ciniinsuu hospitaala yookaan giddugala fayyaa', am: 'የሆስፒታል ወይም የጤና ተቋም የወሊድ መዝገብ' },
      { en: 'Two witnesses with valid IDs', om: 'Ragaa lama kaardii eenyummaa sirrii qaban', am: 'ትክክለኛ መታወቂያ ያላቸው ሁለት ምስክሮች' },
      { en: 'Completed registration form', om: 'Fooramii galmee guutame', am: 'የተሞላ የምዝገባ ቅጽ' },
    ],
    steps: [
      { en: 'Visit the Civil Registration Office at the Woreda Administration building', om: 'Waajjira Galmee Ummataa kan bakka bulchiinsa Woreedaa keessa jiru daawwadhu', am: 'በወረዳ አስተዳደር ህንፃ የሚገኘውን የዜጎች ምዝገባ ጽ/ቤት ይጎብኙ' },
      { en: 'Submit all required documents to the registration clerk', om: 'Ragaalee barbaachisan hunda barreessaa galmee kennaadhaaf dhiyeessi', am: 'የሚያስፈልጉ ሁሉንም ሰነዶች ለምዝገባ ጸሐፊ ያስገቡ' },
      { en: 'Pay any applicable processing fee at the finance window', om: 'Kaffaltii hojii barbaachisu foddaa maallaqaa irratti kaffali', am: 'ተፈጻሚ የሚሆነውን የአገልግሎት ክፍያ በፋይናንስ መስኮት ይክፈሉ' },
      { en: 'Receive your collection receipt', om: 'Waraqaa ragaa fudhatamaa keetii fudhadhu', am: 'የመረከቢያ ደረሰኝዎን ይቀበሉ' },
      { en: 'Return after 3 working days to collect the certificate', om: 'Guyyaa hojii 3 booda ragaa fudhachuuf deebi\'i', am: 'ማረጋገጫውን ለመቀበል በ3 የስራ ቀናት ውስጥ ይመለሱ' },
    ],
  },
  'land-certificate': {
    name: 'Land Use Certificate',
    nameOromoo: 'Ragaa Fayyadama Lafaa',
    nameAmharic: 'የመሬት አገልግሎት ማረጋገጫ',
    description: {
      en: 'Obtain official certification for rural or urban land use rights.',
      om: 'Mirgoota fayyadamummaa lafaaf ragaa seeraa argadhu.',
      am: 'ለገጠር ወይም ለከተማ የመሬት አገልግሎት መብቶች ኦፊሴላዊ ማረጋገጫ ያግኙ።',
    },
    category: 'Land Administration',
    icon: '📋',
    fee: 150,
    processingDays: 14,
    department: { en: 'Land Administration Office', om: 'Waajjira Bulchiinsa Lafaa', am: 'የመሬት አስተዳደር ጽ/ቤት' },
    phone: '+251 577 001 006',
    requiredDocs: [
      { en: 'Valid ID card', om: 'Kaardii eenyummaa sirrii', am: 'ትክክለኛ መታወቂያ ካርድ' },
      { en: 'Previous land holding documents', om: 'Ragaalee qabiinsa lafaa duraanii', am: 'የቀድሞ የመሬት ይዞታ ሰነዶች' },
      { en: 'Neighbor confirmation letters (3)', om: 'Xalayaa mirkaneessaa ollaa (3)', am: 'የጎረቤት ማረጋገጫ ደብዳቤዎች (3)' },
      { en: 'Site survey diagram', om: 'Kaartaa madda lafaa', am: 'የቦታ ካርታ (ሰርቬይ)' },
      { en: 'Kebele administration letter', om: 'Xalayaa bulchiinsa kebelee', am: 'የቀበሌ አስተዳደር ደብዳቤ' },
    ],
    steps: [
      { en: 'Submit application at the Land Administration Office', om: 'Iyyata Waajjira Bulchiinsa Lafaatti dhiyeessi', am: 'ማመልከቻውን በመሬት አስተዳደር ጽ/ቤት ያስገቡ' },
      { en: 'Pay the processing fee (150 ETB)', om: 'Kaffaltii hojii (Birrii 150) kaffali', am: 'የአገልግሎት ክፍያ (150 ብር) ይክፈሉ' },
      { en: 'Site inspection by survey team (within 5 days)', om: 'Sakatta\'iinsa bakkaa garee madda lafaa tiin (guyyoota 5 keessatti)', am: 'በሰርቬይ ቡድን የቦታ ምርመራ (በ5 ቀናት ውስጥ)' },
      { en: 'Public notice period — 7 days', om: 'Yeroo beeksisa ummataa — guyyoota 7', am: 'የህዝብ ማስታወቂያ ጊዜ — 7 ቀናት' },
      { en: 'Certificate issuance if no disputes filed', om: 'Wal falmiin yoo hin jiraanne ragaan ni kennama', am: 'ተቃውሞ ካልቀረበ ማረጋገጫው ይሰጣል' },
    ],
  },
  'business-license': {
    name: 'Business License',
    nameOromoo: 'Hayyama Daldalaa',
    nameAmharic: 'የንግድ ፈቃድ',
    description: {
      en: 'Register a new business or renew your existing trade license.',
      om: 'Daldalaa haaraa galmeessi ykn hayyama kee haaromsii.',
      am: 'አዲስ ንግድ ይመዝግቡ ወይም የነበረውን የንግድ ፈቃድዎን ያድሱ።',
    },
    category: 'Business License',
    icon: '🏪',
    fee: 300,
    processingDays: 7,
    department: { en: 'Trade & Industry Office', om: 'Waajjira Daldalaa fi Indaastirii', am: 'የንግድና ኢንዱስትሪ ጽ/ቤት' },
    phone: '+251 577 001 008',
    requiredDocs: [
      { en: 'Valid ID card', om: 'Kaardii eenyummaa sirrii', am: 'ትክክለኛ መታወቂያ ካርድ' },
      { en: 'Business description and plan', om: 'Ibsa fi karoora daldalaa', am: 'የንግድ መግለጫና እቅድ' },
      { en: 'Location lease agreement', om: 'Waliigaltee kireeffannaa bakkaa', am: 'የቦታ ኪራይ ውል' },
      { en: 'Tax Identification Number (TIN)', om: 'Lakkoofsa Eenyummeessaa Gibiraa (TIN)', am: 'የግብር ከፋይ መለያ ቁጥር (TIN)' },
      { en: 'Completed application form', om: 'Fooramii iyyata guutame', am: 'የተሞላ ማመልከቻ ቅጽ' },
    ],
    steps: [
      { en: 'Complete the business registration form at the Trade Office', om: 'Fooramii galmee daldalaa Waajjira Daldalaatti guuti', am: 'የንግድ ምዝገባ ቅጹን በንግድ ጽ/ቤት ይሙሉ' },
      { en: 'Submit all required documents', om: 'Ragaalee barbaachisan hunda dhiyeessi', am: 'የሚያስፈልጉ ሰነዶችን ሁሉ ያስገቡ' },
      { en: 'Pay the licensing fee (300 ETB)', om: 'Kaffaltii hayyamaa (Birrii 300) kaffali', am: 'የፈቃድ ክፍያ (300 ብር) ይክፈሉ' },
      { en: 'Premises inspection by trade officer', om: 'Sakatta\'iinsa bakkaa qondaaltota daldalaatiin', am: 'በንግድ ባለሙያ የቦታ ምርመራ' },
      { en: 'License issued within 7 working days', om: 'Hayyamni guyyoota hojii 7 keessatti ni kennama', am: 'ፈቃዱ በ7 የስራ ቀናት ውስጥ ይሰጣል' },
    ],
  },
  'agricultural-extension': {
    name: 'Agricultural Extension',
    nameOromoo: "Tajaajila Babal'insa Qonnaa",
    nameAmharic: 'የግብርና ማስፋፊያ አገልግሎት',
    description: {
      en: 'Access expert agricultural advice, improved seeds, and input subsidies.',
      om: 'Deeggarsa qonnaa, beellada fooyya\'aa fi deeggarsa qabeenya argadhu.',
      am: 'የግብርና ምክር፣ የተሻሻለ ዘርና የግብዓት ድጎማ ያግኙ።',
    },
    category: 'Agriculture',
    icon: '🌾',
    fee: 0,
    processingDays: 1,
    department: { en: 'Agriculture & Natural Resources Office', om: 'Waajjira Qonnaa fi Qabeenya Uumamaa', am: 'ግብርናና ተፈጥሮ ሀብት ጽ/ቤት' },
    phone: '+251 577 001 001',
    requiredDocs: [
      { en: 'Valid Farmer ID card', om: 'Kaardii eenyummaa qonnaan bulaa sirrii', am: 'ትክክለኛ የገበሬ መታወቂያ ካርድ' },
      { en: 'Land use certificate copy', om: 'Garagalcha ragaa fayyadama lafaa', am: 'የመሬት አገልግሎት ማረጋገጫ ግልባጭ' },
      { en: 'Completed registration form', om: 'Fooramii galmee guutame', am: 'የተሞላ የምዝገባ ቅጽ' },
    ],
    steps: [
      { en: 'Register at your local kebele administration office', om: 'Waajjira bulchiinsa kebelee keessanitti galmaa\'aa', am: 'በአካባቢዎ ቀበሌ አስተዳደር ጽ/ቤት ይመዝገቡ' },
      { en: 'You will be assigned to a dedicated extension worker', om: 'Hojjettuu babal\'inaa addaa isinif ramadama', am: 'የተመደበ የግብርና ማስፋፊያ ባለሙያ ይመደብልዎታል' },
      { en: 'Extension worker visits your farm for assessment', om: 'Hojjettichi lafa qonnaa keessan madaaluuf daawwata', am: 'ባለሙያው እርሻዎን ለምርመራ ይጎበኛል' },
      { en: 'Receive inputs, advice, and training as needed', om: 'Akka barbaachisutti qabeenya, gorsaa fi leenjii argadhu', am: 'እንደ አስፈላጊነቱ ግብዓት፣ ምክርና ስልጠና ይቀበላሉ' },
    ],
  },
  'marriage-certificate': {
    name: 'Marriage Certificate',
    nameOromoo: 'Ragaa Fuudhaa fi Heerumaa',
    nameAmharic: 'የጋብቻ ማረጋገጫ',
    description: {
      en: 'Register a marriage and obtain an official marriage certificate.',
      om: 'Fuudhaa heerumaa galmeessi ragaa seera qabeessa argadhu.',
      am: 'ጋብቻን ይመዝግቡ እና ኦፊሴላዊ የጋብቻ ማረጋገጫ ይቀበሉ።',
    },
    category: 'Civil Registration',
    icon: '💍',
    fee: 0,
    processingDays: 5,
    department: { en: 'Civil Registration Office', om: 'Waajjira Galmee Ummataa', am: 'የዜጎች ምዝገባ ጽ/ቤት' },
    phone: '+251 577 001 007',
    requiredDocs: [
      { en: "Both spouses' valid ID cards", om: "Kaardii eenyummaa hiriyoota gaa'elaa lamaanuu sirrii", am: 'የሁለቱም ትዳር ጓደኛ ትክክለኛ መታወቂያ ካርድ' },
      { en: 'Two witnesses with valid IDs', om: 'Ragaa lama kaardii eenyummaa sirrii qaban', am: 'ትክክለኛ መታወቂያ ያላቸው ሁለት ምስክሮች' },
      { en: 'Completed registration form', om: 'Fooramii galmee guutame', am: 'የተሞላ የምዝገባ ቅጽ' },
      { en: 'Proof of single status (if previously married, divorce/death certificate)', om: 'Ragaa hiriyaa hin qabne (yoo dur fuudhee/heerumee ta\'e, ragaa hiikaa/du\'aa)', am: 'ያላገባ መሆኑን ማረጋገጫ (ቀድሞ ካገባ፣ የፍቺ/ሞት ማረጋገጫ)' },
    ],
    steps: [
      { en: 'Both spouses visit the Civil Registration Office together', om: 'Hiriyoonni gaa\'elaa lamaan waliin Waajjira Galmee Ummataa daawwatu', am: 'ሁለቱም ትዳር ጓደኛ በጋራ የዜጎች ምዝገባ ጽ/ቤት ይጎበኛሉ' },
      { en: 'Submit all required documents', om: 'Ragaalee barbaachisan hunda dhiyeessi', am: 'የሚያስፈልጉ ሰነዶችን ሁሉ ያስገቡ' },
      { en: 'Witnesses sign the registration form', om: 'Ragoonni fooramii galmee mallatteessu', am: 'ምስክሮች የምዝገባ ቅጹን ይፈርማሉ' },
      { en: 'Marriage registered and certificate issued within 5 working days', om: 'Gaa\'elli galmaa\'ee ragaan guyyoota hojii 5 keessatti ni kennama', am: 'ጋብቻው ተመዝግቦ ማረጋገጫው በ5 የስራ ቀናት ውስጥ ይሰጣል' },
    ],
  },
  'id-card': {
    name: 'National ID Card',
    nameOromoo: 'Kaardii Eenyummaa',
    nameAmharic: 'ሕጋዊ መታወቂያ ካርድ',
    description: {
      en: 'Apply for or renew your national identification card.',
      om: 'Kaardii eenyummaa haaromsuu yookaan haaraa argachuuf dhiyeessi.',
      am: 'የብሔራዊ መታወቂያ ካርድ ይጠይቁ ወይም ያድሱ።',
    },
    category: 'Civil Registration',
    icon: '🪪',
    fee: 50,
    processingDays: 10,
    department: { en: 'Civil Registration Office', om: 'Waajjira Galmee Ummataa', am: 'የዜጎች ምዝገባ ጽ/ቤት' },
    phone: '+251 577 001 007',
    requiredDocs: [
      { en: 'Birth certificate or baptismal record', om: 'Ragaa dhalootaa yookaan galmee cuuphaa', am: 'የልደት ማረጋገጫ ወይም የክርስትና መዝገብ' },
      { en: 'Kebele resident confirmation letter', om: 'Xalayaa mirkaneessaa jireenya kebelee', am: 'የቀበሌ ነዋሪነት ማረጋገጫ ደብዳቤ' },
      { en: 'Two passport-size photographs', om: 'Suuraa gita paaspoortii lama', am: 'ሁለት የፓስፖርት መጠን ፎቶዎች' },
      { en: 'Old ID card (for renewal)', om: 'Kaardii eenyummaa duraanii (haaromsaaf)', am: 'የቀድሞ መታወቂያ ካርድ (ለማደስ)' },
    ],
    steps: [
      { en: 'Visit the Civil Registration Office', om: 'Waajjira Galmee Ummataa daawwadhu', am: 'የዜጎች ምዝገባ ጽ/ቤትን ይጎብኙ' },
      { en: 'Submit required documents and photos', om: 'Ragaalee fi suuraa barbaachisan dhiyeessi', am: 'የሚያስፈልጉ ሰነዶችንና ፎቶዎችን ያስገቡ' },
      { en: 'Pay the 50 ETB processing fee', om: 'Kaffaltii hojii Birrii 50 kaffali', am: 'የ50 ብር የአገልግሎት ክፍያ ይክፈሉ' },
      { en: 'Biometric data capture (photo and fingerprint)', om: 'Odeeffannoo baayoomeetirikii walitti qabuu (suuraa fi quba)', am: 'የባዮሜትሪክ መረጃ (ፎቶና የጣት አሻራ) ይነሳል' },
      { en: 'Collect ID card after 10 working days', om: 'Guyyoota hojii 10 booda kaardii fudhadhu', am: 'ካርዱን ከ10 የስራ ቀናት በኋላ ይረከቡ' },
    ],
  },
};

export function generateStaticParams() {
  return Object.keys(SERVICES).map(slug => ({ slug }));
}

export default function ServiceDetailPage({ params }: { params: { slug: string } }) {
  const svc = SERVICES[params.slug];
  if (!svc) notFound();
  const catLabel = CATEGORY_LABELS[svc.category] ?? { en: svc.category, om: svc.category, am: svc.category };

  return (
    <div className="bg-gray-50 min-h-screen">
      <div className="bg-green-900 text-white py-10 px-4">
        <div className="max-w-4xl mx-auto">
          <Link href="/services" className="inline-flex items-center gap-2 text-green-300 hover:text-white text-sm mb-6 transition">
            <ArrowLeft size={15} />
            <LocalizedText en="Back to Services" om="Tajaajilootaatti Deebi'i" am="ወደ አገልግሎቶች ተመለስ" />
          </Link>
          <div className="flex items-center gap-4">
            <div className="text-4xl">{svc.icon}</div>
            <div>
              <p className="text-xs text-yellow-400 font-bold uppercase tracking-widest mb-1">
                <LocalizedText en={catLabel.en} om={catLabel.om} am={catLabel.am} />
              </p>
              <h1 className="text-2xl lg:text-3xl font-extrabold">
                <LocalizedText en={svc.name} om={svc.nameOromoo} am={svc.nameAmharic} />
              </h1>
              <p className="text-green-300 text-sm italic mt-0.5">{svc.nameOromoo}</p>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 py-10 grid md:grid-cols-3 gap-6">

        {/* Main content */}
        <div className="md:col-span-2 space-y-6">
          <div className="bg-white rounded-xl border border-gray-100 p-6 shadow-sm">
            <h2 className="text-base font-bold text-gray-900 mb-3">
              <LocalizedText en="About this service" om="Waa'ee tajaajila kanaa" am="ስለዚህ አገልግሎት" />
            </h2>
            <p className="text-sm text-gray-600 leading-relaxed">
              <LocalizedText en={svc.description.en} om={svc.description.om} am={svc.description.am} />
            </p>
          </div>

          <div className="bg-white rounded-xl border border-gray-100 p-6 shadow-sm">
            <h2 className="text-base font-bold text-gray-900 mb-4 flex items-center gap-2">
              <FileText size={16} className="text-green-700" />
              <LocalizedText en="Required Documents" om="Galmeewwan Barbaachisan" am="የሚያስፈልጉ ሰነዶች" />
            </h2>
            <ul className="space-y-2">
              {svc.requiredDocs.map((doc: { en: string; om: string; am: string }, i: number) => (
                <li key={i} className="flex items-start gap-2.5 text-sm text-gray-700">
                  <CheckCircle size={15} className="text-green-600 flex-shrink-0 mt-0.5" />
                  <LocalizedText en={doc.en} om={doc.om} am={doc.am} />
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-white rounded-xl border border-gray-100 p-6 shadow-sm">
            <h2 className="text-base font-bold text-gray-900 mb-4">
              <LocalizedText en="How to Apply — Step by Step" om="Akkamitti Galmaa'uu — Tarkaanfiin Tarkaanfii" am="እንዴት ማመልከት እንደሚቻል — በደረጃ" />
            </h2>
            <ol className="space-y-3">
              {svc.steps.map((step: { en: string; om: string; am: string }, i: number) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="w-6 h-6 rounded-full bg-green-800 text-white text-xs font-bold flex items-center justify-center flex-shrink-0 mt-0.5">
                    {i + 1}
                  </span>
                  <span className="text-sm text-gray-700 leading-relaxed">
                    <LocalizedText en={step.en} om={step.om} am={step.am} />
                  </span>
                </li>
              ))}
            </ol>
          </div>
        </div>

        {/* Sidebar */}
        <div className="space-y-4">
          <div className="bg-white rounded-xl border border-gray-100 p-5 shadow-sm">
            <h3 className="text-sm font-bold text-gray-900 mb-4">
              <LocalizedText en="Service Info" om="Odeeffannoo Tajaajilaa" am="የአገልግሎት መረጃ" />
            </h3>
            <div className="space-y-3">
              <div className="flex items-center gap-2.5">
                <Banknote size={15} className="text-gray-400" />
                <div>
                  <p className="text-xs text-gray-400">
                    <LocalizedText en="Fee" om="Kaffaltii" am="ክፍያ" />
                  </p>
                  <p className="text-sm font-bold text-gray-900">
                    {svc.fee === 0
                      ? <LocalizedText en="Free" om="Bilisaa" am="ነጻ" />
                      : `${svc.fee} ETB`}
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-2.5">
                <Clock size={15} className="text-gray-400" />
                <div>
                  <p className="text-xs text-gray-400">
                    <LocalizedText en="Processing Time" om="Yeroo Adeemsaa" am="የሚፈጅበት ጊዜ" />
                  </p>
                  <p className="text-sm font-bold text-gray-900">
                    {svc.processingDays}{' '}
                    <LocalizedText
                      en={svc.processingDays === 1 ? 'working day' : 'working days'}
                      om={svc.processingDays === 1 ? 'guyyaa hojii' : 'guyyoota hojii'}
                      am={svc.processingDays === 1 ? 'የስራ ቀን' : 'የስራ ቀናት'}
                    />
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl border border-gray-100 p-5 shadow-sm">
            <h3 className="text-sm font-bold text-gray-900 mb-3">
              <LocalizedText en="Contact Office" om="Waajjira Quunnamtii" am="የቢሮ አድራሻ" />
            </h3>
            <p className="text-xs text-gray-600 mb-1">
              <LocalizedText en={svc.department.en} om={svc.department.om} am={svc.department.am} />
            </p>
            <p className="text-xs text-green-800 font-semibold">{svc.phone}</p>
            <p className="text-xs text-gray-400 mt-2">
              <LocalizedText en="Mon – Fri, 8:00 AM – 5:00 PM" om="Wiixata – Jimaata, 8:00 AM – 5:00 PM" am="ሰኞ – አርብ፣ 8:00 AM – 5:00 PM" />
            </p>
          </div>

          <div className="bg-green-800 rounded-xl p-5 text-white">
            <h3 className="text-sm font-bold mb-2">
              <LocalizedText en="Already applied?" om="Dursee galmaa'uu goote?" am="አስቀድመው አመልክተዋል?" />
            </h3>
            <p className="text-xs text-green-200 mb-3">
              <LocalizedText
                en="Track the status of your application with your reference number."
                om="Haala iyyata keetii lakkoofsa wabii keetiin hordofi."
                am="የማመልከቻዎን ሁኔታ በማጣቀሻ ቁጥርዎ ይከታተሉ።"
              />
            </p>
            <Link href="/services/track" className="inline-flex items-center gap-1.5 bg-white text-green-800 text-xs font-bold px-4 py-2 rounded-lg hover:bg-green-50 transition">
              <LocalizedText en="Track Application" om="Galmee Hordofu" am="ሂደቱን ይከታተሉ" /> <ArrowRight size={12} />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}