import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Calendar, Share2, Heart, Eye, Tag } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

// Sample finishes images data with proper image paths and detail page links
const finishesImages = [
  {
    id: 1,
    title: "تشطيبات جدران فاخرة بتقنية الفينيل",
    description: "تشطيبات جدران فاخرة باستخدام تقنية الفينيل المطبوعة بألوان طبيعية وتصاميم عصرية، مثالية للغرف المعيشة والغرف الرئيسية",
    imageUrl: "/0e502e14-4222-4864-9ce1-f4e4daa77a73.jpg",
    category: "تشطيبات الجدران",
    uploadDate: "2024-01-20",
    views: 2156,
    likes: 187,
    tags: ["فينيل", "جدران", "تصميم عصرية", "ألوان طبيعية"],
    dimensions: "متعددة",
    material: "فينيل عالي الجودة",
    detailSlug: "luxury-vinyl-wall-finish"
  },
  {
    id: 2,
    title: "أرضيات رخام فاخرة بتصميم كلاسيكي",
    description: "أرضيات رخام فاخرة من الرخام الإيطالي الطبيعي بتصميم كلاسيكي وأنماط هندسية متقنة، مثالية للقصور والفيلات الفاخرة",
    imageUrl: "/413cdc55-6866-4acb-aece-566e76963081.jpg",
    category: "تشطيبات الأرضيات",
    uploadDate: "2024-01-18",
    views: 1892,
    likes: 156,
    tags: ["رخام طبيعي", "أرضيات", "تصميم كلاسيكي", "رخام إيطالي"],
    dimensions: "60x60 سم",
    material: "رخام كارارا",
    detailSlug: "classic-marble-flooring"
  },
  {
    id: 3,
    title: "أسقف معلقة مع إضاءات مخفية",
    description: "أسقف معلقة فاخرة مع إضاءات LED مخفية وتصاميم هندسية متقنة، مصنوعة من الجبس المقوى مع طلاء مقاوم للرطوبة",
    imageUrl: "/woodworking-images/ng/ig1.jpg",
    category: "تشطيبات الأسقف",
    uploadDate: "2024-01-16",
    views: 2341,
    likes: 198,
    tags: ["أسقف معلقة", "إضاءات LED", "جبس مقوى", "تصميم هندسي"],
    dimensions: "متعددة",
    material: "جبس مقوى",
    detailSlug: "suspended-ceiling-led"
  },
  {
    id: 4,
    title: "تشطيبات خارجية بالحجر الطبيعي",
    description: "تشطيبات خارجية فاخرة باستخدام الحجر الطبيعي مع عوازل حرارية ومائية متطورة، مقاومة للعوامل الجوية",
    imageUrl: "/woodworking-images/ng/ig2.jpg",
    category: "التشطيبات الخارجية",
    uploadDate: "2024-01-14",
    views: 1678,
    likes: 143,
    tags: ["حجر طبيعي", "عوازل", "مقاومة الطقس", "تشطيبات خارجية"],
    dimensions: "متعددة",
    material: "حجر طبيعي",
    detailSlug: "natural-stone-exterior"
  },
  {
    id: 5,
    title: "باركيه خشبي فاخر بتصميم هيرينغبون",
    description: "باركيه خشبي فاخر بتصميم هيرينغبون التقليدي مصنوع من خشب البلوط الطبيعي مع طلاء زيتي طبيعي",
    imageUrl: "/woodworking-images/ng/ig3.jpg",
    category: "تشطيبات الأرضيات",
    uploadDate: "2024-01-12",
    views: 1987,
    likes: 167,
    tags: ["باركيه", "خشب البلوط", "هيرينغبون", "طلاء زيتي"],
    dimensions: "20x90 سم",
    material: "خشب البلوط",
    detailSlug: "herringbone-oak-parquet"
  },
  {
    id: 6,
    title: "ورق جدران فاخر بتصميم نباتي",
    description: "ورق جدران فاخر بتصميم نباتي طبيعي بألوان هادئة وملمس ناعم، مثالي لغرف النوم والاستقبال",
    imageUrl: "/woodworking-images/ng/ig4.jpg",
    category: "تشطيبات الجدران",
    uploadDate: "2024-01-10",
    views: 2234,
    likes: 189,
    tags: ["ورق جدران", "تصميم نباتي", "ألوان هادئة", "ملمس ناعم"],
    dimensions: "10x0.53 متر",
    material: "ورق جدران فاخر",
    detailSlug: "botanical-wallpaper"
  },
  {
    id: 7,
    title: "بلاط سيراميك فاخر بتصميم إيطالي",
    description: "بلاط سيراميك فاخر بتصميم إيطالي كلاسيكي بألوان محايدة وملمس لامع، مثالي للمطابخ والحمامات",
    imageUrl: "/woodworking-images/ng/lb1.jpg",
    category: "تشطيبات الأرضيات",
    uploadDate: "2024-01-08",
    views: 1890,
    likes: 145,
    tags: ["بلاط سيراميك", "تصميم إيطالي", "ألوان محايدة", "ملمس لامع"],
    dimensions: "60x60 سم",
    material: "سيراميك عالي الجودة",
    detailSlug: "italian-ceramic-tiles"
  },
  {
    id: 8,
    title: "زخارف جبسية فاخرة للأسقف",
    description: "زخارف جبسية فاخرة للأسقف بتصاميم كلاسيكية ومزخرفة، مصنوعة من الجبس المقوى مع طلاء مقاوم",
    imageUrl: "/woodworking-images/ng/lb2.jpg",
    category: "تشطيبات الأسقف",
    uploadDate: "2024-01-06",
    views: 1678,
    likes: 134,
    tags: ["زخارف جبسية", "أسقف", "تصميم كلاسيكي", "جبس مقوى"],
    dimensions: "متعددة",
    material: "جبس مقوى",
    detailSlug: "luxury-gypsum-moldings"
  },
  {
    id: 9,
    title: "دهانات خارجية مقاومة للطقس",
    description: "دهانات خارجية فاخرة مقاومة للعوامل الجوية مع عوازل حرارية ومائية، متوفرة بألوان متنوعة",
    imageUrl: "/woodworking-images/ng/lbw1.jpg",
    category: "التشطيبات الخارجية",
    uploadDate: "2024-01-04",
    views: 2456,
    likes: 223,
    tags: ["دهانات خارجية", "مقاومة الطقس", "عوازل", "ألوان متنوعة"],
    dimensions: "متعددة",
    material: "دهانات مقاومة",
    detailSlug: "weather-resistant-paints"
  },
  {
    id: 10,
    title: "تشطيبات جدران بتقنية الستوكو",
    description: "تشطيبات جدران فاخرة بتقنية الستوكو الإيطالية مع ملمس ناعم وألوان طبيعية، مثالية للغرف الفاخرة",
    imageUrl: "/woodworking-images/ng/lbw2.jpg",
    category: "تشطيبات الجدران",
    uploadDate: "2024-01-02",
    views: 2123,
    likes: 178,
    tags: ["ستوكو", "جدران", "ملمس ناعم", "تقنية إيطالية"],
    dimensions: "متعددة",
    material: "ستوكو إيطالي",
    detailSlug: "italian-stucco-finish"
  },
  {
    id: 11,
    title: "أرضيات جرانيت فاخرة",
    description: "أرضيات جرانيت فاخرة من الجرانيت الطبيعي بألوان داكنة وملمس مصقول، مثالية للمداخل والسلالم",
    imageUrl: "/woodworking-images/ng/lbw3.jpg",
    category: "تشطيبات الأرضيات",
    uploadDate: "2023-12-30",
    views: 1987,
    likes: 167,
    tags: ["جرانيت", "أرضيات", "جرانيت طبيعي", "ملمس مصقول"],
    dimensions: "60x60 سم",
    material: "جرانيت طبيعي",
    detailSlug: "luxury-granite-flooring"
  },
  {
    id: 12,
    title: "أسقف معلقة مع زخارف ذهبية",
    description: "أسقف معلقة فاخرة مع زخارف ذهبية وتصاميم عربية إسلامية، مصنوعة من الجبس المقوى مع طلاء ذهبي",
    imageUrl: "/woodworking-images/ng/lbw4.jpg",
    category: "تشطيبات الأسقف",
    uploadDate: "2023-12-28",
    views: 1876,
    likes: 145,
    tags: ["أسقف معلقة", "زخارف ذهبية", "تصميم إسلامي", "جبس مقوى"],
    dimensions: "متعددة",
    material: "جبس مقوى مع طلاء ذهبي",
    detailSlug: "golden-islamic-ceiling"
  },
  {
    id: 13,
    title: "تشطيبات جدران بالحجر الصناعي",
    description: "تشطيبات جدران فاخرة بالحجر الصناعي عالي الجودة مع ملمس طبيعي وألوان متناسقة، مثالية للمداخل",
    imageUrl: "/woodworking-images/ng/lig1.jpg",
    category: "تشطيبات الجدران",
    uploadDate: "2023-12-26",
    views: 1456,
    likes: 98,
    tags: ["حجر صناعي", "جدران", "ملمس طبيعي", "ألوان متناسقة"],
    dimensions: "متعددة",
    material: "حجر صناعي عالي الجودة",
    detailSlug: "engineered-stone-walls"
  },
  {
    id: 14,
    title: "أرضيات خشب طبيعي مع طلاء زيتي",
    description: "أرضيات خشب طبيعي فاخرة مع طلاء زيتي طبيعي يحافظ على لون الخشب الأصلي، مثالية للغرف المعيشة",
    imageUrl: "/woodworking-images/ng/lig2.jpg",
    category: "تشطيبات الأرضيات",
    uploadDate: "2023-12-24",
    views: 1678,
    likes: 134,
    tags: ["خشب طبيعي", "أرضيات", "طلاء زيتي", "لون طبيعي"],
    dimensions: "20x120 سم",
    material: "خشب طبيعي",
    detailSlug: "natural-wood-oil-finish"
  },
  {
    id: 15,
    title: "تشطيبات خارجية بالرخام الطبيعي",
    description: "تشطيبات خارجية فاخرة بالرخام الطبيعي مع عوازل حرارية ومائية، مقاومة للعوامل الجوية",
    imageUrl: "/woodworking-images/ng/lig3.jpg",
    category: "التشطيبات الخارجية",
    uploadDate: "2023-12-22",
    views: 1987,
    likes: 167,
    tags: ["رخام طبيعي", "تشطيبات خارجية", "عوازل", "مقاومة الطقس"],
    dimensions: "متعددة",
    material: "رخام طبيعي",
    detailSlug: "natural-marble-exterior"
  },
  {
    id: 16,
    title: "أسقف معلقة مع إضاءات نيون",
    description: "أسقف معلقة حديثة مع إضاءات نيون مخفية وتصاميم عصرية، مصنوعة من الجبس المقوى مع إضاءات LED",
    imageUrl: "/woodworking-images/ng/lis1.jpg",
    category: "تشطيبات الأسقف",
    uploadDate: "2023-12-20",
    views: 2234,
    likes: 189,
    tags: ["أسقف معلقة", "إضاءات نيون", "تصميم عصرية", "إضاءات LED"],
    dimensions: "متعددة",
    material: "جبس مقوى",
    detailSlug: "neon-ceiling-lights"
  },
  {
    id: 17,
    title: "تشطيبات جدران بالرخام الصناعي",
    description: "تشطيبات جدران فاخرة بالرخام الصناعي عالي الجودة مع ملمس طبيعي وألوان متناسقة، مثالية للحمامات",
    imageUrl: "/woodworking-images/ng/lis2.jpg",
    category: "تشطيبات الجدران",
    uploadDate: "2023-12-18",
    views: 1876,
    likes: 145,
    tags: ["رخام صناعي", "جدران", "ملمس طبيعي", "ألوان متناسقة"],
    dimensions: "متعددة",
    material: "رخام صناعي عالي الجودة",
    detailSlug: "engineered-marble-walls"
  },
  {
    id: 18,
    title: "أرضيات بلاط فاخر بتصميم عربي",
    description: "أرضيات بلاط فاخر بتصميم عربي إسلامي مع زخارف هندسية متقنة، مصنوعة من السيراميك عالي الجودة",
    imageUrl: "/woodworking-images/ng/lis3.jpg",
    category: "تشطيبات الأرضيات",
    uploadDate: "2023-12-16",
    views: 1987,
    likes: 167,
    tags: ["بلاط", "تصميم عربي", "زخارف هندسية", "سيراميك فاخر"],
    dimensions: "30x30 سم",
    material: "سيراميك عالي الجودة",
    detailSlug: "arabic-pattern-tiles"
  }
]

