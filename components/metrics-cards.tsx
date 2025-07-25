import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { TrendingUp, TrendingDown, Database, Users, Activity, Shield } from "lucide-react"

const metrics = [
  {
    title: "Toplam Veri Seti",
    value: "2,847",
    change: "+12.5%",
    trend: "up",
    icon: Database,
    description: "Son 30 günde",
  },
  {
    title: "Aktif Kullanıcılar",
    value: "1,234",
    change: "+8.2%",
    trend: "up",
    icon: Users,
    description: "Bu ay",
  },
  {
    title: "İşlem Hacmi",
    value: "45.2TB",
    change: "-2.1%",
    trend: "down",
    icon: Activity,
    description: "Günlük ortalama",
  },
  {
    title: "Güvenlik Skoru",
    value: "98.5%",
    change: "+0.3%",
    trend: "up",
    icon: Shield,
    description: "Sistem güvenliği",
  },
]

export function MetricsCards() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {metrics.map((metric, index) => {
        const Icon = metric.icon
        const TrendIcon = metric.trend === "up" ? TrendingUp : TrendingDown

        return (
          <Card key={index} className="hover:shadow-lg transition-shadow">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-gray-600">{metric.title}</CardTitle>
              <Icon className="h-4 w-4 text-gray-400" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-gray-900 mb-1">{metric.value}</div>
              <div className="flex items-center space-x-1">
                <TrendIcon className={`h-3 w-3 ${metric.trend === "up" ? "text-green-500" : "text-red-500"}`} />
                <span className={`text-xs font-medium ${metric.trend === "up" ? "text-green-600" : "text-red-600"}`}>
                  {metric.change}
                </span>
                <span className="text-xs text-gray-500">{metric.description}</span>
              </div>
            </CardContent>
          </Card>
        )
      })}
    </div>
  )
}
