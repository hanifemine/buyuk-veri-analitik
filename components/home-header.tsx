import { Database, Menu } from "lucide-react"
import { Button } from "@/components/ui/button"

export function HomeHeader() {
  return (
    <header className="bg-white/80 backdrop-blur-sm border-b border-gray-200 sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-2">
              <Database className="h-8 w-8 text-blue-600" />
              <div className="flex flex-col">
                <span className="text-xl font-bold text-gray-900">VeriAnalitik</span>
                <span className="text-xs text-gray-500">T.C. İletişim Başkanlığı</span>
              </div>
            </div>
          </div>

          <nav className="hidden md:flex space-x-6">
            <a href="/home" className="text-gray-600 hover:text-gray-900">
              Ana Sayfa
            </a>
            <a href="/#features" className="text-gray-600 hover:text-gray-900">
              Özellikler
            </a>
            <a href="/about" className="text-gray-600 hover:text-gray-900">
              Hakkında
            </a>
            <a href="/contact" className="text-gray-600 hover:text-gray-900">
              İletişim
            </a>
          </nav>

          <Button variant="ghost" size="icon" className="md:hidden">
            <Menu className="h-5 w-5" />
          </Button>
        </div>
      </div>
    </header>
  )
}
