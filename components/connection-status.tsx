"use client"

import { useEffect, useState } from "react"
import { useAuth } from "@/contexts/auth-context"
import { WifiOff, Wifi, RefreshCw } from "lucide-react"
import { Button } from "@/components/ui/button"
import { networkStatus } from "@/lib/network-status"

export function ConnectionStatus() {
  const { isOffline, connectionError, retryConnection } = useAuth()
  const [isRetrying, setIsRetrying] = useState(false)
  const [showStatus, setShowStatus] = useState(false)

  // Show status when offline or error exists
  useEffect(() => {
    setShowStatus(isOffline || !!connectionError)
  }, [isOffline, connectionError])

  // Hide status after 5 seconds if online and no errors
  useEffect(() => {
    let timeout: NodeJS.Timeout

    if (!isOffline && !connectionError) {
      timeout = setTimeout(() => {
        setShowStatus(false)
      }, 5000)
    }

    return () => {
      if (timeout) clearTimeout(timeout)
    }
  }, [isOffline, connectionError])

  const handleRetry = async () => {
    setIsRetrying(true)
    try {
      // Check actual connection first
      await networkStatus?.checkConnection()
      await retryConnection()
    } catch (error) {
      console.error("Error retrying connection:", error)
    } finally {
      setIsRetrying(false)
    }
  }

  if (!showStatus) return null

  return (
    <div
      className={`fixed bottom-4 right-4 z-50 p-3 rounded-lg shadow-lg flex items-center gap-2 ${
        isOffline
          ? "bg-amber-100 text-amber-800"
          : connectionError
            ? "bg-amber-100 text-amber-800"
            : "bg-green-100 text-green-800"
      }`}
    >
      {isOffline ? (
        <WifiOff className="h-4 w-4" />
      ) : connectionError ? (
        <WifiOff className="h-4 w-4" />
      ) : (
        <Wifi className="h-4 w-4" />
      )}

      <span className="text-sm font-medium">
        {isOffline ? "You're offline" : connectionError ? "Connection issue" : "Connected"}
      </span>

      {(isOffline || connectionError) && (
        <Button variant="ghost" size="sm" className="ml-2 h-6 px-2 text-xs" onClick={handleRetry} disabled={isRetrying}>
          {isRetrying ? (
            <>
              <RefreshCw className="h-3 w-3 mr-1 animate-spin" />
              Retrying...
            </>
          ) : (
            <>
              <RefreshCw className="h-3 w-3 mr-1" />
              Retry
            </>
          )}
        </Button>
      )}
    </div>
  )
}
