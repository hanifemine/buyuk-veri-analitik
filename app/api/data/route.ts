import { NextResponse } from "next/server"

// Örnek veri API endpoint'i
export async function GET() {
  const sampleData = {
    datasets: [
      {
        id: 1,
        name: "Vatandaş Hizmetleri",
        records: 1234567,
        size: "2.4 GB",
        lastUpdated: new Date().toISOString(),
        status: "active",
      },
      {
        id: 2,
        name: "Mali İstatistikler",
        records: 456789,
        size: "856 MB",
        lastUpdated: new Date().toISOString(),
        status: "processing",
      },
    ],
    metrics: {
      totalDatasets: 2847,
      activeUsers: 1234,
      processingVolume: "45.2TB",
      securityScore: 98.5,
    },
  }

  return NextResponse.json(sampleData)
}

export async function POST(request: Request) {
  const body = await request.json()

  // Yeni veri seti ekleme işlemi
  console.log("Yeni veri seti:", body)

  return NextResponse.json({
    success: true,
    message: "Veri seti başarıyla eklendi",
    id: Math.random().toString(36).substr(2, 9),
  })
}
