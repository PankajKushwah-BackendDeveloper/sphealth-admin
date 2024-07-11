import React, { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'

import { BsArrowLeftCircle } from 'react-icons/bs'
import { AiFillPieChart } from 'react-icons/ai'
import { SiFuturelearn } from 'react-icons/si'
import { SiOpenaccess } from 'react-icons/si'
import { CgProfile } from 'react-icons/cg'
import Logo from '../assets/images/logo.png'
import HamburgerButton from './HamburgerMenuButton/HamburgerButton'
import { IoHomeOutline } from "react-icons/io5";
import { FaUserEdit } from "react-icons/fa";
import { FiUsers } from "react-icons/fi";
import { AiOutlineUser } from "react-icons/ai";
import { BiUserPlus } from "react-icons/bi";
import { IoMdLogOut } from "react-icons/io";

const Sidebar = () => {
  const [open, setOpen] = useState(true)
  const [mobileMenu, setMobileMenu] = useState(false)
  const location = useLocation()

  const Menus = [
    { title: 'Dashboard', path: '/dashboard', src: <IoHomeOutline /> },
    { title: 'My Profile', path: '/myProfile', src: <CgProfile /> },
    { title: 'All Admins', path: '/allAdmins', src: <FiUsers />},
    { title: 'All Users', path: '/allUsers', src: <AiOutlineUser /> },
    { title: 'Create User', path: '/createUser', src: <FaUserEdit /> },
    { title: 'Create Admin', path: '/createAdmin', src: <BiUserPlus />},
    { title: 'Log Out', path: '/logOut', src: <IoMdLogOut /> },
  ]

  return (
    <>
      <div
        className={`${
          open ? 'w-60' : 'w-fit'
        } hidden sm:block relative h-screen duration-300 bg-gray-100 border-r border-gray-200 dark:border-gray-600 p-5 dark:bg-slate-800`}
      >
        {/* <BsArrowLeftCircle
          className={`${
            !open && 'rotate-180'
          } absolute text-3xl bg-white fill-slate-800  rounded-full cursor-pointer top-9 -right-4 dark:fill-gray-400 dark:bg-gray-800`}
          onClick={() => setOpen(!open)}
        /> */}
        <Link to='/'>
          <div className={`flex flex-col mx-auto ${open && 'gap-x-4'} items-center`}>
           {open && (
              <div>
                 <img className='pl-0 rounded-full h-[7rem] w-[7rem] flex mx-auto' src={Logo} alt=''  />
                  <span className='text-2xl font-medium whitespace-nowrap dark:text-white'>Arvind Kumar</span>
              </div>
             
            )}
          </div>
        </Link>

        <ul className='pt-4'>
          {Menus.map((menu, index) => (
            <Link to={menu.path} key={index}>
              <li
                className={`flex items-center gap-x-6 p-3 text-base font-normal rounded-lg cursor-pointer dark:text-white hover:bg-gray-200 dark:hover:bg-gray-700
                        ${menu.gap ? 'mt-9' : 'mt-2'} ${
                  location.pathname === menu.path &&
                  'bg-gray-200 dark:bg-gray-700'
                }`}
              >
                <span className='text-2xl '>{menu.src}</span>
                <span
                  className={`${
                    !open && 'hidden'
                  } origin-left duration-300 hover:block  w-[100px]`}
                >
                  {menu.title}
                </span>
              </li>
            </Link>
          ))}
        </ul>
      </div>
      {/* Mobile Menu */}
      <div className="pt-3">
        <HamburgerButton
          setMobileMenu={setMobileMenu}
          mobileMenu={mobileMenu}
        />
      </div>
      <div className="sm:hidden">
        <div
          className={`${
            mobileMenu ? 'flex' : 'hidden'
          } absolute z-50 flex-col items-center self-end py-8 mt-16 space-y-6 font-bold sm:w-auto left-6 right-6 dark:text-white  bg-gray-50 dark:bg-slate-800 drop-shadow md rounded-xl`}
        >
          {Menus.map((menu, index) => (
            <Link
              to={menu.path}
              key={index}
              onClick={() => setMobileMenu(false)}
            >
              <span
                className={` ${
                  location.pathname === menu.path &&
                  'bg-gray-200 dark:bg-gray-700'
                } p-2 rounded-xl hover:bg-gray-200 dark:hover:bg-gray-700`}
              >
                {menu.title}
              </span>
            </Link>
          ))}
        </div>
      </div>
    </>
  )
}

export default Sidebar
