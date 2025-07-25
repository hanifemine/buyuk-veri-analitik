import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { AlertTriangle, XCircle, Clock, TrendingDown } from "lucide-react"

const detectedProblems = [
  {
    id: 1,
    title: "Veri Tutarsızlığı",
    description: "Finans ve Operasyon departmanları arasında mali veri uyumsuzluğu",
    severity: "high",
    affectedSystems: ["Mali Sistem", "ERP"],
    detectedAt: "2 saat önce",
    impact: "Raporlama gecikmeleri",
    category: "data_consistency",
  },
  {
    id: 2,
    title: "Performans Düşüklüğü",
    description: "Büyük veri setlerinde sorgu süreleri normalin üzerinde",
    severity: "medium",
    affectedSystems: ["Analitik DB", "Dashboard"],
    detectedAt: "4 saat önce",
    impact: "Kullanıcı deneyimi",
    category: "performance",
  },
  {
    id: 3,
    title: "Veri Kaybı Riski",
    description: "Yedekleme işlemlerinde düzensizlik tespit edildi",
    severity: "critical",
    affectedSystems: ["Backup Sistemi"],
    detectedAt: "6 saat önce",
    impact: "Veri güvenliği",
    category: "data_loss",
  },
  {
    id: 4,
    title: "Erişim Anomalisi",
    description: "Olağandışı saatlerde yüksek veri erişimi",
    severity: "medium",
    affectedSystems: ["API Gateway"],
    detectedAt: "1 gün önce",
    impact: "Güvenlik riski",
    category: "security",
  },
]

const getSeverityBadge = (severity: string) => {
  switch (severity) {
    case "critical":
      return <Badge className="bg-red-100 text-red-800">Kritik</Badge>
    case "high":
      return <Badge className="bg-orange-100 text-orange-800">Yüksek</Badge>
    case "medium":
      return <Badge className="bg-yellow-100 text-yellow-800">Orta</Badge>
    case "low":
      return <Badge className="bg-blue-100 text-blue-800">Düşük</Badge>
    default:
      return <Badge>Bilinmiyor</Badge>
  }
}

const getSeverityIcon = (severity: string) => {
  switch (severity) {
    case "critical":
      return <XCircle className="h-5 w-5 text-red-500" />
    case "high":
      return <AlertTriangle className="h-5 w-5 text-orange-500" />
    case "medium":
      return <Clock className="h-5 w-5 text-yellow-500" />
    case "low":
      return <TrendingDown className="h-5 w-5 text-blue-500" />
    default:
      return null
  }
}

export function ProblemDetection() {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center space-x-2">
          <AlertTriangle className="h-5 w-5" />
          <span>Sorun Tespiti</span>
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {detectedProblems.map((problem) => (
            <div key={problem.id} className="border rounded-lg p-4 hover:bg-gray-50">
              <div className="flex items-start justify-between mb-2">
                <div className="flex items-center space-x-2">
                  {getSeverityIcon(problem.severity)}
                  <h4 className="font-medium text-gray-900">{problem.title}</h4>
                </div>
                {getSeverityBadge(problem.severity)}
              </div>

              <p className="text-sm text-gray-600 mb-3">{problem.description}</p>

              <div className="space-y-2">
                <div className="flex items-center justify-between text-xs">
                  <span className="text-gray-500">Etkilenen Sistemler:</span>
                  <div className="flex space-x-1">
                    {problem.affectedSystems.map((system, index) => (
                      <Badge key={index} variant="outline" className="text-xs">
                        {system}
                      </Badge>
                    ))}
                  </div>
                </div>

                <div className="flex items-center justify-between text-xs">
                  <span className="text-gray-500">Tespit Zamanı:</span>
                  <span className="text-gray-700">{problem.detectedAt}</span>
                </div>

                <div className="flex items-center justify-between text-xs">
                  <span className="text-gray-500">Etki:</span>
                  <span className="text-gray-700">{problem.impact}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-6 grid grid-cols-2 gap-4">
          <div className="text-center p-3 bg-red-50 rounded-lg">
            <div className="text-xl font-bold text-red-600">1</div>
            <div className="text-xs text-red-700">Kritik Sorun</div>
          </div>
          <div className="text-center p-3 bg-yellow-50 rounded-lg">
            <div className="text-xl font-bold text-yellow-600">3</div>
            <div className="text-xs text-yellow-700">Toplam Sorun</div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
