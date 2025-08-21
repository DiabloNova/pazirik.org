import { PromotionalBanner } from "@/components/promotional-banner"
import { Navbar } from "@/components/navbar"
import { HeaderSlider } from "@/components/header-slider"
import { SpecialOffers } from "@/components/special-offers"
import { ServicesSection } from "@/components/services-section"
import { WhyPazirikSection } from "@/components/why-pazirik-section"
import { Footer } from "@/components/footer"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background">
      <PromotionalBanner />
      <Navbar />

      {/* Main content with top padding to account for fixed navbar */}
      <main className="pt-16">
        <section id="home">
          <HeaderSlider />
        </section>

        <section id="offers">
          <SpecialOffers />
        </section>

        <ServicesSection />

        <section id="about">
          <WhyPazirikSection />
        </section>
      </main>

      <Footer />
    </div>
  )
}
