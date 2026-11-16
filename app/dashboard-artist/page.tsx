import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function DashboardArtistPage() {
  return (
    <div className="container py-10">
      <h1 className="text-3xl font-bold mb-6">Artist Dashboard</h1>
      <p className="mb-6">Welcome to your artist dashboard! This is where you'll manage your music and performances.</p>
      <Button asChild>
        <Link href="/">Return to Home</Link>
      </Button>
    </div>
  )
}
