import './globals.css';

export const metadata = {
  title: 'Kadhir Ponnambalam — Portfolio',
  description:
    'McMaster University engineering student and research assistant. Projects in embedded prototyping and backend/data pipeline systems.',
  openGraph: {
    title: 'Kadhir Ponnambalam — Portfolio',
    description:
      'McMaster University engineering student and research assistant. Projects in embedded prototyping and backend/data pipeline systems.',
    type: 'website',
  },
  twitter: {
    card: 'summary',
    title: 'Kadhir Ponnambalam — Portfolio',
    description:
      'McMaster University engineering student and research assistant. Projects in embedded prototyping and backend/data pipeline systems.',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, maximum-scale=1"
        />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link
          href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;0,500;0,600;1,400&family=Noto+Serif+KR:wght@400;500&family=Noto+Serif+Tamil:wght@400;500;600&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}

