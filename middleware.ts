import { NextResponse } from "next/server"
import type { NextRequest } from "next/server"

// This function can be marked `async` if using `await` inside
export function middleware(request: NextRequest) {
  // For Firebase auth, we'll rely on client-side auth checks
  // This middleware is primarily for redirecting unauthenticated users
  // from protected routes to the login page

  // In a real implementation, you might use a session cookie or token
  // to check authentication status server-side

  return NextResponse.next()
}

// See "Matching Paths" below to learn more
export const config = {
  matcher: ["/dashboard-fan/:path*", "/dashboard-artist/:path*"],
}
