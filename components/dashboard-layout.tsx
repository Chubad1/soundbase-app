"use client"

import { type ReactNode, useState } from "react"
import { useRouter } from "next/navigation"
import Link from "next/link"
import { Disc3, Heart, MessageSquare, User, LogOut, ChevronDown, MenuIcon } from "lucide-react"
import { useAuth } from "@/contexts/auth-context"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { ConnectionStatus } from "@/components/connection-status"

interface DashboardLayoutProps {
  children: ReactNode
}

export function DashboardLayout({ children }: DashboardLayoutProps) {
  const { user, logout } = useAuth()
  const router = useRouter()
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const handleLogout = async () => {
    try {
      await logout()
      router.push("/")
    } catch (error) {
      console.error("Error logging out:", error)
    }
  }

  const menuItems = [
    { icon: Disc3, label: "Discover", href: "/dashboard-fan/discover" },
    { icon: Heart, label: "Following", href: "/dashboard-fan/following" },
    { icon: MessageSquare, label: "Feedback History", href: "/dashboard-fan/feedback" },
    { icon: User, label: "Profile", href: "/dashboard-fan/profile" },
  ]

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
    <div className="flex h-screen overflow-hidden bg-gray-50">
      {/* Desktop Sidebar */}
      <aside className="hidden md:flex md:w-64 flex-col bg-white border-r border-gray-200">
        <div className="p-4 border-b border-gray-200">
          <Link href="/dashboard-fan" className="flex items-center gap-2">
            <Disc3 className="h-6 w-6 text-primary" />
            <span className="text-xl font-bold">SoundVolt</span>
          </Link>
        </div>
        <nav className="flex-1 overflow-y-auto p-4">
          <ul className="space-y-2">
            {menuItems.map((item) => (
              <li key={item.label}>
                <Link
                  href={item.href}
                  className="flex items-center gap-3 px-3 py-2 text-gray-700 rounded-md hover:bg-gray-100 transition-colors"
                >
                  <item.icon className="h-5 w-5 text-gray-500" />
                  <span>{item.label}</span>
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </aside>

      {/* Main Content */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Top Navigation */}
        <header className="bg-white border-b border-gray-200 h-16 flex items-center justify-between px-4">
          <div className="md:hidden">
            {/* Sheet component with trigger */}
            <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon">
                  <MenuIcon className="h-5 w-5" />
                  <span className="sr-only">Toggle menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="left" className="w-64 p-0">
                <div className="p-4 border-b border-gray-200">
                  <Link href="/dashboard-fan" className="flex items-center gap-2">
                    <Disc3 className="h-6 w-6 text-primary" />
                    <span className="text-xl font-bold">SoundVolt</span>
                  </Link>
                </div>
                <nav className="flex-1 overflow-y-auto p-4">
                  <ul className="space-y-2">
                    {menuItems.map((item) => (
                      <li key={item.label}>
                        <Link
                          href={item.href}
                          className="flex items-center gap-3 px-3 py-2 text-gray-700 rounded-md hover:bg-gray-100 transition-colors"
                          onClick={() => setIsMobileMenuOpen(false)}
                        >
                          <item.icon className="h-5 w-5 text-gray-500" />
                          <span>{item.label}</span>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </nav>
              </SheetContent>
            </Sheet>
          </div>

          <div className="md:hidden">
            <Link href="/dashboard-fan" className="flex items-center gap-2">
              <Disc3 className="h-6 w-6 text-primary" />
              <span className="text-xl font-bold">SoundVolt</span>
            </Link>
          </div>

          <div className="flex items-center gap-4">
            <span className="text-sm text-gray-600 hidden sm:inline-block">{user?.email}</span>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="sm" className="gap-2">
                  <Avatar className="h-8 w-8">
                    <AvatarFallback>{getInitials(user?.displayName)}</AvatarFallback>
                  </Avatar>
                  <ChevronDown className="h-4 w-4 text-gray-500" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuItem className="flex items-center gap-2" onClick={handleLogout}>
                  <LogOut className="h-4 w-4" />
                  <span>Logout</span>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </header>

        {/* Page Content */}
        <main className="flex-1 overflow-y-auto p-6">{children}</main>

        {/* Connection Status Indicator */}
        <ConnectionStatus />
      </div>
    </div>
  )
}
