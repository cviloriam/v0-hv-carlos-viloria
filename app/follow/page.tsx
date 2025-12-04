"use client"

import { useLanguage } from "@/contexts/language-context"
import { Card } from "@/components/ui/card"
import Navbar from "@/components/navbar"
import { Linkedin, Instagram, Youtube, Github, GitBranch, Facebook, Globe, Twitch } from "lucide-react"

export default function FollowPage() {
  const { t, language } = useLanguage()

  const socialLinks = [
    {
      name: "Website",
      nameEs: "Sitio Web",
      url: "https://www.cviloriam.com",
      icon: Globe,
      color: "from-blue-500 to-cyan-500",
    },
    {
      name: "LinkedIn",
      nameEs: "LinkedIn",
      url: "https://www.linkedin.com/in/cviloriam",
      icon: Linkedin,
      color: "from-blue-600 to-blue-700",
    },
    {
      name: "X (Twitter)",
      nameEs: "X (Twitter)",
      url: "https://x.com/cviloriam",
      customIcon: (
        <svg viewBox="0 0 24 24" className="h-8 w-8 text-white" fill="currentColor">
          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
        </svg>
      ),
      color: "from-slate-700 to-slate-900",
    },
    {
      name: "Instagram",
      nameEs: "Instagram",
      url: "https://www.instagram.com/cviloriam",
      icon: Instagram,
      color: "from-pink-500 via-purple-500 to-orange-500",
    },
    {
      name: "Threads",
      nameEs: "Threads",
      url: "https://www.threads.com/@cviloriam",
      customIcon: (
        <svg viewBox="0 0 192 192" className="h-8 w-8 text-white" fill="currentColor">
          <path d="M141.537 88.988a66.667 66.667 0 0 0-2.518-1.143c-1.482-27.307-16.403-42.94-41.457-43.1h-.34c-14.986 0-27.449 6.396-35.12 18.036l13.779 9.452c5.73-8.695 14.924-10.666 21.362-10.666h.23c6.756.052 11.836 1.822 15.097 5.264 2.65 2.8 4.43 6.777 5.294 11.868a82.893 82.893 0 0 0-13.116-1.045c-22.202 0-37.062 10.17-37.062 25.37 0 7.362 3.093 13.906 8.71 18.433 5.285 4.264 12.452 6.61 20.17 6.61 12.446 0 21.685-4.675 28.031-14.191 5.254-7.875 7.901-18.619 8.124-32.91a99.493 99.493 0 0 1 7.856 3.668c8.386 4.483 13.718 10.757 15.837 18.654 2.046 7.623.816 16.573-3.566 25.922-4.676 9.98-12.596 18.038-22.895 23.302-10.092 5.16-21.36 7.773-33.494 7.773-21.654 0-39.298-7.311-50.971-21.126C8.26 141.064 2.496 121.38 2.475 98.233c0-23.287 5.792-42.925 17.214-58.387C31.164 23.786 48.068 15.514 68.2 15.514c20.134 0 37.038 8.272 48.514 24.334 11.422 15.462 17.214 35.1 17.214 58.387v.102h15.943c.007-24.154-6.142-45.135-18.275-62.356C118.644 16.06 97.59 6.574 68.2 6.574c-29.387 0-50.44 9.486-62.518 28.185C-6.397 51.98.499 74.564.499 98.233c.02 24.902 6.296 46.423 18.653 64.009 12.703 18.07 31.806 27.24 56.785 27.24 13.392 0 26.043-2.826 37.607-8.397 11.417-5.505 20.775-14.667 26.335-25.789 5.368-10.742 6.979-21.696 4.621-31.48-2.498-10.36-9.078-18.858-19.563-25.27Z" />
        </svg>
      ),
      color: "from-slate-800 to-slate-950",
    },
    {
      name: "YouTube",
      nameEs: "YouTube",
      url: "https://www.youtube.com/@cviloriam_oficial",
      icon: Youtube,
      color: "from-red-600 to-red-700",
    },
    {
      name: "TikTok",
      nameEs: "TikTok",
      url: "https://www.tiktok.com/@cviloriam_oficial",
      customIcon: (
        <svg viewBox="0 0 24 24" className="h-8 w-8 text-white" fill="currentColor">
          <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z" />
        </svg>
      ),
      color: "from-pink-500 to-cyan-500",
    },
    {
      name: "WhatsApp",
      nameEs: "WhatsApp",
      url: "http://wa.me/+573016356506",
      customIcon: (
        <svg viewBox="0 0 24 24" className="h-8 w-8 text-white" fill="currentColor">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
        </svg>
      ),
      color: "from-green-500 to-green-600",
    },
    {
      name: "Telegram",
      nameEs: "Telegram",
      url: "https://t.me/cviloriam",
      customIcon: (
        <svg viewBox="0 0 24 24" className="h-8 w-8 text-white" fill="currentColor">
          <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z" />
        </svg>
      ),
      color: "from-blue-400 to-blue-600",
    },
    {
      name: "GitHub",
      nameEs: "GitHub",
      url: "https://github.com/cviloriam",
      icon: Github,
      color: "from-slate-700 to-slate-900",
    },
    {
      name: "GitLab",
      nameEs: "GitLab",
      url: "https://gitlab.com/cviloriam",
      icon: GitBranch,
      color: "from-orange-600 to-red-600",
    },
    {
      name: "Linktree",
      nameEs: "Linktree",
      url: "https://linktr.ee/cviloriam",
      customIcon: (
        <svg viewBox="0 0 24 24" className="h-8 w-8 text-white" fill="currentColor">
          <path d="M13.73 4.5h6.82l-7.63 7.62 7.63 7.63h-6.82l-4.41-4.41-4.41 4.41H2.45l7.63-7.63L2.45 4.5h6.82l4.41 4.41 4.41-4.41z" />
          <path d="M12 7.29V2h2.86v7.29H12zm0 12.42v-5.29h2.86v7.29H12z" />
        </svg>
      ),
      color: "from-green-500 to-emerald-600",
    },
    {
      name: "Kick",
      nameEs: "Kick",
      url: "https://kick.com/cviloriam",
      customIcon: (
        <svg viewBox="0 0 512 512" className="h-8 w-8 text-white" fill="currentColor">
          <path d="M0 0h512v512H0z" fill="#53fc18" />
          <path d="M160 96h64v128l128-128h96L288 256l160 160h-96L224 288v128h-64z" fill="#000" />
        </svg>
      ),
      color: "from-green-400 to-green-500",
    },
    {
      name: "Twitch",
      nameEs: "Twitch",
      url: "https://www.twitch.tv/cviloriam",
      icon: Twitch,
      color: "from-purple-600 to-purple-700",
    },
    {
      name: "Facebook",
      nameEs: "Facebook",
      url: "https://www.facebook.com/cviloriam",
      icon: Facebook,
      color: "from-blue-600 to-blue-700",
    },
  ]

  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-background pt-24 pb-16">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              {language === "es" ? "Sígueme en mis redes" : "Follow Me on Social Media"}
            </h1>
            <p className="text-lg text-muted-foreground">
              {language === "es"
                ? "Conéctate conmigo en tus plataformas favoritas"
                : "Connect with me on your favorite platforms"}
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {socialLinks.map((social, index) => {
              const Icon = social.icon
              return (
                <a key={index} href={social.url} target="_blank" rel="noopener noreferrer" className="group">
                  <Card className="p-6 hover:shadow-xl transition-all duration-300 hover:scale-105 cursor-pointer border-2 hover:border-primary/50">
                    <div className="flex flex-col items-center text-center gap-4">
                      <div
                        className={`w-16 h-16 rounded-full bg-gradient-to-br ${social.color} flex items-center justify-center shadow-lg group-hover:shadow-2xl transition-shadow`}
                      >
                        {social.customIcon ? social.customIcon : <Icon className="h-8 w-8 text-white" />}
                      </div>
                      <div>
                        <h3 className="font-bold text-lg group-hover:text-primary transition-colors">
                          {language === "es" ? social.nameEs : social.name}
                        </h3>
                        <p className="text-sm text-muted-foreground mt-1">@cviloriam</p>
                      </div>
                    </div>
                  </Card>
                </a>
              )
            })}
          </div>
        </div>
      </div>
    </>
  )
}
