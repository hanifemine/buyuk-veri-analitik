import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { MoreHorizontal, Download, Eye, Edit } from "lucide-react"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"

const datasets = [
  {
    id: 1,
    name: "Vatandaş Hizmetleri Verileri",
    type: "CSV",
    size: "2.4 GB",
    lastUpdated: "2 saat önce",
    status: "active",
    records: "1,234,567",
  },
  {
    id: 2,
    name: "Mali İstatistikler",
    type: "JSON",
    size: "856 MB",
    lastUpdated: "5 saat önce",
    status: "processing",
    records: "456,789",
  },
  {
    id: 3,
    name: "Nüfus Kayıtları",
    type: "XML",
    size: "3.2 GB",
    lastUpdated: "1 gün önce",
    status: "active",
    records: "2,345,678",
  },
  {
    id: 4,
    name: "Eğitim İstatistikleri",
    type: "CSV",
    size: "1.1 GB",
    lastUpdated: "3 gün önce",
    status: "inactive",
    records: "789,012",
  },
  {
    id: 5,
    name: "Sağlık Verileri",
    type: "JSON",
    size: "4.7 GB",
    lastUpdated: "1 hafta önce",
    status: "active",
    records: "3,456,789",
  },
]

const getStatusBadge = (status: string) => {
  switch (status) {
    case "active":
      return <Badge className="bg-green-100 text-green-800">Aktif</Badge>
    case "processing":
      return <Badge className="bg-yellow-100 text-yellow-800">İşleniyor</Badge>
    case "inactive":
      return <Badge className="bg-gray-100 text-gray-800">Pasif</Badge>
    default:
      return <Badge>Bilinmiyor</Badge>
  }
}

export function DataTable() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Veri Setleri</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b">
                <th className="text-left py-3 px-4 font-medium text-gray-700">Veri Seti</th>
                <th className="text-left py-3 px-4 font-medium text-gray-700">Tip</th>
                <th className="text-left py-3 px-4 font-medium text-gray-700">Boyut</th>
                <th className="text-left py-3 px-4 font-medium text-gray-700">Kayıt Sayısı</th>
                <th className="text-left py-3 px-4 font-medium text-gray-700">Durum</th>
                <th className="text-left py-3 px-4 font-medium text-gray-700">Son Güncelleme</th>
                <th className="text-right py-3 px-4 font-medium text-gray-700">İşlemler</th>
              </tr>
            </thead>
            <tbody>
              {datasets.map((dataset) => (
                <tr key={dataset.id} className="border-b hover:bg-gray-50">
                  <td className="py-3 px-4">
                    <div className="font-medium text-gray-900">{dataset.name}</div>
                  </td>
                  <td className="py-3 px-4">
                    <Badge variant="outline">{dataset.type}</Badge>
                  </td>
                  <td className="py-3 px-4 text-gray-600">{dataset.size}</td>
                  <td className="py-3 px-4 text-gray-600">{dataset.records}</td>
                  <td className="py-3 px-4">{getStatusBadge(dataset.status)}</td>
                  <td className="py-3 px-4 text-gray-600">{dataset.lastUpdated}</td>
                  <td className="py-3 px-4 text-right">
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button variant="ghost" size="icon">
                          <MoreHorizontal className="h-4 w-4" />
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent align="end">
                        <DropdownMenuItem>
                          <Eye className="mr-2 h-4 w-4" />
                          Görüntüle
                        </DropdownMenuItem>
                        <DropdownMenuItem>
                          <Edit className="mr-2 h-4 w-4" />
                          Düzenle
                        </DropdownMenuItem>
                        <DropdownMenuItem>
                          <Download className="mr-2 h-4 w-4" />
                          İndir
                        </DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </CardContent>
    </Card>
  )
}
