import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Send, Clock, CheckCircle, AlertCircle } from "lucide-react"

const departments = [
  { id: "finance", name: "Finans Departmanı" },
  { id: "hr", name: "İnsan Kaynakları" },
  { id: "operations", name: "Operasyon" },
  { id: "it", name: "IT Departmanı" },
  { id: "marketing", name: "Pazarlama" },
]

const recentTransfers = [
  {
    id: 1,
    dataset: "Mali Raporlar Q4",
    from: "Finans",
    to: "Operasyon",
    status: "completed",
    time: "2 saat önce",
  },
  {
    id: 2,
    dataset: "Personel Verileri",
    from: "İK",
    to: "Finans",
    status: "pending",
    time: "5 saat önce",
  },
  {
    id: 3,
    dataset: "Sistem Logları",
    from: "IT",
    to: "Güvenlik",
    status: "failed",
    time: "1 gün önce",
  },
]

const getStatusIcon = (status: string) => {
  switch (status) {
    case "completed":
      return <CheckCircle className="h-4 w-4 text-green-500" />
    case "pending":
      return <Clock className="h-4 w-4 text-yellow-500" />
    case "failed":
      return <AlertCircle className="h-4 w-4 text-red-500" />
    default:
      return null
  }
}

const getStatusText = (status: string) => {
  switch (status) {
    case "completed":
      return "Tamamlandı"
    case "pending":
      return "Bekliyor"
    case "failed":
      return "Başarısız"
    default:
      return "Bilinmiyor"
  }
}

export function DataTransferPanel() {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center space-x-2">
          <Send className="h-5 w-5" />
          <span>Veri Transferi</span>
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="space-y-4">
          <div>
            <label className="text-sm font-medium text-gray-700 mb-2 block">Veri Seti Seç</label>
            <Select>
              <SelectTrigger>
                <SelectValue placeholder="Gönderilecek veri setini seçin" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="dataset1">Vatandaş Hizmetleri Verileri</SelectItem>
                <SelectItem value="dataset2">Mali İstatistikler</SelectItem>
                <SelectItem value="dataset3">Nüfus Kayıtları</SelectItem>
                <SelectItem value="dataset4">Eğitim İstatistikleri</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div>
            <label className="text-sm font-medium text-gray-700 mb-2 block">Hedef Departman</label>
            <Select>
              <SelectTrigger>
                <SelectValue placeholder="Departman seçin" />
              </SelectTrigger>
              <SelectContent>
                {departments.map((dept) => (
                  <SelectItem key={dept.id} value={dept.id}>
                    {dept.name}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          <Button className="w-full">
            <Send className="h-4 w-4 mr-2" />
            Veri Gönder
          </Button>
        </div>

        <div className="border-t pt-4">
          <h4 className="text-sm font-medium text-gray-700 mb-3">Son Transferler</h4>
          <div className="space-y-3">
            {recentTransfers.map((transfer) => (
              <div key={transfer.id} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                <div className="flex-1">
                  <div className="text-sm font-medium text-gray-900">{transfer.dataset}</div>
                  <div className="text-xs text-gray-500">
                    {transfer.from} → {transfer.to}
                  </div>
                </div>
                <div className="flex items-center space-x-2">
                  {getStatusIcon(transfer.status)}
                  <span className="text-xs text-gray-500">{getStatusText(transfer.status)}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
