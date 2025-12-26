import React, { useEffect, useRef } from 'react'
import {assets} from '../assets/assets'
import { useState } from 'react'
import { useClerk, useUser,UserButton } from '@clerk/clerk-react';
import { Link, useLocation, useNavigate } from 'react-router-dom';

const navLinks=[
  {name:"Home",path:'/'},
  {name:'Hotels',path:'/rooms'},
  {name:'Experiences',path:'/Experiences'},
  {name:'About',path:'/About'}
];



 const BookIcon=()=>(
    <svg className="w-4 h-4 text-gray-700" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24" >
    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 19V4a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v13H7a2 2 0 0 0-2 2Zm0 0a2 2 0 0 0 2 2h12M9 3v14m7 0v4" />
</svg>
 )
const Navbar = () => {
     const ref=useRef();
     const [showmobmenu, setShowmobmenu] = useState(false)
     const [isscrolled, setIsscrolled] = useState(false)
     console.log(ref);
     const {openSignIn}=useClerk()
     const {user}=useUser();
    const navigate=useNavigate()
    const location=useLocation()

 useEffect(function(){
    if(location.pathname!=='/'){//if we are on other page other than the home page
      setIsscrolled(true)//we have scrolled the page
      return;
    }
else{
  setIsscrolled(false)//we havem't scrolled the home page
}
   setIsscrolled(prev=>location.pathname!=='/'?true:prev)
     const handleScroll=()=>{
        setIsscrolled(ref.current.scrollTop>10)
     };
     ref.current.addEventListener("scroll",handleScroll);
     return ()=>{
        ref.current.removeEventListener("scroll",handleScroll)
     }
  },[location.pathname])

    useEffect(function(){
      if(showmobmenu)
        document.body.style.overflow='hidden'
      else
        document.body.style.overflow='auto'
       return ()=>{
        document.body.style.overflow='auto'
       }
    },[showmobmenu])

  return (
    <div ref={ref} >
      <div className=' fixed top-0 left-0 w-full h-[15%] z-10 '>
       <div className={`px-8 bg-linear-to-r from-pink-500 via-orange-300 to-amber-200 opacity-80 flex justify-between items-center mx-auto w-full h-full`}> 
         <Link to='/'>
         <img className='w-50' src={assets.logo} alt=""/>
         </Link>
         <ul className='text-black text-4xxl font-semibold hidden md:flex gap-7'>
            {navLinks.map(function(link,i){
               return <a key={i} href={link.path} className='hover:-translate-y-[50%] transition-all hover:text-blue-700'>{link.name}</a>
            })}
            <button className='bg-transparent border border-black rounded-full text-black px-2' 
             onClick={()=>navigate('/owner')}>Dashboard</button>
         </ul>
         <div className=' gap-2 hidden md:flex'>
            <img  className='invert'src={assets.searchIcon} alt=""/>
            <img className='invert'src={assets.userIcon} alt=""/>
            {user?
            (<UserButton>
                <UserButton.MenuItems>
                    <UserButton.Action label="My bookings" labelIcon={<BookIcon/>} onClick={()=>navigate('/my-bookings') }/>
                </UserButton.MenuItems>
            </UserButton>)
            :
            (<button onClick={openSignIn} className='text-white bg-black rounded-full text-2xl px-3 py-2 '>Login</button>)
            }

             
             {/* <div className='h-10 w-10 rounded-full bg-purple-500 text-center font-semibold mt-1 py-2 px-2'>K</div> */}
         </div>
         
        {/* ---div to display menu icon and user account in small screen--- */}
        <div className=' flex gap-7 md:hidden w-7 cursor-pointer'>
         {user&&<UserButton>
                <UserButton.MenuItems>
                    <UserButton.Action label="My bookings" labelIcon={<BookIcon/>} onClick={()=>navigate('/my-bookings') }/>
                </UserButton.MenuItems>
            </UserButton>}
         <img onClick={()=>{
            setShowmobmenu(true)
         }}className='md:hidden w-7 cursor-pointer' src={assets.menuIcon} alt=""/>
        </div>
          {/* ---mobile-menu--- */}
        

            
          <div className={`md:hidden ${showmobmenu? 'fixed w-full':'h-0 w-0'} right-0 top-0 bottom-0 overflow-hidden  bg-white opacity-100 transition-all`}>
            <div className='flex justify-end items-center  cursor-pointer'>
                <img onClick={()=>{
                    setShowmobmenu(false)
                }}src={assets.closeMenu} alt=""/>
            </div>
            <ul className='flex flex-col justify-center items-center gap-2 mt-5 text-black text-2xl'>
                {navLinks.map(function(link,i){
                  return <a onClick={()=>{
                    setShowmobmenu(false)
                  }}href={link.path} key={i} className='px-4 py-2 rounded-full inline-block text-center cursor-pointer hover:bg-gray-400 font-semibold'>{link.name}</a>
                })}
                
                {/* --only when the user is logged out then login button will show and only after the user is logged in the dashboard button will show-- */}
                {!user && <button onClick={openSignIn} className='bg-black text-white font-semibold rounded-full px-1 py-3'>Login</button>}

                {user && <button className='px-4 py-2 rounded-full inline-block text-center cursor-pointer hover:bg-gray-400 font-semibold'
                onClick={()=>navigate('/owner')}>Dashboard</button>}
            </ul>
          </div>
       </div>
    </div>
 </div>
  )
}

export default Navbar
