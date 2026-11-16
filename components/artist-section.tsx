import { Star, DollarSign, Award, Calendar } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function ArtistSection() {
  const features = [
    {
      icon: <Star className="h-6 w-6" />,
      title: "Get Real Feedback",
      description: "Receive valuable ratings and reviews directly from listeners to help you refine your craft.",
    },
    {
      icon: <DollarSign className="h-6 w-6" />,
      title: "Earn Direct Support",
      description: "Enable fans to send you tips and micro-donations, fueling your creative journey.",
    },
    {
      icon: <Award className="h-6 w-6" />,
      title: "Gain Recognition",
      description:
        "Increase your visibility within the SoundVolt community and get noticed by passionate music lovers.",
    },
    {
      icon: <Calendar className="h-6 w-6" />,
      title: "Access Event Opportunities",
      description: "Connect with event organisers looking for fresh talent.",
    },
  ]

  return (
    <section className="py-16 md:py-24 bg-slate-50">
      <div className="container">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          For the Artist: Amplify Your Voice and Grow Your Fanbase
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
          <Button asChild size="lg" className="font-medium bg-indigo-600 hover:bg-indigo-700">
            <Link href="/join-artist">Join as an Artist</Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
