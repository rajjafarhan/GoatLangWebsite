import './App.css'
import Footer from './components/Footer'
import Navbar from './components/Navbar'
import Docs from './pages/Docs'
import { Handbook } from './pages/Handbook'
import Home from './pages/Home'


function App() {
  

  return (
    <> <Navbar/>
    {/* <Home/> */}
    {/* <Docs/> */}
    <Handbook/>
    <Footer/>
    </>
  )
}

export default App
