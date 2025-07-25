import { Card, CardContent } from "@/components/ui/card"
import { Database, BarChart3, Shield, Users, Activity, FileText, Globe, Smartphone } from "lucide-react"

const features = [
  {
    icon: Database,
    title: "Veri Yönetimi",
    description: "Merkezi veri depolama ve yönetim sistemi ile tüm kurumsal verileri tek noktadan kontrol edin.",
    color: "text-blue-600",
    bgColor: "bg-blue-50",
  },
  {
    icon: BarChart3,
    title: "Analitik Dashboard",
    description: "Gerçek zamanlı grafikler ve raporlar ile verilerinizi görselleştirin ve analiz edin.",
    color: "text-green-600",
    bgColor: "bg-green-50",
  },
  {
    icon: Shield,
    title: "Güvenlik ve Uyumluluk",
    description: "KVKK uyumlu güvenlik protokolleri ile verilerinizi koruyun ve denetim izlerini takip edin.",
    color: "text-red-600",
    bgColor: "bg-red-50",
  },
  {
    icon: Users,
    title: "Departman İşbirliği",
    description: "Farklı departmanlar arasında güvenli veri paylaşımı ve ortak proje yönetimi.",
    color: "text-purple-600",
    bgColor: "bg-purple-50",
  },
  {
    icon: Activity,
    title: "Sistem İzleme",
    description: "Sistem performansını izleyin, sorunları tespit edin ve otomatik çözüm önerileri alın.",
    color: "text-orange-600",
    bgColor: "bg-orange-50",
  },
  {
    icon: FileText,
    title: "Raporlama",
    description: "Otomatik rapor oluşturma ve özelleştirilebilir dashboard'lar ile karar destek sistemi.",
    color: "text-indigo-600",
    bgColor: "bg-indigo-50",
  },
  {
    icon: Globe,
    title: "API Entegrasyonu",
    description: "RESTful API'ler ile diğer sistemlerle entegrasyon ve veri alışverişi.",
    color: "text-teal-600",
    bgColor: "bg-teal-50",
  },
  {
    icon: Smartphone,
    title: "Mobil Destek",
    description: "Mobil uyumlu arayüz ile her yerden sisteme erişim ve veri kontrolü.",
    color: "text-pink-600",
    bgColor: "bg-pink-50",
  },
]

export function FeaturesSection() {
  return (
    <section id="features" className="py-20 px-4 bg-white/50">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Sistem Özellikleri</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            T.C. İletişim Başkanlığı'nın dijital dönüşüm ihtiyaçlarına özel olarak tasarlanmış kapsamlı veri analitik
            çözümleri.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => {
            const Icon = feature.icon
            return (
              <Card key={index} className="hover:shadow-lg transition-shadow bg-white/80 backdrop-blur-sm">
                <CardContent className="p-6">
                  <div className={`w-12 h-12 ${feature.bgColor} rounded-lg flex items-center justify-center mb-4`}>
                    <Icon className={`h-6 w-6 ${feature.color}`} />
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-2">{feature.title}</h3>
                  <p className="text-sm text-gray-600">{feature.description}</p>
                </CardContent>
              </Card>
            )
          })}
        </div>

        <div className="mt-16 bg-gradient-to-r from-blue-600 to-red-600 rounded-2xl p-8 text-white text-center">
          <h3 className="text-2xl font-bold mb-4">Açık Kaynak Çözüm</h3>
          <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
            Bu sistem açık kaynak lisansı altında geliştirilmiş olup, kamu kurumlarının dijital dönüşüm sürecine katkı
            sağlamayı hedeflemektedir.
          </p>
          <div className="flex flex-wrap justify-center gap-4 text-sm">
            <span className="bg-white/20 px-3 py-1 rounded-full">MIT Lisansı</span>
            <span className="bg-white/20 px-3 py-1 rounded-full">Açık Kaynak</span>
            <span className="bg-white/20 px-3 py-1 rounded-full">Kamu Yararı</span>
            <span className="bg-white/20 px-3 py-1 rounded-full">Sürekli Geliştirme</span>
          </div>
        </div>
      </div>
    </section>
  )
}
