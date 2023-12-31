import React from 'react';
import logo from '../assets/logo.png';
import premium from '../assets/premium-quality.png';
import verify from '../assets/verify.png';
import discounted from '../assets/price-tag.png';

const Footer = () => {
  return (
    <div>
      <hr />
      <footer className="bg-white p-5 overflow-hidden drop-shadow-2xl">
        <div className="flex flex-col md:flex-row justify-between">
          <div className="footer__content">
            <a href="https://e-super-shop-bano-qabil.vercel.app/" className="footer__logo">
              <img src={logo} alt="" className="w-[10rem] m-3" />
            </a>
            <p className="md:w-[30rem] lg:w-[50rem] mt-[2rem]">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.Accusantium repellendus consequatur quasi optio ullam aliquam, inventore temporibus excepturi velit recusandae, praesentium enim quo eos dolorem libero aperiam rerum laudantium quas.
            </p>
            <div className="flex flex-col md:flex-row my-5">
              <h3 className="text-2xl font-bold">Newsletter</h3>
              <span className="border-b-4 border-[#ffa458] w-[7rem] relative right-[10rem] lg:right-[7rem] top-[4px] "></span>
            </div>
            <p className="font-mono">Subscribe and Get Recent News & Updates.</p>
            <div className="my-2 md:space-x-4 lg:space-x-10">
              <input type="text" placeholder="Enter your Email Address" className="border-2 px-3 p-2 md:w-[15rem] lg:w-[25rem]" />
              <button className="bg-[#ffa458] p-2 px-3 text-white m-1">Subscribe</button>
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="text-xl font-semibold">Contact Info</h3>
            <dl className="flex flex-col font-semibold">
              <dt>Mon - Thurs:</dt>
              <dd className="font-thin">4:00 pm to 12:00 pm</dd>
              <dt>Friday:</dt>
              <dd className="font-thin">4:00 pm to 12:00 pm</dd>
            </dl>

            <div className="space-y-5 text-xl">
              <div className="flex space-x-3 items-center">
                <img src={premium} alt="verify-logo" className="w-12 h-12" />
                <div className="w-[35rem]">
                  <b>Premium</b>
                </div>
              </div>

              <div className="flex space-x-3 items-center">
                <img src={verify} alt="handshake-logo" className="w-12 h-12" />
                <div className="w-[35rem]">
                  <b>Quality</b>
                </div>
              </div>

              <div className="flex space-x-3 items-center">
                <img src={discounted} alt="market-logo" className="w-12 h-12" />
                <div className="w-[35rem]">
                  <b>Discounted</b>
                </div>
              </div>
            </div>
          </div>
        </div>

        <br />
        <hr />
        <p className="font-mono my-5 text-center">2023 E-Super-Shop Copyright <br /><span className='text-[#ffa458] font-bold' >Safwan Ali & Muhammad Shaffan </span></p>
        <hr />
      </footer>
    </div>
  );
};

export default Footer;
