"use client"

import type React from "react"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Database, Shield, Lock, ArrowLeft } from "lucide-react"
import Link from "next/link"

export default function LoginPage() {
  const [credentials, setCredentials] = useState({
    username: "",
    password: "",
  })
  const [isLoading, setIsLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)

    try {
      const response = await fetch("/api/auth", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(credentials),
      })

      const data = await response.json()

      if (data.success) {
        // Başarılı giriş - ana sayfaya yönlendir
        window.location.href = "/"
      } else {
        alert(data.message)
      }
    } catch (error) {
      console.error("Giriş hatası:", error)
      alert("Bir hata oluştu")
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-red-50 flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        <div className="text-center mb-8">
          <Link href="/home" className="inline-flex items-center space-x-2 text-blue-600 hover:text-blue-800 mb-4">
            <ArrowLeft className="h-4 w-4" />
            <span>Ana Sayfaya Dön</span>
          </Link>
          <div className="flex items-center justify-center space-x-2 mb-4">
            <Database className="h-10 w-10 text-blue-600" />
            <span className="text-2xl font-bold text-gray-900">VeriAnalitik</span>
          </div>
          <h1 className="text-xl text-gray-600">T.C. İletişim Başkanlığı</h1>
          <p className="text-sm text-gray-500 mt-2">Büyük Veri Analitik Sistemi</p>
        </div>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <Lock className="h-5 w-5" />
              <span>Personel Girişi</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="username">Kullanıcı Adı / E-posta</Label>
                <Input
                  id="username"
                  type="text"
                  placeholder="Kullanıcı adınızı veya e-postanızı girin"
                  value={credentials.username}
                  onChange={(e) =>
                    setCredentials((prev) => ({
                      ...prev,
                      username: e.target.value,
                    }))
                  }
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="password">Şifre</Label>
                <Input
                  id="password"
                  type="password"
                  placeholder="Şifrenizi girin"
                  value={credentials.password}
                  onChange={(e) =>
                    setCredentials((prev) => ({
                      ...prev,
                      password: e.target.value,
                    }))
                  }
                  required
                />
              </div>

              <div className="flex items-center justify-between text-sm">
                <label className="flex items-center space-x-2">
                  <input type="checkbox" className="rounded" />
                  <span className="text-gray-600">Beni hatırla</span>
                </label>
                <a href="#" className="text-blue-600 hover:underline">
                  Şifremi unuttum
                </a>
              </div>

              <Button type="submit" className="w-full" disabled={isLoading}>
                {isLoading ? "Giriş yapılıyor..." : "Giriş Yap"}
              </Button>
            </form>

            <div className="mt-6 text-center">
              <p className="text-sm text-gray-600">
                Hesabınız yok mu?{" "}
                <Link href="/register" className="text-blue-600 hover:underline font-medium">
                  Kayıt Ol
                </Link>
              </p>
            </div>

            <div className="mt-6 p-4 bg-blue-50 rounded-lg">
              <div className="flex items-center space-x-2 text-blue-800 mb-2">
                <Shield className="h-4 w-4" />
                <span className="text-sm font-medium">Demo Bilgileri</span>
              </div>
              <div className="text-xs text-blue-700">
                <p>Kullanıcı Adı: admin</p>
                <p>Şifre: admin123</p>
              </div>
            </div>

            <div className="mt-4 p-4 bg-red-50 rounded-lg">
              <div className="text-xs text-red-700 space-y-1">
                <p>• Bu sistem sadece T.C. İletişim Başkanlığı personeli içindir</p>
                <p>• Yetkisiz erişim girişimleri kayıt altına alınmaktadır</p>
                <p>• Teknik destek: destek@iletisim.gov.tr</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
