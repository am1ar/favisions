import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Calendar, Share2, Heart, Eye, Tag } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

// Updated woodworking images data with proper image paths and detail page links
const woodworkingImages = [
  {
    id: 1,
    title: "معرض داخلي فاخر مع وحدات خشبية مدمجة",
    description: "معرض حديث وفاخر يضم وحدات خشبية مدمجة تعمل كخزائن عرض وأبواب مدمجة، مصنوعة من خشب فاتح اللون مع حبيبات مرئية",
    imageUrl: "/woodworking-images/ng/1.jpg",
    category: "معارض داخلية",
    uploadDate: "2024-01-20",
    views: 2156,
    likes: 187,
    tags: ["معارض", "وحدات خشبية", "خزائن عرض", "تصميم داخلي"],
    dimensions: "متعددة",
    material: "خشب البلوط الطبيعي",
    detailSlug: "interior-showroom-1"
  },
  {
    id: 2,
    title: "خزانة ملابس فاخرة مع إضاءة LED متكاملة",
    description: "خزانة ملابس فاخرة مصممة بشكل متماثل على شكل حرف U مع إضاءة LED متكاملة، مصنوعة من خشب داكن عالي الجودة",
    imageUrl: "/woodworking-images/ng/2.jpg",
    category: "خزائن ملابس",
    uploadDate: "2024-01-18",
    views: 1892,
    likes: 156,
    tags: ["خزائن ملابس", "إضاءة LED", "خشب داكن", "تصميم متماثل"],
    dimensions: "متعددة",
    material: "خشب الجوز",
    detailSlug: "luxury-wardrobe-1"
  },
  {
    id: 3,
    title: "خزانة ملابس فاخرة من الخشب الفاتح",
    description: "خزانة ملابس فاخرة مصنوعة من خشب فاتح طبيعي مع رفوف مفتوحة وخزائن مغلقة ومرآة كاملة الطول مع إضاءة LED متكاملة",
    imageUrl: "/woodworking-images/ng/3.jpg",
    category: "خزائن ملابس",
    uploadDate: "2024-01-16",
    views: 2341,
    likes: 198,
    tags: ["خزائن ملابس", "خشب فاتح", "إضاءة LED", "مرآة كاملة الطول"],
    dimensions: "متعددة",
    material: "خشب البلوط",
    detailSlug: "light-wood-wardrobe"
  },
  {
    id: 4,
    title: "خزانة ملابس حديثة مع إضاءة متعددة الألوان",
    description: "خزانة ملابس حديثة وفاخرة مع إضاءة LED متكاملة بألوان دافئة وباردة، مصنوعة من خشب داكن عالي الجودة",
    imageUrl: "/woodworking-images/ng/4.jpg",
    category: "خزائن ملابس",
    uploadDate: "2024-01-14",
    views: 1678,
    likes: 143,
    tags: ["خزائن ملابس", "إضاءة LED", "خشب داكن", "تصميم حديث"],
    dimensions: "متعددة",
    material: "خشب الجوز",
    detailSlug: "multi-color-wardrobe"
  },
  {
    id: 5,
    title: "خزانة ملابس كلاسيكية مع تصميم آرت ديكو",
    description: "خزانة ملابس كلاسيكية مصممة بتأثيرات آرت ديكو مع خشب داكن مصقول ومرآة مركزية كبيرة تعكس عمق المساحة",
    imageUrl: "/woodworking-images/ng/5.jpg",
    category: "خزائن ملابس",
    uploadDate: "2024-01-12",
    views: 1987,
    likes: 167,
    tags: ["خزائن ملابس", "آرت ديكو", "خشب داكن", "تصميم كلاسيكي"],
    dimensions: "متعددة",
    material: "خشب الجوز",
    detailSlug: "art-deco-wardrobe"
  },
  {
    id: 6,
    title: "خزانة ملابس فاخرة مع رفوف مفتوحة",
    description: "خزانة ملابس فاخرة مصنوعة من خشب فاتح طبيعي مع رفوف مفتوحة قابلة للتعديل وخزائن متعددة ومرآة كاملة الطول",
    imageUrl: "/woodworking-images/ng/6.jpg",
    category: "خزائن ملابس",
    uploadDate: "2024-01-10",
    views: 2234,
    likes: 189,
    tags: ["خزائن ملابس", "خشب فاتح", "رفوف قابلة للتعديل", "تصميم متماثل"],
    dimensions: "متعددة",
    material: "خشب البلوط",
    detailSlug: "open-shelf-wardrobe"
  },
  {
    id: 7,
    title: "معرض داخلي مع أبواب خشبية وزجاجية",
    description: "معرض داخلي حديث مع أبواب خشبية وزجاجية وأثاث طعام خشبي طبيعي، مصمم بأسلوب معاصر وفاخر",
    imageUrl: "/woodworking-images/ng/7.jpg",
    category: "معارض داخلية",
    uploadDate: "2024-01-08",
    views: 1890,
    likes: 145,
    tags: ["معارض", "أبواب خشبية", "أثاث طعام", "تصميم معاصر"],
    dimensions: "متعددة",
    material: "خشب طبيعي",
    detailSlug: "glass-wood-showroom"
  },
  {
    id: 8,
    title: "غرفة معيشة مع وحدة وسائط خشبية مدمجة",
    description: "غرفة معيشة حديثة مع وحدة وسائط خشبية مدمجة تمتد على الجدار بأكمله، مع أثاث معاصر وألوان محايدة",
    imageUrl: "/woodworking-images/ng/8.jpg",
    category: "غرف معيشة",
    uploadDate: "2024-01-06",
    views: 1678,
    likes: 134,
    tags: ["غرف معيشة", "وحدات مدمجة", "أثاث معاصر", "تصميم مينيمال"],
    dimensions: "متعددة",
    material: "خشب طبيعي",
    detailSlug: "living-room-media-unit"
  },
  {
    id: 9,
    title: "مطبخ فاخر مع خزائن خشبية طبيعية",
    description: "مطبخ فاخر وحديث مع خزائن خشبية طبيعية فاتحة اللون وجزيرة مطبخ خشبية كبيرة، مصمم بأسلوب مينيمال وأنيق",
    imageUrl: "/woodworking-images/ng/9.jpg",
    category: "مطابخ",
    uploadDate: "2024-01-04",
    views: 2456,
    likes: 223,
    tags: ["مطابخ", "خزائن خشبية", "جزيرة مطبخ", "تصميم مينيمال"],
    dimensions: "متعددة",
    material: "خشب البلوط",
    detailSlug: "luxury-wooden-kitchen"
  },
  {
    id: 10,
    title: "خزانة ملابس فاخرة مع إضاءة LED متطورة",
    description: "خزانة ملابس فاخرة مع إضاءة LED متطورة بألوان دافئة وباردة ووردية، مصنوعة من خشب داكن عالي الجودة",
    imageUrl: "/woodworking-images/ng/10.jpg",
    category: "خزائن ملابس",
    uploadDate: "2024-01-02",
    views: 2123,
    likes: 178,
    tags: ["خزائن ملابس", "إضاءة LED متطورة", "خشب داكن", "تصميم فاخر"],
    dimensions: "متعددة",
    material: "خشب الجوز",
    detailSlug: "advanced-led-wardrobe"
  },
  {
    id: 11,
    title: "خزانة ملابس فاخرة مع مرآة مركزية",
    description: "خزانة ملابس فاخرة مع مرآة مركزية كبيرة تعكس المساحة الداخلية، مصنوعة من خشب داكن مصقول مع إضاءة متكاملة",
    imageUrl: "/woodworking-images/ng/11.jpg",
    category: "خزائن ملابس",
    uploadDate: "2023-12-30",
    views: 1987,
    likes: 167,
    tags: ["خزائن ملابس", "مرآة مركزية", "خشب داكن", "إضاءة متكاملة"],
    dimensions: "متعددة",
    material: "خشب الجوز",
    detailSlug: "central-mirror-wardrobe"
  },
  {
    id: 12,
    title: "طاولة تجميل فاخرة مع مرآة مضاءة",
    description: "طاولة تجميل فاخرة مع مرآة كبيرة مقوسة وإضاءة LED متكاملة، مصنوعة من خشب داكن عالي الجودة مع تفاصيل مزخرفة",
    imageUrl: "/woodworking-images/ng/12.jpg",
    category: "طاولات تجميل",
    uploadDate: "2023-12-28",
    views: 1876,
    likes: 145,
    tags: ["طاولات تجميل", "مرآة مقوسة", "إضاءة LED", "تصميم فاخر"],
    dimensions: "متعددة",
    material: "خشب الجوز",
    detailSlug: "luxury-vanity-table"
  },
  {
    id: 13,
    title: "غرفة مرافق مع خزائن خشبية مدمجة",
    description: "غرفة مرافق حديثة مع خزائن خشبية مدمجة مصنوعة من خشب فاتح طبيعي، مصممة بأسلوب مينيمال وأنيق",
    imageUrl: "/woodworking-images/ng/13.jpg",
    category: "غرف مرافق",
    uploadDate: "2023-12-26",
    views: 1456,
    likes: 98,
    tags: ["غرف مرافق", "خزائن مدمجة", "خشب فاتح", "تصميم مينيمال"],
    dimensions: "متعددة",
    material: "خشب البلوط",
    detailSlug: "utility-room-cabinets"
  },
  {
    id: 14,
    title: "حمام فاخر مع خزائن خشبية طبيعية",
    description: "حمام فاخر مع خزائن خشبية طبيعية وحوض أبيض، مصمم بأسلوب معاصر مع إضاءة LED متكاملة",
    imageUrl: "/woodworking-images/ng/14.jpg",
    category: "حمامات",
    uploadDate: "2023-12-24",
    views: 1678,
    likes: 134,
    tags: ["حمامات", "خزائن خشبية", "إضاءة LED", "تصميم معاصر"],
    dimensions: "متعددة",
    material: "خشب طبيعي",
    detailSlug: "luxury-wooden-bathroom"
  },
  {
    id: 15,
    title: "خزانة ملابس فاخرة مع إضاءة دافئة",
    description: "خزانة ملابس فاخرة مع إضاءة LED دافئة متكاملة، مصنوعة من خشب داكن عالي الجودة مع تصميم أنيق ومعاصر",
    imageUrl: "/woodworking-images/ng/15.jpg",
    category: "خزائن ملابس",
    uploadDate: "2023-12-22",
    views: 1987,
    likes: 167,
    tags: ["خزائن ملابس", "إضاءة LED دافئة", "خشب داكن", "تصميم معاصر"],
    dimensions: "متعددة",
    material: "خشب الجوز",
    detailSlug: "warm-light-wardrobe"
  },
  {
    id: 16,
    title: "غرفة نوم فاخرة مع أثاث خشبي كلاسيكي",
    description: "غرفة نوم فاخرة مع أثاث خشبي كلاسيكي مصنوع من خشب داكن عالي الجودة، مع طاولة تجميل مزخرفة ومرآة مضاءة",
    imageUrl: "/woodworking-images/ng/16.jpg",
    category: "غرف نوم",
    uploadDate: "2023-12-20",
    views: 2234,
    likes: 189,
    tags: ["غرف نوم", "أثاث خشبي", "طاولة تجميل", "تصميم كلاسيكي"],
    dimensions: "متعددة",
    material: "خشب الجوز",
    detailSlug: "classic-wooden-bedroom"
  },
  {
    id: 17,
    title: "خزانة ملابس فاخرة مع زجاج معتم",
    description: "خزانة ملابس فاخرة مع أبواب زجاجية معتمة وخشب فاتح طبيعي، مصممة بأسلوب معاصر مع إضاءة LED متكاملة",
    imageUrl: "/woodworking-images/ng/17.jpg",
    category: "خزائن ملابس",
    uploadDate: "2023-12-18",
    views: 1876,
    likes: 145,
    tags: ["خزائن ملابس", "زجاج معتم", "خشب فاتح", "إضاءة LED"],
    dimensions: "متعددة",
    material: "خشب البلوط",
    detailSlug: "frosted-glass-wardrobe"
  },
  {
    id: 18,
    title: "خزانة ملابس فاخرة مع خشب كرزي",
    description: "خزانة ملابس فاخرة مصنوعة من خشب الكرزي الداكن مع أبواب زجاجية وخزائن متعددة، مصممة بأسلوب معاصر وأنيق",
    imageUrl: "/woodworking-images/ng/18.jpg",
    category: "خزائن ملابس",
    uploadDate: "2023-12-16",
    views: 1987,
    likes: 167,
    tags: ["خزائن ملابس", "خشب الكرزي", "أبواب زجاجية", "تصميم معاصر"],
    dimensions: "متعددة",
    material: "خشب الكرزي",
    detailSlug: "cherry-wood-wardrobe"
  }
]

