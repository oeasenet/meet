import '../styles/globals.css';
import '@livekit/components-styles';
import '@livekit/components-styles/prefabs';
import type { Metadata, Viewport } from 'next';

export const metadata: Metadata = {
  title: {
    default: 'OeMeet - Seamless Online Meetings',
    template: '%s | OeMeet',
  },
  description:
    'OeMeet is a free, feature-rich online meeting platform, seamlessly integrated with OEASE Organization Management System for efficient collaboration and communication.',
  twitter: {
    creator: '@oeasenet',
    site: '@oeasenet',
    card: 'summary_large_image',
  },
  openGraph: {
    url: 'https://oemeet.com',
    images: [
      {
        url: 'https://oemeet.com/images/LogoVWhiteBG.png',
        width: 2000,
        height: 1000,
        type: 'image/png',
      },
    ],
    siteName: 'OEASE Meet',
  },
  icons: {
    icon: {
      rel: 'icon',
      url: '/favicon.ico',
    },
    apple: [
      {
        rel: 'apple-touch-icon',
        url: '/images/icon.png',
        sizes: '180x180',
      },
      { rel: 'mask-icon', url: '/images/icon.svg', color: '#070707' },
    ],
  },
};

export const viewport: Viewport = {
  themeColor: '#070707',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
