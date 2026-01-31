import Header from './sections/Header'
import Hero from './sections/Hero'
import SpecializedAssistance from './sections/SpecializedAssistance'
import ThreeSteps from './sections/ThreeSteps'
import Services from './sections/Services'
import CTA from './sections/CTA'
import Footer from './sections/Footer'
import WhatsAppButton from './components/WhatsAppButton'
import CookieBanner from './components/CookieBanner'

function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <Hero />
        <SpecializedAssistance />
        <ThreeSteps />
        <Services />
        <CTA />
      </main>
      <Footer />
      <WhatsAppButton />
      <CookieBanner />
    </div>
  )
}

export default App
