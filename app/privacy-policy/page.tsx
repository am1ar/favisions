import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

export default function PrivacyPolicyPage() {
  return (
    <div className="flex flex-col min-h-[100dvh] bg-dark-blue-500 text-white">
      <Header />
      <main className="flex-1 container px-4 md:px-6 py-12 md:py-24 lg:py-32 text-right">
        <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl text-gold-500 mb-8 drop-shadow-lg">
          سياسة الخصوصية
        </h1>
        <div className="space-y-8 text-gray-200 text-lg">
          <section>
            <h2 className="text-3xl font-semibold text-gold-400 mb-4">1. مقدمة</h2>
            <p className="mb-4">
              توضح سياسة الخصوصية هذه كيفية جمع واستخدام وحماية المعلومات الشخصية التي تقدمها لنا عند استخدامك لموقع
              وشركات شركة رؤى بعيدة. نحن نلتزم بحماية خصوصيتك والامتثال لجميع القوانين واللوائح المعمول بها في المملكة
              العربية السعودية فيما يتعلق بحماية البيانات.
            </p>
          </section>

          <section>
            <h2 className="text-3xl font-semibold text-gold-400 mb-4">2. المعلومات التي نجمعها</h2>
            <p className="mb-4">قد نقوم بجمع أنواع مختلفة من المعلومات منك، بما في ذلك على سبيل المثال لا الحصر:</p>
            <ul className="list-disc pr-6 space-y-2">
              <li>
                <strong>المعلومات الشخصية:</strong> مثل اسمك، عنوان بريدك الإلكتروني، رقم هاتفك، وعنوانك، والتي تقدمها
                طواعية عند التواصل معنا أو استخدام خدماتنا.
              </li>
              <li>
                <strong>معلومات الاستخدام:</strong> بيانات حول كيفية وصولك إلى موقعنا واستخدامه، مثل عناوين IP، نوع
                المتصفح، الصفحات التي زرتها، ووقت الزيارة.
              </li>
              <li>
                <strong>معلومات ملفات تعريف الارتباط (الكوكيز):</strong> قد نستخدم ملفات تعريف الارتباط لتحسين تجربتك
                على موقعنا وتخصيص المحتوى.
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-3xl font-semibold text-gold-400 mb-4">3. كيفية استخدام معلوماتك</h2>
            <p className="mb-4">نحن نستخدم المعلومات التي نجمعها للأغراض التالية:</p>
            <ul className="list-disc pr-6 space-y-2">
              <li>تقديم خدماتنا وتحسينها.</li>
              <li>الرد على استفساراتك وطلباتك.</li>
              <li>تحليل استخدام الموقع لتحسين وظائفه وتجربة المستخدم.</li>
              <li>الامتثال للمتطلبات القانونية والتنظيمية.</li>
              <li>إرسال تحديثات تسويقية أو معلومات أخرى قد تهمك (مع خيار إلغاء الاشتراك).</li>
            </ul>
          </section>

          <section>
            <h2 className="text-3xl font-semibold text-gold-400 mb-4">4. مشاركة المعلومات</h2>
            <p className="mb-4">
              نحن لا نبيع أو نتاجر أو نؤجر معلوماتك الشخصية لأطراف ثالثة. قد نشارك معلوماتك مع مقدمي الخدمات الموثوقين
              الذين يساعدوننا في تشغيل موقعنا أو تقديم خدماتنا، شريطة أن يوافقوا على الحفاظ على سرية هذه المعلومات. قد
              نكشف عن معلوماتك أيضاً إذا كان ذلك مطلوباً بموجب القانون أو لحماية حقوقنا أو سلامة الآخرين.
            </p>
          </section>

          <section>
            <h2 className="text-3xl font-semibold text-gold-400 mb-4">5. أمن البيانات</h2>
            <p className="mb-4">
              نتخذ إجراءات أمنية معقولة لحماية معلوماتك الشخصية من الوصول غير المصرح به أو التعديل أو الكشف أو التدمير.
              ومع ذلك، لا توجد طريقة إرسال عبر الإنترنت أو طريقة تخزين إلكتروني آمنة بنسبة 100%، ولا يمكننا ضمان أمنها
              المطلق.
            </p>
          </section>

          <section>
            <h2 className="text-3xl font-semibold text-gold-400 mb-4">6. حقوقك</h2>
            <p className="mb-4">
              لديك الحق في الوصول إلى معلوماتك الشخصية التي نحتفظ بها وتصحيحها أو حذفها. يمكنك ممارسة هذه الحقوق عن طريق
              التواصل معنا.
            </p>
          </section>

          <section>
            <h2 className="text-3xl font-semibold text-gold-400 mb-4">7. التعديلات على سياسة الخصوصية</h2>
            <p className="mb-4">
              قد نقوم بتحديث سياسة الخصوصية هذه من وقت لآخر. سيتم نشر أي تغييرات على هذه الصفحة، ويعتبر استمرارك في
              استخدام الموقع بعد نشر التعديلات موافقة منك على السياسة المعدلة.
            </p>
          </section>

          <section>
            <h2 className="text-3xl font-semibold text-gold-400 mb-4">8. اتصل بنا</h2>
            <p>
              إذا كان لديك أي أسئلة حول سياسة الخصوصية هذه، يرجى التواصل معنا عبر صفحة "تواصل معنا" أو عبر البريد
              الإلكتروني info@farvisions.net.
            </p>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  )
}
