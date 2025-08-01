import type { Metadata } from "next";
import { League_Spartan } from "next/font/google";
import Header from "@/components/Header/Header";
import { Footer } from "@/components/Footer/Footer";
import "./globals.css";

const leagueSpartan = League_Spartan({
  subsets: ["latin"],
  variable: "--font-league-spartan",
});

export const metadata: Metadata = {
  title: "Marvel Characters Explorer",
  description: "Explore the Marvel universe and discover your favorite characters",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={leagueSpartan.className}>
        <Header />
        <main>
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}