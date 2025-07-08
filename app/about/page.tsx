import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Users, History, Eye, Target } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function AboutPage() {
  return (
    <div className="flex flex-col min-h-[100dvh] bg-dark-blue-500 text-white">
      <Header />
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-br from-dark-blue-900 to-dark-blue-500 text-white">
          <div className="container px-4 md:px-6 text-right">
            <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl text-gold-500 mb-6 drop-shadow-lg">
              من نحن
            </h1>
            <p className="max-w-[800px] text-lg md:text-xl/relaxed lg:text-2xl/relaxed text-gray-200">
              شركة رؤى بعيدة هي كيان رائد في المملكة العربية السعودية، يجمع بين الخبرة العميقة في قطاعات الإنشاءات، مواد
              البناء الخشبية، اللوجستيات، وحلول تقنية المعلومات. تأسست شركتنا على مبادئ الموثوقية، الابتكار، والجودة،
              بهدف تقديم حلول متكاملة ومستدامة تلبي احتياجات السوق المتطورة.
            </p>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-tl from-dark-blue-800 to-dark-blue-600 text-white">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-12 text-gold-500 drop-shadow">
              قصتنا ورؤيتنا
            </h2>
            <div className="grid gap-8 md:grid-cols-2">
              <Card className="bg-dark-blue-700 text-white border-gold-500/30 text-right shadow-xl">
                <CardHeader className="flex flex-row-reverse items-center gap-4 pb-4">
                  <History className="h-8 w-8 text-gold-500" />
                  <CardTitle className="text-2xl font-bold text-gold-500">تاريخنا</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-300">
                    منذ تأسيسها، نمت شركة رؤى بعيدة لتصبح اسماً موثوقاً به في الصناعات التي نخدمها. بدأنا برؤية واضحة
                    لتقديم قيمة استثنائية، وقد تطورنا باستمرار لدمج أحدث الممارسات والتقنيات في عملياتنا.
                  </p>
                </CardContent>
              </Card>
              <Card className="bg-dark-blue-700 text-white border-gold-500/30 text-right shadow-xl">
                <CardHeader className="flex flex-row-reverse items-center gap-4 pb-4">
                  <Eye className="h-8 w-8 text-gold-500" />
                  <CardTitle className="text-2xl font-bold text-gold-500">رؤيتنا</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-300">
                    أن نكون الشريك المفضل للشركات والمؤسسات التي تسعى للتميز في الإنشاءات، مواد البناء، اللوجستيات،
                    وحلول تقنية المعلومات، من خلال الابتكار المستمر والالتزام بأعلى معايير الجودة.
                  </p>
                </CardContent>
              </Card>
              <Card className="bg-dark-blue-700 text-white border-gold-500/30 text-right shadow-xl">
                <CardHeader className="flex flex-row-reverse items-center gap-4 pb-4">
                  <Target className="h-8 w-8 text-gold-500" />
                  <CardTitle className="text-2xl font-bold text-gold-500">مهمتنا</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-300">
                    تقديم حلول متكاملة ومبتكرة تتجاوز توقعات عملائنا، مع التركيز على الكفاءة، الاستدامة، وبناء علاقات
                    طويلة الأمد مبنية على الثقة المتبادلة.
                  </p>
                </CardContent>
              </Card>
              <Card className="bg-dark-blue-700 text-white border-gold-500/30 text-right shadow-xl">
                <CardHeader className="flex flex-row-reverse items-center gap-4 pb-4">
                  <Users className="h-8 w-8 text-gold-500" />
                  <CardTitle className="text-2xl font-bold text-gold-500">فريقنا</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-300">
                    يتكون فريقنا من خبراء ومتخصصين ذوي كفاءة عالية وشغف بالتميز، ملتزمون بتحقيق أهداف عملائنا وتقديم
                    أفضل النتائج.
                  </p>
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
