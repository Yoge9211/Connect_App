import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import Header from './components/layout/Header'

import Home from './components/home/Home'
import Join from './components/JoinPage/Join'
import AmbulanceSection from './components/ambulancePage/AmbulanceSection'
import AboutUs from './components/about_us/About_us'
import Signup from './components/SignMethod/SignIn'
import BankInformation from './components/SignMethod/BankInformation'
import Vehicle from './components/SignMethod/Vehicle.jsx'

import Footer from './components/layout/Footer'

import './styles/app.scss'

function App({ isAuthenticated = false }) {
  return (
    <Router>
      <Header isAuthenticated={false} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/join_us" element={<Join />} />
        <Route path="/ambulance" element={<AmbulanceSection />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/bankinformation" element={<BankInformation />} />
        <Route path="/vehicle" element={<Vehicle />} />
      </Routes>
      <Footer />
    </Router>
  )
}

export default App
