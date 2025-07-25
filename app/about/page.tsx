import { HomeHeader } from "@/components/home-header"
import { Building, Info } from "lucide-react"

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <HomeHeader />

      <main className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Hakkında</h1>
          <p className="text-gray-600">Kurumumuz ve projemiz hakkında daha fazla bilgi edinin.</p>
        </div>

        <div className="space-y-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-lg shadow">
              <div className="flex items-center space-x-4 mb-4">
                <Building className="h-10 w-10 text-blue-600" />
                <h2 className="text-2xl font-bold">T.C. İletişim Başkanlığı</h2>
              </div>
              <p className="text-gray-700">
                T.C. İletişim Başkanlığı, Türkiye Cumhuriyeti'nin iletişim politikalarının belirlenmesi ve
                yürütülmesinden sorumlu devlet kurumudur. Kamu diplomasisi, medya ilişkileri ve doğru bilginin
                yayılması gibi alanlarda faaliyet gösterir.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow">
              <div className="flex items-center space-x-4 mb-4">
                <Info className="h-10 w-10 text-green-600" />
                <h2 className="text-2xl font-bold">VeriAnalitik Projesi</h2>
              </div>
              <p className="text-gray-700">
                VeriAnalitik, kamu kurumları için geliştirilmiş açık kaynak bir veri analitik platformudur. Amacı,
                departmanlar arası veri paylaşımını ve işbirliğini kolaylaştırarak, veriye dayalı karar alma
                süreçlerini güçlendirmektir. Güvenli, hızlı ve etkili veri analizi çözümleri sunar.
              </p>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
