import Link from 'next/link';
import { notFound } from 'next/navigation';
import { ArrowLeft, Calendar, User, Building2, Eye, AlertCircle } from 'lucide-react';
import LocalizedText from '@/components/layout/LocalizedText';

const TAG_COLORS: Record<string, string> = {
  ANNOUNCEMENT: 'bg-blue-50 text-blue-700 border-blue-200',
  EVENT:        'bg-purple-50 text-purple-700 border-purple-200',
  NOTICE:       'bg-yellow-50 text-yellow-700 border-yellow-200',
  PROJECT:      'bg-green-50 text-green-700 border-green-200',
  TENDER:       'bg-orange-50 text-orange-700 border-orange-200',
};

const TAG_LABELS: Record<string, { en: string; om: string; am: string }> = {
  ANNOUNCEMENT: { en: 'Announcement', om: 'Beeksisa', am: 'ማስታወቂያ' },
  EVENT:        { en: 'Event', om: 'Sagantaa', am: 'ዝግጅት' },
  NOTICE:       { en: 'Notice', om: 'Beeksisa', am: 'ማሳወቂያ' },
  PROJECT:      { en: 'Project', om: 'Piroojektii', am: 'ፕሮጀክት' },
  TENDER:       { en: 'Tender', om: 'Dorgommii', am: 'ጨረታ' },
};

