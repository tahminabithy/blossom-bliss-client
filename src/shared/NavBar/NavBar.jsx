import React, { useContext } from 'react'
import img from "../../assets/icons/mainLogo.png"
import { Link, useNavigate } from 'react-router-dom'
import CommonBtn from '../../components/CommonBtn/CommonBtn'
import { authContext } from '../../context/AuthProvider'
import useUser from '../../hooks/useUser'
import { FaUser } from 'react-icons/fa6'
export default function NavBar() {
    const { user, logOut } = useContext(authContext);
    const [dbUser] = useUser();
    const navigate = useNavigate();
    const handleLogout = () => {
        logOut().then(() => {
            console.log('logged out');
            navigate('/login')
            window.location.reload();
        }).catch((error) => {
            console.log(error);

        });
    }
    const navOptions = (
        <>
            <li>
                <Link to="/">Home</Link>
            </li>
            {/* <li>
                <Link to="/">Our Portfolio</Link>
            </li> */}
            <li>
                <Link to="/teams">Our Team</Link>
            </li>
            {/* <li>
                <Link to="/addServices">Add Services</Link>
            </li> */}
            {
                user ? <li> <button onClick={handleLogout} className=''>Log Out </button></li> :
                    <li>
                        <Link to="/login">
                            <button className=''>Login</button>
                        </Link>
                    </li>
            }
            {
                dbUser?.role === "admin" ? <li>
                    <Link to="/dashboard/orderLists">Admin <FaUser /></Link>
                </li> : <li>
                    <Link to="/dashboard/orderLists">{dbUser.name} <FaUser /></Link>
                </li>
            }

        </>
    )
    return (
        <div className="navbar bg-[#FFF8F5] md:px-20 py-2">
            <div className="navbar-start ">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor">
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h8m-8 6h16" />
                        </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-lg dropdown-content bg-white text-[#F63E7B] z-[1] mt-3 w-60 p-2 shadow">
                        {navOptions}
                    </ul>
                </div>
                {/* <a className="text-xl italic font-light">
                    <img className='h-16 w-16' src={img} alt="" />
                    Blossom & Bliss
                </a> */}
                <div className='flex justify-center items-center '>
                    <img className='w-12 h-12  md:h-16 md:w-16 ' src={img} alt="" />
                    <p className="text-sm md:text-xl italic font-light font-serif ml-4"> Blossom & Bliss</p>
                </div>
            </div>
            <div className="navbar-end hidden lg:flex py-4">
                <ul className="menu menu-horizontal px-1">
                    {navOptions}
                </ul>
            </div>
            {/* <div className="navbar-end">
                <a className="btn">Button</a>
            </div> */}
        </div>
    )
}


