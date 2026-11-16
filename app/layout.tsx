import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { cn } from "@/lib/utils"

export const metadata = {
  title: "Skool LMS - Minimalist Learning Management System",
  description:
    "Modern, high-performance learning platform for educators and students.",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={cn("font-sans antialiased")}
    >
      <body className="min-h-screen bg-background text-foreground antialiased selection:bg-foreground selection:text-background">
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  )
}