const NEWS_DATA: Record<string, any> = {
  'agricultural-season-2025': {
    title: '2025/26 Agricultural Season Support Program Now Open',
    titleOromoo: 'Sagantaan Deeggarsa Waggaa Qonnaa 2025/26 Baname',
    titleAmharic: 'የ2025/26 የግብርና ወቅት ድጋፍ ፕሮግራም ተከፍቷል',
    excerpt: 'The Woreda Agriculture Office has opened registration for subsidized fertilizer and improved seed distribution.',
    excerptOromoo: "Waajjirri Qonnaa Woreedaa raabsa xurii gatii gadi bu'aa fi sanyii fooyya'ee galmeessuu baneera.",
    excerptAmharic: 'የወረዳው ግብርና ቢሮ የተቀናጀ ማዳበሪያና የተሻሻለ ዘር ስርጭት ምዝገባን ከፍቷል።',
    content: `<p>The Hurumu Woreda Agriculture and Natural Resources Office has officially opened registration for the 2025/26 agricultural season support program.</p><h2>What is included?</h2><ul><li>Subsidized DAP and Urea fertilizer</li><li>Improved seed varieties (maize, teff, sorghum)</li><li>Agricultural extension worker support</li><li>Training on modern farming techniques</li></ul><h2>How to register</h2><p>Visit your local kebele office with your Farmer ID card and land use certificate copy.</p><p>Registration closes <strong>August 15, 2026</strong>. Contact: <strong>+251 577 001 001</strong></p>`,
    contentOromoo: `<p>Waajjirri Qonnaa fi Qabeenya Uumamaa Hurumu Woreedaa sagantaa deeggarsa waggaa qonnaa 2025/26 galmeessuu seeraan baneera.</p><h2>Maaltu keessatti argama?</h2><ul><li>Xurii DAP fi Yuriyaa gatii gadi bu'aa</li><li>Gosoota sanyii fooyya'e (boqqolloo, xaafii, sorgoo)</li><li>Deeggarsa hojjataa babal'inaa qonnaa</li><li>Leenjii teekinooloojii qonnaa ammayyaa</li></ul><h2>Akkamitti galmaa'uu?</h2><p>Waraqaa eenyummaa qonnaan bulaa fi kopii ragaa fayyadama lafaa qabaachuun waajjira Kebelee keessan daawwadhaa.</p><p>Galmeen guyyaa <strong>Hagayya 15, 2026</strong> ni cufama. Quunnamaa: <strong>+251 577 001 001</strong></p>`,
    contentAmharic: `<p>የሁሩሙ ወረዳ ግብርና እና ተፈጥሮ ሀብት ቢሮ ለ2025/26 የግብርና ወቅት ድጋፍ ፕሮግራም ምዝገባን በይፋ ከፍቷል።</p><h2>ምን ያካትታል?</h2><ul><li>የተደጎመ የDAP እና የዩሪያ ማዳበሪያ</li><li>የተሻሻሉ የዘር ዓይነቶች (በቆሎ፣ ጤፍ፣ ማሽላ)</li><li>የግብርና ኤክስቴንሽን ሠራተኛ ድጋፍ</li><li>በዘመናዊ የእርሻ ዘዴዎች ላይ ስልጠና</li></ul><h2>እንዴት መመዝገብ ይቻላል?</h2><p>የገበሬ መታወቂያ ካርድዎን እና የመሬት አገልግሎት ማረጋገጫ ቅጂዎን ይዘው የአካባቢዎን ቀበሌ ቢሮ ይጎብኙ።</p><p>ምዝገባው በ<strong>ነሐሴ 15፣ 2026</strong> ይዘጋል። ለመገናኘት፦ <strong>+251 577 001 001</strong></p>`,
    tag: 'ANNOUNCEMENT', isUrgent: true, publishedAt: '2026-07-10',
    department: { en: 'Agriculture & Natural Resources', om: 'Qonnaa fi Qabeenya Uumamaa', am: 'ግብርና እና ተፈጥሮ ሀብት' },
    author: 'Hurumu Portal Admin', viewCount: 342,
  },
  'q3-performance-review': {
    title: 'Hurumu Woreda 3rd Quarter Performance Review Meeting',
    titleOromoo: "Walga'ii Ilaalcha Raawwii Kwaartaala 3ffaa Hurumu Woreedaa",
    titleAmharic: 'የሁሩሙ ወረዳ 3ኛ ሩብ ዓመት አፈጻጸም ግምገማ ስብሰባ',
    excerpt: 'All department heads and kebele administration leaders are invited to the quarterly review session.',
    excerptOromoo: "Hoogganoonni waajjiraalee hundaa fi bulchitoonni Kebelee walga'ii ilaalcha kwaartaalaatti afeeramaniiru.",
    excerptAmharic: 'ሁሉም የክፍል ኃላፊዎችና የቀበሌ አስተዳደር መሪዎች ለሩብ ዓመት ግምገማ ስብሰባ ተጋብዘዋል።',
    content: `<p>All department heads and kebele administration leaders are invited to the 3rd Quarter Performance Review Meeting.</p><h2>Meeting Details</h2><ul><li><strong>Date:</strong> July 20, 2026</li><li><strong>Time:</strong> 9:00 AM – 4:00 PM</li><li><strong>Venue:</strong> Hurumu Woreda Hall</li></ul><h2>Agenda</h2><ul><li>Q3 performance targets vs achievements</li><li>Budget utilization report</li><li>Q4 planning and targets</li></ul><p>Submit department reports to the Planning Office by <strong>July 18, 2026</strong>.</p>`,
    contentOromoo: `<p>Hoogganoonni waajjiraalee hundaa fi bulchitoonni Kebelee Walga'ii Ilaalcha Raawwii Kwaartaala 3ffaatti afeeramaniiru.</p><h2>Ibsa Walga'ii</h2><ul><li><strong>Guyyaa:</strong> Adoolessa 20, 2026</li><li><strong>Sa'aatii:</strong> 9:00 AM – 4:00 PM</li><li><strong>Bakka:</strong> Galma Woreeda Hurumu</li></ul><h2>Ajandaa</h2><ul><li>Kaayyoo raawwii Kwaartaala 3ffaa fi galma gahiinsa isaa</li><li>Gabaasa itti fayyadama baajataa</li><li>Karoora fi kaayyoo Kwaartaala 4ffaa</li></ul><p>Gabaasa waajjiraa hanga <strong>Adoolessa 18, 2026</strong>tti Waajjira Karooraatti dhiyeessaa.</p>`,
    contentAmharic: `<p>ሁሉም የክፍል ኃላፊዎችና የቀበሌ አስተዳደር መሪዎች ለ3ኛ ሩብ ዓመት አፈጻጸም ግምገማ ስብሰባ ተጋብዘዋል።</p><h2>የስብሰባ ዝርዝር</h2><ul><li><strong>ቀን፦</strong> ሐምሌ 20፣ 2026</li><li><strong>ሰዓት፦</strong> 9:00 AM – 4:00 PM</li><li><strong>ቦታ፦</strong> የሁሩሙ ወረዳ አዳራሽ</li></ul><h2>አጀንዳ</h2><ul><li>የ3ኛ ሩብ ዓመት አፈጻጸም ግቦች እና ውጤቶች</li><li>የበጀት አጠቃቀም ሪፖርት</li><li>የ4ኛ ሩብ ዓመት እቅድና ግቦች</li></ul><p>የክፍል ሪፖርቶችን እስከ <strong>ሐምሌ 18፣ 2026</strong> ድረስ ለእቅድ ቢሮ ያስገቡ።</p>`,
    tag: 'EVENT', isUrgent: false, publishedAt: '2026-07-08',
    department: null, author: 'Hurumu Portal Admin', viewCount: 187,
  },
  'civil-reg-extended-july-2026': {
    title: 'Civil Registration Office Extended Hours – July 2026',
    titleOromoo: "Sa'aatiin Waajjira Galmee Ummataa Dabalame – Adoolessa 2026",
    titleAmharic: 'የዜጎች ምዝገባ ቢሮ የስራ ሰዓት ተራዝሟል – ሐምሌ 2026',
    excerpt: 'Extended service hours every weekday from 8 AM to 5 PM throughout July 2026.',
    excerptOromoo: "Guyyaa hojii hundaan sa'aatii dabalataa Adoolessa 2026 guutuu tajaajilli kennama.",
    excerptAmharic: 'ሐምሌ 2026 ሙሉ በየስራ ቀኑ ከ8 ሰዓት እስከ 5 ሰዓት የተራዘመ የስራ ሰዓት ይሰጣል።',
    content: `<p>To address the backlog in registration requests, the Civil Registration Office will operate extended hours throughout July 2026.</p><h2>Extended Hours</h2><ul><li><strong>Monday – Friday:</strong> 8:00 AM – 5:00 PM</li><li><strong>Saturday:</strong> 9:00 AM – 1:00 PM (new)</li></ul><h2>Services available</h2><ul><li>Birth certificate registration</li><li>Marriage certificate registration</li><li>Death registration</li><li>ID card applications</li></ul>`,
    contentOromoo: `<p>Gaaffiiwwan galmee hafan xumuruuf, Waajjirri Galmee Ummataa guutuu Adoolessa 2026 sa'aatii dabalataa hojjeta.</p><h2>Sa'aatii Dabalataa</h2><ul><li><strong>Wiixata – Jimaata:</strong> 8:00 AM – 5:00 PM</li><li><strong>Sanbata:</strong> 9:00 AM – 1:00 PM (haaraa)</li></ul><h2>Tajaajiloota Argaman</h2><ul><li>Galmee ragaa dhalootaa</li><li>Galmee ragaa fuudhaa</li><li>Galmee du'aa</li><li>Iyyata kaardii eenyummaa</li></ul>`,
    contentAmharic: `<p>ያልተጠናቀቁ የምዝገባ ጥያቄዎችን ለመፍታት፣ የዜጎች ምዝገባ ቢሮ በሙሉ ሐምሌ 2026 የተራዘመ የስራ ሰዓት ይኖረዋል።</p><h2>የተራዘመ የስራ ሰዓት</h2><ul><li><strong>ሰኞ – አርብ፦</strong> 8:00 AM – 5:00 PM</li><li><strong>ቅዳሜ፦</strong> 9:00 AM – 1:00 PM (አዲስ)</li></ul><h2>የሚገኙ አገልግሎቶች</h2><ul><li>የልደት ማረጋገጫ ምዝገባ</li><li>የጋብቻ ማረጋገጫ ምዝገባ</li><li>የሞት ምዝገባ</li><li>የመታወቂያ ካርድ ማመልከቻዎች</li></ul>`,
    tag: 'NOTICE', isUrgent: false, publishedAt: '2026-07-05',
    department: null, author: 'Hurumu Portal Admin', viewCount: 256,
  },
  'road-rehab-metu-2026': {
    title: 'Hurumu-Metu Road Rehabilitation Work Begins',
    titleOromoo: 'Hojiin Suphaa Daandii Hurumu-Metu Jalqabame',
    titleAmharic: 'የሁሩሙ-መቱ መንገድ ጥገና ስራ ተጀመረ',
    excerpt: 'Road rehabilitation on the 42 km Hurumu–Metu stretch has officially commenced.',
    excerptOromoo: 'Hojiin suphaa daandii km 42 Hurumu-Metu seeraan jalqabeera.',
    excerptAmharic: 'የ42 ኪ.ሜ ሁሩሙ-መቱ መንገድ የጥገና ስራ በይፋ ተጀምሯል።',
    content: `<p>Rehabilitation work on the 42 km road connecting Hurumu to Metu town has officially commenced.</p><h2>Project Details</h2><ul><li><strong>Route:</strong> Hurumu Town – Metu Town (42 km)</li><li><strong>Expected completion:</strong> December 2026</li></ul><h2>Scope of work</h2><ul><li>Full gravel road rehabilitation and grading</li><li>Drainage culverts at 12 crossing points</li><li>Bridge repair at the Didesa River crossing</li><li>Roadside tree planting (1,200 seedlings)</li></ul>`,
    contentOromoo: `<p>Hojiin suphaa daandii km 42 Hurumu magaalaa Metuutti walqabsiisu seeraan jalqabeera.</p><h2>Ibsa Piroojektichaa</h2><ul><li><strong>Karaa:</strong> Magaalaa Hurumu – Magaalaa Metu (km 42)</li><li><strong>Xumuramuu isaa kan eegamu:</strong> Muddee 2026</li></ul><h2>Bal'ina Hojichaa</h2><ul><li>Suphaa fi tolchaa daandii guutuu</li><li>Bishaan baasii bakka wal qixxaachuu 12tti</li><li>Suphaa riqichaa ceehumsa Laga Didesaa</li><li>Dhaabuu mukaa qarqara daandii (biqila 1,200)</li></ul>`,
    contentAmharic: `<p>ሁሩሙን ከመቱ ከተማ ጋር የሚያገናኘው 42 ኪ.ሜ መንገድ የጥገና ስራ በይፋ ተጀምሯል።</p><h2>የፕሮጀክት ዝርዝር</h2><ul><li><strong>መስመር፦</strong> ሁሩሙ ከተማ – መቱ ከተማ (42 ኪ.ሜ)</li><li><strong>የሚጠበቀው መጠናቀቂያ ጊዜ፦</strong> ታህሳስ 2026</li></ul><h2>የስራው ወሰን</h2><ul><li>ሙሉ የጠጠር መንገድ ጥገናና ማስተካከያ</li><li>በ12 መተላለፊያ ነጥቦች የፍሳሽ ማስተላለፊያዎች</li><li>በዲዴሳ ወንዝ መሻገሪያ ላይ የድልድይ ጥገና</li><li>የመንገድ ዳር ዛፍ ተከላ (1,200 ችግኞች)</li></ul>`,
    tag: 'PROJECT', isUrgent: false, publishedAt: '2026-06-28',
    department: { en: 'Infrastructure & Construction', om: 'Insfiraastirakcharii fi Ijaarsa', am: 'ኢንፍራስትራክቸር እና ሕንጻ' },
    author: 'Hurumu Portal Admin', viewCount: 423,
  },
};

