import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Handshake, Lightbulb, Award, Building, Box, Laptop } from "lucide-react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

export default function LandingPage() {
  return (
    <div className="flex flex-col min-h-[100dvh] bg-dark-blue-500 text-white">
      <Header />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48 bg-gradient-to-br from-dark-blue-900 to-dark-blue-500 text-white">
          <div className="container px-4 md:px-6 text-right">
            <div className="flex flex-col space-y-6 items-center">
              <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl/none text-gold-500 drop-shadow-lg">
                حيث التميز هو المعيار
              </h1>
              <p className="max-w-[800px] text-lg md:text-xl/relaxed lg:text-2xl/relaxed text-gray-200 text-center">
                شركة رؤى بعيدة هي شريكك الموثوق في الإنشاءات، مواد البناء الخشبية، اللوجستيات، وحلول تقنية المعلومات في
                المملكة العربية السعودية. نلتزم بتقديم أعلى مستويات الجودة والابتكار في كل مشروع.
              </p>
              <Button
                asChild
                className="bg-gold-500 text-dark-blue-900 hover:bg-gold-600 px-8 py-3 text-lg font-semibold rounded-md shadow-lg transition-colors"
              >
                <Link href="/contact">تواصل معنا</Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Core Values Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-tl from-dark-blue-800 to-dark-blue-600 text-white">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-12 text-gold-500 drop-shadow">
              قيمنا الأساسية
            </h2>
            <div className="grid gap-8 md:grid-cols-3">
              <Card className="bg-dark-blue-700 text-white border-gold-500/30 text-right shadow-xl hover:shadow-2xl transition-shadow duration-300">
                <CardHeader className="flex flex-row-reverse items-center gap-4 pb-4 justify-end">
                  <Handshake className="h-8 w-8 text-gold-500" />
                  <CardTitle className="text-2xl font-bold text-gold-500">الموثوقية</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-300">
                    نحن نبني الثقة من خلال الالتزام بوعودنا وتقديم حلول موثوقة تتجاوز توقعات عملائنا.
                  </p>
                </CardContent>
              </Card>
              <Card className="bg-dark-blue-700 text-white border-gold-500/30 text-right shadow-xl hover:shadow-2xl transition-shadow duration-300">
                <CardHeader className="flex flex-row-reverse items-center gap-4 pb-4 justify-end">
                  <Lightbulb className="h-8 w-8 text-gold-500" />
                  <CardTitle className="text-2xl font-bold text-gold-500">الابتكار</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-300">
                    نسعى باستمرار لتبني أحدث التقنيات والأساليب لتقديم حلول مبتكرة وفعالة.
                  </p>
                </CardContent>
              </Card>
              <Card className="bg-dark-blue-700 text-white border-gold-500/30 text-right shadow-xl hover:shadow-2xl transition-shadow duration-300">
                <CardHeader className="flex flex-row-reverse gap-4 pb-4 text-center items-center justify-end">
                  <Award className="h-8 w-8 text-gold-500" />
                  <CardTitle className="text-2xl font-bold text-gold-500 text-right">الجودة</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-300">
                    نلتزم بأعلى معايير الجودة في جميع خدماتنا ومنتجاتنا لضمان رضا العملاء التام.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Services Overview Section (brief) */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-br from-dark-blue-900 to-dark-blue-500 text-white">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-12 text-gold-500 drop-shadow">
              خدماتنا الرئيسية
            </h2>
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
              <Card className="bg-dark-blue-700 text-white border-gold-500/30 text-center shadow-xl hover:shadow-2xl transition-shadow duration-300">
                <CardHeader className="flex flex-col items-center gap-4 pb-4">
                  <Building className="h-10 w-10 text-gold-500" />
                  <CardTitle className="text-xl font-bold text-gold-500">الإنشاءات</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-300">حلول بناء متكاملة للمشاريع السكنية والتجارية والصناعية.</p>
                </CardContent>
              </Card>
              <Card className="bg-dark-blue-700 text-white border-gold-500/30 text-center shadow-xl hover:shadow-2xl transition-shadow duration-300">
                <CardHeader className="flex flex-col items-center gap-4 pb-4">
                  <Box className="h-10 w-10 text-gold-500" />
                  <CardTitle className="text-xl font-bold text-gold-500">مواد البناء الخشبية</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-300">توفير أجود أنواع الأخشاب ومواد البناء الخشبية لمشاريعك.</p>
                </CardContent>
              </Card>
              <Card className="bg-dark-blue-700 text-white border-gold-500/30 text-center shadow-xl hover:shadow-2xl transition-shadow duration-300">
                <CardHeader className="flex flex-col items-center gap-4 pb-4">
                  <Handshake className="h-10 w-10 text-gold-500" />
                  <CardTitle className="text-xl font-bold text-gold-500">اللوجستيات</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-300">خدمات لوجستية فعالة لضمان تسليم المواد والمعدات في الوقت المحدد.</p>
                </CardContent>
              </Card>
              <Card className="bg-dark-blue-700 text-white border-gold-500/30 text-center shadow-xl hover:shadow-2xl transition-shadow duration-300">
                <CardHeader className="flex flex-col items-center gap-4 pb-4">
                  <Laptop className="h-10 w-10 text-gold-500" />
                  <CardTitle className="text-xl font-bold text-gold-500">حلول تقنية المعلومات</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-300">تطوير حلول برمجية وبنية تحتية تقنية لدعم أعمالك.</p>
                </CardContent>
              </Card>
            </div>
            <div className="flex justify-center mt-12">
              <Button
                asChild
                className="bg-gold-500 text-dark-blue-900 hover:bg-gold-600 px-8 py-3 text-lg font-semibold rounded-md shadow-lg transition-colors"
              >
                <Link href="/services">اكتشف المزيد من خدماتنا</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
