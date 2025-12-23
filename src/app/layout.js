import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Toaster } from "sonner";
import SmoothScroll from "@/components/SmoothScroll";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  metadataBase: new URL('https://dinkarthakur.com'),
  title: {
    default: "Dinkar Thakur | Data Scientist & AI Engineer",
    template: "%s | Dinkar Thakur"
  },
  description: "Portfolio of Dinkar Thakur - Data Scientist, AI Engineer & Full Stack Developer specializing in Machine Learning, Deep Learning, and Web Development.",
  keywords: ["Data Scientist", "AI Engineer", "Machine Learning", "Deep Learning", "Web Development", "Portfolio", "Dinkar Thakur"],
  authors: [{ name: "Dinkar Thakur" }],
  creator: "Dinkar Thakur",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://dinkarthakur.com",
    title: "Dinkar Thakur | Data Scientist & AI Engineer",
    description: "Portfolio of Dinkar Thakur - Data Scientist, AI Engineer & Full Stack Developer.",
    siteName: "Dinkar Thakur Portfolio",
    images: [
      {
        url: "/profile.jpg",
        width: 1200,
        height: 630,
        alt: "Dinkar Thakur",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Dinkar Thakur | Data Scientist & AI Engineer",
    description: "Portfolio of Dinkar Thakur - Data Scientist, AI Engineer & Full Stack Developer.",
    images: ["/profile.jpg"],
  },
  icons: {
    icon: "/profile.ico",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
        <Toaster position="top-center" richColors />
        <SmoothScroll />
      </body>
    </html>
  );
}
