import React from "react";
import Link from "next/link";
import { cn } from "@obvia/utilities";

type NavItem = {
  label: string;
  href: string;
};

interface NavigationDesktopProps {
  navItems: NavItem[];
  hoveredIndex: number | null;
  setHoveredIndex: (index: number | null) => void;
  isActive: (href: string) => boolean;
}

export function Navigation({
                                    navItems,
                                    hoveredIndex,
                                    setHoveredIndex,
                                    isActive,
                                  }: NavigationDesktopProps) {
  return (
    <div className="hidden items-center gap-1 md:flex">
      {navItems.map((item, index) => (
        <Link
          key={item.label}
          href={item.href}
          className={cn(
            "relative px-4 py-2.5 font-mono text-xs uppercase tracking-widest transition-all duration-300 rounded-lg",
            isActive(item.href)
              ? "text-primary bg-secondary/50"
              : "text-muted-foreground hover:text-foreground hover:bg-secondary/50",
            hoveredIndex === index && !isActive(item.href) && "text-foreground",
          )}
          onMouseEnter={() => setHoveredIndex(index)}
          onMouseLeave={() => setHoveredIndex(null)}
        >
          <span
            className={cn(
              "transition-transform duration-200",
              (hoveredIndex === index || isActive(item.href)) && "translate-x-2",
            )}
          >
            {item.label}
          </span>
          <span
            className={cn(
              "absolute bottom-1 left-1/2 -translate-x-1/2 h-0.5 bg-primary rounded-full transition-all duration-300",
              isActive(item.href) ? "w-6" : hoveredIndex === index ? "w-6" : "w-0",
            )}
          />
        </Link>
      ))}
      <div className="ml-2 flex items-center gap-1">
        {/* Ekstra butonlar veya sosyal ikonlar buraya eklenebilir */}
      </div>
    </div>
  );
}
