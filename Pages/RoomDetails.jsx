import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { assets, facilityIcons, roomCommonData, roomsDummyData } from '../assets/assets'
import { useState } from 'react'
import StarRating from '../components/StarRating'
const RoomDetails = () => {
    const {id}=useParams()
    const [room, setRoom] = useState(null)
     const [mainImage, setMainImage] = useState(null)

     useEffect(function(){
     const room=roomsDummyData.find(room=> room._id===id)
     room && setRoom(room)
     room && setMainImage(room.images[0])
     },[])
  return room && (//whenever room is available then only we will mount this div
    <div className='py-28 md:py-35 px-4 md:px-16 lg:px-24 xl:px-32'>
        {/* --Room Details-- */}
        <div className='flex flex-col md:flex-row items-start md:items-center gap-2'>
            <h1 className='text-3xl md:text-4xl font-playfair'>{room.hotel.name} <span className='font-inter text-sm'>({room.roomType})</span></h1>
            <p className='text-xs font-inter py-1.5 px-3 text-white bg-orange-500 rounded-full mt-1'>20% OFF</p>
        </div>
         {/* --Room  Rating-- */}
        <div className='flex items-center gap-1 mt-2'>
            <StarRating/>
            <p className='ml-2'>200+ Reviews</p>
        </div>
         {/* ---Room Address-- */}
         <div className='flex items-center gap-1 text-gray-500 mt-2'>
            <img src={assets.locationIcon} alt="Location-icon"/>
            <span>{room.hotel.address}</span>
         </div>
         
        {/* --Room Image--- */}
        <div className='flex flex-col lg:flex-row mt-6 gap-6'>
           <div className='lg:w-1/2 w-full'>
            <img className='w-full rounded-xl shadow-lg object-cover' src={mainImage} alt="Room Image"/>
           </div>
           <div className='grid grid-cols-2 gap-4 lg:w-1/2 w-full'>
            {room.images.length>1 && room.images.map(function(image,index){
               return <img className={`w-full rounded-xl shadow-md object-cover cursor-pointer ${mainImage===image && 'outline-3 outline-orange-500'}`} onClick={()=>setMainImage(image)} key={index} src={image} alt="Room Image"/>
            })}
           </div> 
        </div>
       {/* --ROOM HIGHLIGHTS--- */}
       <div className='flex flex-col md:flex-row md:justify-between mt-10'>
           <div className='flex flex-col'>
            <h1 className='text-3xl md:text-4xl font-playfair'>Experience luxury like never before</h1>
            <div className='flex flex-wrap items-center mt-3 mb-6 gap-4'>
                {room.amenities.map(function(item,index){
                  return <div key={index} className='flex items-center gap-2 px-3 py-2 rounded-lg bg-gray-100'>
                   <img src={facilityIcons[item]} alt={item} className='w-5 h-5'/>
                   <p className='text-xs'>{item}</p>
                  </div>
                })}
            </div>
           </div>
           <p className='text-2xl font-medium'>${room.pricePerNight}/Night</p>
       </div>
       {/* check-in Check-out form */}
       <form className='flex flex-col md:flex-row items-start md:items-center justify-between bg-white shadow-[0px_0px_20px_rgba(0,0,0,0.15)] p-6 rounded-xl mx-auto mt-16 max-w-6xl'>
         <div className='flex flex-col flex-wrap md:flex-row items-start md:items-center gap-4 md:gap-10 text-gray-500 '>
             <div className='flex flex-col'>
                <label htmlFor='checkInDate' className='font-medium'>Check In</label>
                <input type="date" id='checkInDate' placeholder='Check-in'
                className='w-full rounded border border-gray-300 px-3 py-2 mt-1.6 outline-none' required/>
             </div>
             {/* --To add a vertical line between input fields-- */}
            <div className='w-px h-15 bg-gray-300/70 max-md:hidden'> </div>  

            <div className='flex flex-col'>
                <label htmlFor='checkOutDate' className='font-medium'>Check Out</label>
                <input type="date" id='checkOutDate' placeholder='Check-Out'
                className='w-full rounded border border-gray-300 px-3 py-2 mt-1.6 outline-none' required/>
             </div>
              {/* --To add a vertical line between input fields-- */}
              <div className='w-px h-15 bg-gray-300/70 max-md:hidden'> </div>
             <div className='flex flex-col'>
                <label htmlFor='guests' className='font-medium'>Guests</label>
                <input type="number" id='guests' placeholder='0'
                className='max-w-20 rounded border border-gray-300 px-3 py-2 mt-1.5 outline-none' required/>
             </div>
         </div>
         <button type='submit'className='bg-primary hover:bg-primary-dull active:scale-95 
         transition-all text-white rounded-md max-md:w-full max-md:mt-6 md:px-25 py-3 md:py-4 text-base cursor-pointer' >
           Check Availability
         </button>
       </form>
        {/* Common Specifications */}
        <div className='mt-25 space-y-4'>
            {roomCommonData.map(function(spec,index){
               return <div key={index} className='flex items-center gap-2'>
                      <img src={spec.icon} alt={`${spec.title}-icon`} className='w-6.5'/>
                      <div>
                        <p className='text-base'>{spec.title}</p>
                        <p className='text-gray-500'>{spec.description}</p>
                      </div>
               </div>
            })}
        </div>
      <div>
        <p className='max-w-3xl border-y border-gray-300 my-15 py-10 text-gray-500'>
            Guests will be allocated on the ground floor according to availability.You get a comfortable Two bedroom apartment that has a true city feeling.The price quoted
            is for 2 guests,at the guest slot pease mark the number of guests to get the exact price of groups.The Guests will be allocated ground floor according to availability.
        </p>
      </div>
      {/* Hosted by */}
       <div className='flex flex-col items-start gap-4'>
        <div className='flex gap-4'>
         <img src="https://images.unsplash.com/photo-1766038780820-a5c000ff0668?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Host" className='h-14 w-14 md:h-18 md:w-18 rounded-full'/>
         <div>
            <p className='text-lg md:text-xl'>Hosted by {room.hotel.name}</p>
            <div className='flex items-center mt-1'>
                <StarRating/>
                <p className='ml-2'>200+ reviews</p>
            </div>
         </div>
         </div>
         <button className='px-6 py-2.5 mt-4 rounded text-white bg-primary
         hover:bg-primary-dull transition-all cursor-pointer'>Contact Now</button>
       </div>
    </div>
  )
}

export default RoomDetails
