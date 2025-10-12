import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Laptop, Database, Network, CheckCircle, Award, Users, Shield, Clock, Code, Smartphone, Server, Lock } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import Image from "next/image"

export default function ITServicesPage() {
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
                  خدمات تقنية المعلومات
                </h1>
                <p className="max-w-[800px] text-lg md:text-xl/relaxed lg:text-2xl/relaxed text-luxury-ivory mb-8">
                  نقدم حلول تقنية متكاملة تشمل تطوير البرمجيات وتحليل البيانات وأمن المعلومات
                  لتحويل أعمالكم رقمياً
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
                        <Laptop className="h-12 w-12 text-luxury-navy" />
                      </div>
                      <h3 className="text-2xl font-bold text-luxury-ivory">حلول تقنية متكاملة</h3>
                      <p className="text-luxury-ivory/90">تحويل رقمي متقدم</p>
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
              خدماتنا التقنية
            </h2>
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              <Card className="bg-white text-dark-text border-luxury-gold/30 text-center shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
                <CardHeader className="flex flex-col items-center gap-4 pb-4">
                  <div className="w-20 h-20 bg-gradient-to-br from-luxury-gold to-luxury-gold-light rounded-full flex items-center justify-center">
                    <Laptop className="h-10 w-10 text-luxury-navy" />
                  </div>
                  <CardTitle className="text-2xl font-bold text-luxury-navy">تطوير البرمجيات</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-medium-text mb-4">
                    تطوير تطبيقات وبرمجيات مخصصة تلبي احتياجاتكم
                  </p>
                  <div className="space-y-2 text-sm text-medium-text">
                    <div className="flex items-center gap-2 justify-center">
                      <CheckCircle className="h-4 w-4 text-luxury-gold" />
                      <span>تطبيقات الويب</span>
                    </div>
                    <div className="flex items-center gap-2 justify-center">
                      <CheckCircle className="h-4 w-4 text-luxury-gold" />
                      <span>تطبيقات الهاتف</span>
                    </div>
                    <div className="flex items-center gap-2 justify-center">
                      <CheckCircle className="h-4 w-4 text-luxury-gold" />
                      <span>أنظمة إدارية</span>
                    </div>
                    <div className="flex items-center gap-2 justify-center">
                      <CheckCircle className="h-4 w-4 text-luxury-gold" />
                      <span>حلول مخصصة</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-white text-dark-text border-luxury-gold/30 text-center shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
                <CardHeader className="flex flex-col items-center gap-4 pb-4">
                  <div className="w-20 h-20 bg-gradient-to-br from-luxury-gold to-luxury-gold-light rounded-full flex items-center justify-center">
                    <Database className="h-10 w-10 text-luxury-navy" />
                  </div>
                  <CardTitle className="text-2xl font-bold text-luxury-navy">تحليل البيانات</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-medium-text mb-4">
                    تحليل متقدم للبيانات واستخراج الرؤى والتنبؤات
                  </p>
                  <div className="space-y-2 text-sm text-medium-text">
                    <div className="flex items-center gap-2 justify-center">
                      <CheckCircle className="h-4 w-4 text-luxury-gold" />
                      <span>تحليل إحصائي</span>
                    </div>
                    <div className="flex items-center gap-2 justify-center">
                      <CheckCircle className="h-4 w-4 text-luxury-gold" />
                      <span>تقارير تفصيلية</span>
                    </div>
                    <div className="flex items-center gap-2 justify-center">
                      <CheckCircle className="h-4 w-4 text-luxury-gold" />
                      <span>تنبؤات مستقبلية</span>
                    </div>
                    <div className="flex items-center gap-2 justify-center">
                      <CheckCircle className="h-4 w-4 text-luxury-gold" />
                      <span>لوحات تحكم تفاعلية</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-white text-dark-text border-luxury-gold/30 text-center shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
                <CardHeader className="flex flex-col items-center gap-4 pb-4">
                  <div className="w-20 h-20 bg-gradient-to-br from-luxury-gold to-luxury-gold-light rounded-full flex items-center justify-center">
                    <Network className="h-10 w-10 text-luxury-navy" />
                  </div>
                  <CardTitle className="text-2xl font-bold text-luxury-navy">أمن المعلومات</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-medium-text mb-4">
                    حماية البيانات وأنظمة الأمان المتقدمة
                  </p>
                  <div className="space-y-2 text-sm text-medium-text">
                    <div className="flex items-center gap-2 justify-center">
                      <CheckCircle className="h-4 w-4 text-luxury-gold" />
                      <span>حماية الشبكات</span>
                    </div>
                    <div className="flex items-center gap-2 justify-center">
                      <CheckCircle className="h-4 w-4 text-luxury-gold" />
                      <span>تشفير البيانات</span>
                    </div>
                    <div className="flex items-center gap-2 justify-center">
                      <CheckCircle className="h-4 w-4 text-luxury-gold" />
                      <span>مراقبة الأمان</span>
                    </div>
                    <div className="flex items-center gap-2 justify-center">
                      <CheckCircle className="h-4 w-4 text-luxury-gold" />
                      <span>اختبار الاختراق</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-white text-dark-text border-luxury-gold/30 text-center shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
                <CardHeader className="flex flex-col items-center gap-4 pb-4">
                  <div className="w-20 h-20 bg-gradient-to-br from-luxury-gold to-luxury-gold-light rounded-full flex items-center justify-center">
                    <Smartphone className="h-10 w-10 text-luxury-navy" />
                  </div>
                  <CardTitle className="text-2xl font-bold text-luxury-navy">تطبيقات الهاتف</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-medium-text mb-4">
                    تطوير تطبيقات الهاتف المحمول لجميع المنصات
                  </p>
                  <div className="space-y-2 text-sm text-medium-text">
                    <div className="flex items-center gap-2 justify-center">
                      <CheckCircle className="h-4 w-4 text-luxury-gold" />
                      <span>iOS و Android</span>
                    </div>
                    <div className="flex items-center gap-2 justify-center">
                      <CheckCircle className="h-4 w-4 text-luxury-gold" />
                      <span>تصميم عصري</span>
                    </div>
                    <div className="flex items-center gap-2 justify-center">
                      <CheckCircle className="h-4 w-4 text-luxury-gold" />
                      <span>أداء عالي</span>
                    </div>
                    <div className="flex items-center gap-2 justify-center">
                      <CheckCircle className="h-4 w-4 text-luxury-gold" />
                      <span>دعم فني</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-white text-dark-text border-luxury-gold/30 text-center shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
                <CardHeader className="flex flex-col items-center gap-4 pb-4">
                  <div className="w-20 h-20 bg-gradient-to-br from-luxury-gold to-luxury-gold-light rounded-full flex items-center justify-center">
                    <Server className="h-10 w-10 text-luxury-navy" />
                  </div>
                  <CardTitle className="text-2xl font-bold text-luxury-navy">استضافة السحابة</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-medium-text mb-4">
                    حلول استضافة سحابية آمنة وموثوقة
                  </p>
                  <div className="space-y-2 text-sm text-medium-text">
                    <div className="flex items-center gap-2 justify-center">
                      <CheckCircle className="h-4 w-4 text-luxury-gold" />
                      <span>استضافة مشتركة</span>
                    </div>
                    <div className="flex items-center gap-2 justify-center">
                      <CheckCircle className="h-4 w-4 text-luxury-gold" />
                      <span>خوادم افتراضية</span>
                    </div>
                    <div className="flex items-center gap-2 justify-center">
                      <CheckCircle className="h-4 w-4 text-luxury-gold" />
                      <span>نسخ احتياطية</span>
                    </div>
                    <div className="flex items-center gap-2 justify-center">
                      <CheckCircle className="h-4 w-4 text-luxury-gold" />
                      <span>دعم 24/7</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-white text-dark-text border-luxury-gold/30 text-center shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
                <CardHeader className="flex flex-col items-center gap-4 pb-4">
                  <div className="w-20 h-20 bg-gradient-to-br from-luxury-gold to-luxury-gold-light rounded-full flex items-center justify-center">
                    <Code className="h-10 w-10 text-luxury-navy" />
                  </div>
                  <CardTitle className="text-2xl font-bold text-luxury-navy">صيانة البرمجيات</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-medium-text mb-4">
                    صيانة وتحديث البرمجيات والتطبيقات
                  </p>
                  <div className="space-y-2 text-sm text-medium-text">
                    <div className="flex items-center gap-2 justify-center">
                      <CheckCircle className="h-4 w-4 text-luxury-gold" />
                      <span>تحديثات دورية</span>
                    </div>
                    <div className="flex items-center gap-2 justify-center">
                      <CheckCircle className="h-4 w-4 text-luxury-gold" />
                      <span>إصلاح الأخطاء</span>
                    </div>
                    <div className="flex items-center gap-2 justify-center">
                      <CheckCircle className="h-4 w-4 text-luxury-gold" />
                      <span>تحسين الأداء</span>
                    </div>
                    <div className="flex items-center gap-2 justify-center">
                      <CheckCircle className="h-4 w-4 text-luxury-gold" />
                      <span>دعم فني</span>
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
              مميزات خدماتنا التقنية
            </h2>
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
              <div className="text-center space-y-4">
                <div className="w-20 h-20 bg-luxury-gold rounded-full flex items-center justify-center mx-auto">
                  <Award className="h-10 w-10 text-luxury-navy" />
                </div>
                <h3 className="text-xl font-bold text-luxury-gold">جودة عالية</h3>
                <p className="text-luxury-ivory/80">
                  نستخدم أحدث التقنيات والمعايير
                </p>
              </div>
              <div className="text-center space-y-4">
                <div className="w-20 h-20 bg-luxury-gold rounded-full flex items-center justify-center mx-auto">
                  <Users className="h-10 w-10 text-luxury-navy" />
                </div>
                <h3 className="text-xl font-bold text-luxury-gold">فريق متخصص</h3>
                <p className="text-luxury-ivory/80">
                  مطورين وخبراء تقنيين محترفين
                </p>
              </div>
              <div className="text-center space-y-4">
                <div className="w-20 h-20 bg-luxury-gold rounded-full flex items-center justify-center mx-auto">
                  <Shield className="h-10 w-10 text-luxury-navy" />
                </div>
                <h3 className="text-xl font-bold text-luxury-gold">أمان تام</h3>
                <p className="text-luxury-ivory/80">
                  نضمن حماية بياناتكم
                </p>
              </div>
              <div className="text-center space-y-4">
                <div className="w-20 h-20 bg-luxury-gold rounded-full flex items-center justify-center mx-auto">
                  <Clock className="h-10 w-10 text-luxury-navy" />
                </div>
                <h3 className="text-xl font-bold text-luxury-gold">تسليم سريع</h3>
                <p className="text-luxury-ivory/80">
                  نلتزم بمواعيد التسليم
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="w-full py-16 md:py-24 lg:py-32 bg-luxury-ivory">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-16 text-luxury-navy">
              مراحل التطوير
            </h2>
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
              <div className="text-center space-y-4">
                <div className="w-16 h-16 bg-luxury-gold rounded-full flex items-center justify-center mx-auto">
                  <span className="text-2xl font-bold text-luxury-navy">1</span>
                </div>
                <h3 className="text-xl font-bold text-luxury-navy">التحليل</h3>
                <p className="text-medium-text">
                  فهم المتطلبات وتحليل الاحتياجات
                </p>
              </div>
              <div className="text-center space-y-4">
                <div className="w-16 h-16 bg-luxury-gold rounded-full flex items-center justify-center mx-auto">
                  <span className="text-2xl font-bold text-luxury-navy">2</span>
                </div>
                <h3 className="text-xl font-bold text-luxury-navy">التصميم</h3>
                <p className="text-medium-text">
                  تصميم الواجهات والهيكل التقني
                </p>
              </div>
              <div className="text-center space-y-4">
                <div className="w-16 h-16 bg-luxury-gold rounded-full flex items-center justify-center mx-auto">
                  <span className="text-2xl font-bold text-luxury-navy">3</span>
                </div>
                <h3 className="text-xl font-bold text-luxury-navy">التطوير</h3>
                <p className="text-medium-text">
                  برمجة وتطوير التطبيق</p>
              </div>
              <div className="text-center space-y-4">
                <div className="w-16 h-16 bg-luxury-gold rounded-full flex items-center justify-center mx-auto">
                  <span className="text-2xl font-bold text-luxury-navy">4</span>
                </div>
                <h3 className="text-xl font-bold text-luxury-navy">الاختبار</h3>
                <p className="text-medium-text">
                  اختبار شامل وضمان الجودة
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="w-full py-16 md:py-24 lg:py-32 bg-luxury-navy text-luxury-ivory">
          <div className="container px-4 md:px-6">
            <div className="text-center space-y-8">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-luxury-ivory">
                ابدأ رحلتك الرقمية معنا
              </h2>
              <p className="max-w-2xl mx-auto text-lg text-luxury-ivory/80">
                تواصل معنا اليوم لتحويل أعمالكم رقمياً وزيادة كفاءتها
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
                  <Link href="/services">استكشف جميع الخدمات</Link>
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
