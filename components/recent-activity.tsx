import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Clock, User, Database, Shield, AlertTriangle } from "lucide-react"

const activities = [
  {
    id: 1,
    type: "data_upload",
    title: "Yeni veri seti yüklendi",
    description: "Vatandaş Hizmetleri Verileri güncellendi",
    user: "Ahmet Yılmaz",
    time: "5 dakika önce",
    icon: Database,
    status: "success",
  },
  {
    id: 2,
    type: "user_login",
    title: "Kullanıcı girişi",
    description: "Sistem yöneticisi giriş yaptı",
    user: "Fatma Demir",
    time: "15 dakika önce",
    icon: User,
    status: "info",
  },
  {
    id: 3,
    type: "security_alert",
    title: "Güvenlik uyarısı",
    description: "Anormal erişim denemesi tespit edildi",
    user: "Sistem",
    time: "1 saat önce",
    icon: Shield,
    status: "warning",
  },
  {
    id: 4,
    type: "data_processing",
    title: "Veri işleme tamamlandı",
    description: "Mali İstatistikler analizi bitti",
    user: "Mehmet Kaya",
    time: "2 saat önce",
    icon: Database,
    status: "success",
  },
  {
    id: 5,
    type: "system_error",
    title: "Sistem hatası",
    description: "Geçici bağlantı sorunu yaşandı",
    user: "Sistem",
    time: "3 saat önce",
    icon: AlertTriangle,
    status: "error",
  },
]

const getStatusColor = (status: string) => {
  switch (status) {
    case "success":
      return "text-green-600 bg-green-100"
    case "warning":
      return "text-yellow-600 bg-yellow-100"
    case "error":
      return "text-red-600 bg-red-100"
    case "info":
      return "text-blue-600 bg-blue-100"
    default:
      return "text-gray-600 bg-gray-100"
  }
}

export function RecentActivity() {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center space-x-2">
          <Clock className="h-5 w-5" />
          <span>Son Aktiviteler</span>
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {activities.map((activity) => {
            const Icon = activity.icon
            return (
              <div key={activity.id} className="flex items-start space-x-3 p-3 rounded-lg hover:bg-gray-50">
                <div className={`p-2 rounded-full ${getStatusColor(activity.status)}`}>
                  <Icon className="h-4 w-4" />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="text-sm font-medium text-gray-900">{activity.title}</div>
                  <div className="text-sm text-gray-600 mt-1">{activity.description}</div>
                  <div className="flex items-center justify-between mt-2">
                    <span className="text-xs text-gray-500">{activity.user}</span>
                    <span className="text-xs text-gray-400">{activity.time}</span>
                  </div>
                </div>
              </div>
            )
          })}
        </div>

        <div className="mt-4 pt-4 border-t">
          <button className="w-full text-sm text-blue-600 hover:text-blue-800 font-medium">
            Tüm aktiviteleri görüntüle
          </button>
        </div>
      </CardContent>
    </Card>
  )
}
