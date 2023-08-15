import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Hero from './Pages/Hero Page/Hero'
import { MainHero } from './Pages/Hero Page/MainHero';
import Sats from './Pages/Hero Page/Sats';
const App = () => {
  return (
    <div>
      <Router>
      <Routes>
        <Route path="/" element={<Hero />} />
        {/* <Route path='/stas' element={<Sats/>}/> */}
      </Routes>
    </Router>
    </div>
  )
}

export default App
