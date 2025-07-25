import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { LogIn, UserPlus, Shield, Users } from "lucide-react"
import Link from "next/link"

export function AuthOptions() {
  return (
    <section className="py-20 px-4">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Sisteme Erişim</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            T.C. İletişim Başkanlığı personeli için güvenli giriş ve kayıt seçenekleri
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <Card className="hover:shadow-xl transition-all duration-300 bg-white/80 backdrop-blur-sm border-2 hover:border-blue-200">
            <CardContent className="p-8 text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <LogIn className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Personel Girişi</h3>
              <p className="text-gray-600 mb-6">
                Mevcut hesabınızla sisteme giriş yapın ve veri analitik araçlarına erişim sağlayın.
              </p>
              <div className="space-y-3 mb-6">
                <div className="flex items-center justify-center space-x-2 text-sm text-gray-500">
                  <Shield className="h-4 w-4" />
                  <span>Güvenli kimlik doğrulama</span>
                </div>
                <div className="flex items-center justify-center space-x-2 text-sm text-gray-500">
                  <Users className="h-4 w-4" />
                  <span>Rol tabanlı erişim</span>
                </div>
              </div>
              <Link href="/login">
                <Button className="w-full bg-blue-600 hover:bg-blue-700">
                  <LogIn className="h-4 w-4 mr-2" />
                  Giriş Yap
                </Button>
              </Link>
            </CardContent>
          </Card>

          <Card className="hover:shadow-xl transition-all duration-300 bg-white/80 backdrop-blur-sm border-2 hover:border-green-200">
            <CardContent className="p-8 text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <UserPlus className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Yeni Kayıt</h3>
              <p className="text-gray-600 mb-6">
                T.C. İletişim Başkanlığı personeli için yeni hesap oluşturun ve sisteme katılın.
              </p>
              <div className="space-y-3 mb-6">
                <div className="flex items-center justify-center space-x-2 text-sm text-gray-500">
                  <Shield className="h-4 w-4" />
                  <span>KVKK uyumlu kayıt</span>
                </div>
                <div className="flex items-center justify-center space-x-2 text-sm text-gray-500">
                  <Users className="h-4 w-4" />
                  <span>Departman bazlı yetkilendirme</span>
                </div>
              </div>
              <Link href="/register">
                <Button className="w-full bg-green-600 hover:bg-green-700">
                  <UserPlus className="h-4 w-4 mr-2" />
                  Kayıt Ol
                </Button>
              </Link>
            </CardContent>
          </Card>
        </div>

        <div className="mt-12 text-center">
          <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6 max-w-2xl mx-auto">
            <div className="flex items-center justify-center space-x-2 text-yellow-800 mb-2">
              <Shield className="h-5 w-5" />
              <span className="font-medium">Önemli Bilgilendirme</span>
            </div>
            <p className="text-sm text-yellow-700">
              Bu sistem sadece T.C. İletişim Başkanlığı personeli tarafından kullanılabilir. Kayıt işlemi sistem
              yöneticisi onayı sonrasında aktif hale gelecektir.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
