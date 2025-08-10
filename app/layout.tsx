import type React from "react"
import type { Metadata } from "next"
import { Almarai } from "next/font/google" // Import Almarai font
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"

// Configure Almarai font
const almarai = Almarai({
  subsets: ["arabic"],
  weight: ["300", "400", "700", "800"], // Specify desired weights
})

export const metadata: Metadata = {
  title: "شركة رؤى بعيدة",
  description: "حيث التميز هو المعيار",
  generator: "v0.dev",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="ar" dir="rtl" suppressHydrationWarning>
      <body className={`${almarai.className} bg-light-background text-dark-text`}>
        {" "}
        {/* Apply Almarai font and new background/text colors */}
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
