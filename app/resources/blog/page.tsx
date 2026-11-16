"use client"

import React from "react"
import { Calendar, User, ArrowRight } from "lucide-react"

export default function BlogPage() {
  const articles = [
    {
      title: "The Rise of Afrobeats: Shaking Up the Global Live Music Ecosystem",
      excerpt: "How rising rhythms from West Africa are moving from underground sound systems straight to commanding main-stage stadium configurations.",
      date: "Aug 24, 2026",
      author: "SoundVolt Editorial",
      category: "Culture"
    },
    {
      title: "The Independent Artist Blueprint: Selling Out Showcases on Your Own Terms",
      excerpt: "A operational step-by-step breakdown on how emerging music acts can leverage tiered ticketing and asset metrics to fund production loops.",
      date: "Aug 18, 2026",
      author: "Production Desk",
      category: "Guides"
    },
    {
      title: "Sponsorship Engagement Strategies: What Corporate Brands Look For",
      excerpt: "A behind-the-scenes look at how event promoters can format pitch decks to command major corporate investment dollars.",
      date: "Aug 10, 2026",
      author: "Partnerships Desk",
      category: "Business"
    }
  ]

  return (
    <div className="bg-white min-h-screen font-sans text-black">
      {/* Blog Hub Hero Header */}
      <section className="px-6 py-20 md:px-12 lg:px-24 max-w-7xl mx-auto flex flex-col items-start justify-center border-b border-gray-100">
        <span className="text-xs font-bold uppercase tracking-widest text-gray-400 bg-gray-50 px-3 py-1.5 rounded-full border border-gray-100 mb-4">
          SoundVolt Journal
        </span>
        <h1 className="text-4xl md:text-6xl font-black tracking-tight leading-tight max-w-3xl">
          Insights, Guides, and Cultural Dispatches
        </h1>
        <p className="mt-4 text-gray-600 text-base md:text-lg max-w-xl leading-relaxed">
          Stay connected with industry movements, platform optimization strategies, and exclusive deep-dives into the live music ecosystem.
        </p>
      </section>

      {/* Articles Stream Loop Grid */}
      <section className="px-6 py-16 md:px-12 lg:px-24 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {articles.map((article, i) => (
            <article key={i} className="group border border-gray-100 rounded-xl bg-gray-50/50 p-6 flex flex-col justify-between hover:border-gray-200 hover:bg-white hover:shadow-sm transition-all duration-200">
              <div>
                <span className="inline-block text-[10px] font-bold uppercase tracking-wider bg-black text-white px-2 py-0.5 rounded mb-4">
                  {article.category}
                </span>
                <h2 className="text-lg font-extrabold tracking-tight leading-snug group-hover:text-gray-700 transition-colors mb-2">
                  {article.title}
                </h2>
                <p className="text-gray-500 text-xs leading-relaxed mb-6">
                  {article.excerpt}
                </p>
              </div>

              <div className="border-t border-gray-100 pt-4 flex items-center justify-between">
                <div className="flex items-center gap-3 text-[11px] text-gray-400 font-medium">
                  <span className="flex items-center gap-1"><Calendar className="h-3 w-3" /> {article.date}</span>
                  <span className="flex items-center gap-1"><User className="h-3 w-3" /> {article.author}</span>
                </div>
                <button className="text-black group-hover:translate-x-1 transition-transform">
                  <ArrowRight className="h-4 w-4" />
                </button>
              </div>
            </article>
          ))}
        </div>
      </section>
    </div>
  )
}
