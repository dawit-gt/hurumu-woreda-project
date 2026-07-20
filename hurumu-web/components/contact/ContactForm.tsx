'use client';
import { useState } from 'react';
import { Send, CheckCircle } from 'lucide-react';

const DEPARTMENTS = [
  'General Inquiry',
  'Agriculture & Natural Resources',
  'Health & Social Affairs',
  'Education',
  'Finance & Economy',
  'Infrastructure & Construction',
  'Land Administration',
  'Civil Registration',
];

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({ name: '', email: '', phone: '', department: '', subject: '', message: '' });

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
        <h3 className="text-lg font-bold text-gray-900 mb-2">Message Sent</h3>
        <p className="text-sm text-gray-500 max-w-sm">Thank you for contacting us. We will get back to you within 2 working days.</p>
        <button onClick={() => { setSubmitted(false); setForm({ name: '', email: '', phone: '', department: '', subject: '', message: '' }); }}
          className="mt-6 text-sm font-semibold text-green-800 hover:underline">
          Send another message
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="grid sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-xs font-semibold text-gray-700 mb-1">Full Name *</label>
          <input name="name" value={form.name} onChange={handleChange} required placeholder="Abebe Bikila"
            className="w-full px-3 py-2.5 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-green-600" />
        </div>
        <div>
          <label className="block text-xs font-semibold text-gray-700 mb-1">Phone Number</label>
          <input name="phone" value={form.phone} onChange={handleChange} placeholder="+251 91 234 5678"
            className="w-full px-3 py-2.5 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-green-600" />
        </div>
      </div>

      <div>
        <label className="block text-xs font-semibold text-gray-700 mb-1">Email Address</label>
        <input name="email" type="email" value={form.email} onChange={handleChange} placeholder="abebe@example.com"
          className="w-full px-3 py-2.5 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-green-600" />
      </div>

      <div>
        <label className="block text-xs font-semibold text-gray-700 mb-1">Department *</label>
        <select name="department" value={form.department} onChange={handleChange} required
          className="w-full px-3 py-2.5 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-green-600 bg-white">
          <option value="">Select a department</option>
          {DEPARTMENTS.map(d => <option key={d} value={d}>{d}</option>)}
        </select>
      </div>

      <div>
        <label className="block text-xs font-semibold text-gray-700 mb-1">Subject *</label>
        <input name="subject" value={form.subject} onChange={handleChange} required placeholder="Brief subject of your message"
          className="w-full px-3 py-2.5 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-green-600" />
      </div>

      <div>
        <label className="block text-xs font-semibold text-gray-700 mb-1">Message *</label>
        <textarea name="message" value={form.message} onChange={handleChange} required rows={5}
          placeholder="Write your message here…"
          className="w-full px-3 py-2.5 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-green-600 resize-none" />
      </div>

      <button type="submit" disabled={loading}
        className="w-full flex items-center justify-center gap-2 bg-green-800 text-white py-3 rounded-lg font-semibold text-sm hover:bg-green-700 transition disabled:opacity-60">
        {loading ? 'Sending…' : <><Send size={15} /> Send Message</>}
      </button>
    </form>
  );
}