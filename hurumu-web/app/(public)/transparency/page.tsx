'use client';

import { useState, useMemo } from 'react';
import { FileText, Download, Calendar, Building2, Search, Filter, X } from 'lucide-react';
import LocalizedText from '@/components/layout/LocalizedText';
import { useLanguage } from '@/components/layout/LanguageProvider';
import { selectByLanguage } from '@/lib/i18n';

interface DocumentItem {
  title: string;
  description: string;
  fiscalYear: string | null;
  type: string;
  size: string;
  date: string;
  fileUrl: string;
}

interface DocumentCategory {
  category: { en: string; om: string; am: string };
  items: DocumentItem[];
}

const DOCUMENTS: DocumentCategory[] = [
  {
    category: { en: 'Budget Reports', om: 'Gabaasa Baajataa', am: 'የበጀት ሪፖርቶች' },
    items: [
      { title: 'Annual Budget 2025/26', description: 'Approved annual budget for all departments and programs', fiscalYear: '2025/26', type: 'BUDGET_REPORT', size: '2.4 MB', date: '2025-07-01', fileUrl: '#' },
      { title: 'Q3 Budget Utilization Report', description: 'Third quarter budget utilization and variance analysis', fiscalYear: '2025/26', type: 'BUDGET_REPORT', size: '1.1 MB', date: '2026-04-15', fileUrl: '#' },
      { title: 'Annual Budget 2024/25', description: 'Approved annual budget for fiscal year 2024/25', fiscalYear: '2024/25', type: 'BUDGET_REPORT', size: '2.1 MB', date: '2024-07-01', fileUrl: '#' },
    ],
  },
  {
    category: { en: 'Procurement Plans', om: 'Karoora Bittaa', am: 'የግዥ እቅዶች' },
    items: [
      { title: 'Annual Procurement Plan 2025/26', description: 'Planned procurement of goods, works, and services for the year', fiscalYear: '2025/26', type: 'PROCUREMENT_PLAN', size: '1.8 MB', date: '2025-08-10', fileUrl: '#' },
      { title: 'Infrastructure Tender — Road Rehabilitation', description: 'Tender document for Hurumu-Metu road rehabilitation project', fiscalYear: '2025/26', type: 'TENDER_DOCUMENT', size: '3.2 MB', date: '2026-05-20', fileUrl: '#' },
    ],
  },
  {
    category: { en: 'Performance Reports', om: 'Gabaasa Raawwii', am: 'የአፈጻጸም ሪፖርቶች' },
    items: [
      { title: 'Q3 Performance Report 2025/26', description: 'Third quarter performance review across all woreda departments', fiscalYear: '2025/26', type: 'PERFORMANCE_REPORT', size: '2.8 MB', date: '2026-04-30', fileUrl: '#' },
      { title: 'Annual Performance Report 2024/25', description: 'Year-end performance evaluation and achievement summary', fiscalYear: '2024/25', type: 'PERFORMANCE_REPORT', size: '4.1 MB', date: '2025-09-15', fileUrl: '#' },
    ],
  },
  {
    category: { en: 'Policies & Guidelines', om: 'Imaammataa fi Qajeelfama', am: 'ፖሊሲዎች እና መመሪያዎች' },
    items: [
      { title: 'Land Administration Policy', description: 'Official policy for land registration, use, and dispute resolution', fiscalYear: null, type: 'POLICY', size: '1.5 MB', date: '2024-01-10', fileUrl: '#' },
      { title: 'Public Procurement Guideline', description: 'Guidelines governing public procurement processes in the woreda', fiscalYear: null, type: 'GUIDELINE', size: '0.9 MB', date: '2023-06-01', fileUrl: '#' },
    ],
  },
];

