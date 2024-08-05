import { useState } from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { NavBar } from './components/NavBar'
import { Footer } from './components/Footer'
import { Home } from './pages/Home';
import { About } from './pages/About';
import { Books } from './pages/Books';
import { FAQ } from './pages/FAQ';
import { HowToUse } from './pages/HowToUse';
import { GettingStarted } from './pages/GettingStarted';

function App() {

  return (
    <div className="flex flex-col min-h-screen">
        <Router>
        <NavBar />
          <div className="flex-1">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about/*" element={<About />} />
              <Route path="/books/*" element={<Books />} />
              <Route path="/faq" element={<FAQ />} />
              <Route path="/how-to-use/*" element={<HowToUse />} />
              <Route path="/getting-started" element={<GettingStarted />} />
            </Routes>
          </div>
        <Footer />
        </Router>
    </div>
  )
}

export default App
