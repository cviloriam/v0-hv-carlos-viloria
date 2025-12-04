import type React from "react"
import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
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
    icon: [
      {
        url: "/icon-light-32x32.png",
        media: "(prefers-color-scheme: light)",
      },
      {
        url: "/icon-dark-32x32.png",
        media: "(prefers-color-scheme: dark)",
      },
      {
        url: "/icon.svg",
        type: "image/svg+xml",
      },
    ],
    apple: "/apple-icon.png",
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
        {children}
        <Analytics />
      </body>
    </html>
  )
}
