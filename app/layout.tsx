import "./globals.css"
import { Inter } from "next/font/google"
import type React from "react"
import type { Metadata } from "next"
import MouseMoveEffect from "@/components/mouse-move-effect"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Bazzar Digital - Cutting-Edge Software Solutions",
  description: "Empowering businesses with cutting-edge software solutions. From AI-driven analytics to seamless cloud integrations, we're shaping the future of technology.",
  keywords:[
    'Bazzar Digital',
    'Software Solutions',
    'Bihar software house',
    'Bihar website developer',
    'Bihar web developer',
    'Bihar Digital Marketing',
    'Bihar SEO',
    'Bihar Social Media Marketing',
    'Bihar Digital Marketing Agency',
    'Bihar Social Media Marketing Agency',
    'Bihar Search Engine Optimization',
  ],
  icons: {
    icon: "/logo.jpg",
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="dark">
      <body className={`${inter.className} bg-background text-foreground antialiased`}>
        <MouseMoveEffect />
        {children}
      </body>
    </html>
  )
}

