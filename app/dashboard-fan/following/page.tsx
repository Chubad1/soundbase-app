"use client"

import { useEffect } from "react"
import { useRouter } from "next/navigation"
import { useAuth } from "@/contexts/auth-context"
import { Loader2 } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

export default function FollowingPage() {
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

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold">Following</h1>
        <p className="text-gray-500 mt-1">Artists and tracks you're following</p>
      </div>

      <Card>
        <CardContent className="p-6">
          <p className="text-center text-gray-500 py-8">
            You're not following any artists yet. Discover artists to follow them.
          </p>
        </CardContent>
      </Card>
    </div>
  )
}
