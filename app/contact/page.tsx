import { HomeHeader } from "@/components/home-header"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { MapPin, Phone, Mail } from "lucide-react"

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <HomeHeader />

      <main className="container mx-auto px-4 py-8">
        <div className="mb-8 text-center">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">İletişim</h1>
          <p className="text-gray-600">Bizimle iletişime geçin veya ofisimizi ziyaret edin.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="bg-white p-8 rounded-lg shadow">
            <h2 className="text-2xl font-bold mb-6">Bize Ulaşın</h2>
            <form className="space-y-4">
              <Input placeholder="Adınız Soyadınız" />
              <Input type="email" placeholder="E-posta Adresiniz" />
              <Input placeholder="Konu" />
              <Textarea placeholder="Mesajınız" rows={5} />
              <Button type="submit" className="w-full">
                Gönder
              </Button>
            </form>
          </div>

          {/* Contact Info & Map */}
          <div className="space-y-8">
            <div className="bg-white p-8 rounded-lg shadow">
              <h2 className="text-2xl font-bold mb-6">İletişim Bilgileri</h2>
              <div className="space-y-4">
                <div className="flex items-start space-x-4">
                  <MapPin className="h-6 w-6 text-blue-600 mt-1" />
                  <div>
                    <h3 className="font-semibold">Adres</h3>
                    <p className="text-gray-700">Ceyhun Atuf Kansu Caddesi No:122 Balgat, Çankaya, Ankara</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <Phone className="h-6 w-6 text-blue-600 mt-1" />
                  <div>
                    <h3 className="font-semibold">Telefon</h3>
                    <p className="text-gray-700">+90 (312) 590 20 00</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <Mail className="h-6 w-6 text-blue-600 mt-1" />
                  <div>
                    <h3 className="font-semibold">E-posta</h3>
                    <p className="text-gray-700">info@iletisim.gov.tr</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-white rounded-lg shadow overflow-hidden">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3060.836188165684!2d32.80579961538019!3d39.8999998794283!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14d34f5a6b6b6b6b%3A0x14d34f5a6b6b6b6b!2sT.C.+%C4%B0leti%C5%9Fim+Ba%C5%9Fkanl%C4%B1%C4%9F%C4%B1!5e0!3m2!1str!2str!4v1627042935688!5m2!1str!2str"
                width="100%"
                height="300"
                style={{ border: 0 }}
                allowFullScreen={true}
                loading="lazy"
              ></iframe>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
