import { BrowserRouter as Router,Route,Routes } from "react-router-dom"
import  About from './components/pages/About'
import  Home from './components/pages/Home'
import  NotFound from './components/pages/NotFound'
import Navbar from "./components/layout/Navbar"
import  Footer from "./components/layout/Footer"
const App = () => {
  return (
    <Router>
         <div className="flex flex-col justify-between h-screen">
        
          <Navbar/>
          <main className="container mx-auto px-3 pb-12 ">
          <Home/>
            <About/>
            <NotFound/>
          <Routes>
            

          </Routes>
           </main>
          <Footer/>
         </div>
    </Router>
      
  )
}

export default App
