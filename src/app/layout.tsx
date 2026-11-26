import type { Metadata, Viewport } from 'next';
import { SITE_METADATA } from '@/data/site';
import '@/styles/main.css';
import '@/styles/responsive.css';

export const metadata: Metadata = {
  metadataBase: new URL('https://looka.com'),
  title: SITE_METADATA.title,
  description: SITE_METADATA.description,
  alternates: {
    canonical: SITE_METADATA.canonical,
  },
  robots: {
    index: true,
    follow: true,
    'max-snippet': -1,
    'max-image-preview': 'large',
    'max-video-preview': -1,
  },
  openGraph: {
    locale: 'en_US',
    type: 'article',
    title: SITE_METADATA.title,
    description: SITE_METADATA.description,
    url: SITE_METADATA.canonical,
    siteName: 'Looka',
    images: [
      {
        url: SITE_METADATA.ogImage,
        width: 1024,
        height: 595,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    creator: '@lookadesign',
    site: '@lookadesign',
  },
  icons: {
    icon: [
      { url: '/images/cropped-favicon-32x32.png', sizes: '32x32' },
      { url: '/images/cropped-favicon-192x192.png', sizes: '192x192' },
      { url: '/images/favicon.ico' },
    ],
    apple: [
      { url: '/images/cropped-favicon-180x180.png' },
      { url: '/images/apple-touch-icon.png', sizes: '180x180' },
    ],
  },
  manifest: '/site.webmanifest',
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: SITE_METADATA.themeColor,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en-US">
      <head>
        <link
          rel="mask-icon"
          href="/images/safari-pinned-tab.svg"
          color="#5340ff"
        />
        <link
          rel="preload"
          href="/fonts/lineto-circular-bold.woff2"
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
        />
        <link
          rel="preload"
          href="/fonts/lineto-circular-book.woff2"
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
        />
      </head>
      <body className="post-template-default single single-post postid-33416 single-format-standard post-disney-logo">
        {children}
      </body>
    </html>
  );
}
