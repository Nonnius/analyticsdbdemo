import React from 'react'
import newLogo from '../assets/newlogo.png'
import { BiMessageAltDots } from "react-icons/bi";
import { MdNotifications } from "react-icons/md";
import { CgProfile } from "react-icons/cg";
import tradeFloor from '../assets/tradeFloor.jpg'
import rushingBull from '../assets/rushingBull.jpg'
import wallSt from '../assets/wallSt.jpg'




const Navbar = () => {
  return (
    
    <div className='flex items-center py-1 px-[4%] justify-between bg-purple-600/10'>
        <img className='w-[78px] rounded-full h-[78px] object-contain' src={newLogo} alt=''/>
        <h1 className='italic text-lg sm:text-xl md:text-2xl font-bold text-purple-700'>My Analytics Dashboard Demo</h1>

        {/*Right Side App Features: #1 Messages */}
        <div className="flex items-center space-x-4">
          {/* Messages */}
          <div className="relative group">
            <button className="text-[24px] text-purple-700 hover:text-pink-400">
              <BiMessageAltDots />
            </button>
            <div
              style={{
                backgroundImage: `url(${tradeFloor})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
              }}
              className="hidden group-hover:block absolute top-full left-1/2 -translate-x-1/2 mt-2 w-64 h-36 shadow-lg rounded-md z-10"
            >
              <div className="bg-black/60 text-white px-4 py-2 rounded-t-md">Messages</div>              
            </div>
          </div>

            {/*#2 Notifications Dropdown */}
            <div className="relative group">
              <button type="button" className='text-[24px] sm:text-[24px] text-purple-700
              hover:text-pink-400 cursor-pointer'>
                  <MdNotifications /> 
              </button>
              <div style={{
                backgroundImage: `url(${rushingBull})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
              className='hidden group-hover:block absolute top-full left-1/2 transform -translate-x-1/2 mt-2 w-42 h-36 
              dropdon-bg bg-white shadow-lg rounded-md z-10'>
                <div className="relative">
                  <div className="absolute inset-0 bg-black/60"></div>
                  <h3 className="relative text-white rounded px-4 py-2">Notifications</h3>
                </div>
              </div>
            </div>

            {/*#3 Profile Dropdown */}
            <div className="relative group">
            <button type="button" className='text-[24px] sm:text-[24px] text-purple-700
            hover:text-pink-400 cursor-pointer'>
                <CgProfile />
            </button>
            <div style={{
              backgroundImage: `url(${wallSt})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
            className='hidden group-hover:block absolute top-full left-1/2 transform -translate-x-1/2 mt-2 w-42 h-36 
            dropdon-bg bg-white shadow-lg rounded-md z-10'>
              <div className="relative">
                <div className="absolute inset-0 bg-black/60"></div>
                <h3 className="relative text-white rounded px-4 py-2">Profile</h3>
              </div>
            </div>
          </div>
            
        </div>
        
    </div>
   
  )
}

export default Navbar