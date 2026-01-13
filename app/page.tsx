import { Hero } from "@/components/hero"
import { Services } from "@/components/services"
import { Technologies } from "@/components/technologies"
import { Stats } from "@/components/stats"
import { CTA } from "@/components/cta"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { PartnersCarousel } from "@/components/clients-carousel"
import { ScrollToTop } from "@/components/scroll-to-top"
import { Products } from "@/components/products"

export default function Home() {
  return (
    <div className="relative min-h-screen">
      <Header />
      <main>
        <Hero />
        <PartnersCarousel />
        {/* <Stats /> */}
        <Services />
        <Products />
        <Technologies />
        <CTA />
      </main>
      <Footer />
      <ScrollToTop />
    </div>
  );
}
