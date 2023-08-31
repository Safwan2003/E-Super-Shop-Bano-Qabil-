import React, { useState, useEffect } from 'react';
import { Outlet, Link } from 'react-router-dom';
import Logout from './Pages/Logout';
import { useAuth0 } from '@auth0/auth0-react';
import logo from './assets/logo.png';
import "../src/Stylesheet/Layout.css";


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
        <div className='container mx-auto flex items-center justify-between'>
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

          <ul className={`hidden lg:flex space-x-6 items-center animate-navigation`}>
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
              className='p-2 px-3 bg-blue-500 text-white rounded-lg max-sm:hidden'
            >
              Login
            </button>
          )}
        </div>

        <div
          className={`lg:hidden mt-3 ${mobileMenuOpen ? 'block' : 'hidden'}`}
        >
          <ul className='space-y-3'>
            <li><Link to="/" className='block'>Home</Link></li>
            <li><Link to="/products" className='block'>Products</Link></li>
            <li><Link to="/cartlist" className='block'>Cartlist</Link></li>
            {!isAuthenticated && (
              <li>
                <button
                  onClick={loginWithRedirect}
                  className='block bg-blue-500 text-white rounded-lg p-2 px-3 w-full text-center'
                >
                  Login
                </button>
              </li>
            )}
          </ul>
        </div>
      </nav>
      <Outlet />
    </div>
  );
};

export default Layout;
