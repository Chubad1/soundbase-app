"use client"

import React, { useState } from "react"
import { Calendar, Music, Shield, Ticket, CheckCircle2 } from "lucide-react"

export default function OrganisePage() {
  const [submitted, setSubmitted] = useState(false)

  const features = [
    {
      icon: <Calendar className="h-5 w-5 text-black" />,
      title: "Smart Scheduling",
      description: "Manage sound checks, set times, and artist arrivals with an intuitive visual timeline builder."
    },
    {
      icon: <Ticket className="h-5 w-5 text-black" />,
      title: "Tiered Ticketing",
      description: "Launch early-bird passes, general admission, and premium VIP table experiences instantly."
    },
    {
      icon: <Music className="h-5 w-5 text-black" />,
      title: "Talent Roster Match",
      description: "Connect directly with verified emerging and trending Afrobeats artists looking for performance spots."
    },
    {
      icon: <Shield className="h-5 w-5 text-black" />,
      title: "Secure Gate Control",
      description: "Use our streamlined digital scanner architecture to manage attendee entry flawlessly on show day."
    }
  ]

  return (
    <div className="bg-white min-h-screen font-sans text-black">
      <div className="max-w-7xl mx-auto px-6 py-16 md:px-12 lg:px-24">
        
        {/* Main Grid Layout split into 2 Columns */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* LEFT SIDE COLUMN: Core Information & Features */}
          <div className="lg:col-span-7 space-y-10">
            <div>
              <span className="text-sm font-semibold tracking-wider uppercase text-gray-500 mb-2 block">Host on SoundVolt</span>
              <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight leading-tight">
                Bring Your Next Afrobeats Event Experience to Life
              </h1>
              <p className="mt-4 text-lg text-gray-600 leading-relaxed">
                From intimate live listening parties to massive outdoor festival experiences. SoundVolt provides all the infrastructure needed to plan, book talent, and sell out your show.
              </p>
            </div>

            {/* Structured Feature List */}
            <div className="space-y-6">
              <h2 className="text-2xl font-bold tracking-tight border-b border-gray-100 pb-2">Everything You Need to Scale</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {features.map((feature, i) => (
                  <div key={i} className="p-5 border border-gray-100 rounded-lg bg-gray-50/50">
                    <div className="mb-3 bg-white p-2.5 inline-block rounded-md border border-gray-100 shadow-sm">
                      {feature.icon}
                    </div>
                    <h3 className="font-bold text-base mb-1">{feature.title}</h3>
                    <p className="text-gray-600 text-xs leading-relaxed">{feature.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* RIGHT SIDE COLUMN: Floating Creation Form Side Box */}
          <div className="lg:col-span-5 lg:sticky lg:top-8">
            <div className="border border-gray-100 p-6 sm:p-8 rounded-xl bg-white shadow-md border-t-4 border-t-black">
              
              {submitted ? (
                /* Success Message view block */
                <div className="text-center py-10 flex flex-col items-center">
                  <CheckCircle2 className="h-14 w-14 text-black mb-4" />
                  <h3 className="text-xl font-bold tracking-tight mb-2">Show Listing Created!</h3>
                  <p className="text-sm text-gray-500 leading-relaxed mb-6">
                    Your event has been successfully logged into SoundVolt. Our staging servers are compiling your listing parameters now.
                  </p>
                  <button 
                    onClick={() => setSubmitted(false)}
                    className="w-full bg-black text-white py-3 rounded-md text-sm font-medium hover:bg-gray-800 transition-colors shadow-sm"
                  >
                    Create Another Listing
                  </button>
                </div>
              ) : (
                /* Interactive Input intake form container */
                <div>
                  <h2 className="text-xl font-extrabold tracking-tight mb-1">Create Event Listing</h2>
                  <p className="text-xs text-gray-400 mb-6">Input your upcoming event parameters to go live instantly.</p>
                  
                  <form onSubmit={(e) => { e.preventDefault(); setSubmitted(true); }} className="space-y-4">
                    <div className="flex flex-col gap-1">
                      <label className="text-xs font-bold uppercase tracking-wider text-gray-500">Event Title</label>
                      <input required type="text" placeholder="e.g. Afrobeats Summer Jam" className="border border-gray-200 px-3.5 py-2.5 rounded-md text-sm outline-none focus:border-black transition-colors" />
                    </div>

                    <div className="grid grid-cols-2 gap-3">
                      <div className="flex flex-col gap-1">
                        <label className="text-xs font-bold uppercase tracking-wider text-gray-500">Show Date</label>
                        <input required type="date" className="border border-gray-200 px-3.5 py-2.5 rounded-md text-sm outline-none focus:border-black transition-colors text-gray-500" />
                      </div>
                      <div className="flex flex-col gap-1">
                        <label className="text-xs font-bold uppercase tracking-wider text-gray-500">Doors Open</label>
                        <input required type="time" className="border border-gray-200 px-3.5 py-2.5 rounded-md text-sm outline-none focus:border-black transition-colors text-gray-500" />
                      </div>
                    </div>

                    <div className="flex flex-col gap-1">
                      <label className="text-xs font-bold uppercase tracking-wider text-gray-500">Venue Location</label>
                      <input required type="text" placeholder="e.g. Landmark Centre, Lagos" className="border border-gray-200 px-3.5 py-2.5 rounded-md text-sm outline-none focus:border-black transition-colors" />
                    </div>

                    <div className="grid grid-cols-2 gap-3">
                      <div className="flex flex-col gap-1">
                        <label className="text-xs font-bold uppercase tracking-wider text-gray-500">Max Capacity</label>
                        <input required type="number" placeholder="e.g. 500" className="border border-gray-200 px-3.5 py-2.5 rounded-md text-sm outline-none focus:border-black transition-colors" />
                      </div>
                      <div className="flex flex-col gap-1">
                        <label className="text-xs font-bold uppercase tracking-wider text-gray-500">Ticket Price ($)</label>
                        <input required type="number" placeholder="e.g. 20" className="border border-gray-200 px-3.5 py-2.5 rounded-md text-sm outline-none focus:border-black transition-colors" />
                      </div>
                    </div>

                    <button type="submit" className="w-full bg-black text-white py-3 rounded-md font-medium text-sm hover:bg-gray-800 transition-colors mt-2 shadow-sm">
                      Publish Event Listing
                    </button>
                  </form>
                </div>
              )}

            </div>
          </div>

        </div>

      </div>
    </div>
  )
}
