"use client"

import { BookOpen, Mail, Users } from "lucide-react"
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
        <div className="flex items-center justify-between h-16 gap-2">
          <Link href="/" className="flex items-center gap-2 min-w-0 flex-shrink">
            <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-lg bg-gradient-to-br from-primary to-accent flex items-center justify-center shadow-md flex-shrink-0">
              <span className="text-xs sm:text-sm font-bold text-white">C/V</span>
            </div>
            <span className="text-sm sm:text-xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent truncate">
              Carlos Viloria Madera
            </span>
          </Link>

          <div className="flex items-center gap-1 flex-shrink-0">
            <Link href="/blog">
              <Button variant="ghost" size="sm" className="flex items-center gap-1 h-8 px-2 sm:px-3">
                <BookOpen className="h-4 w-4" />
                <span className="hidden sm:inline">{t.nav.blog}</span>
              </Button>
            </Link>

            <Link href="/contact">
              <Button variant="ghost" size="sm" className="flex items-center gap-1 h-8 px-2 sm:px-3">
                <Mail className="h-4 w-4" />
                <span className="hidden sm:inline">{t.nav.contact}</span>
              </Button>
            </Link>

            <Link href="/follow">
              <Button variant="ghost" size="sm" className="flex items-center gap-1 h-8 px-2 sm:px-3">
                <Users className="h-4 w-4" />
                <span className="hidden sm:inline">{t.nav.follow}</span>
              </Button>
            </Link>

            <div className="flex items-center gap-0.5 ml-1 sm:ml-2 border-l border-border pl-1 sm:pl-2">
              <Button
                variant={language === "es" ? "default" : "ghost"}
                size="sm"
                className="h-8 px-2 text-xs"
                onClick={() => setLanguage("es")}
              >
                🇪🇸
              </Button>
              <Button
                variant={language === "en" ? "default" : "ghost"}
                size="sm"
                className="h-8 px-2 text-xs"
                onClick={() => setLanguage("en")}
              >
                🇺🇸
              </Button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
