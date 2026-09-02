import './globals.css';
import { asset } from '../lib/asset';

const siteUrl = 'https://kadgitub7.github.io/portfolio';

export const metadata = {
  title: 'Kadhir Ponnambalam - Portfolio',
  description:
    'McMaster University computer engineering student and research assistant. Projects in FPGA design, neuromorphic computing, and machine learning.',
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
        <meta name="citation_title" content="Electrotaxis Induced Neuromuscular Response of the Tardigrade Species Hypsibius exemplaris in a Microfluidic Environment" />
        <meta name="citation_author" content="Ponnambalam, Kadhir" />
        <meta name="citation_publication_date" content="2026/09/02" />
        <meta name="citation_journal_title" content="Zenodo" />
        <meta name="citation_doi" content="10.5281/zenodo.22257050" />
        <meta name="citation_pdf_url" content="https://kadgitub7.github.io/portfolio/papers/Ponnambalam_Electrotaxis_Tardigrade_2026.pdf" />
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
