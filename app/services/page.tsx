import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import {
  Building,
  Box,
  Laptop,
  Wrench,
  HardHat,
  Factory,
  Truck,
  Server,
  Compass,
  Ruler,
  GraduationCap,
  MessageSquareMore,
  Workflow,
  Car,
  Warehouse,
  Locate,
  Route,
  Code,
  Cloud,
  Brain,
  ShieldCheck,
} from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function ServicesPage() {
  return (
    <div className="flex flex-col min-h-[100dvh] bg-light-background text-dark-text">
      <Header />
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-br from-gradient-blue via-gradient-purple to-gradient-pink text-light-background">
          <div className="container px-4 md:px-6 text-right">
            <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl text-light-background mb-6 drop-shadow-lg">
              خدماتنا المتخصصة
            </h1>
            <p className="max-w-[800px] text-lg md:text-xl/relaxed lg:text-2xl/relaxed text-white">
              نقدم مجموعة شاملة من الخدمات المتخصصة والمتكاملة التي تلبي احتياجات عملائنا في مختلف القطاعات، مع التركيز
              على الجودة والابتكار والحلول التقنية المتقدمة.
            </p>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 lg:py-32 bg-light-background text-dark-text">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-12 text-primary drop-shadow">
              تفاصيل خدماتنا
            </h2>
            <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2">
              {/* Advanced IT Solutions */}
              <Card className="bg-white text-dark-text border-light-border/30 text-right shadow-xl hover:shadow-2xl transition-shadow duration-300 md:col-span-2">
                <CardHeader className="flex flex-row-reverse items-center gap-4 pb-4">
                  <Laptop className="h-10 w-10 text-primary" />
                  <CardTitle className="text-2xl font-bold text-primary">حلول تقنية المعلومات المتقدمة</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-medium-text mb-4">
                    نقدم أحدث حلول تقنية المعلومات والتحول الرقمي لدعم نمو أعمالكم وتحسين كفاءتها التشغيلية ومواكبة
                    التطور التقني، مع تركيز خاص على الأنظمة المعقدة.
                  </p>
                  <div className="grid md:grid-cols-2 gap-4">
                    <ul className="list-disc pr-6 text-medium-text space-y-2">
                      <li className="flex items-center gap-2">
                        <GraduationCap className="h-5 w-5 text-primary flex-shrink-0" />
                        <span>تطوير أنظمة التعليم الإلكتروني (LMS) المعقدة.</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <MessageSquareMore className="h-5 w-5 text-primary flex-shrink-0" />
                        <span>حلول الاتصال الداخلي المخصصة للمؤسسات الحكومية.</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <Server className="h-5 w-5 text-primary flex-shrink-0" />
                        <span>تطوير البرمجيات المخصصة وتطبيقات الويب.</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <Cloud className="h-5 w-5 text-primary flex-shrink-0" />
                        <span>خدمات الاستشارات التقنية وحلول الحوسبة السحابية.</span>
                      </li>
                    </ul>
                    <ul className="list-disc pr-6 text-medium-text space-y-2">
                      <li className="flex items-center gap-2">
                        <Brain className="h-5 w-5 text-primary flex-shrink-0" />
                        <span>حلول الذكاء الاصطناعي والتحليلات المتقدمة.</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <ShieldCheck className="h-5 w-5 text-primary flex-shrink-0" />
                        <span>حلول البنية التحتية للشبكات والأمن السيبراني.</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <Code className="h-5 w-5 text-primary flex-shrink-0" />
                        <span>تكامل الأنظمة وتطوير واجهات برمجة التطبيقات (APIs).</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <Wrench className="h-5 w-5 text-primary flex-shrink-0" />
                        <span>الدعم الفني والصيانة لأنظمة تكنولوجيا المعلومات.</span>
                      </li>
                    </ul>
                  </div>
                </CardContent>
              </Card>

              {/* Smart Logistics & Supply Chain Solutions */}
              <Card className="bg-white text-dark-text border-light-border/30 text-right shadow-xl hover:shadow-2xl transition-shadow duration-300 md:col-span-2">
                <CardHeader className="flex flex-row-reverse items-center gap-4 pb-4">
                  <Truck className="h-10 w-10 text-primary" />
                  <CardTitle className="text-2xl font-bold text-primary">
                    حلول اللوجستيات وسلاسل الإمداد الذكية
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-medium-text mb-4">
                    حلول لوجستية متكاملة ومتطورة تضمن سلاسة وكفاءة سلسلة التوريد الخاصة بك، من التخزين إلى التوزيع
                    والتسليم، مع التركيز على الأنظمة المعقدة.
                  </p>
                  <div className="grid md:grid-cols-2 gap-4">
                    <ul className="list-disc pr-6 text-medium-text space-y-2">
                      <li className="flex items-center gap-2">
                        <Workflow className="h-5 w-5 text-primary flex-shrink-0" />
                        <span>تحسين سلاسل الإمداد وإدارة المخزون.</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <Car className="h-5 w-5 text-primary flex-shrink-0" />
                        <span>أنظمة إدارة الأساطيل والنقل الذكي.</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <Warehouse className="h-5 w-5 text-primary flex-shrink-0" />
                        <span>أنظمة إدارة المستودعات (WMS) المتقدمة.</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <Locate className="h-5 w-5 text-primary flex-shrink-0" />
                        <span>التتبع والرؤية في الوقت الفعلي للشحنات.</span>
                      </li>
                    </ul>
                    <ul className="list-disc pr-6 text-medium-text space-y-2">
                      <li className="flex items-center gap-2">
                        <Route className="h-5 w-5 text-primary flex-shrink-0" />
                        <span>تحسين المسارات والتخطيط اللوجستي.</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <Code className="h-5 w-5 text-primary flex-shrink-0" />
                        <span>تطوير برمجيات لوجستية مخصصة.</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <Factory className="h-5 w-5 text-primary flex-shrink-0" />
                        <span>حلول النقل متعدد الوسائط (Multimodal Transport).</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <Box className="h-5 w-5 text-primary flex-shrink-0" />
                        <span>إدارة الشحن والتخليص الجمركي.</span>
                      </li>
                    </ul>
                  </div>
                </CardContent>
              </Card>

              {/* Engineering & Construction Support */}
              <Card className="bg-white text-dark-text border-light-border/30 text-right shadow-xl hover:shadow-2xl transition-shadow duration-300">
                <CardHeader className="flex flex-row-reverse items-center gap-4 pb-4">
                  <HardHat className="h-10 w-10 text-primary" />
                  <CardTitle className="text-2xl font-bold text-primary">الدعم الهندسي والإنشائي</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-medium-text mb-4">
                    نقدم حلول إنشاءات متكاملة للمشاريع الكبيرة والصغيرة، بدءاً من التخطيط والتصميم وصولاً إلى التنفيذ
                    والتسليم بأعلى معايير الجودة والسلامة.
                  </p>
                  <ul className="list-disc pr-6 text-medium-text space-y-2">
                    <li className="flex items-center gap-2">
                      <Building className="h-5 w-5 text-primary flex-shrink-0" />
                      <span>إدارة مشاريع الإنشاءات والإشراف الهندسي.</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <Compass className="h-5 w-5 text-primary flex-shrink-0" />
                      <span>التصميم المعماري والداخلي المبتكر.</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <Ruler className="h-5 w-5 text-primary flex-shrink-0" />
                      <span>تطوير البنية التحتية والمرافق العامة.</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              {/* Building Materials & Sourcing */}
              <Card className="bg-white text-dark-text border-light-border/30 text-right shadow-xl hover:shadow-2xl transition-shadow duration-300">
                <CardHeader className="flex flex-row-reverse items-center gap-4 pb-4">
                  <Box className="h-10 w-10 text-primary" />
                  <CardTitle className="text-2xl font-bold text-primary">مواد البناء والتوريد</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-medium-text mb-4">
                    نوفر مجموعة واسعة من مواد البناء عالية الجودة، بما في ذلك الأخشاب والمواد الخشبية المستوردة من أفضل
                    المصادر العالمية.
                  </p>
                  <ul className="list-disc pr-6 text-medium-text space-y-2">
                    <li className="flex items-center gap-2">
                      <img src="/wood-icon.png" alt="Wood Icon" className="h-5 w-5 flex-shrink-0" />
                      <span>أخشاب البناء الإنشائية عالية الجودة.</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <img src="/plywood-panel-icon.png" alt="Panel Icon" className="h-5 w-5 flex-shrink-0" />
                      <span>ألواح الخشب المضغوط (MDF، HDF، Plywood).</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <img src="/flooring-icon.png" alt="Flooring Icon" className="h-5 w-5 flex-shrink-0" />
                      <span>توريد مواد البناء العامة والتشطيبات.</span>
                    </li>
                  </ul>
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
