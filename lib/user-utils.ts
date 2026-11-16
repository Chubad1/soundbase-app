// lib/user-utils.ts
import { User } from "firebase/auth"
import { doc, getDoc, getDocFromCache } from "firebase/firestore"
import { db } from "./firebase"

/**
 * Checks the user's role from Firestore (with offline cache fallback)
 * @param userId The user's UID
 * @returns Promise that resolves to the user's role or null if not found
 */
export const checkUserRole = async (userId: string): Promise<'fan' | 'artist' | null> => {
  try {
    // First try to get fresh data
    const userDoc = await getDoc(doc(db, "users", userId))
    if (userDoc.exists()) {
      return userDoc.data().role as 'fan' | 'artist'
    }
    return null
  } catch (error: unknown) {
    if (error instanceof Error && 'code' in error && error.code === 'unavailable') {
      try {
        // Fallback to cached data
        const cachedDoc = await getDocFromCache(doc(db, "users", userId))
        if (cachedDoc.exists()) {
          return cachedDoc.data().role as 'fan' | 'artist'
        }
      } catch (cacheError) {
        console.log("No cached user data available")
      }
    }
    console.error("Error checking user role:", error)
    return null
  }
}

/**
 * Type for user state setters
 */
type UserSetters = {
  setUser: (user: User | null) => void
  setUserRole: (role: 'fan' | 'artist' | null) => void
}

/**
 * Helper to update user state
 * @param user The user object
 * @param setters Object containing setUser and setUserRole functions
 */
export const setUser = (user: User | null, { setUser, setUserRole }: UserSetters) => {
  setUser(user)
  if (!user) {
    setUserRole(null)
  }
}

/**
 * Helper to update user role state
 * @param role The user role
 * @param setUserRole The state setter function
 */
export const setUserRole = (role: 'fan' | 'artist' | null, setUserRole: (role: 'fan' | 'artist' | null) => void) => {
  setUserRole(role)
}

/**
 * Gets complete user data (auth + firestore)
 * @param userId The user's UID
 * @returns Promise with user data object
 */
export const getUserData = async (userId: string) => {
  try {
    const [userDoc] = await Promise.all([
      getDoc(doc(db, "users", userId)),
      // Could add other document fetches here if needed
    ])

    if (!userDoc.exists()) {
      return null
    }

    return {
      ...userDoc.data(),
      id: userDoc.id
    }
  } catch (error) {
    console.error("Error getting user data:", error)
    return null
  }
}