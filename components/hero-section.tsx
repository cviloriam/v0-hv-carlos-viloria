"use client"

import { ChevronDown } from "lucide-react"
import Image from "next/image"
import { useLanguage } from "@/contexts/language-context"

export function HeroSection() {
  const { t } = useLanguage()

  return (
    <section
      id="inicio"
      className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-background via-background to-primary/5 px-4 py-20"
    >
      <div className="max-w-6xl mx-auto text-center space-y-8">
        <div className="flex justify-center mb-8">
          <div className="relative w-40 h-40 md:w-48 md:h-48 rounded-full overflow-hidden border-4 border-primary/20 shadow-2xl shadow-primary/20">
            <Image
              src="/images/1625617714498.jpg"
              alt="Carlos Antonio Viloria Madera"
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>

        <div className="mb-8">
          <div className="relative w-full max-w-4xl mx-auto aspect-[3/1] rounded-lg overflow-hidden shadow-xl">
            <Image
              src="/images/1620977966787.jpg"
              alt="Carlos Viloria - PM | Scrum Master | Software Architect | Software Developer"
              fill
              className="object-contain"
              priority
            />
          </div>
        </div>

        <div className="space-y-4">
          <div className="inline-block">
            <span className="text-sm font-mono text-accent tracking-wider uppercase">{t.hero.subtitle}</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-balance">
            {t.hero.title1}
            <br />
            <span className="text-primary">{t.hero.title2}</span>
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground font-light max-w-3xl mx-auto">
            {t.hero.description1}
            <br />
            <span className="text-base md:text-lg">{t.hero.description2}</span>
          </p>
        </div>

        <div className="pt-8 pb-4">
          <div className="inline-block px-6 py-3 bg-primary/10 border border-primary/20 rounded-full">
            <p className="text-lg md:text-xl font-medium text-primary text-balance leading-relaxed">
              <span className="font-bold">TecnologIA</span> - {t.hero.slogan}
            </p>
          </div>
        </div>

        <div className="flex flex-wrap gap-4 justify-center pt-4">
          <span className="px-4 py-2 bg-accent/10 text-accent rounded-full text-sm font-medium">
            {t.hero.experience}
          </span>
          <span className="px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium">
            {t.hero.specialist}
          </span>
          <span className="px-4 py-2 bg-accent/10 text-accent rounded-full text-sm font-medium">{t.hero.cloud}</span>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <ChevronDown className="w-6 h-6 text-muted-foreground" />
      </div>
    </section>
  )
}
