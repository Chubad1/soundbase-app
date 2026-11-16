// "use client"

// import React from "react"

// // Network status utility to detect and handle online/offline states

// type NetworkStatusListener = (online: boolean) => void

// class NetworkStatusManager {
//   private listeners: NetworkStatusListener[] = []
//   private _isOnline: boolean
//   private checkingInterval: NodeJS.Timeout | null = null
//   private lastPingTime = 0

//   constructor() {
//     this._isOnline = typeof navigator !== "undefined" ? navigator.onLine : true

//     if (typeof window !== "undefined") {
//       window.addEventListener("online", this.handleOnline)
//       window.addEventListener("offline", this.handleOffline)

//       // Start periodic connection checking
//       this.startPeriodicChecking()
//     }
//   }

//   private handleOnline = () => {
//     console.log("Browser reports online status")
//     this.checkActualConnection().then((isReally) => {
//       if (isReally) {
//         this._isOnline = true
//         this.notifyListeners()
//       }
//     })
//   }

//   private handleOffline = () => {
//     console.log("Browser reports offline status")
//     this._isOnline = false
//     this.notifyListeners()
//   }

//   private notifyListeners() {
//     this.listeners.forEach((listener) => listener(this._isOnline))
//   }

//   private async checkActualConnection(): Promise<boolean> {
//     try {
//       // Prevent checking too frequently
//       const now = Date.now()
//       if (now - this.lastPingTime < 10000) {
//         // 10 seconds
//         return this._isOnline
//       }

//       this.lastPingTime = now

//       // Try to fetch a tiny resource with cache busting
//       const response = await fetch(`/api/ping?_=${Date.now()}`, {
//         method: "HEAD",
//         cache: "no-store",
//         headers: {
//           "Cache-Control": "no-cache",
//         },
//       })

//       return response.ok
//     } catch (error) {
//       console.log("Connection check failed:", error)
//       return false
//     }
//   }

//   private startPeriodicChecking() {
//     // Check connection every 30 seconds
//     this.checkingInterval = setInterval(() => {
//       this.checkActualConnection().then((isOnline) => {
//         if (this._isOnline !== isOnline) {
//           this._isOnline = isOnline
//           console.log(`Periodic check: connection is ${isOnline ? "online" : "offline"}`)
//           this.notifyListeners()
//         }
//       })
//     }, 30000)
//   }

//   public get isOnline(): boolean {
//     return this._isOnline
//   }

//   public addListener(listener: NetworkStatusListener): () => void {
//     this.listeners.push(listener)

//     // Return function to remove listener
//     return () => {
//       this.listeners = this.listeners.filter((l) => l !== listener)
//     }
//   }

//   public checkConnection(): Promise<boolean> {
//     return this.checkActualConnection().then((isOnline) => {
//       if (this._isOnline !== isOnline) {
//         this._isOnline = isOnline
//         this.notifyListeners()
//       }
//       return isOnline
//     })
//   }

//   public cleanup() {
//     if (typeof window !== "undefined") {
//       window.removeEventListener("online", this.handleOnline)
//       window.removeEventListener("offline", this.handleOffline)

//       if (this.checkingInterval) {
//         clearInterval(this.checkingInterval)
//       }
//     }
//   }
// }

// // Create singleton instance
// export const networkStatus = typeof window !== "undefined" ? new NetworkStatusManager() : null

// // Hook for React components
// export function useNetworkStatus(): [boolean, () => Promise<boolean>] {
//   const [isOnline, setIsOnline] = React.useState<boolean>(networkStatus?.isOnline ?? true)

//   React.useEffect(() => {
//     if (!networkStatus) return

//     const removeListener = networkStatus.addListener((online) => {
//       setIsOnline(online)
//     })

//     return removeListener
//   }, [])

//   const checkConnection = React.useCallback(() => {
//     return networkStatus?.checkConnection() ?? Promise.resolve(true)
//   }, [])

//   return [isOnline, checkConnection]
// }



"use client"

import React from "react"
import { onSnapshot, getDoc, doc } from "firebase/firestore"
import { db } from "@/lib/firebase"

// Network status utility to detect and handle online/offline states
type NetworkStatusListener = (online: boolean) => void

