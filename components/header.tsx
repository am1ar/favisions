"use client"
import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"
import Image from "next/image"

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-luxury-navy/95 backdrop-blur-md border-b border-luxury-gold/20">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2 space-x-reverse">
            <Image 
              src="/logo.png" 
              alt="Company Logo"
              width={120}
              height={40}
              className="h-8 w-auto sm:h-10 md:h-12 lg:h-14"
              priority
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8 space-x-reverse">
            <Link href="/services" className="text-luxury-ivory hover:text-luxury-gold transition-colors font-medium">
              خدماتنا
            </Link>
            <Link href="/about" className="text-luxury-ivory hover:text-luxury-gold transition-colors font-medium">
              من نحن
            </Link>
            <Link href="/project-workflow" className="text-luxury-ivory hover:text-luxury-gold transition-colors font-medium">
              رحلة المشروع
            </Link>
            <Link href="/contact" className="text-luxury-ivory hover:text-luxury-gold transition-colors font-medium">
              تواصل معنا
            </Link>
          </nav>

          {/* CTA Button */}
          <div className="hidden lg:block">
            <Button
              asChild
              className="bg-luxury-gold text-luxury-navy hover:bg-luxury-gold-light"
            >
              <Link href="/project-workflow">ابدأ مشروعك</Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            className="lg:hidden p-2 text-luxury-ivory hover:text-luxury-gold transition-colors"
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden py-4 border-t border-luxury-gold/20">
            <nav className="flex flex-col space-y-4 space-y-reverse">
              <Link
                href="/services"
                className="text-luxury-ivory hover:text-luxury-gold transition-colors font-medium py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                خدماتنا
              </Link>
              <Link
                href="/about"
                className="text-luxury-ivory hover:text-luxury-gold transition-colors font-medium py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                من نحن
              </Link>
              <Link
                href="/project-workflow"
                className="text-luxury-ivory hover:text-luxury-gold transition-colors font-medium py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                رحلة المشروع
              </Link>
              <Link
                href="/contact"
                className="text-luxury-ivory hover:text-luxury-gold transition-colors font-medium py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                تواصل معنا
              </Link>
              <div className="pt-4">
                <Button
                  asChild
                  className="w-full bg-luxury-gold text-luxury-navy hover:bg-luxury-gold-light"
                >
                  <Link href="/project-workflow" onClick={() => setIsMenuOpen(false)}>
                    ابدأ مشروعك
                  </Link>
                </Button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}
