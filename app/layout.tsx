import type React from "react"
import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import { LanguageProvider } from "@/contexts/language-context"
import "./globals.css"

const _geist = Geist({ subsets: ["latin"] })
const _geistMono = Geist_Mono({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Carlos Viloria - Arquitecto de Soluciones TI & Líder de Proyectos",
  description:
    "Magíster en Gestión de Proyectos TI, Scrum Master y Arquitecto de Soluciones con 19+ años de experiencia en tecnología, desarrollo de software y transformación digital.",
  keywords: [
    "Arquitecto de Soluciones",
    "Líder de Proyectos TI",
    "IBM FileNet",
    "Gestión Documental",
    "Cloud Computing",
    "Scrum Master",
  ],
  generator: "v0.app",
  icons: {
    icon: "/favicon.svg",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es">
      <body className={`font-sans antialiased`}>
        <LanguageProvider>
          {children}
          <Analytics />
        </LanguageProvider>
      </body>
    </html>
  )
}
