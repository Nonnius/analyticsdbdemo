import React from 'react'
import newyork from './assets/newyork.jpg'
import Navbar from './components/Navbar'
import Sidebar from './components/Sidebar'
import {Routes, Route} from 'react-router-dom'
import Assets from './pages/assetsBuild/Assets.jsx'
import Cashflow from './pages/Cashflow'
import ProfitLoss from './pages/ProfitLoss'
import FinancialPosition from './pages/FinancialPosition'

const App = () => {
  return (
    <>
      <div className='demoBg bg-cover w-full h-screen 2xl:overflow-y-scroll overflow-x-hidden lg:overflow-y-scroll' 
      style={{backgroundImage:`url(${newyork})`}}>
        <Navbar />
        <hr className='text-purple-700'/>
        <div className='flex w-full'>
          <Sidebar />
          <div className='w-[70%] mx-auto ml-[max(5vw,25px)] my-8'>
            <Routes>              
              <Route path='/Assets' element={<Assets/>} />
              <Route path='/Cashflow' element={<Cashflow/>} />
              <Route path='/ProfitLoss' element={<ProfitLoss/>} />
              <Route path='/FinancialPosition' element={<FinancialPosition/>} />
            </Routes>
          </div>
        </div>
      </div>
    </>
  )
}

export default App