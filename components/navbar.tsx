"use client"

import { Home, BookOpen, Mail, Globe } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useLanguage } from "@/contexts/language-context"
import Link from "next/link"
import { usePathname } from "next/navigation"

export function Navbar() {
  const { language, setLanguage, t } = useLanguage()
  const pathname = usePathname()

  const scrollToSection = (sectionId: string) => {
    if (pathname !== "/") {
      window.location.href = `/#${sectionId}`
      return
    }

    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="flex items-center gap-2">
            <span className="text-xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Carlos Viloria
            </span>
          </Link>

          <div className="flex items-center gap-2">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => scrollToSection("inicio")}
              className="flex items-center gap-2"
            >
              <Home className="h-4 w-4" />
              <span className="hidden sm:inline">{t.nav.home}</span>
            </Button>

            <Link href="/blog">
              <Button variant="ghost" size="sm" className="flex items-center gap-2">
                <BookOpen className="h-4 w-4" />
                <span className="hidden sm:inline">{t.nav.blog}</span>
              </Button>
            </Link>

            <Link href="/contact">
              <Button variant="ghost" size="sm" className="flex items-center gap-2">
                <Mail className="h-4 w-4" />
                <span className="hidden sm:inline">{t.nav.contact}</span>
              </Button>
            </Link>

            <div className="flex items-center gap-1 ml-2 border-l border-border pl-2">
              <Button
                variant={language === "es" ? "default" : "ghost"}
                size="sm"
                className="flex items-center gap-1 text-xs"
                onClick={() => setLanguage("es")}
              >
                <Globe className="h-3 w-3" />
                <span>ES</span>
              </Button>
              <Button
                variant={language === "en" ? "default" : "ghost"}
                size="sm"
                className="flex items-center gap-1 text-xs"
                onClick={() => setLanguage("en")}
              >
                <Globe className="h-3 w-3" />
                <span>EN</span>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}
