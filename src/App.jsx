import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import LandingPage from './components/LandingPage'
import CulturalHub from './components/CulturalHub'
import Experiences from './components/Experiences'
import Accommodation from './components/Accommodation'
import ItineraryBuilder from './components/ItineraryBuilder'
import VirtualTour from './components/VirtualTour'
import Shop from './components/Shop'
import Quiz from './components/Quiz'
import PhotoContest from './components/PhotoContest'
import ImpactDashboard from './components/ImpactDashboard'
import Blog from './components/Blog'
import Checkout from './components/Checkout'
import Footer from './components/Footer'

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-white flex flex-col">
        <div className="flex-grow">
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/culture" element={<CulturalHub />} />
            <Route path="/experiences" element={<Experiences />} />
            <Route path="/accommodation" element={<Accommodation />} />
            <Route path="/itinerary" element={<ItineraryBuilder />} />
            <Route path="/virtual-tour" element={<VirtualTour />} />
            <Route path="/shop" element={<Shop />} />
            <Route path="/quiz" element={<Quiz />} />
            <Route path="/photo-contest" element={<PhotoContest />} />
            <Route path="/impact" element={<ImpactDashboard />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/checkout" element={<Checkout />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  )
}

export default App