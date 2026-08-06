import LocalizedText from '@/components/layout/LocalizedText';
import NewsFilter from '@/components/news/NewsFilter';

const ALL_NEWS = [
  {
    slug: 'agricultural-season-2025',
    title: '2025/26 Agricultural Season Support Program Now Open',
    titleOromoo: 'Sagantaan Deeggarsa Waggaa Qonnaa 2025/26 Baname',
    titleAmharic: 'የ2025/26 የግብርና ወቅት ድጋፍ ፕሮግራም ተከፍቷል',
    excerpt: 'The Woreda Agriculture Office has opened registration for subsidized fertilizer and improved seed distribution for all kebele farmers.',
    excerptOromoo: "Waajjirri Qonnaa Woreedaa qonnaan bultoota Kebelee hundaaf raabsa xurii gatii gadi bu'aa fi sanyii fooyya'ee galmeessuu baneera.",
    excerptAmharic: 'የወረዳው ግብርና ቢሮ ለሁሉም ቀበሌ ገበሬዎች የተቀናጀ ማዳበሪያና የተሻሻለ ዘር ስርጭት ምዝገባን ከፍቷል።',
    tag: 'ANNOUNCEMENT', 
    isUrgent: true, 
    publishedAt: '2026-07-10',
    department: 'Agriculture & Natural Resources',
    departmentOromoo: 'Qonnaa fi Qabeenya Uumamaa',
    departmentAmharic: 'ግብርና እና ተፈጥሮ ሀብት',
    author: 'Hurumu Portal Admin',
  },
  {
    slug: 'q3-performance-review',
    title: 'Hurumu Woreda 3rd Quarter Performance Review Meeting',
    titleOromoo: "Walga'ii Ilaalcha Raawwii Kwaartaala 3ffaa Hurumu Woreedaa",
    titleAmharic: 'የሁሩሙ ወረዳ 3ኛ ሩብ ዓመት አፈጻጸም ግምገማ ስብሰባ',
    excerpt: 'All department heads and kebele administration leaders are invited to the quarterly review session at the Woreda Hall.',
    excerptOromoo: "Hoogganoonni waajjiraalee hundaa fi bulchitoonni Kebelee walga'ii ilaalcha kwaartaalaa Galma Woreedaatti gaggeeffamutti afeeramaniiru.",
    excerptAmharic: 'ሁሉም የክፍል ኃላፊዎችና የቀበሌ አስተዳደር መሪዎች በወረዳው አዳራሽ ለሚደረገው የሩብ ዓመት ግምገማ ስብሰባ ተጋብዘዋል።',
    tag: 'EVENT', 
    isUrgent: false, 
    publishedAt: '2026-07-08',
    department: null, 
    departmentOromoo: null,
    departmentAmharic: null,
    author: 'Hurumu Portal Admin',
  },
  {
    slug: 'civil-reg-extended-july-2026',
    title: 'Civil Registration Office Extended Hours – July 2026',
    titleOromoo: 'Sa’aatiin Waajjira Galmee Ummataa Dabalame – Adoolessa 2026',
    titleAmharic: 'የዜጎች ምዝገባ ቢሮ የስራ ሰዓት ተራዝሟል – ሐምሌ 2026',
    excerpt: 'Extended service hours every weekday from 8 AM to 5 PM to address backlog in birth and marriage certificate requests.',
    excerptOromoo: "Guyyaa hojii hundaan sa'aatii 8:00 AM hanga 5:00 PM tajaajilli dabalamee kennama, kunis gaaffiiwwan ragaa dhalootaa fi fuudhaa hafan xumuruuf.",
    excerptAmharic: 'የልደትና የጋብቻ ማረጋገጫ ጥያቄዎችን መዝገብ ለማጣራት በየስራ ቀኑ ከ8 ሰዓት እስከ 5 ሰዓት የተራዘመ የስራ ሰዓት ይሰጣል።',
    tag: 'NOTICE', 
    isUrgent: false, 
    publishedAt: '2026-07-05',
    department: null, 
    departmentOromoo: null,
    departmentAmharic: null,
    author: 'Hurumu Portal Admin',
  },
  {
    slug: 'road-rehab-metu-2026',
    title: 'Hurumu-Metu Road Rehabilitation Work Begins',
    titleOromoo: 'Hojiin Suphaa Daandii Hurumu-Metu Jalqabame',
    titleAmharic: 'የሁሩሙ-መቱ መንገድ ጥገና ስራ ተጀመረ',
    excerpt: 'The Infrastructure Office has commenced road rehabilitation on the 42 km stretch connecting Hurumu to Metu town.',
    excerptOromoo: 'Waajjirri Insfiraastirakcharii daandii Hurumu Metuutti walqabsiisu km 42 irratti hojii suphaa jalqabeera.',
    excerptAmharic: 'የኢንፍራስትራክቸር ቢሮ ሁሩሙን ከመቱ ከተማ ጋር የሚያገናኘውን 42 ኪ.ሜ መንገድ የጥገና ስራ ጀምሯል።',
    tag: 'PROJECT', 
    isUrgent: false, 
    publishedAt: '2026-06-28',
    department: 'Infrastructure & Construction',
    departmentOromoo: 'Insfiraastirakcharii fi Ijaarsa',
    departmentAmharic: 'ኢንፍራስትራክቸር እና ሕንጻ',
    author: 'Hurumu Portal Admin',
  },
  {
    slug: 'water-supply-kebele-3',
    title: 'New Water Supply System Commissioned in Boneya Kebele',
    titleOromoo: 'Sirni Dhiyeessii Bishaanii Haaraa Kebele Boneyaatti Banameera',
    titleAmharic: 'አዲስ የውሃ አቅርቦት ስርዓት በቦኔያ ቀበሌ ተመርቆ ተከፈተ',
    excerpt: 'A new clean water supply system serving over 1,200 households has been officially commissioned in Boneya Kebele.',
    excerptOromoo: "Sirni dhiyeessii bishaan qulqulluu haaraa maatii 1,200 ol tajaajilu Kebele Boneyaatti seeraan baname.",
    excerptAmharic: 'ከ1,200 በላይ ቤተሰቦችን የሚያገለግል አዲስ ንፁህ የውሃ አቅርቦት ስርዓት በቦኔያ ቀበሌ በይፋ ተመርቋል።',
    tag: 'PROJECT', 
    isUrgent: false, 
    publishedAt: '2026-06-20',
    department: 'Infrastructure & Construction',
    departmentOromoo: 'Insfiraastirakcharii fi Ijaarsa',
    departmentAmharic: 'ኢንፍራስትራክቸር እና ሕንጻ',
    author: 'Hurumu Portal Admin',
  },
  {
    slug: 'school-enrollment-2026',
    title: 'School Enrollment for 2026/27 Academic Year Now Open',
    titleOromoo: 'Galmeen Barattootaa Bara Barnootaa 2026/27 Baname',
    titleAmharic: 'ለ2026/27 ትምህርት ዓመት የተማሪዎች ምዝገባ ተከፍቷል',
    excerpt: 'Parents and guardians are reminded to enroll children for the upcoming academic year at their nearest primary school.',
    excerptOromoo: "Warri fi kunuunsitoonni ijoollee isaanii bara barnootaa dhufuuf mana barumsaa sadarkaa 1ffaa dhiyootti isaanii jiru galmeessuu akka hin dagatiin yaadachiifamu.",
    excerptAmharic: 'ወላጆችና አሳዳጊዎች ልጆቻቸውን ለሚመጣው ትምህርት ዓመት በአቅራቢያቸው በሚገኝ የመጀመሪያ ደረጃ ትምህርት ቤት እንዲያስመዘግቡ ይታሰባሉ።',
    tag: 'ANNOUNCEMENT', 
    isUrgent: false, 
    publishedAt: '2026-06-15',
    department: 'Education',
    departmentOromoo: 'Barnoota',
    departmentAmharic: 'ትምህርት',
    author: 'Hurumu Portal Admin',
  },
];

export default function NewsPage() {
  return (
    <div className="bg-gray-50 min-h-screen">
      <div className="bg-green-900 text-white py-12 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-xs font-bold text-yellow-400 uppercase tracking-widest mb-2">
            <LocalizedText en="Stay Informed" om="Odeeffannoo Qabaadhaa" am="መረጃ ይኑርዎት" />
          </div>
          <h1 className="text-3xl font-extrabold mb-2">
            <LocalizedText en="News & Announcements" om="Odeessaa fi Beeksisa" am="ዜናና ማስታወቂያዎች" />
          </h1>
          <p className="text-green-200 text-sm">
            <LocalizedText
              en="Official updates from Hurumu Woreda Administration"
              om="Odeeffannoo seeraa Bulchiinsa Hurumu Woreedaa irraa"
              am="ከሁሩሙ ወረዳ አስተዳደር ኦፊሴላዊ መረጃዎች"
            />
          </p>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-4 py-10">
        <NewsFilter news={ALL_NEWS} />
      </div>
    </div>
  );
}