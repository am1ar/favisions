import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { 
  Square, 
  Users, 
  Clock, 
  Shield, 
  Award, 
  CheckCircle, 
  ArrowRight,
  Building2,
  Ruler,
  Palette,
  Wrench,
  Phone,
  MapPin,
  Star
} from "lucide-react"
import Link from "next/link"

export default function ItalianCeramicTilesPage() {
  return (
    <div className="flex flex-col min-h-[100dvh] bg-luxury-ivory text-dark-text">
      <Header />
      <main className="flex-1 pt-20">
        {/* Hero Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-luxury-gradient text-luxury-ivory relative overflow-hidden">
          <div className="absolute inset-0 bg-black/40"></div>
          <div className="container px-4 md:px-6 text-right relative z-10">
            <div className="text-center space-y-8">
              <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl text-luxury-ivory mb-6 drop-shadow-lg">
                بلاط سيراميك فاخر بتصميم إيطالي
              </h1>
              <p className="max-w-3xl mx-auto text-lg md:text-xl text-luxury-ivory/90 leading-relaxed">
                بلاط سيراميك فاخر بتصميم إيطالي كلاسيكي بألوان محايدة وملمس لامع، مثالي للمطابخ والحمامات
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
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
                  <Link href="/finishes-gallery">العودة للمعرض</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Service Overview */}
        <section className="w-full py-16 md:py-24 bg-luxury-ivory">
          <div className="container px-4 md:px-6">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-luxury-navy mb-6">
                  بلاط سيراميك إيطالي فاخر
                </h2>
                <p className="text-lg text-dark-text/70 mb-6 leading-relaxed">
                  نقدم بلاط سيراميك فاخر بتصميم إيطالي كلاسيكي بألوان محايدة وملمس لامع، 
                  مثالي للمطابخ والحمامات، تضم مجموعة متنوعة من التصاميم والألوان.
                </p>
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <CheckCircle className="h-6 w-6 text-luxury-gold" />
                    <span className="text-dark-text">تصميم إيطالي كلاسيكي</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="h-6 w-6 text-luxury-gold" />
                    <span className="text-dark-text">ألوان محايدة وملمس لامع</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="h-6 w-6 text-luxury-gold" />
                    <span className="text-dark-text">سيراميك عالي الجودة</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="h-6 w-6 text-luxury-gold" />
                    <span className="text-dark-text">ضمان شامل على جميع الأعمال</span>
                  </div>
                </div>
              </div>
              <div className="bg-luxury-navy-light p-8 rounded-2xl">
                <div className="text-center space-y-6">
                  <div className="w-20 h-20 bg-luxury-gold rounded-full flex items-center justify-center mx-auto">
                    <Square className="h-10 w-10 text-luxury-navy" />
                  </div>
                  <h3 className="text-2xl font-bold text-luxury-gold">مميزات البلاط الإيطالي</h3>
                  <div className="space-y-3 text-luxury-ivory/90">
                    <div className="flex items-center gap-2">
                      <ArrowRight className="h-4 w-4 text-luxury-gold" />
                      <span>تصميم إيطالي</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <ArrowRight className="h-4 w-4 text-luxury-gold" />
                      <span>ألوان محايدة</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <ArrowRight className="h-4 w-4 text-luxury-gold" />
                      <span>ملمس لامع</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <ArrowRight className="h-4 w-4 text-luxury-gold" />
                      <span>مقاوم للرطوبة</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <ArrowRight className="h-4 w-4 text-luxury-gold" />
                      <span>سهولة التنظيف</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Project Management */}
        <section className="w-full py-16 md:py-24 bg-luxury-navy text-luxury-ivory">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-16 text-luxury-ivory">
              إدارة المشروع
            </h2>
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
              <Card className="bg-luxury-navy-light text-luxury-ivory border-luxury-gold/30 text-center">
                <CardHeader className="flex flex-col items-center gap-4 pb-4">
                  <div className="w-16 h-16 bg-luxury-gold rounded-full flex items-center justify-center">
                    <Users className="h-8 w-8 text-luxury-navy" />
                  </div>
                  <CardTitle className="text-xl font-bold text-luxury-gold">فريق متخصص</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-luxury-ivory/80 text-sm">
                    فريق من المهندسين والعمالة الماهرة والمحترفة في تركيب البلاط السيراميك
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-luxury-navy-light text-luxury-ivory border-luxury-gold/30 text-center">
                <CardHeader className="flex flex-col items-center gap-4 pb-4">
                  <div className="w-16 h-16 bg-luxury-gold rounded-full flex items-center justify-center">
                    <Clock className="h-8 w-8 text-luxury-navy" />
                  </div>
                  <CardTitle className="text-xl font-bold text-luxury-gold">جدولة دقيقة</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-luxury-ivory/80 text-sm">
                    جدولة دقيقة للمشروع مع التزام بمواعيد التسليم المحددة
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-luxury-navy-light text-luxury-ivory border-luxury-gold/30 text-center">
                <CardHeader className="flex flex-col items-center gap-4 pb-4">
                  <div className="w-16 h-16 bg-luxury-gold rounded-full flex items-center justify-center">
                    <Shield className="h-8 w-8 text-luxury-navy" />
                  </div>
                  <CardTitle className="text-xl font-bold text-luxury-gold">إشراف مستمر</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-luxury-ivory/80 text-sm">
                    إشراف مستمر على جميع مراحل العمل لضمان الجودة العالية
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-luxury-navy-light text-luxury-ivory border-luxury-gold/30 text-center">
                <CardHeader className="flex flex-col items-center gap-4 pb-4">
                  <div className="w-16 h-16 bg-luxury-gold rounded-full flex items-center justify-center">
                    <Award className="h-8 w-8 text-luxury-navy" />
                  </div>
                  <CardTitle className="text-xl font-bold text-luxury-gold">ضمان الجودة</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-luxury-ivory/80 text-sm">
                    ضمان شامل على جميع الأعمال لمدة 5 سنوات
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Work Methodology */}
        <section className="w-full py-16 md:py-24 bg-luxury-ivory">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-16 text-luxury-navy">
              آلية العمل
            </h2>
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              <div className="text-center space-y-4">
                <div className="w-16 h-16 bg-luxury-gold rounded-full flex items-center justify-center mx-auto">
                  <span className="text-2xl font-bold text-luxury-navy">1</span>
                </div>
                <h3 className="text-xl font-bold text-luxury-navy">التخطيط والتصميم</h3>
                <p className="text-dark-text/70 text-sm">
                  دراسة المساحة واختيار التصميم واللون المناسب للبلاط
                </p>
              </div>

              <div className="text-center space-y-4">
                <div className="w-16 h-16 bg-luxury-gold rounded-full flex items-center justify-center mx-auto">
                  <span className="text-2xl font-bold text-luxury-navy">2</span>
                </div>
                <h3 className="text-xl font-bold text-luxury-navy">إعداد السطح</h3>
                <p className="text-dark-text/70 text-sm">
                  تنظيف وإعداد سطح الأرضية أو الجدران لتركيب البلاط
                </p>
              </div>

              <div className="text-center space-y-4">
                <div className="w-16 h-16 bg-luxury-gold rounded-full flex items-center justify-center mx-auto">
                  <span className="text-2xl font-bold text-luxury-navy">3</span>
                </div>
                <h3 className="text-xl font-bold text-luxury-navy">تركيب البلاط</h3>
                <p className="text-dark-text/70 text-sm">
                  تركيب البلاط السيراميك باستخدام تقنيات متطورة ومواد عالية الجودة
                </p>
              </div>

              <div className="text-center space-y-4">
                <div className="w-16 h-16 bg-luxury-gold rounded-full flex items-center justify-center mx-auto">
                  <span className="text-2xl font-bold text-luxury-navy">4</span>
                </div>
                <h3 className="text-xl font-bold text-luxury-navy">التشطيبات النهائية</h3>
                <p className="text-dark-text/70 text-sm">
                  تنفيذ التشطيبات النهائية والتأكد من جودة التركيب
                </p>
              </div>

              <div className="text-center space-y-4">
                <div className="w-16 h-16 bg-luxury-gold rounded-full flex items-center justify-center mx-auto">
                  <span className="text-2xl font-bold text-luxury-navy">5</span>
                </div>
                <h3 className="text-xl font-bold text-luxury-navy">المراجعة النهائية</h3>
                <p className="text-dark-text/70 text-sm">
                  مراجعة شاملة للعمل والتأكد من مطابقة المواصفات المطلوبة
                </p>
              </div>

              <div className="text-center space-y-4">
                <div className="w-16 h-16 bg-luxury-gold rounded-full flex items-center justify-center mx-auto">
                  <span className="text-2xl font-bold text-luxury-navy">6</span>
                </div>
                <h3 className="text-xl font-bold text-luxury-navy">التسليم</h3>
                <p className="text-dark-text/70 text-sm">
                  تسليم المشروع مع ضمان الجودة والالتزام بجميع المواصفات
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Professional Advantages */}
        <section className="w-full py-16 md:py-24 bg-luxury-navy text-luxury-ivory">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-16 text-luxury-ivory">
              المزايا الاحترافية
            </h2>
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              <Card className="bg-luxury-navy-light text-luxury-ivory border-luxury-gold/30">
                <CardHeader className="flex flex-row-reverse items-center gap-4 pb-4">
                  <div className="w-12 h-12 bg-luxury-gold rounded-full flex items-center justify-center">
                    <Building2 className="h-6 w-6 text-luxury-navy" />
                  </div>
                  <CardTitle className="text-lg font-bold text-luxury-gold">تصاميم إيطالية</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-luxury-ivory/80 text-sm">
                    تصميم البلاط بأحدث التصاميم الإيطالية والمتطورة
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-luxury-navy-light text-luxury-ivory border-luxury-gold/30">
                <CardHeader className="flex flex-row-reverse items-center gap-4 pb-4">
                  <div className="w-12 h-12 bg-luxury-gold rounded-full flex items-center justify-center">
                    <Ruler className="h-6 w-6 text-luxury-navy" />
                  </div>
                  <CardTitle className="text-lg font-bold text-luxury-gold">دقة في القياسات</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-luxury-ivory/80 text-sm">
                    دقة عالية في القياسات والتركيب لضمان النتيجة المثالية
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-luxury-navy-light text-luxury-ivory border-luxury-gold/30">
                <CardHeader className="flex flex-row-reverse items-center gap-4 pb-4">
                  <div className="w-12 h-12 bg-luxury-gold rounded-full flex items-center justify-center">
                    <Palette className="h-6 w-6 text-luxury-navy" />
                  </div>
                  <CardTitle className="text-lg font-bold text-luxury-gold">ألوان محايدة</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-luxury-ivory/80 text-sm">
                    اختيار ألوان محايدة ومتناسقة تناسب جميع التصاميم
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-luxury-navy-light text-luxury-ivory border-luxury-gold/30">
                <CardHeader className="flex flex-row-reverse items-center gap-4 pb-4">
                  <div className="w-12 h-12 bg-luxury-gold rounded-full flex items-center justify-center">
                    <Wrench className="h-6 w-6 text-luxury-navy" />
                  </div>
                  <CardTitle className="text-lg font-bold text-luxury-gold">تقنيات متطورة</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-luxury-ivory/80 text-sm">
                    استخدام أحدث التقنيات والمواد في تركيب البلاط
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-luxury-navy-light text-luxury-ivory border-luxury-gold/30">
                <CardHeader className="flex flex-row-reverse items-center gap-4 pb-4">
                  <div className="w-12 h-12 bg-luxury-gold rounded-full flex items-center justify-center">
                    <Shield className="h-6 w-6 text-luxury-navy" />
                  </div>
                  <CardTitle className="text-lg font-bold text-luxury-gold">ضمان شامل</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-luxury-ivory/80 text-sm">
                    ضمان شامل على جميع الأعمال لمدة 5 سنوات مع خدمة ما بعد البيع
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-luxury-navy-light text-luxury-ivory border-luxury-gold/30">
                <CardHeader className="flex flex-row-reverse items-center gap-4 pb-4">
                  <div className="w-12 h-12 bg-luxury-gold rounded-full flex items-center justify-center">
                    <Clock className="h-6 w-6 text-luxury-navy" />
                  </div>
                  <CardTitle className="text-lg font-bold text-luxury-gold">سرعة التنفيذ</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-luxury-ivory/80 text-sm">
                    تنفيذ سريع ودقيق للمشروع مع الالتزام بمواعيد التسليم
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="w-full py-16 md:py-24 bg-luxury-ivory">
          <div className="container px-4 md:px-6 text-center">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-6 text-luxury-navy">
              ابدأ مشروع البلاط السيراميك
            </h2>
            <p className="text-lg text-dark-text/70 max-w-2xl mx-auto mb-8">
              تواصل معنا اليوم للحصول على استشارة مجانية وتصميم البلاط السيراميك الذي تحتاجونه
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
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
                className="border-2 border-luxury-navy text-luxury-navy hover:bg-luxury-navy hover:text-luxury-ivory px-8 py-4 text-lg font-semibold rounded-lg transition-all duration-300"
              >
                <a href="tel:+966-XX-XXX-XXXX">
                  <Phone className="h-5 w-5 ml-2" />
                  اتصل بنا الآن
                </a>
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}






