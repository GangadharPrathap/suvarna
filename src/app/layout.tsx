import type { Metadata, Viewport } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Happy Birthday, Suvarna! ✨ A Special Gift For You',
  description: 'An interactive, personalized luxury digital birthday experience dedicated to my best friend, Suvarna.',
  keywords: ['Suvarna', 'Happy Birthday', 'Best Friend', 'Celebration', 'Memories'],
  authors: [{ name: 'Best Friend' }],
  openGraph: {
    title: 'Happy Birthday, Suvarna! 🌸',
    description: 'A little something special has been waiting for you.',
    type: 'website',
  },
};

export const viewport: Viewport = {
  themeColor: '#F8E8EC',
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body className="antialiased min-h-screen bg-paper-texture text-charcoal-800">
        {children}
      </body>
    </html>
  );
}
