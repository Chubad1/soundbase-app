import Link from "next/link"
import { Music } from "lucide-react"
import { Facebook, Twitter, Instagram, Youtube } from "lucide-react"

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-slate-900 text-white py-12">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Music className="h-6 w-6" />
              <span className="text-xl font-bold">SoundVolt</span>
            </div>
            <p className="text-slate-300 mb-4">
              Connecting music lovers, artists, and event organizers in one platform.
            </p>
            <div className="flex space-x-4">
              <Link href="#" className="text-white hover:text-primary">
                <Facebook className="h-5 w-5" />
                <span className="sr-only">Facebook</span>
              </Link>
              <Link href="#" className="text-white hover:text-primary">
                <Twitter className="h-5 w-5" />
                <span className="sr-only">Twitter</span>
              </Link>
              <Link href="#" className="text-white hover:text-primary">
                <Instagram className="h-5 w-5" />
                <span className="sr-only">Instagram</span>
              </Link>
              <Link href="#" className="text-white hover:text-primary">
                <Youtube className="h-5 w-5" />
                <span className="sr-only">YouTube</span>
              </Link>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/listen" className="text-slate-300 hover:text-white">
                  Listen to music
                </Link>
              </li>
              <li>
                <Link href="/organise" className="text-slate-300 hover:text-white">
                  Organise events
                </Link>
              </li>
              <li>
                <Link href="/sponsor" className="text-slate-300 hover:text-white">
                  Sponsor events
                </Link>
              </li>
              <li>
                <Link href="/perform" className="text-slate-300 hover:text-white">
                  Perform at events
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4">Resources</h3>
            <ul className="space-y-2">
              <li>
                                  <Link href="/resources/help" className="text-slate-300 hover:text-white">
                  Help Center
                </Link>
              </li>
              <li>
                <Link href="/resources/blog" className="text-slate-300 hover:text-white">

                  Blog
               
                </Link>
              </li>
              <li>
                <Link href="/resources/contact" className="text-slate-300 hover:text-white">

                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          <div>
           
            <ul className="space-y-2">
              <li>
              
              </li>
              <li>
               
              </li>
              <li>

              </li>
              <li>

              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-800 pt-8 text-center text-slate-400">
          <p>© {currentYear} SoundVolt. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
