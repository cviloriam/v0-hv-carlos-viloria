import { Card } from "@/components/ui/card"
import { Briefcase, Code2, Rocket, Users } from "lucide-react"

export function AboutSection() {
  const highlights = [
    {
      icon: Briefcase,
      title: "Líder de Proyectos TI",
      description: "Gestión de proyectos estratégicos bajo PMI, PMBOK y metodologías ágiles",
    },
    {
      icon: Code2,
      title: "Arquitecto de Soluciones",
      description: "Diseño e implementación de soluciones empresariales en .NET, Java, Azure",
    },
    {
      icon: Rocket,
      title: "Transformación Digital",
      description: "BPM, automatización de procesos y políticas de cero papel",
    },
    {
      icon: Users,
      title: "Gestión Documental ECM",
      description: "Especialista en IBM FileNet P8, Kofax y sistemas de gestión documental",
    },
  ]

  return (
    <section className="py-24 px-4 bg-muted/30">
      <div className="max-w-6xl mx-auto space-y-16">
        <div className="text-center space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold">Perfil Profesional</h2>
          <div className="w-20 h-1 bg-primary mx-auto" />
        </div>

        <div className="max-w-4xl mx-auto space-y-6 text-lg text-muted-foreground leading-relaxed">
          <p>
            Profesional Máster en Tecnologías de la Información e Ingeniero de Sistemas, con más de{" "}
            <span className="text-foreground font-semibold">19 años de experiencia</span> liderando proyectos
            estratégicos de TI en el sector público y privado. Especialista en gestión documental, automatización de
            procesos, arquitectura de soluciones y desarrollo de software.
          </p>
          <p>
            Reconocido por mi expertise técnico, liderazgo funcional y visión estratégica, con capacidad de articular
            áreas misionales, PMO, seguridad, proveedores externos y equipos técnicos para convertir necesidades
            institucionales en{" "}
            <span className="text-foreground font-semibold">
              soluciones tecnológicas robustas, escalables y alineadas
            </span>{" "}
            con estándares de Gobierno Digital y el SIG.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 pt-8">
          {highlights.map((item, index) => (
            <Card key={index} className="p-6 hover:shadow-lg transition-shadow border-border/50">
              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                    <item.icon className="w-6 h-6 text-primary" />
                  </div>
                </div>
                <div className="space-y-2">
                  <h3 className="font-semibold text-lg">{item.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{item.description}</p>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
