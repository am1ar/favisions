import Link from "next/link"

export function Header() {
  return (
    <header className="px-4 lg:px-6 h-16 flex items-center justify-between border-b border-light-border/20 bg-gradient-to-l from-gradient-blue via-gradient-purple to-gradient-pink text-light-background">
      <Link href="/" className="flex items-center gap-2 text-light-background text-2xl font-bold">
        <span className="sr-only">شركة رؤى بعيدة</span>
        شركة رؤى بعيدة
      </Link>
      <nav className="flex gap-6">
        <Link href="/" className="text-sm font-medium hover:text-white transition-colors">
          الرئيسية
        </Link>
        <Link href="/services" className="text-sm font-medium hover:text-white transition-colors">
          خدماتنا
        </Link>
        <Link href="/about" className="text-sm font-medium hover:text-white transition-colors">
          من نحن
        </Link>
        <Link href="/contact" className="text-sm font-medium hover:text-white transition-colors">
          تواصل معنا
        </Link>
      </nav>
    </header>
  )
}
