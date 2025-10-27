import React from 'react'
import { FcBearish, FcBullish } from 'react-icons/fc'
import AssetsComposition from './AssetsComposition'
import AssetsCompositionEnd from './AssetsCompositionEnd'
import LiabilitiesComposition from './LiabilitiesComposition'
import LiabilitiesCompositionEnd from './AssetsCompositionEnd'
import './assets.css'
import AssetsSwiper from './AssetsSwiper'




const Assets = () => {
  return (
    <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 place-items-center -mt-5 mx-auto py-10 gap-4'>      
        <div className='gridCard1 flex justify-center items-center text-center bg-blue-400/40 rounded p-2 
          border-2 h-16 border-[#bb43f2] w-full max-w-xs'>
          <FcBullish className='text-2xl mr-2' />
          <div className="flex flex-col leading-tight">
            <span className='text-purple-700 font-semibold'>Total Assets</span>
            <p className='text-white text-sm'>
              $175,990
              <span className='ml-2 text-green-700 font-bold text-[12px]'>+1.23%</span>
            </p>
          </div>        
      </div>

      {/*Card #2 Total Liabilities*/}
        <div className='gridCard2 flex justify-center items-center text-center bg-blue-400/40 rounded p-2 
          border-2 h-16 border-[#bb43f2] w-full max-w-xs'>
          <FcBearish className='text-2xl mr-2'/>
            <div className="flex flex-col leading-tight">
              <span className='text-purple-700 font-semibold'>Total Liabilities</span>
              <p className='text-white text-sm'>
                $99,521
                <span className='ml-2 text-red-600 font-bold text-[12px]'>+1.00%</span>
              </p>
          </div>    
        </div>

      {/*Card #3 Working Capital*/}
          <div className='gridCard3 flex justify-center items-center text-center bg-blue-400/40 rounded p-2 
          border-2 h-16 border-[#bb43f2] w-full max-w-xs'> 
            <FcBullish className='text-2xl mr-2'/>
            <div className="flex flex-col leading-tight">
              <span className='text-purple-700 font-semibold'>Working Capital</span>
              <p className='text-white text-sm'>
                $150,642
                <span className='ml-2 text-green-700 font-bold text-[12px]'>+1.25%</span>
              </p>
            </div>     
          </div> 

      {/*Card #3 Liquidity Ratio*/}
          <div className='gridCard4 flex justify-center items-center text-center bg-blue-400/40 rounded p-2 
          border-2 h-16 border-[#bb43f2] w-full max-w-xs'> 
            <FcBullish className='text-2xl mr-2'/>
            <div className="flex flex-col leading-tight">
              <span className='text-purple-700 font-semibold'>Liquidity Ratio</span>              
                <span className='mt-1 text-green-700 font-bold text-[12px]'>3.45%</span>              
            </div>                        
          </div>  

          {/*Mounted Files*/}
          <div className='
            assetCompBegin 
            grid 
            grid-cols-1 
            place-items-center 
            gap-8
            ml-20 
            sm:grid-cols-2 
            lg:grid-cols-2
            xl:grid-cols-4 '>
            <div className='pieChart mt-16 rounded bg-blue-400/40 w-[16rem] h-66 
            border-2 border-[#bb43f2] text-white flex'>
              <AssetsComposition/>
            </div>
            <div className='pieChart2 mt-16 rounded bg-blue-400/40 w-[16rem] h-66 border-2 
            border-[#bb43f2] text-white flex'>
              <AssetsCompositionEnd/>
            </div>
            <div className='pieChart3 mt-16 rounded bg-blue-400/40 w-[16rem] h-64 border-2 
            border-[#bb43f2] text-white flex'>
              <LiabilitiesComposition/>
            </div>
            <div className='pieChart4 mt-16 rounded bg-blue-400/40 w-[16rem] h-64 border-2 
            border-[#bb43f2] text-white flex'>
              <LiabilitiesCompositionEnd/>
            </div>
          </div>
          <br></br>
          <div className='mySwiper2 grid grid-rows-1 ml-56'>
            <AssetsSwiper/>
          </div>          
      </div>
    
  )
}

export default Assets