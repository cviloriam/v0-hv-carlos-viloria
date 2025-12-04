"use client"

import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Building2, Calendar } from "lucide-react"
import { useLanguage } from "@/contexts/language-context"

export function ExperienceSection() {
  const { t } = useLanguage()

  return (
    <section className="py-24 px-4">
      <div className="max-w-6xl mx-auto space-y-16">
        <div className="text-center space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold">{t.experience.title}</h2>
          <div className="w-20 h-1 bg-primary mx-auto" />
        </div>

        <div className="space-y-8">
          {t.experience.jobs.map((exp, index) => (
            <Card key={index} className="p-6 md:p-8 hover:shadow-lg transition-shadow border-l-4 border-l-primary">
              <div className="space-y-6">
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                  <div className="space-y-2 flex-1">
                    <h3 className="text-xl md:text-2xl font-bold text-balance">{exp.title}</h3>
                    <div className="flex flex-wrap items-center gap-3 text-muted-foreground">
                      <div className="flex items-center gap-2">
                        <Building2 className="w-4 h-4" />
                        <span className="font-medium">{exp.company}</span>
                      </div>
                      <span className="text-border">•</span>
                      <span>{exp.location}</span>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <Calendar className="w-4 h-4 text-muted-foreground" />
                    <span className="font-medium">{exp.period}</span>
                    {index === 0 && (
                      <Badge variant="default" className="ml-2">
                        {t.experience.current}
                      </Badge>
                    )}
                  </div>
                </div>

                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold mb-3 text-foreground">{t.experience.responsibilities}</h4>
                    <ul className="space-y-2">
                      {exp.responsibilities.map((resp, i) => (
                        <li key={i} className="flex gap-3 text-muted-foreground">
                          <span className="text-primary mt-1.5">▸</span>
                          <span className="flex-1 leading-relaxed">{resp}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {exp.achievements && exp.achievements.length > 0 && (
                    <div>
                      <h4 className="font-semibold mb-3 text-foreground">{t.experience.achievements}</h4>
                      <ul className="space-y-2">
                        {exp.achievements.map((achievement, i) => (
                          <li key={i} className="flex gap-3 text-muted-foreground">
                            <span className="text-accent mt-1.5">✓</span>
                            <span className="flex-1 leading-relaxed">{achievement}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
