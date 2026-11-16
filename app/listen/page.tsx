import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Headphones, Star, MessageSquare, Users } from "lucide-react"

export default function ListenPage() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="py-16 md:py-24 bg-slate-50">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">Experience the Vibrant World of Afrobeats</h1>
              <p className="text-lg text-muted-foreground mb-8">
                Connect directly with emerging artists, share your feedback, and fuel their journey. As a Music Fan on
                SoundVolt, you'll discover new sounds before anyone else and help shape the future of music.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button asChild className="bg-black hover:bg-black/80 text-white">
                  <Link href="/register-fan">Join as a Music Fan</Link>
                </Button>
                <Button asChild variant="outline">
                  <Link href="/login-fan">Login</Link>
                </Button>
              </div>
            </div>
            <div className="relative">
              <Image
                src="https://raw.githubusercontent.com/seyileo/testimage/refs/heads/main/makavery-frery-fans.jpg"
                alt="Artist performing with audience"
                width={600}
                height={400}
                className="rounded-xl shadow-lg object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Why Music Fans Love SoundVolt */}
      <section className="py-16 md:py-24">
        <div className="container">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">Why Music Fans Love SoundVolt</h2>
          <p className="text-center text-muted-foreground mb-12 max-w-3xl mx-auto">
            Discover the benefits of being part of our growing community of music enthusiasts.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white rounded-lg p-6 shadow-sm">
              <div className="bg-slate-100 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                <Headphones className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-bold mb-2">Discover New Music</h3>
              <p className="text-muted-foreground">
                Be the first to hear emerging artists and new tracks before they hit mainstream platforms.
              </p>
            </div>

            <div className="bg-white rounded-lg p-6 shadow-sm">
              <div className="bg-slate-100 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                <Star className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-bold mb-2">Rate and Review</h3>
              <p className="text-muted-foreground">
                Share your honest opinions and help artists refine their sound with your valuable feedback.
              </p>
            </div>

            <div className="bg-white rounded-lg p-6 shadow-sm">
              <div className="bg-slate-100 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                <MessageSquare className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-bold mb-2">Connect with Artists</h3>
              <p className="text-muted-foreground">
                Engage directly with your favorite artists through comments, Q&As, and exclusive content.
              </p>
            </div>

            <div className="bg-white rounded-lg p-6 shadow-sm">
              <div className="bg-slate-100 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                <Users className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-bold mb-2">Join the Community</h3>
              <p className="text-muted-foreground">
                Connect with other music lovers who share your passion for discovering new sounds.
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
            Getting started as a Music Fan on SoundVolt is easy and rewarding.
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
                Sign up as a Music Fan and customize your profile with your music preferences and interests.
              </p>
            </div>

            <div className="bg-white rounded-lg p-6 shadow-sm">
              <div className="flex items-center justify-center mb-6">
                <div className="w-12 h-12 rounded-full bg-black text-white flex items-center justify-center text-xl font-bold">
                  2
                </div>
              </div>
              <h3 className="text-xl font-bold mb-2 text-center">Discover Artists</h3>
              <p className="text-muted-foreground text-center">
                Browse our curated selection of emerging artists and listen to their latest tracks.
              </p>
            </div>

            <div className="bg-white rounded-lg p-6 shadow-sm">
              <div className="flex items-center justify-center mb-6">
                <div className="w-12 h-12 rounded-full bg-black text-white flex items-center justify-center text-xl font-bold">
                  3
                </div>
              </div>
              <h3 className="text-xl font-bold mb-2 text-center">Engage and Support</h3>
              <p className="text-muted-foreground text-center">
                Rate tracks, leave feedback, and support artists you love through direct tips and engagement.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-black text-white">
        <div className="container text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Discover New Music?</h2>
          <p className="mb-8 max-w-2xl mx-auto">
            Join SoundVolt today and become part of a community that's shaping the future of music.
          </p>
          <Button asChild size="lg" variant="outline" className="font-medium bg-white text-black hover:bg-gray-100">
            <Link href="/register-fan">Register as a Music Fan</Link>
          </Button>
        </div>
      </section>
    </main>
  )
}
