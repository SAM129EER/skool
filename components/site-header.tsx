"use client"

import React from "react"
import Link from "next/link"

import { ThemeToggle } from "@/components/theme-toggle"
import { buttonVariants } from "@/components/ui/button"
import { cn } from "@/lib/utils"

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/70 bg-background/85 backdrop-blur-md transition-colors duration-300">
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.03] dark:opacity-[0.05]"
        style={{
          backgroundImage: `radial-gradient(currentColor 1px, transparent 1px)`,
          backgroundSize: "28px 28px",
        }}
      />
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Brand Logo with subtle accent */}
        <div className="flex items-center gap-6">
          skool
        </div>

        {/* Right Actions: Theme Toggle + Auth Buttons */}
        <div className="flex items-center gap-2 sm:gap-3">
          {/* Sign In Button */}
          <Link
            href="/signin"
            className={cn(
              buttonVariants({ variant: "ghost", size: "sm" }),
              "cursor-pointer text-xs font-medium hover:bg-muted sm:text-sm"
            )}
          >
            Sign in
          </Link>

          {/* Sign Up / Get Started Button */}
          <Link
            href="/signup"
            className={cn(
              buttonVariants({ variant: "default", size: "sm" }),
              "cursor-pointer text-xs font-medium shadow-xs sm:text-sm"
            )}
          >
            Get Started
          </Link>

          {/* Light / Dark Mode Toggle */}
          <ThemeToggle />
        </div>
      </div>
    </header>
  )
}
