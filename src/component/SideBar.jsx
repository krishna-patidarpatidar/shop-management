import React,{useState} from 'react'
import { MdOutlineDashboard } from "react-icons/md";
import { MdProductionQuantityLimits } from "react-icons/md";
import { RiBillLine } from "react-icons/ri";
import { RiAdminFill } from "react-icons/ri";
import { FaRegHandshake } from "react-icons/fa";
import { CiAlarmOn } from "react-icons/ci";
import { IoSettingsOutline } from "react-icons/io5";
import { Link } from 'react-router-dom';

const SideBar = () => {
    const [showSubMenu, setShowSubMenu] = useState(false);
    return (
        <div className='w-[300px]  [450px]:w-[450px]  bg-gray-700 text-gray-200'>
           
            <div className='flex flex-col gap-7 px-8 '>
                <Link to={'deshBord'}>
                    <div className="flex py-8 gap-2 items-center text-4xl font-bold border-b-2">
                        <MdOutlineDashboard />

                        Dashboard
                    </div>
                </Link>
               <Link to={'products'}>
               <div 
                    className="relative"
                    onMouseEnter={() => setShowSubMenu(true)}
                    onMouseLeave={() => setShowSubMenu(false)}
                >
                    <Link to={'products'}>
                        <div className="flex py-4 gap-2 items-center text-4xl font-bold border-b-2">
                            <MdProductionQuantityLimits />
                            Products
                        </div>
                    </Link>

                    {showSubMenu && (
                        <ul className='absolute w-[268px] bg-gray-600 p-4 text-[30px] font-normal'>
                            <li className='py-4 px-4 hover:bg-gray-500'>
                                <Link to={'add-product'}>Add Product</Link>
                            </li>
                            <li className='py-4 px-4 hover:bg-gray-500'>
                                <Link to={'show-products'}>Show Products</Link>
                            </li>
                        </ul>
                    )}
                </div>
                </Link>
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