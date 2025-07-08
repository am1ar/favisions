import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Building, Box, Laptop, Wrench, HardHat, Factory, Truck, Server, Compass, Ruler, PenTool } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function ServicesPage() {
  return (
    <div className="flex flex-col min-h-[100dvh] bg-dark-blue-500 text-white">
      <Header />
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-br from-dark-blue-900 to-dark-blue-500 text-white">
          <div className="container px-4 md:px-6 text-right">
            <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl text-gold-500 mb-6 drop-shadow-lg">
              خدماتنا المتخصصة
            </h1>
            <p className="max-w-[800px] text-lg md:text-xl/relaxed lg:text-2xl/relaxed text-gray-200">
              نقدم مجموعة شاملة من الخدمات المتخصصة والمتكاملة التي تلبي احتياجات عملائنا في مختلف القطاعات، مع التركيز
              على الجودة والابتكار والاستدامة.
            </p>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-tl from-dark-blue-800 to-dark-blue-600 text-white">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-12 text-gold-500 drop-shadow">
              تفاصيل خدماتنا
            </h2>
            <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2">
              {/* Construction */}
              <Card className="bg-dark-blue-700 text-white border-gold-500/30 text-right shadow-xl hover:shadow-2xl transition-shadow duration-300">
                <CardHeader className="flex flex-row-reverse items-center gap-4 pb-4">
                  <Building className="h-10 w-10 text-gold-500" />
                  <CardTitle className="text-2xl font-bold text-gold-500">الإنشاءات</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-300 mb-4">
                    نقدم حلول إنشاءات متكاملة للمشاريع الكبيرة والصغيرة، بدءاً من التخطيط والتصميم وصولاً إلى التنفيذ
                    والتسليم بأعلى معايير الجودة والسلامة.
                  </p>
                  <ul className="list-disc pr-6 text-gray-300 space-y-2">
                    <li className="flex items-center gap-2">
                      <HardHat className="h-5 w-5 text-gold-400 flex-shrink-0" />
                      <span>بناء وتطوير المباني السكنية والتجارية.</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <Factory className="h-5 w-5 text-gold-400 flex-shrink-0" />
                      <span>إنشاء وتجهيز المنشآت الصناعية والمستودعات.</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <Wrench className="h-5 w-5 text-gold-400 flex-shrink-0" />
                      <span>أعمال البنية التحتية والمرافق العامة.</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              {/* Architectural Design */}
              <Card className="bg-dark-blue-700 text-white border-gold-500/30 text-right shadow-xl hover:shadow-2xl transition-shadow duration-300">
                <CardHeader className="flex flex-row-reverse items-center gap-4 pb-4">
                  <Compass className="h-10 w-10 text-gold-500" />
                  <CardTitle className="text-2xl font-bold text-gold-500">التصميم المعماري</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-300 mb-4">
                    نقدم خدمات تصميم معماري متطورة تجمع بين الإبداع والوظائف العملية، مع التركيز على الاستدامة والكفاءة
                    في استخدام الطاقة.
                  </p>
                  <ul className="list-disc pr-6 text-gray-300 space-y-2">
                    <li className="flex items-center gap-2">
                      <PenTool className="h-5 w-5 text-gold-400 flex-shrink-0" />
                      <span>التصميم المعماري للمباني السكنية والتجارية.</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <Ruler className="h-5 w-5 text-gold-400 flex-shrink-0" />
                      <span>التصميم الداخلي والديكور المعماري.</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <Compass className="h-5 w-5 text-gold-400 flex-shrink-0" />
                      <span>التخطيط العمراني والتصميم المستدام.</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              {/* Building Materials */}
              <Card className="bg-dark-blue-700 text-white border-gold-500/30 text-right shadow-xl hover:shadow-2xl transition-shadow duration-300">
                <CardHeader className="flex flex-row-reverse items-center gap-4 pb-4">
                  <Box className="h-10 w-10 text-gold-500" />
                  <CardTitle className="text-2xl font-bold text-gold-500">مواد البناء</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-300 mb-4">
                    نوفر مجموعة واسعة من مواد البناء عالية الجودة، بما في ذلك الأخشاب والمواد الخشبية المستوردة من أفضل
                    المصادر العالمية.
                  </p>
                  <ul className="list-disc pr-6 text-gray-300 space-y-2">
                    <li className="flex items-center gap-2">
                      <img
                        src="/placeholder.svg?height=20&width=20"
                        alt="Wood Icon"
                        className="h-5 w-5 flex-shrink-0"
                      />
                      <span>أخشاب البناء الإنشائية عالية الجودة.</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <img
                        src="/placeholder.svg?height=20&width=20"
                        alt="Panel Icon"
                        className="h-5 w-5 flex-shrink-0"
                      />
                      <span>ألواح الخشب المضغوط (MDF، HDF، Plywood).</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <img
                        src="/placeholder.svg?height=20&width=20"
                        alt="Flooring Icon"
                        className="h-5 w-5 flex-shrink-0"
                      />
                      <span>أرضيات خشبية وأبواب ونوافذ متميزة.</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              {/* Logistics */}
              <Card className="bg-dark-blue-700 text-white border-gold-500/30 text-right shadow-xl hover:shadow-2xl transition-shadow duration-300">
                <CardHeader className="flex flex-row-reverse items-center gap-4 pb-4">
                  <Truck className="h-10 w-10 text-gold-500" />
                  <CardTitle className="text-2xl font-bold text-gold-500">اللوجستيات</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-300 mb-4">
                    حلول لوجستية متكاملة ومتطورة تضمن سلاسة وكفاءة سلسلة التوريد الخاصة بك، من التخزين إلى التوزيع
                    والتسليم.
                  </p>
                  <ul className="list-disc pr-6 text-gray-300 space-y-2">
                    <li className="flex items-center gap-2">
                      <Truck className="h-5 w-5 text-gold-400 flex-shrink-0" />
                      <span>خدمات النقل البري والبحري والجوي.</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <img
                        src="/placeholder.svg?height=20&width=20"
                        alt="Warehouse Icon"
                        className="h-5 w-5 flex-shrink-0"
                      />
                      <span>حلول التخزين وإدارة المستودعات المتقدمة.</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <img
                        src="/placeholder.svg?height=20&width=20"
                        alt="Supply Chain Icon"
                        className="h-5 w-5 flex-shrink-0"
                      />
                      <span>إدارة سلسلة التوريد المتكاملة والذكية.</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              {/* IT Solutions */}
              <Card className="bg-dark-blue-700 text-white border-gold-500/30 text-right shadow-xl hover:shadow-2xl transition-shadow duration-300 md:col-span-2">
                <CardHeader className="flex flex-row-reverse items-center gap-4 pb-4">
                  <Laptop className="h-10 w-10 text-gold-500" />
                  <CardTitle className="text-2xl font-bold text-gold-500">حلول تقنية المعلومات</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-300 mb-4">
                    نقدم أحدث حلول تقنية المعلومات والتحول الرقمي لدعم نمو أعمالك وتحسين كفاءتها التشغيلية ومواكبة
                    التطور التقني.
                  </p>
                  <div className="grid md:grid-cols-2 gap-4">
                    <ul className="list-disc pr-6 text-gray-300 space-y-2">
                      <li className="flex items-center gap-2">
                        <Server className="h-5 w-5 text-gold-400 flex-shrink-0" />
                        <span>تطوير البرمجيات المخصصة وتطبيقات الويب.</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <img
                          src="/placeholder.svg?height=20&width=20"
                          alt="Network Icon"
                          className="h-5 w-5 flex-shrink-0"
                        />
                        <span>حلول البنية التحتية للشبكات والأمن السيبراني.</span>
                      </li>
                    </ul>
                    <ul className="list-disc pr-6 text-gray-300 space-y-2">
                      <li className="flex items-center gap-2">
                        <img
                          src="/placeholder.svg?height=20&width=20"
                          alt="Cloud Icon"
                          className="h-5 w-5 flex-shrink-0"
                        />
                        <span>خدمات الاستشارات التقنية والحوسبة السحابية.</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <img
                          src="/placeholder.svg?height=20&width=20"
                          alt="AI Icon"
                          className="h-5 w-5 flex-shrink-0"
                        />
                        <span>حلول الذكاء الاصطناعي والتحليلات المتقدمة.</span>
                      </li>
                    </ul>
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
