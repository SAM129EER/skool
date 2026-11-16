import React from "react"
import Link from "next/link"
import { cn } from "@/lib/utils"

interface SkoolLogoProps {
  className?: string
  showText?: boolean
  showBadge?: boolean
  size?: "sm" | "md" | "lg"
  href?: string
}

export function SkoolLogo({
  className,
  showText = true,
  showBadge = true,
  size = "md",
  href,
}: SkoolLogoProps) {
  const iconSizes = {
    sm: "size-7 rounded-lg",
    md: "size-9 rounded-xl",
    lg: "size-11 rounded-2xl",
  }

  const svgSizes = {
    sm: "size-4",
    md: "size-5",
    lg: "size-6",
  }

  const textSizes = {
    sm: "text-base font-bold",
    md: "text-lg font-bold tracking-tight",
    lg: "text-2xl font-bold tracking-tight",
  }

  const badgeSizes = {
    sm: "text-[9px] px-1.5 py-0.2",
    md: "text-[10px] px-1.5 py-0.5",
    lg: "text-xs px-2 py-0.5",
  }

  const content = (
    <div
      className={cn(
        "group inline-flex items-center gap-2.5 select-none",
        className
      )}
    >
      {/* Logo Mark: Minimalist High-Contrast Emblem with subtle accent */}
      <div
        className={cn(
          "relative flex items-center justify-center border border-foreground/10 bg-foreground text-background shadow-xs transition-transform duration-200 group-hover:scale-105",
          iconSizes[size]
        )}
      >
        {/* Geometric minimalist LMS mark */}
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className={svgSizes[size]}
        >
          {/* Graduation mortarboard top */}
          <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
          {/* Scroll / Foundation arch */}
          <path d="M6 12v5c3 3 9 3 12 0v-5" />
        </svg>

        {/* Subtle accent dot on top-right of emblem */}
        <span className="absolute -top-0.5 -right-0.5 size-2 rounded-full border-2 border-background bg-foreground" />
      </div>

      {showText && (
        <div className="flex items-center gap-1.5">
          <span
            className={cn(
              "font-bold tracking-tight text-foreground",
              textSizes[size]
            )}
          >
            skool
          </span>
          {showBadge && (
            <span
              className={cn(
                "rounded-md border border-border bg-muted/60 font-mono font-medium tracking-wider text-muted-foreground uppercase",
                badgeSizes[size]
              )}
            >
              lms
            </span>
          )}
        </div>
      )}
    </div>
  )

  if (href) {
    return (
      <Link
        href={href}
        className="inline-flex items-center rounded-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-ring"
      >
        {content}
      </Link>
    )
  }

  return content
}
