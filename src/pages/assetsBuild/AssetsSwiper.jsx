import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Keyboard, Navigation, Pagination } from 'swiper/modules';
import AssetsTable from './AssetsTable'
import LiabilitiesTable from './LiabilitiesTable'
import AssetsChart from './AssetsChart'
import './assetsSwiper.css'
import 'swiper/css';
import 'swiper/css/scrollbar';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const AssetsSwiper = () => {
  return (
    <>
    <div className='w-full sm:max-w-md md:max-w-lg lg:max-w-xl xl:max-w-2xl'>
      <Swiper
        slidesPerView={2}
        centeredSlides={false}
        
        grabCursor={true}
        keyboard={{
          enabled: true,
        }}
        breakpoints={{
          384: {slidesPerView: 1, spaceBetween: 2},
          560: {slidesPerView: 1},
          712: {slidesPerView: 1},
          768: {slidesPerView: 1},
          844: {slidesPerView:1},
          915: {slidesPerView: 1},
          1024: {slidesPerView: 2},
          1500: {slidesPerView: 2},            
        }}           
        scrollbar={true}
        navigation={true}
        
        modules={[Keyboard, Navigation, Pagination]}
        className="mySwiper bg-blue-400/70 mt-80 border-3 rounded-md 
        mySwiper border-[#bb43f2] h-90 gap-1 purple-600/10 overflow-x-hidden">
         
              
        <SwiperSlide>
          <div className='assetTable w-full h-86'> 
            <p className='assetTableTitle ml-20 dbfont text-purple-700 df-font font-bold play'>Mock Assets Financial Statement</p>
            <AssetsTable/>
          </div>            
        </SwiperSlide>
        <SwiperSlide>
          <div className='w-full h-88 border-l-2 border-[#bb43f2]'> 
            <p className='assetChart ml-28 text-purple-700 font-bold play'>Mock Assets Chart</p>
            <AssetsChart/>
          </div>            
        </SwiperSlide>
        <SwiperSlide>
          <div className='w-full h-88 border-l-2 border-[#bb43f2]'> 
            <p className='liabTitle ml-16 mt-1 text-purple-700 font-bold play'>Mock Liabilities Statement</p>
            <LiabilitiesTable/>
          </div>            
        </SwiperSlide>
      </Swiper>
    </div>
    </>
  )
}

export default AssetsSwiper