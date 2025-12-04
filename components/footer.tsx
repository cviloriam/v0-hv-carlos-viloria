"use client"

import { Linkedin, Instagram, Youtube, Github, Facebook } from "lucide-react"
import { useLanguage } from "@/contexts/language-context"

export function Footer() {
  const { t } = useLanguage()

  const socialLinks = [
    {
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/cviloriam",
      icon: Linkedin,
    },
    {
      name: "X",
      url: "https://x.com/cviloriam",
      icon: ({ className }: { className?: string }) => (
        <svg className={className} viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
        </svg>
      ),
    },
    {
      name: "Instagram",
      url: "https://www.instagram.com/cviloriam",
      icon: Instagram,
    },
    {
      name: "Threads",
      url: "https://www.threads.com/@cviloriam",
      icon: ({ className }: { className?: string }) => (
        <svg className={className} viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
          <path d="M12.186 3.001c-3.26 0-5.996 2.735-5.996 5.996v5.005c0 3.26 2.735 5.996 5.996 5.996s5.996-2.735 5.996-5.996V9.997c0-3.26-2.735-5.996-5.996-5.996zm0 1.5c2.436 0 4.496 2.06 4.496 4.496v5.005c0 2.436-2.06 4.496-4.496 4.496s-4.496-2.06-4.496-4.496V9.997c0-2.436 2.06-4.496 4.496-4.496z" />
          <path d="M15.5 9c-.83 0-1.5.67-1.5 1.5 0 .28.22.5.5.5s.5-.22.5-.5c0-.28.22-.5.5-.5s.5.22.5.5-.22.5-.5.5-.5.22-.5.5v2c0 .83.67 1.5 1.5 1.5s1.5-.67 1.5-1.5v-2c0-1.38-1.12-2.5-2.5-2.5z" />
        </svg>
      ),
    },
    {
      name: "YouTube",
      url: "https://www.youtube.com/@cviloriam_oficial",
      icon: Youtube,
    },
    {
      name: "TikTok",
      url: "https://www.tiktok.com/@cviloriam_oficial",
      icon: ({ className }: { className?: string }) => (
        <svg className={className} viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
          <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z" />
        </svg>
      ),
    },
    {
      name: "GitHub",
      url: "https://github.com/cviloriam",
      icon: Github,
    },
    {
      name: "GitLab",
      url: "https://gitlab.com/cviloriam",
      icon: ({ className }: { className?: string }) => (
        <svg className={className} viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
          <path d="M23.6 9.6l-.1-.3-3.1-8a.9.9 0 0 0-.8-.6.9.9 0 0 0-.8.6l-2.1 6.3H7.3L5.2 1.3a.9.9 0 0 0-.8-.6.9.9 0 0 0-.8.6l-3 8-.2.3a6.5 6.5 0 0 0 2.6 7.5l.1.1.3.2 4.9 3.6 2.4 1.8 1.5 1.1a1 1 0 0 0 1.2 0l1.5-1.1 2.4-1.8 5.2-3.8.1-.1a6.5 6.5 0 0 0 2.6-7.5z" />
        </svg>
      ),
    },
    {
      name: "Facebook",
      url: "https://www.facebook.com/cviloriam",
      icon: Facebook,
    },
  ]

  return (
    <footer id="contacto" className="border-t border-border bg-background">
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col items-center gap-6">
          <div className="flex flex-wrap justify-center gap-6">
            {socialLinks.map((social) => {
              const Icon = social.icon
              return (
                <a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex h-10 w-10 items-center justify-center rounded-full bg-muted transition-all hover:bg-primary hover:scale-110"
                  aria-label={social.name}
                >
                  <Icon className="h-5 w-5 text-muted-foreground group-hover:text-primary-foreground transition-colors" />
                </a>
              )
            })}
          </div>
          <div className="text-center text-sm text-muted-foreground">
            <p>
              © {new Date().getFullYear()} Carlos Viloria. {t.footer.rights}
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
