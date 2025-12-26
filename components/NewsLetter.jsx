import React from 'react'
import { assets } from '../assets/assets'

const NewsLetter = () => {
  return (
    <div className='bg-gray-900 text-white mx-auto max-w-5xl mb-5 py-8 rounded-lg'>
      <div className='flex flex-col justify-center items-center text-center'>
         <h1 className='text-4xl text-center md:text-[40px] mt-4'>Stay Inspired</h1>
         <p className='text-gray-500 mt-2'>Join our newsletter and be the first to discover new updates,exclusive offers,and inspiration </p>
      </div>
      <div className='flex flex-col md:flex-row justify-center items-center gap-4 mt-6'>
        <input className="bg-white/10 px-4 py-2.5 border border-white/20 rounded outline-none max-w-66 w-full" type="text" placeholder="Enter your E-mail id"/>
        <button className='flex bg-black rounded-lg gap-2 justify-center items-center px-4 md:px-7 py-2.5  active:scale-95 transition-all '>
            Subscribe
            <img className='invert'src={assets.arrowIcon} alt='Subscribe button'/>
        </button>
      </div>
      <p className='text-xs text-gray-500 text-center mt-4'>
        By Subscribing,you agree to our privacy policy and consent to receive updates
      </p>
    </div>
  )
}

export default NewsLetter
