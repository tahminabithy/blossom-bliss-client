
import React, { useContext, useState } from 'react';
import { FaHome, FaUser, FaPlus, FaServicestack, FaHamburger, FaCross, FaCartArrowDown, FaStar } from 'react-icons/fa'
import { FaBagShopping, FaX } from 'react-icons/fa6';
import { NavLink, Outlet } from 'react-router-dom';
import useUser from '../hooks/useUser';
export default function Dashboard() {
    const [isOpen, setIsOpen] = useState(false); // State to control sidebar visibility
    const [dbUser] = useUser();
    const toggleSidebar = () => {
        setIsOpen(!isOpen);
    };
    return (
        <div>
            <div className="md:flex relative ">
                {/* Toggle button for mobile view */}
                <button
                    className="p-4 absolute top-0 left-0  md:hidden text-gray-500 focus:outline-none"
                    onClick={toggleSidebar}
                >
                    {isOpen ? <FaCross /> : <FaHamburger />}
                </button>

                {/* Sidebar */}
                <div
                    className={` h-screen fixed inset-y-0 left-0 bg-gray-600 text-white w-72 transform z-[4] ${isOpen ? 'translate-x-0' : '-translate-x-full'
                        } md:relative md:translate-x-0 transition-transform duration-200 ease-in-out`}
                >
                    <div className="p-6 flex items-center justify-between">
                        <h2 className="text-lg font-semibold">Dashboard</h2> <button onClick={toggleSidebar}><FaX className='lg:hidden' /></button>
                    </div>
                    {
                        dbUser?.role === "admin" ? <nav className="flex flex-col p-6">
                            <NavLink to="/"> <li className="p-2 text-[#F63E7B] hover:bg-gray-700 rounded list-none" >
                                <FaHome className="inline-block mr-2" />Home</li>
                            </NavLink>
                            <NavLink to="/dashboard/orderLists"> <li className="p-2 text-[#F63E7B] hover:bg-gray-700 rounded list-none" >
                                <FaBagShopping className="inline-block mr-2" />Order List</li>
                            </NavLink>
                            <NavLink to="/dashboard/addService">  <li className="p-2 text-[#F63E7B] hover:bg-gray-700 rounded list-none" >
                                <FaPlus className="inline-block mr-2" />Add Service</li>
                            </NavLink>
                            <NavLink> <li className="p-2 text-[#F63E7B] hover:bg-gray-700 rounded list-none" >
                                <FaServicestack className="inline-block mr-2" />Manage Service</li>
                            </NavLink>
                            <NavLink to="/dashboard/makeAdmin"> <li className="p-2 text-[#F63E7B] hover:bg-gray-700 rounded list-none" >
                                <FaUser className="inline-block mr-2" />Make Admin</li>
                            </NavLink>
                        </nav> : <nav className="flex flex-col p-4">
                            <NavLink to="/"> <li className="p-2 text-[#F63E7B] hover:bg-gray-700 rounded list-none" >
                                <FaHome className="inline-block mr-2" />Home</li>
                            </NavLink>
                            <NavLink to="/allServices"> <li className="p-2 text-[#F63E7B] hover:bg-gray-700 rounded list-none" >
                                <FaCartArrowDown className="inline-block mr-2" />Book</li>
                            </NavLink>
                            <NavLink to="/dashboard/orderLists"> <li className="p-2 text-[#F63E7B] hover:bg-gray-700 rounded list-none" >
                                <FaBagShopping className="inline-block mr-2" />Booking List</li>
                            </NavLink>
                            <NavLink to="/dashboard/addReviews">  <li className="p-2 text-[#F63E7B] hover:bg-gray-700 rounded list-none" >
                                <FaStar className="inline-block mr-2" />Review</li>
                            </NavLink>
                            {/* <NavLink> <li className="p-2 text-[#F63E7B] hover:bg-gray-700 rounded list-none" >
                                <FaServicestack className="inline-block mr-2" />Manage Service</li>
                            </NavLink>
                            <NavLink to="/dashboard/makeAdmin"> <li className="p-2 text-[#F63E7B] hover:bg-gray-700 rounded list-none" >
                                <FaUser className="inline-block mr-2" />Make Admin</li>
                            </NavLink> */}
                        </nav>
                    }

                </div>

                {/* Main content */}
                <div className="flex-1 bg-gray-100 h-screen">
                    {/* <h1 className="text-2xl font-bold">Welcome to the Dashboard</h1> */}
                    {/* Your main content goes here */}
                    <Outlet />
                </div>
            </div>
        </div>
    )
}
