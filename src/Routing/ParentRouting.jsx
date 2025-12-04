import React from 'react'
import Home from './Home'
import Contact from './Contact'
import About from './About'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
const ParentRouting = () => {
  return (
    <div className="w-full bg-white text-black p-4 m-4 rounded-lg shadow-lg">
      <div className="max-w-4xl mx-auto flex justify-center gap-10 items-center">
        <BrowserRouter>
        <div><Link to="/home" >Home</Link></div>
        <div><Link to="/about">About</Link></div>
        <div><Link to="/contact">Contact</Link></div>
        <Routes>
          <Route path="/home" element={<Home/>}></Route>
          <Route path="/about" element={<About/>}></Route>
          <Route path="/contact" element={<Contact/>}></Route>
        </Routes>
        </BrowserRouter>
      </div>
    </div>
  )
}

export default ParentRouting
