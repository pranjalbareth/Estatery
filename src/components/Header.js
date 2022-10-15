import React from 'react';
// import link
import { Link } from 'react-router-dom';
// import logo
import Logo from '../assets/img/logo-estatery.png';

const Header = () => {
  return (
    <header className='py-6 mb-12 border-b bg-white'>
      <div className='container mx-auto flex justify-between items-center'>
        <div className='flex items-center gap-9'>
        <Link to='/'>
          <img width="110px" className=' mr-50' src={Logo} alt='' />
        </Link>
          <Link
            className='bg-blue-hover hover:bg-blue ml-5 px-4 py-2 rounded-lg tab-link-selected transition'
            to='/'
          >
            Rent
          </Link>
          <Link className='hover:bg-blue-border transition tab-link' to='/'>
           Buy
          </Link>
          <Link className='hover:bg-blue-border transition tab-link' to='/'>
           Sell
          </Link>
          <Link className='hover:bg-blue-border transition tab-link' to='/'>
            Manage property
          </Link>
          <Link className='hover:bg-blue-border transition tab-link' to='/'>
            Resources
          </Link>
        </div>
        <div className='flex items-center gap-3'>
          <Link className='hover:bg-blue-border rounded-lg transition px-5 py-2 rounded-lg login' to='/'>
            Login
          </Link>
          <Link
            className='bg-blue hover:bg-blue-hover text-white text-10 px-4 py-2 rounded-lg signup transition'
            to='/'
          >
            Sign up
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