class NetworkStatusManager {
  private listeners: NetworkStatusListener[] = []
  private _isOnline: boolean
  private checkingInterval: NodeJS.Timeout | null = null
  private lastPingTime = 0
  private firestoreUnsubscribe: (() => void) | null = null

  constructor() {
    this._isOnline = typeof navigator !== "undefined" ? navigator.onLine : true

    if (typeof window !== "undefined") {
      window.addEventListener("online", this.handleOnline)
      window.addEventListener("offline", this.handleOffline)

      // Start monitoring Firestore connection
      this.monitorFirestoreConnection()
      // Start periodic connection checking
      this.startPeriodicChecking()
    }
  }

  private monitorFirestoreConnection() {
    const docRef = doc(db, "connections/status")
    
    this.firestoreUnsubscribe = onSnapshot(
      docRef,
      () => {
        // Success callback means we're online
        if (!this._isOnline) {
          this._isOnline = true
          this.notifyListeners()
        }
      },
      (error) => {
        // Error callback means we're offline
        if (this._isOnline) {
          this._isOnline = false
          this.notifyListeners()
        }
      }
    )
  }

  private handleOnline = () => {
    console.log("Browser reports online status")
    this.checkActualConnection().then((isReally) => {
      if (isReally) {
        this._isOnline = true
        this.notifyListeners()
      }
    })
  }

  private handleOffline = () => {
    console.log("Browser reports offline status")
    this._isOnline = false
    this.notifyListeners()
  }

  private notifyListeners() {
    this.listeners.forEach((listener) => listener(this._isOnline))
  }

  private async checkActualConnection(): Promise<boolean> {
    try {
      // Prevent checking too frequently
      const now = Date.now()
      if (now - this.lastPingTime < 10000) { // 10 seconds
        return this._isOnline
      }

      this.lastPingTime = now

      // Try both a simple fetch and Firestore connection
      const [fetchResult, firestoreResult] = await Promise.all([
        fetch(`/api/ping?_=${Date.now()}`, {
          method: "HEAD",
          cache: "no-store",
          headers: { "Cache-Control": "no-cache" },
        }).then(r => r.ok),
        getDoc(doc(db, "metadata")).then(() => true).catch(() => false)
      ])

      return fetchResult && firestoreResult
    } catch (error) {
      console.log("Connection check failed:", error)
      return false
    }
  }

  private startPeriodicChecking() {
    // Check connection every 30 seconds
    this.checkingInterval = setInterval(() => {
      this.checkActualConnection().then((isOnline) => {
        if (this._isOnline !== isOnline) {
          this._isOnline = isOnline
          console.log(`Periodic check: connection is ${isOnline ? "online" : "offline"}`)
          this.notifyListeners()
        }
      })
    }, 30000)
  }

  public get isOnline(): boolean {
    return this._isOnline
  }

  public addListener(listener: NetworkStatusListener): () => void {
    this.listeners.push(listener)
    return () => {
      this.listeners = this.listeners.filter((l) => l !== listener)
    }
  }

  public checkConnection(): Promise<boolean> {
    return this.checkActualConnection().then((isOnline) => {
      if (this._isOnline !== isOnline) {
        this._isOnline = isOnline
        this.notifyListeners()
      }
      return isOnline
    })
  }

  public cleanup() {
    if (typeof window !== "undefined") {
      window.removeEventListener("online", this.handleOnline)
      window.removeEventListener("offline", this.handleOffline)

      if (this.checkingInterval) {
        clearInterval(this.checkingInterval)
      }

      if (this.firestoreUnsubscribe) {
        this.firestoreUnsubscribe()
      }
    }
  }
}

// Create singleton instance
export const networkStatus = typeof window !== "undefined" ? new NetworkStatusManager() : null

// Hook for React components
export function useNetworkStatus(): [boolean, () => Promise<boolean>] {
  const [isOnline, setIsOnline] = React.useState<boolean>(
    networkStatus?.isOnline ?? true
  )

  React.useEffect(() => {
    if (!networkStatus) return

    const removeListener = networkStatus.addListener((online) => {
      setIsOnline(online)
    })

    return () => {
      removeListener()
    }
  }, [])

  const checkConnection = React.useCallback(() => {
    return networkStatus?.checkConnection() ?? Promise.resolve(true)
  }, [])

  return [isOnline, checkConnection]
}