import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

export default function TermsOfServicePage() {
  return (
    <div className="flex flex-col min-h-[100dvh] bg-light-background text-dark-text">
      <Header />
      <main className="flex-1 container px-4 md:px-6 py-12 md:py-24 lg:py-32 text-right">
        <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl text-primary mb-8 drop-shadow-lg">
          شروط الخدمة
        </h1>
        <div className="space-y-8 text-medium-text text-lg">
          <section>
            <h2 className="text-3xl font-semibold text-primary mb-4">1. مقدمة</h2>
            <p className="mb-4">
              أهلاً بكم في شركة رؤى بعيدة. تحكم شروط الخدمة هذه استخدامك لموقعنا الإلكتروني وخدماتنا. باستخدامك لموقعنا،
              فإنك توافق على الالتزام بهذه الشروط والأحكام. إذا كنت لا توافق على أي جزء من هذه الشروط، يرجى عدم استخدام
              خدماتنا.
            </p>
          </section>

          <section>
            <h2 className="text-3xl font-semibold text-primary mb-4">2. قبول الشروط</h2>
            <p className="mb-4">
              باستخدامك لخدماتنا، فإنك تؤكد أنك قرأت وفهمت ووافقت على الالتزام بهذه الشروط، بما في ذلك أي تعديلات قد
              نقوم بها من وقت لآخر.
            </p>
          </section>

          <section>
            <h2 className="text-3xl font-semibold text-primary mb-4">3. التزامات المستخدم</h2>
            <ul className="list-disc pr-6 space-y-2">
              <li>الالتزام بالقوانين واللوائح المعمول بها في المملكة العربية السعودية.</li>
              <li>عدم استخدام الموقع لأي أنشطة غير قانونية أو غير مصرح بها.</li>
              <li>تقديم معلومات دقيقة وصحيحة عند استخدام خدماتنا، مثل تعبئة نموذج الاتصال.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-3xl font-semibold text-primary mb-4">4. الملكية الفكرية</h2>
            <p className="mb-4">
              جميع المحتويات على هذا الموقع، بما في ذلك النصوص والرسومات والشعارات والصور، هي ملك لشركة رؤى بعيدة أو
              مرخصة لها، ومحمية بموجب قوانين الملكية الفكرية.
            </p>
          </section>

          <section>
            <h2 className="text-3xl font-semibold text-primary mb-4">5. حدود المسؤولية</h2>
            <p className="mb-4">
              لن تكون شركة رؤى بعيدة مسؤولة عن أي أضرار مباشرة أو غير مباشرة أو عرضية أو تبعية تنشأ عن استخدامك أو عدم
              قدرتك على استخدام موقعنا أو خدماتنا.
            </p>
          </section>

          <section>
            <h2 className="text-3xl font-semibold text-primary mb-4">6. تعديل الشروط</h2>
            <p className="mb-4">
              تحتفظ شركة رؤى بعيدة بالحق في تعديل هذه الشروط في أي وقت. سيتم نشر أي تعديلات على هذه الصفحة. استمرارك في
              استخدام الموقع بعد نشر التعديلات يعتبر موافقة منك على الشروط المعدلة.
            </p>
          </section>

          <section>
            <h2 className="text-3xl font-semibold text-primary mb-4">7. القانون الحاكم وحل النزاعات</h2>
            <p className="mb-4">
              تخضع هذه الشروط وتفسر وفقاً لقوانين المملكة العربية السعودية. أي نزاعات تنشأ عن هذه الشروط سيتم حلها من
              خلال المحاكم المختصة في المملكة العربية السعودية.
            </p>
          </section>

          <section>
            <h2 className="text-3xl font-semibold text-primary mb-4">8. اتصل بنا</h2>
            <p>
              إذا كان لديك أي أسئلة حول شروط الخدمة هذه، يرجى التواصل معنا عبر صفحة "تواصل معنا" أو عبر البريد
              الإلكتروني info@farvisions.net.
            </p>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  )
}
