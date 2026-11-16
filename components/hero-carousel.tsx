"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight } from "lucide-react"

interface CarouselItem {
  id: number
  title: string
  description: string
  image: string
  cta: string
  ctaLink: string
  tag?: string
}

export default function HeroCarousel() {
  const [currentSlide, setCurrentSlide] = useState(0)

  const carouselItems: CarouselItem[] = [
    {
      id: 1,
      title: "Experience the Vibrant World of Afrobeats",
      description: "Connect directly with emerging artists, share your feedback, and fuel their journey.",
      image: "https://raw.githubusercontent.com/seyileo/testimage/refs/heads/main/makavery-frery-fans.jpg",
      cta: "Explore Music",
      ctaLink: "/xxx",
      tag: "Music Fans",
    },
    {
      id: 2,
      title: "Create Unforgettable Afrobeats Experiences",
      description:
        "Find sponsors, manage budgets, and access the resources you need to create unforgettable music experiences.",
      image: "https://raw.githubusercontent.com/seyileo/testimage/refs/heads/main/live_event2.jpg",
      cta: "Organise Events",
      ctaLink: "/xxx",
      tag: "Event Organizers",
    },
    {
      id: 3,
      title: "Support the Future of African Music",
      description: "Connect with your audience and grow your brand awareness through authentic Afrobeats events.",
      image: "https://raw.githubusercontent.com/seyileo/testimage/refs/heads/main/sponsor.jpg",
      cta: "Find an event to Sponsor",
      ctaLink: "/xxx",
      tag: "Sponsors",
    },
    {
      id: 4,
      title: "Share Your Afrobeats Sound",
      description: "Find your first music event to perform at. Find your voice and grow your career.",
      image: "https://raw.githubusercontent.com/seyileo/testimage/refs/heads/main/artists3.jpeg",
      cta: "Perform at event",
      ctaLink: "/perform",
      tag: "Artists",
    },
  ]

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === carouselItems.length - 1 ? 0 : prev + 1))
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? carouselItems.length - 1 : prev - 1))
  }

  const goToSlide = (index: number) => {
    setCurrentSlide(index)
  }

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide()
    }, 5000)
    return () => clearInterval(interval)
  }, [])

  return (
    <section className="relative w-full h-[500px] md:h-[600px] overflow-hidden">
      {carouselItems.map((item, index) => (
        <div
          key={item.id}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentSlide ? "opacity-100 z-10" : "opacity-0 z-0"
          }`}
        >
          <div className="absolute inset-0 bg-black/50 z-10" />
          <Image
            src={item.image || "/placeholder.svg"}
            alt={item.title}
            fill
            className="object-cover"
            priority={index === 0}
          />
          <div className="relative z-20 flex flex-col items-center justify-center h-full text-center text-white px-4 md:px-8 max-w-4xl mx-auto">
            {item.tag && (
              <span className="inline-block px-4 py-1 mb-4 text-sm font-medium bg-primary/80 rounded-full">
                {item.tag}
              </span>
            )}
            <h1 className="text-3xl md:text-5xl font-bold mb-4">{item.title}</h1>
            <p className="text-base md:text-lg mb-8 max-w-2xl">{item.description}</p>
            <Button asChild size="lg" className="font-medium">
              <Link href={item.ctaLink}>{item.cta}</Link>
            </Button>
          </div>
        </div>
      ))}

      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-30 bg-black/30 hover:bg-black/50 text-white p-2 rounded-full"
        aria-label="Previous slide"
      >
        <ChevronLeft className="h-6 w-6" />
      </button>

      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-30 bg-black/30 hover:bg-black/50 text-white p-2 rounded-full"
        aria-label="Next slide"
      >
        <ChevronRight className="h-6 w-6" />
      </button>

      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-30 flex space-x-2">
        {carouselItems.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-2.5 h-2.5 rounded-full transition-colors ${
              index === currentSlide ? "bg-white" : "bg-white/50"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  )
}
