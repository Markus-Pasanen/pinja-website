import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Jalkaterapeuttiopiskelija Pinja Pasanen",
  description: "Lämpimästi tervetuloa vastaanotolleni!",
  keywords: ["Jalkaterapeuttiopiskelija", "Pinja Pasanen", "jalkaterapia"],
  authors: [{ name: "Pinja Pasanen"}],
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full scroll-smooth">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
