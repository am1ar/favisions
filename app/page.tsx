import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Building2, PaintBucket, Hammer, Monitor, Truck, BarChart3, Award, Shield, Users, Star, CheckCircle, ArrowLeft } from "lucide-react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { FAQ } from "@/components/faq"

const services = [
  {
    href: "/construction-services",
    icon: Building2,
    title: "خدمات الإنشاءات",
    desc: "خدمات إنشاءات متكاملة تشمل المباني السكنية والتجارية",
    features: ["الإنشاءات السكنية", "الإنشاءات التجارية", "الصيانة والإصلاح"],
  },
  {
    href: "/finishes",
    icon: PaintBucket,
    title: "خدمات التشطيبات",
    desc: "تشطيبات فاخرة ومتطورة للجدران والأرضيات والأسقف",
    features: ["تشطيبات الجدران", "تشطيبات الأرضيات", "تشطيبات الأسقف"],
  },
  {
    href: "/woodworking-services",
    icon: Hammer,
    title: "خدمات النجارة",
    desc: "نجارة فاخرة باستخدام أجود أنواع الأخشاب الطبيعية",
    features: ["أنواع الأخشاب الفاخرة", "تقنيات التشطيب المتطورة", "أثاث مخصص"],
  },
  {
    href: "/it-services",
    icon: Monitor,
    title: "خدمات تقنية المعلومات",
    desc: "تطوير البرمجيات وتحليل البيانات وأمن المعلومات",
    features: ["تطوير البرمجيات", "تحليل البيانات", "أمن المعلومات"],
  },
  {
    href: "/logistics-services",
    icon: Truck,
    title: "الخدمات اللوجستية",
    desc: "خدمات نقل وإدارة مخزون وتطوير أنظمة سلسلة التوريد",
    features: ["خدمات النقل", "إدارة المخزون", "تحسين العمليات"],
  },
  {
    href: "/data-analytics",
    icon: BarChart3,
    title: "تحليل البيانات",
    desc: "تحليل متقدم للبيانات واستخراج الرؤى والتنبؤات",
    features: ["تحليل إحصائي", "تقارير تفصيلية", "تنبؤات مستقبلية"],
  },
]

const stats = [
  { value: "+15", label: "سنوات خبرة" },
  { value: "+500", label: "مشروع منجز" },
  { value: "+200", label: "عميل راضٍ" },
  { value: "24/7", label: "دعم فني" },
]

const values = [
  { icon: Award, title: "التميز", desc: "نسعى دائماً للتميز في جميع خدماتنا، مع التركيز على الجودة العالية والابتكار" },
  { icon: Shield, title: "الموثوقية", desc: "نلتزم بمواعيدنا ونضمن لكم جودة عالية في جميع مراحل العمل" },
  { icon: Users, title: "خدمة العملاء", desc: "نضع رضاكم في المقام الأول ونقدم لكم خدمة متميزة ومخصصة" },
]

const excellence = [
  { icon: Shield, title: "ضمان حتى 5 سنوات", desc: "نضمن لكم جودة عالية في جميع أعمالنا مع ضمان شامل حتى 5 سنوات" },
  { icon: Award, title: "شهادات الفريق", desc: "فريق عمل محترف ومؤهل مع شهادات معتمدة في جميع التخصصات" },
  { icon: Star, title: "شركاء المواد", desc: "نتعامل مع أفضل موردي المواد وأكثرهم موثوقية في السوق" },
]

