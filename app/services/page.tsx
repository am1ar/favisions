import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Building2, Palette, TreePine, Laptop, Truck, Database, CheckCircle, Award, Users, Shield, Clock, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function ServicesPage() {
  return (
    <div className="flex flex-col min-h-[100dvh] bg-luxury-ivory text-dark-text">
      <Header />
      <main className="flex-1 pt-20">
        <section className="w-full py-12 md:py-24 lg:py-32 bg-luxury-gradient text-luxury-ivory relative overflow-hidden">
          <div className="absolute inset-0 bg-black/30"></div>
          <div className="container mx-auto px-6 md:px-8 lg:px-12 text-right relative z-10">
            <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl text-luxury-ivory mb-6 drop-shadow-lg">
              خدماتنا الشاملة
            </h1>
            <p className="max-w-[800px] text-lg md:text-xl/relaxed lg:text-2xl/relaxed text-luxury-ivory">
              نقدم خدمات متكاملة في الإنشاءات والتشطيبات والنجارة الفاخرة،
              بالإضافة إلى خدمات تقنية المعلومات وتقديم الخدمات اللوجستية وتطوير أنظمة سلسلة التوريد.
            </p>
          </div>
        </section>

        <section className="w-full py-16 md:py-24 lg:py-32 bg-luxury-ivory">
          <div className="container mx-auto px-6 md:px-8 lg:px-12">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-16 text-luxury-navy">
              قائمة خدماتنا الشاملة
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
                  <div className="space-y-2 text-sm text-medium-text mb-4">
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
                  <Link href="/construction-services" className="inline-flex items-center gap-2 text-luxury-gold hover:text-luxury-gold-dark font-semibold">
                    اقرأ المزيد <ArrowRight className="h-4 w-4" />
                  </Link>
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
                  <div className="space-y-2 text-sm text-medium-text mb-4">
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
                  <Link href="/finishes" className="inline-flex items-center gap-2 text-luxury-gold hover:text-luxury-gold-dark font-semibold">
                    اقرأ المزيد <ArrowRight className="h-4 w-4" />
                  </Link>
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
                  <div className="space-y-2 text-sm text-medium-text mb-4">
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
                  <Link href="/woodworking-services" className="inline-flex items-center gap-2 text-luxury-gold hover:text-luxury-gold-dark font-semibold">
                    اقرأ المزيد <ArrowRight className="h-4 w-4" />
                  </Link>
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
                  <div className="space-y-2 text-sm text-medium-text mb-4">
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
                  <Link href="/it-services" className="inline-flex items-center gap-2 text-luxury-gold hover:text-luxury-gold-dark font-semibold">
                    اقرأ المزيد <ArrowRight className="h-4 w-4" />
                  </Link>
                </CardContent>
              </Card>

              <Card className="bg-white text-dark-text border-luxury-gold/30 text-center shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
                <CardHeader className="flex flex-col items-center gap-4 pb-4">
                  <div className="w-20 h-20 bg-gradient-to-br from-luxury-gold to-luxury-gold-light rounded-full flex items-center justify-center">
                    <Truck className="h-10 w-10 text-luxury-navy" />
                  </div>
                  <CardTitle className="text-2xl font-bold text-luxury-navy">تقديم الخدمات اللوجستية</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-medium-text mb-4">
                    خدمات نقل وإدارة مخزون وتطوير أنظمة سلسلة التوريد
                  </p>
                  <div className="space-y-2 text-sm text-medium-text mb-4">
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
                  <Link href="/logistics-services" className="inline-flex items-center gap-2 text-luxury-gold hover:text-luxury-gold-dark font-semibold">
                    اقرأ المزيد <ArrowRight className="h-4 w-4" />
                  </Link>
                </CardContent>
              </Card>

              <Card className="bg-white text-dark-text border-luxury-gold/30 text-center shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
                <CardHeader className="flex flex-col items-center gap-4 pb-4">
                  <div className="w-20 h-20 bg-gradient-to-br from-luxury-gold to-luxury-gold-light rounded-full flex items-center justify-center">
                    <Database className="h-10 w-10 text-luxury-navy" />
                  </div>
                  <CardTitle className="text-2xl font-bold text-luxury-navy">خدمات تحليل البيانات</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-medium-text mb-4">
                    تحليل متقدم للبيانات واستخراج الرؤى والتنبؤات الذكية
                  </p>
                  <div className="space-y-2 text-sm text-medium-text mb-4">
                    <div className="flex items-center gap-2 justify-center">
                      <CheckCircle className="h-4 w-4 text-luxury-gold" />
                      <span>التحليل الإحصائي</span>
                    </div>
                    <div className="flex items-center gap-2 justify-center">
                      <CheckCircle className="h-4 w-4 text-luxury-gold" />
                      <span>التنبؤات المستقبلية</span>
                    </div>
                    <div className="flex items-center gap-2 justify-center">
                      <CheckCircle className="h-4 w-4 text-luxury-gold" />
                      <span>لوحات تحكم تفاعلية</span>
                    </div>
                  </div>
                  <Link href="/data-analytics" className="inline-flex items-center gap-2 text-luxury-gold hover:text-luxury-gold-dark font-semibold">
                    اقرأ المزيد <ArrowRight className="h-4 w-4" />
                  </Link>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* قائمة تفصيلية للخدمات */}
        <section className="w-full py-16 md:py-24 lg:py-32 bg-gradient-to-br from-luxury-ivory to-gray-50">
          <div className="container mx-auto px-6 md:px-8 lg:px-12">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-16 text-luxury-navy">
              تفاصيل خدماتنا المتخصصة
            </h2>
            
            {/* خدمات الإنشاءات */}
            <div className="mb-16">
              <div className="flex items-center gap-4 mb-8">
                <div className="w-12 h-12 bg-gradient-to-br from-luxury-gold to-luxury-gold-light rounded-lg flex items-center justify-center">
                  <Building2 className="h-6 w-6 text-luxury-navy" />
                </div>
                <h3 className="text-2xl font-bold text-luxury-navy">خدمات الإنشاءات والتطوير</h3>
              </div>
              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                <Card className="bg-white border-luxury-gold/20 shadow-lg hover:shadow-xl transition-all duration-300">
                  <CardHeader className="pb-3">
                    <CardTitle className="text-lg font-semibold text-luxury-navy">الإنشاءات السكنية</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <div className="flex items-center gap-2 text-sm text-medium-text">
                      <CheckCircle className="h-4 w-4 text-luxury-gold" />
                      <span>فيلات فاخرة</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-medium-text">
                      <CheckCircle className="h-4 w-4 text-luxury-gold" />
                      <span>شقق سكنية</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-medium-text">
                      <CheckCircle className="h-4 w-4 text-luxury-gold" />
                      <span>مجمعات سكنية</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-medium-text">
                      <CheckCircle className="h-4 w-4 text-luxury-gold" />
                      <span>تطوير الأراضي</span>
                    </div>
                  </CardContent>
                </Card>

                <Card className="bg-white border-luxury-gold/20 shadow-lg hover:shadow-xl transition-all duration-300">
                  <CardHeader className="pb-3">
                    <CardTitle className="text-lg font-semibold text-luxury-navy">الإنشاءات التجارية</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <div className="flex items-center gap-2 text-sm text-medium-text">
                      <CheckCircle className="h-4 w-4 text-luxury-gold" />
                      <span>مراكز تجارية</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-medium-text">
                      <CheckCircle className="h-4 w-4 text-luxury-gold" />
                      <span>مكاتب إدارية</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-medium-text">
                      <CheckCircle className="h-4 w-4 text-luxury-gold" />
                      <span>مستشفيات وعيادات</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-medium-text">
                      <CheckCircle className="h-4 w-4 text-luxury-gold" />
                      <span>فنادق ومنتجعات</span>
                    </div>
                  </CardContent>
                </Card>

                <Card className="bg-white border-luxury-gold/20 shadow-lg hover:shadow-xl transition-all duration-300">
                  <CardHeader className="pb-3">
                    <CardTitle className="text-lg font-semibold text-luxury-navy">الصيانة والإصلاح</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <div className="flex items-center gap-2 text-sm text-medium-text">
                      <CheckCircle className="h-4 w-4 text-luxury-gold" />
                      <span>صيانة دورية</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-medium-text">
                      <CheckCircle className="h-4 w-4 text-luxury-gold" />
                      <span>إصلاحات طارئة</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-medium-text">
                      <CheckCircle className="h-4 w-4 text-luxury-gold" />
                      <span>ترميم المباني</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-medium-text">
                      <CheckCircle className="h-4 w-4 text-luxury-gold" />
                      <span>تحديث المرافق</span>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* خدمات التشطيبات */}
            <div className="mb-16">
              <div className="flex items-center gap-4 mb-8">
                <div className="w-12 h-12 bg-gradient-to-br from-luxury-gold to-luxury-gold-light rounded-lg flex items-center justify-center">
                  <Palette className="h-6 w-6 text-luxury-navy" />
                </div>
                <h3 className="text-2xl font-bold text-luxury-navy">خدمات التشطيبات الفاخرة</h3>
              </div>
              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                <Card className="bg-white border-luxury-gold/20 shadow-lg hover:shadow-xl transition-all duration-300">
                  <CardHeader className="pb-3">
                    <CardTitle className="text-lg font-semibold text-luxury-navy">تشطيبات الجدران</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <div className="flex items-center gap-2 text-sm text-medium-text">
                      <CheckCircle className="h-4 w-4 text-luxury-gold" />
                      <span>دهانات فاخرة</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-medium-text">
                      <CheckCircle className="h-4 w-4 text-luxury-gold" />
                      <span>ورق جدران</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-medium-text">
                      <CheckCircle className="h-4 w-4 text-luxury-gold" />
                      <span>كسوة حجرية</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-medium-text">
                      <CheckCircle className="h-4 w-4 text-luxury-gold" />
                      <span>ألواح خشبية</span>
                    </div>
                  </CardContent>
                </Card>

                <Card className="bg-white border-luxury-gold/20 shadow-lg hover:shadow-xl transition-all duration-300">
                  <CardHeader className="pb-3">
                    <CardTitle className="text-lg font-semibold text-luxury-navy">تشطيبات الأرضيات</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <div className="flex items-center gap-2 text-sm text-medium-text">
                      <CheckCircle className="h-4 w-4 text-luxury-gold" />
                      <span>رخام وجرانيت</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-medium-text">
                      <CheckCircle className="h-4 w-4 text-luxury-gold" />
                      <span>باركيه خشبي</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-medium-text">
                      <CheckCircle className="h-4 w-4 text-luxury-gold" />
                      <span>سيراميك وبورسلين</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-medium-text">
                      <CheckCircle className="h-4 w-4 text-luxury-gold" />
                      <span>أرضيات إيبوكسي</span>
                    </div>
                  </CardContent>
                </Card>

                <Card className="bg-white border-luxury-gold/20 shadow-lg hover:shadow-xl transition-all duration-300">
                  <CardHeader className="pb-3">
                    <CardTitle className="text-lg font-semibold text-luxury-navy">تشطيبات الأسقف</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <div className="flex items-center gap-2 text-sm text-medium-text">
                      <CheckCircle className="h-4 w-4 text-luxury-gold" />
                      <span>أسقف معلقة</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-medium-text">
                      <CheckCircle className="h-4 w-4 text-luxury-gold" />
                      <span>جبس بورد</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-medium-text">
                      <CheckCircle className="h-4 w-4 text-luxury-gold" />
                      <span>إضاءة مخفية</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-medium-text">
                      <CheckCircle className="h-4 w-4 text-luxury-gold" />
                      <span>تصاميم ثلاثية الأبعاد</span>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* خدمات النجارة */}
            <div className="mb-16">
              <div className="flex items-center gap-4 mb-8">
                <div className="w-12 h-12 bg-gradient-to-br from-luxury-gold to-luxury-gold-light rounded-lg flex items-center justify-center">
                  <TreePine className="h-6 w-6 text-luxury-navy" />
                </div>
                <h3 className="text-2xl font-bold text-luxury-navy">خدمات النجارة الفاخرة</h3>
              </div>
              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                <Card className="bg-white border-luxury-gold/20 shadow-lg hover:shadow-xl transition-all duration-300">
                  <CardHeader className="pb-3">
                    <CardTitle className="text-lg font-semibold text-luxury-navy">أثاث مخصص</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <div className="flex items-center gap-2 text-sm text-medium-text">
                      <CheckCircle className="h-4 w-4 text-luxury-gold" />
                      <span>خزائن ملابس</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-medium-text">
                      <CheckCircle className="h-4 w-4 text-luxury-gold" />
                      <span>مطابخ خشبية</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-medium-text">
                      <CheckCircle className="h-4 w-4 text-luxury-gold" />
                      <span>غرف نوم كاملة</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-medium-text">
                      <CheckCircle className="h-4 w-4 text-luxury-gold" />
                      <span>أثاث مكتبي</span>
                    </div>
                  </CardContent>
                </Card>

                <Card className="bg-white border-luxury-gold/20 shadow-lg hover:shadow-xl transition-all duration-300">
                  <CardHeader className="pb-3">
                    <CardTitle className="text-lg font-semibold text-luxury-navy">أنواع الأخشاب</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <div className="flex items-center gap-2 text-sm text-medium-text">
                      <CheckCircle className="h-4 w-4 text-luxury-gold" />
                      <span>خشب البلوط</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-medium-text">
                      <CheckCircle className="h-4 w-4 text-luxury-gold" />
                      <span>خشب الكرز</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-medium-text">
                      <CheckCircle className="h-4 w-4 text-luxury-gold" />
                      <span>خشب الجوز</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-medium-text">
                      <CheckCircle className="h-4 w-4 text-luxury-gold" />
                      <span>خشب الماهوجني</span>
                    </div>
                  </CardContent>
                </Card>

                <Card className="bg-white border-luxury-gold/20 shadow-lg hover:shadow-xl transition-all duration-300">
                  <CardHeader className="pb-3">
                    <CardTitle className="text-lg font-semibold text-luxury-navy">تقنيات التشطيب</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <div className="flex items-center gap-2 text-sm text-medium-text">
                      <CheckCircle className="h-4 w-4 text-luxury-gold" />
                      <span>طلاء بالورنيش</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-medium-text">
                      <CheckCircle className="h-4 w-4 text-luxury-gold" />
                      <span>دهان بالزيت</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-medium-text">
                      <CheckCircle className="h-4 w-4 text-luxury-gold" />
                      <span>تشطيب شمعي</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-medium-text">
                      <CheckCircle className="h-4 w-4 text-luxury-gold" />
                      <span>حفر وتطعيم</span>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* خدمات تقنية المعلومات */}
            <div className="mb-16">
              <div className="flex items-center gap-4 mb-8">
                <div className="w-12 h-12 bg-gradient-to-br from-luxury-gold to-luxury-gold-light rounded-lg flex items-center justify-center">
                  <Laptop className="h-6 w-6 text-luxury-navy" />
                </div>
                <h3 className="text-2xl font-bold text-luxury-navy">خدمات تقنية المعلومات</h3>
              </div>
              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                <Card className="bg-white border-luxury-gold/20 shadow-lg hover:shadow-xl transition-all duration-300">
                  <CardHeader className="pb-3">
                    <CardTitle className="text-lg font-semibold text-luxury-navy">تطوير البرمجيات</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <div className="flex items-center gap-2 text-sm text-medium-text">
                      <CheckCircle className="h-4 w-4 text-luxury-gold" />
                      <span>تطبيقات الويب</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-medium-text">
                      <CheckCircle className="h-4 w-4 text-luxury-gold" />
                      <span>تطبيقات الهاتف</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-medium-text">
                      <CheckCircle className="h-4 w-4 text-luxury-gold" />
                      <span>أنظمة إدارة الأعمال</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-medium-text">
                      <CheckCircle className="h-4 w-4 text-luxury-gold" />
                      <span>حلول التجارة الإلكترونية</span>
                    </div>
                  </CardContent>
                </Card>

                <Card className="bg-white border-luxury-gold/20 shadow-lg hover:shadow-xl transition-all duration-300">
                  <CardHeader className="pb-3">
                    <CardTitle className="text-lg font-semibold text-luxury-navy">تحليل البيانات</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <div className="flex items-center gap-2 text-sm text-medium-text">
                      <CheckCircle className="h-4 w-4 text-luxury-gold" />
                      <span>تحليل البيانات الضخمة</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-medium-text">
                      <CheckCircle className="h-4 w-4 text-luxury-gold" />
                      <span>تقارير ذكية</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-medium-text">
                      <CheckCircle className="h-4 w-4 text-luxury-gold" />
                      <span>لوحات تحكم تفاعلية</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-medium-text">
                      <CheckCircle className="h-4 w-4 text-luxury-gold" />
                      <span>تنبؤات وتحليلات مستقبلية</span>
                    </div>
                  </CardContent>
                </Card>

                <Card className="bg-white border-luxury-gold/20 shadow-lg hover:shadow-xl transition-all duration-300">
                  <CardHeader className="pb-3">
                    <CardTitle className="text-lg font-semibold text-luxury-navy">أمن المعلومات</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <div className="flex items-center gap-2 text-sm text-medium-text">
                      <CheckCircle className="h-4 w-4 text-luxury-gold" />
                      <span>حماية البيانات</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-medium-text">
                      <CheckCircle className="h-4 w-4 text-luxury-gold" />
                      <span>تشفير المعلومات</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-medium-text">
                      <CheckCircle className="h-4 w-4 text-luxury-gold" />
                      <span>مراقبة الأمان</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-medium-text">
                      <CheckCircle className="h-4 w-4 text-luxury-gold" />
                      <span>استراتيجيات الحماية</span>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* خدمات اللوجستية */}
            <div className="mb-16">
              <div className="flex items-center gap-4 mb-8">
                <div className="w-12 h-12 bg-gradient-to-br from-luxury-gold to-luxury-gold-light rounded-lg flex items-center justify-center">
                  <Truck className="h-6 w-6 text-luxury-navy" />
                </div>
                <h3 className="text-2xl font-bold text-luxury-navy">خدمات اللوجستية وسلسلة التوريد</h3>
              </div>
              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                <Card className="bg-white border-luxury-gold/20 shadow-lg hover:shadow-xl transition-all duration-300">
                  <CardHeader className="pb-3">
                    <CardTitle className="text-lg font-semibold text-luxury-navy">خدمات النقل</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <div className="flex items-center gap-2 text-sm text-medium-text">
                      <CheckCircle className="h-4 w-4 text-luxury-gold" />
                      <span>نقل البضائع</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-medium-text">
                      <CheckCircle className="h-4 w-4 text-luxury-gold" />
                      <span>خدمات التوصيل</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-medium-text">
                      <CheckCircle className="h-4 w-4 text-luxury-gold" />
                      <span>نقل دولي</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-medium-text">
                      <CheckCircle className="h-4 w-4 text-luxury-gold" />
                      <span>خدمات سريعة</span>
                    </div>
                  </CardContent>
                </Card>

                <Card className="bg-white border-luxury-gold/20 shadow-lg hover:shadow-xl transition-all duration-300">
                  <CardHeader className="pb-3">
                    <CardTitle className="text-lg font-semibold text-luxury-navy">إدارة المخزون</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <div className="flex items-center gap-2 text-sm text-medium-text">
                      <CheckCircle className="h-4 w-4 text-luxury-gold" />
                      <span>تتبع المخزون</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-medium-text">
                      <CheckCircle className="h-4 w-4 text-luxury-gold" />
                      <span>إدارة المستودعات</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-medium-text">
                      <CheckCircle className="h-4 w-4 text-luxury-gold" />
                      <span>تحسين التخزين</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-medium-text">
                      <CheckCircle className="h-4 w-4 text-luxury-gold" />
                      <span>تقارير المخزون</span>
                    </div>
                  </CardContent>
                </Card>

                <Card className="bg-white border-luxury-gold/20 shadow-lg hover:shadow-xl transition-all duration-300">
                  <CardHeader className="pb-3">
                    <CardTitle className="text-lg font-semibold text-luxury-navy">تحسين العمليات</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <div className="flex items-center gap-2 text-sm text-medium-text">
                      <CheckCircle className="h-4 w-4 text-luxury-gold" />
                      <span>تحليل العمليات</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-medium-text">
                      <CheckCircle className="h-4 w-4 text-luxury-gold" />
                      <span>تحسين الكفاءة</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-medium-text">
                      <CheckCircle className="h-4 w-4 text-luxury-gold" />
                      <span>تقليل التكاليف</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-medium-text">
                      <CheckCircle className="h-4 w-4 text-luxury-gold" />
                      <span>استراتيجيات التوريد</span>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* خدمات تحليل البيانات */}
            <div className="mb-16">
              <div className="flex items-center gap-4 mb-8">
                <div className="w-12 h-12 bg-gradient-to-br from-luxury-gold to-luxury-gold-light rounded-lg flex items-center justify-center">
                  <Database className="h-6 w-6 text-luxury-navy" />
                </div>
                <h3 className="text-2xl font-bold text-luxury-navy">خدمات تحليل البيانات</h3>
              </div>
              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                <Card className="bg-white border-luxury-gold/20 shadow-lg hover:shadow-xl transition-all duration-300">
                  <CardHeader className="pb-3">
                    <CardTitle className="text-lg font-semibold text-luxury-navy">التحليل الإحصائي</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <div className="flex items-center gap-2 text-sm text-medium-text">
                      <CheckCircle className="h-4 w-4 text-luxury-gold" />
                      <span>تحليل وصفي</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-medium-text">
                      <CheckCircle className="h-4 w-4 text-luxury-gold" />
                      <span>اختبارات الفرضيات</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-medium-text">
                      <CheckCircle className="h-4 w-4 text-luxury-gold" />
                      <span>تحليل الانحدار</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-medium-text">
                      <CheckCircle className="h-4 w-4 text-luxury-gold" />
                      <span>تحليل الارتباط</span>
                    </div>
                  </CardContent>
                </Card>

                <Card className="bg-white border-luxury-gold/20 shadow-lg hover:shadow-xl transition-all duration-300">
                  <CardHeader className="pb-3">
                    <CardTitle className="text-lg font-semibold text-luxury-navy">التنبؤات المستقبلية</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <div className="flex items-center gap-2 text-sm text-medium-text">
                      <CheckCircle className="h-4 w-4 text-luxury-gold" />
                      <span>نماذج التنبؤ</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-medium-text">
                      <CheckCircle className="h-4 w-4 text-luxury-gold" />
                      <span>تحليل الاتجاهات</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-medium-text">
                      <CheckCircle className="h-4 w-4 text-luxury-gold" />
                      <span>محاكاة السيناريوهات</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-medium-text">
                      <CheckCircle className="h-4 w-4 text-luxury-gold" />
                      <span>تحليل المخاطر</span>
                    </div>
                  </CardContent>
                </Card>

                <Card className="bg-white border-luxury-gold/20 shadow-lg hover:shadow-xl transition-all duration-300">
                  <CardHeader className="pb-3">
                    <CardTitle className="text-lg font-semibold text-luxury-navy">لوحات التحكم</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <div className="flex items-center gap-2 text-sm text-medium-text">
                      <CheckCircle className="h-4 w-4 text-luxury-gold" />
                      <span>لوحات تفاعلية</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-medium-text">
                      <CheckCircle className="h-4 w-4 text-luxury-gold" />
                      <span>تقارير مخصصة</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-medium-text">
                      <CheckCircle className="h-4 w-4 text-luxury-gold" />
                      <span>مراقبة في الوقت الفعلي</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-medium-text">
                      <CheckCircle className="h-4 w-4 text-luxury-gold" />
                      <span>تنبيهات ذكية</span>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        <section className="w-full py-16 md:py-24 lg:py-32 bg-luxury-navy text-luxury-ivory">
          <div className="container mx-auto px-6 md:px-8 lg:px-12">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-16 text-luxury-ivory">
              مميزات خدماتنا
            </h2>
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
              <div className="text-center space-y-4">
                <div className="w-20 h-20 bg-luxury-gold rounded-full flex items-center justify-center mx-auto">
                  <Award className="h-10 w-10 text-luxury-navy" />
                </div>
                <h3 className="text-xl font-bold text-luxury-gold">جودة عالية</h3>
                <p className="text-luxury-ivory/80">
                  نستخدم أجود المواد وأحدث التقنيات
                </p>
              </div>
              <div className="text-center space-y-4">
                <div className="w-20 h-20 bg-luxury-gold rounded-full flex items-center justify-center mx-auto">
                  <Users className="h-10 w-10 text-luxury-navy" />
                </div>
                <h3 className="text-xl font-bold text-luxury-gold">فريق متخصص</h3>
                <p className="text-luxury-ivory/80">
                  مهندسين وعمالة ماهرة ومحترفة
                </p>
              </div>
              <div className="text-center space-y-4">
                <div className="w-20 h-20 bg-luxury-gold rounded-full flex items-center justify-center mx-auto">
                  <Shield className="h-10 w-10 text-luxury-navy" />
                </div>
                <h3 className="text-xl font-bold text-luxury-gold">ضمان شامل</h3>
                <p className="text-luxury-ivory/80">
                  ضمان حتى 5 سنوات على جميع الأعمال
                </p>
              </div>
              <div className="text-center space-y-4">
                <div className="w-20 h-20 bg-luxury-gold rounded-full flex items-center justify-center mx-auto">
                  <Clock className="h-10 w-10 text-luxury-navy" />
                </div>
                <h3 className="text-xl font-bold text-luxury-gold">تسليم في الوقت</h3>
                <p className="text-luxury-ivory/80">
                  نلتزم بمواعيد التسليم المحددة
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="w-full py-16 md:py-24 lg:py-32 bg-luxury-ivory">
          <div className="container mx-auto px-6 md:px-8 lg:px-12">
            <div className="text-center space-y-8">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-luxury-navy">
                ابدأ مشروعك معنا
              </h2>
              <p className="max-w-2xl mx-auto text-lg text-medium-text">
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
                  className="border-2 border-luxury-navy text-black hover:bg-luxury-navy hover:text-luxury-ivory px-8 py-4 text-lg font-semibold rounded-lg transition-all duration-300"
                >
                  <Link href="/project-workflow">تعرف على رحلة المشروع</Link>
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