function formatDate(d: string) {
  return new Date(d).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });
}

export function generateStaticParams() {
  return Object.keys(NEWS_DATA).map(slug => ({ slug }));
}

export default function NewsDetailPage({ params }: { params: { slug: string } }) {
  const news = NEWS_DATA[params.slug];
  if (!news) notFound();

  return (
    <div className="bg-gray-50 min-h-screen">
      <div className="bg-green-900 text-white py-10 px-4">
        <div className="max-w-4xl mx-auto">
          <Link href="/news" className="inline-flex items-center gap-2 text-green-300 hover:text-white text-sm mb-6 transition">
            <ArrowLeft size={15} /> <LocalizedText en="Back to News" om="Odeeffannootti Deebi'i" am="ወደ ዜና ተመለስ" />
          </Link>
          {news.isUrgent && (
            <div className="inline-flex items-center gap-2 bg-red-500/20 border border-red-400/40 text-red-300 text-xs font-bold px-3 py-1 rounded-full mb-4">
              <AlertCircle size={12} /> <LocalizedText en="Urgent Notice" om="Beeksisa Ariifachiisaa" am="አስቸኳይ ማሳወቂያ" />
            </div>
          )}
          <div className="flex items-center gap-2 mb-4">
            <span className={`text-xs font-bold px-2.5 py-1 rounded border uppercase tracking-wide ${TAG_COLORS[news.tag]}`}>
              <LocalizedText en={TAG_LABELS[news.tag].en} om={TAG_LABELS[news.tag].om} am={TAG_LABELS[news.tag].am} />
            </span>
          </div>
          <h1 className="text-2xl lg:text-3xl font-extrabold leading-tight mb-4">
            <LocalizedText en={news.title} om={news.titleOromoo} am={news.titleAmharic} />
          </h1>
          <div className="flex flex-wrap gap-4 text-xs text-green-300">
            <span className="flex items-center gap-1.5"><Calendar size={12} /> {formatDate(news.publishedAt)}</span>
            <span className="flex items-center gap-1.5"><User size={12} /> {news.author}</span>
            {news.department && (
              <span className="flex items-center gap-1.5">
                <Building2 size={12} /> <LocalizedText en={news.department.en} om={news.department.om} am={news.department.am} />
              </span>
            )}
            <span className="flex items-center gap-1.5">
              <Eye size={12} /> {news.viewCount} <LocalizedText en="views" om="ilaalamuu" am="እይታዎች" />
            </span>
          </div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 py-10">
        <div className="bg-white rounded-2xl border border-gray-100 p-8 shadow-sm">
          <p className="text-base text-gray-600 leading-relaxed mb-6 pb-6 border-b border-gray-100 font-medium">
            <LocalizedText en={news.excerpt} om={news.excerptOromoo} am={news.excerptAmharic} />
          </p>
          <LocalizedNewsBody contentEn={news.content} contentOm={news.contentOromoo} contentAm={news.contentAmharic} />
        </div>
        <div className="mt-8">
          <Link href="/news" className="inline-flex items-center gap-2 text-sm font-semibold text-green-800 hover:text-green-600 transition">
            <ArrowLeft size={15} /> <LocalizedText en="Back to all news" om="Odeeffannoo hundatti deebi'i" am="ወደ ሁሉም ዜና ተመለስ" />
          </Link>
        </div>
      </div>
    </div>
  );
}

