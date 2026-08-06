import { Language } from "@/components/layout/LanguageProvider";

export const languageLabels: Record<Language, string> = {
  en: "English",
  om: "Oromoo",
  am: "አማርኛ",
};

export const navLinks: Record<
  Language,
  Array<{
    label: string;
    href: string;
    children?: Array<{ label: string; href: string }>;
  }>
> = {
  en: [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
    {
      label: "Services",
      href: "/services",
      children: [
        { label: "Civil Registration", href: "/services/birth-certificate" },
        { label: "Land Administration", href: "/services/land-certificate" },
        { label: "Business License", href: "/services/business-license" },
        { label: "Agriculture", href: "/services/agricultural-extension" },
      ],
    },
    { label: "Departments", href: "/departments" },
    { label: "News & Events", href: "/news" },
    { label: "Transparency", href: "/transparency" },
    { label: "Contact", href: "/contact" },
  ],
  om: [
    { label: "Mana", href: "/" },
    { label: "Waaʼee", href: "/about" },
    {
      label: "Tajaajiloota",
      href: "/services",
      children: [
        { label: "Galmee Ummataa", href: "/services/birth-certificate" },
        { label: "Bulchiinsa Lafaa", href: "/services/land-certificate" },
        { label: "Hayyama Daldalaa", href: "/services/business-license" },
        { label: "Qonnaa", href: "/services/agricultural-extension" },
      ],
    },
    { label: "Waajjirawwan", href: "/departments" },
    { label: "Odeeffannoo fi Beeksisa", href: "/news" },
    { label: "Ifaa", href: "/transparency" },
    { label: "Quunnamtii", href: "/contact" },
  ],
  am: [
    { label: "ዋና ገፅ", href: "/" },
    { label: "ስለ እኛ", href: "/about" },
    {
      label: "አገልግሎቶች",
      href: "/services",
      children: [
        { label: "የዜጎች ምዝገባ", href: "/services/birth-certificate" },
        { label: "የመሬት አስተዳደር", href: "/services/land-certificate" },
        { label: "የንግድ ፈቃድ", href: "/services/business-license" },
        { label: "ግብርና", href: "/services/agricultural-extension" },
      ],
    },
    { label: "አገልግሎት ክፍል", href: "/departments" },
    { label: "ዜናና ማስታወቂያዎች", href: "/news" },
    { label: "ግልፀኝነት", href: "/transparency" },
    { label: "ግንኙነት", href: "/contact" },
  ],
};

export const publicLabels: Record<Language, Record<string, string>> = {
  en: {
    citizensServices: "Citizens' Services",
    heroHeading: "What Can We Help You With?",
    latestUpdates: "Latest Updates",
    newsAnnouncements: "News & Announcements",
    viewAll: "View all",
    governmentServices: "Government Services",
    alreadyApplied: "Already applied? Track your application status.",
    trackApplication: "Track Application",
    backToServices: "Back to Services",
    aboutThisService: "About this service",
    requiredDocuments: "Required Documents",
    howToApply: "How to Apply — Step by Step",
    serviceInfo: "Service Info",
    contactOffice: "Contact Office",
    alreadyAppliedShort: "Already applied?",
    backToDepartments: "Back to Departments",
    departmentsTitle: "Woreda Departments",
    governmentOffices: "Government Offices",
    getInTouch: "Get in Touch",
    departmentHead: "Department Head",
    staffLogin: "Staff Login",
  },
  om: {
    citizensServices: "Tajaajilawwan Jiraattotaa",
    heroHeading: "Maaliin Si Gargaaruu Dandeenya?",
    latestUpdates: "Odeeffannoo Haaraa",
    newsAnnouncements: "Odeessaa fi Beeksisa",
    viewAll: "Hundumaa Ilaali",
    governmentServices: "Tajaajilawwan Mootummaa",
    alreadyApplied: "Yeroo dura galmee goote? Haala isaa hordofi.",
    trackApplication: "Galmee Hordofu",
    backToServices: "Tajaajilootaatti Deebiʼi",
    aboutThisService: "Tajaajila kana ilaalchisee",
    requiredDocuments: "Galmeewwan Barbaachisan",
    howToApply: "Akkamitti Galmee Gochuu — Tarkaanfii Tarkaanfii",
    serviceInfo: "Odeeffannoo Tajaajilaa",
    contactOffice: "Waajjira Qunnamtii",
    alreadyAppliedShort: "Dursee galtee goote?",
    backToDepartments: "Waajjirawwanitti Deebiʼi",
    departmentsTitle: "Waajjirawwan Woreda",
    governmentOffices: "Waajjirawwan Mootummaa",
    getInTouch: "Nu Qunnami",
    departmentHead: "Miseensa Waajjira",
    staffLogin: "Hojjettoota Seenuu",
  },
  am: {
    citizensServices: "የዜጎች አገልግሎቶች",
    heroHeading: "እንንዴት እንረዳዎታለን?",
    latestUpdates: "የአዳዲስ ዜናዎች",
    newsAnnouncements: "ዜናና ማስታወቂያዎች",
    viewAll: "ሁሉንም ተመልከት",
    governmentServices: "የመንግሥት አገልግሎቶች",
    alreadyApplied: "እስከዚህ ጊዜ እቃውን አስገባሽ? የማመልከቻዎን ሁኔታ ይከታተሉ።",
    trackApplication: "ሂደቱን እይ",
    backToServices: "ወደ አገልግሎቶች ተመለስ",
    aboutThisService: "ስለ እነዚህ አገልግሎቶች",
    requiredDocuments: "የሚያስፈልጉ ሰነዶች",
    howToApply: "እንዴት እንደሚመዘገብ — እርስ በእርስ",
    serviceInfo: "የአገልግሎት መረጃ",
    contactOffice: "የኢፎይስ እውቂያ",
    alreadyAppliedShort: "እስከዚህ ድረስ ተመዝግበሃል?",
    backToDepartments: "ወደ ጉርፍ ዳግም ተመለስ",
    departmentsTitle: "የወረዳ ክፍሎች",
    governmentOffices: "የመንግሥት ቢሮዎች",
    getInTouch: "እባክዎን ተገናኝ",
    departmentHead: "ከተማ ዳይሬክተር",
    staffLogin: "የሠራተኞች ግባ",
  },
};

