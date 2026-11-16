"use client"

import React, { useState } from "react"
import { Mail, MapPin, CheckCircle2 } from "lucide-react"

export default function ContactUsPage() {
  const [submitted, setSubmitted] = useState(false)

  return (
    <div className="bg-white min-h-screen font-sans text-black">
      <div className="max-w-7xl mx-auto px-6 py-16 md:px-12 lg:px-24">
        
        {/* Main Grid Layout split into 2 Columns */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* LEFT SIDE COLUMN: Core Information & Direct Channels */}
          <div className="lg:col-span-6 space-y-8">
            <div>
              <span className="text-sm font-semibold tracking-wider uppercase text-gray-500 mb-2 block">Connect with Us</span>
              <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight leading-tight">
                Get in Touch with the SoundVolt Desk
              </h1>
              <p className="mt-4 text-base text-gray-600 leading-relaxed">
                Have questions about live bookings, ticket parameters, or corporate integration tracks? Reach out directly and our operations team will clear your bottlenecks.
              </p>
            </div>

            {/* Direct Channel Cards */}
            <div className="space-y-4 pt-4">
              <div className="flex items-center gap-4 p-4 border border-gray-100 rounded-xl bg-gray-50/50">
                <div className="bg-white p-2.5 rounded-lg border border-gray-100 shadow-sm">
                  <Mail className="h-5 w-5 text-black" />
                </div>
                <div>
                  <h3 className="text-xs font-bold uppercase tracking-wider text-gray-400">General Support</h3>
                  <p className="text-sm font-medium text-black">support@SoundVolt.com</p>
                </div>
              </div>

              <div className="flex items-center gap-4 p-4 border border-gray-100 rounded-xl bg-gray-50/50">
                <div className="bg-white p-2.5 rounded-lg border border-gray-100 shadow-sm">
                  <MapPin className="h-5 w-5 text-black" />
                </div>
                <div>
                  <h3 className="text-xs font-bold uppercase tracking-wider text-gray-400">Headquarters</h3>
                  <p className="text-sm font-medium text-black">Victoria Island, Lagos, Nigeria</p>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT SIDE COLUMN: Interactive Message Side Box */}
          <div className="lg:col-span-6">
            <div className="border border-gray-100 p-6 sm:p-8 rounded-xl bg-white shadow-md border-t-4 border-t-black">
              
              {submitted ? (
                /* Success View Block */
                <div className="text-center py-12 flex flex-col items-center">
                  <CheckCircle2 className="h-14 w-14 text-black mb-4" />
                  <h3 className="text-xl font-bold tracking-tight mb-2">Message Dispatched!</h3>
                  <p className="text-sm text-gray-500 leading-relaxed mb-6">
                    Your transmission has been securely delivered to our desk. An operations agent will respond within 12 business hours.
                  </p>
                  <button 
                    onClick={() => setSubmitted(false)}
                    className="w-full bg-black text-white py-3 rounded-md text-sm font-medium hover:bg-gray-800 transition-colors shadow-sm"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                /* Input Form Box Container */
                <div>
                  <h2 className="text-xl font-extrabold tracking-tight mb-1">Send a Message</h2>
                  <p className="text-xs text-gray-400 mb-6">Drop us a line and we will handle the rest.</p>
                  
                  <form onSubmit={(e) => { e.preventDefault(); setSubmitted(true); }} className="space-y-4">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="flex flex-col gap-1">
                        <label className="text-xs font-bold uppercase tracking-wider text-gray-500">Your Name</label>
                        <input required type="text" placeholder="John Doe" className="border border-gray-200 px-3.5 py-2.5 rounded-md text-sm outline-none focus:border-black transition-colors" />
                      </div>
                      <div className="flex flex-col gap-1">
                        <label className="text-xs font-bold uppercase tracking-wider text-gray-500">Email Address</label>
                        <input required type="email" placeholder="john@domain.com" className="border border-gray-200 px-3.5 py-2.5 rounded-md text-sm outline-none focus:border-black transition-colors" />
                      </div>
                    </div>

                    <div className="flex flex-col gap-1">
                      <label className="text-xs font-bold uppercase tracking-wider text-gray-500">Inquiry Subject</label>
                      <input required type="text" placeholder="e.g. Question about ticket processing" className="border border-gray-200 px-3.5 py-2.5 rounded-md text-sm outline-none focus:border-black transition-colors" />
                    </div>

                    <div className="flex flex-col gap-1">
                      <label className="text-xs font-bold uppercase tracking-wider text-gray-500">Message Content</label>
                      <textarea required rows={4} placeholder="Type your detailed message or platform inquiry here..." className="border border-gray-200 px-3.5 py-2.5 rounded-md text-sm outline-none focus:border-black transition-colors resize-none"></textarea>
                    </div>

                    <button type="submit" className="w-full bg-black text-white py-3 rounded-md font-medium text-sm hover:bg-gray-800 transition-colors mt-2 shadow-sm">
                      Dispatch Message
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
