"use client"

import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { GraduationCap, Award } from "lucide-react"
import { useLanguage } from "@/contexts/language-context"

export function EducationSection() {
  const { t } = useLanguage()

  return (
    <section className="py-24 px-4">
      <div className="max-w-6xl mx-auto space-y-16">
        <div className="text-center space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold">{t.education.title}</h2>
          <div className="w-20 h-1 bg-primary mx-auto" />
        </div>

        <div className="grid gap-6">
          {t.education.degrees.map((edu, index) => {
            const highlight = index < 2
            return (
              <Card
                key={index}
                className={`p-6 md:p-8 hover:shadow-lg transition-shadow ${
                  highlight ? "border-l-4 border-l-accent" : ""
                }`}
              >
                <div className="flex flex-col md:flex-row gap-6">
                  <div className="flex-shrink-0">
                    <div
                      className={`w-16 h-16 rounded-full ${
                        highlight ? "bg-accent/10" : "bg-primary/10"
                      } flex items-center justify-center`}
                    >
                      {highlight ? (
                        <Award className={`w-8 h-8 ${highlight ? "text-accent" : "text-primary"}`} />
                      ) : (
                        <GraduationCap className="w-8 h-8 text-primary" />
                      )}
                    </div>
                  </div>
                  <div className="flex-1 space-y-3">
                    <div className="flex flex-wrap items-start justify-between gap-3">
                      <h3 className="text-xl md:text-2xl font-bold flex-1 text-balance">{edu.degree}</h3>
                      <Badge variant={highlight ? "default" : "secondary"}>{t.education.status}</Badge>
                    </div>
                    <p className="text-lg text-muted-foreground font-medium">{edu.institution}</p>
                    <p className="text-sm text-muted-foreground">{edu.period}</p>
                    {edu.details && (
                      <p className="text-sm text-accent font-medium pt-2 border-t border-border/50">{edu.details}</p>
                    )}
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
