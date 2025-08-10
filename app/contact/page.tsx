"use client"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Mail, Phone, MapPin } from "lucide-react"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import { useActionState } from "react"
import { submitContactForm } from "./action"

export default function ContactPage() {
  const [state, formAction, isPending] = useActionState(submitContactForm, null)
  return (
    <div className="flex flex-col min-h-[100dvh] bg-light-background text-dark-text">
      <Header />
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-br from-gradient-blue via-gradient-purple to-gradient-pink text-light-background">
          <div className="container px-4 md:px-6 text-right">
            <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl text-light-background mb-6 drop-shadow-lg">
              تواصل معنا
            </h1>
            <p className="max-w-[800px] text-lg md:text-xl/relaxed lg:text-2xl/relaxed text-white">
              نحن هنا للإجابة على استفساراتكم وتقديم الدعم اللازم. لا تترددوا في التواصل معنا عبر النموذج التالي أو
              معلومات الاتصال المباشرة.
            </p>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 lg:py-32 bg-light-background text-dark-text">
          <div className="container px-4 md:px-6 grid gap-12 lg:grid-cols-2 lg:gap-20">
            <div className="space-y-8 text-right">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-primary drop-shadow">
                معلومات الاتصال
              </h2>
              <div className="space-y-4">
                <div className="flex items-center justify-end gap-4">
                  <span className="text-lg text-medium-text">info@farvisions.net</span>
                  <Mail className="h-6 w-6 text-primary" />
                </div>
                <div className="flex items-center justify-end gap-4">
                  <span className="text-lg text-medium-text">0580122162</span>
                  <Phone className="h-6 w-6 text-primary" />
                </div>
                <div className="flex items-start justify-end gap-4">
                  <span className="text-lg text-medium-text text-right">الرياض - حي الدريهمية - شارع صيدا</span>
                  <MapPin className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                </div>
              </div>
            </div>
            <div className="space-y-8">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-primary text-right drop-shadow">
                أرسل لنا رسالة
              </h2>
              <form action={formAction} className="space-y-6">
                <div className="space-y-2 text-right">
                  <Label htmlFor="name" className="text-medium-text">
                    الاسم الكامل
                  </Label>
                  <Input
                    id="name"
                    name="name"
                    placeholder="أدخل اسمك"
                    className="bg-white border-light-border/30 text-dark-text placeholder:text-medium-text"
                  />
                </div>
                <div className="space-y-2 text-right">
                  <Label htmlFor="email" className="text-medium-text">
                    البريد الإلكتروني
                  </Label>
                  <Input
                    id="email"
                    type="email"
                    name="email"
                    placeholder="أدخل بريدك الإلكتروني"
                    className="bg-white border-light-border/30 text-dark-text placeholder:text-medium-text"
                  />
                </div>
                <div className="space-y-2 text-right">
                  <Label htmlFor="subject" className="text-medium-text">
                    الموضوع
                  </Label>
                  <Input
                    id="subject"
                    name="subject"
                    placeholder="موضوع الرسالة"
                    className="bg-white border-light-border/30 text-dark-text placeholder:text-medium-text"
                  />
                </div>
                <div className="space-y-2 text-right">
                  <Label htmlFor="message" className="text-medium-text">
                    رسالتك
                  </Label>
                  <Textarea
                    id="message"
                    name="message"
                    placeholder="اكتب رسالتك هنا..."
                    className="min-h-[120px] bg-white border-light-border/30 text-dark-text placeholder:text-medium-text"
                  />
                </div>
                <Button
                  type="submit"
                  disabled={isPending}
                  className="w-full bg-primary text-primary-foreground hover:bg-primary/90 px-8 py-3 text-lg font-semibold rounded-md shadow-lg transition-colors"
                >
                  {isPending ? "جاري الإرسال..." : "إرسال الرسالة"}
                </Button>
                {state && (
                  <div
                    className={`mt-4 text-center text-lg font-medium ${
                      state.success ? "text-green-600" : "text-red-600"
                    }`}
                    role="alert"
                  >
                    {state.message}
                  </div>
                )}
              </form>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
