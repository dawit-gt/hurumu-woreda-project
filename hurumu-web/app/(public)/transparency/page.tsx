import { FileText, Download, Calendar, Building2 } from 'lucide-react';

const DOCUMENTS = [
  {
    category: 'Budget Reports',
    items: [
      { title: 'Annual Budget 2025/26', description: 'Approved annual budget for all departments and programs', fiscalYear: '2025/26', type: 'BUDGET_REPORT', size: '2.4 MB', date: '2025-07-01', fileUrl: '#' },
      { title: 'Q3 Budget Utilization Report', description: 'Third quarter budget utilization and variance analysis', fiscalYear: '2025/26', type: 'BUDGET_REPORT', size: '1.1 MB', date: '2026-04-15', fileUrl: '#' },
      { title: 'Annual Budget 2024/25', description: 'Approved annual budget for fiscal year 2024/25', fiscalYear: '2024/25', type: 'BUDGET_REPORT', size: '2.1 MB', date: '2024-07-01', fileUrl: '#' },
    ],
  },
  {
    category: 'Procurement Plans',
    items: [
      { title: 'Annual Procurement Plan 2025/26', description: 'Planned procurement of goods, works, and services for the year', fiscalYear: '2025/26', type: 'PROCUREMENT_PLAN', size: '1.8 MB', date: '2025-08-10', fileUrl: '#' },
      { title: 'Infrastructure Tender — Road Rehabilitation', description: 'Tender document for Hurumu-Metu road rehabilitation project', fiscalYear: '2025/26', type: 'TENDER_DOCUMENT', size: '3.2 MB', date: '2026-05-20', fileUrl: '#' },
    ],
  },
  {
    category: 'Performance Reports',
    items: [
      { title: 'Q3 Performance Report 2025/26', description: 'Third quarter performance review across all woreda departments', fiscalYear: '2025/26', type: 'PERFORMANCE_REPORT', size: '2.8 MB', date: '2026-04-30', fileUrl: '#' },
      { title: 'Annual Performance Report 2024/25', description: 'Year-end performance evaluation and achievement summary', fiscalYear: '2024/25', type: 'PERFORMANCE_REPORT', size: '4.1 MB', date: '2025-09-15', fileUrl: '#' },
    ],
  },
  {
    category: 'Policies & Guidelines',
    items: [
      { title: 'Land Administration Policy', description: 'Official policy for land registration, use, and dispute resolution', fiscalYear: null, type: 'POLICY', size: '1.5 MB', date: '2024-01-10', fileUrl: '#' },
      { title: 'Public Procurement Guideline', description: 'Guidelines governing public procurement processes in the woreda', fiscalYear: null, type: 'GUIDELINE', size: '0.9 MB', date: '2023-06-01', fileUrl: '#' },
    ],
  },
];

const TYPE_COLORS: Record<string, string> = {
  BUDGET_REPORT:      'bg-blue-50 text-blue-700',
  PROCUREMENT_PLAN:   'bg-yellow-50 text-yellow-700',
  TENDER_DOCUMENT:    'bg-orange-50 text-orange-700',
  PERFORMANCE_REPORT: 'bg-green-50 text-green-700',
  POLICY:             'bg-purple-50 text-purple-700',
  GUIDELINE:          'bg-gray-100 text-gray-600',
};

const TYPE_LABELS: Record<string, string> = {
  BUDGET_REPORT:      'Budget',
  PROCUREMENT_PLAN:   'Procurement',
  TENDER_DOCUMENT:    'Tender',
  PERFORMANCE_REPORT: 'Performance',
  POLICY:             'Policy',
  GUIDELINE:          'Guideline',
};

function formatDate(d: string) {
  return new Date(d).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });
}

export default function TransparencyPage() {
  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Header */}
      <div className="bg-green-900 text-white py-12 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-xs font-bold text-yellow-400 uppercase tracking-widest mb-2">Open Government</div>
          <h1 className="text-3xl font-extrabold mb-2">Transparency Portal</h1>
          <p className="text-green-200 text-sm">Budget reports, procurement plans, and performance documents</p>
        </div>
      </div>

      {/* Commitment banner */}
      <div className="bg-yellow-50 border-b border-yellow-200 px-4 py-4">
        <div className="max-w-7xl mx-auto flex items-start gap-3">
          <Building2 size={18} className="text-yellow-700 flex-shrink-0 mt-0.5" />
          <p className="text-sm text-yellow-800">
            Hurumu Woreda Administration is committed to open and accountable governance. All budget, procurement, and performance documents are published here quarterly for public access.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-10 space-y-10">
        {DOCUMENTS.map(section => (
          <div key={section.category}>
            <h2 className="text-base font-bold text-gray-900 mb-4 flex items-center gap-2">
              <FileText size={16} className="text-green-700" />
              {section.category}
            </h2>
            <div className="grid md:grid-cols-2 gap-4">
              {section.items.map(doc => (
                <div key={doc.title} className="bg-white rounded-xl border border-gray-100 p-5 shadow-sm flex items-start gap-4 hover:shadow-md transition">
                  <div className="w-10 h-10 rounded-lg bg-green-50 border border-green-100 flex items-center justify-center flex-shrink-0">
                    <FileText size={18} className="text-green-700" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-start justify-between gap-2 mb-1">
                      <h3 className="text-sm font-bold text-gray-900 leading-snug">{doc.title}</h3>
                      <span className={`text-xs font-bold px-2 py-0.5 rounded uppercase tracking-wide flex-shrink-0 ${TYPE_COLORS[doc.type]}`}>
                        {TYPE_LABELS[doc.type]}
                      </span>
                    </div>
                    <p className="text-xs text-gray-500 mb-3 leading-relaxed">{doc.description}</p>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3 text-xs text-gray-400">
                        <span className="flex items-center gap-1">
                          <Calendar size={11} /> {formatDate(doc.date)}
                        </span>
                        {doc.fiscalYear && (
                          <span className="bg-gray-100 text-gray-600 px-2 py-0.5 rounded font-medium">
                            FY {doc.fiscalYear}
                          </span>
                        )}
                        <span>{doc.size}</span>
                      </div>
                      <a href={doc.fileUrl}
                        className="inline-flex items-center gap-1.5 text-xs font-bold text-green-800 hover:text-green-600 transition">
                        <Download size={13} /> Download
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}