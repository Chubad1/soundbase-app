import { Music, Calendar, Award, Mic } from "lucide-react"

export default function EverythingSection() {
  const features = [
    {
      icon: <Music className="h-6 w-6" />,
      title: "Listen to Music",
      description: "Discover new artists and tracks from around the world.",
    },
    {
      icon: <Calendar className="h-6 w-6" />,
      title: "Organise Events",
      description: "Create and manage music events with powerful tools.",
    },
    {
      icon: <Award className="h-6 w-6" />,
      title: "Sponsor Events",
      description: "Support artists and events you believe in.",
    },
    {
      icon: <Mic className="h-6 w-6" />,
      title: "Perform at Events",
      description: "Find opportunities to showcase your talent.",
    },
  ]

  return (
    <section className="py-16 md:py-24">
      <div className="container">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">Everything You Need for Music Events</h2>
        <p className="text-center text-muted-foreground mb-12 max-w-3xl mx-auto">
          SoundVolt connects artists, organizers, and music lovers in one platform.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
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
      </div>
    </section>
  )
}
