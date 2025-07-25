"use client"

import Link from "next/link"
import { Bell, Search, Settings, User, Menu, Database, Shield, BarChart3, Folder, Activity, LogOut } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Badge } from "@/components/ui/badge"

export function DashboardHeader() {
  return (
    <header className="bg-white border-b border-gray-200 sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo ve Navigasyon */}
          <div className="flex items-center space-x-8">
            <div className="flex items-center space-x-2">
              <Database className="h-8 w-8 text-blue-600" />
              <div className="flex flex-col">
                <div className="flex items-center space-x-2">
                  <span className="text-xl font-bold text-gray-900">VeriAnalitik</span>
                  <Badge variant="secondary" className="text-xs">
                    v1.0
                  </Badge>
                </div>
                <span className="text-xs text-gray-500">Kurum İçi Departmanlar Arası Ortak Veri Platformu</span>
              </div>
            </div>

            <nav className="hidden md:flex space-x-6">
              <a href="/" className="flex items-center space-x-1 text-blue-600 font-medium">
                <BarChart3 className="h-4 w-4" />
                <span>Dashboard</span>
              </a>
              <a href="/data-management" className="flex items-center space-x-1 text-gray-600 hover:text-gray-900">
                <Database className="h-4 w-4" />
                <span>Veri Yönetimi</span>
              </a>
              <a href="/security" className="flex items-center space-x-1 text-gray-600 hover:text-gray-900">
                <Shield className="h-4 w-4" />
                <span>Güvenlik</span>
              </a>
              <a href="/projects" className="flex items-center space-x-1 text-gray-600 hover:text-gray-900">
                <Folder className="h-4 w-4" />
                <span>Projeler</span>
              </a>
              <a href="/system-analysis" className="flex items-center space-x-1 text-gray-600 hover:text-gray-900">
                <Activity className="h-4 w-4" />
                <span>Sistem Analizi</span>
              </a>
            </nav>
          </div>

          {/* Arama ve Kullanıcı Menüsü */}
          <div className="flex items-center space-x-4">
            <div className="hidden md:block relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
              <Input placeholder="Veri setlerinde ara..." className="pl-10 w-64" />
            </div>

            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="icon" className="relative">
                  <Bell className="h-5 w-5" />
                  <Badge className="absolute -top-1 -right-1 h-5 w-5 rounded-full p-0 flex items-center justify-center text-xs">
                    3
                  </Badge>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-80">
                <DropdownMenuLabel>Bildirimler</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem>
                  <div className="flex items-start space-x-3">
                    <User className="h-4 w-4 mt-1" />
                    <div>
                      <p className="font-medium">Ahmet Yılmaz</p>
                      <p className="text-xs text-gray-500">
                        "Proje A" görevinde sizden bahsetti.
                      </p>
                    </div>
                  </div>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <div className="flex items-start space-x-3">
                    <Folder className="h-4 w-4 mt-1" />
                    <div>
                      <p className="font-medium">Proje B Güncellemesi</p>
                      <p className="text-xs text-gray-500">
                        Yeni bir görev eklendi: "Raporların Hazırlanması".
                      </p>
                    </div>
                  </div>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <div className="flex items-start space-x-3">
                    <Database className="h-4 w-4 mt-1" />
                    <div>
                      <p className="font-medium">Yeni Veri Seti</p>
                      <p className="text-xs text-gray-500">
                        "Sağlık" kategorisine yeni bir veri seti eklendi.
                      </p>
                    </div>
                  </div>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="icon">
                  <User className="h-5 w-5" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-56">
                <DropdownMenuLabel>Hesabım</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem asChild>
                  <Link href="/profile">
                    <User className="mr-2 h-4 w-4" />
                    <span>Profil</span>
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link href="/settings">
                    <Settings className="mr-2 h-4 w-4" />
                    <span>Ayarlar</span>
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem asChild>
                  <Link href="/home">
                    <LogOut className="mr-2 h-4 w-4" />
                    <span>Çıkış Yap</span>
                  </Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            <Button variant="ghost" size="icon" className="md:hidden">
              <Menu className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>
    </header>
  )
}
