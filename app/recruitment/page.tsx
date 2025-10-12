import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import {
  Users,
  Briefcase,
  GraduationCap,
  MapPin,
  Clock,
  DollarSign,
  ArrowRight,
  Code,
  Truck,
  Building2,
  Server,
  Database,
  Network,
  ShieldCheck,
  Brain,
  Cloud,
} from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

export default function RecruitmentPage() {
  return (
    <div className="flex flex-col min-h-[100dvh] bg-light-background text-dark-text">
      <Header />
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-br from-gradient-blue via-gradient-purple to-gradient-pink text-light-background">
          <div className="container px-4 md:px-6 text-right">
            <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl text-light-background mb-6 drop-shadow-lg">
              انضم إلى فريقنا
            </h1>
            <p className="max-w-[800px] text-lg md:text-xl/relaxed lg:text-2xl/relaxed text-white">
              نبحث عن مواهب متميزة ومبدعة للانضمام إلى فريقنا المتخصص في التقنية واللوجستيات.
              انضم إلينا وساعدنا في تشكيل مستقبل التقنية في المملكة العربية السعودية.
            </p>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 lg:py-32 bg-light-background text-dark-text">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-12 text-primary drop-shadow">
              لماذا تختار العمل معنا؟
            </h2>
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              <Card className="bg-white text-dark-text border-light-border/30 text-center shadow-xl hover:shadow-2xl transition-shadow duration-300">
                <CardHeader className="flex flex-col items-center gap-4 pb-4">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-100 to-purple-100 rounded-full flex items-center justify-center">
                    <Users className="h-8 w-8 text-primary" />
                  </div>
                  <CardTitle className="text-xl font-bold text-primary">فريق متميز</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-medium-text">
                    انضم إلى فريق من المحترفين المتميزين في مجال التقنية واللوجستيات
                    وشارك في مشاريع مبتكرة ومتطورة.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-white text-dark-text border-light-border/30 text-center shadow-xl hover:shadow-2xl transition-shadow duration-300">
                <CardHeader className="flex flex-col items-center gap-4 pb-4">
                  <div className="w-16 h-16 bg-gradient-to-br from-green-100 to-blue-100 rounded-full flex items-center justify-center">
                    <GraduationCap className="h-8 w-8 text-primary" />
                  </div>
                  <CardTitle className="text-xl font-bold text-primary">تطوير مستمر</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-medium-text">
                    نقدم برامج تدريبية وتطويرية مستمرة لضمان نموك المهني
                    ومواكبة أحدث التقنيات والاتجاهات في الصناعة.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-white text-dark-text border-light-border/30 text-center shadow-xl hover:shadow-2xl transition-shadow duration-300">
                <CardHeader className="flex flex-col items-center gap-4 pb-4">
                  <div className="w-16 h-16 bg-gradient-to-br from-purple-100 to-pink-100 rounded-full flex items-center justify-center">
                    <Briefcase className="h-8 w-8 text-primary" />
                  </div>
                  <CardTitle className="text-xl font-bold text-primary">مشاريع متنوعة</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-medium-text">
                    شارك في مجموعة متنوعة من المشاريع التقنية المثيرة
                    في مجالات التحول الرقمي واللوجستيات والمقاولات.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-br from-gradient-blue via-gradient-purple to-gradient-pink text-light-background">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-12 text-light-background drop-shadow">
              الوظائف المتاحة
            </h2>
            <div className="grid gap-8 md:grid-cols-1 lg:grid-cols-1">
              {/* Software Developer */}
              <Card className="bg-white text-dark-text border-light-border/30 text-right shadow-xl hover:shadow-2xl transition-shadow duration-300">
                <CardHeader className="flex flex-row-reverse items-center gap-4 pb-4">
                  <Code className="h-10 w-10 text-primary" />
                  <div className="flex-1">
                    <CardTitle className="text-2xl font-bold text-primary">مطور برمجيات</CardTitle>
                    <div className="flex flex-wrap gap-2 mt-2">
                      <Badge variant="secondary" className="bg-blue-100 text-blue-800">دوام كامل</Badge>
                      <Badge variant="secondary" className="bg-green-100 text-green-800">عن بُعد</Badge>
                      <Badge variant="secondary" className="bg-purple-100 text-purple-800">مبتدئ</Badge>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-medium-text mb-4">
                    نبحث عن مطور برمجيات موهوب للانضمام إلى فريق التطوير لدينا.
                    ستشارك في تطوير حلول تقنية مبتكرة ومتطورة في مجالات التحول الرقمي واللوجستيات.
                  </p>
                  <div className="grid md:grid-cols-2 gap-4 mb-6">
                    <div>
                      <h4 className="font-semibold text-primary mb-2">المتطلبات:</h4>
                      <ul className="list-disc pr-6 text-medium-text space-y-1">
                        <li>خبرة 2+ سنوات في تطوير البرمجيات</li>
                        <li>إتقان لغات البرمجة الحديثة</li>
                        <li>خبرة في قواعد البيانات والشبكات</li>
                        <li>مهارات حل المشاكل والتفكير التحليلي</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold text-primary mb-2">المسؤوليات:</h4>
                      <ul className="list-disc pr-6 text-medium-text space-y-1">
                        <li>تطوير تطبيقات ويب وموبايل</li>
                        <li>تصميم وتطوير قواعد البيانات</li>
                        <li>تكامل الأنظمة والتطبيقات</li>
                        <li>كتابة وثائق تقنية</li>
                      </ul>
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4 text-sm text-medium-text">
                      <div className="flex items-center gap-2">
                        <MapPin className="h-4 w-4" />
                        <span>الرياض، المملكة العربية السعودية</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Clock className="h-4 w-4" />
                        <span>دوام كامل</span>
                      </div>
                    </div>
                    <Button className="bg-primary text-primary-foreground hover:bg-primary/90">
                      تقدم الآن
                      <ArrowRight className="h-4 w-4 mr-2" />
                    </Button>
                  </div>
                </CardContent>
              </Card>

              {/* Logistics Specialist */}
              <Card className="bg-white text-dark-text border-light-border/30 text-right shadow-xl hover:shadow-2xl transition-shadow duration-300">
                <CardHeader className="flex flex-row-reverse items-center gap-4 pb-4">
                  <Truck className="h-10 w-10 text-primary" />
                  <div className="flex-1">
                    <CardTitle className="text-2xl font-bold text-primary">أخصائي لوجستيات</CardTitle>
                    <div className="flex flex-wrap gap-2 mt-2">
                      <Badge variant="secondary" className="bg-blue-100 text-blue-800">دوام كامل</Badge>
                      <Badge variant="secondary" className="bg-green-100 text-green-800">مكتبي</Badge>
                      <Badge variant="secondary" className="bg-purple-100 text-purple-800">متوسط</Badge>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-medium-text mb-4">
                    نبحث عن أخصائي لوجستيات ذو خبرة لتحسين وتطوير عملياتنا اللوجستية.
                    ستساعد في تطوير حلول مبتكرة لتحسين كفاءة سلاسل الإمداد والنقل.
                  </p>
                  <div className="grid md:grid-cols-2 gap-4 mb-6">
                    <div>
                      <h4 className="font-semibold text-primary mb-2">المتطلبات:</h4>
                      <ul className="list-disc pr-6 text-medium-text space-y-1">
                        <li>خبرة 3+ سنوات في مجال اللوجستيات</li>
                        <li>خبرة في إدارة سلاسل الإمداد</li>
                        <li>مهارات تحليلية قوية</li>
                        <li>إتقان برامج إدارة اللوجستيات</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold text-primary mb-2">المسؤوليات:</h4>
                      <ul className="list-disc pr-6 text-medium-text space-y-1">
                        <li>تحليل وتحسين العمليات اللوجستية</li>
                        <li>إدارة المخزون وسلاسل الإمداد</li>
                        <li>تطوير استراتيجيات النقل</li>
                        <li>تحليل البيانات وإعداد التقارير</li>
                      </ul>
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4 text-sm text-medium-text">
                      <div className="flex items-center gap-2">
                        <MapPin className="h-4 w-4" />
                        <span>جدة، المملكة العربية السعودية</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Clock className="h-4 w-4" />
                        <span>دوام كامل</span>
                      </div>
                    </div>
                    <Button className="bg-primary text-primary-foreground hover:bg-primary/90">
                      تقدم الآن
                      <ArrowRight className="h-4 w-4 mr-2" />
                    </Button>
                  </div>
                </CardContent>
              </Card>

              {/* IT Infrastructure Engineer */}
              <Card className="bg-white text-dark-text border-light-border/30 text-right shadow-xl hover:shadow-2xl transition-shadow duration-300">
                <CardHeader className="flex flex-row-reverse items-center gap-4 pb-4">
                  <Server className="h-10 w-10 text-primary" />
                  <div className="flex-1">
                    <CardTitle className="text-2xl font-bold text-primary">مهندس البنية التحتية التقنية</CardTitle>
                    <div className="flex flex-wrap gap-2 mt-2">
                      <Badge variant="secondary" className="bg-blue-100 text-blue-800">دوام كامل</Badge>
                      <Badge variant="secondary" className="bg-green-100 text-green-800">مكتبي</Badge>
                      <Badge variant="secondary" className="bg-purple-100 text-purple-800">متقدم</Badge>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-medium-text mb-4">
                    نبحث عن مهندس بنية تحتية تقنية ذو خبرة لتصميم وتطوير البنية التحتية التقنية.
                    ستساعد في بناء أنظمة تقنية متطورة وآمنة لدعم عملياتنا.
                  </p>
                  <div className="grid md:grid-cols-2 gap-4 mb-6">
                    <div>
                      <h4 className="font-semibold text-primary mb-2">المتطلبات:</h4>
                      <ul className="list-disc pr-6 text-medium-text space-y-1">
                        <li>خبرة 5+ سنوات في البنية التحتية التقنية</li>
                        <li>خبرة في الشبكات والخوادم</li>
                        <li>معرفة بالأمن السيبراني</li>
                        <li>شهادات تقنية معتمدة</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold text-primary mb-2">المسؤوليات:</h4>
                      <ul className="list-disc pr-6 text-medium-text space-y-1">
                        <li>تصميم وتطوير البنية التحتية التقنية</li>
                        <li>إدارة الشبكات والخوادم</li>
                        <li>تطبيق معايير الأمن السيبراني</li>
                        <li>صيانة وتحديث الأنظمة</li>
                      </ul>
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4 text-sm text-medium-text">
                      <div className="flex items-center gap-2">
                        <MapPin className="h-4 w-4" />
                        <span>الدمام، المملكة العربية السعودية</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Clock className="h-4 w-4" />
                        <span>دوام كامل</span>
                      </div>
                    </div>
                    <Button className="bg-primary text-primary-foreground hover:bg-primary/90">
                      تقدم الآن
                      <ArrowRight className="h-4 w-4 mr-2" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 lg:py-32 bg-light-background text-dark-text">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-12 text-primary drop-shadow">
              كيفية التقديم
            </h2>
            <div className="max-w-3xl mx-auto text-center">
              <p className="text-lg text-medium-text mb-8">
                للتقديم على أي من الوظائف المتاحة، يرجى اتباع الخطوات التالية:
              </p>
              <div className="grid gap-6 md:grid-cols-3">
                <div className="flex flex-col items-center gap-4">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-100 to-purple-100 rounded-full flex items-center justify-center">
                    <span className="text-2xl font-bold text-primary">1</span>
                  </div>
                  <h3 className="text-xl font-semibold text-primary">أرسل سيرتك الذاتية</h3>
                  <p className="text-medium-text">
                    قم بإرسال سيرتك الذاتية مع رسالة تغطية توضح اهتمامك بالوظيفة
                  </p>
                </div>
                <div className="flex flex-col items-center gap-4">
                  <div className="w-16 h-16 bg-gradient-to-br from-green-100 to-blue-100 rounded-full flex items-center justify-center">
                    <span className="text-2xl font-bold text-primary">2</span>
                  </div>
                  <h3 className="text-xl font-semibold text-primary">مقابلة أولية</h3>
                  <p className="text-medium-text">
                    سنقوم بإجراء مقابلة أولية لمناقشة خبراتك ومؤهلاتك
                  </p>
                </div>
                <div className="flex flex-col items-center gap-4">
                  <div className="w-16 h-16 bg-gradient-to-br from-purple-100 to-pink-100 rounded-full flex items-center justify-center">
                    <span className="text-2xl font-bold text-primary">3</span>
                  </div>
                  <h3 className="text-xl font-semibold text-primary">انضم إلى الفريق</h3>
                  <p className="text-medium-text">
                    بعد الموافقة، ستنتقل إلى مرحلة التدريب والاندماج مع الفريق
                  </p>
                </div>
              </div>
              <div className="mt-12">
                <Button
                  asChild
                  size="lg"
                  className="bg-primary text-primary-foreground hover:bg-primary/90 px-8 py-4 text-lg font-semibold"
                >
                  <a href="mailto:careers@farvisions.com">تواصل معنا</a>
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

