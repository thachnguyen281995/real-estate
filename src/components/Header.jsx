import React from 'react'
import {Link} from 'react-router-dom';
import Logo from '../assets/img/logo.svg';
const Header = () => {
  return (
    <header className='py-6 mb-12 border-b'>
        <div className="container mx-auto flex justify-between items-center">
            <Link to="/">
                <img src={Logo} alt="" />
            </Link>
            <div className='flex gap-6 items-center'>
                <Link to="" className='hover:text-violet-900 transition'>Log in</Link>
                <Link to="" className='px-4 py-3 text-white rounded-lg bg-violet-800 hover:bg-violet-900 transition'>Sign up</Link>
            </div>
        </div>
    </header>
  )
}

export default Header