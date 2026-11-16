"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Checkbox } from "@/components/ui/checkbox"
import { Music } from "lucide-react"
import { useAuth } from "@/contexts/auth-context"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { AlertCircle } from "lucide-react"

export default function LoginFanPage() {
  const router = useRouter()
  const { loginWithEmail, resetPassword } = useAuth()
  const [isLoading, setIsLoading] = useState(false)
  const [isResetting, setIsResetting] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [resetSuccess, setResetSuccess] = useState<string | null>(null)

  const [formData, setFormData] = useState({
    email: "",
    password: "",
    remember: false,
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }))
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setError(null)

    if (!formData.email || !formData.password) {
      setError("Email and password are required")
      return
    }

    setIsLoading(true)

    try {
      await loginWithEmail(formData.email, formData.password)

      // If remember me is checked, we could set a longer persistence
      // but Firebase handles this automatically now

      router.push("/dashboard-fan")
    } catch (err: any) {
      console.error("Login error:", err)
      if (err.code === "auth/user-not-found" || err.code === "auth/wrong-password") {
        setError("Invalid email or password")
      } else if (err.code === "auth/too-many-requests") {
        setError("Too many failed login attempts. Please try again later or reset your password.")
      } else {
        setError(err.message || "An error occurred during login")
      }
      setIsLoading(false)
    }
  }

  const handleResetPassword = async () => {
    if (!formData.email) {
      setError("Please enter your email address to reset your password")
      return
    }

    setIsResetting(true)
    setError(null)
    setResetSuccess(null)

    try {
      await resetPassword(formData.email)
      setResetSuccess(`Password reset email sent to ${formData.email}`)
    } catch (err: any) {
      console.error("Password reset error:", err)
      if (err.code === "auth/user-not-found") {
        setError("No account found with this email address")
      } else {
        setError(err.message || "An error occurred while resetting password")
      }
    } finally {
      setIsResetting(false)
    }
  }

  return (
    <div className="container flex items-center justify-center min-h-screen py-10">
      <Card className="w-full max-w-md">
        <CardHeader className="space-y-1 text-center">
          <div className="flex justify-center mb-4">
            <Music className="h-10 w-10" />
          </div>
          <CardTitle className="text-2xl font-bold">Login to Your Music Fan Account</CardTitle>
          <CardDescription>
            Welcome back! Continue your journey of discovering and supporting Afrobeats artists
          </CardDescription>
        </CardHeader>
        <CardContent>
          {error && (
            <Alert variant="destructive" className="mb-4">
              <AlertCircle className="h-4 w-4" />
              <AlertDescription>{error}</AlertDescription>
            </Alert>
          )}

          {resetSuccess && (
            <Alert className="mb-4 bg-green-50 text-green-800 border-green-200">
              <AlertDescription>{resetSuccess}</AlertDescription>
            </Alert>
          )}

          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Enter your email address"
                required
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="password">Password</Label>
              <Input
                id="password"
                name="password"
                type="password"
                value={formData.password}
                onChange={handleChange}
                placeholder="Enter your password"
                required
              />
            </div>
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <Checkbox
                  id="remember"
                  name="remember"
                  checked={formData.remember}
                  onCheckedChange={(checked) => setFormData((prev) => ({ ...prev, remember: checked === true }))}
                />
                <Label htmlFor="remember" className="text-sm">
                  Remember me
                </Label>
              </div>
              <Button
                type="button"
                variant="link"
                className="text-sm text-primary p-0 h-auto font-normal"
                onClick={handleResetPassword}
                disabled={isResetting}
              >
                {isResetting ? "Sending..." : "Forgot password?"}
              </Button>
            </div>
            <Button type="submit" className="w-full bg-black hover:bg-black/80" disabled={isLoading}>
              {isLoading ? "Logging in..." : "Login"}
            </Button>
          </form>
        </CardContent>
        <CardFooter className="flex flex-col space-y-4">
          <div className="text-sm text-center text-muted-foreground">
            Don't have an account?{" "}
            <Link href="/register-fan" className="text-primary hover:underline">
              Register as a Music Fan
            </Link>
          </div>
          <div className="text-xs text-center text-muted-foreground">
            Are you an artist?{" "}
            <Link href="/login-artist" className="text-primary hover:underline">
              Login as an Artist
            </Link>
          </div>
        </CardFooter>
      </Card>
    </div>
  )
}
