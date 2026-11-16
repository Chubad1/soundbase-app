"use client"

import React from "react"
import { Music, Ticket, ShieldQuestion, ArrowRight } from "lucide-react"

export default function HelpCenterPage() {
  const categories = [
    {
      icon: <Ticket className="h-6 w-6 text-black" />,
      title: "Ticket Support",
      description: "How to purchase, upgrade, transfer, or request modifications on event entry passes."
    },
    {
      icon: <Music className="h-6 w-6 text-black" />,
      title: "Artist & Roster Hub",
      description: "Managing performance profiles, submitting portfolio details, and tracking talent offer states."
    },
    {
      icon: <ShieldQuestion className="h-6 w-6 text-black" />,
      title: "Organizer Infrastructure",
      description: "Setting up event dashboards, handling ticket pay-outs, and configuring entry gate scanner locks."
    }
  ]

  return (
    <div className="bg-white min-h-screen font-sans text-black">
      {/* Help Hero Header Area */}
      <section className="px-6 py-20 md:px-12 lg:px-24 max-w-7xl mx-auto flex flex-col items-center text-center border-b border-gray-100 space-y-4">
        <span className="text-sm font-semibold tracking-wider uppercase text-gray-500">SoundVolt Knowledge Base</span>
        <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight">How can we help you today?</h1>
        <p className="text-gray-500 text-sm max-w-md leading-relaxed">
          Select a directory below to find step-by-step guides, terms, and technical platform instructions.
        </p>
      </section>

      {/* Guide Category Content Matrix Grid */}
      <section className="px-6 py-16 md:px-12 lg:px-24 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {categories.map((category, i) => (
            <div key={i} className="p-6 border border-gray-100 rounded-xl bg-gray-50/50 flex flex-col justify-between hover:border-gray-200 transition-all">
              <div>
                <div className="mb-4 bg-white p-3 inline-block rounded-md shadow-sm border border-gray-100">
                  {category.icon}
                </div>
                <h3 className="font-bold text-lg mb-2">{category.title}</h3>
                <p className="text-gray-600 text-xs leading-relaxed mb-6">{category.description}</p>
              </div>
              
              <button className="text-xs font-bold text-black flex items-center gap-1 hover:underline self-start">
                View Articles <ArrowRight className="h-3 w-3" />
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* Quick Troubleshooting Segment */}
      <section className="bg-gray-50 border-t border-b border-gray-100 px-6 py-12 text-center">
        <p className="text-xs text-gray-500 font-medium">Can't find what you are looking for?</p>
        <p className="text-sm text-gray-700 mt-1">Our rapid response operations team is available 24/7 to clear platform bottlenecks.</p>
        <a href="/resources/contact" className="inline-block mt-4 bg-black text-white px-5 py-2.5 rounded-md text-xs font-medium hover:bg-gray-800 transition-colors shadow-sm">
          Open Support Ticket
        </a>
      </section>
    </div>
  )
}
