import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Calendar, Share2, Heart, Eye, Tag } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

// Sample construction projects data with proper image paths and detail page links
const constructionProjects = [
  {
    id: 1,
    title: "بناء الملاحق والغرف الإضافية",
    description: "بناء ملاحق وغرف إضافية للمنازل، تضم غرف نوم إضافية أو غرف دراسة أو غرف ضيوف",
    imageUrl: "/0e502e14-4222-4864-9ce1-f4e4daa77a73.jpg",
    category: "الإنشاءات السكنية",
    uploadDate: "2024-01-20",
    views: 2156,
    likes: 187,
    tags: ["ملاحق", "غرف إضافية", "غرف نوم", "غرف دراسة"],
    dimensions: "متعددة",
    material: "خرسانة مسلحة",
    detailSlug: "annexes-rooms-construction"
  },
  {
    id: 2,
    title: "بناء الشقق السكنية",
    description: "بناء شقق سكنية متنوعة الأحجام بتصاميم عصرية، تضم غرف نوم وغرف معيشة ومرافق متكاملة",
    imageUrl: "/413cdc55-6866-4acb-aece-566e76963081.jpg",
    category: "الإنشاءات السكنية",
    uploadDate: "2024-01-18",
    views: 1892,
    likes: 156,
    tags: ["شقق سكنية", "تصاميم عصرية", "غرف نوم", "مرافق متكاملة"],
    dimensions: "متعددة",
    material: "خرسانة مسلحة",
    detailSlug: "residential-apartments-construction"
  },
  {
    id: 3,
    title: "بناء الفيلات",
    description: "بناء فيلات بتصاميم متنوعة وعصرية، تضم غرف نوم متعددة وغرف معيشة وحدائق خارجية ومرافق متكاملة",
    imageUrl: "/woodworking-images/ng/ig1.jpg",
    category: "الإنشاءات السكنية",
    uploadDate: "2024-01-16",
    views: 2341,
    likes: 198,
    tags: ["فيلات", "تصاميم متنوعة", "غرف نوم متعددة", "حدائق خارجية"],
    dimensions: "متعددة",
    material: "خرسانة مسلحة",
    detailSlug: "villas-construction"
  },
  {
    id: 4,
    title: "بناء القصور والمنازل الفاخرة",
    description: "بناء قصور ومنازل فاخرة بتصاميم كلاسيكية وأنيقة، تضم غرف نوم متعددة وغرف معيشة وحدائق واسعة",
    imageUrl: "/woodworking-images/ng/ig2.jpg",
    category: "الإنشاءات السكنية",
    uploadDate: "2024-01-14",
    views: 1678,
    likes: 143,
    tags: ["قصور فاخرة", "تصاميم كلاسيكية", "غرف نوم متعددة", "حدائق واسعة"],
    dimensions: "متعددة",
    material: "خرسانة مسلحة",
    detailSlug: "palaces-luxury-homes-construction"
  },
  {
    id: 5,
    title: "بناء المحلات التجارية",
    description: "بناء محلات تجارية متنوعة الأحجام، تضم واجهات جذابة ومساحات عرض مناسبة",
    imageUrl: "/woodworking-images/ng/ig3.jpg",
    category: "الإنشاءات التجارية",
    uploadDate: "2024-01-12",
    views: 1987,
    likes: 167,
    tags: ["محلات تجارية", "واجهات جذابة", "مساحات عرض", "تصاميم تجارية"],
    dimensions: "متعددة",
    material: "خرسانة مسلحة",
    detailSlug: "commercial-shops-construction"
  },
  {
    id: 6,
    title: "بناء المطاعم والكافيهات",
    description: "بناء مطاعم وكافيهات بتصاميم عصرية، تضم مطابخ مجهزة وقاعات طعام ومرافق خدمية",
    imageUrl: "/woodworking-images/ng/ig4.jpg",
    category: "الإنشاءات التجارية",
    uploadDate: "2024-01-10",
    views: 2234,
    likes: 189,
    tags: ["مطاعم", "كافيهات", "مطابخ مجهزة", "قاعات طعام"],
    dimensions: "متعددة",
    material: "خرسانة مسلحة",
    detailSlug: "restaurants-cafes-construction"
  },
  {
    id: 7,
    title: "بناء المباني الإدارية",
    description: "بناء مباني إدارية من عدة طوابق، تضم مكاتب متنوعة وقاعات اجتماعات ومرافق متكاملة",
    imageUrl: "/woodworking-images/ng/lb1.jpg",
    category: "الإنشاءات التجارية",
    uploadDate: "2024-01-08",
    views: 1890,
    likes: 145,
    tags: ["مباني إدارية", "مكاتب متنوعة", "قاعات اجتماعات", "مرافق متكاملة"],
    dimensions: "متعددة",
    material: "خرسانة مسلحة",
    detailSlug: "administrative-buildings-construction"
  },
  {
    id: 8,
    title: "بناء المراكز الرياضية",
    description: "بناء مراكز رياضية متكاملة من عدة طوابق، تضم صالات رياضية وملاعب ومرافق صحية متطورة",
    imageUrl: "/woodworking-images/ng/lb2.jpg",
    category: "الإنشاءات التجارية",
    uploadDate: "2024-01-06",
    views: 1678,
    likes: 134,
    tags: ["مراكز رياضية", "صالات رياضية", "ملاعب", "مرافق صحية"],
    dimensions: "متعددة",
    material: "خرسانة مسلحة",
    detailSlug: "sports-centers-construction"
  },
  {
    id: 9,
    title: "بناء المباني التعليمية",
    description: "بناء مباني تعليمية من عدة طوابق، تضم فصول دراسية ومختبرات ومكتبات ومرافق رياضية",
    imageUrl: "/woodworking-images/ng/lbw1.jpg",
    category: "الإنشاءات التجارية",
    uploadDate: "2024-01-04",
    views: 2456,
    likes: 223,
    tags: ["مباني تعليمية", "فصول دراسية", "مختبرات", "مكتبات"],
    dimensions: "متعددة",
    material: "خرسانة مسلحة",
    detailSlug: "educational-buildings-construction"
  },
  {
    id: 10,
    title: "بناء المستشفيات والمراكز الطبية",
    description: "بناء مستشفيات ومراكز طبية متخصصة من عدة طوابق، تضم أقسام طبية وغرف عمليات ومختبرات",
    imageUrl: "/woodworking-images/ng/lbw2.jpg",
    category: "الإنشاءات التجارية",
    uploadDate: "2024-01-02",
    views: 2123,
    likes: 178,
    tags: ["مستشفيات", "مراكز طبية", "أقسام طبية", "غرف عمليات"],
    dimensions: "متعددة",
    material: "خرسانة مسلحة",
    detailSlug: "hospitals-medical-centers-construction"
  },
  {
    id: 11,
    title: "بناء الفنادق والمنتجعات",
    description: "بناء فنادق ومنتجعات فاخرة من عدة طوابق، تضم غرف فاخرة ومطاعم ومرافق ترفيهية متكاملة",
    imageUrl: "/woodworking-images/ng/lbw3.jpg",
    category: "الإنشاءات التجارية",
    uploadDate: "2023-12-30",
    views: 1987,
    likes: 167,
    tags: ["فنادق فاخرة", "منتجعات", "غرف فاخرة", "مرافق ترفيهية"],
    dimensions: "متعددة",
    material: "خرسانة مسلحة",
    detailSlug: "hotels-resorts-construction"
  },
  {
    id: 12,
    title: "بناء المباني الحكومية",
    description: "بناء مباني حكومية من عدة طوابق، تضم مكاتب إدارية وقاعات اجتماعات ومرافق متكاملة",
    imageUrl: "/woodworking-images/ng/lbw4.jpg",
    category: "الإنشاءات التجارية",
    uploadDate: "2023-12-28",
    views: 1876,
    likes: 145,
    tags: ["مباني حكومية", "مكاتب إدارية", "قاعات اجتماعات", "مرافق متكاملة"],
    dimensions: "متعددة",
    material: "خرسانة مسلحة",
    detailSlug: "government-buildings-construction"
  }
]

