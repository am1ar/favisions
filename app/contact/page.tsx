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
    <div className="flex flex-col min-h-[100dvh] bg-dark-blue-500 text-white">
      <Header />
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-br from-dark-blue-900 to-dark-blue-500 text-white">
          <div className="container px-4 md:px-6 text-right">
            <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl text-gold-500 mb-6 drop-shadow-lg">
              تواصل معنا
            </h1>
            <p className="max-w-[800px] text-lg md:text-xl/relaxed lg:text-2xl/relaxed text-gray-200">
              نحن هنا للإجابة على استفساراتكم وتقديم الدعم اللازم. لا تترددوا في التواصل معنا عبر النموذج التالي أو
              معلومات الاتصال المباشرة.
            </p>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-tl from-dark-blue-800 to-dark-blue-600 text-white">
          <div className="container px-4 md:px-6 grid gap-12 lg:grid-cols-2 lg:gap-20">
            <div className="space-y-8 text-right">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-gold-500 drop-shadow">
                معلومات الاتصال
              </h2>
              <div className="space-y-4">
                <div className="flex items-center justify-end gap-4">
                  <span className="text-lg text-gray-300">info@farvisions.net</span>
                  <Mail className="h-6 w-6 text-gold-500" />
                </div>
                <div className="flex items-center justify-end gap-4">
                  <span className="text-lg text-gray-300">0580122162</span>
                  <Phone className="h-6 w-6 text-gold-500" />
                </div>
                <div className="flex items-start justify-end gap-4">
                  <span className="text-lg text-gray-300 text-right">الرياض - حي الدريهمية - شارع صيدا</span>
                  <MapPin className="h-6 w-6 text-gold-500 flex-shrink-0 mt-1" />
                </div>
              </div>
            </div>
            <div className="space-y-8">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-gold-500 text-right drop-shadow">
                أرسل لنا رسالة
              </h2>
              <form action={formAction} className="space-y-6">
                <div className="space-y-2 text-right">
                  <Label htmlFor="name" className="text-gray-300">
                    الاسم الكامل
                  </Label>
                  <Input
                    id="name"
                    name="name"
                    placeholder="أدخل اسمك"
                    className="bg-dark-blue-700 border-gold-500/30 text-white placeholder:text-gray-500"
                  />
                </div>
                <div className="space-y-2 text-right">
                  <Label htmlFor="email" className="text-gray-300">
                    البريد الإلكتروني
                  </Label>
                  <Input
                    id="email"
                    type="email"
                    name="email"
                    placeholder="أدخل بريدك الإلكتروني"
                    className="bg-dark-blue-700 border-gold-500/30 text-white placeholder:text-gray-500"
                  />
                </div>
                <div className="space-y-2 text-right">
                  <Label htmlFor="subject" className="text-gray-300">
                    الموضوع
                  </Label>
                  <Input
                    id="subject"
                    name="subject"
                    placeholder="موضوع الرسالة"
                    className="bg-dark-blue-700 border-gold-500/30 text-white placeholder:text-gray-500"
                  />
                </div>
                <div className="space-y-2 text-right">
                  <Label htmlFor="message" className="text-gray-300">
                    رسالتك
                  </Label>
                  <Textarea
                    id="message"
                    name="message"
                    placeholder="اكتب رسالتك هنا..."
                    className="min-h-[120px] bg-dark-blue-700 border-gold-500/30 text-white placeholder:text-gray-500"
                  />
                </div>
                <Button
                  type="submit"
                  disabled={isPending}
                  className="w-full bg-gold-500 text-dark-blue-900 hover:bg-gold-600 px-8 py-3 text-lg font-semibold rounded-md shadow-lg transition-colors"
                >
                  {isPending ? "جاري الإرسال..." : "إرسال الرسالة"}
                </Button>
                {state && (
                  <div
                    className={`mt-4 text-center text-lg font-medium ${
                      state.success ? "text-green-400" : "text-red-400"
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
