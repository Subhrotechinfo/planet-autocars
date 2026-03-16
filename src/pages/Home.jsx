import Hero from '../components/Hero'
import BrandLogos from '../components/BrandLogos'
import WhyChoose from '../components/WhyChoose'
import FeaturedInventory from '../components/FeaturedInventory'
import CTABanner from '../components/CTABanner'
import FinancingSection from '../components/FinancingSection'
import SellYourCar from '../components/SellYourCar'
import Testimonials from '../components/Testimonials'
import ContactSection from '../components/ContactSection'

export default function Home() {
  return (
    <>
      <Hero />
      <BrandLogos />
      <WhyChoose />
      <FeaturedInventory />
      <CTABanner />
      <FinancingSection />
      <SellYourCar />
      <Testimonials />
      <ContactSection />
    </>
  )
}
