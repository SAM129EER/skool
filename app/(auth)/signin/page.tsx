"use client"

import React, { useState } from "react"
import Link from "next/link"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { ArrowLeft, Check, Eye, EyeOff, Loader2 } from "lucide-react"

import { SkoolLogo } from "@/components/skool-logo"
import { SocialLogins } from "@/components/auth/social-logins"
import { Button, buttonVariants } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { loginSchema, type LoginFormData } from "@/lib/validations/auth"
import { cn } from "@/lib/utils"

export default function SignInPage() {
  const [showPassword, setShowPassword] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<LoginFormData>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: "",
      password: "",
      remember: false,
    },
    mode: "onTouched",
  })

  const onSubmit = async (data: LoginFormData) => {
    await new Promise((resolve) => setTimeout(resolve, 800))
    console.log("Sign-in data submitted:", data)
    setIsSuccess(true)
  }

  return (
    <div className="rounded-2xl border border-border/80 bg-card p-6 shadow-xs sm:p-8">
      {/* Top Bar: Back Button & Minimal Brand Mark */}
      <div className="mb-6 flex items-center justify-between">
        <Link
          href="/"
          className={cn(
            buttonVariants({ variant: "outline", size: "icon-sm" }),
            "size-8.5 cursor-pointer rounded-lg border-border/80 text-muted-foreground transition-all hover:border-foreground/30 hover:text-foreground"
          )}
          aria-label="Back to home"
          title="Back to home"
        >
          <ArrowLeft className="size-4" />
        </Link>

        {/* Minimal brand logo in top bar */}
        <SkoolLogo size="sm" showBadge={false} href="/" />
      </div>

      {/* Header */}
      <div className="mb-6 flex flex-col items-center space-y-1.5 text-center">
        <h1 className="text-2xl font-bold tracking-tight text-foreground">
          Welcome back
        </h1>
        <p className="text-xs text-muted-foreground sm:text-sm">
          Sign in to continue your learning journey
        </p>
      </div>

      {/* Social Logins */}
      <div className="space-y-4">
        <SocialLogins mode="login" />

        {/* Divider: ---- or continue with email ---- */}
        <div className="relative my-4">
          <div
            className="absolute inset-0 flex items-center"
            aria-hidden="true"
          >
            <span className="w-full border-t border-border/70" />
          </div>
          <div className="relative flex justify-center text-xs">
            <span className="bg-card px-2.5 font-mono text-[11px] tracking-wider text-muted-foreground uppercase">
              or continue with email
            </span>
          </div>
        </div>

        {/* Login Form */}
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="space-y-4"
          noValidate
        >
          {/* Email field */}
          <div className="space-y-1.5 text-left">
            <Label htmlFor="email">Email address</Label>
            <Input
              id="email"
              type="email"
              placeholder="name@example.com"
              autoComplete="email"
              aria-invalid={errors.email ? "true" : "false"}
              {...register("email")}
            />
            {errors.email && (
              <p className="mt-1 animate-in text-xs font-medium text-destructive fade-in-50">
                {errors.email.message}
              </p>
            )}
          </div>

          {/* Password field */}
          <div className="space-y-1.5 text-left">
            <div className="flex items-center justify-between">
              <Label htmlFor="password">Password</Label>
              <Link
                href="#"
                className="text-xs text-muted-foreground underline-offset-4 transition-colors hover:text-foreground hover:underline"
              >
                Forgot password?
              </Link>
            </div>
            <div className="relative">
              <Input
                id="password"
                type={showPassword ? "text" : "password"}
                placeholder="••••••••"
                autoComplete="current-password"
                aria-invalid={errors.password ? "true" : "false"}
                className="pr-10 pl-3.5 font-mono text-sm"
                {...register("password")}
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute top-1/2 right-3 -translate-y-1/2 cursor-pointer rounded-sm p-1 text-muted-foreground transition-colors hover:text-foreground focus:outline-none"
                aria-label={showPassword ? "Hide password" : "Show password"}
              >
                {showPassword ? (
                  <EyeOff className="size-4" />
                ) : (
                  <Eye className="size-4" />
                )}
              </button>
            </div>
            {errors.password && (
              <p className="mt-1 animate-in text-xs font-medium text-destructive fade-in-50">
                {errors.password.message}
              </p>
            )}
          </div>

          {/* Remember me option */}
          <div className="flex items-center space-x-2 pt-0.5">
            <input
              type="checkbox"
              id="remember"
              className="size-4 cursor-pointer rounded border-border text-foreground accent-foreground focus:ring-ring focus:ring-offset-0"
              {...register("remember")}
            />
            <label
              htmlFor="remember"
              className="cursor-pointer text-xs text-muted-foreground select-none"
            >
              Remember this device for 30 days
            </label>
          </div>

          {/* Submit button */}
          <Button
            type="submit"
            className="mt-2 h-10 w-full cursor-pointer gap-2 font-medium shadow-xs transition-all"
            disabled={isSubmitting}
          >
            {isSubmitting ? (
              <>
                <Loader2 className="size-4 animate-spin" />
                <span>Signing in...</span>
              </>
            ) : isSuccess ? (
              <>
                <Check className="size-4 text-emerald-400" />
                <span>Signed In!</span>
              </>
            ) : (
              "Sign in to account"
            )}
          </Button>
        </form>
      </div>

      {/* Switch to Signup */}
      <div className="mt-6 border-t border-border/60 pt-4 text-center text-xs text-muted-foreground">
        <span>Don&apos;t have an account? </span>
        <Link
          href="/signup"
          className="font-medium text-foreground underline underline-offset-4 transition-opacity hover:opacity-80"
        >
          Sign up for free
        </Link>
      </div>
    </div>
  )
}
