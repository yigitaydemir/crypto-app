import React from 'react'
import Logo from "../media/logo.jpg"

const Navbar = () => {
  return (
    <div className='backdrop-blur-[10px] bg-[#ffffff33] w-11/12 max-w-6xl my-2'>
        <div className=' w-full flex items-center justify-between'>
            <div className='flex items-center justify-center'>
                <img src={Logo} alt="Logo" className='w-20 m-0.5 p-0.5'/>
                <input className='m-0.5 p-0.5' type="text" placeholder=' Search...'/>
            </div>

            <nav>
                <ul className='flex items-center justify-center'>
                    <li className='m-0.5 p-0.5'>Home</li>
                    <li className='m-0.5 p-0.5'>Contact</li>
                    <li className='m-0.5 p-0.5'>About</li>
                </ul>
            </nav>
        </div>
    </div>
  )
}

export default Navbar