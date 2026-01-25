import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Luthfi Yafi Alfiansyah | Associate Software Development Engineer",
  description: "Associate Software Developer Engineer Portfolio.",
  icons: {
    icon: '/brand-logo-y2k.png?v=2',
    shortcut: '/brand-logo-y2k.png?v=2',
    apple: '/brand-logo-y2k.png?v=2',
  },
  openGraph: {
    title: "Luthfi Yafi Alfiansyah | Associate Software Development Engineer",
    description: "Personal Portfolio of Luthfi Yafi Alfiansyah, focusing on robust and scalable software solutions.",
    url: "https://your-domain.com", // update this when deploying
    siteName: "LYA Portfolio",
    images: [
      {
        url: "/brand-logo-y2k.png",
        width: 1200,
        height: 630,
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Luthfi Yafi Alfiansyah | Associate Software Development Engineer",
    description: "Associate Software Developer Engineer Portfolio.",
    images: ["/brand-logo-y2k.png"],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
