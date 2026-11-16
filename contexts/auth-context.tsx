// "use client"

// import type React from "react"

// import { createContext, useContext, useEffect, useState } from "react"
// import {
//   type User,
//   createUserWithEmailAndPassword,
//   signInWithEmailAndPassword,
//   signOut,
//   onAuthStateChanged,
//   sendPasswordResetEmail,
//   updateProfile,
// } from "firebase/auth"
// import { auth } from "@/lib/firebase"
// import { doc, setDoc, getDoc } from "firebase/firestore"
// import { db } from "@/lib/firebase"

// type UserRole = "fan" | "artist" | null

// interface AuthContextType {
//   user: User | null
//   userRole: UserRole
//   loading: boolean
//   registerFan: (email: string, password: string, name: string) => Promise<void>
//   loginWithEmail: (email: string, password: string) => Promise<void>
//   logout: () => Promise<void>
//   resetPassword: (email: string) => Promise<void>
// }

// const AuthContext = createContext<AuthContextType | undefined>(undefined)

// export function AuthProvider({ children }: { children: React.ReactNode }) {
//   const [user, setUser] = useState<User | null>(null)
//   const [userRole, setUserRole] = useState<UserRole>(null)
//   const [loading, setLoading] = useState(true)

//   useEffect(() => {
//     const unsubscribe = onAuthStateChanged(auth, async (user) => {
//       setUser(user)

//       if (user) {
//         // Fetch user role from Firestore
//         try {
//           const userDoc = await getDoc(doc(db, "users", user.uid))
//           if (userDoc.exists()) {
//             setUserRole(userDoc.data().role as UserRole)
//           }
//         } catch (error) {
//           console.error("Error fetching user role:", error)
//         }
//       } else {
//         setUserRole(null)
//       }

//       setLoading(false)
//     })

//     return () => unsubscribe()
//   }, [])

//   const registerFan = async (email: string, password: string, name: string) => {
//     try {
//       const userCredential = await createUserWithEmailAndPassword(auth, email, password)
//       const user = userCredential.user

//       // Update profile with name
//       await updateProfile(user, {
//         displayName: name,
//       })

//       // Store additional user data in Firestore
//       await setDoc(doc(db, "users", user.uid), {
//         uid: user.uid,
//         email,
//         name,
//         role: "fan",
//         createdAt: new Date().toISOString(),
//       })

//       setUserRole("fan")
//     } catch (error) {
//       console.error("Error registering fan:", error)
//       throw error
//     }
//   }

//   const loginWithEmail = async (email: string, password: string) => {
//     try {
//       await signInWithEmailAndPassword(auth, email, password)
//     } catch (error) {
//       console.error("Error logging in:", error)
//       throw error
//     }
//   }

//   const logout = async () => {
//     try {
//       await signOut(auth)
//     } catch (error) {
//       console.error("Error logging out:", error)
//       throw error
//     }
//   }

//   const resetPassword = async (email: string) => {
//     try {
//       await sendPasswordResetEmail(auth, email)
//     } catch (error) {
//       console.error("Error resetting password:", error)
//       throw error
//     }
//   }

//   const value = {
//     user,
//     userRole,
//     loading,
//     registerFan,
//     loginWithEmail,
//     logout,
//     resetPassword,
//   }

//   return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
// }

// export function useAuth() {
//   const context = useContext(AuthContext)
//   if (context === undefined) {
//     throw new Error("useAuth must be used within an AuthProvider")
//   }
//   return context
// }




"use client"

import type React from "react"
import { createContext, useContext, useEffect, useState } from "react"
import {
  type User,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
  sendPasswordResetEmail,
  updateProfile,
} from "firebase/auth"
import { auth } from "@/lib/firebase"
import { doc, setDoc, getDoc, getDocFromCache } from "firebase/firestore"
import { db } from "@/lib/firebase"

type UserRole = "fan" | "artist" | null

