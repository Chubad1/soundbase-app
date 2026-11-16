import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Music, Star, Calendar, Users } from "lucide-react"

export default function PerformPage() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="py-16 md:py-24 bg-slate-50">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">Share Your Afrobeats Sound</h1>
              <p className="text-lg text-muted-foreground mb-8">
                Find your first music event to perform at. Find your voice and grow your career. As a Music Artist on
                SoundVolt, you'll connect with fans, receive valuable feedback, and discover performance opportunities.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button asChild className="bg-black hover:bg-black/80 text-white">
                  <Link href="/register-artist">Join as a Music Artist</Link>
                </Button>
                <Button asChild variant="outline">
                  <Link href="/login-artist">Login</Link>
                </Button>
              </div>
            </div>
            <div className="relative">
              <Image
                src="https://raw.githubusercontent.com/seyileo/testimage/refs/heads/main/artists3.jpeg"
                alt="Artist performing"
                width={600}
                height={400}
                className="rounded-xl shadow-lg object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Why Artists Choose SoundVolt */}
      <section className="py-16 md:py-24">
        <div className="container">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">Why Artists Choose SoundVolt</h2>
          <p className="text-center text-muted-foreground mb-12 max-w-3xl mx-auto">
            Discover the tools and opportunities that help artists grow their careers.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white rounded-lg p-6 shadow-sm">
              <div className="bg-slate-100 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                <Music className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-bold mb-2">Showcase Your Music</h3>
              <p className="text-muted-foreground">
                Upload your tracks and performances to gain visibility with fans and event organizers.
              </p>
            </div>

            <div className="bg-white rounded-lg p-6 shadow-sm">
              <div className="bg-slate-100 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                <Star className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-bold mb-2">Get Valuable Feedback</h3>
              <p className="text-muted-foreground">
                Receive honest ratings and reviews from music fans to help refine your sound.
              </p>
            </div>

            <div className="bg-white rounded-lg p-6 shadow-sm">
              <div className="bg-slate-100 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                <Calendar className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-bold mb-2">Find Performance Opportunities</h3>
              <p className="text-muted-foreground">
                Discover events looking for artists in your genre and location to showcase your talent.
              </p>
            </div>

            <div className="bg-white rounded-lg p-6 shadow-sm">
              <div className="bg-slate-100 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                <Users className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-bold mb-2">Build Your Fanbase</h3>
              <p className="text-muted-foreground">
                Connect with fans who appreciate your music and grow your audience organically.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section id="how-it-works" className="py-16 md:py-24 bg-slate-50">
        <div className="container">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">How It Works</h2>
          <p className="text-center text-muted-foreground mb-12 max-w-3xl mx-auto">
            Getting started as a Music Artist on SoundVolt is straightforward and rewarding.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg p-6 shadow-sm">
              <div className="flex items-center justify-center mb-6">
                <div className="w-12 h-12 rounded-full bg-black text-white flex items-center justify-center text-xl font-bold">
                  1
                </div>
              </div>
              <h3 className="text-xl font-bold mb-2 text-center">Create Your Profile</h3>
              <p className="text-muted-foreground text-center">
                Sign up as a Music Artist and showcase your sound, style, and previous performances.
              </p>
            </div>

            <div className="bg-white rounded-lg p-6 shadow-sm">
              <div className="flex items-center justify-center mb-6">
                <div className="w-12 h-12 rounded-full bg-black text-white flex items-center justify-center text-xl font-bold">
                  2
                </div>
              </div>
              <h3 className="text-xl font-bold mb-2 text-center">Upload Your Music</h3>
              <p className="text-muted-foreground text-center">
                Share your tracks and performances to get feedback and build your audience.
              </p>
            </div>

            <div className="bg-white rounded-lg p-6 shadow-sm">
              <div className="flex items-center justify-center mb-6">
                <div className="w-12 h-12 rounded-full bg-black text-white flex items-center justify-center text-xl font-bold">
                  3
                </div>
              </div>
              <h3 className="text-xl font-bold mb-2 text-center">Connect and Perform</h3>
              <p className="text-muted-foreground text-center">
                Find performance opportunities, connect with event organizers, and grow your career.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-black text-white">
        <div className="container text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Share Your Music?</h2>
          <p className="mb-8 max-w-2xl mx-auto">
            Join SoundVolt today and connect with fans, get valuable feedback, and find performance opportunities.
          </p>
          <Button asChild size="lg" variant="outline" className="font-medium bg-white text-black hover:bg-gray-100">
            <Link href="/register-artist">Register as a Music Artist</Link>
          </Button>
        </div>
      </section>
    </main>
  )
}
