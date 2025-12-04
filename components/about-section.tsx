"use client"

import { Card } from "@/components/ui/card"
import { Briefcase, Code2, Rocket, Users } from "lucide-react"
import { useLanguage } from "@/contexts/language-context"

export function AboutSection() {
  const { t } = useLanguage()

  const iconMap = [Briefcase, Code2, Rocket, Users]

  return (
    <section className="py-24 px-4 bg-muted/30">
      <div className="max-w-6xl mx-auto space-y-16">
        <div className="text-center space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold">{t.about.title}</h2>
          <div className="w-20 h-1 bg-primary mx-auto" />
        </div>

        <div className="max-w-4xl mx-auto space-y-6 text-lg text-muted-foreground leading-relaxed">
          <p>{t.about.intro1}</p>
          <p>{t.about.intro2}</p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 pt-8">
          {t.about.highlights.map((item, index) => {
            const Icon = iconMap[index]
            return (
              <Card key={index} className="p-6 hover:shadow-lg transition-shadow border-border/50">
                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                      <Icon className="w-6 h-6 text-primary" />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <h3 className="font-semibold text-lg">{item.title}</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">{item.description}</p>
                  </div>
                </div>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}
