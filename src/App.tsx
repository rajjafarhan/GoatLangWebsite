import './App.css'
import Footer from './components/Footer'
import Feedback from './Pages/Feedback'
import Navbar from './components/Navbar'
import { BrowserRouter , Routes , Route } from 'react-router-dom'
import Docs from './Pages/Docs'

function App() {

  return (
    <div className=" min-h-screen w-screen bg-gray-100 ">
      <Navbar/>
    <BrowserRouter>
    <Routes>
      <Route path='/feedback' element={<Feedback/>}/>
      <Route path='/' element={<Docs/>}/>
    </Routes>
  
   
 
  
    </BrowserRouter>
    {/* <Footer/> */}
    </div>
    
  
  )
}

export default App
