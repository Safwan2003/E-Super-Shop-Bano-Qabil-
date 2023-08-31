import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Layout from './Layout';
import Products from './Pages/Products';
import ProductDetail from './Pages/ProductDetail';
import Home from './Pages/Home';
import Cartlist from './Pages/Cartlist';


import bluehoodie from './assets/Hoodie/blue-hoodie.png';
import burgundyhoodie from './assets/Hoodie/burgundy.png';
import blackhoodie from './assets/Hoodie/black.png';
import navybluehoodie from './assets/Hoodie/navyblue.png';
import whitehoodie from './assets/Hoodie/white.png';
import redhoodie from './assets/Hoodie/red.png';
import bluekid from './assets/KidsTShirt/blue.png';
import greenkid from './assets/KidsTShirt/green.png';
import greykid from './assets/KidsTShirt/grey.png';
import whiteFhoodie from './assets/Bella + Canvas Full Zip Hoodie/white.png';
import orangeFhoodie from './assets/Bella + Canvas Full Zip Hoodie/orange.png';
import tanFhoodie from './assets/Bella + Canvas Full Zip Hoodie/tan.png';
import blacksweat from './assets/Sweatshirt/black.png';
import navysweat from './assets/Sweatshirt/navy.png';
import tansweat from './assets/Sweatshirt/heathergrey.png';


import beigejersey from './assets/jersey/beige.png';
import bluejersey from './assets/jersey/blue.png';
import greyjersey from './assets/jersey/grey.png';

import bluemtshirt from './assets/Men Tshirt/ice-shirt.png';
import blackmtshirt from './assets/Men Tshirt/black-shirt.png';
import greenmtshirt from './assets/Men Tshirt/green-shirt.png';

import { useAuth0 } from '@auth0/auth0-react';





const App = () => {
  const tShirts = [
    
    {
      name: "Hoodie",
      price: 25,
      images: [
        { color: "blue", image: bluehoodie },
        { color: "maroon", image: burgundyhoodie },
        { color: "black", image: blackhoodie },
        { color: "red", image: redhoodie },
        { color: "azure", image: whitehoodie },
        { color: "navy", image: navybluehoodie }

      ]
    },
    
    {
      name: "Kid's T-Shirt",
      price: 8,
      images: [
        { color: "blue", image: bluekid },
        { color: "green", image: greenkid },
        { color: "grey", image: greykid },

      ]
    },
    {
      name: "Full Zip Hoodie",
      price: 40,
      images: [
        { color: "white", image: whiteFhoodie },
        { color: "orange", image: orangeFhoodie },
        { color: "tan", image: tanFhoodie },

      ]
    },
{
  name:"Jersey T-Shirt",
  price: 10,
  images: [
    { color: "beige", image: beigejersey },
    { color: "skyblue", image: bluejersey },
    { color: "grey", image: greyjersey },

  ]
},
    {
      name: "Sweat Shirt",
      price: 45,
      images: [
        { color: "grey", image: tansweat },
        { color: "black", image: blacksweat },
        { color: "navy", image: navysweat },

      ]
    },

    {
      name: "Men's TShirt",
      price: 45,
      images: [
        { color: "skyblue", image: bluemtshirt },
        { color: "black", image: blackmtshirt },
        { color: "green", image: greenmtshirt },

      ]
    },
  ];

  const [cartItems, setCartItems] = useState([]);
  const { user, isAuthenticated, loginWithRedirect } = useAuth0();

  const addToCart = (item) => {
    setCartItems([...cartItems, item]);
  };

  const handleRemoveFromCart = (indexToRemove) => {
    const updatedCartItems = [...cartItems];
    updatedCartItems.splice(indexToRemove, 1);
    setCartItems(updatedCartItems);
  };
  return (
    <Router>
    <Routes>
      <Route
        path="/"
        element={<Layout user={user}  />}>
        <Route index element={<Home />} />
        <Route
          path="products"
          element={<Products tShirts={tShirts} />} />
        <Route
          path="product/:productId"
          element={<ProductDetail tShirts={tShirts} addToCart={addToCart} user={user} />} />
        <Route
          path="cartlist"
          element={<Cartlist cartItems={cartItems} user={user} handleRemoveFromCart={handleRemoveFromCart} />
        } />
        </Route> 
    </Routes>
    
  </Router>


  
  );
};

export default App;
