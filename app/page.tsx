import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Building2, Palette, Hammer, Shield, Users, Award, Star, CheckCircle, TreePine, Laptop, Database, Truck } from "lucide-react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

export default function HomePage() {
  return (
    <div className="flex flex-col min-h-[100dvh] bg-luxury-ivory text-dark-text">
      <Header />
      <main className="flex-1 pt-20">
        {/* Hero Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-luxury-gradient text-luxury-ivory relative overflow-hidden">
          <div className="absolute inset-0 bg-black/30"></div>
          <div className="container mx-auto px-6 md:px-8 lg:px-12 text-right relative z-10">
            <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl text-luxury-ivory mb-6 drop-shadow-lg">
              شركة رؤى بعيدة
            </h1>
            <p className="max-w-[800px] text-lg md:text-xl/relaxed lg:text-2xl/relaxed text-luxury-ivory mb-8">
              نقدم خدمات متكاملة في الإنشاءات والتشطيبات والنجارة الفاخرة،
              بالإضافة إلى خدمات تقنية المعلومات وتقديم الخدمات اللوجستية وتطوير أنظمة سلسلة التوريد.
            </p>
            <div className="flex justify-center">
              <Button
                asChild
                size="lg"
                className="bg-luxury-gold text-black hover:bg-luxury-gold-light px-8 py-4 text-lg font-semibold rounded-lg shadow-xl transition-all duration-300 transform hover:scale-105"
              >
                <Link href="/services">استكشف خدماتنا</Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Core Values Section */}
        <section className="w-full py-16 md:py-24 lg:py-32 bg-luxury-ivory">
          <div className="container mx-auto px-6 md:px-8 lg:px-12">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-16 text-luxury-navy">
              قيمنا الأساسية
            </h2>
            <div className="grid gap-8 md:grid-cols-3">
              <div className="text-center space-y-4">
                <div className="w-20 h-20 bg-luxury-gold rounded-full flex items-center justify-center mx-auto">
                  <Award className="h-10 w-10 text-luxury-navy" />
                </div>
                <h3 className="text-xl font-bold text-luxury-navy">التميز</h3>
                <p className="text-medium-text">
                  نسعى دائماً للتميز في جميع خدماتنا، مع التركيز على الجودة العالية والابتكار
                </p>
              </div>
              <div className="text-center space-y-4">
                <div className="w-20 h-20 bg-luxury-gold rounded-full flex items-center justify-center mx-auto">
                  <Shield className="h-10 w-10 text-luxury-navy" />
                </div>
                <h3 className="text-xl font-bold text-luxury-navy">الموثوقية</h3>
                <p className="text-medium-text">
                  نلتزم بمواعيدنا ونضمن لكم جودة عالية في جميع مراحل العمل
                </p>
              </div>
              <div className="text-center space-y-4">
                <div className="w-20 h-20 bg-luxury-gold rounded-full flex items-center justify-center mx-auto">
                  <Users className="h-10 w-10 text-luxury-navy" />
                </div>
                <h3 className="text-xl font-bold text-luxury-navy">خدمة العملاء</h3>
                <p className="text-medium-text">
                  نضع رضاكم في المقام الأول ونقدم لكم خدمة متميزة ومخصصة
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Services Overview Section */}
        <section className="w-full py-16 md:py-24 lg:py-32 bg-luxury-navy text-luxury-ivory">
          <div className="container mx-auto px-6 md:px-8 lg:px-12">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-16 text-luxury-ivory">
              نظرة عامة على خدماتنا
            </h2>
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              <Card className="bg-white text-dark-text border-luxury-gold/30 text-center shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
                <CardHeader className="flex flex-col items-center gap-4 pb-4">
                  <div className="w-20 h-20 bg-gradient-to-br from-luxury-gold to-luxury-gold-light rounded-full flex items-center justify-center">
                    <Building2 className="h-10 w-10 text-luxury-navy" />
                  </div>
                  <CardTitle className="text-2xl font-bold text-luxury-navy">خدمات الإنشاءات</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-medium-text mb-4">
                    خدمات إنشاءات متكاملة تشمل المباني السكنية والتجارية
                  </p>
                  <div className="space-y-2 text-sm text-medium-text">
                    <div className="flex items-center gap-2 justify-center">
                      <CheckCircle className="h-4 w-4 text-luxury-gold" />
                      <span>الإنشاءات السكنية</span>
                    </div>
                    <div className="flex items-center gap-2 justify-center">
                      <CheckCircle className="h-4 w-4 text-luxury-gold" />
                      <span>الإنشاءات التجارية</span>
                    </div>
                    <div className="flex items-center gap-2 justify-center">
                      <CheckCircle className="h-4 w-4 text-luxury-gold" />
                      <span>الصيانة والإصلاح</span>
                    </div>
                  </div>
                  <div className="mt-4">
                    <Link href="/construction-services" className="text-luxury-gold hover:text-luxury-gold-dark font-semibold">
                      اقرأ المزيد →
                    </Link>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-white text-dark-text border-luxury-gold/30 text-center shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
                <CardHeader className="flex flex-col items-center gap-4 pb-4">
                  <div className="w-20 h-20 bg-gradient-to-br from-luxury-gold to-luxury-gold-light rounded-full flex items-center justify-center">
                    <Palette className="h-10 w-10 text-luxury-navy" />
                  </div>
                  <CardTitle className="text-2xl font-bold text-luxury-navy">خدمات التشطيبات</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-medium-text mb-4">
                    تشطيبات فاخرة ومتطورة للجدران والأرضيات والأسقف
                  </p>
                  <div className="space-y-2 text-sm text-medium-text">
                    <div className="flex items-center gap-2 justify-center">
                      <CheckCircle className="h-4 w-4 text-luxury-gold" />
                      <span>تشطيبات الجدران</span>
                    </div>
                    <div className="flex items-center gap-2 justify-center">
                      <CheckCircle className="h-4 w-4 text-luxury-gold" />
                      <span>تشطيبات الأرضيات</span>
                    </div>
                    <div className="flex items-center gap-2 justify-center">
                      <CheckCircle className="h-4 w-4 text-luxury-gold" />
                      <span>تشطيبات الأسقف</span>
                    </div>
                  </div>
                  <div className="mt-4">
                    <Link href="/finishes" className="text-luxury-gold hover:text-luxury-gold-dark font-semibold">
                      اقرأ المزيد →
                    </Link>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-white text-dark-text border-luxury-gold/30 text-center shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
                <CardHeader className="flex flex-col items-center gap-4 pb-4">
                  <div className="w-20 h-20 bg-gradient-to-br from-luxury-gold to-luxury-gold-light rounded-full flex items-center justify-center">
                    <TreePine className="h-10 w-10 text-luxury-navy" />
                  </div>
                  <CardTitle className="text-2xl font-bold text-luxury-navy">خدمات النجارة</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-medium-text mb-4">
                    نجارة فاخرة باستخدام أجود أنواع الأخشاب الطبيعية
                  </p>
                  <div className="space-y-2 text-sm text-medium-text">
                    <div className="flex items-center gap-2 justify-center">
                      <CheckCircle className="h-4 w-4 text-luxury-gold" />
                      <span>أنواع الأخشاب الفاخرة</span>
                    </div>
                    <div className="flex items-center gap-2 justify-center">
                      <CheckCircle className="h-4 w-4 text-luxury-gold" />
                      <span>تقنيات التشطيب المتطورة</span>
                    </div>
                    <div className="flex items-center gap-2 justify-center">
                      <CheckCircle className="h-4 w-4 text-luxury-gold" />
                      <span>أثاث مخصص</span>
                    </div>
                  </div>
                  <div className="mt-4">
                    <Link href="/woodworking-services" className="text-luxury-gold hover:text-luxury-gold-dark font-semibold">
                      اقرأ المزيد →
                    </Link>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-white text-dark-text border-luxury-gold/30 text-center shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
                <CardHeader className="flex flex-col items-center gap-4 pb-4">
                  <div className="w-20 h-20 bg-gradient-to-br from-luxury-gold to-luxury-gold-light rounded-full flex items-center justify-center">
                    <Laptop className="h-10 w-10 text-luxury-navy" />
                  </div>
                  <CardTitle className="text-2xl font-bold text-luxury-navy">خدمات تقنية المعلومات</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-medium-text mb-4">
                    تطوير البرمجيات وتحليل البيانات وأمن المعلومات
                  </p>
                  <div className="space-y-2 text-sm text-medium-text">
                    <div className="flex items-center gap-2 justify-center">
                      <CheckCircle className="h-4 w-4 text-luxury-gold" />
                      <span>تطوير البرمجيات</span>
                    </div>
                    <div className="flex items-center gap-2 justify-center">
                      <CheckCircle className="h-4 w-4 text-luxury-gold" />
                      <span>تحليل البيانات</span>
                    </div>
                    <div className="flex items-center gap-2 justify-center">
                      <CheckCircle className="h-4 w-4 text-luxury-gold" />
                      <span>أمن المعلومات</span>
                    </div>
                  </div>
                  <div className="mt-4">
                    <Link href="/it-services" className="text-luxury-gold hover:text-luxury-gold-dark font-semibold">
                      اقرأ المزيد →
                    </Link>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-white text-dark-text border-luxury-gold/30 text-center shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
                <CardHeader className="flex flex-col items-center gap-4 pb-4">
                  <div className="w-20 h-20 bg-gradient-to-br from-luxury-gold to-luxury-gold-light rounded-full flex items-center justify-center">
                    <Truck className="h-10 w-10 text-luxury-navy" />
                  </div>
                  <CardTitle className="text-2xl font-bold text-luxury-navy">الخدمات اللوجستية</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-medium-text mb-4">
                    خدمات نقل وإدارة مخزون وتطوير أنظمة سلسلة التوريد
                  </p>
                  <div className="space-y-2 text-sm text-medium-text">
                    <div className="flex items-center gap-2 justify-center">
                      <CheckCircle className="h-4 w-4 text-luxury-gold" />
                      <span>خدمات النقل</span>
                    </div>
                    <div className="flex items-center gap-2 justify-center">
                      <CheckCircle className="h-4 w-4 text-luxury-gold" />
                      <span>إدارة المخزون</span>
                    </div>
                    <div className="flex items-center gap-2 justify-center">
                      <CheckCircle className="h-4 w-4 text-luxury-gold" />
                      <span>تحسين العمليات</span>
                    </div>
                  </div>
                  <div className="mt-4">
                    <Link href="/logistics-services" className="text-luxury-gold hover:text-luxury-gold-dark font-semibold">
                      اقرأ المزيد →
                    </Link>
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
                  </div>
                  <div className="mt-4">
                    <Link href="/data-analytics" className="text-luxury-gold hover:text-luxury-gold-dark font-semibold">
                      اقرأ المزيد →
                    </Link>
                  </div>
                </CardContent>
              </Card>
            </div>
            <div className="text-center mt-12">
              <Button
                asChild
                size="lg"
                className="bg-luxury-gold text-black hover:bg-luxury-gold-light px-8 py-4 text-lg font-semibold rounded-lg shadow-xl transition-all duration-300 transform hover:scale-105"
              >
                <Link href="/services">استكشف جميع الخدمات</Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Vision of Excellence Section */}
        <section className="w-full py-16 md:py-24 lg:py-32 bg-luxury-ivory">
          <div className="container mx-auto px-6 md:px-8 lg:px-12">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-16 text-luxury-navy">
              رؤية التميز
            </h2>
            <div className="grid gap-8 md:grid-cols-3">
              <div className="text-center space-y-4">
                <div className="w-20 h-20 bg-luxury-gold rounded-full flex items-center justify-center mx-auto">
                  <Shield className="h-10 w-10 text-luxury-navy" />
                </div>
                <h3 className="text-xl font-bold text-luxury-navy">ضمان حتى 5 سنوات</h3>
                <p className="text-medium-text">
                  نضمن لكم جودة عالية في جميع أعمالنا مع ضمان شامل حتى 5 سنوات
                </p>
              </div>
              <div className="text-center space-y-4">
                <div className="w-20 h-20 bg-luxury-gold rounded-full flex items-center justify-center mx-auto">
                  <Award className="h-10 w-10 text-luxury-navy" />
                </div>
                <h3 className="text-xl font-bold text-luxury-navy">شهادات الفريق</h3>
                <p className="text-medium-text">
                  فريق عمل محترف ومؤهل مع شهادات معتمدة في جميع التخصصات
                </p>
              </div>
              <div className="text-center space-y-4">
                <div className="w-20 h-20 bg-luxury-gold rounded-full flex items-center justify-center mx-auto">
                  <Star className="h-10 w-10 text-luxury-navy" />
                </div>
                <h3 className="text-xl font-bold text-luxury-navy">شركاء المواد</h3>
                <p className="text-medium-text">
                  نتعامل مع أفضل موردي المواد وأكثرهم موثوقية في السوق
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="w-full py-16 md:py-24 lg:py-32 bg-luxury-navy text-luxury-ivory">
          <div className="container mx-auto px-6 md:px-8 lg:px-12">
            <div className="text-center space-y-8">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-luxury-ivory">
                ابدأ مشروعك معنا
              </h2>
              <p className="max-w-2xl mx-auto text-lg text-luxury-ivory/80">
                تواصل معنا اليوم للحصول على استشارة مجانية وتقدير سعر لمشروعك
              </p>
              <div className="flex justify-center">
                <Button
                  asChild
                  size="lg"
                  className="bg-luxury-gold text-black hover:bg-luxury-gold-light px-8 py-4 text-lg font-semibold rounded-lg shadow-xl transition-all duration-300 transform hover:scale-105"
                >
                  <Link href="/contact">احصل على استشارة مجانية</Link>
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
