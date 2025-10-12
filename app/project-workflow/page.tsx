import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import {
  ClipboardList,
  MessageSquare,
  FileText,
  Calculator,
  Users,
  Hammer,
  CheckCircle,
  Clock,
  Award,
  Phone,
} from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function ProjectWorkflowPage() {
  return (
    <div className="flex flex-col min-h-[100dvh] bg-luxury-ivory text-dark-text">
      <Header />
      <main className="flex-1 pt-20">
        <section className="w-full py-12 md:py-24 lg:py-32 bg-luxury-gradient text-luxury-ivory relative overflow-hidden">
          <div className="absolute inset-0 bg-black/30"></div>
          <div className="container px-4 md:px-6 text-right relative z-10">
            <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl text-luxury-ivory mb-6 drop-shadow-lg">
              رحلة مشروعك معنا
            </h1>
            <p className="max-w-[800px] text-lg md:text-xl/relaxed lg:text-2xl/relaxed text-luxury-ivory">
              نأخذك في رحلة شاملة من الطلب حتى التنفيذ، مع ضمان الجودة والشفافية في كل خطوة
            </p>
          </div>
        </section>

        <section className="w-full py-16 md:py-24 lg:py-32 bg-luxury-ivory">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-16 text-luxury-navy">
              مراحل تنفيذ المشروع
            </h2>
            <div className="space-y-12">
              {/* Step 1: Initial Contact */}
              <div className="flex flex-col lg:flex-row items-center gap-8">
                <div className="lg:w-1/2 order-2 lg:order-1">
                  <div className="space-y-6">
                    <div className="flex items-center gap-4">
                      <div className="w-16 h-16 bg-gradient-to-br from-luxury-gold to-luxury-gold-light rounded-full flex items-center justify-center">
                        <span className="text-2xl font-bold text-luxury-navy">1</span>
                      </div>
                      <h3 className="text-2xl font-bold text-luxury-navy">التواصل الأولي</h3>
                    </div>
                    <p className="text-lg text-medium-text leading-relaxed">
                      نبدأ رحلتنا مع أول اتصال منكم. نستمع إلى احتياجاتكم وتطلعاتكم،
                      ونقدم لكم المعلومات الأساسية عن خدماتنا وخبراتنا.
                    </p>
                    <div className="space-y-3">
                      <div className="flex items-center gap-3">
                        <CheckCircle className="h-5 w-5 text-luxury-gold" />
                        <span className="text-medium-text">استقبال طلبكم</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <CheckCircle className="h-5 w-5 text-luxury-gold" />
                        <span className="text-medium-text">فهم المتطلبات</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <CheckCircle className="h-5 w-5 text-luxury-gold" />
                        <span className="text-medium-text">تقديم المشورة الأولية</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="lg:w-1/2 order-1 lg:order-2">
                  <Card className="bg-white text-dark-text border-luxury-gold/30 text-center shadow-xl hover:shadow-2xl transition-all duration-300">
                    <CardHeader className="flex flex-col items-center gap-4 pb-4">
                      <div className="w-20 h-20 bg-gradient-to-br from-luxury-gold to-luxury-gold-light rounded-full flex items-center justify-center mx-auto mb-4">
                        <MessageSquare className="h-10 w-10 text-luxury-navy" />
                      </div>
                      <CardTitle className="text-xl font-bold text-luxury-navy">التواصل الأولي</CardTitle>
                    </CardHeader>
                    <CardContent className="text-center">
                      <p className="text-medium-text mb-4">نستقبل طلبكم ونفهم احتياجاتكم</p>
                      <div className="text-sm text-medium-text space-y-2">
                        <p>• استقبال الطلب عبر الهاتف أو البريد الإلكتروني</p>
                        <p>• تحديد موعد للقاء أو مكالمة فيديو</p>
                        <p>• جمع المعلومات الأساسية</p>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>

              {/* Step 2: Consultation & Planning */}
              <div className="flex flex-col lg:flex-row-reverse items-center gap-8">
                <div className="lg:w-1/2 order-2">
                  <div className="space-y-6">
                    <div className="flex items-center gap-4">
                      <div className="w-16 h-16 bg-gradient-to-br from-luxury-gold to-luxury-gold-light rounded-full flex items-center justify-center">
                        <span className="text-2xl font-bold text-luxury-navy">2</span>
                      </div>
                      <h3 className="text-2xl font-bold text-luxury-navy">الاستشارة والتخطيط</h3>
                    </div>
                    <p className="text-lg text-medium-text leading-relaxed">
                      نجري دراسة شاملة لمشروعكم، ونضع خطة تفصيلية تشمل التصميم،
                      والمواد، والجدول الزمني، والميزانية.
                    </p>
                    <div className="space-y-3">
                      <div className="flex items-center gap-3">
                        <CheckCircle className="h-5 w-5 text-luxury-gold" />
                        <span className="text-medium-text">دراسة الموقع</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <CheckCircle className="h-5 w-5 text-luxury-gold" />
                        <span className="text-medium-text">تصميم أولي</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <CheckCircle className="h-5 w-5 text-luxury-gold" />
                        <span className="text-medium-text">تخطيط المشروع</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="lg:w-1/2 order-1">
                  <Card className="bg-white text-dark-text border-luxury-gold/30 text-center shadow-xl hover:shadow-2xl transition-all duration-300">
                    <CardHeader className="flex flex-col items-center gap-4 pb-4">
                      <div className="w-20 h-20 bg-gradient-to-br from-luxury-gold to-luxury-gold-light rounded-full flex items-center justify-center mx-auto mb-4">
                        <ClipboardList className="h-10 w-10 text-luxury-navy" />
                      </div>
                      <CardTitle className="text-xl font-bold text-luxury-navy">الاستشارة والتخطيط</CardTitle>
                    </CardHeader>
                    <CardContent className="text-center">
                      <p className="text-medium-text mb-4">نضع خطة شاملة لمشروعكم</p>
                      <div className="text-sm text-medium-text space-y-2">
                        <p>• زيارة الموقع ودراسة المتطلبات</p>
                        <p>• إعداد التصاميم الأولية</p>
                        <p>• تحديد المواد والمواصفات</p>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>

              {/* Step 3: Proposal & Contract */}
              <div className="flex flex-col lg:flex-row items-center gap-8">
                <div className="lg:w-1/2 order-2 lg:order-1">
                  <div className="space-y-6">
                    <div className="flex items-center gap-4">
                      <div className="w-16 h-16 bg-gradient-to-br from-luxury-gold to-luxury-gold-light rounded-full flex items-center justify-center">
                        <span className="text-2xl font-bold text-luxury-navy">3</span>
                      </div>
                      <h3 className="text-2xl font-bold text-luxury-navy">العرض والتوقيع</h3>
                    </div>
                    <p className="text-lg text-medium-text leading-relaxed">
                      نقدم لكم عرض سعر مفصل وشامل، مع عقد واضح يحدد جميع التفاصيل،
                      والالتزامات، والضمانات.
                    </p>
                    <div className="space-y-3">
                      <div className="flex items-center gap-3">
                        <CheckCircle className="h-5 w-5 text-luxury-gold" />
                        <span className="text-medium-text">عرض سعر مفصل</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <CheckCircle className="h-5 w-5 text-luxury-gold" />
                        <span className="text-medium-text">مراجعة العقد</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <CheckCircle className="h-5 w-5 text-luxury-gold" />
                        <span className="text-medium-text">التوقيع والبدء</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="lg:w-1/2 order-1 lg:order-2">
                  <Card className="bg-white text-dark-text border-luxury-gold/30 text-center shadow-xl hover:shadow-2xl transition-all duration-300">
                    <CardHeader className="flex flex-col items-center gap-4 pb-4">
                      <div className="w-20 h-20 bg-gradient-to-br from-luxury-gold to-luxury-gold-light rounded-full flex items-center justify-center mx-auto mb-4">
                        <FileText className="h-10 w-10 text-luxury-navy" />
                      </div>
                      <CardTitle className="text-xl font-bold text-luxury-navy">العرض والتوقيع</CardTitle>
                    </CardHeader>
                    <CardContent className="text-center">
                      <p className="text-medium-text mb-4">نوقع العقد ونبدأ العمل</p>
                      <div className="text-sm text-medium-text space-y-2">
                        <p>• عرض سعر شامل ومفصل</p>
                        <p>• مراجعة شروط العقد</p>
                        <p>• التوقيع وبدء المشروع</p>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>

              {/* Step 4: Execution */}
              <div className="flex flex-col lg:flex-row-reverse items-center gap-8">
                <div className="lg:w-1/2 order-2">
                  <div className="space-y-6">
                    <div className="flex items-center gap-4">
                      <div className="w-16 h-16 bg-gradient-to-br from-luxury-gold to-luxury-gold-light rounded-full flex items-center justify-center">
                        <span className="text-2xl font-bold text-luxury-navy">4</span>
                      </div>
                      <h3 className="text-2xl font-bold text-luxury-navy">التنفيذ والإشراف</h3>
                    </div>
                    <p className="text-lg text-medium-text leading-relaxed">
                      نبدأ تنفيذ المشروع تحت إشراف مهندسين متخصصين، مع مراقبة مستمرة
                      للجودة والالتزام بالجدول الزمني.
                    </p>
                    <div className="space-y-3">
                      <div className="flex items-center gap-3">
                        <CheckCircle className="h-5 w-5 text-luxury-gold" />
                        <span className="text-medium-text">تنفيذ الأعمال</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <CheckCircle className="h-5 w-5 text-luxury-gold" />
                        <span className="text-medium-text">إشراف مستمر</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <CheckCircle className="h-5 w-5 text-luxury-gold" />
                        <span className="text-medium-text">مراقبة الجودة</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="lg:w-1/2 order-1">
                  <Card className="bg-white text-dark-text border-luxury-gold/30 text-center shadow-xl hover:shadow-2xl transition-all duration-300">
                    <CardHeader className="flex flex-col items-center gap-4 pb-4">
                      <div className="w-20 h-20 bg-gradient-to-br from-luxury-gold to-luxury-gold-light rounded-full flex items-center justify-center mx-auto mb-4">
                        <Hammer className="h-10 w-10 text-luxury-navy" />
                      </div>
                      <CardTitle className="text-xl font-bold text-luxury-navy">التنفيذ والإشراف</CardTitle>
                    </CardHeader>
                    <CardContent className="text-center">
                      <p className="text-medium-text mb-4">ننفذ المشروع بأعلى معايير الجودة</p>
                      <div className="text-sm text-medium-text space-y-2">
                        <p>• بدء الأعمال الإنشائية</p>
                        <p>• إشراف مهندسين متخصصين</p>
                        <p>• مراقبة الجودة والمواعيد</p>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>

              {/* Step 5: Completion & Handover */}
              <div className="flex flex-col lg:flex-row items-center gap-8">
                <div className="lg:w-1/2 order-2 lg:order-1">
                  <div className="space-y-6">
                    <div className="flex items-center gap-4">
                      <div className="w-16 h-16 bg-gradient-to-br from-luxury-gold to-luxury-gold-light rounded-full flex items-center justify-center">
                        <span className="text-2xl font-bold text-luxury-navy">5</span>
                      </div>
                      <h3 className="text-2xl font-bold text-luxury-navy">التسليم والضمان</h3>
                    </div>
                    <p className="text-lg text-medium-text leading-relaxed">
                      نسلم لكم المشروع النهائي مع ضمان شامل لمدة 5 سنوات،
                      وخدمة ما بعد البيع لضمان رضاكم التام.
                    </p>
                    <div className="space-y-3">
                      <div className="flex items-center gap-3">
                        <CheckCircle className="h-5 w-5 text-luxury-gold" />
                        <span className="text-medium-text">تسليم المشروع</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <CheckCircle className="h-5 w-5 text-luxury-gold" />
                        <span className="text-medium-text">ضمان 5 سنوات</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <CheckCircle className="h-5 w-5 text-luxury-gold" />
                        <span className="text-medium-text">خدمة ما بعد البيع</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="lg:w-1/2 order-1 lg:order-2">
                  <Card className="bg-white text-dark-text border-luxury-gold/30 text-center shadow-xl hover:shadow-2xl transition-all duration-300">
                    <CardHeader className="flex flex-col items-center gap-4 pb-4">
                      <div className="w-20 h-20 bg-gradient-to-br from-luxury-gold to-luxury-gold-light rounded-full flex items-center justify-center mx-auto mb-4">
                        <Award className="h-10 w-10 text-luxury-navy" />
                      </div>
                      <CardTitle className="text-xl font-bold text-luxury-navy">التسليم والضمان</CardTitle>
                    </CardHeader>
                    <CardContent className="text-center">
                      <p className="text-medium-text mb-4">نسلم المشروع مع ضمان شامل</p>
                      <div className="text-sm text-medium-text space-y-2">
                        <p>• تسليم المشروع النهائي</p>
                        <p>• ضمان شامل 5 سنوات</p>
                        <p>• خدمة ما بعد البيع</p>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="w-full py-16 md:py-24 lg:py-32 bg-luxury-navy text-luxury-ivory">
          <div className="container px-4 md:px-6">
            <div className="text-center space-y-8">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-luxury-ivory">
                ابدأ رحلة مشروعك معنا
              </h2>
              <p className="max-w-2xl mx-auto text-lg text-luxury-ivory/80">
                تواصل معنا اليوم لتبدأ رحلة مشروعك مع فريق متخصص ومحترف
              </p>
              <div className="flex justify-center">
                <Button
                  asChild
                  className="bg-luxury-gold text-black hover:bg-luxury-gold-light px-8 py-4 text-lg font-semibold rounded-lg shadow-xl transition-all duration-300 transform hover:scale-105"
                >
                  <Link href="/contact">ابدأ مشروعك الآن</Link>
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
