import React, { useState, useEffect, useRef } from 'react';
import { useParams } from 'react-router-dom';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import Swal from 'sweetalert2';


const ProductDetail = ({ tShirts, addToCart , user }) => {
  const { productId } = useParams();

  const product = tShirts.find((tShirt) => tShirt.name === productId);

  const [selectedImage, setSelectedImage] = useState(null);
  const [quillText, setQuillText] = useState("");
  const [fontSize, setFontSize] = useState("30px");
  const canvasRef = useRef(null);

  useEffect(() => {
    if (product) {
      setSelectedImage(product.images[0].image);
    }
  }, [product]);

  const handleColorClick = (image) => {
    setSelectedImage(image);
  };

  const handleAddText = () => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');

    const image = new Image();
    image.src = selectedImage;
    image.onload = () => {
      canvas.width = image.width;
      canvas.height = image.height;

      ctx.drawImage(image, 0, 0);
      ctx.font = `${fontSize} Arial`;
      ctx.fillStyle = 'white';

      const xPosition = canvas.width / 2;
      const yPosition = canvas.height / 2;

      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';
      ctx.fillText(quillText.replace(/<\/?[^>]+(>|$)/g, ""), xPosition, yPosition);

      setSelectedImage(canvas.toDataURL());
    };
  };
  const handleAddToCart = () => {
    if (user) {
      if (product) {
        addToCart({
          name: product.name,
          price: product.price,
          image: selectedImage,
        });
  
        Swal.fire({
          icon: 'success',
          title: 'Product Added Successfully',
          showConfirmButton: false,
          timer: 1500, // Close the alert after 1.5 seconds
        });
      }
    } else {
      Swal.fire({
        icon: 'error',
        title: 'Please log in to add products to the cart.',
      });
    }
  };
  
  
  const handleFontSizeChange = (event) => {
    setFontSize(event.target.value);
  };

  if (!product) {
    return <div>Product not found</div>;
  }

  return (
    <div className='flex justify-center items-center space-x-10 px-[10rem]'>
      <div className="flex flex-col items-center p-4">
        <h2 className="text-2xl font-semibold">{product.name}</h2>
        <div className="flex mt-4 gap-2">
          {product.images.map((image, idx) => (
            <div
              key={idx}
              className="w-8 h-8 rounded-full cursor-pointer   drop-shadow-2xl	 "
              style={{ backgroundColor: image.color }}
              onClick={() => handleColorClick(image.image)}
            ></div>
          ))}
        </div>
        <div className="mt-4 w-[25rem]">
          {selectedImage && (
            <img src={selectedImage} alt={`${product.name} - ${selectedImage}`} className="max-w-full h-auto" />
          )}
        </div>

        <div className="mt-4 text-center">
          <h3 className="text-lg font-semibold">Product Details</h3>
          <p>Name: {product.name}</p>
          <p>Price: ${product.price}</p>
        </div>
        <button className="mt-2 px-4 py-2 bg-green-500 text-white rounded" onClick={handleAddToCart} >
            Add to Cart
        </button>
      </div>

      <canvas ref={canvasRef} className="hidden"></canvas>

      <div className="text-editor">
        <ReactQuill
          value={quillText}
          onChange={setQuillText}
          placeholder="Add your text here"
          modules={{
            toolbar: [
              [{ 'header': [1, 2, 3, 4, false] }],
              ['bold', 'italic', 'underline', 'strike', 'blockquote'],
              [{ 'list': 'ordered' }, { 'list': 'bullet' }],
              ['link', 'image'],
              ['clean']
            ],
          }}
        />
        <div className="font-size-selector">
          <label>Font Size:</label>
          <select value={fontSize} onChange={handleFontSizeChange}>
            <option value="20px">Small</option>
            <option value="30px">Medium</option>
            <option value="40px">Large</option>
          </select>
        </div>
        <button className="mt-2 px-4 py-2 bg-blue-500 text-white rounded" onClick={handleAddText}>
          Add Text to Image
        </button>
      </div>
    </div>
  );
};

export default ProductDetail;
