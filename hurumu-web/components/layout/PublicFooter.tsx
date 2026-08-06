import Link from 'next/link';
import { Globe } from 'lucide-react';
import LocalizedText from '@/components/layout/LocalizedText';

const columns = [
  {
    heading: { en: 'Quick Links', om: 'Hidhaa Ariifachiisaa', am: 'ፈጣን ማገናኛዎች' },
    links: [
      { label: { en: 'Home', om: 'Mana', am: 'ዋና ገፅ' }, href: '/' },
      { label: { en: 'About', om: 'Waaʼee', am: 'ስለ እኛ' }, href: '/about' },
      { label: { en: 'News', om: 'Odeeffannoo', am: 'ዜና' }, href: '/news' },
      { label: { en: 'Contact', om: 'Quunnamtii', am: 'ግንኙነት' }, href: '/contact' },
    ],
  },
  {
    heading: { en: 'Services', om: 'Tajaajiloota', am: 'አገልግሎቶች' },
    links: [
      { label: { en: 'Civil Registration', om: 'Galmee Ummataa', am: 'የዜጎች ምዝገባ' }, href: '/services/birth-certificate' },
      { label: { en: 'Land Services', om: 'Bulchiinsa Lafaa', am: 'የመሬት አገልግሎት' }, href: '/services/land-certificate' },
      { label: { en: 'Business License', om: 'Hayyama Daldalaa', am: 'የንግድ ፈቃድ' }, href: '/services/business-license' },
      { label: { en: 'Agriculture', om: 'Qonnaa', am: 'ግብርና' }, href: '/services/agricultural-extension' },
    ],
  },
  {
    heading: { en: 'Contact', om: 'Quunnamtii', am: 'ግንኙነት' },
    links: [
      { label: { en: '+251 57 XXX XXXX', om: '+251 57 XXX XXXX', am: '+251 57 XXX XXXX' }, href: 'tel:+25157XXXXXXX' },
      { label: { en: 'info@hurumu.pro.et', om: 'info@hurumu.pro.et', am: 'info@hurumu.pro.et' }, href: 'mailto:info@hurumu.pro.et' },
      { label: { en: 'Hurumu Town, Oromia', om: 'Magaalaa Hurumu, Oromiyaa', am: 'ሁሩሙ ከተማ፣ ኦሮሚያ' }, href: '/contact' },
    ],
  },
];

export default function PublicFooter() {
  return (
    <footer className="bg-gray-900 text-gray-400">
      <div className="flex h-1"><div className="flex-1 bg-green-800"/><div className="flex-1 bg-yellow-600"/><div className="flex-1 bg-white"/><div className="flex-1 bg-yellow-600"/><div className="flex-1 bg-green-800"/></div>
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-10">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-full bg-green-800 border-2 border-yellow-600 flex items-center justify-center">
                <Globe size={16} className="text-white" />
              </div>
              <div>
                <div className="font-bold text-white text-sm">Hurumu Woreda</div>
                <div className="text-yellow-600 text-xs">
                  <LocalizedText en="Administration Portal" om="Waajjira Bulchiinsaa" am="የአስተዳደር መግቢያ" />
                </div>
              </div>
            </div>
            <p className="text-xs leading-relaxed">
              <LocalizedText
                en="Official government portal for Hurumu Woreda, Ilu Aba Bora Zone, Oromia Region, Ethiopia."
                om="Marsariitii mootummaa Hurumu Woreedaa, Godina Ilu Abbaa Booraa, Naannoo Oromiyaa, Itoophiyaa."
                am="ለሁሩሙ ወረዳ፣ ኢሉ አባ ቦራ ዞን፣ ኦሮሚያ ክልል፣ ኢትዮጵያ ይፋዊ የመንግስት ድህረ ገፅ።"
              />
            </p>
          </div>
          {columns.map(col => (
            <div key={col.heading.en}>
              <div className="text-yellow-600 text-xs font-bold uppercase tracking-wider mb-3">
                <LocalizedText en={col.heading.en} om={col.heading.om} am={col.heading.am} />
              </div>
              <ul className="space-y-2 text-xs">
                {col.links.map(l => (
                  <li key={l.label.en}>
                    <Link href={l.href} className="hover:text-white transition">
                      <LocalizedText en={l.label.en} om={l.label.om} am={l.label.am} />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="border-t border-gray-800 pt-6 flex flex-wrap justify-between gap-3 text-xs">
          <span>
            © {new Date().getFullYear()}{' '}
            <LocalizedText
              en="Hurumu Woreda Administration. All rights reserved."
              om="Bulchiinsa Hurumu Woreedaa. Mirgi hundi seeraan eegameera."
              am="የሁሩሙ ወረዳ አስተዳደር። መብቱ በሕግ የተጠበቀ ነው።"
            />
          </span>
          <span>
            <LocalizedText en="Built under the" om="Kan hojjetame jalatti" am="የተገነባው በ" />{' '}
            <span className="text-yellow-600">
              <LocalizedText en="Oromia e-Government Initiative" om="Sagantaa e-Mootummaa Oromiyaa" am="የኦሮሚያ ኢ-መንግስት ተነሳሽነት" />
            </span>
          </span>
        </div>
      </div>
    </footer>
  );
}