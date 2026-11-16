import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function JoinSection() {
  return (
    <section className="py-16 md:py-24 bg-black text-white">
      <div className="container text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Join the SoundVolt Community?</h2>
        <p className="mb-8 max-w-2xl mx-auto">
          Create an account today and start connecting with music lovers, artists, and event organizers.
        </p>
        <Button asChild size="lg" variant="outline" className="font-medium bg-white text-black hover:bg-gray-100">
          <Link href="/register">Register Now</Link>
        </Button>
      </div>
    </section>
  )
}
