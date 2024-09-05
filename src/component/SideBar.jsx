import React from 'react'
import { MdOutlineDashboard } from "react-icons/md";
import { MdProductionQuantityLimits } from "react-icons/md";
import { RiBillLine } from "react-icons/ri";
import { RiAdminFill } from "react-icons/ri";
import { FaRegHandshake } from "react-icons/fa";
import { CiAlarmOn } from "react-icons/ci";
import { IoSettingsOutline } from "react-icons/io5";
import { Link } from 'react-router-dom';

const SideBar = () => {
    return (
        <div className='w-[300px]  [450px]:w-[450px]  bg-gray-700 text-gray-200'>
           
            <div className='flex flex-col gap-7 px-8 '>
                <Link to={'deshBord'}>
                    <div className="flex py-8 gap-2 items-center text-4xl font-bold border-b-2">
                        <MdOutlineDashboard />

                        Dashboard
                    </div>
                </Link>
                <div className="flex py-4 gap-2 items-center text-4xl font-bold border-b-2">
                    <MdProductionQuantityLimits />

                    Products
                </div>
                <Link to={'bills'}>
                    <div className="flex py-4 gap-2 items-center text-4xl font-bold border-b-2">
                        <RiBillLine />
                        Bills
                    </div>
                </Link>
                <Link to={'contact'}>
                    <div className="flex py-4 gap-2 items-center text-4xl font-bold border-b-2">
                        <RiAdminFill />

                        Customers
                    </div>
                </Link>
                <Link to={'vendors'}>
                    <div className="flex py-4 gap-2 items-center text-4xl font-bold border-b-2">
                        <FaRegHandshake />

                        Venders
                    </div>
                </Link>
                <div className="flex py-4 gap-2 items-center text-4xl font-bold border-b-2">
                    <CiAlarmOn />

                    alarts
                </div>
                <div className="flex py-10 sm:pt-[590px] gap-4 text-4xl font-bold">

                <IoSettingsOutline />


                    settings
                </div>
            </div>


        </div>
    )
}

export default SideBar