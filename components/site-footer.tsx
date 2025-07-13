import Link from "next/link"
import Image from "next/image"
import { Facebook, Instagram, Linkedin, Twitter } from "lucide-react"

export default function SiteFooter() {
  return (
    <footer className="w-full py-12 md:py-16 border-t border-nxg-gray bg-nxg-dark text-nxg-light">
      <div className="container px-6 md:px-12 flex flex-col md:flex-row items-center justify-between gap-8">
        <div className="flex items-center gap-4">
          <Image
            src="/logo.png"
            width={150}
            height={40}
            alt="Novex Holding Group Logo"
            className="h-10 w-auto"
          />
          <span className="text-base text-nxg-light/70">
            &copy; {new Date().getFullYear()} Novex Holding Group. All rights reserved.
          </span>
        </div>
        <nav className="flex flex-wrap justify-center gap-6 sm:gap-8">
          <Link
            href="#"
            className="text-base hover:underline underline-offset-4 text-nxg-light/70 hover:text-nxg-gold transition-colors"
          >
            Privacy Policy
          </Link>
          <Link
            href="#"
            className="text-base hover:underline underline-offset-4 text-nxg-light/70 hover:text-nxg-gold transition-colors"
          >
            Terms of Service
          </Link>
          <Link
            href="#"
            className="text-base hover:underline underline-offset-4 text-nxg-light/70 hover:text-nxg-gold transition-colors"
          >
            Sitemap
          </Link>
        </nav>
        <div className="flex gap-5">
          <Link href="#" aria-label="Facebook">
            <Facebook className="h-7 w-7 text-nxg-light/70 hover:text-nxg-gold transition-colors" />
          </Link>
          <Link href="#" aria-label="Twitter">
            <Twitter className="h-7 w-7 text-nxg-light/70 hover:text-nxg-gold transition-colors" />
          </Link>
          <Link href="#" aria-label="LinkedIn">
            <Linkedin className="h-7 w-7 text-nxg-light/70 hover:text-nxg-gold transition-colors" />
          </Link>
          <Link href="#" aria-label="Instagram">
            <Instagram className="h-7 w-7 text-nxg-light/70 hover:text-nxg-gold transition-colors" />
          </Link>
        </div>
      </div>
    </footer>
  )
}