export default function FinishesGalleryPage() {
  return (
    <div className="flex flex-col min-h-[100dvh] bg-luxury-ivory text-dark-text">
      <Header />
      <main className="flex-1 pt-20">
        {/* Hero Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-luxury-gradient text-luxury-ivory relative overflow-hidden">
          <div className="absolute inset-0 bg-black/40"></div>
          <div className="container px-4 md:px-6 text-right relative z-10">
            <div className="text-center space-y-8">
              <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl text-luxury-ivory mb-6 drop-shadow-lg">
                معرض التشطيبات الفاخرة
              </h1>
              <p className="max-w-3xl mx-auto text-lg md:text-xl text-luxury-ivory/90 leading-relaxed">
                استكشف أحدث أعمالنا في التشطيبات والديكورات. معرض شامل يعرض أجود أنواع المواد وأفضل التقنيات المستخدمة في مشاريعنا
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  asChild
                  size="lg"
                  className="bg-luxury-gold text-black hover:bg-luxury-gold-light px-8 py-4 text-lg font-semibold rounded-lg shadow-xl transition-all duration-300 transform hover:scale-105"
                >
                  <Link href="/finishes">خدمات التشطيبات</Link>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  size="lg"
                  className="border-2 border-luxury-ivory text-black hover:bg-luxury-ivory hover:text-luxury-navy px-8 py-4 text-lg font-semibold rounded-lg transition-all duration-300"
                >
                  <Link href="/contact">طلب عرض سعر</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Gallery Section */}
        <section className="w-full py-16 md:py-24 bg-luxury-ivory">
          <div className="container px-4 md:px-6">
            {/* Gallery Header */}
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-luxury-navy mb-6">
                معرض أعمال التشطيبات الفاخرة
              </h2>
              <p className="text-lg text-dark-text/70 max-w-2xl mx-auto">
                استكشف مجموعة متنوعة من مشاريع التشطيبات الفاخرة. كل صورة تعرض إبداعنا في تصميم وتنفيذ التشطيبات والديكورات
              </p>
            </div>

            {/* Gallery Grid */}
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {finishesImages.map((image) => (
                <Card key={image.id} className="group bg-white border-luxury-gold/30 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden">
                  <div className="relative overflow-hidden">
                    <Image
                      src={image.imageUrl}
                      alt={image.title}
                      width={400}
                      height={300}
                      className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute top-4 right-4">
                      <Badge className="bg-luxury-gold text-luxury-navy font-semibold">
                        {image.category}
                      </Badge>
                    </div>
                    <div className="absolute top-4 left-4 flex gap-2">
                      <Button size="sm" variant="ghost" className="h-8 w-8 p-0 bg-white/90 hover:bg-white text-dark-text">
                        <Heart className="h-4 w-4" />
                      </Button>
                      <Button size="sm" variant="ghost" className="h-8 w-8 p-0 bg-white/90 hover:bg-white text-dark-text">
                        <Share2 className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                  
                  <CardHeader className="pb-4">
                    <CardTitle className="text-xl font-bold text-luxury-navy group-hover:text-luxury-gold transition-colors duration-300">
                      {image.title}
                    </CardTitle>
                    <p className="text-dark-text/70 text-sm leading-relaxed">
                      {image.description}
                    </p>
                  </CardHeader>
                  
                  <CardContent className="space-y-4">
                    {/* Tags */}
                    <div className="flex flex-wrap gap-2">
                      {image.tags.map((tag, index) => (
                        <Badge key={index} variant="secondary" className="text-xs">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                    
                    {/* Stats and Actions */}
                    <div className="flex items-center justify-between pt-4 border-t border-luxury-gold/20">
                      <div className="flex items-center gap-4 text-sm text-dark-text/60">
                        <div className="flex items-center gap-1">
                          <Calendar className="h-4 w-4" />
                          <span>{new Date(image.uploadDate).toLocaleDateString('ar-SA')}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Eye className="h-4 w-4" />
                          <span>{image.views}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Heart className="h-4 w-4" />
                          <span>{image.likes}</span>
                        </div>
                      </div>
                      
                      <div className="flex gap-2">
                        <Button 
                          asChild
                          size="sm" 
                          className="bg-luxury-gold text-black hover:bg-luxury-gold-light"
                        >
                          <Link href={`/finishes-gallery/${image.detailSlug}`}>
                            عرض التفاصيل
                          </Link>
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>


          </div>
        </section>

        {/* Call to Action */}
        <section className="w-full py-16 md:py-24 bg-luxury-navy text-luxury-ivory">
          <div className="container px-4 md:px-6 text-center">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-6">
              هل تريد مشروع تشطيبات فاخر؟
            </h2>
            <p className="text-lg text-luxury-ivory/80 max-w-2xl mx-auto mb-8">
              تواصل معنا اليوم للحصول على استشارة مجانية وتصميم مشروعك الفريد بأعلى معايير الجودة
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                asChild
                size="lg"
                className="bg-luxury-gold text-black hover:bg-luxury-gold-light px-8 py-4 text-lg font-semibold rounded-lg shadow-xl transition-all duration-300 transform hover:scale-105"
              >
                <Link href="/contact">تواصل معنا</Link>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="border-2 border-luxury-ivory text-black hover:bg-luxury-ivory hover:text-luxury-navy px-8 py-4 text-lg font-semibold rounded-lg transition-all duration-300"
              >
                <Link href="/finishes">خدمات التشطيبات</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
