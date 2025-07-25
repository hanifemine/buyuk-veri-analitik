import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Folder, Users, Calendar, MoreHorizontal } from "lucide-react"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"

const projects = [
  {
    id: 1,
    name: "Mali Raporlama Entegrasyonu",
    description: "Finans ve Operasyon departmanları arasında mali veri entegrasyonu",
    departments: ["Finans", "Operasyon", "IT"],
    progress: 75,
    status: "active",
    deadline: "2024-02-15",
    datasets: 8,
    participants: 12,
  },
  {
    id: 2,
    name: "İnsan Kaynakları Analitik",
    description: "Personel performans ve maaş analizi projesi",
    departments: ["İK", "Finans"],
    progress: 45,
    status: "active",
    deadline: "2024-03-01",
    datasets: 5,
    participants: 8,
  },
  {
    id: 3,
    name: "Vatandaş Hizmetleri Dashboard",
    description: "Kamu hizmetleri için birleşik dashboard geliştirme",
    departments: ["IT", "Operasyon", "Pazarlama"],
    progress: 90,
    status: "review",
    deadline: "2024-01-30",
    datasets: 12,
    participants: 15,
  },
  {
    id: 4,
    name: "Güvenlik Audit Sistemi",
    description: "Tüm departmanlar için güvenlik denetim sistemi",
    departments: ["Güvenlik", "IT"],
    progress: 20,
    status: "planning",
    deadline: "2024-04-15",
    datasets: 3,
    participants: 6,
  },
  {
    id: 5,
    name: "Eğitim Performans Analizi",
    description: "Eğitim kurumları performans değerlendirme sistemi",
    departments: ["Eğitim", "IT", "Analitik"],
    progress: 100,
    status: "completed",
    deadline: "2024-01-15",
    datasets: 15,
    participants: 20,
  },
]

const getStatusBadge = (status: string) => {
  switch (status) {
    case "active":
      return <Badge className="bg-green-100 text-green-800">Aktif</Badge>
    case "planning":
      return <Badge className="bg-blue-100 text-blue-800">Planlama</Badge>
    case "review":
      return <Badge className="bg-yellow-100 text-yellow-800">İnceleme</Badge>
    case "completed":
      return <Badge className="bg-gray-100 text-gray-800">Tamamlandı</Badge>
    case "paused":
      return <Badge className="bg-red-100 text-red-800">Durduruldu</Badge>
    default:
      return <Badge>Bilinmiyor</Badge>
  }
}

const getProgressColor = (progress: number) => {
  if (progress >= 80) return "bg-green-500"
  if (progress >= 60) return "bg-blue-500"
  if (progress >= 40) return "bg-yellow-500"
  return "bg-red-500"
}

export function ProjectList() {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center space-x-2">
          <Folder className="h-5 w-5" />
          <span>Aktif Projeler</span>
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-6">
          {projects.map((project) => (
            <div key={project.id} className="border rounded-lg p-4 hover:bg-gray-50">
              <div className="flex items-start justify-between mb-3">
                <div className="flex-1">
                  <div className="flex items-center space-x-2 mb-2">
                    <h4 className="font-medium text-gray-900">{project.name}</h4>
                    {getStatusBadge(project.status)}
                  </div>
                  <p className="text-sm text-gray-600 mb-3">{project.description}</p>
                </div>
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="ghost" size="icon">
                      <MoreHorizontal className="h-4 w-4" />
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end">
                    <DropdownMenuItem>Detayları Görüntüle</DropdownMenuItem>
                    <DropdownMenuItem>Düzenle</DropdownMenuItem>
                    <DropdownMenuItem>Rapor Al</DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>

              <div className="space-y-3">
                <div>
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-sm text-gray-600">İlerleme</span>
                    <span className="text-sm font-medium text-gray-900">{project.progress}%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div
                      className={`h-2 rounded-full transition-all duration-300 ${getProgressColor(project.progress)}`}
                      style={{ width: `${project.progress}%` }}
                    />
                  </div>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
                  <div className="flex items-center space-x-1">
                    <Users className="h-4 w-4 text-gray-400" />
                    <span className="text-gray-600">{project.participants} kişi</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Folder className="h-4 w-4 text-gray-400" />
                    <span className="text-gray-600">{project.datasets} veri seti</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Calendar className="h-4 w-4 text-gray-400" />
                    <span className="text-gray-600">{project.deadline}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <span className="text-gray-600">{project.departments.length} departman</span>
                  </div>
                </div>

                <div>
                  <span className="text-xs text-gray-500 mb-1 block">Katılımcı Departmanlar:</span>
                  <div className="flex flex-wrap gap-1">
                    {project.departments.map((dept, index) => (
                      <Badge key={index} variant="outline" className="text-xs">
                        {dept}
                      </Badge>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-6 grid grid-cols-1 md:grid-cols-4 gap-4">
          <div className="text-center p-3 bg-green-50 rounded-lg">
            <div className="text-xl font-bold text-green-600">2</div>
            <div className="text-xs text-green-700">Aktif Proje</div>
          </div>
          <div className="text-center p-3 bg-blue-50 rounded-lg">
            <div className="text-xl font-bold text-blue-600">1</div>
            <div className="text-xs text-blue-700">Planlama</div>
          </div>
          <div className="text-center p-3 bg-yellow-50 rounded-lg">
            <div className="text-xl font-bold text-yellow-600">1</div>
            <div className="text-xs text-yellow-700">İnceleme</div>
          </div>
          <div className="text-center p-3 bg-gray-50 rounded-lg">
            <div className="text-xl font-bold text-gray-600">1</div>
            <div className="text-xs text-gray-700">Tamamlandı</div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
