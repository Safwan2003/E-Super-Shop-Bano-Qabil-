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


const Home = () => {
  return (
    <div className="w-full py-5">
      <Carousel
        showArrows={true}
        showThumbs={true}
        showStatus={false}
        showIndicators={true}
        dynamicHeight={true}
        autoPlay={true} // Autoplay enabled
        interval={5000} // Autoplay interval in milliseconds
        infiniteLoop={true} // Loop through slides infinitely
        className="w-full h-full" // Center and set max width
      >
        <div className=" h-[30rem] flex justify-center items-center text-white text-4xl">
        <img src={slide1} alt="slide1" />
        </div>
        <div className="bg-green-500 h-[30rem] flex justify-center items-center text-white text-4xl">2</div>
        <div className="bg-yellow-500 h-[30rem] flex justify-center items-center text-white text-4xl">3</div>
        <div className="bg-green-200 h-[30rem] flex justify-center items-center text-white text-4xl">4</div>

        {/* Add more slides here */}
      </Carousel>



      <section className="homepage-topics">
      <div className="container">
        <h2 className="homepage-topics__headline text-center text-2xl">#MAKEITYOURS</h2>

        <div className="row tiles">
          <div className="homepage-topics__tile col-12 col-md-8">
            <a
              className="homepage-topics__link"
              href="http://localhost:3000/products"
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
              <div className="homepage-topics__overlay">
                <span className="homepage-topics__text mobile">
                  ❤️️ Designs
                  <svg className="icon icon--right">
                    <use xlinkHref="/pages/_components/svg/global.svg#right" />
                  </svg>
                </span>
                <span className="homepage-topics__text desktop">❤️️ Designs</span>
              </div>
            </a>
          </div>

          <div className="homepage-topics__tile col-12 col-md-4">
            <div className="row tiles">
              <div className="col-6 col-md-12">
                <a
                  className="homepage-topics__link"
                  href="http://localhost:3000/products"
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
                  href="http://localhost:3000/products"
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
              href="http://localhost:3000/products"
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
    href="http://localhost:3000/products"
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





                    </div>
);
};

export default Home;
