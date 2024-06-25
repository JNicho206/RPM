import { useState } from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css'
import { NavBar } from './components/NavBar'
import { Footer } from './components/Footer'
import { Home } from './pages/Home';
import { About } from './pages/About';
import { Books } from './pages/Books';
import { FAQ } from './pages/FAQ';
import { HowToUse } from './pages/HowToUse';

function App() {

  return (
    <>
      <NavBar></NavBar>
      <Router>
        <Routes>
          <Route path="/" Component={Home}/>
          <Route path="/about" Component={About} />
          <Route path="/books" Component={Books} />
          <Route path="/faq" Component={FAQ}/>
          <Route path="/how-to-use" Component={HowToUse}/>
        </Routes>
      </Router>
      <Footer></Footer>
    </>
  )
}

export default App