export const departmentData: Record<string, any> = {
  agriculture: {
    nameAmharic: "ግብርና እና ተፈጥሮ ሀብት",
    descriptionOromoo:
      "Tajaajiloota babalʼina qonnaa, bulchiinsa qabeenya uumamaa, fi tajaajiloota horsiisee bulaa hawaasa guutuu Hurumu Woreedaaf kennu.",
    descriptionAmharic:
      "የግብርና እና የተፈጥሮ ሀብት ቢሮ ለአገልግሎት ሕብረተሰብ ሁሉ የግል እርዳታን ይደርሳል።",
  },
  health: {
    nameAmharic: "ጤና እና ማህበራዊ ጉዳዮች",
    descriptionOromoo:
      "Waajjira Fayyaa tajaajiloota fayyaa buʼuraa, sagantaalee hawaasummaa fi odeeffannoo fayyaa hawaasa guutuu kessan hooggana.",
    descriptionAmharic: "ቤተ ክህነት ቢሮ የዜጎችን ጤና እና ማህበራዊ ድጋፍ ማስተናገድ ይችላል።",
  },
  education: {
    nameAmharic: "ትምህርት",
    descriptionOromoo:
      "Waajjirri barnootaa teessoo 47f deeggarsa barsiisota, galmee barattootaa fi sagantaalee misooma barnootaa kennu.",
    descriptionAmharic: "ትምህርት ቢሮ ከትንሹ እስከ ከፍተኛ ትምህርት ድጋፍ ይሰጣል።",
  },
  finance: {
    nameAmharic: "ፋይናንስ እና ኢኮኖሚ",
    descriptionOromoo:
      "Waajjirri maallaqaa baajata fi walitti qabinsa galii qindeessa, akkasumas karoora dinagdee toʼata.",
    descriptionAmharic: "ፋይናንስ ቢሮ በግድቡ የጀማሪ ቢሮ በብጀት እና በገንዘብ እድገት ተቋማት ይረዳል።",
  },
  infrastructure: {
    nameAmharic: "ኢንፍራስትራክቸር እና ሕንጻ",
    descriptionOromoo:
      "Waajjirri ijaarsa fi eegumsa daandii, ijaarsa ummataa, fi madda bishaanii Hurumu Woreeda bakka buusa.",
    descriptionAmharic: "የኢንፍራስትራክቸር ቢሮ የመንገድ እና የውሃ ሥራዎችን ይቆጣጠራል።",
  },
  land: {
    nameAmharic: "የመሬት አስተዳደር",
    descriptionOromoo:
      "Waajjirri bulchiinsa lafaa galmeewwan lafaa, murtii mormii fi karoora magaalaa qindeessa.",
    descriptionAmharic: "የመሬት ቢሮ ምዝገባ እና የመሬት ጥራት ማረጋገጫ ያደርጋል።",
  },
};

export const serviceData: Record<string, any> = {
  "birth-certificate": {
    nameAmharic: "የልደት ማረጋገጫ",
    descriptionOromoo:
      "Waldaa burqaa haadhaafi abbaa wajjin galmee hojjachuudhaan ragaa dhalootaa argadhu.",
    descriptionAmharic: "የወንድ እና የሴት ሕፃን ልደት ማረጋገጫ በተገቢ መረጃ አስገብቶ ይሰጣል።",
    requiredDocsOromoo: [
      "Fayyadamaa ID seeraa lamaanuu",
      "Galmee haadha/abbaa dhaabbata fayyaa",
      "Sakattaʼaa ragaa ID seeraa lama",
      "Asxaa guutame",
    ],
    requiredDocsAmharic: [
      "የእርግጠኝነት መታወቂያ ሁለት",
      "የሕክምና ማዕከል የውስጥ ሪከርድ",
      "ሁለት ምክር ካርዶች እና ቃለ ምላሽ",
      "የተሞላ ቅጽ",
    ],
  },
  // additional service-specific Amharic and Oromo strings can be added similarly...
};

export function selectByLanguage<T>(
  language: Language,
  en: T,
  om: T,
  am: T,
): T {
  return language === "om" ? om : language === "am" ? am : en;
}
