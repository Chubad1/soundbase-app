import { MessageSquare, LinkIcon, Crown, Headphones } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function MusicLoverSection() {
  const features = [
    {
      icon: <MessageSquare className="h-6 w-6" />,
      title: "Give Your Feedback",
      description: "Share your honest opinions with emerging artists through ratings and reviews.",
    },
    {
      icon: <LinkIcon className="h-6 w-6" />,
      title: "Support Directly",
      description: "Tip your favorite artists and help them continue creating the music you love.",
    },
    {
      icon: <Crown className="h-6 w-6" />,
      title: "Become a Superfan",
      description: "Earn recognition and potentially exclusive access for being an early supporter.",
    },
    {
      icon: <Headphones className="h-6 w-6" />,
      title: "Connect with Artists",
      description: "Engage in Q&As and see how your feedback makes a difference.",
    },
  ]

  return (
    <section className="py-16 md:py-24 bg-slate-50">
      <div className="container">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          For the Music Lover: Shape the Future of Music
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {features.map((feature, index) => (
            <div key={index} className="bg-white rounded-lg p-6 shadow-sm">
              <div className="bg-slate-100 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
              <p className="text-muted-foreground">{feature.description}</p>
            </div>
          ))}
        </div>

        <div className="flex justify-center">
          <Button asChild size="lg" className="font-medium">
            <Link href="/join">Join the SoundVolt Community</Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