export default function WoodworkingGalleryPage() {
  return (
    <div className="flex flex-col min-h-[100dvh] bg-luxury-ivory text-dark-text">
      <Header />
      <main className="flex-1 pt-20">
        {/* Hero Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-luxury-gradient text-luxury-ivory relative overflow-hidden">
          <div className="absolute inset-0 bg-black/40"></div>
          <div className="container px-4 md:6 text-right relative z-10">
            <div className="text-center space-y-8">
              <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl text-luxury-ivory mb-6 drop-shadow-lg">
                معرض النجارة الفاخرة
              </h1>
              <p className="max-w-3xl mx-auto text-lg md:text-xl text-luxury-ivory/90 leading-relaxed">
                استكشف أحدث أعمالنا في النجارة وصناعة الخشب. معرض شامل يعرض أجود أنواع الأخشاب وأفضل التقنيات المستخدمة في مشاريعنا
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  asChild
                  size="lg"
                  className="bg-luxury-gold text-black hover:bg-luxury-gold-light px-8 py-4 text-lg font-semibold rounded-lg shadow-xl transition-all duration-300 transform hover:scale-105"
                >
                  <Link href="/woodworking-services">خدمات النجارة</Link>
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
                معرض أعمال النجارة الفاخرة
              </h2>
              <p className="text-lg text-dark-text/70 max-w-2xl mx-auto">
                استكشف مجموعة متنوعة من مشاريع النجارة الفاخرة. كل صورة تعرض إبداعنا في تصميم وتنفيذ الأعمال الخشبية
              </p>
            </div>

            {/* Gallery Grid */}
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {woodworkingImages.map((image) => (
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
                          <Link href={`/woodworking-gallery/${image.detailSlug}`}>
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
              هل تريد مشروع نجارة فاخر؟
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
                <Link href="/woodworking-services">خدمات النجارة</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
