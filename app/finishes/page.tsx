import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import {
  Palette,
  Brush,
  Ruler,
  Shield,
  Users,
  Award,
  Star,
  CheckCircle,
  Home,
  Building2,
  Sparkles,
  Eye,
  Clock,
  MapPin,
  Phone,
} from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import Image from "next/image"

export default function FinishesPage() {
  return (
    <div className="flex flex-col min-h-[100dvh] bg-luxury-ivory text-dark-text">
      <Header />
      <main className="flex-1 pt-20">
        {/* Hero Section with Beautiful Image */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-luxury-gradient text-luxury-ivory relative overflow-hidden">
          <div className="absolute inset-0 bg-black/40"></div>
          <div className="container px-4 md:px-6 text-right relative z-10">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl text-luxury-ivory mb-6 drop-shadow-lg">
                  خدمات التشطيبات والديكورات
                </h1>
                <p className="max-w-[800px] text-lg md:text-xl/relaxed lg:text-2xl/relaxed text-luxury-ivory mb-8">
                  نقدم خدمات التشطيبات والديكورات الفاخرة بأحدث التقنيات وأجود المواد،
                  لتحويل مساحاتكم إلى أماكن أنيقة ومريحة تعكس ذوقكم الرفيع.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button
                    asChild
                    size="lg"
                    className="bg-luxury-gold text-black hover:bg-luxury-gold-light px-8 py-4 text-lg font-semibold rounded-lg shadow-xl transition-all duration-300 transform hover:scale-105"
                  >
                    <Link href="/contact">احصل على استشارة مجانية</Link>
                  </Button>
                  <Button
                    asChild
                    variant="outline"
                    size="lg"
                    className="border-2 border-luxury-ivory text-black hover:bg-luxury-ivory hover:text-luxury-navy px-8 py-4 text-lg font-semibold rounded-lg transition-all duration-300"
                  >
                    <Link href="/project-workflow">تعرف على رحلة المشروع</Link>
                  </Button>
                </div>
              </div>
              <div className="relative">
                <div className="relative w-full h-80 md:h-96 rounded-2xl overflow-hidden shadow-2xl">
                  <div className="absolute inset-0 bg-gradient-to-br from-luxury-gold/20 to-luxury-navy/20 z-10"></div>
                  <div className="absolute inset-0 bg-luxury-gradient opacity-80"></div>
                  <div className="relative z-20 flex items-center justify-center h-full">
                    <div className="text-center space-y-4">
                      <div className="w-24 h-24 bg-luxury-gold/90 rounded-full flex items-center justify-center mx-auto backdrop-blur-sm">
                        <Palette className="h-12 w-12 text-luxury-navy" />
                      </div>
                      <h3 className="text-2xl font-bold text-luxury-ivory">تشطيبات فاخرة</h3>
                      <p className="text-luxury-ivory/90">أحدث التقنيات وأجود المواد</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="w-full py-16 md:py-24 lg:py-32 bg-luxury-ivory">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-16 text-luxury-navy">
              خدمات التشطيبات
            </h2>
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              <Card className="bg-white text-dark-text border-luxury-gold/30 text-center shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
                <CardHeader className="flex flex-col items-center gap-4 pb-4">
                  <div className="w-20 h-20 bg-gradient-to-br from-luxury-gold to-luxury-gold-light rounded-full flex items-center justify-center">
                    <Brush className="h-10 w-10 text-luxury-navy" />
                  </div>
                  <CardTitle className="text-2xl font-bold text-luxury-navy">تشطيبات الجدران</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-medium-text mb-4">
                    تشطيبات جدران فاخرة ومتطورة بأحدث التقنيات والمواد
                  </p>
                  <div className="space-y-2 text-sm text-medium-text">
                    <div className="flex items-center gap-2 justify-center">
                      <CheckCircle className="h-4 w-4 text-luxury-gold" />
                      <span>دهانات عالية الجودة</span>
                    </div>
                    <div className="flex items-center gap-2 justify-center">
                      <CheckCircle className="h-4 w-4 text-luxury-gold" />
                      <span>ورق جدران فاخر</span>
                    </div>
                    <div className="flex items-center gap-2 justify-center">
                      <CheckCircle className="h-4 w-4 text-luxury-gold" />
                      <span>ألواح جبس مخصصة</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-white text-dark-text border-luxury-gold/30 text-center shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
                <CardHeader className="flex flex-col items-center gap-4 pb-4">
                  <div className="w-20 h-20 bg-gradient-to-br from-luxury-gold to-luxury-gold-light rounded-full flex items-center justify-center">
                    <Home className="h-10 w-10 text-luxury-navy" />
                  </div>
                  <CardTitle className="text-2xl font-bold text-luxury-navy">تشطيبات الأرضيات</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-medium-text mb-4">
                    أرضيات فاخرة ومتينة بأحدث أنواع البلاط والرخام
                  </p>
                  <div className="space-y-2 text-sm text-medium-text">
                    <div className="flex items-center gap-2 justify-center">
                      <CheckCircle className="h-4 w-4 text-luxury-gold" />
                      <span>بلاط فاخر</span>
                    </div>
                    <div className="flex items-center gap-2 justify-center">
                      <CheckCircle className="h-4 w-4 text-luxury-gold" />
                      <span>رخام طبيعي</span>
                    </div>
                    <div className="flex items-center gap-2 justify-center">
                      <CheckCircle className="h-4 w-4 text-luxury-gold" />
                      <span>باركيه خشبي</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-white text-dark-text border-luxury-gold/30 text-center shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
                <CardHeader className="flex flex-col items-center gap-4 pb-4">
                  <div className="w-20 h-20 bg-gradient-to-br from-luxury-gold to-luxury-gold-light rounded-full flex items-center justify-center">
                    <Sparkles className="h-10 w-10 text-luxury-navy" />
                  </div>
                  <CardTitle className="text-2xl font-bold text-luxury-navy">تشطيبات الأسقف</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-medium-text mb-4">
                    أسقف معلقة ومزخرفة بأحدث التصاميم والتقنيات
                  </p>
                  <div className="space-y-2 text-sm text-medium-text">
                    <div className="flex items-center gap-2 justify-center">
                      <CheckCircle className="h-4 w-4 text-luxury-gold" />
                      <span>أسقف معلقة</span>
                    </div>
                    <div className="flex items-center gap-2 justify-center">
                      <CheckCircle className="h-4 w-4 text-luxury-gold" />
                      <span>إضاءات مخفية</span>
                    </div>
                    <div className="flex items-center gap-2 justify-center">
                      <CheckCircle className="h-4 w-4 text-luxury-gold" />
                      <span>زخارف جبسية</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        <section className="w-full py-16 md:py-24 lg:py-32 bg-luxury-navy text-luxury-ivory">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-16 text-luxury-ivory">
              خدمات الديكورات
            </h2>
            <div className="grid gap-8 md:grid-cols-2">
              <Card className="bg-luxury-navy-light text-luxury-ivory border-luxury-gold/30 text-right shadow-xl hover:shadow-2xl transition-all duration-300">
                <CardHeader className="flex flex-row-reverse items-center gap-4 pb-4">
                  <div className="w-16 h-16 bg-luxury-gold rounded-full flex items-center justify-center">
                    <Palette className="h-8 w-8 text-luxury-navy" />
                  </div>
                  <CardTitle className="text-2xl font-bold text-luxury-gold">التصميم الداخلي</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-luxury-ivory/80 mb-4">
                    تصميم داخلي متميز يجمع بين الأناقة والوظائفية،
                    مع التركيز على تفاصيل التصميم والألوان المتناسقة.
                  </p>
                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <CheckCircle className="h-5 w-5 text-luxury-gold" />
                      <span>اختيار الألوان والمواد</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="h-5 w-5 text-luxury-gold" />
                      <span>تنسيق الأثاث والديكورات</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="h-5 w-5 text-luxury-gold" />
                      <span>إضاءات مخصصة</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-luxury-navy-light text-luxury-ivory border-luxury-gold/30 text-right shadow-xl hover:shadow-2xl transition-all duration-300">
                <CardHeader className="flex flex-row-reverse items-center gap-4 pb-4">
                  <div className="w-16 h-16 bg-luxury-gold rounded-full flex items-center justify-center">
                    <Eye className="h-8 w-8 text-luxury-navy" />
                  </div>
                  <CardTitle className="text-2xl font-bold text-luxury-gold">التشطيبات الخارجية</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-luxury-ivory/80 mb-4">
                    تشطيبات خارجية فاخرة تحمي المباني وتضيف لها لمسة جمالية،
                    مع التركيز على مقاومة العوامل الجوية.
                  </p>
                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <CheckCircle className="h-5 w-5 text-luxury-gold" />
                      <span>عوازل حرارية ومائية</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="h-5 w-5 text-luxury-gold" />
                      <span>دهانات خارجية مقاومة</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="h-5 w-5 text-luxury-gold" />
                      <span>تشطيبات الحجر والرخام</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        <section className="w-full py-16 md:py-24 lg:py-32 bg-luxury-ivory">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-16 text-luxury-navy">
              مميزات خدماتنا
            </h2>
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
              <div className="text-center space-y-4">
                <div className="w-16 h-16 bg-luxury-gold rounded-full flex items-center justify-center mx-auto">
                  <Shield className="h-8 w-8 text-luxury-navy" />
                </div>
                <h3 className="text-xl font-bold text-luxury-navy">ضمان 5 سنوات</h3>
                <p className="text-medium-text text-sm">
                  ضمان شامل على جميع أعمال التشطيبات
                </p>
              </div>

              <div className="text-center space-y-4">
                <div className="w-16 h-16 bg-luxury-gold rounded-full flex items-center justify-center mx-auto">
                  <Award className="h-8 w-8 text-luxury-navy" />
                </div>
                <h3 className="text-xl font-bold text-luxury-navy">جودة عالية</h3>
                <p className="text-medium-text text-sm">
                  استخدام أجود المواد وأحدث التقنيات
                </p>
              </div>

              <div className="text-center space-y-4">
                <div className="w-16 h-16 bg-luxury-gold rounded-full flex items-center justify-center mx-auto">
                  <Clock className="h-8 w-8 text-luxury-navy" />
                </div>
                <h3 className="text-xl font-bold text-luxury-navy">سرعة التنفيذ</h3>
                <p className="text-medium-text text-sm">
                  تنفيذ سريع ودقيق للمشاريع
                </p>
              </div>

              <div className="text-center space-y-4">
                <div className="w-16 h-16 bg-luxury-gold rounded-full flex items-center justify-center mx-auto">
                  <Users className="h-8 w-8 text-luxury-navy" />
                </div>
                <h3 className="text-xl font-bold text-luxury-navy">فريق محترف</h3>
                <p className="text-medium-text text-sm">
                  خبراء في التشطيبات والديكورات
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="w-full py-16 md:py-24 lg:py-32 bg-luxury-navy text-luxury-ivory">
          <div className="container px-4 md:px-6">
            <div className="text-center space-y-8">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-luxury-ivory">
                ابدأ مشروع التشطيبات
              </h2>
              <p className="max-w-2xl mx-auto text-lg text-luxury-ivory/80">
                تواصل معنا اليوم للحصول على استشارة مجانية وتقدير سعر لمشروع التشطيبات
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  asChild
                  className="bg-luxury-gold text-black hover:bg-luxury-gold-light px-8 py-4 text-lg font-semibold rounded-lg shadow-xl transition-all duration-300 transform hover:scale-105"
                >
                  <Link href="/contact">احصل على استشارة مجانية</Link>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  className="border-2 border-luxury-ivory text-black hover:bg-luxury-ivory hover:text-luxury-navy px-8 py-4 text-lg font-semibold rounded-lg transition-all duration-300"
                >
                  <a href="tel:+966-XX-XXX-XXXX">
                    <Phone className="h-5 w-5 ml-2" />
                    اتصل بنا الآن
                  </a>
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
