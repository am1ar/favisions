import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Users, History, Eye, Target } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function AboutPage() {
  return (
    <div className="flex flex-col min-h-[100dvh] bg-light-background text-dark-text">
      <Header />
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-br from-gradient-blue via-gradient-purple to-gradient-pink text-light-background">
          <div className="container px-4 md:px-6 text-right">
            <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl text-light-background mb-6 drop-shadow-lg">
              من نحن
            </h1>
            <p className="max-w-[800px] text-lg md:text-xl/relaxed lg:text-2xl/relaxed text-white">
              شركة رؤى بعيدة هي كيان رائد في المملكة العربية السعودية، يجمع بين الخبرة العميقة في قطاعات الإنشاءات، مواد
              البناء الخشبية، اللوجستيات، وحلول تقنية المعلومات. تأسست شركتنا على مبادئ الموثوقية، الابتكار، والجودة،
              بهدف تقديم حلول متكاملة ومستدامة تلبي احتياجات السوق المتطورة.
            </p>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 lg:py-32 bg-light-background text-dark-text">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-12 text-primary drop-shadow">
              قصتنا ورؤيتنا
            </h2>
            <div className="grid gap-8 md:grid-cols-2">
              <Card className="bg-white text-dark-text border-light-border/30 text-right shadow-xl">
                <CardHeader className="flex flex-row-reverse items-center gap-4 pb-4">
                  <History className="h-8 w-8 text-primary" />
                  <CardTitle className="text-2xl font-bold text-primary">تاريخنا</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-medium-text">
                    منذ تأسيسها، نمت شركة رؤى بعيدة لتصبح اسماً موثوقاً به في الصناعات التي نخدمها. بدأنا برؤية واضحة
                    لتقديم قيمة استثنائية، وقد تطورنا باستمرار لدمج أحدث الممارسات والتقنيات في عملياتنا.
                  </p>
                </CardContent>
              </Card>
              <Card className="bg-white text-dark-text border-light-border/30 text-right shadow-xl">
                <CardHeader className="flex flex-row-reverse items-center gap-4 pb-4">
                  <Eye className="h-8 w-8 text-primary" />
                  <CardTitle className="text-2xl font-bold text-primary">رؤيتنا</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-medium-text">
                    أن نكون الشريك المفضل للشركات والمؤسسات التي تسعى للتميز في الإنشاءات، مواد البناء، اللوجستيات،
                    وحلول تقنية المعلومات، من خلال الابتكار المستمر والالتزام بأعلى معايير الجودة.
                  </p>
                </CardContent>
              </Card>
              <Card className="bg-white text-dark-text border-light-border/30 text-right shadow-xl">
                <CardHeader className="flex flex-row-reverse items-center gap-4 pb-4">
                  <Target className="h-8 w-8 text-primary" />
                  <CardTitle className="text-2xl font-bold text-primary">مهمتنا</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-medium-text">
                    تقديم حلول متكاملة ومبتكرة تتجاوز توقعات عملائنا، مع التركيز على الكفاءة، الاستدامة، وبناء علاقات
                    طويلة الأمد مبنية على الثقة المتبادلة.
                  </p>
                </CardContent>
              </Card>
              <Card className="bg-white text-dark-text border-light-border/30 text-right shadow-xl">
                <CardHeader className="flex flex-row-reverse items-center gap-4 pb-4">
                  <Users className="h-8 w-8 text-primary" />
                  <CardTitle className="text-2xl font-bold text-primary">فريقنا</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-medium-text">
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
