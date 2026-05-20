import { FooterHero } from "interface/layout/section/footer/footer-hero"
import { FooterHeart } from "interface/layout/section/footer/footer-heart"
import { FooterInspiring } from "interface/layout/section/footer/footer-inspiring"

export function Footer() {
  return (
    // Footer
    <footer className="border-t border-border/30 px-4 sm:px-6 py-20 sm:py-28">
      {/* Section */}
      <div className="mx-auto max-w-7xl">
        {/* Hero */}
        <FooterHero />

        {/* Footer */}
        <div className="mt-16 sm:mt-20 flex flex-col items-center justify-between gap-6 border-t border-border/30 pt-8 sm:pt-10 sm:flex-row animate-fade-in stagger-4">
          {/* Made with information */}
          <FooterHeart />

          {/* Inspire informations */}
          <FooterInspiring />

          {/* Copyright information */}
          <p className="text-xs text-muted-foreground text-center sm:text-right">
            all experiments & ideas reserved
          </p>
        </div>
      </div>
    </footer>
  )
}
