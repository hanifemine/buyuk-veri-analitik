import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Users, Share2, Database, Clock } from "lucide-react"

const departmentSharing = [
  {
    department: "Finans Departmanı",
    sharedDatasets: 12,
    receivedDatasets: 8,
    activeProjects: 3,
    lastActivity: "2 saat önce",
    status: "active",
  },
  {
    department: "İnsan Kaynakları",
    sharedDatasets: 6,
    receivedDatasets: 15,
    activeProjects: 2,
    lastActivity: "5 saat önce",
    status: "active",
  },
  {
    department: "Operasyon",
    sharedDatasets: 18,
    receivedDatasets: 12,
    activeProjects: 5,
    lastActivity: "1 gün önce",
    status: "moderate",
  },
  {
    department: "IT Departmanı",
    sharedDatasets: 25,
    receivedDatasets: 5,
    activeProjects: 7,
    lastActivity: "30 dakika önce",
    status: "active",
  },
  {
    department: "Pazarlama",
    sharedDatasets: 4,
    receivedDatasets: 20,
    activeProjects: 1,
    lastActivity: "3 gün önce",
    status: "low",
  },
]

const getStatusBadge = (status: string) => {
  switch (status) {
    case "active":
      return <Badge className="bg-green-100 text-green-800">Aktif</Badge>
    case "moderate":
      return <Badge className="bg-yellow-100 text-yellow-800">Orta</Badge>
    case "low":
      return <Badge className="bg-gray-100 text-gray-800">Düşük</Badge>
    default:
      return <Badge>Bilinmiyor</Badge>
  }
}

export function DepartmentDataSharing() {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center space-x-2">
          <Users className="h-5 w-5" />
          <span>Departmanlar Arası Veri Paylaşımı</span>
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b">
                <th className="text-left py-3 px-4 font-medium text-gray-700">Departman</th>
                <th className="text-center py-3 px-4 font-medium text-gray-700">Paylaşılan</th>
                <th className="text-center py-3 px-4 font-medium text-gray-700">Alınan</th>
                <th className="text-center py-3 px-4 font-medium text-gray-700">Aktif Projeler</th>
                <th className="text-center py-3 px-4 font-medium text-gray-700">Durum</th>
                <th className="text-center py-3 px-4 font-medium text-gray-700">Son Aktivite</th>
                <th className="text-right py-3 px-4 font-medium text-gray-700">İşlemler</th>
              </tr>
            </thead>
            <tbody>
              {departmentSharing.map((dept, index) => (
                <tr key={index} className="border-b hover:bg-gray-50">
                  <td className="py-3 px-4">
                    <div className="font-medium text-gray-900">{dept.department}</div>
                  </td>
                  <td className="py-3 px-4 text-center">
                    <div className="flex items-center justify-center space-x-1">
                      <Share2 className="h-4 w-4 text-blue-500" />
                      <span>{dept.sharedDatasets}</span>
                    </div>
                  </td>
                  <td className="py-3 px-4 text-center">
                    <div className="flex items-center justify-center space-x-1">
                      <Database className="h-4 w-4 text-green-500" />
                      <span>{dept.receivedDatasets}</span>
                    </div>
                  </td>
                  <td className="py-3 px-4 text-center">
                    <Badge variant="outline">{dept.activeProjects}</Badge>
                  </td>
                  <td className="py-3 px-4 text-center">{getStatusBadge(dept.status)}</td>
                  <td className="py-3 px-4 text-center">
                    <div className="flex items-center justify-center space-x-1 text-gray-600">
                      <Clock className="h-4 w-4" />
                      <span className="text-sm">{dept.lastActivity}</span>
                    </div>
                  </td>
                  <td className="py-3 px-4 text-right">
                    <Button variant="outline" size="sm">
                      Detaylar
                    </Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="text-center p-4 bg-blue-50 rounded-lg">
            <div className="text-2xl font-bold text-blue-600">65</div>
            <div className="text-sm text-blue-700">Toplam Paylaşım</div>
          </div>
          <div className="text-center p-4 bg-green-50 rounded-lg">
            <div className="text-2xl font-bold text-green-600">60</div>
            <div className="text-sm text-green-700">Toplam Alım</div>
          </div>
          <div className="text-center p-4 bg-purple-50 rounded-lg">
            <div className="text-2xl font-bold text-purple-600">18</div>
            <div className="text-sm text-purple-700">Aktif Projeler</div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
