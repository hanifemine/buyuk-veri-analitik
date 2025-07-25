import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Lightbulb, Globe, MapPin, CheckCircle, Clock } from "lucide-react"

const solutions = [
  {
    id: 1,
    problemId: 3,
    title: "Yedekleme Sistemi Güçlendirme",
    type: "global",
    priority: "high",
    description: "Otomatik yedekleme sisteminin kurulması ve izlenmesi",
    steps: [
      "Çoklu yedekleme noktası oluşturma",
      "Gerçek zamanlı izleme sistemi kurma",
      "Felaket kurtarma planı hazırlama",
    ],
    estimatedTime: "2-3 hafta",
    resources: ["Sistem Yöneticisi", "Veri Mimarı"],
    status: "recommended",
  },
  {
    id: 2,
    problemId: 1,
    title: "Veri Senkronizasyon Protokolü",
    type: "local",
    priority: "high",
    description: "Departmanlar arası veri tutarlılığını sağlayacak protokol",
    steps: ["Veri standardizasyonu", "Otomatik senkronizasyon kuralları", "Çakışma çözüm mekanizması"],
    estimatedTime: "1-2 hafta",
    resources: ["Veri Analisti", "Departman Temsilcileri"],
    status: "in_progress",
  },
  {
    id: 3,
    problemId: 2,
    title: "Performans Optimizasyonu",
    type: "global",
    priority: "medium",
    description: "Veritabanı ve sorgu optimizasyonu",
    steps: ["İndeks optimizasyonu", "Sorgu performans analizi", "Önbellek stratejisi geliştirme"],
    estimatedTime: "3-4 hafta",
    resources: ["DBA", "Backend Developer"],
    status: "planned",
  },
  {
    id: 4,
    problemId: 4,
    title: "Güvenlik İzleme Sistemi",
    type: "local",
    priority: "medium",
    description: "Anormal erişim paternlerinin tespiti ve engellenmesi",
    steps: ["Davranış analizi algoritması", "Otomatik uyarı sistemi", "Erişim log analizi"],
    estimatedTime: "2-3 hafta",
    resources: ["Güvenlik Uzmanı", "DevOps"],
    status: "recommended",
  },
]

const getTypeIcon = (type: string) => {
  return type === "global" ? <Globe className="h-4 w-4" /> : <MapPin className="h-4 w-4" />
}

const getTypeBadge = (type: string) => {
  return type === "global" ? (
    <Badge className="bg-blue-100 text-blue-800">Global Çözüm</Badge>
  ) : (
    <Badge className="bg-green-100 text-green-800">Yerel Çözüm</Badge>
  )
}

const getPriorityBadge = (priority: string) => {
  switch (priority) {
    case "high":
      return <Badge className="bg-red-100 text-red-800">Yüksek Öncelik</Badge>
    case "medium":
      return <Badge className="bg-yellow-100 text-yellow-800">Orta Öncelik</Badge>
    case "low":
      return <Badge className="bg-blue-100 text-blue-800">Düşük Öncelik</Badge>
    default:
      return <Badge>Bilinmiyor</Badge>
  }
}

const getStatusIcon = (status: string) => {
  switch (status) {
    case "completed":
      return <CheckCircle className="h-4 w-4 text-green-500" />
    case "in_progress":
      return <Clock className="h-4 w-4 text-blue-500" />
    case "planned":
      return <Clock className="h-4 w-4 text-yellow-500" />
    case "recommended":
      return <Lightbulb className="h-4 w-4 text-orange-500" />
    default:
      return null
  }
}

const getStatusText = (status: string) => {
  switch (status) {
    case "completed":
      return "Tamamlandı"
    case "in_progress":
      return "Devam Ediyor"
    case "planned":
      return "Planlandı"
    case "recommended":
      return "Önerilen"
    default:
      return "Bilinmiyor"
  }
}

export function SolutionRecommendations() {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center space-x-2">
          <Lightbulb className="h-5 w-5" />
          <span>Çözüm Önerileri</span>
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-6">
          {solutions.map((solution) => (
            <div key={solution.id} className="border rounded-lg p-4">
              <div className="flex items-start justify-between mb-3">
                <div className="flex items-center space-x-2">
                  {getTypeIcon(solution.type)}
                  <h4 className="font-medium text-gray-900">{solution.title}</h4>
                </div>
                <div className="flex space-x-2">
                  {getTypeBadge(solution.type)}
                  {getPriorityBadge(solution.priority)}
                </div>
              </div>

              <p className="text-sm text-gray-600 mb-3">{solution.description}</p>

              <div className="space-y-3">
                <div>
                  <h5 className="text-xs font-medium text-gray-700 mb-2">Uygulama Adımları:</h5>
                  <ul className="text-xs text-gray-600 space-y-1">
                    {solution.steps.map((step, index) => (
                      <li key={index} className="flex items-center space-x-2">
                        <span className="w-4 h-4 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center text-xs font-bold">
                          {index + 1}
                        </span>
                        <span>{step}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="grid grid-cols-2 gap-4 text-xs">
                  <div>
                    <span className="text-gray-500">Tahmini Süre:</span>
                    <div className="font-medium text-gray-700">{solution.estimatedTime}</div>
                  </div>
                  <div>
                    <span className="text-gray-500">Durum:</span>
                    <div className="flex items-center space-x-1">
                      {getStatusIcon(solution.status)}
                      <span className="font-medium text-gray-700">{getStatusText(solution.status)}</span>
                    </div>
                  </div>
                </div>

                <div>
                  <span className="text-xs text-gray-500">Gerekli Kaynaklar:</span>
                  <div className="flex space-x-1 mt-1">
                    {solution.resources.map((resource, index) => (
                      <Badge key={index} variant="outline" className="text-xs">
                        {resource}
                      </Badge>
                    ))}
                  </div>
                </div>

                <div className="flex space-x-2 pt-2">
                  <Button size="sm" variant="outline">
                    Detaylar
                  </Button>
                  {solution.status === "recommended" && <Button size="sm">Uygula</Button>}
                </div>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}
