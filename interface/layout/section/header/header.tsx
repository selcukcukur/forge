"use client"

import { useState, useEffect } from "react"
import { usePathname } from "next/navigation"
import { cn } from "@obvia/utilities"

import Link from "next/link"

import { socialAccounts } from "@config/site"
import { Navigation, NavigationMobile } from "@interface/components"

const navItems = [
  { label: "Home", href: "/" },
  { label: "Projects", href: "#" },
  { label: "Notes", href: "#" },
  { label: "Workbench", href: "#" },
  { label: "Blog", href: "/blog" },
]

export function Header() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
        isScrolled ? "border-b border-border/50 bg-background/80 backdrop-blur-xl shadow-sm" : "bg-transparent",
      )}
    >
      <div className="mx-auto max-w-sc px-4 sm:px-6 py-4">
        <nav className="flex items-center justify-between">
          <Link href="/" className="group flex items-center gap-3">
            <div className="relative flex h-9 w-9 items-center justify-center rounded-lg border border-primary/50 bg-primary/10 font-mono text-sm text-primary transition-all duration-400 group-hover:border-primary group-hover:bg-primary group-hover:text-primary-foreground group-hover:scale-105 group-hover:shadow-lg group-hover:shadow-primary/25">
              <span className="glitch">{"⚡"}</span>
            </div>
            <span className="font-mono text-sm tracking-tight">
              S
              <span className="bg-linear-to-l from-primary/50 to-accent bg-clip-text text-transparent font-semibold">
                CODE
              </span>
            </span>
          </Link>

          {/* Desktop Navigation */}
          <Navigation
            navItems={navItems}
            hoveredIndex={hoveredIndex}
            setHoveredIndex={setHoveredIndex}
            isActive={(href) => usePathname() === href}
          />

          <div className="flex items-center gap-4">
            <div className="hidden items-center gap-1 sm:flex">
              <button
                className="group relative flex h-9 w-9 items-center justify-center rounded-lg text-muted-foreground transition-all duration-300 hover:text-primary hover:bg-primary/10 cursor-pointer"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                     stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="size-4.5">
                  <path d="M2 3v18"></path>
                  <rect width="12" height="18" x="6" y="3" rx="2"></rect>
                  <path d="M22 3v18"></path>
                </svg>
              </button>

              <button
                className="group relative flex h-9 w-9 items-center justify-center rounded-lg text-muted-foreground transition-all duration-300 hover:text-primary hover:bg-primary/10 cursor-pointer"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                     stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="size-4.5">
                  <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                  <path d="M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0"></path>
                  <path d="M12 3l0 18"></path>
                  <path d="M12 9l4.65 -4.65"></path>
                  <path d="M12 14.3l7.37 -7.37"></path>
                  <path d="M12 19.6l8.85 -8.85"></path>
                </svg>

              </button>
            </div>

            <div className="hidden h-5 w-px bg-border sm:block"/>

            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="flex h-10 w-10 items-center justify-center rounded-lg border border-border bg-card/50 md:hidden transition-colors hover:bg-secondary"
              aria-label="Toggle menu"
            >
              <div className="flex flex-col gap-1.5 w-5">
                <span
                  className={cn(
                    "h-0.5 bg-foreground transition-all duration-300 origin-center",
                    isMobileMenuOpen ? "w-5 translate-y-2 rotate-45" : "w-5",
                  )}
                />
                <span
                  className={cn(
                    "h-0.5 w-3.5 bg-foreground transition-all duration-300",
                    isMobileMenuOpen && "opacity-0 translate-x-2",
                  )}
                />
                <span
                  className={cn(
                    "h-0.5 bg-foreground transition-all duration-300 origin-center",
                    isMobileMenuOpen ? "w-5 -translate-y-2 -rotate-45" : "w-5",
                  )}
                />
              </div>
            </button>
          </div>
        </nav>

        {/* Mobile Menu */}
        <NavigationMobile
          navItems={navItems}
          socialAccounts={socialAccounts}
          isMobileMenuOpen={isMobileMenuOpen}
          setIsMobileMenuOpen={setIsMobileMenuOpen}
        />
      </div>
    </header>
  )
}
