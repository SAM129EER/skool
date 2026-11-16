"use client"

import * as React from "react"
import { useTheme } from "next-themes"
import { Moon, Sun } from "lucide-react"
import { Button } from "@/components/ui/button"

const emptySubscribe = () => () => {}

export function ThemeToggle({ className }: { className?: string }) {
  const { setTheme, resolvedTheme } = useTheme()
  const mounted = React.useSyncExternalStore(
    emptySubscribe,
    () => true,
    () => false
  )

  if (!mounted) {
    return (
      <Button
        variant="ghost"
        size="icon"
        className={`size-8 rounded-md text-muted-foreground ${className ?? ""}`}
        aria-label="Toggle theme"
      >
        <Sun className="size-4 opacity-50" />
      </Button>
    )
  }

  const isDark = resolvedTheme === "dark"

  return (
    <Button
      variant="ghost"
      size="icon"
      className={`size-8 cursor-pointer rounded-md text-muted-foreground transition-colors hover:text-foreground ${
        className ?? ""
      }`}
      onClick={() => setTheme(isDark ? "light" : "dark")}
      aria-label="Toggle theme"
      title={`Switch to ${isDark ? "light" : "dark"} mode`}
    >
      {isDark ? (
        <Sun className="size-4 scale-100 rotate-0 text-foreground transition-all" />
      ) : (
        <Moon className="size-4 scale-100 rotate-0 text-foreground transition-all" />
      )}
    </Button>
  )
}
