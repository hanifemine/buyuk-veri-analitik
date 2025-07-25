import { SystemAnalysisHeader } from "@/components/system-analysis-header"
import { ProblemDetection } from "@/components/problem-detection"
import { SolutionRecommendations } from "@/components/solution-recommendations"
import { SystemHealthMetrics } from "@/components/system-health-metrics"

export default function SystemAnalysisPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <SystemAnalysisHeader />

      <main className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Sistem Analizi ve Sorun Tespiti</h1>
          <p className="text-gray-600">Potansiyel veri sorunları ve çözüm önerileri</p>
        </div>

        <div className="space-y-8">
          <SystemHealthMetrics />
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <ProblemDetection />
            <SolutionRecommendations />
          </div>
        </div>
      </main>
    </div>
  )
}
