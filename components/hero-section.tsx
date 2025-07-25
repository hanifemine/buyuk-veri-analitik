import { Badge } from "@/components/ui/badge"
import { BarChart3, Shield, Users, Zap } from "lucide-react"

export function HeroSection() {
  return (
    <section className="py-20 px-4">
      <div className="container mx-auto text-center">
        <Badge className="mb-6 bg-blue-100 text-blue-800 hover:bg-blue-100">
          T.C. İletişim Başkanlığı Resmi Sistemi
        </Badge>

        <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
          Büyük Veri
          <span className="text-blue-600"> Analitik Sistemi</span>
        </h1>

        <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
          Kurum içi departmanlar arası ortak veri platformu ile dijital dönüşümün gücünü keşfedin. Güvenli, hızlı ve
          etkili veri analizi çözümleri.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
          <div className="flex flex-col items-center p-6 bg-white/60 rounded-lg backdrop-blur-sm">
            <BarChart3 className="h-12 w-12 text-blue-600 mb-4" />
            <h3 className="font-semibold text-gray-900 mb-2">Gelişmiş Analitik</h3>
            <p className="text-sm text-gray-600 text-center">Gerçek zamanlı veri analizi ve görselleştirme</p>
          </div>

          <div className="flex flex-col items-center p-6 bg-white/60 rounded-lg backdrop-blur-sm">
            <Shield className="h-12 w-12 text-green-600 mb-4" />
            <h3 className="font-semibold text-gray-900 mb-2">Güvenli Altyapı</h3>
            <p className="text-sm text-gray-600 text-center">KVKK uyumlu güvenlik protokolleri</p>
          </div>

          <div className="flex flex-col items-center p-6 bg-white/60 rounded-lg backdrop-blur-sm">
            <Users className="h-12 w-12 text-purple-600 mb-4" />
            <h3 className="font-semibold text-gray-900 mb-2">Departman İşbirliği</h3>
            <p className="text-sm text-gray-600 text-center">Kurum içi veri paylaşımı ve işbirliği</p>
          </div>

          <div className="flex flex-col items-center p-6 bg-white/60 rounded-lg backdrop-blur-sm">
            <Zap className="h-12 w-12 text-yellow-600 mb-4" />
            <h3 className="font-semibold text-gray-900 mb-2">Yüksek Performans</h3>
            <p className="text-sm text-gray-600 text-center">Hızlı sorgu ve işleme kapasitesi</p>
          </div>
        </div>
      </div>
    </section>
  )
}
