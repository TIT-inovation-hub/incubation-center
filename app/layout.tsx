import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Inter } from "next/font/google";
import { Share_Tech_Mono } from "next/font/google";
import { Footer } from "@/components/Footer";
import { FloatingNav } from "@/components/Navbar";

const inter = Inter({ subsets: ["latin"], weight: ["400", "600", "700"] });

const shareTechMono = Share_Tech_Mono({
  subsets: ["latin"],
  weight: "400", // this font only has 400
});

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "TIT Incubation Hub",
  description: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const navItems = [
    { name: "Coordinators", link: "/coordinators" },
    { name: "Mentors", link: "/mentors" },
    { name: "Gallery", link: "/gallery" },
    { name: "Hackathons", link: "/hackathons", isSpecial: true },
  ];
  return (
    <html lang="en" className={inter.className}>
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${shareTechMono.className} antialiased`}
      >
        <FloatingNav navItems={navItems} />
        {children}
        <Footer />
      </body>
    </html>
  );
}
