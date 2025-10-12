import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import {
  Newspaper,
  Calendar,
  User,
  Tag,
  ArrowRight,
  TrendingUp,
  Truck,
  Server,
  Building2,
  Globe,
  Lightbulb,
  ShieldCheck,
} from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export default function NewsPage() {
  return (
    <div className="flex flex-col min-h-[100dvh] bg-light-background text-dark-text">
      <Header />
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-br from-gradient-blue via-gradient-purple to-gradient-pink text-light-background">
          <div className="container px-4 md:px-6 text-right">
            <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl text-light-background mb-6 drop-shadow-lg">
              الأخبار والتحديثات التقنية
            </h1>
            <p className="max-w-[800px] text-lg md:text-xl/relaxed lg:text-2xl/relaxed text-white">
              نقدم لكم آخر الأخبار والتطورات في مجال التقنية واللوجستيات والتحول الرقمي،
              لنبقيكم على اطلاع بأحدث الابتكارات والاتجاهات في الصناعة.
            </p>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 lg:py-32 bg-light-background text-dark-text">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-12 text-primary drop-shadow">
              أحدث الأخبار
            </h2>
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {/* Featured News 1 */}
              <Card className="bg-white text-dark-text border-light-border/30 text-right shadow-xl hover:shadow-2xl transition-shadow duration-300">
                <CardHeader className="flex flex-col items-center gap-4 pb-4">
                  <div className="w-full h-48 bg-gradient-to-br from-blue-100 to-purple-100 rounded-lg flex items-center justify-center">
                    <TrendingUp className="h-16 w-16 text-primary" />
                  </div>
                  <div className="flex flex-wrap gap-2 justify-center">
                    <Badge variant="secondary" className="bg-blue-100 text-blue-800">الذكاء الاصطناعي</Badge>
                    <Badge variant="secondary" className="bg-purple-100 text-purple-800">اللوجستيات</Badge>
                  </div>
                  <CardTitle className="text-xl font-bold text-primary text-center">
                    تطبيق الذكاء الاصطناعي في تحسين سلاسل الإمداد
                  </CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="text-medium-text mb-4">
                    كيف يغير الذكاء الاصطناعي مستقبل اللوجستيات وسلاسل الإمداد في المملكة العربية السعودية
                    وما هي الفوائد المتوقعة من هذه التكنولوجيا المتطورة.
                  </p>
                  <div className="flex items-center justify-between text-sm text-medium-text">
                    <div className="flex items-center gap-2">
                      <Calendar className="h-4 w-4" />
                      <span>15 مارس 2024</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <User className="h-4 w-4" />
                      <span>فريق التحرير</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Featured News 2 */}
              <Card className="bg-white text-dark-text border-light-border/30 text-right shadow-xl hover:shadow-2xl transition-shadow duration-300">
                <CardHeader className="flex flex-col items-center gap-4 pb-4">
                  <div className="w-full h-48 bg-gradient-to-br from-green-100 to-blue-100 rounded-lg flex items-center justify-center">
                    <Truck className="h-16 w-16 text-primary" />
                  </div>
                  <div className="flex flex-wrap gap-2 justify-center">
                    <Badge variant="secondary" className="bg-green-100 text-green-800">النقل الذكي</Badge>
                    <Badge variant="secondary" className="bg-blue-100 text-blue-800">المركبات الكهربائية</Badge>
                  </div>
                  <CardTitle className="text-xl font-bold text-primary text-center">
                    مستقبل النقل الذكي في المدن السعودية
                  </CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="text-medium-text mb-4">
                    استكشاف أحدث تقنيات النقل الذكي والمركبات الكهربائية وكيفية تطبيقها
                    في المدن السعودية لتحسين كفاءة النقل وتقليل الانبعاثات.
                  </p>
                  <div className="flex items-center justify-between text-sm text-medium-text">
                    <div className="flex items-center gap-2">
                      <Calendar className="h-4 w-4" />
                      <span>12 مارس 2024</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <User className="h-4 w-4" />
                      <span>خبير النقل</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Featured News 3 */}
              <Card className="bg-white text-dark-text border-light-border/30 text-right shadow-xl hover:shadow-2xl transition-shadow duration-300">
                <CardHeader className="flex flex-col items-center gap-4 pb-4">
                  <div className="w-full h-48 bg-gradient-to-br from-purple-100 to-pink-100 rounded-lg flex items-center justify-center">
                    <Server className="h-16 w-16 text-primary" />
                  </div>
                  <div className="flex flex-wrap gap-2 justify-center">
                    <Badge variant="secondary" className="bg-purple-100 text-purple-800">الحوسبة السحابية</Badge>
                    <Badge variant="secondary" className="bg-pink-100 text-pink-800">الأمن السيبراني</Badge>
                  </div>
                  <CardTitle className="text-xl font-bold text-primary text-center">
                    تحديات الأمن السيبراني في عصر الحوسبة السحابية
                  </CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="text-medium-text mb-4">
                    فهم التحديات الأمنية الجديدة التي تواجه المؤسسات مع انتقالها إلى الحوسبة السحابية
                    وكيفية تطبيق أفضل ممارسات الأمن السيبراني.
                  </p>
                  <div className="flex items-center justify-between text-sm text-medium-text">
                    <div className="flex items-center gap-2">
                      <Calendar className="h-4 w-4" />
                      <span>10 مارس 2024</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <User className="h-4 w-4" />
                      <span>خبير الأمن</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-br from-gradient-blue via-gradient-purple to-gradient-pink text-light-background">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-12 text-light-background drop-shadow">
              أخبار التحول الرقمي
            </h2>
            <div className="grid gap-8 md:grid-cols-1 lg:grid-cols-1">
              <Card className="bg-white text-dark-text border-light-border/30 text-right shadow-xl hover:shadow-2xl transition-shadow duration-300">
                <CardHeader className="flex flex-row-reverse items-center gap-4 pb-4">
                  <Building2 className="h-10 w-10 text-primary" />
                  <CardTitle className="text-2xl font-bold text-primary">رؤية 2030 والتحول الرقمي</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-medium-text mb-4">
                    كيف تساهم رؤية المملكة 2030 في تسريع عملية التحول الرقمي وما هي المشاريع التقنية
                    الكبرى التي يتم تطويرها لدعم هذه الرؤية الطموحة.
                  </p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4 text-sm text-medium-text">
                      <div className="flex items-center gap-2">
                        <Calendar className="h-4 w-4" />
                        <span>8 مارس 2024</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <User className="h-4 w-4" />
                        <span>محلل استراتيجي</span>
                      </div>
                    </div>
                    <Badge variant="secondary" className="bg-blue-100 text-blue-800">رؤية 2030</Badge>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-white text-dark-text border-light-border/30 text-right shadow-xl hover:shadow-2xl transition-shadow duration-300">
                <CardHeader className="flex flex-row-reverse items-center gap-4 pb-4">
                  <Globe className="h-10 w-10 text-primary" />
                  <CardTitle className="text-2xl font-bold text-primary">التقنيات الناشئة في 2024</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-medium-text mb-4">
                    استعراض أهم التقنيات الناشئة التي ستشكل مستقبل الصناعة في 2024،
                    من الذكاء الاصطناعي التوليدي إلى إنترنت الأشياء المتقدم.
                  </p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4 text-sm text-medium-text">
                      <div className="flex items-center gap-2">
                        <Calendar className="h-4 w-4" />
                        <span>5 مارس 2024</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <User className="h-4 w-4" />
                        <span>خبير التقنية</span>
                      </div>
                    </div>
                    <Badge variant="secondary" className="bg-purple-100 text-purple-800">تقنيات ناشئة</Badge>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 lg:py-32 bg-light-background text-dark-text">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-12 text-primary drop-shadow">
              أخبار اللوجستيات والتجارة
            </h2>
            <div className="grid gap-8 md:grid-cols-1 lg:grid-cols-1">
              <Card className="bg-white text-dark-text border-light-border/30 text-right shadow-xl hover:shadow-2xl transition-shadow duration-300">
                <CardHeader className="flex flex-row-reverse items-center gap-4 pb-4">
                  <Lightbulb className="h-10 w-10 text-primary" />
                  <CardTitle className="text-2xl font-bold text-primary">الابتكار في سلاسل الإمداد</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-medium-text mb-4">
                    كيف تستفيد الشركات السعودية من التقنيات المبتكرة لتحسين سلاسل الإمداد
                    وزيادة الكفاءة التشغيلية في مجال اللوجستيات.
                  </p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4 text-sm text-medium-text">
                      <div className="flex items-center gap-2">
                        <Calendar className="h-4 w-4" />
                        <span>3 مارس 2024</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <User className="h-4 w-4" />
                        <span>خبير اللوجستيات</span>
                      </div>
                    </div>
                    <Badge variant="secondary" className="bg-green-100 text-green-800">سلاسل الإمداد</Badge>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-white text-dark-text border-light-border/30 text-right shadow-xl hover:shadow-2xl transition-shadow duration-300">
                <CardHeader className="flex flex-row-reverse items-center gap-4 pb-4">
                  <ShieldCheck className="h-10 w-10 text-primary" />
                  <CardTitle className="text-2xl font-bold text-primary">أمن سلسلة الإمداد الرقمية</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-medium-text mb-4">
                    أهمية أمن سلسلة الإمداد في العصر الرقمي وكيفية حماية العمليات اللوجستية
                    من التهديدات السيبرانية والاختراقات الأمنية.
                  </p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4 text-sm text-medium-text">
                      <div className="flex items-center gap-2">
                        <Calendar className="h-4 w-4" />
                        <span>1 مارس 2024</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <User className="h-4 w-4" />
                        <span>خبير الأمن</span>
                      </div>
                    </div>
                    <Badge variant="secondary" className="bg-red-100 text-red-800">أمن سلسلة الإمداد</Badge>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}

