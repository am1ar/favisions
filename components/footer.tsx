import Link from "next/link"

export function Footer() {
  return (
    <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t border-gold-500/20 bg-gradient-to-r from-dark-blue-900 to-dark-blue-700 text-gray-400">
      <p className="text-xs">&copy; {new Date().getFullYear()} شركة رؤى بعيدة. جميع الحقوق محفوظة.</p>
      <nav className="sm:mr-auto flex gap-4 sm:gap-6">
        <Link href="/terms-of-service" className="text-xs hover:text-gold-500 transition-colors">
          شروط الخدمة
        </Link>
        <Link href="/privacy-policy" className="text-xs hover:text-gold-500 transition-colors">
          سياسة الخصوصية
        </Link>
      </nav>
    </footer>
  )
}
