import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Code2, Database, Cloud, Settings, GitBranch, Layers, FileText, Users } from "lucide-react"

export function SkillsSection() {
  const skillCategories = [
    {
      icon: Code2,
      title: "Lenguajes de Programación",
      skills: ["C#", "VB.Net", "Java", "Python", "JavaScript", "SQL", "PL/SQL", "T-SQL"],
    },
    {
      icon: FileText,
      title: "ECM / Gestión Documental",
      skills: ["IBM FileNet P8", "Kofax Capture", "Kofax KTM", "Kofax KTA", "DocuWare", "Yakidoo ECM"],
    },
    {
      icon: Cloud,
      title: "Cloud Computing",
      skills: ["Azure", "AWS", "Azure Functions", "Azure Storage", "EC2", "S3", "CloudWatch"],
    },
    {
      icon: Database,
      title: "Bases de Datos",
      skills: ["SQL Server", "Oracle", "PostgreSQL", "Azure SQL"],
    },
    {
      icon: Layers,
      title: "Integración y Microservicios",
      skills: ["WSO2 ESB", "REST APIs", "SOAP", "XML", "JSON", "Microservicios"],
    },
    {
      icon: GitBranch,
      title: "DevOps",
      skills: ["Azure DevOps", "Git", "CI/CD", "Docker", "Kubernetes", "YAML Pipelines"],
    },
    {
      icon: Settings,
      title: "BPM",
      skills: ["Bizagi", "Oracle BPM", "Kofax Total Agility", "Automatización de Procesos"],
    },
    {
      icon: Users,
      title: "Gestión de Proyectos",
      skills: ["PMI", "PMBOK", "Scrum", "Kanban", "Jira", "Confluence", "MS Project"],
    },
  ]

  const competencies = [
    "Liderazgo técnico y funcional",
    "Comunicación asertiva",
    "Pensamiento sistémico y analítico",
    "Capacidad para trabajar bajo presión",
    "Toma de decisiones estratégicas",
    "Planeación y ejecución efectiva",
    "Alto nivel de documentación",
    "Trabajo en equipo",
  ]

  return (
    <section className="py-24 px-4 bg-muted/30">
      <div className="max-w-6xl mx-auto space-y-16">
        <div className="text-center space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold">Habilidades Técnicas</h2>
          <div className="w-20 h-1 bg-primary mx-auto" />
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {skillCategories.map((category, index) => (
            <Card key={index} className="p-6 hover:shadow-lg transition-shadow">
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <category.icon className="w-5 h-5 text-primary" />
                  </div>
                  <h3 className="font-bold text-lg">{category.title}</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, i) => (
                    <Badge key={i} variant="secondary" className="text-xs font-medium">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </div>
            </Card>
          ))}
        </div>

        <div className="pt-8">
          <Card className="p-8">
            <h3 className="font-bold text-2xl mb-6 text-center">Competencias Profesionales</h3>
            <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-4">
              {competencies.map((comp, index) => (
                <div key={index} className="flex items-start gap-2">
                  <span className="text-accent mt-1">✓</span>
                  <span className="text-sm text-muted-foreground leading-relaxed">{comp}</span>
                </div>
              ))}
            </div>
          </Card>
        </div>
      </div>
    </section>
  )
}
