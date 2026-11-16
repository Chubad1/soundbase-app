"use client"

import React, { useState } from "react"

export default function CreateEventPage() {
  const [submitted, setSubmitted] = useState(false)

  if (submitted) {
    return (
      <div style={{ backgroundColor: '#fff', minHeight: '100vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', fontFamily: 'sans-serif', color: '#000' }}>
        <h1 style={{ fontSize: '24px', fontWeight: 'bold' }}>✓ Event Published!</h1>
        <p style={{ color: '#666', marginTop: '8px' }}>Your show parameters have been saved successfully.</p>
        <button onClick={() => setSubmitted(false)} style={{ marginTop: '16px', backgroundColor: '#000', color: '#fff', padding: '10px 20px', border: 'none', borderRadius: '6px', cursor: 'pointer' }}>Create Another Listing</button>
      </div>
    )
  }

  return (
    <div className="bg-white min-h-screen text-black font-sans py-12 px-6">
      <div className="max-w-xl mx-auto border border-gray-100 p-8 rounded-xl shadow-sm">
        <h1 className="text-2xl font-extrabold tracking-tight mb-6">Create Event Listing</h1>
        
        <form onSubmit={(e) => { e.preventDefault(); setSubmitted(true); }} className="space-y-4">
          <div className="flex flex-col gap-1">
            <label className="text-xs font-bold uppercase tracking-wider text-gray-500">Event Title</label>
            <input required type="text" placeholder="e.g. Afrobeats Showcase" className="border border-gray-200 px-4 py-2.5 rounded-md text-sm outline-none focus:border-black" />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="flex flex-col gap-1">
              <label className="text-xs font-bold uppercase tracking-wider text-gray-500">Show Date</label>
              <input required type="date" className="border border-gray-200 px-4 py-2.5 rounded-md text-sm outline-none focus:border-black text-gray-600" />
            </div>
            <div className="flex flex-col gap-1">
              <label className="text-xs font-bold uppercase tracking-wider text-gray-500">Doors Open</label>
              <input required type="time" className="border border-gray-200 px-4 py-2.5 rounded-md text-sm outline-none focus:border-black text-gray-600" />
            </div>
          </div>

          <div className="flex flex-col gap-1">
            <label className="text-xs font-bold uppercase tracking-wider text-gray-500">Venue Location</label>
            <input required type="text" placeholder="e.g. Landmark Centre, Victoria Island" className="border border-gray-200 px-4 py-2.5 rounded-md text-sm outline-none focus:border-black" />
          </div>

          <div className="flex flex-col gap-1">
            <label className="text-xs font-bold uppercase tracking-wider text-gray-500">Maximum Venue Capacity</label>
            <input required type="number" placeholder="e.g. 500" className="border border-gray-200 px-4 py-2.5 rounded-md text-sm outline-none focus:border-black" />
          </div>

          <div className="flex flex-col gap-1">
            <label className="text-xs font-bold uppercase tracking-wider text-gray-500">Ticket Price ($)</label>
            <input required type="number" placeholder="e.g. 20" className="border border-gray-200 px-4 py-2.5 rounded-md text-sm outline-none focus:border-black" />
          </div>

          <button type="submit" className="w-full bg-black text-white py-3 rounded-md font-medium text-sm hover:bg-gray-800 transition-colors mt-4">
            Publish Event Listing
          </button>
        </form>
      </div>
    </div>
  )
}
