"use client"
import { useState, useEffect, useRef } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Menu, X, ChevronDown, Building2, PaintBucket, Hammer, Monitor, Truck, BarChart3, ImageIcon, FolderOpen } from "lucide-react"
import Image from "next/image"

const servicesItems = [
  { href: "/construction-services", label: "خدمات الإنشاءات", icon: Building2, desc: "بناء وتشييد المباني والمنشآت" },
  { href: "/finishes", label: "خدمات التشطيبات", icon: PaintBucket, desc: "تشطيبات داخلية وخارجية عالية الجودة" },
  { href: "/woodworking-services", label: "خدمات النجارة", icon: Hammer, desc: "أعمال نجارة فاخرة ومخصصة" },
  { href: "/it-services", label: "تقنية المعلومات", icon: Monitor, desc: "حلول تقنية متكاملة ومبتكرة" },
  { href: "/logistics-services", label: "الخدمات اللوجستية", icon: Truck, desc: "إدارة سلسلة الإمداد والنقل" },
  { href: "/data-analytics", label: "تحليل البيانات", icon: BarChart3, desc: "تحليلات ذكية لقرارات أفضل" },
]

const galleryItems = [
  { href: "/construction-gallery", label: "معرض الإنشاءات", icon: Building2 },
  { href: "/woodworking-gallery", label: "معرض النجارة", icon: Hammer },
  { href: "/finishes-gallery", label: "معرض التشطيبات", icon: PaintBucket },
  { href: "/projects", label: "المشاريع", icon: FolderOpen },
]

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null)
  const dropdownTimeoutRef = useRef<NodeJS.Timeout | null>(null)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = ""
    }
    return () => { document.body.style.overflow = "" }
  }, [isMenuOpen])

  const handleMouseEnter = (key: string) => {
    if (dropdownTimeoutRef.current) clearTimeout(dropdownTimeoutRef.current)
    setActiveDropdown(key)
  }

  const handleMouseLeave = () => {
    dropdownTimeoutRef.current = setTimeout(() => setActiveDropdown(null), 150)
  }

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white shadow-lg shadow-navy-900/10 border-b border-border"
          : "bg-white border-b border-border"
      }`}
    >
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center shrink-0">
            <Image
              src="/farvisions-logo.png"
              alt="شركة رؤى بعيدة"
              width={160}
              height={64}
              className="h-10 w-auto sm:h-12 md:h-14 lg:h-16"
              priority
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1">
            <Link
              href="/"
              className={`px-3 py-2 rounded-lg text-sm font-medium transition-colors duration-200 text-navy-600 hover:text-navy-800 hover:bg-navy-50`}
            >
              الرئيسية
            </Link>

            {/* Services Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => handleMouseEnter("services")}
              onMouseLeave={handleMouseLeave}
            >
              <button
                className={`flex items-center gap-1 px-3 py-2 rounded-lg text-sm font-medium transition-colors duration-200 text-navy-600 hover:text-navy-800 hover:bg-navy-50`}
              >
                خدماتنا
                <ChevronDown className={`h-3.5 w-3.5 transition-transform duration-200 ${activeDropdown === "services" ? "rotate-180" : ""}`} />
              </button>

              {activeDropdown === "services" && (
                <div className="absolute top-full start-1/2 -translate-x-1/2 pt-2 animate-slide-down">
                  <div className="bg-white rounded-xl shadow-xl shadow-navy-900/10 border border-border p-2 min-w-[420px] grid grid-cols-2 gap-1">
                    {servicesItems.map((item) => (
                      <Link
                        key={item.href}
                        href={item.href}
                        className="flex items-start gap-3 p-3 rounded-lg hover:bg-cyan-50 transition-colors duration-200 group"
                      >
                        <div className="w-9 h-9 rounded-lg bg-cyan-50 group-hover:bg-cyan-100 flex items-center justify-center shrink-0 transition-colors">
                          <item.icon className="h-4.5 w-4.5 text-cyan-500" />
                        </div>
                        <div>
                          <span className="text-sm font-medium text-foreground block">{item.label}</span>
                          <span className="text-xs text-muted-foreground leading-relaxed">{item.desc}</span>
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Gallery Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => handleMouseEnter("gallery")}
              onMouseLeave={handleMouseLeave}
            >
              <button
                className={`flex items-center gap-1 px-3 py-2 rounded-lg text-sm font-medium transition-colors duration-200 text-navy-600 hover:text-navy-800 hover:bg-navy-50`}
              >
                أعمالنا
                <ChevronDown className={`h-3.5 w-3.5 transition-transform duration-200 ${activeDropdown === "gallery" ? "rotate-180" : ""}`} />
              </button>

              {activeDropdown === "gallery" && (
                <div className="absolute top-full start-1/2 -translate-x-1/2 pt-2 animate-slide-down">
                  <div className="bg-white rounded-xl shadow-xl shadow-navy-900/10 border border-border p-2 min-w-[220px]">
                    {galleryItems.map((item) => (
                      <Link
                        key={item.href}
                        href={item.href}
                        className="flex items-center gap-3 px-3 py-2.5 rounded-lg hover:bg-cyan-50 transition-colors duration-200 group"
                      >
                        <item.icon className="h-4 w-4 text-cyan-500" />
                        <span className="text-sm font-medium text-foreground">{item.label}</span>
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>

            <Link
              href="/project-workflow"
              className={`px-3 py-2 rounded-lg text-sm font-medium transition-colors duration-200 text-navy-600 hover:text-navy-800 hover:bg-navy-50`}
            >
              رحلة المشروع
            </Link>

            <Link
              href="/about"
              className={`px-3 py-2 rounded-lg text-sm font-medium transition-colors duration-200 text-navy-600 hover:text-navy-800 hover:bg-navy-50`}
            >
              من نحن
            </Link>

            <Link
              href="/news"
              className={`px-3 py-2 rounded-lg text-sm font-medium transition-colors duration-200 text-navy-600 hover:text-navy-800 hover:bg-navy-50`}
            >
              الأخبار
            </Link>
          </nav>

          {/* CTA Button (desktop) */}
          <div className="hidden lg:block">
            <Button asChild variant="accent" size="default">
              <Link href="/contact">تواصل معنا</Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className={`lg:hidden p-2 rounded-lg transition-colors text-navy-600 hover:bg-navy-50 hover:text-navy-800`}
            aria-label={isMenuOpen ? "إغلاق القائمة" : "فتح القائمة"}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Overlay Menu */}
      {isMenuOpen && (
        <div className="lg:hidden fixed inset-0 top-[64px] md:top-[80px] z-40 bg-black/50 backdrop-blur-sm" onClick={() => setIsMenuOpen(false)}>
          <div className="relative bg-background w-full max-w-sm h-full overflow-y-auto ml-auto shadow-lg">
            <nav className="px-4 py-6 flex flex-col gap-1">
              <Link
                href="/"
                onClick={() => setIsMenuOpen(false)}
                className="px-4 py-3 rounded-lg text-navy-600 hover:text-navy-800 hover:bg-navy-50 font-medium transition-colors animate-stagger-in"
                style={{ animationDelay: "0ms" }}
              >
                الرئيسية
              </Link>

              {/* Mobile Services Section */}
              <div className="animate-stagger-in" style={{ animationDelay: "50ms" }}>
                <p className="px-4 py-2 text-xs font-bold text-navy-600 uppercase tracking-wider">خدماتنا</p>
                {servicesItems.map((item, i) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => setIsMenuOpen(false)}
                    className="flex items-center gap-3 px-4 py-3 rounded-lg text-navy-600 hover:text-navy-800 hover:bg-cyan-50 transition-colors animate-stagger-in"
                    style={{ animationDelay: `${100 + i * 40}ms` }}
                  >
                    <div className="w-8 h-8 rounded-lg bg-cyan-50 flex items-center justify-center">
                      <item.icon className="h-4 w-4 text-cyan-500" />
                    </div>
                    <span className="font-medium">{item.label}</span>
                  </Link>
                ))}
              </div>

              {/* Mobile Gallery Section */}
              <div className="animate-stagger-in" style={{ animationDelay: "340ms" }}>
                <p className="px-4 py-2 text-xs font-bold text-navy-600 uppercase tracking-wider mt-2">أعمالنا</p>
                {galleryItems.map((item, i) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => setIsMenuOpen(false)}
                    className="flex items-center gap-3 px-4 py-3 rounded-lg text-navy-600 hover:text-navy-800 hover:bg-cyan-50 transition-colors animate-stagger-in"
                    style={{ animationDelay: `${380 + i * 40}ms` }}
                  >
                    <div className="w-8 h-8 rounded-lg bg-cyan-50 flex items-center justify-center">
                      <item.icon className="h-4 w-4 text-cyan-500" />
                    </div>
                    <span className="font-medium">{item.label}</span>
                  </Link>
                ))}
              </div>

              <div className="h-px bg-border my-2" />

              <Link
                href="/project-workflow"
                onClick={() => setIsMenuOpen(false)}
                className="px-4 py-3 rounded-lg text-navy-600 hover:text-navy-800 hover:bg-navy-50 font-medium transition-colors animate-stagger-in"
                style={{ animationDelay: "540ms" }}
              >
                رحلة المشروع
              </Link>
              <Link
                href="/about"
                onClick={() => setIsMenuOpen(false)}
                className="px-4 py-3 rounded-lg text-navy-600 hover:text-navy-800 hover:bg-navy-50 font-medium transition-colors animate-stagger-in"
                style={{ animationDelay: "580ms" }}
              >
                من نحن
              </Link>
              <Link
                href="/news"
                onClick={() => setIsMenuOpen(false)}
                className="px-4 py-3 rounded-lg text-navy-600 hover:text-navy-800 hover:bg-navy-50 font-medium transition-colors animate-stagger-in"
                style={{ animationDelay: "620ms" }}
              >
                الأخبار
              </Link>
              <Link
                href="/recruitment"
                onClick={() => setIsMenuOpen(false)}
                className="px-4 py-3 rounded-lg text-navy-600 hover:text-navy-800 hover:bg-navy-50 font-medium transition-colors animate-stagger-in"
                style={{ animationDelay: "660ms" }}
              >
                التوظيف
              </Link>

              <div className="pt-4 animate-stagger-in" style={{ animationDelay: "700ms" }}>
                <Button asChild variant="accent" size="lg" className="w-full">
                  <Link href="/contact" onClick={() => setIsMenuOpen(false)}>
                    تواصل معنا
                  </Link>
                </Button>
              </div>
            </nav>
          </div>
        </div>
      )}
    </header>
  )
}
