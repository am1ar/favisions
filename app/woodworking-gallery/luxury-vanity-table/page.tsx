import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Calendar, Share2, Heart, Eye, Tag, ArrowRight, Star, Ruler, Palette, Lightbulb, Users, Clock, Award } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function LuxuryVanityTableDetailPage() {
  return (
    <div className="flex flex-col min-h-[100dvh] bg-luxury-ivory text-dark-text">
      <Header />
      <main className="flex-1 pt-20">
        {/* Hero Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-luxury-gradient text-luxury-ivory relative overflow-hidden">
          <div className="absolute inset-0 bg-black/40"></div>
          <div className="container px-4 md:px-6 text-right relative z-10">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <div className="flex items-center gap-2 mb-4">
                  <Link href="/woodworking-gallery" className="text-luxury-ivory/80 hover:text-luxury-gold transition-colors">
                    معرض النجارة
                  </Link>
                  <ArrowRight className="h-4 w-4 text-luxury-ivory/60" />
                  <span className="text-luxury-ivory/60">طاولات تجميل</span>
                </div>
                <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl text-luxury-ivory mb-6 drop-shadow-lg">
                  طاولة تجميل فاخرة مع مرآة مضاءة
                </h1>
                <p className="text-lg md:text-xl text-luxury-ivory/90 leading-relaxed mb-8">
                  طاولة تجميل فاخرة مع مرآة مضاءة وخشب طبيعي عالي الجودة، مصممة بأسلوب عصري مع إضاءة LED متكاملة
                </p>
                <div className="flex flex-wrap gap-4 mb-8">
                  <Badge className="bg-luxury-gold text-luxury-navy px-4 py-2 text-sm">
                    طاولات تجميل
                  </Badge>
                  <Badge variant="secondary" className="px-4 py-2 text-sm">
                    مرآة مضاءة
                  </Badge>
                  <Badge variant="secondary" className="px-4 py-2 text-sm">
                    خشب طبيعي
                  </Badge>
                </div>
                <div className="flex items-center gap-6 text-sm text-luxury-ivory/80">
                  <div className="flex items-center gap-2">
                    <Calendar className="h-4 w-4" />
                    <span>1 ديسمبر 2023</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Eye className="h-4 w-4" />
                    <span>4,123 مشاهدة</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Heart className="h-4 w-4" />
                    <span>345 إعجاب</span>
                  </div>
                </div>
              </div>
              <div className="relative">
                <div className="relative w-full h-80 md:h-96 rounded-2xl overflow-hidden shadow-2xl">
                  <Image
                    src="/woodworking-images/luxury-vanity-table.svg"
                    alt="طاولة تجميل فاخرة مع مرآة مضاءة"
                    fill
                    className="object-cover"
                  />
                  <Image
                    src="/woodworking-images/ng/12.jpg"
                    alt="طاولة تجميل فاخرة مع مرآة مضاءة"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Project Details */}
        <section className="w-full py-16 md:py-24 bg-luxury-ivory">
          <div className="container px-4 md:px-6">
            <div className="grid lg:grid-cols-3 gap-12">
              {/* Main Content */}
              <div className="lg:col-span-2 space-y-12">
                {/* Project Overview */}
                <Card className="bg-white border-luxury-gold/30 shadow-xl">
                  <CardHeader>
                    <CardTitle className="text-2xl font-bold text-luxury-navy flex items-center gap-3">
                      <Star className="h-6 w-6 text-luxury-gold" />
                      نظرة عامة على المشروع
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <p className="text-dark-text/80 leading-relaxed text-lg">
                      هذه الطاولة تمثل مثالاً رائعاً على التصميم العصري والفاخر، حيث تم استخدام مرآة مضاءة مع خشب البلوط الطبيعي لإنشاء طاولة تجميل أنيقة تعمل بكفاءة عالية. التصميم يجمع بين الأناقة المعاصرة والراحة العملية.
                    </p>
                    <p className="text-dark-text/80 leading-relaxed text-lg">
                      المرآة المضاءة توفر إضاءة مثالية للتجميل مع الحفاظ على الأناقة، مع تصميم عصري ومينيمال يناسب جميع أنواع المنازل. تم استخدام مواد عالية الجودة لضمان المتانة والاستدامة.
                    </p>
                  </CardContent>
                </Card>

                {/* Technical Specifications */}
                <Card className="bg-white border-luxury-gold/30 shadow-xl">
                  <CardHeader>
                    <CardTitle className="text-2xl font-bold text-luxury-navy flex items-center gap-3">
                      <Ruler className="h-6 w-6 text-luxury-gold" />
                      المواصفات التقنية
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="space-y-4">
                        <div className="flex items-center justify-between p-4 bg-luxury-ivory rounded-lg">
                          <span className="font-medium text-dark-text">نوع الخشب</span>
                          <span className="text-dark-text/70">خشب البلوط</span>
                        </div>
                        <div className="flex items-center justify-between p-4 bg-luxury-ivory rounded-lg">
                          <span className="font-medium text-dark-text">نوع التصميم</span>
                          <span className="text-dark-text/70">مرآة مضاءة</span>
                        </div>
                        <div className="flex items-center justify-between p-4 bg-luxury-ivory rounded-lg">
                          <span className="font-medium text-dark-text">الأبعاد</span>
                          <span className="text-dark-text/70">1.8 × 0.6 × 0.8 متر</span>
                        </div>
                      </div>
                      <div className="space-y-4">
                        <div className="flex items-center justify-between p-4 bg-luxury-ivory rounded-lg">
                          <span className="font-medium text-dark-text">مدة التنفيذ</span>
                          <span className="text-dark-text/70">4-6 أسابيع</span>
                        </div>
                        <div className="flex items-center justify-between p-4 bg-luxury-ivory rounded-lg">
                          <span className="font-medium text-dark-text">الضمان</span>
                          <span className="text-dark-text/70">8 سنوات</span>
                        </div>
                        <div className="flex items-center justify-between p-4 bg-luxury-ivory rounded-lg">
                          <span className="font-medium text-dark-text">الميزانية</span>
                          <span className="text-dark-text/70">متوسطة</span>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Design Features */}
                <Card className="bg-white border-luxury-gold/30 shadow-xl">
                  <CardHeader>
                    <CardTitle className="text-2xl font-bold text-luxury-navy flex items-center gap-3">
                      <Palette className="h-6 w-6 text-luxury-gold" />
                      ميزات التصميم
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="space-y-4">
                        <div className="flex items-start gap-3">
                          <div className="w-2 h-2 bg-luxury-gold rounded-full mt-2"></div>
                          <span className="text-dark-text/80">خشب بلوط طبيعي عالي الجودة</span>
                        </div>
                        <div className="flex items-start gap-3">
                          <div className="w-2 h-2 bg-luxury-gold rounded-full mt-2"></div>
                          <span className="text-dark-text/80">مرآة مضاءة LED</span>
                        </div>
                        <div className="flex items-start gap-3">
                          <div className="w-2 h-2 bg-luxury-gold rounded-full mt-2"></div>
                          <span className="text-dark-text/80">إضاءة LED متكاملة</span>
                        </div>
                      </div>
                      <div className="space-y-4">
                        <div className="flex items-start gap-3">
                          <div className="w-2 h-2 bg-luxury-gold rounded-full mt-2"></div>
                          <span className="text-dark-text/80">تصميم عصري ومعاصر</span>
                        </div>
                        <div className="flex items-start gap-3">
                          <div className="w-2 h-2 bg-luxury-gold rounded-full mt-2"></div>
                          <span className="text-dark-text/80">سهولة في التنظيف والصيانة</span>
                        </div>
                        <div className="flex items-start gap-3">
                          <div className="w-2 h-2 bg-luxury-gold rounded-full mt-2"></div>
                          <span className="text-dark-text/80">مساحة تخزين مثالية</span>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>


              </div>

              {/* Sidebar */}
              <div className="space-y-6">
                {/* Project Stats */}
                <Card className="bg-white border-luxury-gold/30 shadow-xl">
                  <CardHeader>
                    <CardTitle className="text-xl font-bold text-luxury-navy">
                      إحصائيات المشروع
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex items-center justify-between">
                      <span className="text-dark-text/70">المشاهدات</span>
                      <span className="font-bold text-luxury-navy">4,123</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-dark-text/70">الإعجابات</span>
                      <span className="font-bold text-luxury-navy">345</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-dark-text/70">التقييم</span>
                      <div className="flex items-center gap-1">
                        <Star className="h-4 w-4 text-luxury-gold fill-current" />
                        <Star className="h-4 w-4 text-luxury-gold fill-current" />
                        <Star className="h-4 w-4 text-luxury-gold fill-current" />
                        <Star className="h-4 w-4 text-luxury-gold fill-current" />
                        <Star className="h-4 w-4 text-luxury-gold fill-current" />
                        <span className="text-sm text-dark-text/70 mr-2">5.0</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Contact CTA */}
                <Card className="bg-luxury-navy text-luxury-ivory border-luxury-gold/30 shadow-xl">
                  <CardHeader>
                    <CardTitle className="text-xl font-bold text-luxury-ivory">
                      هل تريد طاولة تجميل مماثلة؟
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="text-luxury-ivory/80 text-sm">
                      تواصل معنا اليوم للحصول على استشارة مجانية وتصميم طاولة تجميلك الفاخرة
                    </p>
                    <Button
                      asChild
                      className="w-full bg-luxury-gold text-black hover:bg-luxury-gold-light"
                    >
                      <Link href="/contact">تواصل معنا</Link>
                    </Button>
                    <Button
                      asChild
                      variant="outline"
                      className="w-full border-luxury-ivory text-black hover:bg-luxury-ivory hover:text-luxury-navy"
                    >
                      <Link href="/woodworking-services">خدمات النجارة</Link>
                    </Button>
                  </CardContent>
                </Card>

                {/* Related Projects */}
                <Card className="bg-white border-luxury-gold/30 shadow-xl">
                  <CardHeader>
                    <CardTitle className="text-xl font-bold text-luxury-navy">
                      مشاريع مشابهة
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <Link href="/woodworking-gallery/central-mirror-wardrobe" className="block p-4 bg-luxury-ivory rounded-lg hover:bg-luxury-gold/10 transition-colors">
                      <h4 className="font-semibold text-dark-text mb-2">خزانة ملابس فاخرة مع مرآة مركزية</h4>
                      <p className="text-sm text-dark-text/70">خزانة ملابس فاخرة مع مرآة مركزية</p>
                    </Link>
                    <Link href="/woodworking-gallery/classic-wooden-bedroom" className="block p-4 bg-luxury-ivory rounded-lg hover:bg-luxury-gold/10 transition-colors">
                      <h4 className="font-semibold text-dark-text mb-2">غرفة نوم فاخرة مع أثاث خشبي كلاسيكي</h4>
                      <p className="text-sm text-dark-text/70">غرفة نوم فاخرة مع أثاث خشبي كلاسيكي</p>
                    </Link>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="w-full py-16 md:py-24 bg-luxury-navy text-luxury-ivory">
          <div className="container px-4 md:px-6 text-center">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-6">
              هل أعجبتك طاولة التجميل الفاخرة هذه؟
            </h2>
            <p className="text-lg text-luxury-ivory/80 max-w-2xl mx-auto mb-8">
              تواصل معنا اليوم للحصول على استشارة مجانية وتصميم طاولة تجميلك الفاخرة بأعلى معايير الجودة
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                asChild
                size="lg"
                className="bg-luxury-gold text-black hover:bg-luxury-gold-light px-8 py-4 text-lg font-semibold rounded-lg shadow-xl transition-all duration-300 transform hover:scale-105"
              >
                <Link href="/contact">تواصل معنا</Link>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="border-2 border-luxury-ivory text-black hover:bg-luxury-ivory hover:text-luxury-navy px-8 py-4 text-lg font-semibold rounded-lg transition-all duration-300"
              >
                <Link href="/woodworking-gallery">عرض جميع المشاريع</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
