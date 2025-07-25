import { ProjectsHeader } from "@/components/projects-header"
import { ProjectList } from "@/components/project-list"
import { ProjectCreation } from "@/components/project-creation"

export default function ProjectsPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <ProjectsHeader />

      <main className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Kurum İçi Projeler</h1>
          <p className="text-gray-600">Departmanlar arası veri paylaşımı ve proje yönetimi</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <ProjectList />
          </div>
          <div className="lg:col-span-1">
            <ProjectCreation />
          </div>
        </div>
      </main>
    </div>
  )
}
