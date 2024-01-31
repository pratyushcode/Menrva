import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Home from './Pages/Home'
import Contact from './Pages/Contact'
import Header from './Components/Header'
import About from './Pages/About'

import { BrowserRouter as Router ,Routes,Route} from"react-router-dom"

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Router>
      
      <Routes>
        
        <Route path='/' element={<Home/>} exact></Route>
        <Route path='/About' element={<About/>}></Route>
        <Route path='/ContactUs' element={<Contact/>}></Route>
      </Routes>
    </Router>
      
    </>
  )
}

export default App
