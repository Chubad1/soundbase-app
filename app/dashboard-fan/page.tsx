// "use client"

// import { useEffect, useState } from "react"
// import Link from "next/link"
// import { useRouter } from "next/navigation"
// import { Button } from "@/components/ui/button"
// import { useAuth } from "@/contexts/auth-context"
// import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
// import { Loader2 } from "lucide-react"
// import { Alert, AlertDescription } from "@/components/ui/alert"

// export default function DashboardFanPage() {
//   const { user, userRole, loading, logout } = useAuth()
//   const router = useRouter()
//   const [showWelcome, setShowWelcome] = useState(false)

//   // Check if this is the first login after registration
//   useEffect(() => {
//     const isNewRegistration = sessionStorage.getItem("newRegistration")
//     if (isNewRegistration === "true" && user) {
//       setShowWelcome(true)
//       sessionStorage.removeItem("newRegistration")
//     }
//   }, [user])

//   useEffect(() => {
//     if (!loading && (!user || userRole !== "fan")) {
//       router.push("/login-fan")
//     }
//   }, [user, userRole, loading, router])

//   const handleLogout = async () => {
//     try {
//       await logout()
//       router.push("/")
//     } catch (error) {
//       console.error("Error logging out:", error)
//     }
//   }

//   if (loading) {
//     return (
//       <div className="container flex items-center justify-center min-h-screen">
//         <Loader2 className="h-8 w-8 animate-spin" />
//       </div>
//     )
//   }

//   if (!user || userRole !== "fan") {
//     return null // Will redirect in useEffect
//   }

//   return (
//     <div className="container py-10">
//       <div className="flex justify-between items-center mb-8">
//         <h1 className="text-3xl font-bold">Music Fan Dashboard</h1>
//         <Button variant="outline" onClick={handleLogout}>
//           Logout
//         </Button>
//       </div>

//       {showWelcome && (
//         <Alert className="mb-6 bg-green-50 text-green-800 border-green-200">
//           <AlertDescription>
//             Welcome to SoundVolt! Your account has been created successfully. You can now explore and discover new
//             music.
//           </AlertDescription>
//         </Alert>
//       )}

//       <Card className="mb-8">
//         <CardHeader>
//           <CardTitle>Welcome, {user.displayName || "Music Fan"}!</CardTitle>
//           <CardDescription>Your personal dashboard to discover and support Afrobeats artists</CardDescription>
//         </CardHeader>
//         <CardContent>
//           <p className="mb-4">This is where you'll discover new music and connect with artists.</p>
//           <p className="text-sm text-muted-foreground">Email: {user.email}</p>
//         </CardContent>
//       </Card>

//       <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
//         <Card>
//           <CardHeader>
//             <CardTitle>Discover Music</CardTitle>
//           </CardHeader>
//           <CardContent>
//             <p className="mb-4">Find new artists and tracks based on your preferences.</p>
//             <Button asChild>
//               <Link href="/discover">Browse Music</Link>
//             </Button>
//           </CardContent>
//         </Card>

//         <Card>
//           <CardHeader>
//             <CardTitle>Your Favorites</CardTitle>
//           </CardHeader>
//           <CardContent>
//             <p className="mb-4">Access your favorite artists and tracks.</p>
//             <Button asChild>
//               <Link href="/favorites">View Favorites</Link>
//             </Button>
//           </CardContent>
//         </Card>

//         <Card>
//           <CardHeader>
//             <CardTitle>Upcoming Events</CardTitle>
//           </CardHeader>
//           <CardContent>
//             <p className="mb-4">Discover events featuring your favorite artists.</p>
//             <Button asChild>
//               <Link href="/events">View Events</Link>
//             </Button>
//           </CardContent>
//         </Card>
//       </div>
//     </div>
//   )
// }


"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { Disc3, Heart, MessageSquare, WifiOff, AlertCircle, RefreshCw } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useAuth } from "@/contexts/auth-context"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Loader2 } from "lucide-react"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { auth } from "@/lib/firebase"
import { checkUserRole } from "@/lib/user-utils" // Adjust the path based on your project structure

