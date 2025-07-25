"use client"

import type React from "react"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"
import { Database, Shield, UserPlus, ArrowLeft } from "lucide-react"
import Link from "next/link"

const departments = [
  "Dijital Dönüşüm Dairesi",
  "Bilgi İşlem Dairesi",
  "Halkla İlişkiler Dairesi",
  "Medya Takip Dairesi",
  "Sosyal Medya Dairesi",
  "Araştırma Dairesi",
  "İnsan Kaynakları Dairesi",
  "Mali İşler Dairesi",
]

export default function RegisterPage() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    tcNo: "",
    department: "",
    position: "",
    password: "",
    confirmPassword: "",
  })
  const [agreements, setAgreements] = useState({
    terms: false,
    privacy: false,
    kvkk: false,
  })
  const [isLoading, setIsLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)

    // Form validasyonu
    if (formData.password !== formData.confirmPassword) {
      alert("Şifreler eşleşmiyor!")
      setIsLoading(false)
      return
    }

    if (!agreements.terms || !agreements.privacy || !agreements.kvkk) {
      alert("Lütfen tüm sözleşmeleri kabul edin!")
      setIsLoading(false)
      return
    }

    try {
      // Kayıt işlemi simülasyonu
      await new Promise((resolve) => setTimeout(resolve, 2000))
      alert("Kayıt başarılı! Giriş sayfasına yönlendiriliyorsunuz.")
      window.location.href = "/login"
    } catch (error) {
      console.error("Kayıt hatası:", error)
      alert("Bir hata oluştu")
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-red-50 flex items-center justify-center p-4">
      <div className="w-full max-w-2xl">
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
          <p className="text-sm text-gray-500 mt-2">Büyük Veri Analitik Sistemi - Yeni Hesap Oluştur</p>
        </div>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <UserPlus className="h-5 w-5" />
              <span>Personel Kaydı</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="firstName">Ad *</Label>
                  <Input
                    id="firstName"
                    placeholder="Adınızı girin"
                    value={formData.firstName}
                    onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="lastName">Soyad *</Label>
                  <Input
                    id="lastName"
                    placeholder="Soyadınızı girin"
                    value={formData.lastName}
                    onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                    required
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="tcNo">T.C. Kimlik No *</Label>
                <Input
                  id="tcNo"
                  placeholder="T.C. Kimlik numaranızı girin"
                  maxLength={11}
                  value={formData.tcNo}
                  onChange={(e) => setFormData({ ...formData, tcNo: e.target.value.replace(/\D/g, "") })}
                  required
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="email">E-posta *</Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="ornek@iletisim.gov.tr"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="phone">Telefon</Label>
                  <Input
                    id="phone"
                    placeholder="0555 123 45 67"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="department">Daire Başkanlığı *</Label>
                  <Select
                    value={formData.department}
                    onValueChange={(value) => setFormData({ ...formData, department: value })}
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Daire seçin" />
                    </SelectTrigger>
                    <SelectContent>
                      {departments.map((dept) => (
                        <SelectItem key={dept} value={dept}>
                          {dept}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="position">Pozisyon</Label>
                  <Input
                    id="position"
                    placeholder="Uzman, Müdür, vb."
                    value={formData.position}
                    onChange={(e) => setFormData({ ...formData, position: e.target.value })}
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="password">Şifre *</Label>
                  <Input
                    id="password"
                    type="password"
                    placeholder="Güçlü şifre oluşturun"
                    value={formData.password}
                    onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="confirmPassword">Şifre Tekrar *</Label>
                  <Input
                    id="confirmPassword"
                    type="password"
                    placeholder="Şifrenizi tekrar girin"
                    value={formData.confirmPassword}
                    onChange={(e) => setFormData({ ...formData, confirmPassword: e.target.value })}
                    required
                  />
                </div>
              </div>

              <div className="space-y-3 pt-4 border-t">
                <div className="flex items-center space-x-2">
                  <Checkbox
                    id="terms"
                    checked={agreements.terms}
                    onCheckedChange={(checked) => setAgreements({ ...agreements, terms: !!checked })}
                  />
                  <Label htmlFor="terms" className="text-sm">
                    <a href="#" className="text-blue-600 hover:underline">
                      Kullanım Şartları
                    </a>
                    'nı okudum ve kabul ediyorum *
                  </Label>
                </div>

                <div className="flex items-center space-x-2">
                  <Checkbox
                    id="privacy"
                    checked={agreements.privacy}
                    onCheckedChange={(checked) => setAgreements({ ...agreements, privacy: !!checked })}
                  />
                  <Label htmlFor="privacy" className="text-sm">
                    <a href="#" className="text-blue-600 hover:underline">
                      Gizlilik Politikası
                    </a>
                    'nı okudum ve kabul ediyorum *
                  </Label>
                </div>

                <div className="flex items-center space-x-2">
                  <Checkbox
                    id="kvkk"
                    checked={agreements.kvkk}
                    onCheckedChange={(checked) => setAgreements({ ...agreements, kvkk: !!checked })}
                  />
                  <Label htmlFor="kvkk" className="text-sm">
                    <a href="#" className="text-blue-600 hover:underline">
                      KVKK Aydınlatma Metni
                    </a>
                    'ni okudum ve kişisel verilerimin işlenmesini kabul ediyorum *
                  </Label>
                </div>
              </div>

              <Button type="submit" className="w-full" disabled={isLoading}>
                {isLoading ? "Kayıt oluşturuluyor..." : "Hesap Oluştur"}
              </Button>
            </form>

            <div className="mt-6 text-center">
              <p className="text-sm text-gray-600">
                Zaten hesabınız var mı?{" "}
                <Link href="/login" className="text-blue-600 hover:underline font-medium">
                  Giriş Yap
                </Link>
              </p>
            </div>

            <div className="mt-6 p-4 bg-blue-50 rounded-lg">
              <div className="flex items-center space-x-2 text-blue-800 mb-2">
                <Shield className="h-4 w-4" />
                <span className="text-sm font-medium">Güvenlik Bilgilendirmesi</span>
              </div>
              <div className="text-xs text-blue-700 space-y-1">
                <p>• Şifreniz en az 8 karakter olmalı ve büyük/küçük harf, rakam içermeli</p>
                <p>• Hesabınız sistem yöneticisi onayından sonra aktif olacaktır</p>
                <p>• Kişisel verileriniz 6698 sayılı KVKK kapsamında korunmaktadır</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
