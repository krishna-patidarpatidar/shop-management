import React, { useState } from 'react';
import { MdOutlineDashboard, MdProductionQuantityLimits } from "react-icons/md";
import { RiBillLine, RiAdminFill } from "react-icons/ri";
import { FaRegHandshake } from "react-icons/fa";
import { CiAlarmOn } from "react-icons/ci";
import { IoSettingsOutline } from "react-icons/io5";
import { Link ,useNavigate} from 'react-router-dom';

const SideBar = ({ isSidebarOpen, isColseSidebar }) => {
    const [showSubMenu, setShowSubMenu] = useState(false);
    const [showSubMenu1, setShowSubMenu1] = useState(false);
    const navigate= useNavigate()
    const Logout = () => {
        alert('you are loged out')
        navigate('/')
    }
    return (
        <aside
            className={`bg-gray-800 text-white w-64 space-y-6 py-7 px-2 absolute inset-y-0 left-0 transform ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'} transition-transform duration-300 ease-in-out md:relative md:translate-x-0 md:w-64`}
        >
            <nav>
                <Link to={'deshBord'}>
                    <div className="flex py-8 gap-2 items-center text-4xl font-bold border-b-2">
                        <MdOutlineDashboard />
                        Dashboard
                    </div>
                </Link>

                <div
                    className="relative"
                    onMouseEnter={() => setShowSubMenu(true)}
                    onMouseLeave={() => setShowSubMenu(false)}
                >

                    <div className="flex py-4 gap-2 items-center text-4xl font-bold border-b-2">
                        <MdProductionQuantityLimits />
                        Products
                    </div>


                    {showSubMenu && (
                        <ul className="absolute w-[245px] bg-gray-600 p-4 text-[30px] font-normal">
                            <Link to={'add-product'}>
                                <li className="py-4 px-4 hover:bg-gray-500">
                                    Add Product
                                </li>
                            </Link>
                            <Link to={'show-products'}>
                                <li className="py-4 px-4 hover:bg-gray-500">
                                    Show Products
                                </li>
                            </Link>
                        </ul>
                    )}
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
                        Vendors
                    </div>
                </Link>

                <div className="flex py-4 gap-2 items-center text-4xl font-bold border-b-2">
                    <CiAlarmOn />
                    Alerts
                </div>

                <Link to={'settings'}>

                </Link>
                <div
                    className="relative"
                    onMouseEnter={() => setShowSubMenu1(true)}
                    onMouseLeave={() => setShowSubMenu1(false)}
                >

                    <div className="flex  sm:mt-[250px] gap-4 text-4xl font-bold">
                        <IoSettingsOutline />
                        Settings
                    </div>


                    {showSubMenu1 && (
                        <ul className="absolute bottom-6 w-[260px]  p-4 text-[20px] font-normal">
                            <Link to={'update-name'}>
                                <li className="py-2 px-4 rounded-lg hover:bg-gray-500">
                                    Name Update
                                </li>
                            </Link>
                            <Link to={'update-password'}>
                                <li className="py-2 px-4 rounded-lg hover:bg-gray-500">
                                    Password Update
                                </li>
                            </Link>
                            <button onClick={Logout}>
                                <li className="py-2 px-4 rounded-lg hover:bg-gray-500">
                                    Logout
                                </li>
                            </button>
                        </ul>
                    )}
                </div>
            </nav>
        </aside>
    );
};

export default SideBar;
