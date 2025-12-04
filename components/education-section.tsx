import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { GraduationCap, Award } from "lucide-react"

export function EducationSection() {
  const education = [
    {
      degree: "Máster Universitario en Diseño y Gestión de Proyectos Tecnológicos",
      institution: "Universidad Internacional de La Rioja – UNIR (España)",
      period: "2013 – 2014",
      status: "Graduado",
      details: "Convalidación MEN: Resolución 03373 del 07 de marzo de 2017",
      highlight: true,
    },
    {
      degree: "Ingeniero de Sistemas",
      institution: "Universidad Autónoma del Caribe",
      period: "2002 – 2007",
      status: "Graduado",
      details: "Tarjeta Profesional COPNIA: 08255165016ATL",
      highlight: true,
    },
    {
      degree: "Bachiller Académico",
      institution: "Colegio Comfamiliar del Atlántico",
      period: "1996 – 2001",
      status: "Graduado",
    },
  ]

  return (
    <section className="py-24 px-4">
      <div className="max-w-6xl mx-auto space-y-16">
        <div className="text-center space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold">Educación Formal</h2>
          <div className="w-20 h-1 bg-primary mx-auto" />
        </div>

        <div className="grid gap-6">
          {education.map((edu, index) => (
            <Card
              key={index}
              className={`p-6 md:p-8 hover:shadow-lg transition-shadow ${
                edu.highlight ? "border-l-4 border-l-accent" : ""
              }`}
            >
              <div className="flex flex-col md:flex-row gap-6">
                <div className="flex-shrink-0">
                  <div
                    className={`w-16 h-16 rounded-full ${
                      edu.highlight ? "bg-accent/10" : "bg-primary/10"
                    } flex items-center justify-center`}
                  >
                    {edu.highlight ? (
                      <Award className={`w-8 h-8 ${edu.highlight ? "text-accent" : "text-primary"}`} />
                    ) : (
                      <GraduationCap className="w-8 h-8 text-primary" />
                    )}
                  </div>
                </div>
                <div className="flex-1 space-y-3">
                  <div className="flex flex-wrap items-start justify-between gap-3">
                    <h3 className="text-xl md:text-2xl font-bold flex-1 text-balance">{edu.degree}</h3>
                    <Badge variant={edu.highlight ? "default" : "secondary"}>{edu.status}</Badge>
                  </div>
                  <p className="text-lg text-muted-foreground font-medium">{edu.institution}</p>
                  <p className="text-sm text-muted-foreground">{edu.period}</p>
                  {edu.details && (
                    <p className="text-sm text-accent font-medium pt-2 border-t border-border/50">{edu.details}</p>
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
