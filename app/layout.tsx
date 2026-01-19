import type { Metadata } from "next"
import { GeistSans } from "geist/font/sans"
import { GeistMono } from "geist/font/mono"
import "./globals.css"
import { Header } from "@/components/layout/Header"
import { Footer } from "@/components/layout/Footer"
import { ThemeProvider } from "@/components/providers/ThemeProvider"

export const metadata: Metadata = {
  title: {
    default: "Patrice Monat | Creative Solution Designer",
    template: "%s | Patrice Monat",
  },
  description:
    "Creative Solution Designer - Stratégie, Design, Développement. Un interlocuteur unique pour vos projets digitaux. Sites web, applications, automatisations.",
  keywords: [
    "Creative Solution Designer",
    "Product Builder",
    "Designer",
    "Développeur",
    "No-Code",
    "Nord-Isère",
    "Chambéry",
    "Lyon",
  ],
  authors: [{ name: "Patrice Monat" }],
  creator: "Patrice Monat",
  openGraph: {
    type: "website",
    locale: "fr_FR",
    url: "https://patrice-monat.fr",
    siteName: "Patrice Monat - Creative Solution Designer",
    title: "Patrice Monat | Creative Solution Designer",
    description:
      "Un interlocuteur unique pour vos projets digitaux. Stratégie, Design, Développement.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Patrice Monat | Creative Solution Designer",
    description:
      "Un interlocuteur unique pour vos projets digitaux. Stratégie, Design, Développement.",
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="fr" className={`${GeistSans.variable} ${GeistMono.variable}`} suppressHydrationWarning>
      <body className="min-h-screen flex flex-col font-sans antialiased">
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  )
}
