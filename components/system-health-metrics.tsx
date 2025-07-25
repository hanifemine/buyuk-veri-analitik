import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Activity, Server, Database, Shield, Zap, HardDrive } from "lucide-react"

const healthMetrics = [
  {
    name: "Sistem Performansı",
    value: 87,
    status: "good",
    icon: Activity,
    details: "CPU: 65%, RAM: 72%, Disk: 45%",
  },
  {
    name: "Veritabanı Sağlığı",
    value: 92,
    status: "excellent",
    icon: Database,
    details: "Bağlantı: Stabil, Sorgu: Hızlı",
  },
  {
    name: "Güvenlik Durumu",
    value: 95,
    status: "excellent",
    icon: Shield,
    details: "Firewall: Aktif, SSL: Geçerli",
  },
  {
    name: "API Performansı",
    value: 78,
    status: "warning",
    icon: Zap,
    details: "Yanıt Süresi: 245ms, Hata: %2.1",
  },
  {
    name: "Depolama Kapasitesi",
    value: 68,
    status: "good",
    icon: HardDrive,
    details: "Kullanılan: 6.8TB / 10TB",
  },
  {
    name: "Sunucu Durumu",
    value: 99,
    status: "excellent",
    icon: Server,
    details: "Uptime: 99.9%, Load: Normal",
  },
]

const getStatusColor = (status: string) => {
  switch (status) {
    case "excellent":
      return "text-green-600"
    case "good":
      return "text-blue-600"
    case "warning":
      return "text-yellow-600"
    case "critical":
      return "text-red-600"
    default:
      return "text-gray-600"
  }
}

const getStatusBadge = (status: string) => {
  switch (status) {
    case "excellent":
      return <Badge className="bg-green-100 text-green-800">Mükemmel</Badge>
    case "good":
      return <Badge className="bg-blue-100 text-blue-800">İyi</Badge>
    case "warning":
      return <Badge className="bg-yellow-100 text-yellow-800">Uyarı</Badge>
    case "critical":
      return <Badge className="bg-red-100 text-red-800">Kritik</Badge>
    default:
      return <Badge>Bilinmiyor</Badge>
  }
}

const getProgressColor = (status: string) => {
  switch (status) {
    case "excellent":
      return "bg-green-500"
    case "good":
      return "bg-blue-500"
    case "warning":
      return "bg-yellow-500"
    case "critical":
      return "bg-red-500"
    default:
      return "bg-gray-500"
  }
}

export function SystemHealthMetrics() {
  const overallHealth = Math.round(healthMetrics.reduce((sum, metric) => sum + metric.value, 0) / healthMetrics.length)

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Activity className="h-5 w-5" />
            <span>Sistem Sağlık Metrikleri</span>
          </div>
          <div className="flex items-center space-x-2">
            <span className="text-2xl font-bold text-gray-900">{overallHealth}%</span>
            <Badge className="bg-green-100 text-green-800">Genel Sağlık</Badge>
          </div>
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {healthMetrics.map((metric, index) => {
            const Icon = metric.icon
            return (
              <div key={index} className="space-y-3">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <Icon className={`h-5 w-5 ${getStatusColor(metric.status)}`} />
                    <span className="text-sm font-medium text-gray-700">{metric.name}</span>
                  </div>
                  {getStatusBadge(metric.status)}
                </div>

                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-2xl font-bold text-gray-900">{metric.value}%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div
                      className={`h-2 rounded-full transition-all duration-300 ${getProgressColor(metric.status)}`}
                      style={{ width: `${metric.value}%` }}
                    />
                  </div>
                  <p className="text-xs text-gray-500">{metric.details}</p>
                </div>
              </div>
            )
          })}
        </div>

        <div className="mt-8 grid grid-cols-1 md:grid-cols-4 gap-4">
          <div className="text-center p-4 bg-green-50 rounded-lg">
            <div className="text-xl font-bold text-green-600">4</div>
            <div className="text-xs text-green-700">Mükemmel Sistem</div>
          </div>
          <div className="text-center p-4 bg-blue-50 rounded-lg">
            <div className="text-xl font-bold text-blue-600">1</div>
            <div className="text-xs text-blue-700">İyi Durum</div>
          </div>
          <div className="text-center p-4 bg-yellow-50 rounded-lg">
            <div className="text-xl font-bold text-yellow-600">1</div>
            <div className="text-xs text-yellow-700">Uyarı</div>
          </div>
          <div className="text-center p-4 bg-red-50 rounded-lg">
            <div className="text-xl font-bold text-red-600">0</div>
            <div className="text-xs text-red-700">Kritik Sorun</div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
