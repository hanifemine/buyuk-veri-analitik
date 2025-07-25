"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  LineChart,
  Line,
  AreaChart,
  Area,
  BarChart,
  Bar,
  PieChart,
  Pie,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts"

const timeSeriesData = [
  { name: "Oca", value: 4000, users: 2400, processing: 2400 },
  { name: "Şub", value: 3000, users: 1398, processing: 2210 },
  { name: "Mar", value: 2000, users: 9800, processing: 2290 },
  { name: "Nis", value: 2780, users: 3908, processing: 2000 },
  { name: "May", value: 1890, users: 4800, processing: 2181 },
  { name: "Haz", value: 2390, users: 3800, processing: 2500 },
  { name: "Tem", value: 3490, users: 4300, processing: 2100 },
]

const categoryData = [
  { name: "Finansal", value: 400, fill: "#0088FE" },
  { name: "Operasyonel", value: 300, fill: "#00C49F" },
  { name: "Müşteri", value: 300, fill: "#FFBB28" },
  { name: "Risk", value: 200, fill: "#FF8042" },
  { name: "Diğer", value: 100, fill: "#8884D8" },
]

const departmentData = [
  { name: "IT Departmanı", value: 45 },
  { name: "Finans", value: 35 },
  { name: "İnsan Kaynakları", value: 25 },
  { name: "Operasyon", value: 40 },
  { name: "Pazarlama", value: 30 },
  { name: "Satış", value: 38 },
]

export function AnalyticsCharts() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
      <Card className="lg:col-span-2">
        <CardHeader>
          <CardTitle>Veri İşleme Analitikleri</CardTitle>
        </CardHeader>
        <CardContent>
          <Tabs defaultValue="trend" className="w-full">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="trend">Trend Analizi</TabsTrigger>
              <TabsTrigger value="volume">Hacim Analizi</TabsTrigger>
              <TabsTrigger value="performance">Performans</TabsTrigger>
            </TabsList>

            <TabsContent value="trend" className="mt-6">
              <ResponsiveContainer width="100%" height={300}>
                <LineChart data={timeSeriesData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="name" />
                  <YAxis />
                  <Tooltip />
                  <Legend />
                  <Line type="monotone" dataKey="value" stroke="#2563eb" strokeWidth={2} name="Toplam İşlem" />
                  <Line type="monotone" dataKey="users" stroke="#16a34a" strokeWidth={2} name="Kullanıcı Aktivitesi" />
                </LineChart>
              </ResponsiveContainer>
            </TabsContent>

            <TabsContent value="volume" className="mt-6">
              <ResponsiveContainer width="100%" height={300}>
                <AreaChart data={timeSeriesData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="name" />
                  <YAxis />
                  <Tooltip />
                  <Legend />
                  <Area
                    type="monotone"
                    dataKey="processing"
                    stackId="1"
                    stroke="#8884d8"
                    fill="#8884d8"
                    name="İşleme Hacmi"
                  />
                </AreaChart>
              </ResponsiveContainer>
            </TabsContent>

            <TabsContent value="performance" className="mt-6">
              <ResponsiveContainer width="100%" height={300}>
                <BarChart data={departmentData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="name" />
                  <YAxis />
                  <Tooltip />
                  <Bar dataKey="value" fill="#3b82f6" name="Performans Skoru" />
                </BarChart>
              </ResponsiveContainer>
            </TabsContent>
          </Tabs>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Veri Kategorileri</CardTitle>
        </CardHeader>
        <CardContent>
          <ResponsiveContainer width="100%" height={250}>
            <PieChart>
              <Pie
                data={categoryData}
                cx="50%"
                cy="50%"
                labelLine={false}
                label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                outerRadius={80}
                fill="#8884d8"
                dataKey="value"
              >
                {categoryData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.fill} />
                ))}
              </Pie>
              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Departman Kullanımı</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {departmentData.map((dept, index) => (
              <div key={index} className="flex items-center justify-between">
                <span className="text-sm font-medium text-gray-700">{dept.name}</span>
                <div className="flex items-center space-x-2">
                  <div className="w-24 bg-gray-200 rounded-full h-2">
                    <div className="bg-blue-600 h-2 rounded-full" style={{ width: `${(dept.value / 50) * 100}%` }} />
                  </div>
                  <span className="text-sm text-gray-500 w-8">{dept.value}%</span>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
