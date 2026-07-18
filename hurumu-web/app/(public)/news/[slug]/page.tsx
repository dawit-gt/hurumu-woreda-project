import Link from 'next/link';
import { notFound } from 'next/navigation';
import { ArrowLeft, Calendar, User, Building2, Eye, AlertCircle } from 'lucide-react';

const TAG_COLORS: Record<string, string> = {
  ANNOUNCEMENT: 'bg-blue-50 text-blue-700 border-blue-200',
  EVENT:        'bg-purple-50 text-purple-700 border-purple-200',
  NOTICE:       'bg-yellow-50 text-yellow-700 border-yellow-200',
  PROJECT:      'bg-green-50 text-green-700 border-green-200',
  TENDER:       'bg-orange-50 text-orange-700 border-orange-200',
};

const NEWS_DATA: Record<string, any> = {
  'agricultural-season-2025': {
    title: '2025/26 Agricultural Season Support Program Now Open',
    excerpt: 'The Woreda Agriculture Office has opened registration for subsidized fertilizer and improved seed distribution.',
    content: `<p>The Hurumu Woreda Agriculture and Natural Resources Office has officially opened registration for the 2025/26 agricultural season support program.</p><h2>What is included?</h2><ul><li>Subsidized DAP and Urea fertilizer</li><li>Improved seed varieties (maize, teff, sorghum)</li><li>Agricultural extension worker support</li><li>Training on modern farming techniques</li></ul><h2>How to register</h2><p>Visit your local kebele office with your Farmer ID card and land use certificate copy.</p><p>Registration closes <strong>August 15, 2026</strong>. Contact: <strong>+251 577 001 001</strong></p>`,
    tag: 'ANNOUNCEMENT', isUrgent: true, publishedAt: '2026-07-10', department: 'Agriculture & Natural Resources', author: 'Hurumu Portal Admin', viewCount: 342,
  },
  'q3-performance-review': {
    title: 'Hurumu Woreda 3rd Quarter Performance Review Meeting',
    excerpt: 'All department heads and kebele administration leaders are invited to the quarterly review session.',
    content: `<p>All department heads and kebele administration leaders are invited to the 3rd Quarter Performance Review Meeting.</p><h2>Meeting Details</h2><ul><li><strong>Date:</strong> July 20, 2026</li><li><strong>Time:</strong> 9:00 AM – 4:00 PM</li><li><strong>Venue:</strong> Hurumu Woreda Hall</li></ul><h2>Agenda</h2><ul><li>Q3 performance targets vs achievements</li><li>Budget utilization report</li><li>Q4 planning and targets</li></ul><p>Submit department reports to the Planning Office by <strong>July 18, 2026</strong>.</p>`,
    tag: 'EVENT', isUrgent: false, publishedAt: '2026-07-08', department: null, author: 'Hurumu Portal Admin', viewCount: 187,
  },
  'civil-reg-extended-july-2026': {
    title: 'Civil Registration Office Extended Hours – July 2026',
    excerpt: 'Extended service hours every weekday from 8 AM to 5 PM throughout July 2026.',
    content: `<p>To address the backlog in registration requests, the Civil Registration Office will operate extended hours throughout July 2026.</p><h2>Extended Hours</h2><ul><li><strong>Monday – Friday:</strong> 8:00 AM – 5:00 PM</li><li><strong>Saturday:</strong> 9:00 AM – 1:00 PM (new)</li></ul><h2>Services available</h2><ul><li>Birth certificate registration</li><li>Marriage certificate registration</li><li>Death registration</li><li>ID card applications</li></ul>`,
    tag: 'NOTICE', isUrgent: false, publishedAt: '2026-07-05', department: null, author: 'Hurumu Portal Admin', viewCount: 256,
  },
  'road-rehab-metu-2026': {
    title: 'Hurumu-Metu Road Rehabilitation Work Begins',
    excerpt: 'Road rehabilitation on the 42 km Hurumu–Metu stretch has officially commenced.',
    content: `<p>Rehabilitation work on the 42 km road connecting Hurumu to Metu town has officially commenced.</p><h2>Project Details</h2><ul><li><strong>Route:</strong> Hurumu Town – Metu Town (42 km)</li><li><strong>Expected completion:</strong> December 2026</li></ul><h2>Scope of work</h2><ul><li>Full gravel road rehabilitation and grading</li><li>Drainage culverts at 12 crossing points</li><li>Bridge repair at the Didesa River crossing</li><li>Roadside tree planting (1,200 seedlings)</li></ul>`,
    tag: 'PROJECT', isUrgent: false, publishedAt: '2026-06-28', department: 'Infrastructure & Construction', author: 'Hurumu Portal Admin', viewCount: 423,
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
            <ArrowLeft size={15} /> Back to News
          </Link>
          {news.isUrgent && (
            <div className="inline-flex items-center gap-2 bg-red-500/20 border border-red-400/40 text-red-300 text-xs font-bold px-3 py-1 rounded-full mb-4">
              <AlertCircle size={12} /> Urgent Notice
            </div>
          )}
          <div className="flex items-center gap-2 mb-4">
            <span className={`text-xs font-bold px-2.5 py-1 rounded border uppercase tracking-wide ${TAG_COLORS[news.tag]}`}>{news.tag}</span>
          </div>
          <h1 className="text-2xl lg:text-3xl font-extrabold leading-tight mb-4">{news.title}</h1>
          <div className="flex flex-wrap gap-4 text-xs text-green-300">
            <span className="flex items-center gap-1.5"><Calendar size={12} /> {formatDate(news.publishedAt)}</span>
            <span className="flex items-center gap-1.5"><User size={12} /> {news.author}</span>
            {news.department && <span className="flex items-center gap-1.5"><Building2 size={12} /> {news.department}</span>}
            <span className="flex items-center gap-1.5"><Eye size={12} /> {news.viewCount} views</span>
          </div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 py-10">
        <div className="bg-white rounded-2xl border border-gray-100 p-8 shadow-sm">
          <p className="text-base text-gray-600 leading-relaxed mb-6 pb-6 border-b border-gray-100 font-medium">{news.excerpt}</p>
          <div className="prose prose-sm max-w-none text-gray-700 leading-relaxed prose-h2:text-lg prose-h2:font-bold prose-h2:text-green-900 prose-h2:mt-6 prose-h2:mb-3 prose-p:mb-4 prose-ul:mb-4 prose-li:mb-1 prose-strong:text-gray-900"
            dangerouslySetInnerHTML={{ __html: news.content }} />
        </div>
        <div className="mt-8">
          <Link href="/news" className="inline-flex items-center gap-2 text-sm font-semibold text-green-800 hover:text-green-600 transition">
            <ArrowLeft size={15} /> Back to all news
          </Link>
        </div>
      </div>
    </div>
  );
}