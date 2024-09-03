import React from 'react'
import { BsCart3 } from "react-icons/bs";
import { MdOutlineDashboard } from "react-icons/md";
import { MdProductionQuantityLimits } from "react-icons/md";
import { RiBillLine } from "react-icons/ri";
import { RiAdminFill } from "react-icons/ri";
import { FaRegHandshake } from "react-icons/fa";
import { CiAlarmOn } from "react-icons/ci";
import { IoSettings } from "react-icons/io5";
import { Link } from 'react-router-dom';

const SideBar = () => {
    return (
        <div className='w-[450px] bg-gray-700 text-gray-200'>
            <div className='flex py-4 gap-2 items-center text-4xl font-bold'>
                <BsCart3 />
                STORE
            </div>
            <div className='flex flex-col gap-7 '>
                <Link to={'deshBord'}>
                    <div className="flex py-4 gap-2 items-center text-6xl font-bold">
                        <MdOutlineDashboard />

                        Dashboard
                    </div>
                </Link>
                <div className="flex py-4 gap-2 items-center text-6xl font-bold">
                    <MdProductionQuantityLimits />

                    Products
                </div>
                <Link to={'bills'}>
                    <div className="flex py-4 gap-2 items-center text-6xl font-bold">
                        <RiBillLine />
                        Bills
                    </div>
                </Link>
                <Link to={'contact'}>
                    <div className="flex py-4 gap-2 items-center text-6xl font-bold">
                        <RiAdminFill />

                        Costmars
                    </div>
                </Link>
                <Link to={'vendors'}>
                    <div className="flex py-4 gap-2 items-center text-6xl font-bold">
                        <FaRegHandshake />

                        Vanders
                    </div>
                </Link>
                <div className="flex py-4 gap-2 items-center text-6xl font-bold">
                    <CiAlarmOn />

                    alarts
                </div>
                <div className="flex py-4 gap-2 items-center text-6xl font-bold">

                    <IoSettings />

                    settings
                </div>
            </div>


        </div>
    )
}

export default SideBar