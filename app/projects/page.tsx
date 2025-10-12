import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import {
  Server,
  Truck,
  Building2,
  Database,
  Network,
  ShieldCheck,
  Cpu,
  Cloud,
  Brain,
  Code,
  Award,
  Users,
  Calendar,
  MapPin,
} from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export default function ProjectsPage() {
  return (
    <div className="flex flex-col min-h-[100dvh] bg-light-background text-dark-text">
      <Header />
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-br from-gradient-blue via-gradient-purple to-gradient-pink text-light-background">
          <div className="container px-4 md:px-6 text-right">
            <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl text-light-background mb-6 drop-shadow-lg">
              مشاريعنا المميزة
            </h1>
            <p className="max-w-[800px] text-lg md:text-xl/relaxed lg:text-2xl/relaxed text-white">
              نفتخر بتقديم مجموعة من المشاريع التقنية المتميزة التي تعكس خبرتنا وقدرتنا على تقديم حلول مبتكرة ومتطورة
              تلبي احتياجات عملائنا في مختلف القطاعات.
            </p>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 lg:py-32 bg-light-background text-dark-text">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-12 text-primary drop-shadow">
              مشاريع التحول الرقمي
            </h2>
            <div className="grid gap-8 md:grid-cols-1 lg:grid-cols-1">
              <Card className="bg-white text-dark-text border-light-border/30 text-right shadow-xl hover:shadow-2xl transition-shadow duration-300">
                <CardHeader className="flex flex-col items-center gap-4 pb-4">
                  <div className="w-full h-64 bg-gradient-to-br from-blue-100 to-purple-100 rounded-lg flex items-center justify-center">
                    <Server className="h-20 w-20 text-primary" />
                  </div>
                  <div className="flex flex-wrap gap-2 justify-center">
                    <Badge variant="secondary" className="bg-blue-100 text-blue-800">الذكاء الاصطناعي</Badge>
                    <Badge variant="secondary" className="bg-purple-100 text-purple-800">إنترنت الأشياء</Badge>
                    <Badge variant="secondary" className="bg-green-100 text-green-800">إدارة المستودعات</Badge>
                  </div>
                  <CardTitle className="text-2xl font-bold text-primary text-center">نظام إدارة المستودعات الذكي</CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="text-medium-text mb-6 text-lg">
                    تطوير نظام متكامل لإدارة المستودعات باستخدام تقنيات الذكاء الاصطناعي والإنترنت للأشياء،
                    مما أدى إلى تحسين كفاءة العمليات بنسبة 40% وتقليل التكاليف التشغيلية.
                  </p>
                  <div className="grid md:grid-cols-3 gap-4 text-sm">
                    <div className="flex items-center gap-2 justify-center">
                      <Users className="h-4 w-4 text-primary" />
                      <span>شركة لوجستية كبرى</span>
                    </div>
                    <div className="flex items-center gap-2 justify-center">
                      <Calendar className="h-4 w-4 text-primary" />
                      <span>2023 - 2024</span>
                    </div>
                    <div className="flex items-center gap-2 justify-center">
                      <MapPin className="h-4 w-4 text-primary" />
                      <span>الرياض، المملكة العربية السعودية</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-white text-dark-text border-light-border/30 text-right shadow-xl hover:shadow-2xl transition-shadow duration-300">
                <CardHeader className="flex flex-col items-center gap-4 pb-4">
                  <div className="w-full h-64 bg-gradient-to-br from-green-100 to-blue-100 rounded-lg flex items-center justify-center">
                    <Database className="h-20 w-20 text-primary" />
                  </div>
                  <div className="flex flex-wrap gap-2 justify-center">
                    <Badge variant="secondary" className="bg-blue-100 text-blue-800">قواعد البيانات</Badge>
                    <Badge variant="secondary" className="bg-green-100 text-green-800">التحليلات</Badge>
                    <Badge variant="secondary" className="bg-purple-100 text-purple-800">الأمن السيبراني</Badge>
                  </div>
                  <CardTitle className="text-2xl font-bold text-primary text-center">منصة البيانات الحكومية المتقدمة</CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="text-medium-text mb-6 text-lg">
                    تطوير منصة متكاملة لإدارة وتحليل البيانات الحكومية مع تطبيق أحدث تقنيات الأمن السيبراني
                    والذكاء الاصطناعي لتحليل البيانات واتخاذ القرارات المدروسة.
                  </p>
                  <div className="grid md:grid-cols-3 gap-4 text-sm">
                    <div className="flex items-center gap-2 justify-center">
                      <Users className="h-4 w-4 text-primary" />
                      <span>وزارة حكومية</span>
                    </div>
                    <div className="flex items-center gap-2 justify-center">
                      <Calendar className="h-4 w-4 text-primary" />
                      <span>2022 - 2024</span>
                    </div>
                    <div className="flex items-center gap-2 justify-center">
                      <MapPin className="h-4 w-4 text-primary" />
                      <span>الرياض، المملكة العربية السعودية</span>
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
              مشاريع اللوجستيات والنقل
            </h2>
            <div className="grid gap-8 md:grid-cols-1 lg:grid-cols-1">
              <Card className="bg-white text-dark-text border-light-border/30 text-right shadow-xl hover:shadow-2xl transition-shadow duration-300">
                <CardHeader className="flex flex-col items-center gap-4 pb-4">
                  <div className="w-full h-64 bg-gradient-to-br from-green-100 to-blue-100 rounded-lg flex items-center justify-center">
                    <Truck className="h-20 w-20 text-primary" />
                  </div>
                  <div className="flex flex-wrap gap-2 justify-center">
                    <Badge variant="secondary" className="bg-blue-100 text-blue-800">النقل الذكي</Badge>
                    <Badge variant="secondary" className="bg-green-100 text-green-800">اللوجستيات</Badge>
                    <Badge variant="secondary" className="bg-purple-100 text-purple-800">تتبع GPS</Badge>
                  </div>
                  <CardTitle className="text-2xl font-bold text-primary text-center">منصة النقل اللوجستي المتكاملة</CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="text-medium-text mb-6 text-lg">
                    منصة شاملة لإدارة النقل واللوجستيات مع تتبع ذكي وتحليل متقدم للبيانات،
                    مما ساهم في تحسين كفاءة النقل بنسبة 35% وتقليل وقت التسليم.
                  </p>
                  <div className="grid md:grid-cols-3 gap-4 text-sm">
                    <div className="flex items-center gap-2 justify-center">
                      <Users className="h-4 w-4 text-primary" />
                      <span>شركة نقل دولية</span>
                    </div>
                    <div className="flex items-center gap-2 justify-center">
                      <Calendar className="h-4 w-4 text-primary" />
                      <span>2023 - 2024</span>
                    </div>
                    <div className="flex items-center gap-2 justify-center">
                      <MapPin className="h-4 w-4 text-primary" />
                      <span>جدة، المملكة العربية السعودية</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-white text-dark-text border-light-border/30 text-right shadow-xl hover:shadow-2xl transition-shadow duration-300">
                <CardHeader className="flex flex-col items-center gap-4 pb-4">
                  <div className="w-full h-64 bg-gradient-to-br from-purple-100 to-pink-100 rounded-lg flex items-center justify-center">
                    <Network className="h-20 w-20 text-primary" />
                  </div>
                  <div className="flex flex-wrap gap-2 justify-center">
                    <Badge variant="secondary" className="bg-blue-100 text-blue-800">الشبكات</Badge>
                    <Badge variant="secondary" className="bg-purple-100 text-purple-800">المراقبة</Badge>
                    <Badge variant="secondary" className="bg-pink-100 text-pink-800">التحكم</Badge>
                  </div>
                  <CardTitle className="text-2xl font-bold text-primary text-center">نظام مراقبة النقل العام الذكي</CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="text-medium-text mb-6 text-lg">
                    تطوير نظام متكامل لمراقبة وإدارة النقل العام باستخدام تقنيات الشبكات المتقدمة
                    وأنظمة المراقبة الذكية لتحسين تجربة الركاب وكفاءة الخدمة.
                  </p>
                  <div className="grid md:grid-cols-3 gap-4 text-sm">
                    <div className="flex items-center gap-2 justify-center">
                      <Users className="h-4 w-4 text-primary" />
                      <span>هيئة النقل العام</span>
                    </div>
                    <div className="flex items-center gap-2 justify-center">
                      <Calendar className="h-4 w-4 text-primary" />
                      <span>2022 - 2023</span>
                    </div>
                    <div className="flex items-center gap-2 justify-center">
                      <MapPin className="h-4 w-4 text-primary" />
                      <span>الدمام، المملكة العربية السعودية</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 lg:py-32 bg-light-background text-dark-text">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-12 text-primary drop-shadow">
              مشاريع البنية التحتية التقنية
            </h2>
            <div className="grid gap-8 md:grid-cols-1 lg:grid-cols-1">
              <Card className="bg-white text-dark-text border-light-border/30 text-right shadow-xl hover:shadow-2xl transition-shadow duration-300">
                <CardHeader className="flex flex-col items-center gap-4 pb-4">
                  <div className="w-full h-64 bg-gradient-to-br from-purple-100 to-pink-100 rounded-lg flex items-center justify-center">
                    <Building2 className="h-20 w-20 text-primary" />
                  </div>
                  <div className="flex flex-wrap gap-2 justify-center">
                    <Badge variant="secondary" className="bg-blue-100 text-blue-800">المدن الذكية</Badge>
                    <Badge variant="secondary" className="bg-purple-100 text-purple-800">البنية التحتية</Badge>
                    <Badge variant="secondary" className="bg-pink-100 text-pink-800">الذكاء الاصطناعي</Badge>
                  </div>
                  <CardTitle className="text-2xl font-bold text-primary text-center">البنية التحتية الرقمية للمدينة الذكية</CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="text-medium-text mb-6 text-lg">
                    تطوير البنية التحتية التقنية لمشروع المدينة الذكية مع أنظمة مراقبة وتحكم متقدمة،
                    مما يجعل المدينة نموذجاً للابتكار التقني والاستدامة.
                  </p>
                  <div className="grid md:grid-cols-3 gap-4 text-sm">
                    <div className="flex items-center gap-2 justify-center">
                      <Users className="h-4 w-4 text-primary" />
                      <span>شركة تطوير عقاري</span>
                    </div>
                    <div className="flex items-center gap-2 justify-center">
                      <Calendar className="h-4 w-4 text-primary" />
                      <span>2021 - 2024</span>
                    </div>
                    <div className="flex items-center gap-2 justify-center">
                      <MapPin className="h-4 w-4 text-primary" />
                      <span>نيوم، المملكة العربية السعودية</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-white text-dark-text border-light-border/30 text-right shadow-xl hover:shadow-2xl transition-shadow duration-300">
                <CardHeader className="flex flex-col items-center gap-4 pb-4">
                  <div className="w-full h-64 bg-gradient-to-br from-blue-100 to-green-100 rounded-lg flex items-center justify-center">
                    <Cpu className="h-20 w-20 text-primary" />
                  </div>
                  <div className="flex flex-wrap gap-2 justify-center">
                    <Badge variant="secondary" className="bg-blue-100 text-blue-800">مراكز البيانات</Badge>
                    <Badge variant="secondary" className="bg-green-100 text-green-800">الخوادم</Badge>
                    <Badge variant="secondary" className="bg-purple-100 text-purple-800">الأمن</Badge>
                  </div>
                  <CardTitle className="text-2xl font-bold text-primary text-center">مركز البيانات المتقدم للأمن السيبراني</CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="text-medium-text mb-6 text-lg">
                    تطوير مركز بيانات متقدم متخصص في الأمن السيبراني مع تطبيق أحدث تقنيات الحماية
                    والمراقبة لضمان أمن البيانات والمعلومات الحساسة.
                  </p>
                  <div className="grid md:grid-cols-3 gap-4 text-sm">
                    <div className="flex items-center gap-2 justify-center">
                      <Users className="h-4 w-4 text-primary" />
                      <span>مؤسسة أمنية حكومية</span>
                    </div>
                    <div className="flex items-center gap-2 justify-center">
                      <Calendar className="h-4 w-4 text-primary" />
                      <span>2023 - 2024</span>
                    </div>
                    <div className="flex items-center gap-2 justify-center">
                      <MapPin className="h-4 w-4 text-primary" />
                      <span>الرياض، المملكة العربية السعودية</span>
                    </div>
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

