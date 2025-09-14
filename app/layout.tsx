import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "@/styles/globals.css";
import NavBar from "@/components/nav-bar";
import Footer from "@/components/footer";
import ScrollToTop from "@/components/scroll-to-top";
import ErrorBoundary from "@/components/error-boundary";
import { GoogleAnalytics } from "@next/third-parties/google";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
  fallback: ["system-ui", "arial"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
  fallback: ["ui-monospace", "monospace"],
});

export const metadata: Metadata = {
  title: "Aman Sahoo | Full-Stack Developer Portfolio",
  description:
    "Portfolio website of Aman Sahoo - Software Developer specializing in full-stack development with expertise in modern web technologies including React, Next.js, Node.js, and cloud services.",
  keywords: [
    "Aman Sahoo",
    "Full-Stack Developer",
    "React",
    "Next.js",
    "Node.js",
    "TypeScript",
    "Software Developer",
    "Web Development",
  ],
  authors: [{ name: "Aman Sahoo" }],
  creator: "Aman Sahoo",
  openGraph: {
    title: "Aman Sahoo | Full-Stack Developer Portfolio",
    description:
      "Software Developer specializing in full-stack development with expertise in modern web technologies.",
    url: "https://aman.dev/",
    siteName: "Aman Sahoo Portfolio",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Aman Sahoo | Full-Stack Developer Portfolio",
    description:
      "Software Developer specializing in full-stack development with expertise in modern web technologies.",
    creator: "@aman_sahoo",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-background text-foreground`}
      >
        <ErrorBoundary>
          <NavBar />
          {children}
          <Footer />
          <ScrollToTop />
        </ErrorBoundary>
        <GoogleAnalytics gaId="G-L49P87PHWD" />
      </body>
    </html>
  );
}
