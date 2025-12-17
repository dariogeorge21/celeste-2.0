import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Navigation from '@/components/Navigation';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Celeste 2.0 - Christmas Celebration | SJCET Palai',
  description: 'Join us for Celeste 2.0, a grand Christmas celebration at SJCET Palai on December 19th, 2024. Participate in carol competitions, crib making, and more!',
  keywords: ['Celeste 2.0', 'Christmas', 'SJCET', 'Palai', 'Jesus Youth', 'Carol Competition', 'Crib Making'],
  authors: [{ name: 'Jesus Youth SJCET' }],
  openGraph: {
    title: 'Celeste 2.0 - Christmas Celebration | SJCET Palai',
    description: 'Join us for Celeste 2.0, a grand Christmas celebration at SJCET Palai on December 19th, 2024. Participate in carol competitions, crib making, and more!',
    type: 'website',
    locale: 'en_US',
    siteName: 'Celeste 2.0',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Celeste 2.0 - Christmas Celebration | SJCET Palai',
    description: 'Join us for Celeste 2.0, a grand Christmas celebration at SJCET Palai on December 19th, 2024.',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body className={inter.className}>
        <Navigation />
        <main className="min-h-screen">{children}</main>
      </body>
    </html>
  );
}
