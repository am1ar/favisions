import Link from "next/link"

export function Footer() {
  return (
    <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t border-light-border/20 bg-gradient-to-r from-gradient-blue via-gradient-purple to-gradient-pink text-light-background">
      <p className="text-xs">&copy; {new Date().getFullYear()} شركة رؤى بعيدة. جميع الحقوق محفوظة.</p>
      <p className="text-xs">الرقم الموحد للسجل التجاري: 7050417950</p> {/* Added commercial registration number */}
      <nav className="sm:mr-auto flex gap-4 sm:gap-6">
        <Link href="/terms-of-service" className="text-xs hover:text-white transition-colors">
          شروط الخدمة
        </Link>
        <Link href="/privacy-policy" className="text-xs hover:text-white transition-colors">
          سياسة الخصوصية
        </Link>
      </nav>
    </footer>
  )
}
