import React from 'react';
import Swal from 'sweetalert2';

const Cartlist = ({ cartItems, user, handleRemoveFromCart }) => {
  const handleClearCart = () => {
    // Clear the entire cart by setting cartItems to an empty array
    handleRemoveFromCart(-1); // Call the same remove function with a special index
  };



  // ... your imports and component code
  const handleCheckout = async () => {
    try {
      console.log('Sending checkout request...');
  
      const combinedData = {
        user,
        cartItems,
      };
  
      const response = await fetch('http://localhost:3001/api/checkout', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(combinedData), // Combine user and cartItems data
      });
  
      if (response.ok) {
        console.log('Checkout successful!');
        // Handle successful checkout (e.g., clear the cart, show a success message, etc.)
  
        // Show a success message using SweetAlert2
        Swal.fire({
          icon: 'success',
          title: 'Checkout Successful',
          text: 'Thank you for your purchase!',
        });
  
        // You can add code here to clear the cart or perform other actions on success.
      } else {
        console.log('Checkout failed.');
        // Handle checkout failure
  
        // Show an error message using SweetAlert2
        Swal.fire({
          icon: 'error',
          title: 'Checkout Failed',
          text: 'An error occurred during checkout. Please try again later.',
        });
      }
    } catch (error) {
      console.error(error);
      // Show an error message using SweetAlert2
      Swal.fire({
        icon: 'error',
        title: 'Error',
        text: 'An error occurred during checkout. Please try again later.',
      });
    }
  };
  







  

  // Calculate total price of cart items
  const totalPrice = cartItems.reduce((total, item) => total + item.price, 0);

  return (
    <div className=" flex flex-col text-center justify-center items-center mb-[10rem]">
      <h2 className='text-center text-2xl font-bold'>Your Cart</h2>
      <p className='text-center text-2xl font-bold mb-10'>Welcome,  {user ? user.name : 'Guest'}</p>
      <ul>
        {cartItems.map((item, index) => (
          <li key={index} className='grid lg:grid-cols-4 gap-4  justify-center text-center items-center   items-center'>
            <div className='font-bold text-xl '>{item.name}</div>
            <div className='text-xl'>${item.price}</div>
            <div>
              <img src={item.image} alt={`${item.name} - ${item.color}`} className="w-[10rem]" />
            </div>
            <button onClick={() => handleRemoveFromCart(index)} className='bg-red-500 p-2 px-3 text-white rounded-lg mr-2' >Remove</button>
          </li>
        ))}
      </ul>

      <div className="flex justify-end mt-4">
        <div className="font-bold text-xl">Total Price: ${totalPrice}</div>
      </div>

      <div className="flex justify-end mt-4">
        <button onClick={handleClearCart} className='bg-yellow-500 p-2 px-3 text-white rounded-lg mr-2' >Clear Cart</button>
        <button onClick={handleCheckout} className='bg-blue-500 p-2 px-3 text-white rounded-lg'>  Checkout </button>
      </div>
    </div>
  );
};

export default Cartlist;
