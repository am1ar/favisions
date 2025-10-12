import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Building2, Users, Award, Target, Eye, CheckCircle } from "lucide-react"

export default function AboutPage() {
  return (
    <div className="flex flex-col min-h-[100dvh] bg-luxury-ivory text-dark-text">
      <Header />
      <main className="flex-1 pt-20">
        <section className="w-full py-12 md:py-24 lg:py-32 bg-luxury-gradient text-luxury-ivory relative overflow-hidden">
          <div className="absolute inset-0 bg-black/30"></div>
          <div className="container px-4 md:px-6 text-right relative z-10">
            <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl text-luxury-ivory mb-6 drop-shadow-lg">
              من نحن
            </h1>
            <p className="max-w-[800px] text-lg md:text-xl/relaxed lg:text-2xl/relaxed text-luxury-ivory">
              شركة رؤى بعيدة - شريككم الموثوق في رحلة البناء والتطوير
            </p>
          </div>
        </section>

        <section className="w-full py-16 md:py-24 lg:py-32 bg-luxury-ivory">
          <div className="container px-4 md:px-6">
            <div className="grid gap-12 lg:grid-cols-2 items-center">
              <div className="space-y-6">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-luxury-navy">
                  قصتنا
                </h2>
                <p className="text-lg text-medium-text leading-relaxed">
                  تأسست شركة رؤى بعيدة برؤية واضحة لتقديم خدمات متكاملة في مجال الإنشاءات والتشطيبات والنجارة الفاخرة،
                  بالإضافة إلى خدمات تقنية المعلومات والتحليل اللوجستي وتطوير أنظمة سلسلة التوريد.
                </p>
                <p className="text-lg text-medium-text leading-relaxed">
                  نؤمن بأن التميز لا يأتي من فراغ، بل من العمل الجاد والالتزام بأعلى معايير الجودة والابتكار المستمر.
                  نسعى دائماً لتجاوز توقعات عملائنا وتقديم حلول مبتكرة تلبي احتياجاتهم.
                </p>
              </div>
              <div className="relative">
                <div className="w-full h-80 bg-gradient-to-br from-luxury-gold to-luxury-gold-light rounded-2xl flex items-center justify-center">
                  <Building2 className="h-32 w-32 text-luxury-navy opacity-20" />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="w-full py-16 md:py-24 lg:py-32 bg-luxury-navy text-luxury-ivory">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-16 text-luxury-ivory">
              رؤيتنا ورسالتنا
            </h2>
            <div className="grid gap-8 md:grid-cols-2">
              <Card className="bg-white text-dark-text border-luxury-gold/30 text-center shadow-xl hover:shadow-2xl transition-all duration-300">
                <CardHeader className="flex flex-col items-center gap-4 pb-4">
                  <div className="w-20 h-20 bg-gradient-to-br from-luxury-gold to-luxury-gold-light rounded-full flex items-center justify-center">
                    <Eye className="h-10 w-10 text-luxury-navy" />
                  </div>
                  <CardTitle className="text-2xl font-bold text-luxury-navy">رؤيتنا</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-medium-text">
                    نسعى لأن نكون الشركة الرائدة في مجال الإنشاءات والتشطيبات والنجارة الفاخرة،
                    مع التركيز على الابتكار والاستدامة والجودة العالية.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-white text-dark-text border-luxury-gold/30 text-center shadow-xl hover:shadow-2xl transition-all duration-300">
                <CardHeader className="flex flex-col items-center gap-4 pb-4">
                  <div className="w-20 h-20 bg-gradient-to-br from-luxury-gold to-luxury-gold-light rounded-full flex items-center justify-center">
                    <Target className="h-10 w-10 text-luxury-navy" />
                  </div>
                  <CardTitle className="text-2xl font-bold text-luxury-navy">رسالتنا</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-medium-text">
                    تقديم خدمات متميزة تلبي احتياجات عملائنا، مع الالتزام بأعلى معايير الجودة
                    والسلامة والموثوقية في جميع مشاريعنا.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        <section className="w-full py-16 md:py-24 lg:py-32 bg-luxury-ivory">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-16 text-luxury-navy">
              قيمنا الأساسية
            </h2>
            <div className="grid gap-8 md:grid-cols-3">
              <Card className="bg-white text-dark-text border-luxury-gold/30 text-center shadow-xl hover:shadow-2xl transition-all duration-300">
                <CardHeader className="flex flex-col items-center gap-4 pb-4">
                  <div className="w-20 h-20 bg-gradient-to-br from-luxury-gold to-luxury-gold-light rounded-full flex items-center justify-center">
                    <Award className="h-10 w-10 text-luxury-navy" />
                  </div>
                  <CardTitle className="text-xl font-bold text-luxury-navy">التميز</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-medium-text">
                    نسعى دائماً للتميز في جميع خدماتنا، مع التركيز على الجودة العالية والابتكار المستمر.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-white text-dark-text border-luxury-gold/30 text-center shadow-xl hover:shadow-2xl transition-all duration-300">
                <CardHeader className="flex flex-col items-center gap-4 pb-4">
                  <div className="w-20 h-20 bg-gradient-to-br from-luxury-gold to-luxury-gold-light rounded-full flex items-center justify-center">
                    <CheckCircle className="h-10 w-10 text-luxury-navy" />
                  </div>
                  <CardTitle className="text-xl font-bold text-luxury-navy">الموثوقية</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-medium-text">
                    نلتزم بوعودنا ونضمن لكم جودة عالية في جميع مراحل العمل، مع الالتزام بالمواعيد.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-white text-dark-text border-luxury-gold/30 text-center shadow-xl hover:shadow-2xl transition-all duration-300">
                <CardHeader className="flex flex-col items-center gap-4 pb-4">
                  <div className="w-20 h-20 bg-gradient-to-br from-luxury-gold to-luxury-gold-light rounded-full flex items-center justify-center">
                    <Users className="h-10 w-10 text-luxury-navy" />
                  </div>
                  <CardTitle className="text-xl font-bold text-luxury-navy">خدمة العملاء</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-medium-text">
                    نضع رضاكم في المقام الأول ونقدم لكم خدمة متميزة ومخصصة تلبي جميع احتياجاتكم.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        <section className="w-full py-16 md:py-24 lg:py-32 bg-luxury-navy text-luxury-ivory">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-16 text-luxury-ivory">
              فريقنا
            </h2>
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              <Card className="bg-white text-dark-text border-luxury-gold/30 text-center shadow-xl hover:shadow-2xl transition-all duration-300">
                <CardHeader className="flex flex-col items-center gap-4 pb-4">
                  <div className="w-20 h-20 bg-gradient-to-br from-luxury-gold to-luxury-gold-light rounded-full flex items-center justify-center">
                    <Building2 className="h-10 w-10 text-luxury-navy" />
                  </div>
                  <CardTitle className="text-xl font-bold text-luxury-navy">مهندسون متخصصون</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-medium-text">
                    فريق من المهندسين ذوي الخبرة الواسعة في مجال الإنشاءات والتشطيبات والنجارة.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-white text-dark-text border-luxury-gold/30 text-center shadow-xl hover:shadow-2xl transition-all duration-300">
                <CardHeader className="flex flex-col items-center gap-4 pb-4">
                  <div className="w-20 h-20 bg-gradient-to-br from-luxury-gold to-luxury-gold-light rounded-full flex items-center justify-center">
                    <Users className="h-10 w-10 text-luxury-navy" />
                  </div>
                  <CardTitle className="text-xl font-bold text-luxury-navy">عمالة ماهرة</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-medium-text">
                    عمالة ماهرة ومتدربة على أحدث التقنيات والأساليب في مجال الإنشاءات.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-white text-dark-text border-luxury-gold/30 text-center shadow-xl hover:shadow-2xl transition-all duration-300">
                <CardHeader className="flex flex-col items-center gap-4 pb-4">
                  <div className="w-20 h-20 bg-gradient-to-br from-luxury-gold to-luxury-gold-light rounded-full flex items-center justify-center">
                    <Award className="h-10 w-10 text-luxury-navy" />
                  </div>
                  <CardTitle className="text-xl font-bold text-luxury-navy">إدارة مشاريع</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-medium-text">
                    فريق إدارة مشاريع محترف يضمن تنفيذ جميع المشاريع في الوقت المحدد وبأعلى جودة.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        <section className="w-full py-16 md:py-24 lg:py-32 bg-luxury-ivory">
          <div className="container px-4 md:px-6">
            <div className="text-center space-y-8">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-luxury-navy">
                ابدأ مشروعك معنا
              </h2>
              <p className="max-w-2xl mx-auto text-lg text-medium-text">
                تواصل معنا اليوم لتبدأ رحلة مشروعك مع فريق متخصص ومحترف
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/contact"
                  className="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-luxury-navy bg-luxury-gold hover:bg-luxury-gold-light rounded-lg shadow-xl transition-all duration-300 transform hover:scale-105"
                >
                  تواصل معنا
                </a>
                <a
                  href="/services"
                  className="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-luxury-navy border-2 border-luxury-navy hover:bg-luxury-navy hover:text-luxury-ivory rounded-lg transition-all duration-300"
                >
                  استكشف خدماتنا
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
