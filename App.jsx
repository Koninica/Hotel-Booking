// import React from 'react'
// import Navbar from './components/Navbar'
import { Route, Routes, useLocation } from 'react-router-dom'
import Hero from './components/Hero'
import Home from './Pages/Home'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import AllRooms from './Pages/AllRooms'
import RoomDetails from './Pages/RoomDetails'
import MyBookings from './Pages/MyBookings'
const App = () => {
   const isOwner=useLocation().pathname.includes("owner");
  return (
    <div>
      {!isOwner && <Navbar/>}
      <div className='min-h-[70vh]'>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/rooms' element={<AllRooms/>}/>
        <Route path='/rooms/:id' element={<RoomDetails/>}/>
        <Route path='/my-bookings' element={<MyBookings/>}/>
      </Routes>
      </div>
      {/* ---now we can see the footer in all the pages--- */}
      <Footer/>
    </div>
  )
}

export default App