export default function DashboardFanPage() {
  const { user: initialUser, loading, isOffline, connectionError, retryConnection } = useAuth()
  const [user, setUser] = useState(initialUser)
  const router = useRouter()
  const [userRole, setUserRole] = useState<string | null>(null)
  const [isRetrying, setIsRetrying] = useState(false)

  useEffect(() => {
    if (!user && isOffline) {
      // Try to get cached user data
      const cachedUser = auth.currentUser
      if (cachedUser) {
        checkUserRole(cachedUser.uid).then((role) => {
          if (role === "fan") {
            // Allow limited offline access
            setUser(cachedUser)
            setUserRole(role)
          }
        })
      }
    }
  }, [isOffline])

  useEffect(() => {
    if (!loading && (!user || (userRole !== "fan" && !isOffline))) {
      router.push("/login-fan")
    }
  }, [user, userRole, loading, router, isOffline])

  const handleRetryConnection = async () => {
    setIsRetrying(true)
    try {
      await retryConnection()
    } catch (error) {
      console.error("Error retrying connection:", error)
    } finally {
      setIsRetrying(false)
    }
  }

  if (loading && !isOffline) {
    return (
      <div className="container flex items-center justify-center min-h-screen">
        <Loader2 className="h-8 w-8 animate-spin" />
      </div>
    )
  }

  // If offline but we have a user, we'll show the dashboard with limited functionality
  if (!user && !isOffline) {
    return null // Will redirect in useEffect
  }

  return (
    <div className="space-y-6">
      {isOffline && (
        <Alert className="mb-6 bg-amber-50 text-amber-800 border-amber-200">
          <WifiOff className="h-4 w-4" />
          <AlertTitle>You're offline</AlertTitle>
          <AlertDescription>
            {user 
              ? "Using cached data - some features may be limited until you reconnect."
              : "Some features may be limited until you reconnect to the internet."}
          </AlertDescription>
        </Alert>
      )}

      {connectionError && !isOffline && (
        <Alert className="mb-6 bg-amber-50 text-amber-800 border-amber-200">
          <AlertCircle className="h-4 w-4" />
          <AlertTitle>Connection Issue</AlertTitle>
          <AlertDescription className="flex flex-col gap-2">
            <span>{connectionError}</span>
            <Button
              variant="outline"
              size="sm"
              className="self-start flex items-center gap-1"
              onClick={handleRetryConnection}
              disabled={isRetrying}
            >
              {isRetrying ? (
                <>
                  <RefreshCw className="h-3 w-3 animate-spin" />
                  <span>Retrying...</span>
                </>
              ) : (
                <>
                  <RefreshCw className="h-3 w-3" />
                  <span>Retry Connection</span>
                </>
              )}
            </Button>
          </AlertDescription>
        </Alert>
      )}

      <div>
        <h1 className="text-3xl font-bold">Welcome, {user?.displayName || "Music Fan"}!</h1>
        <p className="text-gray-500 mt-1">Your personal dashboard to discover and support Afrobeats artists</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card>
          <CardHeader className="pb-3">
            <CardTitle className="flex items-center gap-2">
              <Disc3 className="h-5 w-5 text-primary" />
              Discover Music
            </CardTitle>
            <CardDescription>Find new artists and tracks based on your preferences</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="mb-4">Explore trending Afrobeats artists and their latest releases.</p>
            <Button asChild disabled={isOffline}>
              <Link href="/dashboard-fan/discover">Browse Music</Link>
            </Button>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-3">
            <CardTitle className="flex items-center gap-2">
              <Heart className="h-5 w-5 text-primary" />
              Your Favorites
            </CardTitle>
            <CardDescription>Access your favorite artists and tracks</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="mb-4">View and manage your favorite artists and tracks.</p>
            <Button asChild disabled={isOffline && !user}>
              <Link href="/dashboard-fan/following">View Favorites</Link>
            </Button>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-3">
            <CardTitle className="flex items-center gap-2">
              <MessageSquare className="h-5 w-5 text-primary" />
              Feedback History
            </CardTitle>
            <CardDescription>Review your feedback to artists</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="mb-4">See all the feedback you've provided to artists.</p>
            <Button asChild disabled={isOffline}>
              <Link href="/dashboard-fan/feedback">View Feedback</Link>
            </Button>
          </CardContent>
        </Card>
      </div>

      <div className="mt-8">
        <h2 className="text-2xl font-bold mb-4">Recent Activity</h2>
        <Card>
          <CardContent className="p-6">
            <p className="text-center text-gray-500 py-8">
              {isOffline || connectionError
                ? user
                  ? "Displaying cached activity data. Some recent activity may not be visible until you reconnect."
                  : "Your activity can't be loaded while offline. Please reconnect to view your recent activity."
                : "Your recent activity will appear here once you start interacting with artists and music."}
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
