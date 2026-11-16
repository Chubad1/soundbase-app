interface Testimonial {
  quote: string
  name: string
  role: string
}

export default function TestimonialsSection() {
  const testimonials: Testimonial[] = [
    {
      quote:
        "SoundVolt has transformed how I discover new music events in my area. The platform is intuitive and has connected me with amazing artists.",
      name: "Alex Johnson",
      role: "Music Enthusiast",
    },
    {
      quote:
        "As an event organizer, SoundVolt has made it incredibly easy to find talented artists and promote my events to the right audience.",
      name: "Sarah Williams",
      role: "Event Organizer",
    },
    {
      quote:
        "The sponsorship opportunities on SoundVolt have helped our brand connect with music lovers in an authentic way.",
      name: "Michael Chen",
      role: "Marketing Director",
    },
  ]

  return (
    <section className="py-16 md:py-24">
      <div className="container">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">What Our Users Say</h2>
        <p className="text-center text-muted-foreground mb-12 max-w-3xl mx-auto">
          Join thousands of music lovers, artists, and event organizers on SoundVolt.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-slate-50 p-6 rounded-lg">
              <p className="italic mb-6">"{testimonial.quote}"</p>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-slate-200 rounded-full mr-4"></div>
                <div>
                  <h4 className="font-bold">{testimonial.name}</h4>
                  <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
