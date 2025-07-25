import { DashboardHeader } from "@/components/dashboard-header"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Textarea } from "@/components/ui/textarea"
import { User, Mail, Phone, Edit, UserPlus, MessageCircle, Users } from "lucide-react"

export default function ProfilePage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <DashboardHeader />

      <main className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Profile Card */}
          <div className="lg:col-span-1">
            <Card>
              <CardHeader className="flex flex-col items-center text-center">
                <Avatar className="h-24 w-24 mb-4">
                  <AvatarImage src="/placeholder-user.jpg" alt="Kullanıcı" />
                  <AvatarFallback>AY</AvatarFallback>
                </Avatar>
                <CardTitle className="text-2xl">Ahmet Yılmaz</CardTitle>
                <CardDescription>Veri Bilimci</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center space-x-3">
                  <Mail className="h-5 w-5 text-gray-500" />
                  <span>ahmet.yilmaz@example.com</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Phone className="h-5 w-5 text-gray-500" />
                  <span>+90 555 123 45 67</span>
                </div>
                <div className="flex space-x-2 pt-2">
                  <Button className="flex-1">
                    <UserPlus className="mr-2 h-4 w-4" />
                    Takip Et
                  </Button>
                  <Button variant="outline" className="flex-1">
                    <MessageCircle className="mr-2 h-4 w-4" />
                    Mesaj Gönder
                  </Button>
                </div>
              </CardContent>
            </Card>
            <Card className="mt-8">
              <CardHeader>
                <CardTitle>Birimler ve Topluluklar</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  <li className="flex items-center space-x-3">
                    <Users className="h-5 w-5 text-blue-600" />
                    <span>Veri Analitiği Departmanı</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <Users className="h-5 w-5 text-green-600" />
                    <span>Makine Öğrenmesi Grubu</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>

          {/* Communication Area */}
          <div className="lg:col-span-2">
            <Card>
              <CardHeader>
                <CardTitle>Yorum Bırakın</CardTitle>
                <CardDescription>Ahmet Yılmaz'ın profiline bir yorum bırakın.</CardDescription>
              </CardHeader>
              <CardContent>
                <form className="space-y-4">
                  <Textarea placeholder="Yorumunuzu buraya yazın..." rows={4} />
                  <Button>Yorum Yap</Button>
                </form>
              </CardContent>
            </Card>

            <Card className="mt-8">
              <CardHeader>
                <CardTitle>Yorumlar</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="flex items-start space-x-4">
                  <Avatar>
                    <AvatarImage src="/placeholder-user.jpg" alt="Zeynep" />
                    <AvatarFallback>ZY</AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="font-semibold">Zeynep Kaya</p>
                    <p className="text-sm text-gray-700">Harika bir çalışma! Projedeki katkıların için teşekkürler.</p>
                    <p className="text-xs text-gray-500 mt-1">2 saat önce</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <Avatar>
                    <AvatarImage src="/placeholder-user.jpg" alt="Mehmet" />
                    <AvatarFallback>MÖ</AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="font-semibold">Mehmet Öztürk</p>
                    <p className="text-sm text-gray-700">
                      Son analiz raporu hakkında konuşabilir miyiz? Müsait olduğunda haberleşelim.
                    </p>
                    <p className="text-xs text-gray-500 mt-1">1 gün önce</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
    </div>
  )
}
