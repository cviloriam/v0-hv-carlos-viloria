"use client"

import { useLanguage } from "@/contexts/language-context"
import { Card } from "@/components/ui/card"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Mail, MapPin, Clock, MessageSquare, Linkedin, Calendar, FileText } from "lucide-react"

export default function ContactPage() {
  const { t } = useLanguage()

  const contactMethods = [
    {
      icon: Mail,
      label: t.contact.buttons.email,
      description: t.contact.buttons.emailDesc,
      href: "mailto:hola@cviloriam.com",
      color: "from-blue-500 to-cyan-500",
    },
    {
      icon: MessageSquare,
      label: t.contact.buttons.whatsapp,
      description: t.contact.buttons.whatsappDesc,
      href: "https://wa.me/573016356506",
      color: "from-green-500 to-emerald-500",
    },
    {
      icon: Linkedin,
      label: t.contact.buttons.linkedin,
      description: t.contact.buttons.linkedinDesc,
      href: "https://www.linkedin.com/in/cviloriam",
      color: "from-blue-600 to-blue-700",
    },
    {
      icon: FileText,
      label: t.contact.buttons.googleForm,
      description: t.contact.buttons.googleFormDesc,
      href: "https://forms.gle/owQW37tS7xvEtLjX9",
      color: "from-purple-500 to-pink-500",
    },
    {
      icon: Calendar,
      label: t.contact.buttons.calendly,
      description: t.contact.buttons.calendlyDesc,
      href: "https://calendly.com/your-calendly-link",
      color: "from-orange-500 to-red-500",
    },
  ]

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <main className="pt-24 pb-16">
        <div className="container mx-auto px-4 max-w-6xl">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
              {t.contact.title}
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">{t.contact.subtitle}</p>
          </div>

          <div className="grid md:grid-cols-5 gap-8">
            <div className="md:col-span-3 space-y-4">
              {contactMethods.map((method, index) => {
                const Icon = method.icon
                return (
                  <Card
                    key={index}
                    className="p-6 bg-card/50 backdrop-blur border-border hover:border-primary/50 transition-all duration-300 group"
                  >
                    <a href={method.href} target="_blank" rel="noopener noreferrer" className="flex items-start gap-4">
                      <div
                        className={`p-3 rounded-xl bg-gradient-to-br ${method.color} group-hover:scale-110 transition-transform duration-300`}
                      >
                        <Icon className="h-6 w-6 text-white" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-lg font-semibold mb-1 group-hover:text-primary transition-colors">
                          {method.label}
                        </h3>
                        <p className="text-sm text-muted-foreground">{method.description}</p>
                      </div>
                      <div className="text-muted-foreground group-hover:text-primary transition-colors">
                        <svg
                          className="h-5 w-5"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </div>
                    </a>
                  </Card>
                )
              })}
            </div>

            {/* Contact Info */}
            <Card className="md:col-span-2 p-6 bg-gradient-to-br from-primary/10 to-accent/10 backdrop-blur border-border">
              <h3 className="text-xl font-semibold mb-6">{t.contact.info.title}</h3>

              <div className="space-y-6">
                <p className="text-muted-foreground leading-relaxed">{t.contact.info.description}</p>

                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="mt-1 p-2 rounded-lg bg-primary/10">
                      <MapPin className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <p className="font-medium mb-1">Location</p>
                      <p className="text-sm text-muted-foreground">{t.contact.info.location}</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="mt-1 p-2 rounded-lg bg-accent/10">
                      <Clock className="h-5 w-5 text-accent" />
                    </div>
                    <div>
                      <p className="font-medium mb-1">Availability</p>
                      <p className="text-sm text-muted-foreground">{t.contact.info.availability}</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="mt-1 p-2 rounded-lg bg-primary/10">
                      <Mail className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <p className="font-medium mb-1">Email</p>
                      <a href="mailto:hola@cviloriam.com" className="text-sm text-primary hover:underline">
                        hola@cviloriam.com
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
