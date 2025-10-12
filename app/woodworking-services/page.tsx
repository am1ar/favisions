import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { TreePine, Scissors, Brush, CheckCircle, Award, Users, Shield, Clock, Hammer, Ruler, Palette, Package } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import Image from "next/image"

export default function WoodworkingServicesPage() {
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
                  خدمات النجارة الفاخرة
                </h1>
                <p className="max-w-[900px] text-base md:text-lg lg:text-xl text-luxury-ivory mb-8 leading-relaxed md:leading-loose text-justify">
                  حِرَفية متكاملة في النجارة وصناعة الخشب تبدأ من اختيار النوع المناسب للأخشاب وفق المتانة والجمال والتكلفة، مرورًا بتقنيات القص والتشكيل والربط والتشطيب لإنتاج قطع عالية الجودة، وصولًا إلى التخطيط الدقيق للمشاريع وإدارتها من الفكرة حتى التنفيذ.
                </p>
                <p className="max-w-[900px] text-base md:text-lg lg:text-xl text-luxury-ivory mb-8 leading-relaxed md:leading-loose text-justify">
                  نعتمد ممارسات أمان احترافية، وننفذ أعمالًا تجمع بين البساطة والفخامة، من التصاميم الصغيرة حتى المشاريع المعقدة، مع إتقان التفاصيل ليبقى المنتج جميلًا ومتينًا لسنوات.
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
                        <TreePine className="h-12 w-12 text-luxury-navy" />
                      </div>
                      <h3 className="text-2xl font-bold text-luxury-ivory">نجارة فاخرة</h3>
                      <p className="text-luxury-ivory/90">أجود الأخشاب الطبيعية</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* معرض النجارة - Image Slider */}
        <section className="w-full py-16 md:py-24 lg:py-32 bg-luxury-navy text-luxury-ivory">
          <div className="container px-4 md:px-6">
            <div className="text-center space-y-8 mb-12">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-luxury-ivory">
                معرض أعمالنا النجارية
              </h2>
              <p className="max-w-2xl mx-auto text-lg text-luxury-ivory/80">
                استكشف مجموعة من أجمل أعمال النجارة الفاخرة وأجود أنواع الأخشاب التي نستخدمها في مشاريعنا
              </p>
            </div>
            
            {/* Image Slider */}
            <div className="relative overflow-hidden">
              <div className="flex gap-4 animate-scroll">
                {/* First set of images */}
                <div className="flex gap-4 min-w-max">
                  <div className="w-80 h-64 rounded-lg overflow-hidden shadow-xl">
                    <Image src="/woodworking-images/ng/1.jpg" alt="معرض داخلي فاخر" width={320} height={256} className="w-full h-full object-cover" />
                  </div>
                  <div className="w-80 h-64 rounded-lg overflow-hidden shadow-xl">
                    <Image src="/woodworking-images/ng/2.jpg" alt="خزانة ملابس فاخرة" width={320} height={256} className="w-full h-full object-cover" />
                  </div>
                  <div className="w-80 h-64 rounded-lg overflow-hidden shadow-xl">
                    <Image src="/woodworking-images/ng/3.jpg" alt="خزانة ملابس فاخرة" width={320} height={256} className="w-full h-full object-cover" />
                  </div>
                  <div className="w-80 h-64 rounded-lg overflow-hidden shadow-xl">
                    <Image src="/woodworking-images/ng/4.jpg" alt="خزانة ملابس حديثة" width={320} height={256} className="w-full h-full object-cover" />
                  </div>
                  <div className="w-80 h-64 rounded-lg overflow-hidden shadow-xl">
                    <Image src="/woodworking-images/ng/5.jpg" alt="خزانة ملابس كلاسيكية" width={320} height={256} className="w-full h-full object-cover" />
                  </div>
                  <div className="w-80 h-64 rounded-lg overflow-hidden shadow-xl">
                    <Image src="/woodworking-images/ng/6.jpg" alt="خزانة ملابس فاخرة" width={320} height={256} className="w-full h-full object-cover" />
                  </div>
                  <div className="w-80 h-64 rounded-lg overflow-hidden shadow-xl">
                    <Image src="/woodworking-images/ng/7.jpg" alt="معرض داخلي" width={320} height={256} className="w-full h-full object-cover" />
                  </div>
                  <div className="w-80 h-64 rounded-lg overflow-hidden shadow-xl">
                    <Image src="/woodworking-images/ng/8.jpg" alt="غرفة معيشة" width={320} height={256} className="w-full h-full object-cover" />
                  </div>
                  <div className="w-80 h-64 rounded-lg overflow-hidden shadow-xl">
                    <Image src="/woodworking-images/ng/9.jpg" alt="مطبخ فاخر" width={320} height={256} className="w-full h-full object-cover" />
                  </div>
                  <div className="w-80 h-64 rounded-lg overflow-hidden shadow-xl">
                    <Image src="/woodworking-images/ng/10.jpg" alt="خزانة ملابس فاخرة" width={320} height={256} className="w-full h-full object-cover" />
                  </div>
                  <div className="w-80 h-64 rounded-lg overflow-hidden shadow-xl">
                    <Image src="/woodworking-images/ng/11.jpg" alt="خزانة ملابس فاخرة" width={320} height={256} className="w-full h-full object-cover" />
                  </div>
                  <div className="w-80 h-64 rounded-lg overflow-hidden shadow-xl">
                    <Image src="/woodworking-images/ng/13.jpg" alt="طاولة تجميل فاخرة" width={320} height={256} className="w-full h-full object-cover" />
                  </div>
                  <div className="w-80 h-64 rounded-lg overflow-hidden shadow-xl">
                    <Image src="/woodworking-images/ng/14.jpg" alt="غرفة مرافق" width={320} height={256} className="w-full h-full object-cover" />
                  </div>
                  <div className="w-80 h-64 rounded-lg overflow-hidden shadow-xl">
                    <Image src="/woodworking-images/ng/15.jpg" alt="حمام فاخر" width={320} height={256} className="w-full h-full object-cover" />
                  </div>
                  <div className="w-80 h-64 rounded-lg overflow-hidden shadow-xl">
                    <Image src="/woodworking-images/ng/16.jpg" alt="خزانة ملابس فاخرة" width={320} height={256} className="w-full h-full object-cover" />
                  </div>
                  <div className="w-80 h-64 rounded-lg overflow-hidden shadow-xl">
                    <Image src="/woodworking-images/ng/17.jpg" alt="غرفة نوم فاخرة" width={320} height={256} className="w-full h-full object-cover" />
                  </div>
                  <div className="w-80 h-64 rounded-lg overflow-hidden shadow-xl">
                    <Image src="/woodworking-images/ng/18.jpg" alt="خزانة ملابس فاخرة" width={320} height={256} className="w-full h-full object-cover" />
                  </div>
                </div>
                {/* Duplicate set for seamless loop */}
                <div className="flex gap-4 min-w-max">
                  <div className="w-80 h-64 rounded-lg overflow-hidden shadow-xl">
                    <Image src="/woodworking-images/ng/1.jpg" alt="معرض داخلي فاخر" width={320} height={256} className="w-full h-full object-cover" />
                  </div>
                  <div className="w-80 h-64 rounded-lg overflow-hidden shadow-xl">
                    <Image src="/woodworking-images/ng/2.jpg" alt="خزانة ملابس فاخرة" width={320} height={256} className="w-full h-full object-cover" />
                  </div>
                  <div className="w-80 h-64 rounded-lg overflow-hidden shadow-xl">
                    <Image src="/woodworking-images/ng/3.jpg" alt="خزانة ملابس فاخرة" width={320} height={256} className="w-full h-full object-cover" />
                  </div>
                  <div className="w-80 h-64 rounded-lg overflow-hidden shadow-xl">
                    <Image src="/woodworking-images/ng/4.jpg" alt="خزانة ملابس حديثة" width={320} height={256} className="w-full h-full object-cover" />
                  </div>
                  <div className="w-80 h-64 rounded-lg overflow-hidden shadow-xl">
                    <Image src="/woodworking-images/ng/5.jpg" alt="خزانة ملابس كلاسيكية" width={320} height={256} className="w-full h-full object-cover" />
                  </div>
                  <div className="w-80 h-64 rounded-lg overflow-hidden shadow-xl">
                    <Image src="/woodworking-images/ng/6.jpg" alt="خزانة ملابس فاخرة" width={320} height={256} className="w-full h-full object-cover" />
                  </div>
                  <div className="w-80 h-64 rounded-lg overflow-hidden shadow-xl">
                    <Image src="/woodworking-images/ng/7.jpg" alt="معرض داخلي" width={320} height={256} className="w-full h-full object-cover" />
                  </div>
                  <div className="w-80 h-64 rounded-lg overflow-hidden shadow-xl">
                    <Image src="/woodworking-images/ng/8.jpg" alt="غرفة معيشة" width={320} height={256} className="w-full h-full object-cover" />
                  </div>
                  <div className="w-80 h-64 rounded-lg overflow-hidden shadow-xl">
                    <Image src="/woodworking-images/ng/9.jpg" alt="مطبخ فاخر" width={320} height={256} className="w-full h-full object-cover" />
                  </div>
                  <div className="w-80 h-64 rounded-lg overflow-hidden shadow-xl">
                    <Image src="/woodworking-images/ng/10.jpg" alt="خزانة ملابس فاخرة" width={320} height={256} className="w-full h-full object-cover" />
                  </div>
                  <div className="w-80 h-64 rounded-lg overflow-hidden shadow-xl">
                    <Image src="/woodworking-images/ng/11.jpg" alt="خزانة ملابس فاخرة" width={320} height={256} className="w-full h-full object-cover" />
                  </div>
                  <div className="w-80 h-64 rounded-lg overflow-hidden shadow-xl">
                    <Image src="/woodworking-images/ng/13.jpg" alt="طاولة تجميل فاخرة" width={320} height={256} className="w-full h-full object-cover" />
                  </div>
                  <div className="w-80 h-64 rounded-lg overflow-hidden shadow-xl">
                    <Image src="/woodworking-images/ng/14.jpg" alt="غرفة مرافق" width={320} height={256} className="w-full h-full object-cover" />
                  </div>
                  <div className="w-80 h-64 rounded-lg overflow-hidden shadow-xl">
                    <Image src="/woodworking-images/ng/15.jpg" alt="حمام فاخر" width={320} height={256} className="w-full h-full object-cover" />
                  </div>
                  <div className="w-80 h-64 rounded-lg overflow-hidden shadow-xl">
                    <Image src="/woodworking-images/ng/16.jpg" alt="خزانة ملابس فاخرة" width={320} height={256} className="w-full h-full object-cover" />
                  </div>
                  <div className="w-80 h-64 rounded-lg overflow-hidden shadow-xl">
                    <Image src="/woodworking-images/ng/17.jpg" alt="غرفة نوم فاخرة" width={320} height={256} className="w-full h-full object-cover" />
                  </div>
                  <div className="w-80 h-64 rounded-lg overflow-hidden shadow-xl">
                    <Image src="/woodworking-images/ng/18.jpg" alt="خزانة ملابس فاخرة" width={320} height={256} className="w-full h-full object-cover" />
                  </div>
                </div>
              </div>
            </div>
            
            <div className="text-center mt-8">
              <Button
                asChild
                size="lg"
                className="bg-luxury-gold text-black hover:bg-luxury-gold-light px-8 py-4 text-lg font-semibold rounded-lg shadow-xl transition-all duration-300 transform hover:scale-105 flex items-center gap-3 mx-auto"
              >
                <Link href="/woodworking-gallery">
                  <Image className="h-6 w-6" src="/woodworking-images/wood-icon.png" alt="معرض النجارة" width={24} height={24} />
                  عرض جميع الأعمال
                </Link>
              </Button>
            </div>
          </div>
        </section>

        {/* الأخشاب الصناعية والمركبة */}
        <section className="w-full py-16 md:py-24 lg:py-32 bg-luxury-ivory">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-16 text-luxury-navy">
              الأخشاب الصناعية والمركبة
            </h2>
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
              {/* MDF */}
              <Card className="bg-white text-dark-text border-luxury-gold/30 text-center shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
                <CardHeader className="flex flex-col items-center gap-4 pb-4">
                  <div className="w-full h-48 bg-gradient-to-br from-amber-100 to-amber-200 rounded-lg flex items-center justify-center overflow-hidden relative">
                    <Image
                      src="/woodworking-images/wood-icon.png"
                      alt="MDF - Medium Density Fiberboard"
                      fill
                      className="object-cover opacity-80"
                    />
                    <div className="absolute inset-0 bg-gradient-to-br from-amber-100/80 to-amber-200/80"></div>
                    <div className="relative z-10 text-center space-y-3">
                      <div className="w-20 h-20 bg-gradient-to-br from-amber-300 to-amber-400 rounded-full flex items-center justify-center mx-auto backdrop-blur-sm">
                        <TreePine className="h-10 w-10 text-amber-800" />
                      </div>
                      <h3 className="text-lg font-bold text-amber-800">MDF</h3>
                      <p className="text-sm text-amber-700">Medium Density Fiberboard</p>
                    </div>
                  </div>
                  <CardTitle className="text-xl font-bold text-luxury-navy">MDF</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-medium-text mb-4">
                    خشب متوسط الكثافة، مثالي للتشطيبات والأثاث
                  </p>
                  <div className="space-y-2 text-sm text-medium-text">
                    <div className="flex items-center gap-2 justify-center">
                      <CheckCircle className="h-4 w-4 text-luxury-gold" />
                      <span>سطح أملس</span>
                    </div>
                    <div className="flex items-center gap-2 justify-center">
                      <CheckCircle className="h-4 w-4 text-luxury-gold" />
                      <span>سهولة التشكيل</span>
                    </div>
                    <div className="flex items-center gap-2 justify-center">
                      <CheckCircle className="h-4 w-4 text-luxury-gold" />
                      <span>سعر معقول</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* الكونتر (Plywood) */}
              <Card className="bg-white text-dark-text border-luxury-gold/30 text-center shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
                <CardHeader className="flex flex-col items-center gap-4 pb-4">
                  <div className="w-full h-48 bg-gradient-to-br from-orange-100 to-orange-200 rounded-lg flex items-center justify-center overflow-hidden relative">
                    <Image
                      src="/woodworking-images/plywood-panel-icon.png"
                      alt="الكونتر - Plywood"
                      fill
                      className="object-cover opacity-80"
                    />
                    <div className="absolute inset-0 bg-gradient-to-br from-orange-100/80 to-orange-200/80"></div>
                    <div className="relative z-10 text-center space-y-3">
                      <div className="w-20 h-20 bg-gradient-to-br from-orange-300 to-orange-400 rounded-full flex items-center justify-center mx-auto backdrop-blur-sm">
                        <TreePine className="h-10 w-10 text-orange-800" />
                      </div>
                      <h3 className="text-lg font-bold text-orange-800">الكونتر</h3>
                      <p className="text-sm text-orange-700">Plywood</p>
                    </div>
                  </div>
                  <CardTitle className="text-xl font-bold text-luxury-navy">الكونتر (Plywood)</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-medium-text mb-4">
                    ألواح خشبية متعددة الطبقات، قوية ومتينة
                  </p>
                  <div className="space-y-2 text-sm text-medium-text">
                    <div className="flex items-center gap-2 justify-center">
                      <CheckCircle className="h-4 w-4 text-luxury-gold" />
                      <span>متانة عالية</span>
                    </div>
                    <div className="flex items-center gap-2 justify-center">
                      <CheckCircle className="h-4 w-4 text-luxury-gold" />
                      <span>مقاومة للانحناء</span>
                    </div>
                    <div className="flex items-center gap-2 justify-center">
                      <CheckCircle className="h-4 w-4 text-luxury-gold" />
                      <span>مناسب للبناء</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* HDF */}
              <Card className="bg-white text-dark-text border-luxury-gold/30 text-center shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
                <CardHeader className="flex flex-col items-center gap-4 pb-4">
                  <div className="w-full h-48 bg-gradient-to-br from-red-100 to-red-200 rounded-lg flex items-center justify-center overflow-hidden relative">
                    <Image
                      src="/woodworking-images/flooring-icon.png"
                      alt="HDF - High Density Fiberboard"
                      fill
                      className="object-cover opacity-80"
                    />
                    <div className="absolute inset-0 bg-gradient-to-br from-red-100/80 to-red-200/80"></div>
                    <div className="relative z-10 text-center space-y-3">
                      <div className="w-20 h-20 bg-gradient-to-br from-red-300 to-red-400 rounded-full flex items-center justify-center mx-auto backdrop-blur-sm">
                        <TreePine className="h-10 w-10 text-red-800" />
                      </div>
                      <h3 className="text-lg font-bold text-red-800">HDF</h3>
                      <p className="text-sm text-red-700">High Density Fiberboard</p>
                    </div>
                  </div>
                  <CardTitle className="text-xl font-bold text-luxury-navy">HDF</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-medium-text mb-4">
                    خشب عالي الكثافة، صلب ومقاوم للضغط
                  </p>
                  <div className="space-y-2 text-sm text-medium-text">
                    <div className="flex items-center gap-2 justify-center">
                      <CheckCircle className="h-4 w-4 text-luxury-gold" />
                      <span>كثافة عالية</span>
                    </div>
                    <div className="flex items-center gap-2 justify-center">
                      <CheckCircle className="h-4 w-4 text-luxury-gold" />
                      <span>مقاوم للضغط</span>
                    </div>
                    <div className="flex items-center gap-2 justify-center">
                      <CheckCircle className="h-4 w-4 text-luxury-gold" />
                      <span>مناسب للأرضيات</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* WPC */}
              <Card className="bg-white text-dark-text border-luxury-gold/30 text-center shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
                <CardHeader className="flex flex-col items-center gap-4 pb-4">
                  <div className="w-full h-48 bg-gradient-to-br from-green-100 to-green-200 rounded-lg flex items-center justify-center overflow-hidden relative">
                    <Image
                      src="/woodworking-images/wood-icon.png"
                      alt="WPC - Wood Plastic Composite"
                      fill
                      className="object-cover opacity-80"
                    />
                    <div className="absolute inset-0 bg-gradient-to-br from-green-100/80 to-green-200/80"></div>
                    <div className="relative z-10 text-center space-y-3">
                      <div className="w-20 h-20 bg-gradient-to-br from-green-300 to-green-400 rounded-full flex items-center justify-center mx-auto backdrop-blur-sm">
                        <TreePine className="h-10 w-10 text-green-800" />
                      </div>
                      <h3 className="text-lg font-bold text-green-800">WPC</h3>
                      <p className="text-sm text-green-700">Wood Plastic Composite</p>
                    </div>
                  </div>
                  <CardTitle className="text-xl font-bold text-luxury-navy">WPC</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-medium-text mb-4">
                    مركب خشبي بلاستيكي، مقاوم للماء والعوامل الجوية
                  </p>
                  <div className="space-y-2 text-sm text-medium-text">
                    <div className="flex items-center gap-2 justify-center">
                      <CheckCircle className="h-4 w-4 text-luxury-gold" />
                      <span>مقاوم للماء</span>
                    </div>
                    <div className="flex items-center gap-2 justify-center">
                      <CheckCircle className="h-4 w-4 text-luxury-gold" />
                      <span>مقاوم للعوامل الجوية</span>
                    </div>
                    <div className="flex items-center gap-2 justify-center">
                      <CheckCircle className="h-4 w-4 text-luxury-gold" />
                      <span>مناسب للخارج</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        <section className="w-full py-16 md:py-24 lg:py-32 bg-white">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-16 text-luxury-navy">
              خدماتنا النجارية
            </h2>
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              <Card className="bg-white text-dark-text border-luxury-gold/30 text-center shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
                <CardHeader className="flex flex-col items-center gap-4 pb-4">
                  <div className="w-20 h-20 bg-gradient-to-br from-luxury-gold to-luxury-gold-light rounded-full flex items-center justify-center">
                    <TreePine className="h-10 w-10 text-luxury-navy" />
                  </div>
                  <CardTitle className="text-2xl font-bold text-luxury-navy">الأخشاب الطبيعية</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-medium-text mb-4">
                    استخدام أجود أنواع الأخشاب الطبيعية الفاخرة
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
                    <div className="flex items-center gap-2 justify-center">
                      <CheckCircle className="h-4 w-4 text-luxury-gold" />
                      <span>خشب الزان</span>
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
                    <div className="flex items-center gap-2 justify-center">
                      <CheckCircle className="h-4 w-4 text-luxury-gold" />
                      <span>تلميع عالي</span>
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
                    <div className="flex items-center gap-2 justify-center">
                      <CheckCircle className="h-4 w-4 text-luxury-gold" />
                      <span>ديكورات خشبية</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-white text-dark-text border-luxury-gold/30 text-center shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
                <CardHeader className="flex flex-col items-center gap-4 pb-4">
                  <div className="w-20 h-20 bg-gradient-to-br from-luxury-gold to-luxury-gold-light rounded-full flex items-center justify-center">
                    <Hammer className="h-10 w-10 text-luxury-navy" />
                  </div>
                  <CardTitle className="text-2xl font-bold text-luxury-navy">أعمال التركيب</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-medium-text mb-4">
                    تركيب وتجميع الأثاث الخشبي
                  </p>
                  <div className="space-y-2 text-sm text-medium-text">
                    <div className="flex items-center gap-2 justify-center">
                      <CheckCircle className="h-4 w-4 text-luxury-gold" />
                      <span>تركيب الخزائن</span>
                    </div>
                    <div className="flex items-center gap-2 justify-center">
                      <CheckCircle className="h-4 w-4 text-luxury-gold" />
                      <span>تركيب الأبواب</span>
                    </div>
                    <div className="flex items-center gap-2 justify-center">
                      <CheckCircle className="h-4 w-4 text-luxury-gold" />
                      <span>تجميع الأثاث</span>
                    </div>
                    <div className="flex items-center gap-2 justify-center">
                      <CheckCircle className="h-4 w-4 text-luxury-gold" />
                      <span>ضبط الفتحات</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-white text-dark-text border-luxury-gold/30 text-center shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
                <CardHeader className="flex flex-col items-center gap-4 pb-4">
                  <div className="w-20 h-20 bg-gradient-to-br from-luxury-gold to-luxury-gold-light rounded-full flex items-center justify-center">
                    <Ruler className="h-10 w-10 text-luxury-navy" />
                  </div>
                  <CardTitle className="text-2xl font-bold text-luxury-navy">قياسات دقيقة</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-medium-text mb-4">
                    قياسات دقيقة وتصميم مخصص
                  </p>
                  <div className="space-y-2 text-sm text-medium-text">
                    <div className="flex items-center gap-2 justify-center">
                      <CheckCircle className="h-4 w-4 text-luxury-gold" />
                      <span>قياسات الموقع</span>
                    </div>
                    <div className="flex items-center gap-2 justify-center">
                      <CheckCircle className="h-4 w-4 text-luxury-gold" />
                      <span>تصميم مخصص</span>
                    </div>
                    <div className="flex items-center gap-2 justify-center">
                      <CheckCircle className="h-4 w-4 text-luxury-gold" />
                      <span>رسومات تنفيذية</span>
                    </div>
                    <div className="flex items-center gap-2 justify-center">
                      <CheckCircle className="h-4 w-4 text-luxury-gold" />
                      <span>نماذج أولية</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-white text-dark-text border-luxury-gold/30 text-center shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
                <CardHeader className="flex flex-col items-center gap-4 pb-4">
                  <div className="w-20 h-20 bg-gradient-to-br from-luxury-gold to-luxury-gold-light rounded-full flex items-center justify-center">
                    <Package className="h-10 w-10 text-luxury-navy" />
                  </div>
                  <CardTitle className="text-2xl font-bold text-luxury-navy">خدمة التوصيل</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-medium-text mb-4">
                    توصيل وتركيب الأثاث في موقعكم
                  </p>
                  <div className="space-y-2 text-sm text-medium-text">
                    <div className="flex items-center gap-2 justify-center">
                      <CheckCircle className="h-4 w-4 text-luxury-gold" />
                      <span>توصيل آمن</span>
                    </div>
                    <div className="flex items-center gap-2 justify-center">
                      <CheckCircle className="h-4 w-4 text-luxury-gold" />
                      <span>تركيب احترافي</span>
                    </div>
                    <div className="flex items-center gap-2 justify-center">
                      <CheckCircle className="h-4 w-4 text-luxury-gold" />
                      <span>ضمان التركيب</span>
                    </div>
                    <div className="flex items-center gap-2 justify-center">
                      <CheckCircle className="h-4 w-4 text-luxury-gold" />
                      <span>خدمة ما بعد البيع</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* مراحل العمل */}
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
                <h3 className="text-xl font-bold text-luxury-navy">التصميم</h3>
                <p className="text-medium-text">
                  تصميم مخصص يناسب احتياجاتكم
                </p>
              </div>
              <div className="text-center space-y-4">
                <div className="w-16 h-16 bg-luxury-gold rounded-full flex items-center justify-center mx-auto">
                  <span className="text-2xl font-bold text-luxury-navy">2</span>
                </div>
                <h3 className="text-xl font-bold text-luxury-navy">اختيار الخشب</h3>
                <p className="text-medium-text">
                  اختيار نوع الخشب المناسب
                </p>
              </div>
              <div className="text-center space-y-4">
                <div className="w-16 h-16 bg-luxury-gold rounded-full flex items-center justify-center mx-auto">
                  <span className="text-2xl font-bold text-luxury-navy">3</span>
                </div>
                <h3 className="text-xl font-bold text-luxury-navy">التصنيع</h3>
                <p className="text-medium-text">
                  تصنيع دقيق بأحدث التقنيات
                </p>
              </div>
              <div className="text-center space-y-4">
                <div className="w-16 h-16 bg-luxury-gold rounded-full flex items-center justify-center mx-auto">
                  <span className="text-2xl font-bold text-luxury-navy">4</span>
                </div>
                <h3 className="text-xl font-bold text-luxury-navy">التشطيب</h3>
                <p className="text-medium-text">
                  تشطيب احترافي وتركيب
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="w-full py-16 md:py-24 lg:py-32 bg-luxury-navy text-luxury-ivory">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-16 text-luxury-ivory">
              مميزات خدماتنا النجارية
            </h2>
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
              <div className="text-center space-y-4">
                <div className="w-20 h-20 bg-luxury-gold rounded-full flex items-center justify-center mx-auto">
                  <Award className="h-10 w-10 text-luxury-navy" />
                </div>
                <h3 className="text-xl font-bold text-luxury-gold">جودة عالية</h3>
                <p className="text-luxury-ivory/80">
                  نستخدم أجود أنواع الأخشاب الطبيعية
                </p>
              </div>
              <div className="text-center space-y-4">
                <div className="w-20 h-20 bg-luxury-gold rounded-full flex items-center justify-center mx-auto">
                  <Users className="h-10 w-10 text-luxury-navy" />
                </div>
                <h3 className="text-xl font-bold text-luxury-gold">فريق متخصص</h3>
                <p className="text-luxury-ivory/80">
                  نجارون محترفون ذوو خبرة واسعة
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

        <section className="w-full py-16 md:py-24 lg:py-32 bg-luxury-navy text-luxury-ivory">
          <div className="container px-4 md:px-6">
            <div className="text-center space-y-8">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-luxury-ivory">
                ابدأ مشروعك النجاري معنا
              </h2>
              <p className="max-w-2xl mx-auto text-lg text-luxury-ivory/80">
                تواصل معنا اليوم للحصول على استشارة مجانية وتصميم مخصص لمشروعك
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  asChild
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
