import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Handshake, Lightbulb, Award, Building, Box, Laptop, Truck, Compass } from "lucide-react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

export default function LandingPage() {
  return (
    <div className="flex flex-col min-h-[100dvh] bg-light-background text-dark-text">
      <Header />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48 bg-gradient-to-br from-gradient-blue via-gradient-purple to-gradient-pink text-light-background">
          <div className="container px-4 md:px-6">
            {/* Text Content */}
            <div className="flex flex-col space-y-6 text-right justify-center items-center">
              <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl/none text-light-background drop-shadow-lg text-center">
                شركة رؤى بعيدة
              </h1>
              <h2 className="text-2xl font-semibold text-white mb-4">رؤية متقدمة، حلول متكاملة</h2>
              <p className="max-w-[600px] md:text-xl/relaxed lg:text-2xl/relaxed text-white text-center text-lg">
                شركة رؤى بعيدة هي شريكك الاستراتيجي الموثوق في المملكة العربية السعودية، نتخصص في تقديم حلول متكاملة
                ومبتكرة تشمل الإنشاءات والتصميم المعماري ومواد البناء واللوجستيات وحلول تقنية المعلومات. نلتزم بتقديم
                أعلى معايير الجودة والابتكار في كل مشروع، مع التركيز على تحقيق رؤية 2030 للمملكة من خلال حلول مستدامة
                وتقنيات متطورة تلبي احتياجات المستقبل.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-end">
                <Button
                  asChild
                  className="bg-primary text-primary-foreground hover:bg-primary/90 px-8 py-3 text-lg font-semibold rounded-md shadow-lg transition-colors"
                >
                  <Link href="/contact">تواصل معنا</Link>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  className="border-primary text-primary hover:bg-primary hover:text-primary-foreground px-8 py-3 text-lg font-semibold rounded-md transition-colors bg-transparent"
                >
                  <Link href="/services">اكتشف خدماتنا</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Core Values Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-light-background text-dark-text">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-12 text-primary drop-shadow">
              قيمنا الأساسية
            </h2>
            <div className="grid gap-8 md:grid-cols-3">
              <Card className="bg-white text-dark-text border-light-border/30 text-right shadow-xl hover:shadow-2xl transition-shadow duration-300">
                <CardHeader className="flex flex-row-reverse items-center gap-4 pb-4 justify-end">
                  <Handshake className="h-8 w-8 text-primary" />
                  <CardTitle className="text-2xl font-bold text-primary">الموثوقية</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-medium-text">
                    نحن نبني الثقة من خلال الالتزام بوعودنا وتقديم حلول موثوقة تتجاوز توقعات عملائنا في جميع المجالات.
                  </p>
                </CardContent>
              </Card>
              <Card className="bg-white text-dark-text border-light-border/30 text-right shadow-xl hover:shadow-2xl transition-shadow duration-300">
                <CardHeader className="flex flex-row-reverse items-center gap-4 pb-4 justify-end">
                  <Lightbulb className="h-8 w-8 text-primary" />
                  <CardTitle className="text-2xl font-bold text-primary">الابتكار</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-medium-text">
                    نسعى باستمرار لتبني أحدث التقنيات والأساليب المتطورة لتقديم حلول مبتكرة وفعالة تواكب التطور التقني.
                  </p>
                </CardContent>
              </Card>
              <Card className="bg-white text-dark-text border-light-border/30 text-right shadow-xl hover:shadow-2xl transition-shadow duration-300">
                <CardHeader className="flex flex-row-reverse gap-4 pb-4 text-center items-center justify-end">
                  <Award className="h-8 w-8 text-primary" />
                  <CardTitle className="text-2xl font-bold text-primary text-right">التميز</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-medium-text">
                    نلتزم بأعلى معايير الجودة والتميز في جميع خدماتنا ومنتجاتنا لضمان تحقيق النتائج الاستثنائية.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Services Overview Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-br from-gradient-blue via-gradient-purple to-gradient-pink text-light-background">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-12 text-light-background drop-shadow">
              خدماتنا المتخصصة
            </h2>
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-5">
              <Card className="bg-white text-dark-text border-light-border/30 text-center shadow-xl hover:shadow-2xl transition-shadow duration-300">
                <CardHeader className="flex flex-col items-center gap-4 pb-4">
                  <Building className="h-10 w-10 text-primary" />
                  <CardTitle className="text-xl font-bold text-primary">الإنشاءات</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-medium-text">
                    حلول بناء متكاملة للمشاريع السكنية والتجارية والصناعية بأعلى معايير الجودة.
                  </p>
                </CardContent>
              </Card>
              <Card className="bg-white text-dark-text border-light-border/30 text-center shadow-xl hover:shadow-2xl transition-shadow duration-300">
                <CardHeader className="flex flex-col items-center gap-4 pb-4">
                  <Compass className="h-10 w-10 text-primary" />
                  <CardTitle className="text-xl font-bold text-primary">التصميم المعماري</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-medium-text">تصاميم معمارية مبتكرة تجمع بين الجمال والوظائف العملية والاستدامة.</p>
                </CardContent>
              </Card>
              <Card className="bg-white text-dark-text border-light-border/30 text-center shadow-xl hover:shadow-2xl transition-shadow duration-300">
                <CardHeader className="flex flex-col items-center gap-4 pb-4">
                  <Box className="h-10 w-10 text-primary" />
                  <CardTitle className="text-xl font-bold text-primary">مواد البناء</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-medium-text">توفير أجود أنواع مواد البناء والأخشاب عالية الجودة لمشاريعك.</p>
                </CardContent>
              </Card>
              <Card className="bg-white text-dark-text border-light-border/30 text-center shadow-xl hover:shadow-2xl transition-shadow duration-300">
                <CardHeader className="flex flex-col items-center gap-4 pb-4">
                  <Truck className="h-10 w-10 text-primary" />
                  <CardTitle className="text-xl font-bold text-primary">اللوجستيات</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-medium-text">خدمات لوجستية متطورة لضمان تسليم المواد والمعدات في الوقت المحدد.</p>
                </CardContent>
              </Card>
              <Card className="bg-white text-dark-text border-light-border/30 text-center shadow-xl hover:shadow-2xl transition-shadow duration-300">
                <CardHeader className="flex flex-col items-center gap-4 pb-4">
                  <Laptop className="h-10 w-10 text-primary" />
                  <CardTitle className="text-xl font-bold text-primary">حلول تقنية المعلومات</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-medium-text">تطوير حلول برمجية متقدمة وبنية تحتية تقنية لدعم نمو أعمالك.</p>
                </CardContent>
              </Card>
            </div>
            <div className="flex justify-center mt-12">
              <Button
                asChild
                className="bg-primary text-primary-foreground hover:bg-primary/90 px-8 py-3 text-lg font-semibold rounded-md shadow-lg transition-colors"
              >
                <Link href="/services">استكشف جميع خدماتنا</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