export default function HomePage() {
  return (
    <div className="flex flex-col min-h-dvh bg-white text-foreground">
      <Header />
      <main className="flex-1 pt-20 bg-white">
        {/* Hero Section */}
        <section className="relative w-full py-20 md:py-32 lg:py-40 bg-white overflow-hidden" dir="rtl">
          {/* Decorative shapes */}
          <div className="absolute top-20 right-10 w-72 h-72 bg-cyan-500/10 rounded-full blur-3xl" />
          <div className="absolute bottom-10 left-20 w-96 h-96 bg-orange-400/8 rounded-full blur-3xl" />

          <div className="container mx-auto px-6 md:px-8 lg:px-12 relative z-10">
            <div className="max-w-3xl">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-cyan-50 border border-cyan-200 text-cyan-700 text-sm font-medium mb-6">
                <span className="w-2 h-2 rounded-full bg-cyan-500 animate-pulse" />
                شريكك الاستراتيجي في المملكة العربية السعودية
              </div>

              <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl text-navy-900 mb-6 text-balance leading-tight">
                شركة رؤى بعيدة للمقاولات | حلول الإنشاءات والتشييد المتكاملة
              </h1>

              <p className="text-lg md:text-xl text-charcoal-500 leading-relaxed mb-10 max-w-2xl">
                نفخر في شركة رؤى بعيدة بتقديم خدمات المقاولات العامة والتشييد المتكاملة للمباني السكنية والتجارية في المملكة العربية السعودية. ندمج بين الابتكار الهندسي وأعلى معايير كود البناء السعودي لنقود مشاريعكم بكفاءة من الفكرة والتصميم وحتى التسليم المفتاح.
              </p>

              <div className="flex flex-wrap gap-4">
                <Button asChild size="lg" variant="accent">
                  <Link href="/contact">احصل على استشارة هندسية مجانية</Link>
                </Button>
                <Button asChild size="lg" variant="secondary">
                  <Link href="/project-workflow">
                    اكتشف رحلة المشروع ومشاريعنا
                    <ArrowLeft className="h-4 w-4 mr-2" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="relative -mt-12 z-20 px-6 md:px-8 lg:px-12" dir="rtl">
          <div className="container mx-auto">
            <div className="bg-white rounded-2xl p-8 md:p-10 shadow-lg shadow-navy-900/10 border border-border">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                {stats.map((stat, i) => (
                  <div key={i} className="text-center">
                    <div className="text-3xl md:text-4xl font-extrabold text-cyan-600 mb-1">{stat.value}</div>
                    <div className="text-sm text-charcoal-500 font-medium">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Core Values Section */}
        <section className="w-full py-20 md:py-28 bg-white" dir="rtl">
          <div className="container mx-auto px-6 md:px-8 lg:px-12">
            <div className="text-center mb-14">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl text-navy-900 mb-4 text-balance">
                قيمنا الأساسية
              </h2>
              <p className="text-charcoal-500 text-lg max-w-xl mx-auto">
                القيم التي نؤمن بها وتوجه كل خطوة في مسيرتنا المهنية
              </p>
            </div>
            <div className="grid gap-8 md:grid-cols-3">
              {values.map((item, i) => (
                <div key={i} className="text-center group">
                  <div className="w-16 h-16 rounded-2xl bg-cyan-50 flex items-center justify-center mx-auto mb-5 group-hover:bg-cyan-100 transition-colors duration-300">
                    <item.icon className="h-8 w-8 text-cyan-600" />
                  </div>
                  <h3 className="text-xl font-bold text-navy-900 mb-2">{item.title}</h3>
                  <p className="text-charcoal-500 leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Services Overview Section */}
        <section className="w-full py-20 md:py-28 bg-navy-700 text-white" dir="rtl">
          <div className="container mx-auto px-6 md:px-8 lg:px-12">
            <div className="text-center mb-14">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl text-white mb-4 text-balance">
                نظرة عامة على خدماتنا
              </h2>
              <p className="text-white/60 text-lg max-w-xl mx-auto">
                حلول شاملة ومتكاملة تلبي احتياجاتكم المختلفة
              </p>
            </div>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {services.map((service) => (
                <Link
                  key={service.href}
                  href={service.href}
                  className="group block rounded-2xl bg-white/5 border border-white/10 p-6 hover:bg-white/10 hover:border-cyan-500/30 transition-all duration-300 hover:-translate-y-1"
                >
                  <div className="w-12 h-12 rounded-xl bg-cyan-500/15 flex items-center justify-center mb-4 group-hover:bg-cyan-500/25 transition-colors">
                    <service.icon className="h-6 w-6 text-cyan-400" />
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2">{service.title}</h3>
                  <p className="text-white/50 text-sm mb-4 leading-relaxed">{service.desc}</p>
                  <ul className="space-y-2">
                    {service.features.map((f, j) => (
                      <li key={j} className="flex items-center gap-2 text-sm text-white/60">
                        <CheckCircle className="h-3.5 w-3.5 text-cyan-400 shrink-0" />
                        {f}
                      </li>
                    ))}
                  </ul>
                  <div className="mt-5 flex items-center gap-2 text-cyan-400 text-sm font-medium group-hover:gap-3 transition-all">
                    اقرأ المزيد
                    <ArrowLeft className="h-3.5 w-3.5" />
                  </div>
                </Link>
              ))}
            </div>

            <div className="text-center mt-12">
              <Button asChild size="lg" variant="secondary">
                <Link href="/services">استكشف جميع الخدمات</Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Vision of Excellence Section */}
        <section className="w-full py-20 md:py-28 bg-white" dir="rtl">
          <div className="container mx-auto px-6 md:px-8 lg:px-12">
            <div className="text-center mb-14">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl text-navy-900 mb-4 text-balance">
                رؤية التميز
              </h2>
              <p className="text-charcoal-500 text-lg max-w-xl mx-auto">
                معايير عالية وجودة استثنائية في كل مشروع
              </p>
            </div>
            <div className="grid gap-8 md:grid-cols-3">
              {excellence.map((item, i) => (
                <div key={i} className="rounded-2xl p-8 text-center hover:-translate-y-1 transition-all duration-300 bg-white border border-border shadow-sm hover:shadow-md">
                  <div className="w-14 h-14 rounded-xl bg-orange-50 flex items-center justify-center mx-auto mb-5">
                    <item.icon className="h-7 w-7 text-orange-500" />
                  </div>
                  <h3 className="text-lg font-bold text-navy-900 mb-2">{item.title}</h3>
                  <p className="text-charcoal-500 text-sm leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <FAQ />

        {/* CTA Section */}
        <section className="w-full py-20 md:py-28 bg-navy-50" dir="rtl">
          <div className="container mx-auto px-6 md:px-8 lg:px-12">
            <div className="text-center max-w-2xl mx-auto">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl text-navy-900 mb-4 text-balance">
                ابدأ مشروعك معنا
              </h2>
              <p className="text-charcoal-500 text-lg mb-8 leading-relaxed">
                تواصل معنا اليوم للحصول على استشارة هندسية مجانية وتقدير سعر شامل لمشروعك
              </p>
              <div className="flex justify-center gap-4 flex-wrap">
                <Button asChild size="lg" variant="accent">
                  <Link href="/contact">احصل على استشارة هندسية مجانية</Link>
                </Button>
                <Button asChild size="lg" variant="secondary">
                  <Link href="/project-workflow">اكتشف رحلة المشروع</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
