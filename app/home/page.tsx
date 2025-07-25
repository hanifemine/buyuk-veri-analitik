import { HomeHeader } from "@/components/home-header"
import { FeaturesSection } from "@/components/features-section"
import { HeroSection } from "@/components/hero-section"
import { HomeFooter } from "@/components/home-footer"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white">
      <HomeHeader />
      <main>
        <HeroSection />
        <FeaturesSection />
      </main>
      <HomeFooter />
    </div>
  )
}
