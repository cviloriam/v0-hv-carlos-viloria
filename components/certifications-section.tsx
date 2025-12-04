import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Award, Shield, Cloud, FileText, Users, Globe } from "lucide-react"

export function CertificationsSection() {
  const certificationCategories = [
    {
      icon: FileText,
      title: "Gestión Documental y ECM",
      color: "text-blue-600",
      bgColor: "bg-blue-50 dark:bg-blue-950/30",
      certs: [
        "IBM FileNet P8 (Colpensiones)",
        "Kofax Capture 11.0 Certified",
        "Kofax Transformation 6.0 Certified",
        "DocuWare Sales Advisor",
        "Yakidoo ECM",
      ],
      featured: ["Kofax Capture 11 ID: E5FC61F81D", "Kofax Transformation 6 ID: AAA955EAAA"],
    },
    {
      icon: Users,
      title: "Gestión de Proyectos y Agile",
      color: "text-green-600",
      bgColor: "bg-green-50 dark:bg-green-950/30",
      certs: ["Scrum Master Professional Certified (SMPC)", "Scrum Foundation", "PMI Project Management", "MS Project"],
      featured: ["SMPC ID: 14809169 & 14808670"],
    },
    {
      icon: Cloud,
      title: "Cloud Computing y DevOps",
      color: "text-purple-600",
      bgColor: "bg-purple-50 dark:bg-purple-950/30",
      certs: [
        "Azure DevOps & Pipelines",
        "Azure Políticas para DevOps",
        "AWS para Profesionales IT",
        "Docker & Kubernetes",
        "DevOps Essential",
      ],
    },
    {
      icon: Award,
      title: "BPM y Automatización",
      color: "text-orange-600",
      bgColor: "bg-orange-50 dark:bg-orange-950/30",
      certs: [
        "BPM Bizagi – Colpensiones",
        "BPM Bizagi – Universidad del Rosario",
        "Kofax Total Agility",
        "Automatización con ECM",
      ],
    },
    {
      icon: Shield,
      title: "Seguridad y Ciberseguridad",
      color: "text-red-600",
      bgColor: "bg-red-50 dark:bg-red-950/30",
      certs: [
        "Incidentes Cibernéticos – MinTIC",
        "Seguridad de la Información",
        "SARLAFT",
        "Protección de Datos Personales",
      ],
    },
    {
      icon: Globe,
      title: "Idiomas y Otros",
      color: "text-cyan-600",
      bgColor: "bg-cyan-50 dark:bg-cyan-950/30",
      certs: ["Inglés B1 – Colombo Americano", "Inglés Técnico", "Reforma Pensional", "Lenguaje Claro"],
    },
  ]

  return (
    <section className="py-24 px-4 bg-muted/30">
      <div className="max-w-6xl mx-auto space-y-16">
        <div className="text-center space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold">Certificaciones y Estudios</h2>
          <div className="w-20 h-1 bg-primary mx-auto" />
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Formación continua y certificaciones internacionales en tecnologías de vanguardia
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certificationCategories.map((category, index) => (
            <Card key={index} className="p-6 hover:shadow-lg transition-all hover:-translate-y-1">
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className={`w-12 h-12 rounded-lg ${category.bgColor} flex items-center justify-center`}>
                    <category.icon className={`w-6 h-6 ${category.color}`} />
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

                {category.featured && (
                  <div className="pt-3 border-t border-border/50 space-y-1">
                    {category.featured.map((feat, i) => (
                      <Badge key={i} variant="outline" className="text-xs font-mono">
                        {feat}
                      </Badge>
                    ))}
                  </div>
                )}
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
