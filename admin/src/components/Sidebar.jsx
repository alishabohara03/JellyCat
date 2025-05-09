import React from 'react'
import { NavLink } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheckToSlot, faListCheck, faPlus } from '@fortawesome/free-solid-svg-icons'

const Sidebar = () => {
  return (
    <div className='w-[10%] min-h-screen border-r-2'>
      <div className='flex flex-col gap-4 pt-6 pl-[20%] text-[15px]'>

        <NavLink className='flex items-center gap=3 border border-gray-300 border-r-0 px-3 py-2 rounded-lg' to="/Add">
            <FontAwesomeIcon icon={faPlus} 
            className='w-5 h-5'
            />
            <p className='hidden md:block'>Add Items</p>
        </NavLink>

        <NavLink className='flex items-center gap=3 border border-gray-300 border-r-0 px-3 py-2 rounded-lg' to="/List">
            <FontAwesomeIcon icon={faListCheck} 
            className='w-5 h-5'
            />
            <p className='hidden md:block'>List Item</p>
        </NavLink>

        <NavLink className='flex items-center gap=3 border border-gray-300 border-r-0 px-3 py-2 rounded-lg' to="/Orders">
            <FontAwesomeIcon icon={faCheckToSlot} 
            className='w-5 h-5'
            />
            <p className='hidden md:block'>Orders</p>
        </NavLink>
      </div>
    </div>
  )
}

export default Sidebar