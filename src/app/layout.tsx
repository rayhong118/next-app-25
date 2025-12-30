import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
  weight: ['400', '500', '600', '700'],
});

export const metadata: Metadata = {
  title: 'Next App 25 - Modern Web Application',
  description:
    'A stunning, modern web application built with Next.js featuring premium design and smooth interactions.',
  keywords: [
    'Next.js',
    'React',
    'TypeScript',
    'Modern Web App',
    'Premium Design',
  ],
  authors: [{ name: 'Your Name' }],
  creator: 'Your Name',
  publisher: 'Your Company',
  metadataBase: new URL('https://yourwebsite.com'),
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://yourwebsite.com',
    title: 'Next App 25 - Modern Web Application',
    description:
      'A stunning, modern web application built with Next.js featuring premium design and smooth interactions.',
    siteName: 'Next App 25',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Next App 25 Preview',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Next App 25 - Modern Web Application',
    description:
      'A stunning, modern web application built with Next.js featuring premium design and smooth interactions.',
    images: ['/og-image.jpg'],
    creator: '@yourusername',
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
    icon: '/favicon.ico',
    shortcut: '/favicon-16x16.png',
    apple: '/apple-touch-icon.png',
  },
  manifest: '/site.webmanifest',
  viewport: {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 5,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.variable}>
      <head>
        {/* Preconnect to Google Fonts for performance */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
      </head>
      <body className={inter.className}>
        {/* Background gradient overlay */}
        <div
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            height: '100vh',
            background: 'var(--gradient-glow)',
            pointerEvents: 'none',
            zIndex: 0,
          }}
        />

        {/* Main content */}
        <div style={{ position: 'relative', zIndex: 1 }}>{children}</div>
      </body>
    </html>
  );
}
