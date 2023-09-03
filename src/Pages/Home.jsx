import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // Import the carousel styles
import about from '../assets/Aboutus.png';
import "../Stylesheet/Home.css"
import img1 from "../assets/giphy.gif";
 import img2 from "../assets/grid-image-1.jpg";
 import img3 from "../assets/grid-image-2.jpg";
import img4 from "../assets/grid-image-3.jpg";
import img5 from "../assets/grid-image-4.jpg";
import img6 from "../assets/HP_SEO_bubble_5spodEN.webp";
import slide1 from "../assets/slide1.jpg";
import slide2 from "../assets/slide2.jpg";



import market from '../assets/market.png';
import verify from '../assets/verify.png';
import handshake from '../assets/handshake.png';

import brand from '../assets/brand.png';
import woocommerce from '../assets/woocommerce.png';
import shopify from '../assets/shopify.png';
import etsy from '../assets/etsy.png';
import ebay from '../assets/ebay.png';
import appstore from '../assets/app-store.png';


const Home = () => {
  return (
    <div className="w-full ">
     <Carousel
  showArrows={true}
  showThumbs={false}
  showStatus={false}
  showIndicators={false}
  dynamicHeight={true}
  autoPlay={true} // Autoplay enabled
  interval={5000} // Autoplay interval in milliseconds
  infiniteLoop={true} // Loop through slides infinitely
  className="w-full"
>
  <div className="sm:h-[20rem] md:h-[30rem] lg:h-[40rem] flex justify-center items-center text-white text-4xl">
    <img src={slide1} alt="slide1" className="h-full" />
  </div>
  <div className="sm:h-[20rem] md:h-[30rem] lg:h-[40rem] flex justify-center items-center text-white text-4xl">
    <img src={slide2} alt="slide2" className="h-full" />
  </div>
  {/* Add more slides here */}
</Carousel>




      <section className="homepage-topics">
      <div className="container">
        <h2 className=" text-center lg:text-4xl tracking-[.5rem] font-mono font-bold py-10">#MAKEITYOURS</h2>

        <div className="row tiles">
          <div className="homepage-topics__tile col-12 col-md-8">
            <a
              className="homepage-topics__link"
              href="https://e-super-shop-bano-qabil.vercel.app/products"
              data-tracking="Homepage - Tiles - Topics - 16/01/2023 - /clothing/t-shirts/summer/"
              data-handlelinks=""
            >
              <picture className='homepage-topics__picture'>
                <source
                  src={img1}
                  data-srcset={img1}
                  media="(min-width: 1280px)"
                />
                <source
                  src={img1}
                  data-srcset={img1}
                  media="(min-width: 1280px)"
                />

                <img 
                src={img1}
                 alt="❤️️ Designs"
                data-srcset={img1}
                   />
              </picture>
              <div className="homepage-topics__overlay ">
                <span className="homepage-topics__text mobile ">
                  ❤️️ Designs
                  <svg className="icon icon--right">
                    <use xlinkHref="/pages/_components/svg/global.svg#right" />
                  </svg>
                </span>
                <span className="homepage-topics__text desktop ">❤️️ Designs</span>
              </div>
            </a>
          </div>

          <div className="homepage-topics__tile col-12 col-md-4">
            <div className="row tiles">
              <div className="col-6 col-md-12">
                <a
                  className="homepage-topics__link"
                  href="https://e-super-shop-bano-qabil.vercel.app/products"
                  data-tracking="Homepage - Tiles - Topics - 16/01/2023 - /smileyworld/"
                  data-handlelinks=""
                >
                  <picture className="homepage-topics__picture">
                    <source
                      srcSet={img2}
                      data-srcset={img2}
                      media="(min-width: 1280px)"
                    />
                    <source
                      srcSet={img2}
                      data-srcset={img2}
                    />
                    <img
                      className="homepage-topics__image lazyloaded"
                      src={img2}
                      data-src={img2}
                      alt="SmileyWorld"
                    />
                  </picture>
                  <div className="homepage-topics__overlay">
                    <span className="homepage-topics__text mobile ">SmileyWorld 
                      <svg className="icon icon--right ">
                        <use xlinkHref="/pages/_components/svg/global.svg#right" />
                      </svg>
                    </span>
                    <span className="homepage-topics__text desktop">SmileyWorld</span>
                  </div>
                </a>
              </div>
              <div className="last-child col-6 col-md-12">
                <a
                  className="homepage-topics__link"
                  href="https://e-super-shop-bano-qabil.vercel.app/products"
                  data-tracking="Homepage - Tiles - Topics - 16/01/2023 - Embroidery"
                  data-handlelinks=""
                >
                  <picture className="homepage-topics__picture">
                    <source
                      srcSet={img3}
                      data-srcset={img3}
                      media="(min-width: 1280px)"
                    />
                    <source
                      srcSet={img3}
                      data-srcset={img3}
                    />
                    <img
                      className="homepage-topics__image lazyloaded"
                      src={img3}
                      data-src={img3}
                      alt="Embroidery"
                    />
                  </picture>
                  <div className="homepage-topics__overlay">
                    <span className="homepage-topics__text mobile ">Embroidery 
                      <svg className="icon icon--right ">
                        <use xlinkHref="/pages/_components/svg/global.svg#right" />
                      </svg>
                    </span>
                    <span className="homepage-topics__text desktop">Embroidery</span>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>






        <div className="row tiles">
          <div className="homepage-topics__tile col-6">
            <a
              className="homepage-topics__link"
              href="https://e-super-shop-bano-qabil.vercel.app/products"
              data-tracking="Homepage - Tiles - Topics - 16/01/2023 - /home-living/water-bottles/"
              data-handlelinks=""
            >
              <picture className="homepage-topics__picture">
                <source
                  srcSet={img4}
                  data-srcset={img4}
                  media="(min-width: 1280px)"
                />
                <source
                  srcSet={img4}
                  data-srcset={img4}
                  media="(min-width: 768px)"
                />
                <source
                  srcSet={img4}
                  data-srcset={img4}
                />
                <img
                  className="homepage-topics__image lazyloaded"
                  src={img4}
                  data-src={img4}
                  alt="Custom Designs"
                />
              </picture>
              <div className="homepage-topics__overlay">
                <span className="homepage-topics__text mobile ">Custom Designs 
                  <svg className="icon icon--right ">
                    <use xlinkHref="/pages/_components/svg/global.svg#right" />
                  </svg>
                </span>
                <span className="homepage-topics__text desktop">Custom Designs</span>
              </div>
            </a>
          </div>
          
          <div className="homepage-topics__tile col-6">
  <a
    className="homepage-topics__link"
    href="https://e-super-shop-bano-qabil.vercel.app/products"
    data-tracking="Homepage - Tiles - Topics - 16/01/2023 - /accessories/bags-backpacks/tote-bags/"
    data-handlelinks=""
  >
    <picture className="homepage-topics__picture">
      <source
        srcSet={img5}
        data-srcset={img5}
        media="(min-width: 1280px)"
      />
      <source
        srcSet={img5}
        data-srcset={img5}
        media="(min-width: 768px)"
      />
      <source
        srcSet={img5}
        data-srcset={img5}
      />
      <img
        className="homepage-topics__image lazyloaded"
        src={img5}
        data-src={img5}
        alt="Comfortable"
      />
    </picture>
    <div className="homepage-topics__overlay">
      <span className="homepage-topics__text mobile">Comfortable 
        <svg className="icon icon--right">
          <use xlinkHref="/pages/_components/svg/global.svg#right" />
        </svg>
      </span>
      <span className="homepage-topics__text desktop">Comfortable</span>
    </div>
  </a>
</div>

        </div>
      </div>
    </section>








      <section className="my-10 px-10">
      <div className="container ">
        <div className="flex flex-col md:flex-row justify-between text-start items-center  ">
          <div className="md:w-6/12 md:pr-8 lg:pr-12">
            <img src={about} alt="About Us" className="max-w-full" />
            <div className="circle-about-us"></div>
          </div>
          <div className="md:w-6/12 mt-4 md:mt-0">
            <a href="#" className="bg-green-100 p-2 px-3 rounded-full ">Who We Are</a>
            <h2 className="font-bold text-2xl md:text-3xl lg:text-4xl  my-4">Explore us from the Experience</h2>
            <div className="w-full mt-4">
              <p className="text-sm md:text-base lg:text-lg text-gray-700">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Culpa, aperiam eum impedit sit facilitaque tempore dicta mollitia error quibusdam. Obcaecati at velit ipsam incidunt quidem eius, repellat voluptatem in.
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Inventore ratione facere, veritatis sunt voluptatibus corrupti blanditiis cum autem dolorem. Quos esse est voluptate labore unde, soluta deleniti.
                Temp
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  
     
     
     
    <section className="my-10 px-10">
  <div className="container ">
    <div className="flex flex-col md:flex-row justify-between text-start items-center">
      <div className="md:w-6/12 mt-4 md:mt-0">
        <h2 className="font-bold text-2xl md:text-3xl lg:text-4xl my-4">SPOD –E-Super Shop Print-on-Demand</h2>
        <div className="w-full mt-4">
          <p className="text-sm md:text-base lg:text-lg text-gray-700">
            E-Super Shop proven quality, speed and reliability is now available for your Shopify shop. SPOD processes your orders faster than any other POD provider on Shopify. Impress your customers with customization options, and enjoy easy customer and order management. Curious? Then get the app!
          </p>
        </div>
      </div>

      <div className="md:w-6/12 md:pl-8 lg:pl-12">
        <img src={img6} alt="About Us" className="max-w-full" />
        <div className="circle-about-us"></div>
      </div>
    </div>
  </div>
</section>













<section className='grid lg:grid-cols-2 grid-cols-1  gap-4 bg-gray-100 overflow-hidden lg:px-[10rem] text-start justify-center items-center lg:h-[25rem] p-5 lg:space-x-[10rem]  my-10' >

  <div className='text-2xl max-md:text-center font-semibold'>
    <div>ARE YOU CREATIVE?</div>
    <div>MONETIZE YOUR TALENTS!</div>
    <button className='bg-[#ffa458] text-white mt-5 p-2 rounded-lg drop-shadow-2xl'>Buy Now</button>
  </div>

  <div className='space-y-5 p-3 text-xl w-full sm:w-[10rem]'>
    <div className='grid lg:grid-cols-2 grid-cols-1 max-md:place-items-center max-md:text-center items-center'><img src={verify} alt='verify-logo' className='w-12 h-12' /> <div className='w-full sm:w-[25rem]'><b>Always Free</b> <br />Earn money by selling your designs on over 250 products. No costs.</div></div>

    <div className='grid lg:grid-cols-2 grid-cols-1 max-md:place-items-center max-md:text-center items-center'><img src={handshake} alt='handshake-logo' className='w-12 h-12' /> <div className='w-full sm:w-[35rem]'><b>Risk Free</b><br /> We take care of everything – from order processing to shipping, handling payments, and customer service.</div></div>

    <div className='grid lg:grid-cols-2 grid-cols-1 max-md:place-items-center max-md:text-center items-center'><img src={market} alt='market-logo' className='w-12 h-12' /> <div className='w-full sm:w-[35rem]'><b>Various Marketplaces</b><br /> We take care of everything – from order processing to shipping, handling payments, and customer service.</div></div>

  </div>

</section>









<div className='flex flex-col justify-center text-center items-center '>
<div className='font-mono font-semibold  lg:text-3xl   '>#WE Are Available  </div>
<div className='text-xl font-thin flex text-white   justify-center items-center  text-center m-3 w-[10rem]'><p className='bg-[#ffa458] p-2 rounded-full  '> At Your Reach</p> </div>
<section className='flex my-10 justify-center space-x-[5rem] h-[50rem]'>
<div className='grayscale hover:grayscale-0 cursor-pointer	 opacity-50 hover:opacity-100 rounded-full'><img src={woocommerce} className='w-[5rem]  '  /></div>
<div className='grayscale hover:grayscale-0 cursor-pointer	 opacity-50 hover:opacity-100 rounded-full'><img src={shopify} className='w-[5rem]'  /></div>
<div className='grayscale hover:grayscale-0 cursor-pointer	 opacity-50 hover:opacity-100 rounded-full'><img src={etsy} className='w-[5rem]'  /></div>
<div className='grayscale hover:grayscale-0 cursor-pointer	 opacity-50 hover:opacity-100 rounded-full'><img src={ebay} className='w-[5rem]'  /></div>
<div className='grayscale hover:grayscale-0 cursor-pointer	 opacity-50 hover:opacity-100 rounded-full'><img src={appstore} className='w-[5rem]'  /></div>
<div className='grayscale hover:grayscale-0 cursor-pointer	 opacity-50 hover:opacity-100 rounded-full'><img src={brand} className='w-[5rem]'  /></div>

</section>
</div>

                    </div>
);
};

export default Home;
