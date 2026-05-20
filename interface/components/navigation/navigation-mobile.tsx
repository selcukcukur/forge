import type { JSX } from "react"
import Link from "next/link"

import { cn } from "@obvia/utilities"

type NavItem = {
  label: string
  href: string
}

type SocialAccount = {
  // Account target (e.g. "Facebook")
  name?: string
  // Icon component or icon name (e.g. "ph:facebook-logo-duotone")
  icon?: JSX | string
  // Social media account URL
  href?: string
}

interface NavigationMobileProps {
  navItems: NavItem[];
  socialAccounts: SocialAccount[];
  isMobileMenuOpen: boolean;
  setIsMobileMenuOpen: (open: boolean) => void;
}

export function NavigationMobile({
                                   navItems,
                                   socialAccounts,
                                   isMobileMenuOpen,
                                   setIsMobileMenuOpen,
                                 }: NavigationMobileProps) {
  return (
    <div
      className={cn(
        "transition-all duration-400 md:hidden bg-background",
        isMobileMenuOpen ? "max-h-96 opacity-100 pt-4" : "max-h-0 opacity-0"
      )}
    >
      <div className="flex flex-col gap-1 border-t border-border/50 pt-4">
        {navItems.map((item, index) => (
          <Link
            key={item.label}
            href={item.href}
            onClick={() => setIsMobileMenuOpen(false)}
            className="flex items-center gap-3 rounded-lg px-4 py-3.5 font-mono text-sm uppercase tracking-widest text-muted-foreground transition-all duration-200 active:bg-secondary hover:text-foreground hover:bg-secondary/50"
            style={{ animationDelay: `${index * 50}ms` }}
          >
            <span className="text-primary">{">"}</span>
            {item.label}
          </Link>
        ))}

        <div className="mt-4 flex items-center gap-2 border-t border-border/50 pt-4 px-4">
          {socialAccounts.map((link) => (
            <a
              key={link.name}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={link.name}
              className="flex h-11 w-11 items-center justify-center rounded-lg border border-border/50 text-muted-foreground transition-colors active:bg-secondary hover:border-primary/50 hover:text-primary hover:bg-primary/10"
            >
              {link.icon && <link.icon className="h-4 w-4" />}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
