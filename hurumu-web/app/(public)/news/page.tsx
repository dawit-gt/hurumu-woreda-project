'use client';
import { useState } from 'react';
import Link from 'next/link';
import { ArrowRight, Calendar, Search, AlertCircle } from 'lucide-react';

const TAG_COLORS: Record<string, string> = {
  ANNOUNCEMENT: 'bg-blue-50 text-blue-700',
  EVENT:        'bg-purple-50 text-purple-700',
  NOTICE:       'bg-yellow-50 text-yellow-700',
  PROJECT:      'bg-green-50 text-green-700',
  TENDER:       'bg-orange-50 text-orange-700',
};

const TAGS = ['ALL', 'ANNOUNCEMENT', 'EVENT', 'NOTICE', 'PROJECT', 'TENDER'];

const ALL_NEWS = [
  { slug: 'agricultural-season-2025', title: '2025/26 Agricultural Season Support Program Now Open', excerpt: 'The Woreda Agriculture Office has opened registration for subsidized fertilizer and improved seed distribution for all kebele farmers.', tag: 'ANNOUNCEMENT', isUrgent: true, publishedAt: '2026-07-10', department: 'Agriculture & Natural Resources', author: 'Hurumu Portal Admin' },
  { slug: 'q3-performance-review', title: 'Hurumu Woreda 3rd Quarter Performance Review Meeting', excerpt: 'All department heads and kebele administration leaders are invited to the quarterly review session at the Woreda Hall.', tag: 'EVENT', isUrgent: false, publishedAt: '2026-07-08', department: null, author: 'Hurumu Portal Admin' },
  { slug: 'civil-reg-extended-july-2026', title: 'Civil Registration Office Extended Hours – July 2026', excerpt: 'Extended service hours every weekday from 8 AM to 5 PM to address backlog in birth and marriage certificate requests.', tag: 'NOTICE', isUrgent: false, publishedAt: '2026-07-05', department: null, author: 'Hurumu Portal Admin' },
  { slug: 'road-rehab-metu-2026', title: 'Hurumu-Metu Road Rehabilitation Work Begins', excerpt: 'The Infrastructure Office has commenced road rehabilitation on the 42 km stretch connecting Hurumu to Metu town.', tag: 'PROJECT', isUrgent: false, publishedAt: '2026-06-28', department: 'Infrastructure & Construction', author: 'Hurumu Portal Admin' },
  { slug: 'water-supply-kebele-3', title: 'New Water Supply System Commissioned in Boneya Kebele', excerpt: 'A new clean water supply system serving over 1,200 households has been officially commissioned in Boneya Kebele.', tag: 'PROJECT', isUrgent: false, publishedAt: '2026-06-20', department: 'Infrastructure & Construction', author: 'Hurumu Portal Admin' },
  { slug: 'school-enrollment-2026', title: 'School Enrollment for 2026/27 Academic Year Now Open', excerpt: 'Parents and guardians are reminded to enroll children for the upcoming academic year at their nearest primary school.', tag: 'ANNOUNCEMENT', isUrgent: false, publishedAt: '2026-06-15', department: 'Education', author: 'Hurumu Portal Admin' },
];

function formatDate(d: string) {
  return new Date(d).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });
}

