import React, { useState } from 'react';
import logo from '../assets/img/logo-black.png';
import { FaBars } from 'react-icons/fa';

function Navbar() {
    const [toggle, setToggle] = useState(false);
    
    const UpdateToggle = () => {
        setToggle(!toggle);
    };

    return (
        <nav className='bg-[#F5F7FA]'>
            <div className='container mx-auto max-w-[1320px] relative h-auto p-10 flex flex-col md:flex-row md:justify-between md:items-center md:h-[80px]'>
                {/* Logo */}
                <div>
                    <a href="#"><img src={logo} alt="Logo" /></a>
                </div>

                {/* Navbar Links */}
                <ul className={`${toggle ? 'flex' : 'hidden'} flex flex-col my-5 md:flex md:flex-row`}>
                    <li className='my-2 md:mx-4'><a href="#">Home</a></li>
                    <li className='my-2 md:mx-4'><a href="#">Service</a></li>
                    <li className='my-2 md:mx-4'><a href="#">Feature</a></li>
                    <li className='my-2 md:mx-4'><a href="#">Testimonials</a></li>
                    <li className='my-2 md:mx-4'><a href="#">FAQ</a></li>
                </ul>

                {/* Auth Buttons */}
                <ul className={`${toggle ? 'flex' : 'hidden'} flex flex-col my-5 md:flex md:flex-row`}>
                    <li className='my-2 md:mx-4'>
                        <a className='inline-flex justify-center items-center py-2 px-4 text-[#4CAF4F]' href="#">Login</a>
                    </li>
                    <li className='my-2 md:mx-4'>
                        <a className='inline-flex justify-center items-center py-2 px-4 bg-[#4CAF4F] text-white rounded-md' href="#">Sign Up</a>
                    </li>
                </ul>

                {/* Hamburger Icon */}
                <FaBars onClick={UpdateToggle} className='absolute right-5 cursor-pointer text-xl md:hidden ' />
            </div>
        </nav>
    );
}

export default Navbar;
