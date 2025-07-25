import { DashboardHeader } from "@/components/dashboard-header"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Switch } from "@/components/ui/switch"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export default function SettingsPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <DashboardHeader />

      <main className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Ayarlar</h1>
          <p className="text-gray-600">Sistem genelindeki ayarları yönetin.</p>
        </div>

        <div className="space-y-8">
          {/* Genel Ayarlar */}
          <Card>
            <CardHeader>
              <CardTitle>Genel Proje Ayarları</CardTitle>
              <CardDescription>Proje varsayılanlarını ve bildirimleri yönetin.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="flex items-center justify-between">
                <Label htmlFor="email-notifications">E-posta Bildirimleri</Label>
                <Switch id="email-notifications" defaultChecked />
              </div>
              <div className="flex items-center justify-between">
                <Label htmlFor="default-view">Varsayılan Proje Görünümü</Label>
                <Select defaultValue="list">
                  <SelectTrigger className="w-[180px]">
                    <SelectValue placeholder="Görünüm Seç" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="list">Liste</SelectItem>
                    <SelectItem value="grid">Izgara</SelectItem>
                    <SelectItem value="kanban">Kanban</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </CardContent>
          </Card>

          {/* Veri Ayarları */}
          <Card>
            <CardHeader>
              <CardTitle>Veri Ayarları</CardTitle>
              <CardDescription>Veri gizliliği ve paylaşım ayarlarını yapılandırın.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="flex items-center justify-between">
                <Label htmlFor="data-sharing">Departmanlar Arası Veri Paylaşımı</Label>
                <Switch id="data-sharing" />
              </div>
              <div className="flex items-center justify-between">
                <Label htmlFor="data-retention">Veri Saklama Süresi</Label>
                <Select defaultValue="90">
                  <SelectTrigger className="w-[180px]">
                    <SelectValue placeholder="Süre Seç" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="30">30 Gün</SelectItem>
                    <SelectItem value="90">90 Gün</SelectItem>
                    <SelectItem value="365">1 Yıl</SelectItem>
                    <SelectItem value="unlimited">Sınırsız</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </CardContent>
          </Card>

          {/* Güvenlik Ayarları */}
          <Card>
            <CardHeader>
              <CardTitle>Güvenlik Ayarları</CardTitle>
              <CardDescription>Hesap güvenliği ve erişim ayarlarını yönetin.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <Button variant="outline">İki Aşamalı Doğrulamayı Yönet</Button>
              <Button variant="outline">Şifreyi Değiştir</Button>
              <Button variant="destructive">Hesabı Sil</Button>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  )
}
