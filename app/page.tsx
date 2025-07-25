import { Suspense } from "react"
import { DashboardHeader } from "@/components/dashboard-header"
import { MetricsCards } from "@/components/metrics-cards"
import { AnalyticsCharts } from "@/components/analytics-charts"
import { DataTable } from "@/components/data-table"
import { RecentActivity } from "@/components/recent-activity"

export default function DashboardPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <DashboardHeader />

      <main className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Büyük Veri Analitik Sistemi</h1>
          <p className="text-gray-600">Kamu kurumları için geliştirilmiş açık kaynak veri analitik platformu</p>
        </div>

        <Suspense fallback={<div>Yükleniyor...</div>}>
          <div className="space-y-8">
            <MetricsCards />
            <AnalyticsCharts />

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              <div className="lg:col-span-2">
                <DataTable />
              </div>
              <div className="lg:col-span-1">
                <RecentActivity />
              </div>
            </div>
          </div>
        </Suspense>
      </main>
    </div>
  )
}
