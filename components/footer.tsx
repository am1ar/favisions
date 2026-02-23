import Link from "next/link"
import Image from "next/image"
import { Instagram, Linkedin, Twitter } from "lucide-react"

const serviceLinks = [
  { href: "/construction-services", label: "خدمات الإنشاءات" },
  { href: "/finishes", label: "خدمات التشطيبات" },
  { href: "/woodworking-services", label: "خدمات النجارة" },
  { href: "/it-services", label: "تقنية المعلومات" },
  { href: "/logistics-services", label: "الخدمات اللوجستية" },
  { href: "/data-analytics", label: "تحليل البيانات" },
]

const galleryLinks = [
  { href: "/construction-gallery", label: "معرض الإنشاءات" },
  { href: "/woodworking-gallery", label: "معرض النجارة" },
  { href: "/finishes-gallery", label: "معرض التشطيبات" },
  { href: "/projects", label: "المشاريع" },
]

const companyLinks = [
  { href: "/about", label: "من نحن" },
  { href: "/project-workflow", label: "رحلة المشروع" },
  { href: "/news", label: "الأخبار" },
  { href: "/recruitment", label: "التوظيف" },
  { href: "/contact", label: "تواصل معنا" },
]

const socialLinks = [
  { href: "https://x.com/far_visions", icon: Twitter, label: "تويتر" },
  { href: "https://www.instagram.com/farvisions", icon: Instagram, label: "انستغرام" },
  { href: "https://www.linkedin.com/company/far-vision/", icon: Linkedin, label: "لينكد إن" },
]

export function Footer() {
  return (
    <footer className="bg-charcoal-700 text-white/90">
      {/* Accent gradient line */}
      <div className="h-1 bg-teal-gradient" />

      <div className="container mx-auto px-4 md:px-6 lg:px-8 py-12 md:py-16">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-5">
          {/* Company Info */}
          <div className="lg:col-span-2 space-y-5">
            <Link href="/" className="inline-block">
              <Image
                src="/logo.png"
                alt="شركة رؤى بعيدة"
                width={140}
                height={48}
                className="h-12 w-auto brightness-0 invert opacity-90"
              />
            </Link>
            <p className="text-white/60 text-sm leading-relaxed max-w-sm">
              نقدم خدمات متكاملة في الإنشاءات والتشطيبات والنجارة الفاخرة،
              بالإضافة إلى خدمات تقنية المعلومات والخدمات اللوجستية المتقدمة.
              نلتزم بأعلى معايير الجودة والاحترافية.
            </p>
            <div className="flex gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.href}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="w-9 h-9 rounded-lg bg-white/10 hover:bg-teal-600 flex items-center justify-center transition-colors duration-200"
                >
                  <social.icon className="h-4 w-4 text-white" />
                </a>
              ))}
            </div>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h3 className="text-sm font-bold text-white uppercase tracking-wider">خدماتنا</h3>
            <ul className="space-y-2.5">
              {serviceLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-white/55 hover:text-teal-400 transition-colors duration-200"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Gallery */}
          <div className="space-y-4">
            <h3 className="text-sm font-bold text-white uppercase tracking-wider">أعمالنا</h3>
            <ul className="space-y-2.5">
              {galleryLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-white/55 hover:text-teal-400 transition-colors duration-200"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div className="space-y-4">
            <h3 className="text-sm font-bold text-white uppercase tracking-wider">الشركة</h3>
            <ul className="space-y-2.5">
              {companyLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-white/55 hover:text-teal-400 transition-colors duration-200"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
            <div className="pt-2 space-y-1.5 text-xs text-white/40">
              <p>الرياض، المملكة العربية السعودية</p>
              <p>info@farvisions.net</p>
              <p dir="ltr" className="text-start">0580122162</p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10">
        <div className="container mx-auto px-4 md:px-6 lg:px-8 py-5 flex flex-col sm:flex-row justify-between items-center gap-3">
          <div className="flex flex-col sm:flex-row gap-3 text-xs text-white/40">
            <p>&copy; 2025 شركة رؤى بعيدة. جميع الحقوق محفوظة.</p>
            <p className="hidden sm:block">|</p>
            <p>السجل التجاري: 7050417950</p>
          </div>
          <nav className="flex gap-5 text-xs">
            <Link href="/terms-of-service" className="text-white/40 hover:text-teal-400 transition-colors">
              شروط الخدمة
            </Link>
            <Link href="/privacy-policy" className="text-white/40 hover:text-teal-400 transition-colors">
              سياسة الخصوصية
            </Link>
          </nav>
        </div>
      </div>
    </footer>
  )
}
