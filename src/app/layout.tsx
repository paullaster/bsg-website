import type { Metadata, Viewport } from 'next';
import { DM_Mono, DM_Sans, Manrope } from 'next/font/google';

import { KEYWORDS, ORG, SITE_URL } from '@/lib/seo';

import './globals.css';

const dmSans = DM_Sans({ subsets: ['latin'], variable: '--font-dm-sans', display: 'swap' });
const manrope = Manrope({ subsets: ['latin'], variable: '--font-manrope', display: 'swap' });
const dmMono = DM_Mono({
  subsets: ['latin'],
  weight: ['400', '500'],
  variable: '--font-dm-mono',
  display: 'swap',
});

const title = 'Brainspore Group (BSG) | Software & IT Solutions, Kenya & East Africa';
const description =
  'Brainspore Group LLC (BSG) is a Nairobi software and IT solutions company serving Kenya, East Africa and Africa. Maker of QSell business management software. Founded by Paullaster Okoth.';

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: { default: title, template: '%s | Brainspore Group LLC' },
  description,
  applicationName: ORG.name,
  keywords: KEYWORDS,
  authors: [{ name: 'Paullaster Okoth', url: `${SITE_URL}/#about` }],
  creator: 'Paullaster Okoth',
  publisher: ORG.name,
  category: 'technology',
  alternates: { canonical: '/' },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
      'max-video-preview': -1,
    },
  },
  openGraph: {
    type: 'website',
    url: SITE_URL,
    siteName: ORG.name,
    locale: 'en_KE',
    title,
    description,
  },
  twitter: { card: 'summary_large_image', title, description },
  icons: {
    icon: [{ url: '/images/mark.png', type: 'image/png', sizes: '256x256' }],
    apple: [{ url: '/images/mark.png', sizes: '256x256' }],
  },
  other: {
    'geo.region': 'KE-110',
    'geo.placename': 'Nairobi',
    'geo.position': '-1.2921;36.8219',
    ICBM: '-1.2921, 36.8219',
  },
  verification: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION
    ? { google: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION }
    : undefined,
};

export const viewport: Viewport = {
  themeColor: '#5f1116',
  width: 'device-width',
  initialScale: 1,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en-KE" className={`${dmSans.variable} ${manrope.variable} ${dmMono.variable}`}>
      <body>{children}</body>
    </html>
  );
}
