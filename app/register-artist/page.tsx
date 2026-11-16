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
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
import { Music } from "lucide-react"

export default function RegisterArtistPage() {
  const router = useRouter()
  const [isLoading, setIsLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsLoading(true)

    // Simulate form submission
    setTimeout(() => {
      setIsLoading(false)
      // Redirect to a success page or dashboard
      router.push("/dashboard-artist")
    }, 1500)
  }

  return (
    <div className="container flex items-center justify-center min-h-screen py-10">
      <Card className="w-full max-w-lg">
        <CardHeader className="space-y-1 text-center">
          <div className="flex justify-center mb-4">
            <Music className="h-10 w-10" />
          </div>
          <CardTitle className="text-2xl font-bold">Create an Artist Account</CardTitle>
          <CardDescription>
            Join SoundVolt to share your music, connect with fans, and find performance opportunities
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="artistName">Artist/Band Name</Label>
              <Input id="artistName" placeholder="Enter your artist or band name" required />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="firstName">First Name</Label>
                <Input id="firstName" placeholder="Enter your first name" required />
              </div>
              <div className="space-y-2">
                <Label htmlFor="lastName">Last Name</Label>
                <Input id="lastName" placeholder="Enter your last name" required />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input id="email" type="email" placeholder="Enter your email address" required />
            </div>

            <div className="space-y-2">
              <Label htmlFor="genre">Primary Music Genre</Label>
              <Select>
                <SelectTrigger id="genre">
                  <SelectValue placeholder="Select your primary genre" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="afrobeats">Afrobeats</SelectItem>
                  <SelectItem value="afropop">Afropop</SelectItem>
                  <SelectItem value="afrofusion">Afrofusion</SelectItem>
                  <SelectItem value="afrohouse">Afrohouse</SelectItem>
                  <SelectItem value="amapiano">Amapiano</SelectItem>
                  <SelectItem value="highlife">Highlife</SelectItem>
                  <SelectItem value="other">Other</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label htmlFor="bio">Artist Bio</Label>
              <Textarea id="bio" placeholder="Tell us about yourself and your music (optional)" rows={3} />
            </div>

            <div className="space-y-2">
              <Label htmlFor="password">Password</Label>
              <Input id="password" type="password" placeholder="Create a password" required />
            </div>

            <div className="space-y-2">
              <Label htmlFor="confirmPassword">Confirm Password</Label>
              <Input id="confirmPassword" type="password" placeholder="Confirm your password" required />
            </div>

            <div className="flex items-center space-x-2">
              <Checkbox id="terms" required />
              <Label htmlFor="terms" className="text-sm">
                I agree to the{" "}
                <Link href="/terms" className="text-primary hover:underline">
                  Terms of Service
                </Link>{" "}
                and{" "}
                <Link href="/privacy" className="text-primary hover:underline">
                  Privacy Policy
                </Link>
              </Label>
            </div>

            <Button type="submit" className="w-full bg-black hover:bg-black/80" disabled={isLoading}>
              {isLoading ? "Creating Account..." : "Create Artist Account"}
            </Button>
          </form>
        </CardContent>
        <CardFooter className="flex flex-col space-y-4">
          <div className="text-sm text-center text-muted-foreground">
            Already have an account?{" "}
            <Link href="/login-artist" className="text-primary hover:underline">
              Login
            </Link>
          </div>
          <div className="text-xs text-center text-muted-foreground">
            Are you a music fan?{" "}
            <Link href="/register-fan" className="text-primary hover:underline">
              Register as a Music Fan
            </Link>
          </div>
        </CardFooter>
      </Card>
    </div>
  )
}
