import './App.css'
import Feedback from './Pages/Feedback'
import Navbar from './components/Navbar'
import { BrowserRouter , Routes , Route } from 'react-router-dom'

function App() {

  return (
    <div className="App min-h-screen bg-gray-100 ">
      <Navbar/>
    <BrowserRouter>
    <Routes>
      <Route path='/feedback' element={<Feedback/>}/>
    </Routes>
  
   
 
  
    </BrowserRouter>
    </div>
    
  
  )
}

export default App
