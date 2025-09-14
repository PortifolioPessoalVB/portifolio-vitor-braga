import type React from "react"
import type { Metadata } from "next"
import { GeistSans } from "geist/font/sans"
import { GeistMono } from "geist/font/mono"
import { Analytics } from "@vercel/analytics/next"
import { Suspense } from "react"
import "./globals.css"

export const metadata: Metadata = {
  title: "Vítor Braga - Desenvolvedor Web Júnior",
  description: "Portfólio de Vítor Braga, Desenvolvedor Web Júnior especializado em React, Next.js e TypeScript",
  generator: "v0.app",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-BR">
      <body
  className={`${GeistSans.variable} ${GeistMono.variable} font-sans
              min-h-screen flex flex-col bg-slate-900 text-slate-100 antialiased`}
  >
  <Suspense fallback={null}>
    <main id="topo" className="flex-1">{children}</main>
  </Suspense>
  <Analytics />
</body>
</html>
  )
}
