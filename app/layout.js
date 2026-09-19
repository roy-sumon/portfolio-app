import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navber";
import Footer from "@/components/Footer";
import ThemeProvider from "@/components/ThemeProvider";

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
    <html lang="en" className="dark scroll-smooth" suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  var theme = localStorage.getItem('theme');
                  if (theme === 'light') {
                    document.documentElement.classList.remove('dark');
                  } else {
                    document.documentElement.classList.add('dark');
                  }
                } catch (e) {}
              })();
            `,
          }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} font-sans antialiased bg-slate-50 text-slate-900 dark:bg-bgDark dark:text-cWhite min-h-screen flex flex-col selection:bg-primary selection:text-white transition-colors duration-300`}
      >
        <ThemeProvider>
          <Navbar />
          <main className="flex-grow">{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
