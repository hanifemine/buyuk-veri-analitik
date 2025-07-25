import { Database, Mail, Phone, MapPin } from "lucide-react"

export function HomeFooter() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <Database className="h-8 w-8 text-blue-400" />
              <div>
                <span className="text-xl font-bold">VeriAnalitik</span>
                <div className="text-sm text-gray-400">T.C. İletişim Başkanlığı</div>
              </div>
            </div>
            <p className="text-gray-300 mb-4 max-w-md">
              Kamu kurumları için geliştirilmiş açık kaynak büyük veri analitik sistemi. Dijital dönüşümün gücünü
              keşfedin.
            </p>
            <div className="text-sm text-gray-400">© 2024 T.C. İletişim Başkanlığı. Tüm hakları saklıdır.</div>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Hızlı Bağlantılar</h3>
            <ul className="space-y-2 text-sm text-gray-300">
              <li>
                <a href="#features" className="hover:text-white">
                  Özellikler
                </a>
              </li>
              <li>
                <a href="/login" className="hover:text-white">
                  Personel Girişi
                </a>
              </li>
              <li>
                <a href="/register" className="hover:text-white">
                  Kayıt Ol
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  Dokümantasyon
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  API Rehberi
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">İletişim</h3>
            <ul className="space-y-3 text-sm text-gray-300">
              <li className="flex items-center space-x-2">
                <MapPin className="h-4 w-4" />
                <span>Eskişehir Yolu 7. km, Ankara</span>
              </li>
              <li className="flex items-center space-x-2">
                <Phone className="h-4 w-4" />
                <span>+90 312 XXX XX XX</span>
              </li>
              <li className="flex items-center space-x-2">
                <Mail className="h-4 w-4" />
                <span>destek@iletisim.gov.tr</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <div className="flex flex-wrap justify-center gap-6 text-sm text-gray-400">
            <a href="#" className="hover:text-white">
              Gizlilik Politikası
            </a>
            <a href="#" className="hover:text-white">
              Kullanım Şartları
            </a>
            <a href="#" className="hover:text-white">
              KVKK Aydınlatma Metni
            </a>
            <a href="#" className="hover:text-white">
              Açık Kaynak Lisansı
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
