import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navber";
import Footer from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Sumon Roy | Software Engineer & Full-Stack Developer",
  description:
    "Portfolio of Sumon Roy — a Software Engineer specializing in building modern web applications with React, Next.js, Node.js, Java, and high-performance databases.",
  keywords: [
    "Sumon Roy",
    "Software Engineer",
    "Full-Stack Developer",
    "React",
    "Next.js",
    "JavaScript",
    "Java",
    "Portfolio",
  ],
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <body
        className={`${geistSans.variable} ${geistMono.variable} font-sans antialiased bg-bgDark text-cWhite min-h-screen flex flex-col selection:bg-primary selection:text-white`}
      >
        <Navbar />
        <main className="flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
