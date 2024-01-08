import { Route, Routes } from 'react-router-dom'
import './App.css'
import Footer from './components/Footer'
import Navbar from './components/Navbar'
import Docs from './pages/Docs'

import Home from './pages/Home'
import Handbook from './pages/Handbook'
import Playground from './pages/Playground'


function App() {
  

  return (
    <> 
    <Navbar/>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/docs" element={<Docs />} />
      <Route path="/handbook/*" element={<Handbook />} />
      <Route path="/Playground*" element={<Playground />} />
    </Routes>
    
    <Footer/>
    </>
  )
}

export default App
