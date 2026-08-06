import type { Metadata } from 'next';
import './globals.css';
import { AuthProvider } from '@/lib/auth';
'use client';

export const metadata: Metadata = {
  title: { default: 'Hurumu Woreda Administration', template: '%s | Hurumu Woreda' },
  description: 'Official government portal for Hurumu Woreda, Ilu Aba Bora Zone, Oromia Region, Ethiopia.',
  keywords: ['Hurumu', 'Woreda', 'Oromia', 'Ethiopia', 'government', 'services'],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body style={{ fontFamily: "'Inter', system-ui, -apple-system, sans-serif" }}>
        <AuthProvider>
          {children}
        </AuthProvider>
      </body>
    </html>
  );
}
import { SWRConfig } from 'swr';

const fetcher = (url: string) => fetch(url).then((res) => res.json());

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <SWRConfig value={{ fetcher }}>
      {children}
    </SWRConfig>
  );
}