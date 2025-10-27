import React from 'react'
import { NavLink } from 'react-router-dom'
import { FcBarChart } from "react-icons/fc";
import './sideBar.css'

const Sidebar = () => {
  return (
    <div className='bg-purple-600/10 min-h-screen w-[13%] border-r-2'>
        <div className='flex flex-col gap-4 pt-6 pl-[10%] text-[15px]'>
            <h1 className='name text-[12px] text-purple-600 font-semibold text-center'>Designed & Developed by: O'marr S. Reid</h1>
            <p className='-mt-4 text-[10px] text-purple-600 font-bold text-center'>©2005 All Rights Reserved</p>
            <NavLink className='flex items-center gap-3 border border-purple-700 border-r-0 px-3
            py-2 ' to="/Assets">
                <FcBarChart title='Assets Overview' className='w-5 h-5 inline-block align-middle shrink-0'/>               
                <p className='text-purple-700 hidden md:block'>Assets</p>
            </NavLink>
            <NavLink className='flex items-center gap-3 border border-purple-700 border-r-0 px-3
            py-2 ' to="/Cashflow">
                <FcBarChart title='Cash Flow Overview' className='w-5 h-5'/> 
                <p className='text-purple-700 hidden md:block'>Cash Flow</p>
            </NavLink>
            <NavLink className='flex items-center gap-3 border border-purple-700 border-r-0 px-3
            py-2 ' to="/ProfitLoss">
                <FcBarChart title='Profit & Loss Overview' className='w-5 h-5'/> 
                <p className='text-purple-700 hidden md:block'>Profits & Loss</p>
            </NavLink>
            <NavLink className='flex items-center gap-3 border border-purple-700 border-r-0 px-3
            py-2 ' to="/FinancialPosition">
                <FcBarChart title='Financial Position Overview' className='w-5 h-5'/> 
                <p className='text-purple-700 hidden md:block'>Financial Position</p>
            </NavLink>
        </div>
    </div>
  )
}

export default Sidebar