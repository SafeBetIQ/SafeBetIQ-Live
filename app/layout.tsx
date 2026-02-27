import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { AuthProvider } from '@/contexts/AuthContext';
import { CasinoDataProvider } from '@/contexts/CasinoDataContext';
import { ModuleProvider } from '@/contexts/ModuleContext';
import { Toaster } from '@/components/ui/sonner';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: {
    default: 'SafeBet IQ - AI-Powered Responsible Gaming Platform',
    template: '%s | SafeBet IQ'
  },
  description: 'Advanced AI-powered responsible gaming intervention platform for casinos and regulators. Real-time risk detection, behavioral analytics, and regulatory compliance.',
  keywords: ['responsible gaming', 'AI', 'casino compliance', 'player protection', 'risk detection', 'behavioral analytics', 'South Africa gaming'],
  authors: [{ name: 'SafeBet IQ' }],
  creator: 'SafeBet IQ',
  publisher: 'SafeBet IQ',
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'https://safebetiq.com'),
  openGraph: {
    type: 'website',
    locale: 'en_ZA',
    url: '/',
    title: 'SafeBet IQ - AI-Powered Responsible Gaming Platform',
    description: 'Advanced AI-powered responsible gaming intervention platform for casinos and regulators.',
    siteName: 'SafeBet IQ',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'SafeBet IQ - AI-Powered Responsible Gaming Platform',
    description: 'Advanced AI-powered responsible gaming intervention platform for casinos and regulators.',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: [
      { url: '/favicon.svg', type: 'image/svg+xml' },
      { url: '/favicon.ico', sizes: 'any' }
    ],
    apple: '/favicon.svg',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" style={{ backgroundColor: '#000000' }}>
      <body className={`${inter.className} bg-black`}>
        <AuthProvider>
          <ModuleProvider>
            <CasinoDataProvider>
              {children}
              <Toaster />
            </CasinoDataProvider>
          </ModuleProvider>
        </AuthProvider>
      </body>
    </html>
  );
}
