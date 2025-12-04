"use client"

import type React from "react"

import { useState } from "react"
import { useLanguage } from "@/contexts/language-context"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Mail, MapPin, Clock, Send, CheckCircle2, AlertCircle } from "lucide-react"

export default function ContactPage() {
  const { t } = useLanguage()
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle")

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus("sending")

    // Simulate form submission
    setTimeout(() => {
      setStatus("success")
      setFormData({ name: "", email: "", subject: "", message: "" })

      // Reset status after 5 seconds
      setTimeout(() => setStatus("idle"), 5000)
    }, 1500)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }))
  }

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
            {/* Contact Form */}
            <Card className="md:col-span-3 p-6 md:p-8 bg-card/50 backdrop-blur border-border">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="name">{t.contact.form.name}</Label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder={t.contact.form.namePlaceholder}
                      required
                      className="bg-background/50"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email">{t.contact.form.email}</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder={t.contact.form.emailPlaceholder}
                      required
                      className="bg-background/50"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="subject">{t.contact.form.subject}</Label>
                  <Input
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder={t.contact.form.subjectPlaceholder}
                    required
                    className="bg-background/50"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message">{t.contact.form.message}</Label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder={t.contact.form.messagePlaceholder}
                    required
                    rows={6}
                    className="bg-background/50 resize-none"
                  />
                </div>

                {status === "success" && (
                  <div className="flex items-center gap-2 text-green-500 bg-green-500/10 p-4 rounded-lg border border-green-500/20">
                    <CheckCircle2 className="h-5 w-5" />
                    <p className="text-sm">{t.contact.form.success}</p>
                  </div>
                )}

                {status === "error" && (
                  <div className="flex items-center gap-2 text-red-500 bg-red-500/10 p-4 rounded-lg border border-red-500/20">
                    <AlertCircle className="h-5 w-5" />
                    <p className="text-sm">{t.contact.form.error}</p>
                  </div>
                )}

                <Button type="submit" size="lg" className="w-full" disabled={status === "sending"}>
                  {status === "sending" ? (
                    <>
                      <div className="h-4 w-4 border-2 border-current border-t-transparent rounded-full animate-spin mr-2" />
                      {t.contact.form.sending}
                    </>
                  ) : (
                    <>
                      <Send className="h-4 w-4 mr-2" />
                      {t.contact.form.submit}
                    </>
                  )}
                </Button>
              </form>
            </Card>

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
                      <a href="mailto:contacto@carlosviloria.com" className="text-sm text-primary hover:underline">
                        contacto@carlosviloria.com
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
