'use client'

import { useState } from 'react'
import { ChevronDown } from 'lucide-react'

const faqs = [
  {
    question: 'ما هي الخدمات التي تقدمها شركة رؤى بعيدة في مجال المقاولات؟',
    answer: 'تقدم شركة رؤى بعيدة حلولاً هندسية متكاملة تشمل: التخطيط والتصميم المعماري، المقاولات العامة، تشييد المباني السكنية (الفلل والمجمعات) والتجارية (المكاتب والمراكز التجارية)، بالإضافة إلى أعمال الترميم، التشطيب الفاخر، وصيانة المنشآت بأعلى معايير الجودة.',
  },
  {
    question: 'هل تلتزم شركة رؤى بعيدة بكود البناء السعودي وإجراءات السلامة؟',
    answer: 'نعم، جميع مشاريع الإنشاء والتشييد في شركة رؤى بعيدة تُنفذ بدقة متناهية وفقاً لاشتراطات كود البناء السعودي (SBC)، مع تطبيق صارم لمعايير السلامة المهنية ومراقبة الجودة لضمان متانة واستدامة المنشآت.',
  },
  {
    question: 'كيف تضمن شركة رؤى بعيدة تسليم المشاريع في الوقت المحدد؟',
    answer: 'نعتمد في رؤى بعيدة على مخطط رقمي واضح يسمى "رحلة المشروع"، حيث يتم تقسيم العمل إلى مراحل زمنية محددة (Milestones) ومشاركتها مع العميل عبر تقارير دورية، مما يضمن الشفافية الكاملة والالتزام الصارم بمواعيد التسليم المتفق عليها.',
  },
  {
    question: 'كيف يمكنني الحصول على تسعير أو استشارة لمشروع بناء؟',
    answer: 'يمكنك تصفح موقعنا والضغط على خيار "احصل على استشارة مجانية" أو زر "تواصل معنا"، وتزويد فريقنا الهندسي بتفاصيل المشروع الأوليّة، وسيقوم مستشارونا بالتواصل معك لتقديم دراسة مبدئية وتسعير تقديري متوافق مع ميزانيتك وطموحاتك.',
  },
]

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  return (
    <section className="w-full py-20 md:py-28 bg-gray-900" dir="rtl">
      <div className="container mx-auto px-6 md:px-8 lg:px-12">
        <div className="text-center mb-14">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl text-white mb-4 text-balance">
            الأسئلة الشائعة
          </h2>
          <p className="text-gray-400 text-lg max-w-xl mx-auto">
            إجابات على الأسئلة الأكثر تداولاً حول خدماتنا وطرق التعاون معنا
          </p>
        </div>

        <div className="max-w-3xl mx-auto space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="border border-gray-700 rounded-lg overflow-hidden transition-all duration-200 hover:border-cyan-400/50 hover:shadow-lg hover:shadow-cyan-400/10"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full px-6 py-5 flex items-center justify-between bg-gray-800 hover:bg-gray-750 transition-colors duration-200 text-left"
              >
                <span className="font-semibold text-white text-lg">{faq.question}</span>
                <ChevronDown
                  className={`h-5 w-5 text-cyan-400 shrink-0 transition-transform duration-300 ${
                    openIndex === index ? 'rotate-180' : ''
                  }`}
                />
              </button>

              {openIndex === index && (
                <div className="px-6 py-5 bg-gray-750 border-t border-gray-700">
                  <p className="text-gray-300 leading-relaxed text-base">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
