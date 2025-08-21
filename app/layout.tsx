import type React from "react"
import type { Metadata } from "next"
import { Inter, Montserrat } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/contexts/theme-context"
import { LanguageProvider } from "@/contexts/language-context"
import { ThemeLanguageToggle } from "@/components/theme-language-toggle"

const inter = Inter({
  subsets: ["latin", "cyrillic"],
  display: "swap",
  variable: "--font-inter",
})

const montserrat = Montserrat({
  subsets: ["latin", "cyrillic"],
  display: "swap",
  variable: "--font-montserrat",
})

export const metadata: Metadata = {
  title: "راشا گستر پازیریک - Rasha Gostar Pazirik",
  description: "خدمات ویزا، تحصیل و حواله ارزی به روسیه - Visa, Education and Money Transfer Services to Russia",
  generator: "v0.app",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="fa" dir="rtl">
      <head>
        <style>{`
html {
  font-family: ${inter.style.fontFamily};
  --font-sans: ${inter.variable};
  --font-serif: ${montserrat.variable};
}
        `}</style>
      </head>
      <body className={`${inter.variable} ${montserrat.variable} antialiased`}>
        <ThemeProvider>
          <LanguageProvider>
            {children}
            <ThemeLanguageToggle />
          </LanguageProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}
