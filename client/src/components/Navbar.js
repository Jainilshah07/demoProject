import React, { useState } from 'react'
import { Link, useLocation } from 'react-router-dom';
// import logo from '../assets/Logo.svg'
import logo from '../assets/logo.png';

const Navbar = () => {
  let location = useLocation();
  let [open, setOpen] = useState(true);
  let [open1, setOpen1] = useState(false);

  return (
    <nav className="flex items-center justify-between flex-wrap bg-zinc-700 border-b-[1.5px] border-black p-2 text-[16px]">
      <Link to="/" className="mr-4 inline-flex items-center">
        <img src={logo} className="w-9 h-9"></img>
      </Link>
      <div className="block lg:hidden">
        <button className="flex items-center px-3 py-2 border rounded border-black text-white bg-[#4051A3] hover:text-black hover:bg-white" onClick={() => setOpen(!open)}>
          <ion-icon name={open ? "close" : "menu"}></ion-icon>
        </button>
      </div>
      <div className={`w-full lg:ml-60 mx-2 block flex-grow lg:flex lg:items-center lg:w-auto ${open ? '' : 'hidden'}`}>
        <div className="text-sm lg:flex-grow mt-4 lg:text-center font-[Montserrat] font-extrabold">
          {/* <img src={logo}/> */}
          <Link to="/collections" className="block lg:inline-block text-base lg:mt-0 text-white hover:bg-gray-600 p-2 hover:rounded-full mr-4 lg:mr-8 float-left">
            <span>Collections</span>
          </Link>
          <Link to="/order" className="block lg:inline-block text-base lg:mt-0 text-white hover:bg-gray-600 p-2 hover:rounded-full mr-4 lg:mr-8 float-left">
            <span>Bonds</span>
          </Link>
          <Link to="/begineer-guide" className="block lg:inline-block text-base lg:mt-0 text-white hover:bg-gray-600 p-2 hover:rounded-full mr-4 lg:mr-8 float-left">
            <span>Beginner's Guide</span>
          </Link>
          <Link to="/about-us" className="block lg:inline-block text-base lg:mt-0 text-white hover:bg-gray-600 p-2 hover:rounded-full mr-4 lg:mr-8 float-left">
            <span>About Us</span>
          </Link>
          <Link to="/portfolio" className="block lg:inline-block text-base lg:mt-0 text-white hover:bg-gray-600 p-2 hover:rounded-full mr-4 lg:mr-8 float-left">
            <span>Portfolio</span>
          </Link>.
          <Link to="/funds" className="block lg:inline-block text-base lg:mt-0 text-white hover:bg-gray-600 p-2 hover:rounded-full mr-4 lg:mr-8 float-left">
            <span>Wallet</span>
          </Link>
          {/* <Link to="/portfolio" className="block lg:inline-block text-base lg:mt-0 text-black hover:bg-gray-600 p-2 hover:rounded-full mr-4 lg:mr-8">
            <span>Portfolio</span>
          </Link> */}
        </div>
        {location.pathname === "/login" || location.pathname === "/kyc" || location.pathname === "/register" ? "" :
          <div>
            <Link to="/login" className={`inline-block text-sm py-4 px-6 leading-none border rounded-xl text-black bg-white border-black  hover:bg-white hover:text-black mt-4 lg:mt-0 font-[Ubuntu] font-light`}>Sign Out</Link>
          </div>}
      </div>
    </nav>
  )

}

export default Navbar