import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Building2, Hammer, Wrench, CheckCircle, Award, Users, Shield, Clock, MapPin, Phone } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import Image from "next/image"

export default function ConstructionServicesPage() {
  return (
    <div className="flex flex-col min-h-[100dvh] bg-white dark:bg-background text-dark-text dark:text-foreground">
      <Header />
      <main className="flex-1 pt-20">
        {/* Hero Section with Beautiful Image */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-luxury-gradient dark:bg-gradient-to-br dark:from-navy-900 dark:to-navy-700 text-luxury-ivory dark:text-white relative overflow-hidden">
          <div className="absolute inset-0 bg-black/40"></div>
          <div className="container px-4 md:px-6 text-right relative z-10">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl text-luxury-ivory mb-6 drop-shadow-lg">
                  خدمات الإنشاءات والتشييد
                </h1>
                <p className="max-w-[800px] text-lg md:text-xl/relaxed lg:text-2xl/relaxed text-luxury-ivory mb-8">
                  نقدم خدمات إنشاءات متكاملة تشمل المباني السكنية والتجارية والصيانة والإصلاح
                  بأعلى معايير الجودة والاحترافية
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
                    className="border-2 border-luxury-ivory text-luxury-ivory dark:text-white dark:border-white hover:bg-luxury-ivory hover:text-luxury-navy dark:hover:bg-white dark:hover:text-navy-900 px-8 py-4 text-lg font-semibold rounded-lg transition-all duration-300"
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
                        <Building2 className="h-12 w-12 text-luxury-navy" />
                      </div>
                      <h3 className="text-2xl font-bold text-luxury-ivory">إنشاءات متكاملة</h3>
                      <p className="text-luxury-ivory/90">أعلى معايير الجودة والاحترافية</p>
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
              خدماتنا الإنشائية
            </h2>
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              <Card className="bg-white dark:bg-gray-900 text-navy-900 dark:text-white border border-luxury-gold/30 dark:border-gray-700 text-center shadow-xl dark:shadow-2xl dark:shadow-black/20 hover:shadow-2xl dark:hover:shadow-black/40 transition-all duration-300 transform hover:-translate-y-2">
                <CardHeader className="flex flex-col items-center gap-4 pb-4">
                  <div className="w-20 h-20 bg-gradient-to-br from-luxury-gold to-yellow-400 dark:from-amber-600 dark:to-amber-700 rounded-full flex items-center justify-center">
                    <Building2 className="h-10 w-10 text-navy-900 dark:text-white" />
                  </div>
                  <CardTitle className="text-2xl font-bold text-navy-900 dark:text-white">الإنشاءات السكنية</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700 dark:text-gray-300 mb-4">
                    بناء المنازل والفيلات السكنية بأعلى معايير الجودة
                  </p>
                  <div className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
                    <div className="flex items-center gap-2 justify-center">
                      <CheckCircle className="h-4 w-4 text-yellow-600 dark:text-amber-500" />
                      <span>تصميم معماري متميز</span>
                    </div>
                    <div className="flex items-center gap-2 justify-center">
                      <CheckCircle className="h-4 w-4 text-yellow-600 dark:text-amber-500" />
                      <span>مواد بناء عالية الجودة</span>
                    </div>
                    <div className="flex items-center gap-2 justify-center">
                      <CheckCircle className="h-4 w-4 text-yellow-600 dark:text-amber-500" />
                      <span>تنفيذ احترافي</span>
                    </div>
                    <div className="flex items-center gap-2 justify-center">
                      <CheckCircle className="h-4 w-4 text-yellow-600 dark:text-amber-500" />
                      <span>إشراف مستمر</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-white dark:bg-gray-900 text-navy-900 dark:text-white border border-luxury-gold/30 dark:border-gray-700 text-center shadow-xl dark:shadow-2xl dark:shadow-black/20 hover:shadow-2xl dark:hover:shadow-black/40 transition-all duration-300 transform hover:-translate-y-2">
                <CardHeader className="flex flex-col items-center gap-4 pb-4">
                  <div className="w-20 h-20 bg-gradient-to-br from-luxury-gold to-yellow-400 dark:from-amber-600 dark:to-amber-700 rounded-full flex items-center justify-center">
                    <Hammer className="h-10 w-10 text-navy-900 dark:text-white" />
                  </div>
                  <CardTitle className="text-2xl font-bold text-navy-900 dark:text-white">الإنشاءات التجارية</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700 dark:text-gray-300 mb-4">
                    بناء المكاتب والمحلات التجارية والمراكز التجارية
                  </p>
                  <div className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
                    <div className="flex items-center gap-2 justify-center">
                      <CheckCircle className="h-4 w-4 text-yellow-600 dark:text-amber-500" />
                      <span>تصميم عصري</span>
                    </div>
                    <div className="flex items-center gap-2 justify-center">
                      <CheckCircle className="h-4 w-4 text-yellow-600 dark:text-amber-500" />
                      <span>مساحات وظيفية</span>
                    </div>
                    <div className="flex items-center gap-2 justify-center">
                      <CheckCircle className="h-4 w-4 text-yellow-600 dark:text-amber-500" />
                      <span>جودة عالية</span>
                    </div>
                    <div className="flex items-center gap-2 justify-center">
                      <CheckCircle className="h-4 w-4 text-yellow-600 dark:text-amber-500" />
                      <span>تسليم في الوقت المحدد</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-white dark:bg-gray-900 text-navy-900 dark:text-white border border-luxury-gold/30 dark:border-gray-700 text-center shadow-xl dark:shadow-2xl dark:shadow-black/20 hover:shadow-2xl dark:hover:shadow-black/40 transition-all duration-300 transform hover:-translate-y-2">
                <CardHeader className="flex flex-col items-center gap-4 pb-4">
                  <div className="w-20 h-20 bg-gradient-to-br from-luxury-gold to-yellow-400 dark:from-amber-600 dark:to-amber-700 rounded-full flex items-center justify-center">
                    <Wrench className="h-10 w-10 text-navy-900 dark:text-white" />
                  </div>
                  <CardTitle className="text-2xl font-bold text-navy-900 dark:text-white">الصيانة والإصلاح</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700 dark:text-gray-300 mb-4">
                    خدمات الصيانة والإصلاح للمباني والمنشآت
                  </p>
                  <div className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
                    <div className="flex items-center gap-2 justify-center">
                      <CheckCircle className="h-4 w-4 text-yellow-600 dark:text-amber-500" />
                      <span>صيانة دورية</span>
                    </div>
                    <div className="flex items-center gap-2 justify-center">
                      <CheckCircle className="h-4 w-4 text-yellow-600 dark:text-amber-500" />
                      <span>إصلاح الأعطال</span>
                    </div>
                    <div className="flex items-center gap-2 justify-center">
                      <CheckCircle className="h-4 w-4 text-yellow-600 dark:text-amber-500" />
                      <span>تحديثات وتحسينات</span>
                    </div>
                    <div className="flex items-center gap-2 justify-center">
                      <CheckCircle className="h-4 w-4 text-yellow-600 dark:text-amber-500" />
                      <span>خدمة طوارئ 24/7</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        <section className="w-full py-16 md:py-24 lg:py-32 bg-navy-900 dark:bg-gray-900 text-white dark:text-white">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-16 text-white">
              مميزات خدمات الإنشاءات
            </h2>
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
              <div className="text-center space-y-4">
                <div className="w-20 h-20 bg-gradient-to-br from-luxury-gold to-yellow-400 dark:from-amber-600 dark:to-amber-700 rounded-full flex items-center justify-center mx-auto">
                  <Award className="h-10 w-10 text-navy-900 dark:text-white" />
                </div>
                <h3 className="text-xl font-bold text-yellow-400 dark:text-amber-400">جودة عالية</h3>
                <p className="text-gray-200 dark:text-gray-300">
                  نستخدم أجود المواد وأحدث التقنيات
                </p>
              </div>
              <div className="text-center space-y-4">
                <div className="w-20 h-20 bg-gradient-to-br from-luxury-gold to-yellow-400 dark:from-amber-600 dark:to-amber-700 rounded-full flex items-center justify-center mx-auto">
                  <Users className="h-10 w-10 text-navy-900 dark:text-white" />
                </div>
                <h3 className="text-xl font-bold text-yellow-400 dark:text-amber-400">فريق متخصص</h3>
                <p className="text-gray-200 dark:text-gray-300">
                  مهندسين وعمالة ماهرة ومحترفة
                </p>
              </div>
              <div className="text-center space-y-4">
                <div className="w-20 h-20 bg-gradient-to-br from-luxury-gold to-yellow-400 dark:from-amber-600 dark:to-amber-700 rounded-full flex items-center justify-center mx-auto">
                  <Shield className="h-10 w-10 text-navy-900 dark:text-white" />
                </div>
                <h3 className="text-xl font-bold text-yellow-400 dark:text-amber-400">ضمان شامل</h3>
                <p className="text-gray-200 dark:text-gray-300">
                  ضمان 5 سنوات على جميع الأعمال
                </p>
              </div>
              <div className="text-center space-y-4">
                <div className="w-20 h-20 bg-gradient-to-br from-luxury-gold to-yellow-400 dark:from-amber-600 dark:to-amber-700 rounded-full flex items-center justify-center mx-auto">
                  <Clock className="h-10 w-10 text-navy-900 dark:text-white" />
                </div>
                <h3 className="text-xl font-bold text-yellow-400 dark:text-amber-400">تسليم في الوقت</h3>
                <p className="text-gray-200 dark:text-gray-300">
                  نلتزم بمواعيد التسليم المحددة
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="w-full py-16 md:py-24 lg:py-32 bg-luxury-ivory">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-16 text-luxury-navy">
              مراحل العمل
            </h2>
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
              <div className="text-center space-y-4">
                <div className="w-16 h-16 bg-luxury-gold rounded-full flex items-center justify-center mx-auto">
                  <span className="text-2xl font-bold text-luxury-navy">1</span>
                </div>
                <h3 className="text-xl font-bold text-luxury-navy">التخطيط</h3>
                <p className="text-medium-text">
                  دراسة المشروع وإعداد الخطط التفصيلية
                </p>
              </div>
              <div className="text-center space-y-4">
                <div className="w-16 h-16 bg-luxury-gold rounded-full flex items-center justify-center mx-auto">
                  <span className="text-2xl font-bold text-luxury-navy">2</span>
                </div>
                <h3 className="text-xl font-bold text-luxury-navy">التصميم</h3>
                <p className="text-medium-text">
                  إعداد التصاميم والرسومات التنفيذية
                </p>
              </div>
              <div className="text-center space-y-4">
                <div className="w-16 h-16 bg-luxury-gold rounded-full flex items-center justify-center mx-auto">
                  <span className="text-2xl font-bold text-luxury-navy">3</span>
                </div>
                <h3 className="text-xl font-bold text-luxury-navy">التنفيذ</h3>
                <p className="text-medium-text">
                  تنفيذ الأعمال تحت إشراف مستمر
                </p>
              </div>
              <div className="text-center space-y-4">
                <div className="w-16 h-16 bg-luxury-gold rounded-full flex items-center justify-center mx-auto">
                  <span className="text-2xl font-bold text-luxury-navy">4</span>
                </div>
                <h3 className="text-xl font-bold text-luxury-navy">التسليم</h3>
                <p className="text-medium-text">
                  تسليم المشروع مع ضمان الجودة
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="w-full py-16 md:py-24 lg:py-32 bg-luxury-navy text-luxury-ivory">
          <div className="container px-4 md:px-6">
            <div className="text-center space-y-8">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-luxury-ivory">
                ابدأ مشروعك الإنشائي معنا
              </h2>
              <p className="max-w-2xl mx-auto text-lg text-luxury-ivory/80">
                تواصل معنا اليوم للحصول على استشارة مجانية وتقدير سعر لمشروعك
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
                  <a href="tel:0580122162">
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
