import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Homepage from './Pages/Homepage/Homepage'
import WhoWeAre from './Pages/WhoWeAre/WhoWeAre'
import { BrowserRouter, Routes, Route } from "react-router-dom";  
import Clients from './Pages/Clients/Clients'
import Contact from './Pages/Contact/Contact'
import ContactUs from './Pages/Contact/ContactUs'
import BookDemo from './Pages/BookDemo/BookDemo'

function App() {

  return (
    <>
      <BrowserRouter >
        <Routes>
          <Route path="/"  element={<Homepage/>}/>
          <Route path="/whoweare"  element={<WhoWeAre/>}/>
          <Route path="/clients"  element={<Clients/>}/>
          <Route path="/contactus"  element={<ContactUs/>}/>
          <Route path="/bookdemo"  element={<BookDemo/>}/>
        </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
