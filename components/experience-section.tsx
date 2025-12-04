import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Building2, Calendar } from "lucide-react"

export function ExperienceSection() {
  const experiences = [
    {
      title: "Profesional Máster V – Líder de Proyectos TI",
      company: "Colpensiones",
      location: "Bogotá, Colombia",
      period: "Marzo 2021 – Actual",
      current: true,
      responsibilities: [
        "Liderazgo técnico y funcional de proyectos estratégicos de TI",
        "Administración nacional del sistema ECM FileNet P8",
        "Coordinación de proyectos PETI: Historia Laboral, SFP II y Gestión Documental F2",
        "Gestión de proveedores tecnológicos (Kyndryl, IBM, Dacartec, Soaint, INDRA)",
      ],
      achievements: [
        "Optimización de la gestión documental, reduciendo tiempos operativos",
        "Estandarización de plantillas técnicas para toda la Vicepresidencia de Tecnología",
        "Consolidación de lineamientos para más de 350 sistemas de información",
      ],
    },
    {
      title: "Especialista en LCI - Arquitecto de Soluciones",
      company: "ITO Software S.A.S.",
      location: "Bogotá, Colombia",
      period: "Mayo 2021 – Marzo 2023",
      responsibilities: [
        "Especialista en Lenguaje Común de Intercambio de Información (LCI)",
        "Arquitecto de soluciones en .Net, VB.Net, C#, Java, SQL Server, Oracle y Azure",
        "Liderazgo en proyectos MinTIC, ICETEX y FONTIC con metodologías ágiles (SCRUM)",
        "Diseño de microservicios integrados en ESB WSO2",
      ],
    },
    {
      title: "Especialista Desarrollador de Soluciones III",
      company: "Ricoh Colombia S.A.",
      location: "Bogotá, Colombia",
      period: "Octubre 2019 – Marzo 2021",
      responsibilities: [
        "Análisis y diseño técnico-funcional de soluciones ECM",
        "Parametrización de módulos y soporte en integración con aplicaciones corporativas",
        "Implementación y soporte técnico de soluciones",
      ],
    },
    {
      title: "Coordinador de Proyectos TI",
      company: "Avianca S.A",
      location: "Bogotá, Colombia",
      period: "Junio 2010 – Noviembre 2014",
      responsibilities: [
        "Gestión de proyectos de TI para áreas de gestión humana y mantenimiento",
        "Análisis y diseño de arquitecturas de soluciones tecnológicas",
        "Desarrollo de software en .Net y administración de bases de datos Oracle/SQL Server",
      ],
      achievements: ["Promoción de analista de soporte a coordinador de proyectos IT"],
    },
  ]

  return (
    <section className="py-24 px-4">
      <div className="max-w-6xl mx-auto space-y-16">
        <div className="text-center space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold">Experiencia Profesional</h2>
          <div className="w-20 h-1 bg-primary mx-auto" />
        </div>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
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
                    {exp.current && (
                      <Badge variant="default" className="ml-2">
                        Actual
                      </Badge>
                    )}
                  </div>
                </div>

                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold mb-3 text-foreground">Funciones principales:</h4>
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
                      <h4 className="font-semibold mb-3 text-foreground">Logros destacados:</h4>
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
