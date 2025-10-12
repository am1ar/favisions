"use client"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Phone, Mail, MapPin, Clock, Send } from "lucide-react"
import { submitContactForm } from "./action"

export default function ContactPage() {
  return (
    <div className="flex flex-col min-h-[100dvh] bg-luxury-ivory text-dark-text">
      <Header />
      <main className="flex-1 pt-20">
        <section className="w-full py-12 md:py-24 lg:py-32 bg-luxury-gradient text-luxury-ivory relative overflow-hidden">
          <div className="absolute inset-0 bg-black/30"></div>
          <div className="container px-4 md:px-6 text-right relative z-10">
            <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl text-luxury-ivory mb-6 drop-shadow-lg">
              تواصل معنا
            </h1>
            <p className="max-w-[800px] text-lg md:text-xl/relaxed lg:text-2xl/relaxed text-luxury-ivory">
              نحن هنا للإجابة على استفساراتكم وتقديم الدعم اللازم. لا تترددوا في التواصل معنا عبر النموذج التالي أو معلومات الاتصال المباشرة.
            </p>
          </div>
        </section>

        <section className="w-full py-16 md:py-24 lg:py-32 bg-luxury-ivory">
          <div className="container px-4 md:px-6">
            <div className="grid gap-12 lg:grid-cols-2">
              {/* Contact Form */}
              <div className="space-y-8">
                <div>
                  <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-luxury-navy mb-4">
                    أرسل لنا رسالة
                  </h2>
                  <p className="text-lg text-medium-text">
                    املأ النموذج التالي وسنقوم بالرد عليكم في أقرب وقت ممكن
                  </p>
                </div>

                <form action={submitContactForm} className="space-y-6">
                  <div className="grid gap-4 md:grid-cols-2">
                    <div className="space-y-2">
                      <Label htmlFor="firstName" className="text-luxury-navy font-semibold">
                        الاسم الأول
                      </Label>
                      <Input
                        id="firstName"
                        name="firstName"
                        type="text"
                        placeholder="أدخل اسمك الأول"
                        required
                        className="border-luxury-gold/30 focus:border-luxury-gold focus:ring-luxury-gold"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="lastName" className="text-luxury-navy font-semibold">
                        اسم العائلة
                      </Label>
                      <Input
                        id="lastName"
                        name="lastName"
                        type="text"
                        placeholder="أدخل اسم العائلة"
                        required
                        className="border-luxury-gold/30 focus:border-luxury-gold focus:ring-luxury-gold"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email" className="text-luxury-navy font-semibold">
                      البريد الإلكتروني
                    </Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="أدخل بريدك الإلكتروني"
                      required
                      className="border-luxury-gold/30 focus:border-luxury-gold focus:ring-luxury-gold"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="phone" className="text-luxury-navy font-semibold">
                      رقم الهاتف
                    </Label>
                    <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      placeholder="أدخل رقم هاتفك"
                      className="border-luxury-gold/30 focus:border-luxury-gold focus:ring-luxury-gold"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="subject" className="text-luxury-navy font-semibold">
                      الموضوع
                    </Label>
                    <Input
                      id="subject"
                      name="subject"
                      type="text"
                      placeholder="أدخل موضوع الرسالة"
                      required
                      className="border-luxury-gold/30 focus:border-luxury-gold focus:ring-luxury-gold"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message" className="text-luxury-navy font-semibold">
                      الرسالة
                    </Label>
                    <Textarea
                      id="message"
                      name="message"
                      placeholder="اكتب رسالتك هنا..."
                      rows={5}
                      required
                      className="border-luxury-gold/30 focus:border-luxury-gold focus:ring-luxury-gold resize-none"
                    />
                  </div>

                  <Button
                    type="submit"
                    className="w-full bg-luxury-gold text-black hover:bg-luxury-gold-light px-8 py-4 text-lg font-semibold rounded-lg shadow-xl transition-all duration-300 transform hover:scale-105"
                  >
                    <Send className="h-5 w-5 ml-2" />
                    إرسال الرسالة
                  </Button>
                </form>
              </div>

              {/* Contact Information */}
              <div className="space-y-8">
                <div>
                  <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-luxury-navy mb-4">
                    معلومات الاتصال
                  </h2>
                  <p className="text-lg text-medium-text">
                    يمكنكم التواصل معنا عبر الطرق التالية
                  </p>
                </div>

                <div className="space-y-6">
                  <Card className="bg-white text-dark-text border-luxury-gold/30 shadow-xl hover:shadow-2xl transition-all duration-300">
                    <CardHeader className="flex flex-row-reverse items-center gap-4 pb-4">
                      <div className="w-16 h-16 bg-gradient-to-br from-luxury-gold to-luxury-gold-light rounded-full flex items-center justify-center">
                        <Phone className="h-8 w-8 text-luxury-navy" />
                      </div>
                      <CardTitle className="text-xl font-bold text-luxury-navy">الهاتف</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-medium-text text-lg font-semibold">0580122162</p>
                      <p className="text-medium-text/80 text-sm mt-2">متاح من الأحد إلى الخميس: 8:00 ص - 6:00 م</p>
                    </CardContent>
                  </Card>

                  <Card className="bg-white text-dark-text border-luxury-gold/30 shadow-xl hover:shadow-2xl transition-all duration-300">
                    <CardHeader className="flex flex-row-reverse items-center gap-4 pb-4">
                      <div className="w-16 h-16 bg-gradient-to-br from-luxury-gold to-luxury-gold-light rounded-full flex items-center justify-center">
                        <Mail className="h-8 w-8 text-luxury-navy" />
                      </div>
                      <CardTitle className="text-xl font-bold text-luxury-navy">البريد الإلكتروني</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-medium-text text-lg font-semibold">info@farvisions.net</p>
                      <p className="text-medium-text/80 text-sm mt-2">سنقوم بالرد خلال 24 ساعة</p>
                    </CardContent>
                  </Card>

                  <Card className="bg-white text-dark-text border-luxury-gold/30 shadow-xl hover:shadow-2xl transition-all duration-300">
                    <CardHeader className="flex flex-row-reverse items-center gap-4 pb-4">
                      <div className="w-16 h-16 bg-gradient-to-br from-luxury-gold to-luxury-gold-light rounded-full flex items-center justify-center">
                        <MapPin className="h-8 w-8 text-luxury-navy" />
                      </div>
                      <CardTitle className="text-xl font-bold text-luxury-navy">العنوان</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-medium-text text-lg font-semibold">الرياض، المملكة العربية السعودية</p>
                      <p className="text-medium-text/80 text-sm mt-2">يمكننا زيارة موقعكم عند الحاجة</p>
                    </CardContent>
                  </Card>

                  <Card className="bg-white text-dark-text border-luxury-gold/30 shadow-xl hover:shadow-2xl transition-all duration-300">
                    <CardHeader className="flex flex-row-reverse items-center gap-4 pb-4">
                      <div className="w-16 h-16 bg-gradient-to-br from-luxury-gold to-luxury-gold-light rounded-full flex items-center justify-center">
                        <Clock className="h-8 w-8 text-luxury-navy" />
                      </div>
                      <CardTitle className="text-xl font-bold text-luxury-navy">ساعات العمل</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-2 text-medium-text">
                        <p><strong>الأحد - الخميس:</strong> 8:00 ص - 6:00 م</p>
                        <p><strong>السبت:</strong> 9:00 ص - 1:00 م</p>
                        <p><strong>الجمعة:</strong> مغلق</p>
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
                ابدأ مشروعك معنا اليوم
              </h2>
              <p className="max-w-2xl mx-auto text-lg text-luxury-ivory/80">
                لا تنتظر أكثر من ذلك. تواصل معنا الآن واحصل على استشارة مجانية لمشروعك
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  asChild
                  size="lg"
                  className="bg-luxury-gold text-black hover:bg-luxury-gold-light px-8 py-4 text-lg font-semibold rounded-lg shadow-xl transition-all duration-300 transform hover:scale-105"
                >
                  <a href="tel:0580122162">
                    <Phone className="h-5 w-5 ml-2" />
                    اتصل بنا الآن
                  </a>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  size="lg"
                  className="border-2 border-luxury-gold text-luxury-gold hover:bg-luxury-gold hover:text-luxury-navy px-8 py-4 text-lg font-semibold rounded-lg transition-all duration-300"
                >
                  <a href="mailto:info@farvisions.net">
                    <Mail className="h-5 w-5 ml-2" />
                    أرسل بريد إلكتروني
                  </a>
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
