import React from 'react'
import { IoNotifications } from "react-icons/io5";

const Header = () => {
    return (
        <div className='flex mt-3 max-w-[95%] mx-auto justify-between bg-slate-400 p-4 items-center'>
            <div className='max-w-[110px] '>
                <img className='' src="https://upload.wikimedia.org/wikipedia/commons/1/10/Goddess_Maheshwari_%28%E0%A4%A6%E0%A5%87%E0%A4%B5%E0%A5%80_%E0%A4%AE%E0%A4%B9%E0%A5%87%E0%A4%B6%E0%A5%8D%E0%A4%B5%E0%A4%B0%E0%A5%80%29.png" alt="" />
            </div>
            <div className='max-w-[250px] md:max-w-[500px] w-full text-center bg-[#401B0C] text-white p-2 rounded-2xl'>
                <h1 className='italic w-full font-black text-lg md:text-3xl 2xl:text-6xl'>MAA BHAVANI</h1>
                <h3 className='italic w-full font-bold text-lg md:text-2xl 2xl:text-4xl'>SARI CENTER</h3>
            </div>
            <div className='flex text-[#401B0C] text-4xl'>
                <IoNotifications /><sup>0</sup>

            </div>




        </div>
    )
}

export default Header