export default function ConstructionGalleryPage() {
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
                معرض الإنشاءات والتشييد
              </h1>
              <p className="max-w-3xl mx-auto text-lg md:text-xl text-luxury-ivory/90 leading-relaxed">
                استكشف أحدث مشاريعنا في الإنشاءات والتشييد. معرض شامل يعرض مجموعة متنوعة من المباني السكنية والتجارية بأعلى معايير الجودة
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  asChild
                  size="lg"
                  className="bg-luxury-gold text-black hover:bg-luxury-gold-light px-8 py-4 text-lg font-semibold rounded-lg shadow-xl transition-all duration-300 transform hover:scale-105"
                >
                  <Link href="/construction-services">خدمات الإنشاءات</Link>
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
                معرض مشاريع الإنشاءات الفاخرة
              </h2>
              <p className="text-lg text-dark-text/70 max-w-2xl mx-auto">
                استكشف خدماتنا الإنشائية المتنوعة. حيث أننا شركة جديدة نعمل مع مقاولين محترفين لتقديم أعلى معايير الجودة في جميع أنواع الإنشاءات
              </p>
            </div>

            {/* Gallery Grid */}
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {constructionProjects.map((project) => (
                <Card key={project.id} className="group bg-white border-luxury-gold/30 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden">
                  <div className="relative overflow-hidden">
                    <Image
                      src={project.imageUrl}
                      alt={project.title}
                      width={400}
                      height={300}
                      className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute top-4 right-4">
                      <Badge className="bg-luxury-gold text-luxury-navy font-semibold">
                        {project.category}
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
                      {project.title}
                    </CardTitle>
                    <p className="text-dark-text/70 text-sm leading-relaxed">
                      {project.description}
                    </p>
                  </CardHeader>
                  
                  <CardContent className="space-y-4">
                    {/* Tags */}
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag, index) => (
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
                          <span>{new Date(project.uploadDate).toLocaleDateString('ar-SA')}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Eye className="h-4 w-4" />
                          <span>{project.views}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Heart className="h-4 w-4" />
                          <span>{project.likes}</span>
                        </div>
                      </div>
                      
                      <div className="flex gap-2">
                        <Button 
                          asChild
                          size="sm" 
                          className="bg-luxury-gold text-black hover:bg-luxury-gold-light"
                        >
                          <Link href={`/construction-gallery/${project.detailSlug}`}>
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
              هل تريد مشروع إنشائي فاخر؟
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
                <Link href="/construction-services">خدمات الإنشاءات</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
