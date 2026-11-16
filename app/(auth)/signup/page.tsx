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
import { signupSchema, type SignupFormData } from "@/lib/validations/auth"
import { cn } from "@/lib/utils"

export default function SignupPage() {
  const [showPassword, setShowPassword] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<SignupFormData>({
    resolver: zodResolver(signupSchema),
    defaultValues: {
      name: "",
      email: "",
      password: "",
      terms: false,
    },
    mode: "onTouched",
  })

  const onSubmit = async (data: SignupFormData) => {
    // Simulated registration API request
    await new Promise((resolve) => setTimeout(resolve, 800))
    console.log("Signup data submitted:", data)
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
          Create an account
        </h1>
        <p className="text-xs text-muted-foreground sm:text-sm">
          Join Skool LMS to start mastering new skills today
        </p>
      </div>

      {/* Social Logins */}
      <div className="space-y-4">
        <SocialLogins mode="signup" />

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

        {/* Signup Form */}
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="space-y-4"
          noValidate
        >
          {/* Full Name field */}
          <div className="space-y-1.5 text-left">
            <Label htmlFor="fullname">Full name</Label>
            <Input
              id="fullname"
              type="text"
              placeholder="Jane Doe"
              autoComplete="name"
              aria-invalid={errors.name ? "true" : "false"}
              {...register("name")}
            />
            {errors.name && (
              <p className="mt-1 animate-in text-xs font-medium text-destructive fade-in-50">
                {errors.name.message}
              </p>
            )}
          </div>

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
            <Label htmlFor="password">Password</Label>
            <div className="relative">
              <Input
                id="password"
                type={showPassword ? "text" : "password"}
                placeholder="At least 8 characters"
                autoComplete="new-password"
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
            {errors.password ? (
              <p className="mt-1 animate-in text-xs font-medium text-destructive fade-in-50">
                {errors.password.message}
              </p>
            ) : (
              <p className="mt-1 text-[11px] text-muted-foreground">
                Must be at least 8 characters long.
              </p>
            )}
          </div>

          {/* Agreement checkbox */}
          <div className="space-y-1 pt-1 text-left">
            <div className="flex items-start space-x-2">
              <input
                type="checkbox"
                id="terms"
                className="mt-0.5 size-4 cursor-pointer rounded border-border text-foreground accent-foreground focus:ring-ring focus:ring-offset-0"
                aria-invalid={errors.terms ? "true" : "false"}
                {...register("terms")}
              />
              <label
                htmlFor="terms"
                className="cursor-pointer text-xs leading-relaxed text-muted-foreground select-none"
              >
                I agree to the{" "}
                <Link
                  href="#"
                  className="text-foreground underline underline-offset-2 hover:opacity-80"
                >
                  Terms of Service
                </Link>{" "}
                and{" "}
                <Link
                  href="#"
                  className="text-foreground underline underline-offset-2 hover:opacity-80"
                >
                  Privacy Policy
                </Link>
              </label>
            </div>
            {errors.terms && (
              <p className="animate-in text-xs font-medium text-destructive fade-in-50">
                {errors.terms.message}
              </p>
            )}
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
                <span>Creating account...</span>
              </>
            ) : isSuccess ? (
              <>
                <Check className="size-4 text-emerald-400" />
                <span>Account Created!</span>
              </>
            ) : (
              "Create free account"
            )}
          </Button>
        </form>
      </div>

      {/* Switch to Login */}
      <div className="mt-6 border-t border-border/60 pt-4 text-center text-xs text-muted-foreground">
        <span>Already have an account? </span>
        <Link
          href="/login"
          className="font-medium text-foreground underline underline-offset-4 transition-opacity hover:opacity-80"
        >
          Sign in
        </Link>
      </div>
    </div>
  )
}
