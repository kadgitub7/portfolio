import './globals.css';
import { asset } from '../lib/asset';

const siteUrl = 'https://kadgitub7.github.io/portfolio';

export const metadata = {
  title: 'Kadhir Ponnambalam — Portfolio',
  description:
    'McMaster University computer engineering student and research assistant. Projects in embedded systems, FPGA design, and backend data pipelines.',
  metadataBase: new URL(siteUrl),
  icons: {
    icon: asset('/favicon.svg'),
    shortcut: asset('/favicon.svg'),
    apple: asset('/favicon.svg'),
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link
          href="https://fonts.googleapis.com/css2?family=DM+Sans:ital,opsz,wght@0,9..40,300;0,9..40,400;0,9..40,500;0,9..40,600;1,9..40,400&family=Noto+Serif+Tamil:wght@400;500;600&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
