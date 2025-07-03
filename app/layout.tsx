import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { Toaster } from "@/components/ui/sonner"
import ClientLayout from "./ClientLayout"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "My Haki - Know Your Rights in Kenya",
  description:
    "A comprehensive platform for understanding and exercising your constitutional rights in Kenya. Get legal assistance, emergency help, and connect with qualified lawyers.",
  keywords: "Kenya rights, constitutional rights, legal assistance, lawyers Kenya, protest rights, LSK lawyers",
  authors: [{ name: "My Haki Platform" }],
  creator: "My Haki Platform",
  publisher: "My Haki Platform",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://my-haki.vercel.app"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "My Haki - Know Your Rights in Kenya",
    description: "A comprehensive platform for understanding and exercising your constitutional rights in Kenya.",
    url: "https://my-haki.vercel.app",
    siteName: "My Haki",
    locale: "en_KE",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "My Haki - Know Your Rights in Kenya",
    description: "A comprehensive platform for understanding and exercising your constitutional rights in Kenya.",
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
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
          <ClientLayout>{children}</ClientLayout>
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  )
}
