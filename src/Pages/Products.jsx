import React from 'react';
import { Link } from 'react-router-dom';

const Products = ({ tShirts }) => {
  return (
    <div className="grid lg:grid-cols-3 gap-4 lg:px-[10rem] p-10">
      {tShirts.map((tShirt, index) => (
        <div key={index} className="lg:w-[20rem] flex flex-col justify-center items-center  rounded-2xl bg-white drop-shadow-2xl ">
          <h3 className='font-thin text-2xl' >{tShirt.name}</h3>
          <Link to={`/product/${tShirt.name}`}>
            <img src={tShirt.images[0].image} alt={tShirt.name} />
          </Link>
          <p className='text-2xl p-3 font-bold  '>${tShirt.price}</p>
        </div>
      ))}
    </div>
  );
};

export default Products;
