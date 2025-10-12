import Link from "next/link"
import { Instagram, Linkedin, Twitter } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-luxury-navy text-luxury-ivory border-t border-luxury-gold/20">
      <div className="container mx-auto px-4 md:px-6 py-8">
        <div className="grid gap-6 md:grid-cols-4">
          {/* Company Info */}
          <div className="space-y-3">
            <h3 className="text-xl font-bold text-luxury-gold">شركة رؤى بعيدة</h3>
            <p className="text-luxury-ivory/80 text-sm">
              نقدم خدمات متكاملة في الإنشاءات والتشطيبات والنجارة الفاخرة،
              بالإضافة إلى خدمات تقنية المعلومات والخدمات اللوجستية المتقدمة وتطوير أنظمة سلسلة التوريد.
              نلتزم بأعلى معايير الجودة والاحترافية في جميع مشاريعنا.
            </p>
            <div className="flex space-x-4 space-x-reverse">
              <a href="https://x.com/far_visions" target="_blank" rel="noopener noreferrer" className="w-8 h-8 bg-luxury-gold rounded-full flex items-center justify-center hover:bg-luxury-gold-light transition-colors">
                <Twitter className="h-4 w-4 text-luxury-navy" />
              </a>
              <a href="https://www.instagram.com/farvisions" target="_blank" rel="noopener noreferrer" className="w-8 h-8 bg-luxury-gold rounded-full flex items-center justify-center hover:bg-luxury-gold-light transition-colors">
                <Instagram className="h-4 w-4 text-luxury-navy" />
              </a>
              <a href="https://www.linkedin.com/company/far-vision/" target="_blank" rel="noopener noreferrer" className="w-8 h-8 bg-luxury-gold rounded-full flex items-center justify-center hover:bg-luxury-gold-light transition-colors">
                <Linkedin className="h-4 w-4 text-luxury-navy" />
              </a>
            </div>
          </div>

          {/* Services */}
          <div className="space-y-3">
            <h3 className="text-lg font-bold text-luxury-gold">خدماتنا</h3>
            <ul className="space-y-2 text-sm text-luxury-ivory/80">
              <li>
                <Link href="/construction-services" className="hover:text-luxury-gold transition-colors">
                  خدمات الإنشاءات
                </Link>
              </li>
              <li>
                <Link href="/finishes" className="hover:text-luxury-gold transition-colors">
                  خدمات التشطيبات
                </Link>
              </li>
              <li>
                <Link href="/woodworking-services" className="hover:text-luxury-gold transition-colors">
                  خدمات النجارة
                </Link>
              </li>
              <li>
                <Link href="/it-services" className="hover:text-luxury-gold transition-colors">
                  خدمات تقنية المعلومات
                </Link>
              </li>
              <li>
                <Link href="/logistics-services" className="hover:text-luxury-gold transition-colors">
                  الخدمات اللوجستية
                </Link>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div className="space-y-3">
            <h3 className="text-lg font-bold text-luxury-gold">الشركة</h3>
            <ul className="space-y-2 text-sm text-luxury-ivory/80">
              <li>
                <Link href="/about" className="hover:text-luxury-gold transition-colors">
                  من نحن
                </Link>
              </li>
              <li>
                <Link href="/project-workflow" className="hover:text-luxury-gold transition-colors">
                  رحلة المشروع
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-luxury-gold transition-colors">
                  تواصل معنا
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-3">
            <h3 className="text-lg font-bold text-luxury-gold">معلومات الاتصال</h3>
            <div className="space-y-2 text-sm text-luxury-ivory/80">
              <p>الرياض، المملكة العربية السعودية</p>
              <p>البريد الإلكتروني: info@farvisions.net</p>
              <p>الهاتف: 0580122162</p>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-luxury-gold/20 mt-6 pt-6 flex flex-col sm:flex-row justify-between items-center">
          <div className="flex flex-col sm:flex-row gap-4 text-sm text-luxury-ivory/60">
            <p>&copy; 2025 شركة رؤى بعيدة. جميع الحقوق محفوظة.</p>
            <p>الرقم الموحد للسجل التجاري: 7050417950</p>
          </div>
          <nav className="flex gap-6 text-sm">
            <Link href="/terms-of-service" className="text-luxury-ivory/60 hover:text-luxury-gold transition-colors">
              شروط الخدمة
            </Link>
            <Link href="/privacy-policy" className="text-luxury-ivory/60 hover:text-luxury-gold transition-colors">
              سياسة الخصوصية
            </Link>
          </nav>
        </div>
      </div>
    </footer>
  )
}
