import { socialAccounts } from "@config/site"
import { ExternalLink } from "lucide-react"

import type { SocialAccount } from "@library/type/site"

export function FooterHero() {
  return (
    <div className="grid gap-12 sm:gap-16 lg:grid-cols-2">
      {/* Left column */}
      <div className="space-y-6 sm:space-y-8 animate-fade-in-up">
        {/* Header */}
        <div className="space-y-3">
          {/* Subtitle */}
          <p className="font-mono text-xs uppercase tracking-[0.25em] sm:tracking-[0.35em] text-primary">Connect</p>

          {/* Title */}
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl text-balance">
            {/* Text */}
            {"Let's build something "}

            {/* Expected */}
            <span className="bg-linear-to-l from-primary/50 to-accent text-transparent bg-clip-text">together</span>
          </h2>
        </div>

        {/* Description */}
        <p className="max-w-md text-base sm:text-lg font-light text-muted-foreground leading-relaxed">
          Always interested in collaborations, interesting
          problems, and conversations about code, design,
          and everything in between.
        </p>

        {/* Action */}
        <div className="pt-2">
          {/* Link */}
          <a href="mailto:hello@selcukcukur.me" className="group relative inline-flex items-center justify-center gap-3 overflow-hidden rounded-xl border border-primary bg-primary/10 px-8 py-4 sm:py-4 font-mono text-sm text-primary transition-all duration-500 hover:text-primary-foreground active:scale-[0.98] w-full sm:w-auto">
            {/* Text */}
            <span className="relative z-10">send a signal</span>

            {/* Arrow */}
            <span className="relative z-10 transition-transform duration-300 group-hover:translate-x-1">→</span>

            {/* Shape */}
            <span className="absolute inset-0 -translate-x-full bg-primary transition-transform duration-500 group-hover:translate-x-0" />
          </a>
        </div>
      </div>

      {/* Right column */}
      <div className="space-y-6 lg:text-right animate-fade-in-up stagger-2">
        {/* Slogan */}
        <p className="font-mono text-xs uppercase tracking-[0.25em] sm:tracking-[0.35em] text-muted-foreground">
          Find me elsewhere
        </p>

        {/* Accounts */}
        <div className="space-y-2">
          {/* Always visible first 3 accounts */}
          {socialAccounts
            .filter((link) => link.name !== "Facebook" && link.name !== "RSS")
            .map((link, index) => (
              <FooterAccount key={link.name} link={link} index={index} />
            ))}
        </div>
      </div>
    </div>
  )
}

function FooterAccount({
  link,
  index
}: {
  link: SocialAccount
  index: number
}) {
  return (
    <a
      key={link.name}
      href={link.href}
      target={link.name !== "E-Mail" ? "_blank" : undefined}
      rel={link.name !== "E-Mail" ? "noopener noreferrer" : undefined}
      className="group flex items-center justify-between gap-4 rounded-xl border border-transparent p-4 transition-all duration-300 lg:flex-row-reverse active:bg-secondary/30 hover:border-border/50 hover:bg-card/50 glass animate-fade-in"
      style={{ animationDelay: `${index * 100 + 400}ms` }}
    >
      <div className="flex items-center gap-3 lg:flex-row-reverse">
        {/* Icon */}
        <link.icon className="h-5 w-5 text-muted-foreground transition-all duration-300 group-hover:text-primary" />

        {/* External */}
        {link.name !== "E-Mail" && (
          <ExternalLink className="h-3 w-3 text-muted-foreground/50 opacity-0 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-1" />
        )}
      </div>

      {/* Slug */}
      <span className="font-mono text-xs text-muted-foreground truncate">{link.slug}</span>
    </a>
  )
}
