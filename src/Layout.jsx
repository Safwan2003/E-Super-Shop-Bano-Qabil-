import React, { useState, useEffect } from 'react';
import { Outlet, Link } from 'react-router-dom';
import Logout from './Pages/Logout';
import { useAuth0 } from '@auth0/auth0-react';
import logo from './assets/logo.png';
import "../src/Stylesheet/Layout.css";
import Footer from './Pages/Footer';


const Layout = () => {
  const { user, isAuthenticated, loginWithRedirect } = useAuth0();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  useEffect(() => {
    document.querySelectorAll('nav ul li a').forEach(link => {
      link.innerHTML = link.innerText
        .split('')
        .map((letters, i) => `<span style="transition-delay:${i * 60}ms;">${letters}</span>`)
        .join('');
    });
  }, []);

  return (
    <div>
      <nav>
        <div className=' flex items-center justify-between bg-white  w-full p-5  pb-[2.5rem]  drop-shadow-2xl'>
          <Link to="/" className='text-2xl font-semibold'>
            <img src={logo} alt='logo' className='w-[10rem] '/>
          </Link>

          <div className='lg:hidden'>
            <button
              onClick={toggleMobileMenu}
              className='p-2 text-gray-300 focus:outline-none'
            >
              <svg
                className='w-6 h-6 fill-current'
                viewBox='0 0 24 24'
              >
                <path d='M4 6h16v2H4zm0 5h16v2H4zm0 5h16v2H4z' />
              </svg>
            </button>
          </div>

          <ul className={`hidden lg:flex space-x-6 items-center animate-navigatio`}>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/products">Products</Link></li>
            <li><Link to="/cartlist">Cartlist</Link></li>
          </ul>

          {isAuthenticated ? (
            <div className='hidden lg:flex items-center space-x-4'>
              <div className='bg-[#ffa458] p-2 px-3 rounded-lg'>
                <Logout />
              </div>
              <div className='flex flex-col items-center space-y-1'>
                <img src={user.picture} alt={user.name} className='rounded-full w-10 h-10' />
                <h2 className='text-sm'>{user.name}</h2>
              </div>
            </div>
          ) : (
            <button
              onClick={loginWithRedirect}
              className='p-2 px-3 bg-[#ffa458] text-white rounded-lg max-sm:hidden'
            >
              Login
            </button>
          )}
        </div>

        <div
          className={`lg:hidden mt-3  ${mobileMenuOpen ? 'flex flex-col' : 'hidden'}`}
        >
          <ul className='space-y-3 flex flex-col'>
            <li><Link to="/" className='block'>Home</Link></li>
            <li><Link to="/products" className='block'>Products</Link></li>
            <li><Link to="/cartlist" className='block'>Cartlist</Link></li>
            {isAuthenticated ? (
            <div className=' lg:flex items-center space-x-4 space-y-5'>
              <div className='bg-[#ffa458] p-2 px-3 rounded-lg'>
                <Logout />
              </div>
              <div className='flex flex-col items-center space-y-1'>
                <img src={user.picture} alt={user.name} className='rounded-full w-10 h-10' />
                <h2 className='text-sm'>{user.name}</h2>
              </div>
            </div>
          ) : (
            <button
              onClick={loginWithRedirect}
              className='p-2 md:hidden px-3 bg-[#ffa458] text-white rounded-lg '
            >
              Login
            </button>
          )}
          </ul>
        <span className='max-sm:hidden border-b-2 border-[#fba458] ' ></span>
        </div>
      </nav>
      <Outlet />
      <Footer/>
    </div>
  );
};

export default Layout;