const TYPE_COLORS: Record<string, string> = {
  BUDGET_REPORT:      'bg-blue-50 text-blue-700 border-blue-100',
  PROCUREMENT_PLAN:   'bg-amber-50 text-amber-700 border-amber-100',
  TENDER_DOCUMENT:    'bg-orange-50 text-orange-700 border-orange-100',
  PERFORMANCE_REPORT: 'bg-emerald-50 text-emerald-700 border-emerald-100',
  POLICY:             'bg-purple-50 text-purple-700 border-purple-100',
  GUIDELINE:          'bg-gray-100 text-gray-700 border-gray-200',
};

const TYPE_LABELS: Record<string, { en: string; om: string; am: string }> = {
  BUDGET_REPORT:      { en: 'Budget', om: 'Baajata', am: 'በጀት' },
  PROCUREMENT_PLAN:   { en: 'Procurement', om: 'Bittaa', am: 'ግዥ' },
  TENDER_DOCUMENT:    { en: 'Tender', om: 'Dorgommii', am: 'ጨረታ' },
  PERFORMANCE_REPORT: { en: 'Performance', om: 'Raawwii', am: 'አፈጻጸም' },
  POLICY:             { en: 'Policy', om: 'Imaammata', am: 'ፖሊሲ' },
  GUIDELINE:          { en: 'Guideline', om: 'Qajeelfama', am: 'መመሪያ' },
};

function formatDate(d: string) {
  return new Date(d).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });
}

