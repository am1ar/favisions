import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import {
  Building2,
  Hammer,
  Palette,
  Shield,
  Users,
  Award,
  Star,
  CheckCircle,
  TreePine,
  Scissors,
  Brush,
  Wrench,
  Laptop,
  Database,
  Network,
  Truck,
  Globe,
  BarChart3,
  Clock,
  MapPin,
  Phone,
} from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function ConstructionPage() {
  return (
    <div className="flex flex-col min-h-[100dvh] bg-luxury-ivory text-dark-text">
      <Header />
      <main className="flex-1 pt-20">
        <section className="w-full py-12 md:py-24 lg:py-32 bg-luxury-gradient text-luxury-ivory relative overflow-hidden">
          <div className="absolute inset-0 bg-black/30"></div>
          <div className="container px-4 md:px-6 text-right relative z-10">
            <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl text-luxury-ivory mb-6 drop-shadow-lg">
              خدماتنا الشاملة
            </h1>
            <p className="max-w-[800px] text-lg md:text-xl/relaxed lg:text-2xl/relaxed text-luxury-ivory">
              نقدم خدمات متكاملة في الإنشاءات والتشطيبات والنجارة الفاخرة،
              بالإضافة إلى خدمات تقنية المعلومات والتحليل اللوجستي وتطوير أنظمة سلسلة التوريد.
            </p>
          </div>
        </section>

        <section className="w-full py-16 md:py-24 lg:py-32 bg-luxury-ivory">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-16 text-luxury-navy">
              خدمات الإنشاءات والتشييد
            </h2>
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              <Card className="bg-white text-dark-text border-luxury-gold/30 text-center shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
                <CardHeader className="flex flex-col items-center gap-4 pb-4">
                  <div className="w-20 h-20 bg-gradient-to-br from-luxury-gold to-luxury-gold-light rounded-full flex items-center justify-center">
                    <Building2 className="h-10 w-10 text-luxury-navy" />
                  </div>
                  <CardTitle className="text-2xl font-bold text-luxury-navy">الإنشاءات السكنية</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-medium-text mb-4">
                    بناء المنازل والفيلات السكنية بأعلى معايير الجودة
                  </p>
                  <div className="space-y-2 text-sm text-medium-text">
                    <div className="flex items-center gap-2 justify-center">
                      <CheckCircle className="h-4 w-4 text-luxury-gold" />
                      <span>تصميم معماري متميز</span>
                    </div>
                    <div className="flex items-center gap-2 justify-center">
                      <CheckCircle className="h-4 w-4 text-luxury-gold" />
                      <span>مواد بناء عالية الجودة</span>
                    </div>
                    <div className="flex items-center gap-2 justify-center">
                      <CheckCircle className="h-4 w-4 text-luxury-gold" />
                      <span>تنفيذ احترافي</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-white text-dark-text border-luxury-gold/30 text-center shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
                <CardHeader className="flex flex-col items-center gap-4 pb-4">
                  <div className="w-20 h-20 bg-gradient-to-br from-luxury-gold to-luxury-gold-light rounded-full flex items-center justify-center">
                    <Hammer className="h-10 w-10 text-luxury-navy" />
                  </div>
                  <CardTitle className="text-2xl font-bold text-luxury-navy">الإنشاءات التجارية</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-medium-text mb-4">
                    بناء المكاتب والمحلات التجارية والمراكز التجارية
                  </p>
                  <div className="space-y-2 text-sm text-medium-text">
                    <div className="flex items-center gap-2 justify-center">
                      <CheckCircle className="h-4 w-4 text-luxury-gold" />
                      <span>تصميم عصري</span>
                    </div>
                    <div className="flex items-center gap-2 justify-center">
                      <CheckCircle className="h-4 w-4 text-luxury-gold" />
                      <span>مساحات وظيفية</span>
                    </div>
                    <div className="flex items-center gap-2 justify-center">
                      <CheckCircle className="h-4 w-4 text-luxury-gold" />
                      <span>جودة عالية</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-white text-dark-text border-luxury-gold/30 text-center shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
                <CardHeader className="flex flex-col items-center gap-4 pb-4">
                  <div className="w-20 h-20 bg-gradient-to-br from-luxury-gold to-luxury-gold-light rounded-full flex items-center justify-center">
                    <Wrench className="h-10 w-10 text-luxury-navy" />
                  </div>
                  <CardTitle className="text-2xl font-bold text-luxury-navy">الصيانة والإصلاح</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-medium-text mb-4">
                    خدمات الصيانة والإصلاح للمباني والمنشآت
                  </p>
                  <div className="space-y-2 text-sm text-medium-text">
                    <div className="flex items-center gap-2 justify-center">
                      <CheckCircle className="h-4 w-4 text-luxury-gold" />
                      <span>صيانة دورية</span>
                    </div>
                    <div className="flex items-center gap-2 justify-center">
                      <CheckCircle className="h-4 w-4 text-luxury-gold" />
                      <span>إصلاح الأعطال</span>
                    </div>
                    <div className="flex items-center gap-2 justify-center">
                      <CheckCircle className="h-4 w-4 text-luxury-gold" />
                      <span>تحديثات وتحسينات</span>
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
                    تشطيبات جدران عالية الجودة بأحدث التقنيات
                  </p>
                  <div className="space-y-2 text-sm text-medium-text">
                    <div className="flex items-center gap-2 justify-center">
                      <CheckCircle className="h-4 w-4 text-luxury-gold" />
                      <span>دهانات فاخرة</span>
                    </div>
                    <div className="flex items-center gap-2 justify-center">
                      <CheckCircle className="h-4 w-4 text-luxury-gold" />
                      <span>ورق جدران</span>
                    </div>
                    <div className="flex items-center gap-2 justify-center">
                      <CheckCircle className="h-4 w-4 text-luxury-gold" />
                      <span>أعمال الجبس</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-white text-dark-text border-luxury-gold/30 text-center shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
                <CardHeader className="flex flex-col items-center gap-4 pb-4">
                  <div className="w-20 h-20 bg-gradient-to-br from-luxury-gold to-luxury-gold-light rounded-full flex items-center justify-center">
                    <Palette className="h-10 w-10 text-luxury-navy" />
                  </div>
                  <CardTitle className="text-2xl font-bold text-luxury-navy">تشطيبات الأرضيات</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-medium-text mb-4">
                    تشطيبات أرضيات متنوعة وعصرية
                  </p>
                  <div className="space-y-2 text-sm text-medium-text">
                    <div className="flex items-center gap-2 justify-center">
                      <CheckCircle className="h-4 w-4 text-luxury-gold" />
                      <span>رخام وجرانيت</span>
                    </div>
                    <div className="flex items-center gap-2 justify-center">
                      <CheckCircle className="h-4 w-4 text-luxury-gold" />
                      <span>سيراميك</span>
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
                    <Star className="h-10 w-10 text-luxury-navy" />
                  </div>
                  <CardTitle className="text-2xl font-bold text-luxury-navy">تشطيبات الأسقف</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-medium-text mb-4">
                    تشطيبات أسقف متميزة ومبتكرة
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
                      <span>تصاميم جبسية</span>
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
              خدمات النجارة الفاخرة
            </h2>
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              <Card className="bg-white text-dark-text border-luxury-gold/30 text-center shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
                <CardHeader className="flex flex-col items-center gap-4 pb-4">
                  <div className="w-20 h-20 bg-gradient-to-br from-luxury-gold to-luxury-gold-light rounded-full flex items-center justify-center">
                    <TreePine className="h-10 w-10 text-luxury-navy" />
                  </div>
                  <CardTitle className="text-2xl font-bold text-luxury-navy">أنواع الأخشاب</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-medium-text mb-4">
                    استخدام أجود أنواع الأخشاب الطبيعية
                  </p>
                  <div className="space-y-2 text-sm text-medium-text">
                    <div className="flex items-center gap-2 justify-center">
                      <CheckCircle className="h-4 w-4 text-luxury-gold" />
                      <span>خشب البلوط</span>
                    </div>
                    <div className="flex items-center gap-2 justify-center">
                      <CheckCircle className="h-4 w-4 text-luxury-gold" />
                      <span>خشب الجوز</span>
                    </div>
                    <div className="flex items-center gap-2 justify-center">
                      <CheckCircle className="h-4 w-4 text-luxury-gold" />
                      <span>خشب الماهوجني</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-white text-dark-text border-luxury-gold/30 text-center shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
                <CardHeader className="flex flex-col items-center gap-4 pb-4">
                  <div className="w-20 h-20 bg-gradient-to-br from-luxury-gold to-luxury-gold-light rounded-full flex items-center justify-center">
                    <Scissors className="h-10 w-10 text-luxury-navy" />
                  </div>
                  <CardTitle className="text-2xl font-bold text-luxury-navy">تقنيات التشطيب</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-medium-text mb-4">
                    تقنيات تشطيب متقدمة ومتطورة
                  </p>
                  <div className="space-y-2 text-sm text-medium-text">
                    <div className="flex items-center gap-2 justify-center">
                      <CheckCircle className="h-4 w-4 text-luxury-gold" />
                      <span>طلاء الورنيش</span>
                    </div>
                    <div className="flex items-center gap-2 justify-center">
                      <CheckCircle className="h-4 w-4 text-luxury-gold" />
                      <span>طلاء الزيت</span>
                    </div>
                    <div className="flex items-center gap-2 justify-center">
                      <CheckCircle className="h-4 w-4 text-luxury-gold" />
                      <span>طلاء الشمع</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-white text-dark-text border-luxury-gold/30 text-center shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
                <CardHeader className="flex flex-col items-center gap-4 pb-4">
                  <div className="w-20 h-20 bg-gradient-to-br from-luxury-gold to-luxury-gold-light rounded-full flex items-center justify-center">
                    <Award className="h-10 w-10 text-luxury-navy" />
                  </div>
                  <CardTitle className="text-2xl font-bold text-luxury-navy">المنتجات الفاخرة</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-medium-text mb-4">
                    تصنيع أثاث فاخر ومتميز
                  </p>
                  <div className="space-y-2 text-sm text-medium-text">
                    <div className="flex items-center gap-2 justify-center">
                      <CheckCircle className="h-4 w-4 text-luxury-gold" />
                      <span>خزائن مطبخ</span>
                    </div>
                    <div className="flex items-center gap-2 justify-center">
                      <CheckCircle className="h-4 w-4 text-luxury-gold" />
                      <span>أبواب داخلية</span>
                    </div>
                    <div className="flex items-center gap-2 justify-center">
                      <CheckCircle className="h-4 w-4 text-luxury-gold" />
                      <span>أثاث مخصص</span>
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
              خدمات تقنية المعلومات والتحليل
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
                    تطوير تطبيقات وبرمجيات مخصصة
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
                    تحليل البيانات واستخراج الرؤى
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
                    حماية البيانات وأنظمة الأمان
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
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        <section className="w-full py-16 md:py-24 lg:py-32 bg-luxury-ivory">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-16 text-luxury-navy">
              الخدمات اللوجستية وسلسلة التوريد
            </h2>
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              <Card className="bg-white text-dark-text border-luxury-gold/30 text-center shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
                <CardHeader className="flex flex-col items-center gap-4 pb-4">
                  <div className="w-20 h-20 bg-gradient-to-br from-luxury-gold to-luxury-gold-light rounded-full flex items-center justify-center">
                    <Truck className="h-10 w-10 text-luxury-navy" />
                  </div>
                  <CardTitle className="text-2xl font-bold text-luxury-navy">خدمات النقل</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-medium-text mb-4">
                    خدمات نقل وتوصيل متكاملة
                  </p>
                  <div className="space-y-2 text-sm text-medium-text">
                    <div className="flex items-center gap-2 justify-center">
                      <CheckCircle className="h-4 w-4 text-luxury-gold" />
                      <span>نقل البضائع</span>
                    </div>
                    <div className="flex items-center gap-2 justify-center">
                      <CheckCircle className="h-4 w-4 text-luxury-gold" />
                      <span>توصيل سريع</span>
                    </div>
                    <div className="flex items-center gap-2 justify-center">
                      <CheckCircle className="h-4 w-4 text-luxury-gold" />
                      <span>تتبع الشحنات</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-white text-dark-text border-luxury-gold/30 text-center shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
                <CardHeader className="flex flex-col items-center gap-4 pb-4">
                  <div className="w-20 h-20 bg-gradient-to-br from-luxury-gold to-luxury-gold-light rounded-full flex items-center justify-center">
                    <Globe className="h-10 w-10 text-luxury-navy" />
                  </div>
                  <CardTitle className="text-2xl font-bold text-luxury-navy">إدارة المخزون</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-medium-text mb-4">
                    إدارة المخزون والمستودعات
                  </p>
                  <div className="space-y-2 text-sm text-medium-text">
                    <div className="flex items-center gap-2 justify-center">
                      <CheckCircle className="h-4 w-4 text-luxury-gold" />
                      <span>تتبع المخزون</span>
                    </div>
                    <div className="flex items-center gap-2 justify-center">
                      <CheckCircle className="h-4 w-4 text-luxury-gold" />
                      <span>إدارة المستودعات</span>
                    </div>
                    <div className="flex items-center gap-2 justify-center">
                      <CheckCircle className="h-4 w-4 text-luxury-gold" />
                      <span>تنبؤات الطلب</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-white text-dark-text border-luxury-gold/30 text-center shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
                <CardHeader className="flex flex-col items-center gap-4 pb-4">
                  <div className="w-20 h-20 bg-gradient-to-br from-luxury-gold to-luxury-gold-light rounded-full flex items-center justify-center">
                    <BarChart3 className="h-10 w-10 text-luxury-navy" />
                  </div>
                  <CardTitle className="text-2xl font-bold text-luxury-navy">تحسين العمليات</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-medium-text mb-4">
                    تحسين عمليات سلسلة التوريد
                  </p>
                  <div className="space-y-2 text-sm text-medium-text">
                    <div className="flex items-center gap-2 justify-center">
                      <CheckCircle className="h-4 w-4 text-luxury-gold" />
                      <span>تحليل العمليات</span>
                    </div>
                    <div className="flex items-center gap-2 justify-center">
                      <CheckCircle className="h-4 w-4 text-luxury-gold" />
                      <span>تقليل التكاليف</span>
                    </div>
                    <div className="flex items-center gap-2 justify-center">
                      <CheckCircle className="h-4 w-4 text-luxury-gold" />
                      <span>زيادة الكفاءة</span>
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
              ساعات العمل
            </h2>
            <div className="grid gap-8 md:grid-cols-3 text-center">
              <div className="space-y-4">
                <div className="w-20 h-20 bg-luxury-gold rounded-full flex items-center justify-center mx-auto">
                  <Clock className="h-10 w-10 text-luxury-navy" />
                </div>
                <h3 className="text-xl font-bold text-luxury-gold">الأحد - الخميس</h3>
                <p className="text-luxury-ivory/80">8:00 ص - 6:00 م</p>
              </div>
              <div className="space-y-4">
                <div className="w-20 h-20 bg-luxury-gold rounded-full flex items-center justify-center mx-auto">
                  <Clock className="h-10 w-10 text-luxury-navy" />
                </div>
                <h3 className="text-xl font-bold text-luxury-gold">السبت</h3>
                <p className="text-luxury-ivory/80">9:00 ص - 1:00 م</p>
              </div>
              <div className="space-y-4">
                <div className="w-20 h-20 bg-luxury-gold rounded-full flex items-center justify-center mx-auto">
                  <Clock className="h-10 w-10 text-luxury-navy" />
                </div>
                <h3 className="text-xl font-bold text-luxury-gold">الجمعة</h3>
                <p className="text-luxury-ivory/80">مغلق</p>
              </div>
            </div>
          </div>
        </section>

        <section className="w-full py-16 md:py-24 lg:py-32 bg-luxury-ivory">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-16 text-luxury-navy">
              مميزات خدماتنا
            </h2>
            <div className="grid gap-8 md:grid-cols-1 lg:grid-cols-2">
              <Card className="bg-white text-dark-text border-luxury-gold/30 text-right shadow-xl hover:shadow-2xl transition-all duration-300">
                <CardHeader className="flex flex-row-reverse items-center gap-4 pb-4">
                  <div className="w-16 h-16 bg-gradient-to-br from-luxury-gold to-luxury-gold-light rounded-full flex items-center justify-center">
                    <Shield className="h-8 w-8 text-luxury-navy" />
                  </div>
                  <CardTitle className="text-2xl font-bold text-luxury-navy">ضمان الجودة</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-medium-text mb-4">
                    نضمن لكم أعلى معايير الجودة في جميع مراحل العمل،
                    مع ضمان شامل على جميع الأعمال لمدة 5 سنوات.
                  </p>
                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <CheckCircle className="h-5 w-5 text-luxury-gold" />
                      <span>ضمان 5 سنوات</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="h-5 w-5 text-luxury-gold" />
                      <span>مراقبة مستمرة للجودة</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="h-5 w-5 text-luxury-gold" />
                      <span>خدمة ما بعد البيع</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-white text-dark-text border-luxury-gold/30 text-right shadow-xl hover:shadow-2xl transition-all duration-300">
                <CardHeader className="flex flex-row-reverse items-center gap-4 pb-4">
                  <div className="w-16 h-16 bg-gradient-to-br from-luxury-gold to-luxury-gold-light rounded-full flex items-center justify-center">
                    <Users className="h-8 w-8 text-luxury-navy" />
                  </div>
                  <CardTitle className="text-2xl font-bold text-luxury-navy">فريق متخصص</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-medium-text mb-4">
                    فريق عمل متخصص ومحترف في جميع مجالات العمل،
                    مع خبرة واسعة في المشاريع المختلفة.
                  </p>
                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <CheckCircle className="h-5 w-5 text-luxury-gold" />
                      <span>مهندسين متخصصين</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="h-5 w-5 text-luxury-gold" />
                      <span>عمالة ماهرة</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="h-5 w-5 text-luxury-gold" />
                      <span>إشراف مستمر</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        <section className="w-full py-16 md:py-24 lg:py-32 bg-luxury-navy text-luxury-ivory">
          <div className="container px-4 md:px-6">
            <div className="text-center space-y-8">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-luxury-ivory">
                ابدأ مشروعك معنا
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
