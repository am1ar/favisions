import type React from "react"
import type { Metadata } from "next"
import { Almarai } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"

const almarai = Almarai({
  subsets: ["arabic"],
  weight: ["300", "400", "700", "800"],
  variable: "--font-almarai",
})

export const metadata: Metadata = {
  title: "شركة رؤى بعيدة - خدمات متكاملة وحلول شاملة",
  description: "شركة رؤى بعيدة هي شريكك الاستراتيجي الموثوق في المملكة العربية السعودية، متخصصة في التحول الرقمي، والخدمات اللوجستية المتقدمة، والمقاولات التقنية. نقدم حلول تقنية مبتكرة ومتطورة تدعم رؤية 2030.",
  keywords: [
    "شركة رؤى بعيدة",
    "التحول الرقمي",
    "الخدمات اللوجستية",
    "المقاولات التقنية",
    "حلول تقنية",
    "أنظمة ذكية",
    "الذكاء الاصطناعي",
    "إنترنت الأشياء",
    "الأمن السيبراني",
    "الحوسبة السحابية",
    "إدارة المستودعات",
    "أنظمة النقل الذكية",
    "سلاسل الإمداد",
    "البنية التحتية التقنية",
    "المدن الذكية",
    "رؤية 2030",
    "المملكة العربية السعودية",
    "تقنيات متطورة",
    "حلول مبتكرة",
    "خدمات تقنية متكاملة"
  ],
  authors: [{ name: "شركة رؤى بعيدة" }],
  creator: "شركة رؤى بعيدة",
  publisher: "شركة رؤى بعيدة",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://farvisions.com'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: "شركة رؤى بعيدة - حلول تقنية متكاملة ولوجستيات ذكية",
    description: "شريكك الاستراتيجي في التحول الرقمي والخدمات اللوجستية المتقدمة والمقاولات التقنية في المملكة العربية السعودية",
    url: 'https://farvisions.com',
    siteName: 'شركة رؤى بعيدة',
    locale: 'ar_SA',
    type: 'website',
    images: [
      {
        url: '/placeholder-logo.png',
        width: 1200,
        height: 630,
        alt: 'شركة رؤى بعيدة - شعار الشركة',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: "شركة رؤى بعيدة - حلول تقنية متكاملة",
    description: "شريكك الاستراتيجي في التحول الرقمي والخدمات اللوجستية المتقدمة",
    images: ['/placeholder-logo.png'],
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
  verification: {
    google: 'your-google-verification-code',
    yandex: 'your-yandex-verification-code',
    yahoo: 'your-yahoo-verification-code',
  },
  generator: "Next.js",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="ar" dir="rtl" suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "شركة رؤى بعيدة",
              "alternateName": "Farvisions",
              "description": "شركة متخصصة في التحول الرقمي والخدمات اللوجستية المتقدمة والمقاولات التقنية",
              "url": "https://farvisions.com",
              "logo": "https://farvisions.com/placeholder-logo.png",
              "contactPoint": {
                "@type": "ContactPoint",
                "telephone": "0580122162",
                "contactType": "customer service",
                "areaServed": "SA",
                "availableLanguage": "Arabic"
              },
              "address": {
                "@type": "PostalAddress",
                "addressCountry": "SA",
                "addressRegion": "الرياض"
              },
              "sameAs": [
                "https://linkedin.com/company/farvisions",
                "https://twitter.com/farvisions"
              ],
              "serviceType": [
                "التحول الرقمي",
                "الخدمات اللوجستية المتقدمة",
                "المقاولات التقنية",
                "الذكاء الاصطناعي",
                "إنترنت الأشياء",
                "الأمن السيبراني"
              ]
            })
          }}
        />
      </head>
      <body className={`${almarai.variable} font-sans bg-background text-foreground antialiased`}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
