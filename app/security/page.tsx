import { DashboardHeader } from "@/components/dashboard-header"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ShieldCheck, KeyRound } from "lucide-react"

export default function SecurityPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <DashboardHeader />

      <main className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Güvenlik Ayarları</h1>
          <p className="text-gray-600">Hesap güvenliğinizi yönetin ve verilerinizi güvende tutun.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <Card>
            <CardHeader>
              <div className="flex items-center space-x-4">
                <ShieldCheck className="h-10 w-10 text-green-500" />
                <div>
                  <CardTitle>İki Aşamalı Doğrulama</CardTitle>
                  <CardDescription>Hesabınıza ekstra bir güvenlik katmanı ekleyin.</CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700 mb-4">
                İki aşamalı doğrulama (2FA), şifreniz çalınsa bile hesabınıza yalnızca sizin erişebilmenizi sağlar.
                Etkinleştirildiğinde, giriş yaparken telefonunuza gönderilen bir kodu girmeniz istenecektir.
              </p>
              <Button>2FA'yı Etkinleştir</Button>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <div className="flex items-center space-x-4">
                <KeyRound className="h-10 w-10 text-blue-500" />
                <div>
                  <CardTitle>Şifre Yönetimi</CardTitle>
                  <CardDescription>Güçlü ve benzersiz bir şifre ile hesabınızı koruyun.</CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700 mb-4">
                Şifrenizi düzenli olarak değiştirmenizi ve başka sitelerde kullanmadığınız benzersiz bir şifre seçmenizi
                öneririz. Güçlü bir şifre, büyük/küçük harf, rakam ve sembol içermelidir.
              </p>
              <Button variant="outline">Şifreyi Değiştir</Button>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  )
}
