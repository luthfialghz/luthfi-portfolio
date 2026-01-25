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
  title: {
    default: "Luthfi Yafi Alfiansyah | Associate Software Development Engineer",
    template: "%s | Luthfi Yafi Alfiansyah"
  },
  description: "Portfolio of Luthfi Yafi Alfiansyah, an Associate Software Development Engineer at PT NTT Indonesia specializing in Full-Stack Web (Next.js, React) and Mobile (Kotlin, Android) Development.",
  keywords: [
    "Luthfi Yafi Alfiansyah", 
    "Software Engineer", 
    "Full Stack Developer", 
    "Android Developer", 
    "Next.js Developer", 
    "React Developer", 
    "Kotlin", 
    "PT NTT Indonesia", 
    "Portfolio", 
    "Jakarta", 
    "Indonesia"
  ],
  authors: [{ name: "Luthfi Yafi Alfiansyah", url: "https://luthfialghz.github.io" }],
  creator: "Luthfi Yafi Alfiansyah",
  publisher: "Luthfi Yafi Alfiansyah",
  icons: {
    icon: '/brand-logo-y2k.png?v=2',
    shortcut: '/brand-logo-y2k.png?v=2',
    apple: '/brand-logo-y2k.png?v=2',
  },
  openGraph: {
    title: "Luthfi Yafi Alfiansyah | Associate Software Development Engineer",
    description: "Discover the portfolio of Luthfi Yafi Alfiansyah, specializing in robust scalable software solutions for Web and Mobile platforms.",
    url: "https://luthfialghz.github.io", // Updated to likely GitHub Pages URL or custom domain
    siteName: "Luthfi Yafi Alfiansyah Portfolio",
    images: [
      {
        url: "/brand-logo-y2k.png",
        width: 1200,
        height: 630,
        alt: "Luthfi Yafi Alfiansyah Portfolio Logo",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Luthfi Yafi Alfiansyah | Software Engineer",
    description: "Explore the projects and experience of Luthfi Yafi Alfiansyah, an Associate Software Development Engineer.",
    images: ["/brand-logo-y2k.png"],
    creator: "@luthfialghz", // Assuming this handle based on other links
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              "name": "Luthfi Yafi Alfiansyah",
              "jobTitle": "Associate Software Development Engineer",
              "url": "https://luthfialghz.github.io",
              "image": "https://luthfialghz.github.io/profile.png",
              "sameAs": [
                "https://github.com/luthfialghz",
                "https://www.linkedin.com/in/luthfi-yafi",
                "https://instagram.com/luthfiyell"
              ],
              "worksFor": {
                "@type": "Organization",
                "name": "PT NTT Indonesia"
              },
              "description": "Associate Software Development Engineer specializing in Full-stack, Android, and AI solutions."
            })
          }}
        />
        {children}
      </body>
    </html>
  );
}
