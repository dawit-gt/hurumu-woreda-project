import Link from 'next/link';
import { Globe } from 'lucide-react';

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
                <div className="text-yellow-600 text-xs">Administration Portal</div>
              </div>
            </div>
            <p className="text-xs leading-relaxed">Official government portal for Hurumu Woreda, Ilu Aba Bora Zone, Oromia Region, Ethiopia.</p>
          </div>
          {[
            { heading: 'Quick Links', links: ['Home','About','News','Contact'] },
            { heading: 'Services', links: ['Civil Registration','Land Services','Business License','Agriculture'] },
            { heading: 'Contact', links: ['+251 57 XXX XXXX','info@hurumu.pro.et','Hurumu Town, Oromia'] },
          ].map(col => (
            <div key={col.heading}>
              <div className="text-yellow-600 text-xs font-bold uppercase tracking-wider mb-3">{col.heading}</div>
              <ul className="space-y-2 text-xs">{col.links.map(l => <li key={l}><Link href="#" className="hover:text-white transition">{l}</Link></li>)}</ul>
            </div>
          ))}
        </div>
        <div className="border-t border-gray-800 pt-6 flex flex-wrap justify-between gap-3 text-xs">
          <span>© {new Date().getFullYear()} Hurumu Woreda Administration. All rights reserved.</span>
          <span>Built under the <span className="text-yellow-600">Oromia e-Government Initiative</span></span>
        </div>
      </div>
    </footer>
  );
}
