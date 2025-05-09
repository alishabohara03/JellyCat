
import React, { useState, useContext } from "react";
import assets from '../assets/assets';
import { Link, NavLink, useNavigate } from "react-router-dom";
import { ShopContext } from '../context/ShopContext';
import Orders from "../pages/Orders";

const Navbar = () => {
    const { setShowSearch, getCartCount, navigate, token, setToken, setCartItems } = useContext(ShopContext);
    const logout = () => {
         navigate('/login')
        localStorage.removeItem('token')
        setToken('')
        setCartItems({})
    }
    const [visible, setvisible] = useState(false);
  

    return (
        <div className="flex items-center justify-between py-2 font-medium gap-1">
            <Link to='/'>
                <div className="flex items-center py-2 px-0">
                    <h1 className="text-3xl font-bold">
                        <span style={{ color: 'orange' }}>J</span>
                        <span style={{ color: 'green' }}>ellyCat</span>
                    </h1>
                    <img src={assets.logo} alt="BrandLogo" className="w-10 h-auto ml-2" />
                </div>
            </Link>

            <ul className="hidden sm:flex gap-5 text-sm">
                <NavLink
                    to="/"
                    className={({ isActive }) =>
                        `flex flex-col items-center gap-1 ${isActive ? 'text-black' : 'text-gray-700'}`
                    }
                >
                    <p>HOME</p>
                    <hr className="w-2/4 border-none h-[1.5px] bg-gray-700 hidden" />
                </NavLink>

                <NavLink
                    to="/collection"
                    className={({ isActive }) =>
                        `flex flex-col items-center gap-1 ${isActive ? 'text-black' : 'text-gray-700'}`
                    }
                >
                    <p>COLLECTION</p>
                    <hr className="w-2/4 border-none h-[1.5px] bg-gray-700 hidden" />
                </NavLink>

                <NavLink
                    to="/about"
                    className={({ isActive }) =>
                        `flex flex-col items-center gap-1 ${isActive ? 'text-black' : 'text-gray-700'}`
                    }
                >
                    <p>ABOUT</p>
                    <hr className="w-2/4 border-none h-[1.5px] bg-gray-700 hidden" />
                </NavLink>

                <NavLink
                    to="/contact"
                    className={({ isActive }) =>
                        `flex flex-col items-center gap-1 ${isActive ? 'text-black' : 'text-gray-700'}`
                    }
                >
                    <p>CONTACT</p>
                    <hr className="w-2/4 border-none h-[1.5px] bg-gray-700 hidden" />
                </NavLink>
            </ul>

            <div className="flex items-center gap-6">
                <img src={assets.search} className="w-5 cursor-pointer" alt="Search Icon" onClick={() => { setShowSearch(true); navigate('/collection'); }} />

                <div className="relative group">
                  
                    <img onClick={()=>token ? null: navigate('/login')}className="w-5 cursor-pointer" src={assets.user} alt="User Icon" />

                    {/* Dropdown Menu */}

                    {token && 
                    <div className="hidden group-hover:block absolute right-0 pt-4">
                        <div className="flex flex-col gap-2 w-36 py-3 px-5 bg-slate-100 text-gray-500 rounded shadow-md">
                            <p className="cursor-pointer text-gray-700 hover:text-black">Profile</p>
                            <p onClick={()=>navigate('/Orders')}className="cursor-pointer text-gray-700 hover:text-black">Orders</p>
                            <p onClick={logout} className="cursor-pointer text-gray-700 hover:text-black">Logout</p>
                        </div>
                    </div>}

                    
                </div>
                <Link to='/cart' className="relative">
                    <img src={assets.cartIcon} className="w-5 min-w-5" alt="" />
                    <p className="absolute right-[-5px] bottom-[-5px] w-4 text-center leading-4 bg-black text-white aspect-square rounded-full text-[8px]">{getCartCount()}</p>
                </Link>

                <img onClick={() => setvisible(true)} src={assets.menu} className="w-5 cursor-pointer sm:hidden" alt="" />
            </div>

            {/* SideBar Menu for Small Screen */}
            <div className={`absolute top-0 right-0 bottom-0 overflow-hidden bg-white transition-all ${visible ? 'w-full' : 'w-0'}`}>
                <div className='flex flex-col text-gray-600'>
                    <div onClick={() => setvisible(false)} className="flex items-center gap-4 p-3 cursor-pointer">
                        <img className="h-4 rotate-180" src={assets.dropdown} alt="" />
                        <p>Back</p>
                    </div>

                    <NavLink onClick={() => setvisible(false)} className='py-2 pl-6 border' to='/'>Home</NavLink>
                    <NavLink onClick={() => setvisible(false)} className='py-2 pl-6 border' to='/collection'>COLLECTION</NavLink>
                    <NavLink onClick={() => setvisible(false)} className='py-2 pl-6 border' to='/about'>ABOUT</NavLink>
                    <NavLink onClick={() => setvisible(false)} className='py-2 pl-6 border' to='/contact'>CONTACT</NavLink>
                </div>
            </div>
        </div>
    );
};

export default Navbar;