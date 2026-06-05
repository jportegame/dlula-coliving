import { Outlet } from 'react-router-dom'
import Navbar from '../components/layout/navbar/Navbar2'
import AttachedWhatsappButton from '../components/common/AttachedWhatsappButton'
import Footer from '../components/layout/footer/FooterLuxury'
import PromotionPopup from '../components/common/PromotionPopup'
import SEOHead from '../components/common/SEOHead'

const DefaultLayout = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <SEOHead />
      <Navbar />

      <main className="flex-grow w-full mx-auto">
        <Outlet />
      </main>

      <Footer />
      <PromotionPopup />
      <AttachedWhatsappButton />
    </div>
  )
}

export default DefaultLayout
