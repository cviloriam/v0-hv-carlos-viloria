"use client"

import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Award, Shield, Cloud, FileText, Users, Globe } from "lucide-react"
import { useLanguage } from "@/contexts/language-context"

export function CertificationsSection() {
  const { t } = useLanguage()

  const iconMap = [FileText, Users, Cloud, Award, Shield, Globe]
  const colorMap = [
    { color: "text-blue-600", bgColor: "bg-blue-50 dark:bg-blue-950/30" },
    { color: "text-green-600", bgColor: "bg-green-50 dark:bg-green-950/30" },
    { color: "text-purple-600", bgColor: "bg-purple-50 dark:bg-purple-950/30" },
    { color: "text-orange-600", bgColor: "bg-orange-50 dark:bg-orange-950/30" },
    { color: "text-red-600", bgColor: "bg-red-50 dark:bg-red-950/30" },
    { color: "text-cyan-600", bgColor: "bg-cyan-50 dark:bg-cyan-950/30" },
  ]

  const featured = [
    ["Kofax Capture 11 ID: E5FC61F81D", "Kofax Transformation 6 ID: AAA955EAAA"],
    ["SMPC ID: 14809169 & 14808670"],
    null,
    null,
    null,
    null,
  ]

  return (
    <section className="py-24 px-4 bg-muted/30">
      <div className="max-w-6xl mx-auto space-y-16">
        <div className="text-center space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold">{t.certifications.title}</h2>
          <div className="w-20 h-1 bg-primary mx-auto" />
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">{t.certifications.subtitle}</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {t.certifications.categories.map((category, index) => {
            const Icon = iconMap[index]
            const colors = colorMap[index]
            return (
              <Card key={index} className="p-6 hover:shadow-lg transition-all hover:-translate-y-1">
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <div className={`w-12 h-12 rounded-lg ${colors.bgColor} flex items-center justify-center`}>
                      <Icon className={`w-6 h-6 ${colors.color}`} />
                    </div>
                    <h3 className="font-bold text-base flex-1 leading-tight">{category.title}</h3>
                  </div>

                  <ul className="space-y-2">
                    {category.certs.map((cert, i) => (
                      <li key={i} className="flex gap-2 items-start">
                        <span className="text-primary mt-1 text-xs">▸</span>
                        <span className="text-sm text-muted-foreground leading-relaxed">{cert}</span>
                      </li>
                    ))}
                  </ul>

                  {featured[index] && (
                    <div className="pt-3 border-t border-border/50 space-y-1">
                      {featured[index]!.map((feat, i) => (
                        <Badge key={i} variant="outline" className="text-xs font-mono">
                          {feat}
                        </Badge>
                      ))}
                    </div>
                  )}
                </div>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}
