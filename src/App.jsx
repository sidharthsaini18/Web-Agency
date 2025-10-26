import React from 'react'
import Home from './pages/Home'
 import './App.css'
import { BrowserRouter , Routes, Route } from 'react-router-dom';
import About from './pages/About';
import Mainfeatures from './pages/Mainfeatures';
import Pricing from './pages/pricing';
import FAQs from './pages/Faqs';
import Login from './pages/Login';
import Signup from './pages/Signup';
const App = () => {
  return (


    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/features' element={<Mainfeatures/>}/>
          <Route path='/pricing' element={<Pricing/>}/>
           <Route path='/faqs' element={<FAQs/>}/>
            <Route path='/about' element={<About/>}/>
            <Route path='/login' element={<Login/>}/>
            <Route path='/signup' element={<Signup/>}/>

      </Routes>
  </BrowserRouter>
  )
}

export default App