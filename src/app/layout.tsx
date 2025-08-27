import type { Metadata } from "next";
import { Roboto } from 'next/font/google';
import "./globals.css";
import { Navbar, Footer } from '@/components';

const roboto = Roboto({
  weight: '400',
  subsets: ['latin'],
  display: 'swap',
})

export const metadata: Metadata = {
  title: "Jalkaterapeuttiopiskelija Pinja Pasanen",
  description: "Lämpimästi tervetuloa vastaanotolleni!",
  keywords: ["Jalkaterapeuttiopiskelija", "Pinja Pasanen", "jalkaterapia", "jalkaterapeutti", "jalkahoito","varkaus",],
  authors: [{ name: "Pinja Pasanen" }],
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fi" className={roboto.className}>
      <meta name="google-site-verification" content="eKt69DMazR5m-ysWDWcwd6r8nPtUHZfvSMYuI2sC62s" />
      <body className="antialiased min-h-screen bg-background text-text flex flex-col justify-between">
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
