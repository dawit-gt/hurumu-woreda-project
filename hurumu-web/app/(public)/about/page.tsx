import { Users, MapPin, Target, Eye } from 'lucide-react';
import LocalizedText from '@/components/layout/LocalizedText';

const STATS = [
  { value: '124,000+', label: { en: 'Total Population', om: 'Baayy’ina Ummataa', am: 'የህዝብ ብዛት' } },
  { value: '18', label: { en: 'Kebeles', om: 'Kebeleewwan', am: 'ቀበሌዎች' } },
  { value: '847 km²', label: { en: 'Total Area', om: 'Bal’ina Guutuu', am: 'አጠቃላይ ስፋት' } },
  { value: '47', label: { en: 'Schools', om: 'Manneen Barnootaa', am: 'ትምህርት ቤቶች' } },
  { value: '3', label: { en: 'Health Centers', om: 'Giddugala Fayyaa', am: 'የጤና ማዕከሎች' } },
  { value: '6', label: { en: 'Departments', om: 'Waajjiraawwan', am: 'ክፍሎች' } },
];

const KEBELES = [
  'Hurumu Town', 'Alge', 'Boneya', 'Chewaka', 'Didu', 'Geba',
  'Haroo', 'Ilu', 'Karro', 'Mana', 'Nole', 'Sadi',
  'Supe', 'Tibe', 'Wama', 'Yayo', 'Zara', 'Zuria',
];

const LEADERSHIP = [
  { name: 'Ato Diriba Wakjira', role: { en: 'Woreda Administrator', om: 'Bulchaa Woreedaa', am: 'የወረዳ አስተዳዳሪ' } },
  { name: 'W/ro Chaltu Bedada', role: { en: 'Deputy Administrator', om: 'Itti Aanaa Bulchaa', am: 'ምክትል አስተዳዳሪ' } },
  { name: 'Ato Gemechu Tadesse', role: { en: 'Head, Agriculture Office', om: 'Hoogganaa, Waajjira Qonnaa', am: 'የግብርና ኃላፊ' } },
  { name: 'Dr. Fatuma Ali', role: { en: 'Head, Health Office', om: 'Hoogganaa, Waajjira Fayyaa', am: 'የጤና ኃላፊ' } },
  { name: 'Ato Berhanu Girma', role: { en: 'Head, Education Office', om: 'Hoogganaa, Waajjira Barnootaa', am: 'የትምህርት ኃላፊ' } },
  { name: 'Ato Tadesse Wolde', role: { en: 'Head, Finance Office', om: 'Hoogganaa, Waajjira Maallaqaa', am: 'የፋይናንስ ኃላፊ' } },
];