export default function TransparencyPage() {
  const { language } = useLanguage();
  const t = (en: string, om: string, am: string) => selectByLanguage(language, en, om, am);

  const [searchQuery, setSearchQuery] = useState('');
  const [selectedType, setSelectedType] = useState<string>('ALL');
  const [selectedYear, setSelectedYear] = useState<string>('ALL');

  // Extract unique fiscal years dynamically
  const fiscalYears = useMemo(() => {
    const years = new Set<string>();
    DOCUMENTS.forEach(cat => cat.items.forEach(doc => {
      if (doc.fiscalYear) years.add(doc.fiscalYear);
    }));
    return Array.from(years).sort().reverse();
  }, []);

  // Filter documents based on Search + Selected Filters
  const filteredCategories = useMemo(() => {
    return DOCUMENTS.map(section => {
      const matchingItems = section.items.filter(doc => {
        const matchesQuery = 
          doc.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
          doc.description.toLowerCase().includes(searchQuery.toLowerCase());
        const matchesType = selectedType === 'ALL' || doc.type === selectedType;
        const matchesYear = selectedYear === 'ALL' || doc.fiscalYear === selectedYear;

        return matchesQuery && matchesType && matchesYear;
      });

      return {
        ...section,
        items: matchingItems,
      };
    }).filter(section => section.items.length > 0);
  }, [searchQuery, selectedType, selectedYear]);

  const totalFilteredDocs = useMemo(() => {
    return filteredCategories.reduce((acc, cat) => acc + cat.items.length, 0);
  }, [filteredCategories]);

  const clearFilters = () => {
    setSearchQuery('');
    setSelectedType('ALL');
    setSelectedYear('ALL');
  };

  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Header */}
      <div className="bg-green-900 text-white py-12 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-xs font-bold text-yellow-400 uppercase tracking-widest mb-2">
            <LocalizedText en="Open Government" om="Bulchiinsa Ifaa" am="ግልጽ መንግስት" />
          </div>
          <h1 className="text-3xl font-extrabold mb-2">
            <LocalizedText en="Transparency Portal" om="Marsariitii Ifummaa" am="የግልጽነት መግቢያ" />
          </h1>
          <p className="text-green-200 text-sm max-w-2xl">
            <LocalizedText
              en="Budget reports, procurement plans, and performance documents for public scrutiny and administrative accountability."
              om="Gabaasa baajataa, karoora bittaa fi galmeewwan raawwii tajaajila hawaasaaf."
              am="የበጀት ሪፖርቶች፣ የግዥ እቅዶች እና የአፈጻጸም ሰነዶች ለህዝብ ቁጥጥር እና ለአስተዳደር ተጠያቂነት።"
            />
          </p>
        </div>
      </div>

      {/* Commitment Banner */}
      <div className="bg-yellow-50 border-b border-yellow-200 px-4 py-4">
        <div className="max-w-7xl mx-auto flex items-start gap-3">
          <Building2 size={18} className="text-yellow-700 flex-shrink-0 mt-0.5" />
          <p className="text-sm text-yellow-900 leading-relaxed">
            <LocalizedText
              en="Hurumu Woreda Administration is committed to open and accountable governance. All budget, procurement, and performance documents are published here quarterly for public access."
              om="Bulchiinsi Hurumu Woreedaa bulchiinsa ifaa fi itti gaafatamummaa qabuuf hojjeta. Galmeewwan baajataa, bittaa fi raawwii hundi ji'a ji'aan hawaasaaf asitti maxxanfamu."
              am="የሁሩሙ ወረዳ አስተዳደር ግልጽ እና ተጠያቂነት ላለው አስተዳደር ቁርጠኛ ነው። ሁሉም የበጀት፣ የግዥ እና የአፈጻጸም ሰነዶች በየሩብ ዓመቱ ለህዝብ ጥቅም እዚህ ይታተማሉ።"
            />
          </p>
        </div>
      </div>

      {/* Search & Filter Controls */}
      <div className="max-w-7xl mx-auto px-4 pt-8">
        <div className="bg-white rounded-xl border border-gray-200 p-4 shadow-sm space-y-4">
          <div className="flex flex-col md:flex-row gap-3">
            {/* Search Input */}
            <div className="relative flex-1">
              <Search size={18} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder={t('Search documents by title or keyword...', 'Dokumentoota barbaadi...', 'ሰነዶችን በርዕስ ወይም በቁልፍ ቃል ፈልግ...')}
                className="w-full pl-10 pr-4 py-2 text-sm border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-800 focus:border-transparent"
              />
              {searchQuery && (
                <button 
                  onClick={() => setSearchQuery('')}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
                >
                  <X size={16} />
                </button>
              )}
            </div>

            {/* Fiscal Year Filter */}
            <div className="w-full md:w-48">
              <select
                value={selectedYear}
                onChange={(e) => setSelectedYear(e.target.value)}
                className="w-full py-2 px-3 text-sm border border-gray-300 rounded-lg bg-white text-gray-700 focus:outline-none focus:ring-2 focus:ring-green-800"
              >
                <option value="ALL">{t('All Fiscal Years', 'Waggaa Baajataa Hunda', 'ሁሉም የበጀት ዓመታት')}</option>
                {fiscalYears.map(year => (
                  <option key={year} value={year}>{t('FY', 'WB', 'በዓ')} {year}</option>
                ))}
              </select>
            </div>
          </div>

          {/* Document Type Pills */}
          <div className="flex flex-wrap items-center gap-2 pt-2 border-t border-gray-100">
            <span className="text-xs font-semibold text-gray-500 mr-1 flex items-center gap-1">
              <Filter size={12} /> {t('Filter:', 'Cingii:', 'ማጣሪያ:')}
            </span>
            <button
              onClick={() => setSelectedType('ALL')}
              className={`text-xs px-3 py-1.5 rounded-full font-semibold transition ${
                selectedType === 'ALL'
                  ? 'bg-green-800 text-white'
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
              }`}
            >
              {t('All Types', 'Hunda', 'ሁሉም')}
            </button>
            {Object.keys(TYPE_LABELS).map((typeKey) => (
              <button
                key={typeKey}
                onClick={() => setSelectedType(typeKey)}
                className={`text-xs px-3 py-1.5 rounded-full font-semibold transition border ${
                  selectedType === typeKey
                    ? 'bg-green-800 text-white border-green-800'
                    : 'bg-white text-gray-700 border-gray-200 hover:bg-gray-50'
                }`}
              >
                {t(TYPE_LABELS[typeKey].en, TYPE_LABELS[typeKey].om, TYPE_LABELS[typeKey].am)}
              </button>
            ))}

            {(searchQuery || selectedType !== 'ALL' || selectedYear !== 'ALL') && (
              <button
                onClick={clearFilters}
                className="text-xs font-bold text-red-600 hover:text-red-800 ml-auto flex items-center gap-1"
              >
                <X size={12} /> {t('Reset Filters', 'Haqi', 'አጽዳ')}
              </button>
            )}
          </div>
        </div>

        {/* Results Metadata Bar */}
        <div className="flex items-center justify-between text-xs text-gray-500 mt-4 px-1">
          <span>
            {t(`Showing ${totalFilteredDocs} document(s)`, `Dokumentii ${totalFilteredDocs} agarsiisaa jira`, `የተገኙ ሰነዶች: ${totalFilteredDocs}`)}
          </span>
        </div>
      </div>

      {/* Main Document Listing */}
      <div className="max-w-7xl mx-auto px-4 py-6 space-y-10">
        {filteredCategories.length > 0 ? (
          filteredCategories.map(section => (
            <div key={section.category.en}>
              <h2 className="text-base font-bold text-gray-900 mb-4 flex items-center gap-2">
                <FileText size={16} className="text-green-700" />
                <LocalizedText en={section.category.en} om={section.category.om} am={section.category.am} />
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
                        <span className={`text-xs font-bold px-2 py-0.5 rounded border uppercase tracking-wide flex-shrink-0 ${TYPE_COLORS[doc.type]}`}>
                          {t(TYPE_LABELS[doc.type].en, TYPE_LABELS[doc.type].om, TYPE_LABELS[doc.type].am)}
                        </span>
                      </div>
                      <p className="text-xs text-gray-500 mb-3 leading-relaxed">{doc.description}</p>
                      <div className="flex items-center justify-between">
                        <div className="flex flex-wrap items-center gap-3 text-xs text-gray-400">
                          <span className="flex items-center gap-1">
                            <Calendar size={11} /> {formatDate(doc.date)}
                          </span>
                          {doc.fiscalYear && (
                            <span className="bg-gray-100 text-gray-600 px-2 py-0.5 rounded font-medium">
                              {t('FY', 'WB', 'በዓ')} {doc.fiscalYear}
                            </span>
                          )}
                          <span>{doc.size}</span>
                        </div>
                        <a 
                          href={doc.fileUrl}
                          className="inline-flex items-center gap-1.5 text-xs font-bold text-green-800 hover:text-green-600 transition ml-2"
                        >
                          <Download size={13} />
                          <LocalizedText en="Download" om="Buufadhu" am="አውርድ" />
                        </a>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))
        ) : (
          /* Empty State */
          <div className="bg-white rounded-xl border border-gray-200 p-12 text-center my-8">
            <FileText size={40} className="mx-auto text-gray-300 mb-3" />
            <h3 className="text-base font-bold text-gray-800 mb-1">
              {t('No documents found', 'Dokumentiin hin argamne', 'ምንም ሰነዶች አልተገኙም')}
            </h3>
            <p className="text-xs text-gray-500 mb-4">
              {t('Try adjusting your search terms or filter selections.', 'Barbaacha keessan fooyyessaa try godhaa.', 'እባክዎ የምርጫ ማጣሪያዎችን ወይም የፍለጋ ቃላትን ይቀይሩ።')}
            </p>
            <button
              onClick={clearFilters}
              className="text-xs font-bold px-4 py-2 bg-green-800 text-white rounded-lg hover:bg-green-700 transition"
            >
              {t('Clear all filters', 'Cingii hunda haqi', 'ሁሉንም ማጣሪያዎች አጽዳ')}
            </button>
          </div>
        )}
      </div>
    </div>
  );
}