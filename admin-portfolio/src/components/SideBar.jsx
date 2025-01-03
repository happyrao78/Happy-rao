import React from 'react'
import { NavLink, useNavigate } from 'react-router-dom'


const Sidebar = () => {
const navigate =  useNavigate()
const handleLogout = ()=>{
  navigate("/")
}
  return (
    <div className='w-[18%] min-h-screen border-r-2'>
        <div className='flex flex-col gap-4 pt-6 pl-[20%] text-[15px]'>
            <NavLink to="/create-tweet" className="flex items-center gap-3 border px-2 border-gray-300 border-r-0 py-2 rounded-l" >
                {/* <img className="w-5 h-5" src={assets.add_icon} alt="" /> */}
                <p className='hidden md:block '>Add Tweet</p>
            </NavLink>

            <NavLink to="/list-tweets" className="flex items-center gap-3 border px-2 border-gray-300 border-r-0 py-2 rounded-l" >
                {/* <img className="w-5 h-5" src={assets.order_icon} alt="" /> */}
                <p className='hidden md:block '>Listed Tweets</p>
            </NavLink>

        </div>
        <button
        onClick={handleLogout}
        className="mt-6 w-28 ml-32 sm:ml-4 xs:ml-0 sm:w-15 xs:w-10 py-2 bg-red-500 text-white font-semibold rounded-md hover:bg-red-600 focus:outline-none">
        Logout
      </button>
    </div>
  )
}

export default Sidebar