"use client"

import { useEffect } from "react"
import { useRouter } from "next/navigation"
import { useAuth } from "@/contexts/auth-context"
import { Loader2, Mail, User } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Separator } from "@/components/ui/separator"

export default function ProfilePage() {
  const { user, userRole, loading } = useAuth()
  const router = useRouter()

  useEffect(() => {
    if (!loading && (!user || userRole !== "fan")) {
      router.push("/login-fan")
    }
  }, [user, userRole, loading, router])

  if (loading) {
    return (
      <div className="container flex items-center justify-center min-h-screen">
        <Loader2 className="h-8 w-8 animate-spin" />
      </div>
    )
  }

  if (!user || userRole !== "fan") {
    return null // Will redirect in useEffect
  }

  const getInitials = (name: string | null | undefined) => {
    if (!name) return "MF" // Default: Music Fan
    return name
      .split(" ")
      .map((part) => part[0])
      .join("")
      .toUpperCase()
      .substring(0, 2)
  }

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold">Your Profile</h1>
        <p className="text-gray-500 mt-1">Manage your account information</p>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Profile Information</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex flex-col md:flex-row gap-6 items-start">
            <Avatar className="h-24 w-24">
              <AvatarFallback className="text-2xl">{getInitials(user.displayName)}</AvatarFallback>
            </Avatar>

            <div className="space-y-4 flex-1">
              <div>
                <h3 className="text-sm font-medium text-gray-500 flex items-center gap-2">
                  <User className="h-4 w-4" /> Name
                </h3>
                <p className="mt-1 text-lg">{user.displayName || "Music Fan"}</p>
              </div>

              <Separator />

              <div>
                <h3 className="text-sm font-medium text-gray-500 flex items-center gap-2">
                  <Mail className="h-4 w-4" /> Email
                </h3>
                <p className="mt-1 text-lg">{user.email}</p>
              </div>

              <Separator />

              <div>
                <h3 className="text-sm font-medium text-gray-500">Account Type</h3>
                <p className="mt-1 text-lg">Music Fan</p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
