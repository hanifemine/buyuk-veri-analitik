import { DataManagementHeader } from "@/components/data-management-header"
import { DataTransferPanel } from "@/components/data-transfer-panel"
import { DataQualityMonitor } from "@/components/data-quality-monitor"
import { DepartmentDataSharing } from "@/components/department-data-sharing"

export default function DataManagementPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <DataManagementHeader />

      <main className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Veri Yönetimi</h1>
          <p className="text-gray-600">Kurum içi veri paylaşımı ve kalite kontrolü</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          <DataTransferPanel />
          <DataQualityMonitor />
        </div>

        <DepartmentDataSharing />
      </main>
    </div>
  )
}
