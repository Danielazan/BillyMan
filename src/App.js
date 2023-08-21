import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Hero from './Pages/Hero Page/Hero'
import SignUp from 'Pages/SignUp Page/SignUp';
import About from 'Pages/About Page/About';

const App = () => {
  return (
    <div>
      <Router>
      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path='/signup' element={<SignUp/>}/>
        <Route path='/About' element={<About/>}/>
      </Routes>
    </Router>
    </div>
  )
}

export default App