export default function NewsPage() {
  const [activeTag, setActiveTag] = useState('ALL');
  const [search, setSearch] = useState('');

  const filtered = ALL_NEWS.filter(n => {
    const matchTag = activeTag === 'ALL' || n.tag === activeTag;
    const matchSearch = !search || n.title.toLowerCase().includes(search.toLowerCase()) || n.excerpt.toLowerCase().includes(search.toLowerCase());
    return matchTag && matchSearch;
  });

  const urgent = filtered.filter(n => n.isUrgent);
  const regular = filtered.filter(n => !n.isUrgent);

  return (
    <div className="bg-gray-50 min-h-screen">
      <div className="bg-green-900 text-white py-12 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-xs font-bold text-yellow-400 uppercase tracking-widest mb-2">Stay Informed</div>
          <h1 className="text-3xl font-extrabold mb-2">News & Announcements</h1>
          <p className="text-green-200 text-sm">Official updates from Hurumu Woreda Administration</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-10">
        <div className="flex flex-col sm:flex-row gap-4 mb-8">
          <div className="relative flex-1 max-w-sm">
            <Search size={15} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
            <input value={search} onChange={e => setSearch(e.target.value)} placeholder="Search news…" className="w-full pl-9 pr-4 py-2.5 border border-gray-200 rounded-lg text-sm bg-white focus:outline-none focus:ring-2 focus:ring-green-600" />
          </div>
          <div className="flex gap-2 flex-wrap">
            {TAGS.map(tag => (
              <button key={tag} onClick={() => setActiveTag(tag)} className={`px-3 py-1.5 rounded-lg text-xs font-bold uppercase tracking-wide transition ${activeTag === tag ? 'bg-green-800 text-white' : 'bg-white text-gray-600 border border-gray-200 hover:border-green-600'}`}>
                {tag}
              </button>
            ))}
          </div>
        </div>

        {urgent.length > 0 && (
          <div className="mb-8 space-y-3">
            {urgent.map(n => (
              <Link key={n.slug} href={`/news/${n.slug}`} className="flex items-start gap-3 bg-red-50 border border-red-200 rounded-xl p-4 hover:shadow-sm transition group">
                <AlertCircle size={18} className="text-red-500 flex-shrink-0 mt-0.5" />
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-xs font-bold text-red-600 uppercase">Urgent</span>
                    <span className="text-xs text-gray-400">{formatDate(n.publishedAt)}</span>
                  </div>
                  <p className="text-sm font-bold text-gray-900 group-hover:text-green-800 transition">{n.title}</p>
                </div>
                <ArrowRight size={15} className="text-gray-400 flex-shrink-0 mt-1 group-hover:text-green-700 transition" />
              </Link>
            ))}
          </div>
        )}

        {regular.length === 0 && urgent.length === 0 ? (
          <div className="text-center py-20 text-gray-400">
            <Search size={32} className="mx-auto mb-3 opacity-40" />
            <p className="text-sm">No news found matching your search.</p>
          </div>
        ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {regular.map(n => (
              <Link key={n.slug} href={`/news/${n.slug}`} className="bg-white rounded-xl border border-gray-100 overflow-hidden hover:shadow-md hover:-translate-y-0.5 transition group">
                <div className={`h-1 ${n.tag === 'ANNOUNCEMENT' ? 'bg-blue-500' : n.tag === 'EVENT' ? 'bg-purple-500' : n.tag === 'NOTICE' ? 'bg-yellow-500' : n.tag === 'PROJECT' ? 'bg-green-600' : 'bg-orange-500'}`} />
                <div className="p-5">
                  <div className="flex items-center gap-2 mb-3">
                    <span className={`text-xs font-bold px-2 py-0.5 rounded uppercase tracking-wide ${TAG_COLORS[n.tag]}`}>{n.tag}</span>
                    {n.department && <span className="text-xs text-gray-400 truncate">{n.department}</span>}
                  </div>
                  <h3 className="text-sm font-bold text-gray-900 mb-2 leading-snug group-hover:text-green-800 transition line-clamp-2">{n.title}</h3>
                  <p className="text-xs text-gray-500 leading-relaxed mb-4 line-clamp-2">{n.excerpt}</p>
                  <div className="flex items-center justify-between">
                    <span className="flex items-center gap-1.5 text-xs text-gray-400"><Calendar size={11} /> {formatDate(n.publishedAt)}</span>
                    <span className="flex items-center gap-1 text-xs font-semibold text-green-800 group-hover:gap-2 transition-all">Read more <ArrowRight size={12} /></span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}