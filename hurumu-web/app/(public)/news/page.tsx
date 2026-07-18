import NewsFilter from '@/components/news/NewsFilter';

const ALL_NEWS = [
  { slug: 'agricultural-season-2025', title: '2025/26 Agricultural Season Support Program Now Open', excerpt: 'The Woreda Agriculture Office has opened registration for subsidized fertilizer and improved seed distribution for all kebele farmers.', tag: 'ANNOUNCEMENT', isUrgent: true, publishedAt: '2026-07-10', department: 'Agriculture & Natural Resources', author: 'Hurumu Portal Admin' },
  { slug: 'q3-performance-review', title: 'Hurumu Woreda 3rd Quarter Performance Review Meeting', excerpt: 'All department heads and kebele administration leaders are invited to the quarterly review session at the Woreda Hall.', tag: 'EVENT', isUrgent: false, publishedAt: '2026-07-08', department: null, author: 'Hurumu Portal Admin' },
  { slug: 'civil-reg-extended-july-2026', title: 'Civil Registration Office Extended Hours – July 2026', excerpt: 'Extended service hours every weekday from 8 AM to 5 PM to address backlog in birth and marriage certificate requests.', tag: 'NOTICE', isUrgent: false, publishedAt: '2026-07-05', department: null, author: 'Hurumu Portal Admin' },
  { slug: 'road-rehab-metu-2026', title: 'Hurumu-Metu Road Rehabilitation Work Begins', excerpt: 'The Infrastructure Office has commenced road rehabilitation on the 42 km stretch connecting Hurumu to Metu town.', tag: 'PROJECT', isUrgent: false, publishedAt: '2026-06-28', department: 'Infrastructure & Construction', author: 'Hurumu Portal Admin' },
  { slug: 'water-supply-kebele-3', title: 'New Water Supply System Commissioned in Boneya Kebele', excerpt: 'A new clean water supply system serving over 1,200 households has been officially commissioned in Boneya Kebele.', tag: 'PROJECT', isUrgent: false, publishedAt: '2026-06-20', department: 'Infrastructure & Construction', author: 'Hurumu Portal Admin' },
  { slug: 'school-enrollment-2026', title: 'School Enrollment for 2026/27 Academic Year Now Open', excerpt: 'Parents and guardians are reminded to enroll children for the upcoming academic year at their nearest primary school.', tag: 'ANNOUNCEMENT', isUrgent: false, publishedAt: '2026-06-15', department: 'Education', author: 'Hurumu Portal Admin' },
];

export default function NewsPage() {
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
        <NewsFilter news={ALL_NEWS} />
      </div>
    </div>
  );
}