// Small server-safe helper: LocalizedText only handles plain text/ReactNode children,
// but this body needs dangerouslySetInnerHTML per language, so it picks language via
// three parallel <LocalizedText> wrappers instead of one dynamic string.
function LocalizedNewsBody({ contentEn, contentOm, contentAm }: { contentEn: string; contentOm: string; contentAm: string }) {
  return (
    <>
      <LocalizedText
        en={<div className="prose prose-sm max-w-none text-gray-700 leading-relaxed prose-h2:text-lg prose-h2:font-bold prose-h2:text-green-900 prose-h2:mt-6 prose-h2:mb-3 prose-p:mb-4 prose-ul:mb-4 prose-li:mb-1 prose-strong:text-gray-900" dangerouslySetInnerHTML={{ __html: contentEn }} />}
        om={<div className="prose prose-sm max-w-none text-gray-700 leading-relaxed prose-h2:text-lg prose-h2:font-bold prose-h2:text-green-900 prose-h2:mt-6 prose-h2:mb-3 prose-p:mb-4 prose-ul:mb-4 prose-li:mb-1 prose-strong:text-gray-900" dangerouslySetInnerHTML={{ __html: contentOm }} />}
        am={<div className="prose prose-sm max-w-none text-gray-700 leading-relaxed prose-h2:text-lg prose-h2:font-bold prose-h2:text-green-900 prose-h2:mt-6 prose-h2:mb-3 prose-p:mb-4 prose-ul:mb-4 prose-li:mb-1 prose-strong:text-gray-900" dangerouslySetInnerHTML={{ __html: contentAm }} />}
      />
    </>
  );
}