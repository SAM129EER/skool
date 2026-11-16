import React from "react"
import { ThemeToggle } from "@/components/theme-toggle"

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="relative flex min-h-screen flex-col items-center justify-center bg-background p-4 selection:bg-foreground selection:text-background sm:p-6">
      {/* Subtle minimalist background pattern */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.03] dark:opacity-[0.05]"
        style={{
          backgroundImage: `radial-gradient(currentColor 1px, transparent 1px)`,
          backgroundSize: "24px 24px",
        }}
      />

      {/* Top bar with quick theme toggle */}
      <header className="absolute top-4 right-4 z-20 sm:top-6 sm:right-6">
        <ThemeToggle />
      </header>

      {/* Auth Card Container */}
      <main className="relative z-10 w-full max-w-md">{children}</main>

      {/* Minimal Footer Note */}
      <footer className="relative z-10 mt-8 text-center text-xs text-muted-foreground">
        <p>© {new Date().getFullYear()} Skool LMS. Simple, focused learning.</p>
      </footer>
    </div>
  )
}
