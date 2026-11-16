import Link from "next/link"
import {
  ArrowRight,
  Award,
  BarChart3,
  BookOpen,
  CheckCircle2,
  Play,
  ShieldCheck,
  Sparkles,
  Users,
} from "lucide-react"

import { SiteHeader } from "@/components/site-header"
import { SkoolLogo } from "@/components/skool-logo"
import { buttonVariants } from "@/components/ui/button"
import { cn } from "@/lib/utils"

export default function LandingPage() {
  return (
    <div className="flex min-h-screen flex-col bg-background text-foreground selection:bg-foreground selection:text-background">
      {/* Top Header Navigation */}
      <SiteHeader />

      {/* Hero Section */}
      <section className="relative overflow-hidden border-b border-border/60 pt-12 pb-20 md:pt-20 md:pb-28">
        {/* Subtle grid background */}
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.03] dark:opacity-[0.05]"
          style={{
            backgroundImage: `radial-gradient(currentColor 1px, transparent 1px)`,
            backgroundSize: "28px 28px",
          }}
        />

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto flex max-w-3xl flex-col items-center text-center">
            {/* Version Badge */}
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-border bg-muted/60 px-3.5 py-1 text-xs font-medium text-muted-foreground transition-all hover:bg-muted">
              <span className="flex size-1.5 rounded-full bg-foreground" />
              <span>Skool LMS 1.0</span>
              <span className="text-border">|</span>
              <span className="font-mono text-foreground">
                Modern Learning Engine
              </span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl leading-[1.12] font-extrabold tracking-tight text-foreground sm:text-5xl md:text-6xl">
              Learn without noise.
              <br />
              <span className="font-normal text-muted-foreground">
                Teach with precision.
              </span>
            </h1>

            {/* Subtitle */}
            <p className="mt-6 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg">
              The high-performance learning management platform built for modern
              creators, educators, and ambitious learners. Distraction-free
              course delivery, cohort accountability, and instant assessments.
            </p>

            {/* Action Buttons */}
            <div className="mt-8 flex w-full flex-col items-center justify-center gap-3 sm:w-auto sm:flex-row">
              <Link
                href="/signup"
                className={cn(
                  buttonVariants({ variant: "default", size: "lg" }),
                  "group h-11 w-full gap-2 px-6 text-sm font-medium shadow-xs sm:w-auto"
                )}
              >
                <span>Get Started Free</span>
                <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" />
              </Link>
              <Link
                href="/login"
                className={cn(
                  buttonVariants({ variant: "outline", size: "lg" }),
                  "h-11 w-full border-border/80 px-6 text-sm font-medium hover:bg-muted sm:w-auto"
                )}
              >
                <span>Sign in to Dashboard</span>
              </Link>
            </div>

            {/* Key Value Points */}
            <div className="mt-8 flex flex-wrap items-center justify-center gap-6 text-xs text-muted-foreground">
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="size-3.5 text-foreground" />
                <span>Zero configuration</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="size-3.5 text-foreground" />
                <span>Distraction-free interface</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="size-3.5 text-foreground" />
                <span>Light & Dark mode ready</span>
              </div>
            </div>
          </div>

          {/* Minimalist LMS Course Player & Dashboard Mockup */}
          <div className="mx-auto mt-14 max-w-5xl">
            <div className="rounded-2xl border border-border/80 bg-card p-3 shadow-sm sm:p-5">
              {/* Mockup Browser/App Window Header */}
              <div className="mb-4 flex items-center justify-between border-b border-border/60 pb-3">
                <div className="flex items-center gap-2">
                  <span className="size-3 rounded-full bg-border" />
                  <span className="size-3 rounded-full bg-border" />
                  <span className="size-3 rounded-full bg-border" />
                  <span className="ml-3 hidden font-mono text-xs text-muted-foreground sm:inline">
                    skool.app/courses/distributed-systems
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="rounded bg-muted px-2 py-0.5 font-mono text-xs text-muted-foreground">
                    Module 4 of 12
                  </span>
                </div>
              </div>

              {/* Inside LMS Interface Mockup */}
              <div className="grid grid-cols-1 gap-4 lg:grid-cols-3">
                {/* Main Player & Lesson Area */}
                <div className="space-y-4 lg:col-span-2">
                  {/* Lesson Video / Canvas Viewport */}
                  <div className="group relative flex aspect-video flex-col items-center justify-center overflow-hidden rounded-xl border border-border/70 bg-muted/40 p-6 text-center">
                    <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
                    <div className="mb-3 flex size-14 items-center justify-center rounded-full bg-foreground text-background shadow-md transition-transform group-hover:scale-105">
                      <Play className="ml-0.5 size-6 fill-current" />
                    </div>
                    <span className="relative z-10 text-sm font-medium text-foreground">
                      Lesson 4.2: Raft Consensus Algorithm in Practice
                    </span>
                    <span className="relative z-10 mt-1 font-mono text-xs text-muted-foreground">
                      Duration: 24:18 • HD Video + Interactive Code Sandbox
                    </span>
                  </div>

                  {/* Lesson Description & Progress Bar */}
                  <div className="space-y-3 rounded-xl border border-border/60 bg-background/50 p-4">
                    <div className="flex items-center justify-between">
                      <div>
                        <h4 className="text-sm font-semibold text-foreground">
                          Course Progress
                        </h4>
                        <p className="text-xs text-muted-foreground">
                          8 of 12 modules completed
                        </p>
                      </div>
                      <span className="font-mono text-xs font-medium text-foreground">
                        68%
                      </span>
                    </div>
                    {/* Minimal Progress Bar */}
                    <div className="h-2 w-full overflow-hidden rounded-full bg-muted">
                      <div className="h-full w-[68%] rounded-full bg-foreground transition-all" />
                    </div>
                  </div>
                </div>

                {/* Sidebar: Curriculum Outline */}
                <div className="space-y-2 rounded-xl border border-border/60 bg-background/40 p-3.5">
                  <div className="flex items-center justify-between border-b border-border/40 pb-2">
                    <span className="font-mono text-xs font-semibold tracking-wider text-muted-foreground uppercase">
                      Curriculum
                    </span>
                    <span className="text-xs text-muted-foreground">
                      12 Lessons
                    </span>
                  </div>

                  <div className="space-y-1.5 text-xs">
                    <div className="flex items-center justify-between rounded-lg bg-muted p-2 font-medium text-foreground">
                      <div className="flex items-center gap-2">
                        <CheckCircle2 className="size-3.5 text-foreground" />
                        <span>1. System Architecture</span>
                      </div>
                      <span className="font-mono text-[10px] text-muted-foreground">
                        Done
                      </span>
                    </div>

                    <div className="flex items-center justify-between rounded-lg bg-muted p-2 font-medium text-foreground">
                      <div className="flex items-center gap-2">
                        <CheckCircle2 className="size-3.5 text-foreground" />
                        <span>2. Network Partitions</span>
                      </div>
                      <span className="font-mono text-[10px] text-muted-foreground">
                        Done
                      </span>
                    </div>

                    <div className="flex items-center justify-between rounded-lg border border-border bg-background p-2 font-semibold text-foreground">
                      <div className="flex items-center gap-2">
                        <span className="size-2 animate-pulse rounded-full bg-foreground" />
                        <span>4. Consensus & Raft</span>
                      </div>
                      <span className="font-mono text-[10px] text-foreground">
                        Playing
                      </span>
                    </div>

                    <div className="flex items-center justify-between rounded-lg p-2 text-muted-foreground">
                      <div className="flex items-center gap-2">
                        <span className="size-1.5 rounded-full bg-border" />
                        <span>5. Byzantine Fault Tolerance</span>
                      </div>
                      <span className="font-mono text-[10px]">32m</span>
                    </div>

                    <div className="flex items-center justify-between rounded-lg p-2 text-muted-foreground">
                      <div className="flex items-center gap-2">
                        <span className="size-1.5 rounded-full bg-border" />
                        <span>6. Capstone Project</span>
                      </div>
                      <span className="font-mono text-[10px]">Quiz</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Metrics Section */}
      <section className="border-b border-border/60 bg-muted/20 py-12">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 gap-8 text-center md:grid-cols-4">
            <div>
              <p className="font-mono text-3xl font-extrabold tracking-tight text-foreground">
                50,000+
              </p>
              <p className="mt-1 text-xs text-muted-foreground sm:text-sm">
                Active Learners
              </p>
            </div>
            <div>
              <p className="font-mono text-3xl font-extrabold tracking-tight text-foreground">
                99.2%
              </p>
              <p className="mt-1 text-xs text-muted-foreground sm:text-sm">
                Course Completion Rate
              </p>
            </div>
            <div>
              <p className="font-mono text-3xl font-extrabold tracking-tight text-foreground">
                100%
              </p>
              <p className="mt-1 text-xs text-muted-foreground sm:text-sm">
                Distraction-Free UX
              </p>
            </div>
            <div>
              <p className="font-mono text-3xl font-extrabold tracking-tight text-foreground">
                4.9 / 5
              </p>
              <p className="mt-1 text-xs text-muted-foreground sm:text-sm">
                Student Satisfaction
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core LMS Features Grid */}
      <section id="features" className="border-b border-border/60 py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto mb-14 max-w-2xl text-center">
            <h2 className="mb-2 font-mono text-xs tracking-widest text-muted-foreground uppercase">
              Platform Architecture
            </h2>
            <h3 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Engineered for seamless knowledge transfer
            </h3>
            <p className="mt-3 text-sm text-muted-foreground">
              Everything instructors need to publish courses and students need
              to stay focused.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {/* Feature 1 */}
            <div className="space-y-3 rounded-2xl border border-border/80 bg-card p-6 transition-colors hover:border-foreground/30">
              <div className="flex size-10 items-center justify-center rounded-lg bg-foreground text-background">
                <BookOpen className="size-5" />
              </div>
              <h4 className="text-lg font-semibold text-foreground">
                Distraction-Free Learning
              </h4>
              <p className="text-sm leading-relaxed text-muted-foreground">
                Clean markdown notes, responsive video playback, synchronized
                code snippets, and hotkey navigation that keeps learners in deep
                focus.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="space-y-3 rounded-2xl border border-border/80 bg-card p-6 transition-colors hover:border-foreground/30">
              <div className="flex size-10 items-center justify-center rounded-lg bg-foreground text-background">
                <Users className="size-5" />
              </div>
              <h4 className="text-lg font-semibold text-foreground">
                Cohort Discussions
              </h4>
              <p className="text-sm leading-relaxed text-muted-foreground">
                Built-in thread discussions, question & answer boards, peer code
                review, and mentor guidance directly attached to lesson
                timestamps.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="space-y-3 rounded-2xl border border-border/80 bg-card p-6 transition-colors hover:border-foreground/30">
              <div className="flex size-10 items-center justify-center rounded-lg bg-foreground text-background">
                <ShieldCheck className="size-5" />
              </div>
              <h4 className="text-lg font-semibold text-foreground">
                Interactive Assessments
              </h4>
              <p className="text-sm leading-relaxed text-muted-foreground">
                Automated quiz grading, code challenge verification, and instant
                feedback with progressive difficulty unlocking.
              </p>
            </div>

            {/* Feature 4 */}
            <div className="space-y-3 rounded-2xl border border-border/80 bg-card p-6 transition-colors hover:border-foreground/30">
              <div className="flex size-10 items-center justify-center rounded-lg bg-foreground text-background">
                <BarChart3 className="size-5" />
              </div>
              <h4 className="text-lg font-semibold text-foreground">
                Deep Learner Analytics
              </h4>
              <p className="text-sm leading-relaxed text-muted-foreground">
                Granular tracking of student retention, module completion times,
                drop-off rates, and actionable cohort engagement metrics.
              </p>
            </div>

            {/* Feature 5 */}
            <div className="space-y-3 rounded-2xl border border-border/80 bg-card p-6 transition-colors hover:border-foreground/30">
              <div className="flex size-10 items-center justify-center rounded-lg bg-foreground text-background">
                <Award className="size-5" />
              </div>
              <h4 className="text-lg font-semibold text-foreground">
                Verified Certificates
              </h4>
              <p className="text-sm leading-relaxed text-muted-foreground">
                Issue verifiable completion certificates with unique
                cryptographic hashes and public link validation for resumes and
                portfolios.
              </p>
            </div>

            {/* Feature 6 */}
            <div className="space-y-3 rounded-2xl border border-border/80 bg-card p-6 transition-colors hover:border-foreground/30">
              <div className="flex size-10 items-center justify-center rounded-lg bg-foreground text-background">
                <Sparkles className="size-5" />
              </div>
              <h4 className="text-lg font-semibold text-foreground">
                Minimal & Fast UX
              </h4>
              <p className="text-sm leading-relaxed text-muted-foreground">
                Zero clutter, instantaneous theme switching with light/dark
                hotkey support, and lightning fast page loads powered by
                Next.js.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <div className="relative overflow-hidden rounded-3xl border border-border bg-card p-8 text-center sm:p-12">
            <div className="relative z-10 mx-auto max-w-xl space-y-4">
              <SkoolLogo size="md" className="justify-center" />
              <h3 className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
                Ready to transform your learning experience?
              </h3>
              <p className="text-sm text-muted-foreground">
                Join thousands of students and instructors on Skool LMS today.
                Free to start, no credit card required.
              </p>
              <div className="flex flex-col items-center justify-center gap-3 pt-2 sm:flex-row">
                <Link
                  href="/signup"
                  className={cn(
                    buttonVariants({ variant: "default", size: "lg" }),
                    "h-11 w-full px-6 font-medium shadow-xs sm:w-auto"
                  )}
                >
                  Create Free Account
                </Link>
                <Link
                  href="/login"
                  className={cn(
                    buttonVariants({ variant: "ghost", size: "lg" }),
                    "h-11 w-full px-6 font-medium sm:w-auto"
                  )}
                >
                  Sign in
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Minimal Footer */}
      <footer className="border-t border-border/70 bg-background py-10">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-4 sm:flex-row sm:px-6 lg:px-8">
          <div className="flex items-center gap-3">
            <SkoolLogo size="sm" />
            <span className="text-xs text-muted-foreground">
              © {new Date().getFullYear()} Skool LMS Platform. All rights
              reserved.
            </span>
          </div>
          <div className="flex items-center gap-6 text-xs text-muted-foreground">
            <Link
              href="/login"
              className="transition-colors hover:text-foreground"
            >
              Sign In
            </Link>
            <Link
              href="/signup"
              className="transition-colors hover:text-foreground"
            >
              Sign Up
            </Link>
            <a href="#" className="transition-colors hover:text-foreground">
              Privacy
            </a>
            <a href="#" className="transition-colors hover:text-foreground">
              Terms
            </a>
          </div>
        </div>
      </footer>
    </div>
  )
}
