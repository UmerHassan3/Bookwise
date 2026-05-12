import type { Metadata } from "next"
import { Geist, Geist_Mono, IBM_Plex_Sans, Bebas_Neue, Oswald } from "next/font/google"
import "./globals.css"
import { Toaster } from "sonner"
import { auth } from "@/auth"
import { SessionProvider } from "next-auth/react"

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
})

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
})

const ibmPlex = IBM_Plex_Sans({
  variable: "--font-ibm",
  subsets: ["latin"],
})

const bebas = Oswald({
  subsets: ["latin"],
  variable: "--font-bebas",
})

export const metadata: Metadata = {
  title: "BookWise",
  description:
    "Library management system built with Next.js, Tailwind CSS, and Prisma",
}

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const session = await auth()

  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} ${ibmPlex.variable} ${bebas.variable} antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <SessionProvider session={session}>
          {children}
          <Toaster richColors position="top-right" />
        </SessionProvider>
      </body>
    </html>
  )
}