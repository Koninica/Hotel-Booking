import React from 'react'
import Title from './Title'
import { testimonials } from '../assets/assets'
import StarRating from './StarRating'

const Testimonial = () => {
  return (
    <div className='flex flex-col items-center px-6 md:px-16 lg:px-24 bg-slate-50 pt-20 pb-30'>
       <Title title="What Our Guests Say" subtitle='Discover why discerning
       travelers consistently choose QuickStay for their exclusive and luxurious
       accomodation around the world'/>
      <div className='flex flex-wrap items-center justify-center  gap-6 mt-20'>
        {testimonials.map(function(elem ,idx){
          return <div key={idx} className='rounded-lg border border-gray-200 shadow-[0px_4px_15px_0px] shadow-black/5 overflow-hidden'>
            {/* --top pink portion---  */}
             <div className='flex items-center gap-6 bg-red-500/10 px-5 py-4'>
               <img className='h-13 w-13 rounded-full'src={elem.image} alt=""/>
               <div>
                 <h1 className='font-semibold text-2xl text-gray-800'>{elem.name}</h1>
                 <p className='text-sm text-gray-400 font-medium'>{elem.address}</p>
               </div>
             </div>
             {/* --Rating stars--- */}
             <div className='flex items-center gap-1 mt-4 px-4'>
                <StarRating rating={elem.rating}/>
             </div>
             <p className='text-gray-500 max-w-90 mt-4 mb-4 px-4'>{elem.review}</p>
          </div>
        })}
      </div>
    </div>
  )
}

export default Testimonial