export default function AboutPage() {
  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Header */}
      <div className="bg-green-900 text-white py-12 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-xs font-bold text-yellow-400 uppercase tracking-widest mb-2">
            <LocalizedText en="About Us" om="Waa'ee Keenya" am="ስለ እኛ" />
          </div>
          <h1 className="text-3xl font-extrabold mb-2">
            <LocalizedText en="Hurumu Woreda" om="Aanaa Hurumu" am="ሁሩሙ ወረዳ" />
          </h1>
          <p className="text-green-200 text-sm">
            <LocalizedText 
              en="Ilu Aba Bora Zone · Oromia Region · Ethiopia"
              om="Godina Ilu Abbaa Booraa · Naannoo Oromiyaa · Itoophiyaa"
              am="ኢሉ አባ ቦራ ዞን · ኦሮሚያ ክልል · ኢትዮጵያ"
            />
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-10 space-y-8">

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {STATS.map(stat => (
            <div key={stat.label.en} className="bg-white rounded-xl border border-gray-100 p-5 text-center shadow-sm">
              <div className="text-2xl font-extrabold text-green-900 mb-1">{stat.value}</div>
              <div className="text-xs text-gray-500">
                <LocalizedText en={stat.label.en} om={stat.label.om} am={stat.label.am} />
              </div>
            </div>
          ))}
        </div>

        {/* Overview + Vision/Mission */}
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-white rounded-xl border border-gray-100 p-6 shadow-sm">
            <h2 className="text-base font-bold text-gray-900 mb-3 flex items-center gap-2">
              <MapPin size={16} className="text-green-700" />
              <LocalizedText en="Overview" om="Waa'ee Gabaabaa" am="አጠቃላይ እይታ" />
            </h2>
            <p className="text-sm text-gray-600 leading-relaxed mb-3">
              <LocalizedText
                en="Hurumu Woreda is one of the woredas in the Ilu Aba Bora Zone of the Oromia Region in southwestern Ethiopia. The woreda is named after its administrative center, Hurumu town."
                om="Hurumu Woreedaan Godina Ilu Abbaa Booraa, Naannoo Oromiyaa, kibba-lixa Itoophiyaa keessatti argamu keessaa tokko dha. Woreedaan maqaa magaalaa bulchiinsa isaa, Hurumu, irraa argate."
                am="ሁሩሙ ወረዳ በደቡብ ምዕራብ ኢትዮጵያ በኦሮሚያ ክልል በኢሉ አባ ቦራ ዞን ከሚገኙ ወረዳዎች አንዱ ነው። ወረዳው ስያሜውን ያገኘው ከአስተዳደር ማዕከሉ ከሁሩሙ ከተማ ነው።"
              />
            </p>
            <p className="text-sm text-gray-600 leading-relaxed mb-3">
              <LocalizedText
                en="The woreda covers an area of approximately 847 km² and is home to over 124,000 residents across 18 kebeles. The area is characterized by highland terrain with significant agricultural potential, particularly for coffee, maize, and livestock production."
                om="Woreedaan bal'ina lafaa naannoo 847 km² qabaachuun jiraattota 124,000 ol ta'an kebeleewwan 18 keessatti qabata. Naannichi lafa ol ka'aa fi kutaa dinagdee qonnaa cimaa qaba, keessumaa buna, boqqolloo fi horsiisa horiitiif."
                am="ወረዳው በግምት 847 ካሬ ኪሎ ሜትር ስፋት ያለው ሲሆን ከ124,000 በላይ ነዋሪዎችን በ18 ቀበሌዎች ውስጥ ይይዛል። አካባቢው ከፍተኛ የግብርና አቅም ያለው ደጋማ መልክዓ ምድር ያለው ሲሆን በተለይ ለቡና፣ ለበቆሎ እና ለከብት እርባታ ተስማሚ ነው።"
              />
            </p>
            <p className="text-sm text-gray-600 leading-relaxed">
              <LocalizedText
                en="Hurumu is well known for its Jimma coffee production and rich natural forests, which are part of the broader Ilu Aba Bora highland ecosystem."
                om="Hurumu buna Jimmaa oomishuu isaatiin fi bosona uumamaa badhaadhaa qabuun, kan naannoo ol ka'aa Ilu Abbaa Booraa keessatti argamuun beekamaa dha."
                am="ሁሩሙ በጅማ ቡና ምርቷ እና ከኢሉ አባ ቦራ ደጋማ ስነ-ምህዳር ክፍል በሆኑ የበለጸጉ የተፈጥሮ ደኖቷ ትታወቃለች።"
              />
            </p>
          </div>

          <div className="space-y-4">
            <div className="bg-white rounded-xl border border-gray-100 p-6 shadow-sm">
              <h2 className="text-base font-bold text-gray-900 mb-3 flex items-center gap-2">
                <Target size={16} className="text-green-700" />
                <LocalizedText en="Our Mission" om="Ergama Keenya" am="ተልእኮአችን" />
              </h2>
              <p className="text-sm text-gray-600 leading-relaxed">
                <LocalizedText
                  en="To deliver efficient, transparent, and citizen-centered public services that improve the quality of life for all residents of Hurumu Woreda through accountable governance and community participation."
                  om="Bulchiinsa itti gaafatamummaa fi hirmaannaa hawaasaa cimaa ta'een tajaajila ummataa qabatamaa, ifaa fi jiraattota Hurumu Woreedaa maraatiif haala jireenyaa fooyyessu kennuu."
                  am="በተጠያቂነት ላይ የተመሰረተ አስተዳደር እና የማህበረሰብ ተሳትፎ በመጠቀም ለሁሩሙ ወረዳ ነዋሪዎች ሁሉ የኑሮ ጥራትን የሚያሻሽል ቀልጣፋ፣ ግልጽ እና ዜጋ-ተኮር የህዝብ አገልግሎት መስጠት።"
                />
              </p>
            </div>
            <div className="bg-white rounded-xl border border-gray-100 p-6 shadow-sm">
              <h2 className="text-base font-bold text-gray-900 mb-3 flex items-center gap-2">
                <Eye size={16} className="text-green-700" />
                <LocalizedText en="Our Vision" om="Mul'ata Keenya" am="ራዕያችን" />
              </h2>
              <p className="text-sm text-gray-600 leading-relaxed">
                <LocalizedText
                  en="A prosperous, self-reliant, and well-governed Hurumu Woreda where every citizen has access to quality services, economic opportunity, and a healthy environment by 2030."
                  om="Hanga bara 2030tti, Hurumu Woreeda badhaatu, of danda'u fi bulchiinsa gaarii qabu, itti lammiin hundi tajaajila qulqullina qabu, carraa dinagdee fi naannoo fayyaa qabu argatan uumuu."
                  am="እስከ 2030 ድረስ እያንዳንዱ ዜጋ ጥራት ያለው አገልግሎት፣ የኢኮኖሚ እድል እና ጤናማ አካባቢ የሚያገኝበት የበለጸገ፣ ራሱን የቻለ እና በጥሩ የሚተዳደር ሁሩሙ ወረዳ።"
                />
              </p>
            </div>
          </div>
        </div>

        {/* Leadership */}
        <div className="bg-white rounded-xl border border-gray-100 p-6 shadow-sm">
          <h2 className="text-base font-bold text-gray-900 mb-5 flex items-center gap-2">
            <Users size={16} className="text-green-700" />
            <LocalizedText en="Leadership" om="Hoogganoota" am="አመራር" />
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {LEADERSHIP.map(person => (
              <div key={person.name} className="flex items-center gap-3 p-3 rounded-lg border border-gray-50 bg-gray-50">
                <div className="w-10 h-10 rounded-full bg-green-800 text-white flex items-center justify-center font-bold text-sm flex-shrink-0">
                  {person.name.split(' ').slice(-1)[0][0]}
                </div>
                <div>
                  <p className="text-sm font-semibold text-gray-900">{person.name}</p>
                  <p className="text-xs text-gray-500">
                    <LocalizedText en={person.role.en} om={person.role.om} am={person.role.am} />
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Kebeles */}
        <div className="bg-white rounded-xl border border-gray-100 p-6 shadow-sm">
          <h2 className="text-base font-bold text-gray-900 mb-5 flex items-center gap-2">
            <MapPin size={16} className="text-green-700" />
            <LocalizedText
              en="18 Kebeles of Hurumu Woreda"
              om="Kebeleewwan 18 Hurumu Woreedaa"
              am="የሁሩሙ ወረዳ 18 ቀበሌዎች"
            />
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-3">
            {KEBELES.map((kebele, i) => (
              <div key={kebele} className="bg-green-50 border border-green-100 rounded-lg px-3 py-2 text-center">
                <div className="text-xs font-bold text-green-800">#{i + 1}</div>
                <div className="text-xs text-gray-700 mt-0.5">{kebele}</div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}