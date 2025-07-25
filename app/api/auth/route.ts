import { NextResponse } from "next/server"

// Basit authentication endpoint
export async function POST(request: Request) {
  const { username, password } = await request.json()

  // Gerçek uygulamada burada veritabanı kontrolü yapılır
  if (username === "admin" && password === "admin123") {
    return NextResponse.json({
      success: true,
      user: {
        id: 1,
        username: "admin",
        role: "administrator",
        permissions: ["read", "write", "admin"],
      },
      token: "sample-jwt-token",
    })
  }

  return NextResponse.json({ success: false, message: "Geçersiz kullanıcı adı veya şifre" }, { status: 401 })
}
