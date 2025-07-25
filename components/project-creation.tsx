"use client"

import type React from "react"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Badge } from "@/components/ui/badge"
import { Plus, X } from "lucide-react"
import { useState } from "react"

const departments = [
  "Finans Departmanı",
  "İnsan Kaynakları",
  "Operasyon",
  "IT Departmanı",
  "Pazarlama",
  "Güvenlik",
  "Eğitim",
  "Analitik",
]

export function ProjectCreation() {
  const [selectedDepartments, setSelectedDepartments] = useState<string[]>([])
  const [projectData, setProjectData] = useState({
    name: "",
    description: "",
    deadline: "",
    priority: "",
  })

  const addDepartment = (dept: string) => {
    if (!selectedDepartments.includes(dept)) {
      setSelectedDepartments([...selectedDepartments, dept])
    }
  }

  const removeDepartment = (dept: string) => {
    setSelectedDepartments(selectedDepartments.filter((d) => d !== dept))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Yeni proje:", { ...projectData, departments: selectedDepartments })
    // Proje oluşturma işlemi
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center space-x-2">
          <Plus className="h-5 w-5" />
          <span>Yeni Proje Oluştur</span>
        </CardTitle>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="projectName">Proje Adı</Label>
            <Input
              id="projectName"
              placeholder="Proje adını girin"
              value={projectData.name}
              onChange={(e) => setProjectData({ ...projectData, name: e.target.value })}
              required
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="projectDescription">Açıklama</Label>
            <Textarea
              id="projectDescription"
              placeholder="Proje açıklamasını girin"
              value={projectData.description}
              onChange={(e) => setProjectData({ ...projectData, description: e.target.value })}
              rows={3}
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="deadline">Bitiş Tarihi</Label>
            <Input
              id="deadline"
              type="date"
              value={projectData.deadline}
              onChange={(e) => setProjectData({ ...projectData, deadline: e.target.value })}
              required
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="priority">Öncelik</Label>
            <Select
              value={projectData.priority}
              onValueChange={(value) => setProjectData({ ...projectData, priority: value })}
            >
              <SelectTrigger>
                <SelectValue placeholder="Öncelik seçin" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="high">Yüksek</SelectItem>
                <SelectItem value="medium">Orta</SelectItem>
                <SelectItem value="low">Düşük</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <Label>Katılımcı Departmanlar</Label>
            <Select onValueChange={addDepartment}>
              <SelectTrigger>
                <SelectValue placeholder="Departman ekle" />
              </SelectTrigger>
              <SelectContent>
                {departments
                  .filter((dept) => !selectedDepartments.includes(dept))
                  .map((dept) => (
                    <SelectItem key={dept} value={dept}>
                      {dept}
                    </SelectItem>
                  ))}
              </SelectContent>
            </Select>

            {selectedDepartments.length > 0 && (
              <div className="flex flex-wrap gap-2 mt-2">
                {selectedDepartments.map((dept) => (
                  <Badge key={dept} variant="secondary" className="flex items-center space-x-1">
                    <span>{dept}</span>
                    <button
                      type="button"
                      onClick={() => removeDepartment(dept)}
                      className="ml-1 hover:bg-gray-300 rounded"
                    >
                      <X className="h-3 w-3" />
                    </button>
                  </Badge>
                ))}
              </div>
            )}
          </div>

          <Button type="submit" className="w-full">
            <Plus className="h-4 w-4 mr-2" />
            Proje Oluştur
          </Button>
        </form>

        <div className="mt-6 p-4 bg-blue-50 rounded-lg">
          <h4 className="text-sm font-medium text-blue-800 mb-2">Proje Oluşturma İpuçları</h4>
          <ul className="text-xs text-blue-700 space-y-1">
            <li>• Net ve anlaşılır proje adı seçin</li>
            <li>• Tüm ilgili departmanları dahil edin</li>
            <li>• Gerçekçi bitiş tarihi belirleyin</li>
            <li>• Veri paylaşım kurallarını önceden planlayın</li>
          </ul>
        </div>
      </CardContent>
    </Card>
  )
}
