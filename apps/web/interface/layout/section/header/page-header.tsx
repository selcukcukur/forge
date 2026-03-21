import React from "react"

interface PageHeaderProps {
  subtitle?: string
  title: string
  highlight?: string
  description?: string
}

export function PageHeader({
  subtitle,
  title,
  highlight,
  description,
}: PageHeaderProps) {
  return (
    <section className="px-4 sm:px-6 pt-32 pb-16 sm:pt-40 sm:pb-20">
      <div className="mx-auto max-w-sc">
        <div className="space-y-4 animate-fade-in-up">
          {subtitle && (
            <p className="font-mono text-xs uppercase tracking-[0.25em] sm:tracking-[0.35em] text-primary">
              {subtitle}
            </p>
          )}
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl text-balance">
            {title}{" "}
            <span className="bg-gradient-to-l from-primary/50 to-accent text-transparent bg-clip-text">
              {highlight}
            </span>
          </h1>
          {description && (
            <p className="max-w-2xl text-base sm:text-lg text-muted-foreground leading-relaxed">
              {description}
            </p>
          )}
        </div>
      </div>
    </section>
  )
}