interface AuthContextType {
  user: User | null
  userRole: UserRole
  loading: boolean
  isOffline: boolean
  connectionError: string | null
  retryConnection: () => Promise<void>
  registerFan: (email: string, password: string, name: string) => Promise<void>
  loginWithEmail: (email: string, password: string) => Promise<void>
  logout: () => Promise<void>
  resetPassword: (email: string) => Promise<void>
}

const AuthContext = createContext<AuthContextType | undefined>(undefined)

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User | null>(null)
  const [userRole, setUserRole] = useState<UserRole>(null)
  const [loading, setLoading] = useState(true)
  const [isOffline, setIsOffline] = useState(false)
  const [connectionError, setConnectionError] = useState<string | null>(null)

  useEffect(() => {
    const unsubscribeAuth = onAuthStateChanged(auth, handleAuthStateChange)
    return () => unsubscribeAuth()
  }, [])

  const handleAuthStateChange = async (user: User | null) => {
    setUser(user)
    
    if (user) {
      await checkUserRole(user.uid)
      await checkConnection()
    } else {
      setUserRole(null)
    }
    
    setLoading(false)
  }

  const checkUserRole = async (userId: string) => {
    try {
      // First try to get fresh data
      const userDoc = await getDoc(doc(db, "users", userId))
      if (userDoc.exists()) {
        setUserRole(userDoc.data().role as UserRole)
        return
      }
    } catch (error: unknown) {
      if (error instanceof Error && 'code' in error && error.code === 'unavailable') {
        setIsOffline(true)
        try {
          // Fallback to cached data
          const cachedDoc = await getDocFromCache(doc(db, "users", userId))
          if (cachedDoc.exists()) {
            setUserRole(cachedDoc.data().role as UserRole)
            setConnectionError("Using cached data - connection issues detected")
            return
          }
        } catch (cacheError) {
          console.log("No cached data available")
        }
      }
      setConnectionError("Failed to load user data. Please check your connection.")
      throw error
    }
    setUserRole(null)
  }

  const checkConnection = async () => {
    try {
      await getDoc(doc(db, "metadata")) // Lightweight check
      setIsOffline(false)
      setConnectionError(null)
      return true
    } catch (error: unknown) {
      setIsOffline(true)
      setConnectionError(error instanceof Error ? error.message : "Unknown connection error")
      return false
    }
  }

  const retryConnection = async () => {
    setLoading(true)
    try {
      const connected = await checkConnection()
      if (connected && user) {
        await checkUserRole(user.uid)
      }
    } finally {
      setLoading(false)
    }
  }

  const registerFan = async (email: string, password: string, name: string) => {
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password)
      const user = userCredential.user

      await updateProfile(user, { displayName: name })
      
      await setDoc(doc(db, "users", user.uid), {
        uid: user.uid,
        email,
        name,
        role: "fan",
        createdAt: new Date().toISOString(),
      })

      setUserRole("fan")
    } catch (error: unknown) {
      console.error("Registration error:", error)
      throw error instanceof Error ? error : new Error("Registration failed")
    }
  }

  const loginWithEmail = async (email: string, password: string) => {
    try {
      await signInWithEmailAndPassword(auth, email, password)
      await checkConnection()
    } catch (error: unknown) {
      console.error("Login error:", error)
      throw error instanceof Error ? error : new Error("Login failed")
    }
  }

  const logout = async () => {
    try {
      await signOut(auth)
      setUserRole(null)
    } catch (error: unknown) {
      console.error("Logout error:", error)
      throw error instanceof Error ? error : new Error("Logout failed")
    }
  }

  const resetPassword = async (email: string) => {
    try {
      await sendPasswordResetEmail(auth, email)
    } catch (error: unknown) {
      console.error("Password reset error:", error)
      throw error instanceof Error ? error : new Error("Password reset failed")
    }
  }

  const value = {
    user,
    userRole,
    loading,
    isOffline,
    connectionError,
    retryConnection,
    registerFan,
    loginWithEmail,
    logout,
    resetPassword,
  }

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}

export function useAuth() {
  const context = useContext(AuthContext)
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider")
  }
  return context
}