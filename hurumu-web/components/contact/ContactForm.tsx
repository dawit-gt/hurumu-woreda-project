'use client';
import { useState } from 'react';
import { Send, CheckCircle } from 'lucide-react';
import { useLanguage } from '@/components/layout/LanguageProvider';
import { selectByLanguage } from '@/lib/i18n';

const DEPARTMENTS = [
  { en: 'General Inquiry', om: 'Gaaffii Waliigalaa', am: 'አጠቃላይ ጥያቄ' },
  { en: 'Agriculture & Natural Resources', om: 'Qonnaa fi Qabeenya Uumamaa', am: 'ግብርና እና ተፈጥሮ ሀብት' },
  { en: 'Health & Social Affairs', om: 'Fayyaa fi Dhimma Hawaasaa', am: 'ጤና እና ማህበራዊ ጉዳዮች' },
  { en: 'Education', om: 'Barnoota', am: 'ትምህርት' },
  { en: 'Finance & Economy', om: 'Maallaqaa fi Dinagdee', am: 'ፋይናንስ እና ኢኮኖሚ' },
  { en: 'Infrastructure & Construction', om: 'Insfiraastirakcharii fi Ijaarsa', am: 'ኢንፍራስትራክቸር እና ሕንጻ' },
  { en: 'Land Administration', om: 'Bulchiinsa Lafaa', am: 'የመሬት አስተዳደር' },
  { en: 'Civil Registration', om: 'Galmee Ummataa', am: 'የዜጎች ምዝገባ' },
];

export default function ContactForm() {
  const { language } = useLanguage();
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({ name: '', email: '', phone: '', department: '', subject: '', message: '' });

  const t = (en: string, om: string, am: string) => selectByLanguage(language, en, om, am);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    await new Promise(r => setTimeout(r, 1000));
    setLoading(false);
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="flex flex-col items-center justify-center py-16 text-center">
        <CheckCircle size={48} className="text-green-600 mb-4" />
        <h3 className="text-lg font-bold text-gray-900 mb-2">
          {t('Message Sent', 'Ergaan Ergameera', 'መልእክት ተልኳል')}
        </h3>
        <p className="text-sm text-gray-500 max-w-sm">
          {t(
            'Thank you for contacting us. We will get back to you within 2 working days.',
            'Nu quunnamuu keessaniif galatoomaa. Guyyaa hojii 2 keessatti deebii isiniif kennina.',
            'ስላገኙን እናመሰግናለን። በ2 የስራ ቀናት ውስጥ ምላሽ እንሰጥዎታለን።',
          )}
        </p>
        <button onClick={() => { setSubmitted(false); setForm({ name: '', email: '', phone: '', department: '', subject: '', message: '' }); }}
          className="mt-6 text-sm font-semibold text-green-800 hover:underline">
          {t('Send another message', 'Ergaa biraa ergi', 'ሌላ መልእክት ላክ')}
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="grid sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-xs font-semibold text-gray-700 mb-1">
            {t('Full Name *', 'Maqaa Guutuu *', 'ሙሉ ስም *')}
          </label>
          <input name="name" value={form.name} onChange={handleChange} required placeholder="Abebe Bikila"
            className="w-full px-3 py-2.5 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-green-600" />
        </div>
        <div>
          <label className="block text-xs font-semibold text-gray-700 mb-1">
            {t('Phone Number', 'Lakkoofsa Bilbilaa', 'ስልክ ቁጥር')}
          </label>
          <input name="phone" value={form.phone} onChange={handleChange} placeholder="+251 91 234 5678"
            className="w-full px-3 py-2.5 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-green-600" />
        </div>
      </div>

      <div>
        <label className="block text-xs font-semibold text-gray-700 mb-1">
          {t('Email Address', 'Teessoo Imeelii', 'ኢሜይል አድራሻ')}
        </label>
        <input name="email" type="email" value={form.email} onChange={handleChange} placeholder="abebe@example.com"
          className="w-full px-3 py-2.5 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-green-600" />
      </div>

      <div>
        <label className="block text-xs font-semibold text-gray-700 mb-1">
          {t('Department *', 'Waajjira *', 'ክፍል *')}
        </label>
        <select name="department" value={form.department} onChange={handleChange} required
          className="w-full px-3 py-2.5 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-green-600 bg-white">
          <option value="">{t('Select a department', 'Waajjira filadhu', 'ክፍል ይምረጡ')}</option>
          {DEPARTMENTS.map(d => (
            <option key={d.en} value={d.en}>{t(d.en, d.om, d.am)}</option>
          ))}
        </select>
      </div>

      <div>
        <label className="block text-xs font-semibold text-gray-700 mb-1">
          {t('Subject *', 'Mata Duree *', 'ርዕስ *')}
        </label>
        <input name="subject" value={form.subject} onChange={handleChange} required
          placeholder={t('Brief subject of your message', 'Mata duree gabaabaa ergaa keessanii', 'የመልእክትዎ አጭር ርዕስ')}
          className="w-full px-3 py-2.5 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-green-600" />
      </div>

      <div>
        <label className="block text-xs font-semibold text-gray-700 mb-1">
          {t('Message *', 'Ergaa *', 'መልእክት *')}
        </label>
        <textarea name="message" value={form.message} onChange={handleChange} required rows={5}
          placeholder={t('Write your message here…', 'Ergaa keessan asitti barreessaa…', 'መልእክትዎን እዚህ ይጻፉ…')}
          className="w-full px-3 py-2.5 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-green-600 resize-none" />
      </div>

      <button type="submit" disabled={loading}
        className="w-full flex items-center justify-center gap-2 bg-green-800 text-white py-3 rounded-lg font-semibold text-sm hover:bg-green-700 transition disabled:opacity-60">
        {loading
          ? t('Sending…', 'Erguu…', 'በመላክ ላይ…')
          : <><Send size={15} /> {t('Send Message', 'Ergaa Ergi', 'መልእክት ላክ')}</>}
      </button>
    </form>
  );
}