"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { ArrowLeft, Clock, Tag } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { useLanguage } from "@/contexts/language-context"
import { Navbar } from "@/components/navbar"
import { translations } from "@/lib/translations"
import { Footer } from "@/components/footer"

export default function BlogPage() {
  const { t } = useLanguage()
  const [selectedCategory, setSelectedCategory] = useState<string>("all")

  const filteredArticles =
    selectedCategory === "all"
      ? t.blog.articles
      : t.blog.articles.filter((article) => article.category === selectedCategory)

  const getArticleSlug = (articleId: number): string => {
    const slugMap: Record<number, string> = {
      1: "arquitectura-microservicios-nube",
      2: "scrum-master-facilitar-equipos-agiles",
      3: "blockchain-mas-alla-criptomonedas",
      4: "itil-v4-gestion-servicios-era-digital",
      5: "ia-generativa-desarrollo-software",
      6: "gestion-documental-ecm-filenet-p8",
      7: "azure-devops-pipeline-cicd-dotnet",
      8: "transformacion-digital-teoria-practica",
      9: "clean-architecture-aplicaciones-empresariales",
    }
    return slugMap[articleId] || "arquitectura-microservicios-nube"
  }

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <main className="container mx-auto px-4 pt-24 pb-16">
        {/* Header */}
        <div className="mb-12 text-center">
          <Link href="/">
            <Button variant="ghost" className="mb-6 flex items-center gap-2 mx-auto">
              <ArrowLeft className="h-4 w-4" />
              {t.blog.backToHome}
            </Button>
          </Link>

          <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
            {t.blog.title}
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">{t.blog.subtitle}</p>
        </div>

        {/* Category Filter */}
        <div className="mb-8">
          <p className="text-sm text-muted-foreground mb-3">{t.blog.filterBy}</p>
          <div className="flex flex-wrap gap-2">
            <Button
              variant={selectedCategory === "all" ? "default" : "outline"}
              size="sm"
              onClick={() => setSelectedCategory("all")}
            >
              {t.blog.categories.all}
            </Button>
            <Button
              variant={selectedCategory === "technology" ? "default" : "outline"}
              size="sm"
              onClick={() => setSelectedCategory("technology")}
            >
              {t.blog.categories.technology}
            </Button>
            <Button
              variant={selectedCategory === "development" ? "default" : "outline"}
              size="sm"
              onClick={() => setSelectedCategory("development")}
            >
              {t.blog.categories.development}
            </Button>
            <Button
              variant={selectedCategory === "projectManagement" ? "default" : "outline"}
              size="sm"
              onClick={() => setSelectedCategory("projectManagement")}
            >
              {t.blog.categories.projectManagement}
            </Button>
            <Button
              variant={selectedCategory === "architecture" ? "default" : "outline"}
              size="sm"
              onClick={() => setSelectedCategory("architecture")}
            >
              {t.blog.categories.architecture}
            </Button>
            <Button
              variant={selectedCategory === "blockchain" ? "default" : "outline"}
              size="sm"
              onClick={() => setSelectedCategory("blockchain")}
            >
              {t.blog.categories.blockchain}
            </Button>
            <Button
              variant={selectedCategory === "agile" ? "default" : "outline"}
              size="sm"
              onClick={() => setSelectedCategory("agile")}
            >
              {t.blog.categories.agile}
            </Button>
          </div>
        </div>

        {/* Articles Grid */}
        {filteredArticles.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-muted-foreground">{t.blog.noResults}</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredArticles.map((article) => (
              <Card key={article.id} className="overflow-hidden hover:shadow-lg transition-shadow">
                <div className="relative h-48 w-full overflow-hidden">
                  <Image
                    src={article.image || "/placeholder.svg"}
                    alt={article.title}
                    fill
                    className="object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>

                <CardHeader>
                  <div className="flex items-center justify-between mb-2">
                    <Badge variant="secondary" className="text-xs">
                      {t.blog.categories[article.category as keyof typeof t.blog.categories]}
                    </Badge>
                    <div className="flex items-center gap-1 text-xs text-muted-foreground">
                      <Clock className="h-3 w-3" />
                      <span>
                        {article.readingTime} {t.blog.readingTime}
                      </span>
                    </div>
                  </div>

                  <CardTitle className="text-xl leading-tight hover:text-primary transition-colors">
                    {article.title}
                  </CardTitle>

                  <CardDescription className="text-sm">
                    {new Date(article.date).toLocaleDateString(t === translations.es ? "es-ES" : "en-US", {
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                    })}
                  </CardDescription>
                </CardHeader>

                <CardContent>
                  <p className="text-sm text-muted-foreground mb-4 line-clamp-3">{article.excerpt}</p>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {article.tags.map((tag, idx) => (
                      <Badge key={idx} variant="outline" className="text-xs flex items-center gap-1">
                        <Tag className="h-3 w-3" />
                        {tag}
                      </Badge>
                    ))}
                  </div>

                  <Button variant="ghost" className="w-full" asChild>
                    <Link href={`/blog/${getArticleSlug(article.id)}`}>{t.blog.readMore}</Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        )}
      </main>

      <Footer />
    </div>
  )
}
