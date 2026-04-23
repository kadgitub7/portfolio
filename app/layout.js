import './globals.css';
import { Analytics } from '@vercel/analytics/react';

const siteUrl = 'https://kadhir-ponnambalam.vercel.app';
const ogImage = '/imageAssets/Kadhir_Ponnambalam_Sketch.png';

export const metadata = {
  title: 'Kadhir Ponnambalam — Portfolio',
  description:
    'McMaster University engineering student and research assistant. Projects in embedded prototyping and backend/data pipeline systems.',
  metadataBase: new URL(siteUrl),
  alternates: {
    canonical: '/',
  },
  keywords: [
    'Kadhir Ponnambalam',
    'Engineering portfolio',
    'Embedded systems',
    'Backend development',
    'Research assistant',
    'McMaster University',
  ],
  authors: [{ name: 'Kadhir Ponnambalam' }],
  icons: {
    icon: '/favicon.svg',
    shortcut: '/favicon.svg',
    apple: '/favicon.svg',
  },
  openGraph: {
    title: 'Kadhir Ponnambalam — Portfolio',
    description:
      'McMaster University engineering student and research assistant. Projects in embedded prototyping and backend/data pipeline systems.',
    type: 'website',
    url: siteUrl,
    images: [
      {
        url: ogImage,
        width: 1200,
        height: 630,
        alt: 'Kadhir Ponnambalam portfolio preview',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Kadhir Ponnambalam — Portfolio',
    description:
      'McMaster University engineering student and research assistant. Projects in embedded prototyping and backend/data pipeline systems.',
    images: [ogImage],
  },
};

export default function RootLayout({ children }) {
  const personSchema = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: 'Kadhir Ponnambalam',
    url: siteUrl,
    sameAs: [
      'https://github.com/kadgitub7',
      'https://ca.linkedin.com/in/kadhir-ponnambalam-3211ab261',
    ],
    alumniOf: 'McMaster University',
    jobTitle: 'Engineering Student and Research Assistant',
  };

  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1"
        />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link
          href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;0,500;0,600;1,400&family=Noto+Serif+KR:wght@400;500&family=Noto+Serif+Tamil:wght@400;500;600&display=swap"
          rel="stylesheet"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
        />
      </head>
      <body>
        {children}
        <Analytics />
      </body>
    </html>
  );
}

