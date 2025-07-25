import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Badge } from "@/components/ui/badge"
import { CheckCircle, AlertTriangle, XCircle, TrendingUp } from "lucide-react"

const qualityMetrics = [
  {
    name: "Veri Bütünlüğü",
    score: 95,
    status: "excellent",
    issues: 2,
    trend: "up",
  },
  {
    name: "Tutarlılık",
    score: 87,
    status: "good",
    issues: 5,
    trend: "up",
  },
  {
    name: "Eksiksizlik",
    score: 72,
    status: "warning",
    issues: 12,
    trend: "down",
  },
  {
    name: "Doğruluk",
    score: 91,
    status: "excellent",
    issues: 3,
    trend: "up",
  },
]

const getStatusColor = (status: string) => {
  switch (status) {
    case "excellent":
      return "text-green-600 bg-green-100"
    case "good":
      return "text-blue-600 bg-blue-100"
    case "warning":
      return "text-yellow-600 bg-yellow-100"
    case "poor":
      return "text-red-600 bg-red-100"
    default:
      return "text-gray-600 bg-gray-100"
  }
}

const getStatusIcon = (status: string) => {
  switch (status) {
    case "excellent":
      return <CheckCircle className="h-4 w-4 text-green-600" />
    case "good":
      return <CheckCircle className="h-4 w-4 text-blue-600" />
    case "warning":
      return <AlertTriangle className="h-4 w-4 text-yellow-600" />
    case "poor":
      return <XCircle className="h-4 w-4 text-red-600" />
    default:
      return null
  }
}

export function DataQualityMonitor() {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center space-x-2">
          <TrendingUp className="h-5 w-5" />
          <span>Veri Kalitesi İzleme</span>
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-6">
          {qualityMetrics.map((metric, index) => (
            <div key={index} className="space-y-2">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  {getStatusIcon(metric.status)}
                  <span className="text-sm font-medium text-gray-700">{metric.name}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <span className="text-sm font-bold text-gray-900">{metric.score}%</span>
                  <Badge variant="outline" className="text-xs">
                    {metric.issues} sorun
                  </Badge>
                </div>
              </div>
              <Progress value={metric.score} className="h-2" />
            </div>
          ))}

          <div className="border-t pt-4">
            <h4 className="text-sm font-medium text-gray-700 mb-3">Kalite Özeti</h4>
            <div className="grid grid-cols-2 gap-4">
              <div className="text-center p-3 bg-green-50 rounded-lg">
                <div className="text-2xl font-bold text-green-600">86%</div>
                <div className="text-xs text-green-700">Genel Kalite</div>
              </div>
              <div className="text-center p-3 bg-blue-50 rounded-lg">
                <div className="text-2xl font-bold text-blue-600">22</div>
                <div className="text-xs text-blue-700">Toplam Sorun</div>
              </div>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
