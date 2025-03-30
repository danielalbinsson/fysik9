import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Fysik 9 - Testprov',
  description: 'En app för att studera fysikprov',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="sv">
      <body>{children}</body>
    </html>
  );
} 