import Link from "next/link"

export function Header() {
  return (
    <header className="px-4 lg:px-6 h-16 flex items-center justify-between border-b border-gold-500/20 bg-gradient-to-l from-dark-blue-700 to-dark-blue-900 text-white">
      <Link href="/" className="flex items-center gap-2 text-gold-500 text-2xl font-bold">
        <span className="sr-only">شركة رؤى بعيدة</span>
        شركة رؤى بعيدة
      </Link>
      <nav className="flex gap-6">
        <Link href="/" className="text-sm font-medium hover:text-gold-500 transition-colors">
          الرئيسية
        </Link>
        <Link href="/services" className="text-sm font-medium hover:text-gold-500 transition-colors">
          خدماتنا
        </Link>
        <Link href="/about" className="text-sm font-medium hover:text-gold-500 transition-colors">
          من نحن
        </Link>
        <Link href="/contact" className="text-sm font-medium hover:text-gold-500 transition-colors">
          تواصل معنا
        </Link>
      </nav>
    </header>
  )
}
