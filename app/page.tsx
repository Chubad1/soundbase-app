"use client"

import React from "react"

export default function HomePage() {
  return (
    <div className="bg-white min-h-screen font-sans text-black flex flex-col justify-between">
      {/* Header Space placeholder */}
      <div />

      {/* Core Hero Landing Space */}
      <main className="max-w-4xl mx-auto px-6 py-20 text-center space-y-8">
        <span className="text-xs font-bold uppercase tracking-widest text-gray-400 bg-gray-50 px-3 py-1.5 rounded-full border border-gray-100">
          Welcome to SoundVolt
        </span>
        <h1 className="text-5xl md:text-7xl font-black tracking-tight leading-tight">
          The Hub for Global <br />
          <span className="bg-gradient-to-r from-gray-900 to-gray-500 bg-clip-text text-transparent">Afrobeats Culture</span>
        </h1>
        <p className="text-gray-600 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
          Stream fresh talent showcases, discover trending music, organize cultural live experiences, sponsor premium live concert assets.
        </p>

        {/* Unified Platform Route Dashboard Layout Grid */}
        <div className="pt-8 grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto">
          <a href="/listen" className="p-4 border border-gray-100 bg-gray-50/50 rounded-xl hover:border-black hover:bg-white transition-all text-center group">
            <span className="block font-bold text-sm">Listen 🎧</span>
            <span className="text-[10px] text-gray-400 group-hover:text-black transition-colors block mt-1">Discover Music</span>
          </a>
          <a href="/sponsor" className="p-4 border border-gray-100 bg-gray-50/50 rounded-xl hover:border-black hover:bg-white transition-all text-center group">
            <span className="block font-bold text-sm">Sponsor 💰</span>
            <span className="text-[10px] text-gray-400 group-hover:text-black transition-colors block mt-1">Partner With Us</span>
          </a>
          <a href="/organise" className="p-4 border border-gray-100 bg-gray-50/50 rounded-xl hover:border-black hover:bg-white transition-all text-center group">
            <span className="block font-bold text-sm">Organise 🎫</span>
            <span className="text-[10px] text-gray-400 group-hover:text-black transition-colors block mt-1">Host Live Shows</span>
          </a>
          <a href="/perform" className="p-4 border border-gray-100 bg-gray-50/50 rounded-xl hover:border-black hover:bg-white transition-all text-center group">
            <span className="block font-bold text-sm">Perform 🎤</span>
            <span className="text-[10px] text-gray-400 group-hover:text-black transition-colors block mt-1">Join the Roster</span>
          </a>
        </div>
      </main>

      {/* Clean Footer Strip */}
      <footer className="py-6 border-t border-gray-50 text-center text-xs text-gray-400 font-medium">
        © {new Date().getFullYear()} SoundVolt. All rights reserved.
      </footer>
    </div>
  )
}
