"use client"

import React, { useState } from "react"
import { Target, Users, Zap, ShieldCheck, CheckCircle2 } from "lucide-react"

export default function SponsorPage() {
  const [submitted, setSubmitted] = useState(false)

  const benefits = [
    {
      icon: <Users className="h-5 w-5 text-black" />,
      title: "Targeted Audience",
      description: "Connect directly with passionate Afrobeats fans, emerging musical talents, and cultural tastemakers."
    },
    {
      icon: <Zap className="h-5 w-5 text-black" />,
      title: "Brand Visibility",
      description: "Get premium logo placement across physical event stages, digital live streams, and our active web application."
    },
    {
      icon: <Target className="h-5 w-5 text-black" />,
      title: "Experiential Marketing",
      description: "Activate your brand through custom VIP lounges, interactive product booths, and exclusive artist meet-and-greets."
    },
    {
      icon: <ShieldCheck className="h-5 w-5 text-black" />,
      title: "Data Insights",
      description: "Receive comprehensive post-event analytics reporting on audience engagement levels and digital brand impressions."
    }
  ]

  const tiers = [
    {
      name: "Supporting Partner",
      price: "$10,000",
      features: ["Logo on digital flyers", "2x Social media spots", "4x VIP passes"]
    },
    {
      name: "Main Stage Sponsor",
      price: "$35,000",
      features: ["Co-branded stage naming rights", "Newsletter feature", "8x VIP passes"]
    },
    {
      name: "Headline Presenter",
      price: "$75,000",
      features: ["'Presented By' title rights", "Main stage video spot", "15x VIP passes"]
    }
  ]

  return (
    <div className="bg-white min-h-screen font-sans text-black">
      <div className="max-w-7xl mx-auto px-6 py-16 md:px-12 lg:px-24">
        
        {/* Main Grid Layout split into 2 Columns */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* LEFT SIDE COLUMN: Core Information, Benefits, and Packages */}
          <div className="lg:col-span-7 space-y-12">
            <div>
              <span className="text-sm font-semibold tracking-wider uppercase text-gray-500 mb-2 block">Partner with SoundVolt</span>
              <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight leading-tight">
                Elevate Your Brand Through the Vibrant Energy of Afrobeats
              </h1>
              <p className="mt-4 text-lg text-gray-600 leading-relaxed">
                Position your company at the center of the world's fastest-growing musical movement. Sponsor premium showcase concerts, festivals, and artist networking events.
              </p>
            </div>

            {/* Structured Value Grid */}
            <div className="space-y-6">
              <h2 className="text-2xl font-bold tracking-tight border-b border-gray-100 pb-2">Why Sponsor Our Events?</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {benefits.map((benefit, i) => (
                  <div key={i} className="p-5 border border-gray-100 rounded-lg bg-gray-50/50">
                    <div className="mb-3 bg-white p-2.5 inline-block rounded-md border border-gray-100 shadow-sm">
                      {benefit.icon}
                    </div>
                    <h3 className="font-bold text-base mb-1">{benefit.title}</h3>
                    <p className="text-gray-600 text-xs leading-relaxed">{benefit.description}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Premium Sponsorship Tiers Summary Layout */}
            <div className="space-y-6">
              <h2 className="text-2xl font-bold tracking-tight border-b border-gray-100 pb-2">Sponsorship Investment Tiers</h2>
              <div className="space-y-4">
                {tiers.map((tier, i) => (
                  <div key={i} className="p-5 border border-gray-200 rounded-xl bg-white flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                    <div>
                      <h3 className="font-extrabold text-lg">{tier.name}</h3>
                      <div className="mt-2 flex flex-wrap gap-x-4 gap-y-1 text-xs text-gray-500">
                        {tier.features.map((feature, fIdx) => (
                          <span key={fIdx} className="flex items-center gap-1">✓ {feature}</span>
                        ))}
                      </div>
                    </div>
                    <div className="text-left sm:text-right border-t sm:border-t-0 border-gray-100 pt-3 sm:pt-0">
                      <span className="text-2xl font-black tracking-tight block">{tier.price}</span>
                      <span className="text-gray-400 text-xs tracking-wide uppercase font-semibold">per show block</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>

          {/* RIGHT SIDE COLUMN: Floating Partnership Intake Side Box */}
          <div className="lg:col-span-5 lg:sticky lg:top-8">
            <div className="border border-gray-100 p-6 sm:p-8 rounded-xl bg-white shadow-md border-t-4 border-t-black">
              
              {submitted ? (
                /* Success View block */
                <div className="text-center py-12 flex flex-col items-center">
                  <CheckCircle2 className="h-14 w-14 text-black mb-4" />
                  <h3 className="text-xl font-bold tracking-tight mb-2">Inquiry Submitted!</h3>
                  <p className="text-sm text-gray-500 leading-relaxed mb-6">
                    Thank you. A SoundVolt partnership manager will evaluate your parameters and connect with your team within 24 business hours.
                  </p>
                  <button 
                    onClick={() => setSubmitted(false)}
                    className="w-full bg-black text-white py-3 rounded-md text-sm font-medium hover:bg-gray-800 transition-colors shadow-sm"
                  >
                    Submit Another Inquiry
                  </button>
                </div>
              ) : (
                /* Interactive Partnership Input form container */
                <div>
                  <h2 className="text-xl font-extrabold tracking-tight mb-1">Partner Inquiry Form</h2>
                  <p className="text-xs text-gray-400 mb-6">Connect with our event production desk directly.</p>
                  
                  <form onSubmit={(e) => { e.preventDefault(); setSubmitted(true); }} className="space-y-4">
                    <div className="flex flex-col gap-1">
                      <label className="text-xs font-bold uppercase tracking-wider text-gray-500">Contact Name</label>
                      <input required type="text" placeholder="e.g. John Doe" className="border border-gray-200 px-3.5 py-2.5 rounded-md text-sm outline-none focus:border-black transition-colors" />
                    </div>

                    <div className="flex flex-col gap-1">
                      <label className="text-xs font-bold uppercase tracking-wider text-gray-500">Corporate Email</label>
                      <input required type="email" placeholder="e.g. john@company.com" className="border border-gray-200 px-3.5 py-2.5 rounded-md text-sm outline-none focus:border-black transition-colors" />
                    </div>

                    <div className="flex flex-col gap-1">
                      <label className="text-xs font-bold uppercase tracking-wider text-gray-500">Company Name</label>
                      <input required type="text" placeholder="e.g. Brand Group International" className="border border-gray-200 px-3.5 py-2.5 rounded-md text-sm outline-none focus:border-black transition-colors" />
                    </div>

                    <div className="flex flex-col gap-1">
                      <label className="text-xs font-bold uppercase tracking-wider text-gray-500">Target Budget Tier</label>
                      <select className="border border-gray-200 px-3.5 py-2.5 rounded-md text-sm bg-white outline-none focus:border-black transition-colors">
                        <option>$10,000 - Supporting Partner</option>
                        <option>$35,000 - Main Stage Sponsor</option>
                        <option>$75,000+ - Headline Presenter</option>
                        <option>Custom Enterprise Activation</option>
                      </select>
                    </div>

                    <div className="flex flex-col gap-1">
                      <label className="text-xs font-bold uppercase tracking-wider text-gray-500">Campaign Objectives</label>
                      <textarea rows={3} placeholder="Briefly describe your marketing activation goals..." className="border border-gray-200 px-3.5 py-2.5 rounded-md text-sm outline-none focus:border-black transition-colors resize-none"></textarea>
                    </div>

                    <button type="submit" className="w-full bg-black text-white py-3 rounded-md font-medium text-sm hover:bg-gray-800 transition-colors mt-2 shadow-sm">
                      Submit Partnership Request
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
