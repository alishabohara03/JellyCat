
import React from 'react'
import { useParams } from 'react-router-dom';
import { ShopContext } from '../context/ShopContext';
import { useState, useEffect, useContext } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar, faStarHalfStroke } from '@fortawesome/free-solid-svg-icons';
import RelatedProducts from '../components/RelatedProducts';

const Product = () => {
  const { productId } = useParams();  
  const { products, currency, addToCart } = useContext(ShopContext);
  const [productData, setProductData] = useState(false);
  const [image, setImage] = useState('');
  const [size, setSize] = useState('');

  const fetchProductData = async () => {
    products.map((item)=>{
      if(item._id === productId){
        setProductData(item)
        setImage(item.image[0])
        // console.log(item)
        return null;
      }
    })
  };

  useEffect(() => {
    console.log(products);
    fetchProductData();  
  }, [productId]);  

  return productData ? (
    <div className="border-t-2 pt-10 transition-opacity ease-in duration-500 opacity-100">
      {/* Product Data */}
      <div className="flex gap-12 sm:gap-12 flex-col sm:flex-row">
        {/* Product Images */}
        <div className="flex-1 flex flex-col-reverse gap-3 sm:flex-row">
          <div className="flex sm:flex-col justify-between sm:justify-normal sm:w-full w-full h-auto">
            {productData.image.map((item, index) => (
              <img
                key={index}
                src={item}
                alt={productData.name}
                className="w-full sm:w-full sm:mb-3 flex-shrink-0"
              />
            ))}
          </div>
        </div>

        {/*  Product Info */}
        <div className='flex-1'>
          <h1 className='font-medium text-2xl mt-2'>{productData.name}</h1>
          <div className='flxe items-center gap-1 mt-2'>
            <FontAwesomeIcon icon={faStar} className='w-3 5'/>
            <FontAwesomeIcon icon={faStar} className='w-3 5'/>
            <FontAwesomeIcon icon={faStar} className='w-3 5'/>
            <FontAwesomeIcon icon={faStar} className='w-3 5'/>
            <FontAwesomeIcon icon={faStarHalfStroke} className='w-3 5'/>
            <p className='pl-2 '>122</p>
          </div>
          <p className='mt-5 text-3xl font-medium'>{currency}{productData.price}</p>
          <p className='mt-5 text-gray-400 md:w-3/4'>{productData.description}</p>
          <div className='flex flex-col gap-4 my-8'>
            <p>Select Size</p>
            <div className='flex gap-2'>
              {productData.sizes.map((item, index) => (
                <button 
                onClick={() => setSize(item)} 
                key={index} 
                className={`border border-gray-400 px-4 py-2 cursor-pointer bg-gray-100 ${item === size ? 'border-orange-500' : ''}`}
              >
                {item}
              </button>
              
              ))}
            </div>
          </div>
          <button 
            onClick={()=>addToCart(productData._id, size)} 
            className='bg-black text-white px-8 py-3 text-sm active:bg-gray-700'>ADD TO CART</button>
          <hr className='mt-8 sm:w-4/5'/>
          <div className='text-sm text-gray-500 mt-5 flex flex-col gap-1'></div>
              <p>100% Original product.</p>
              <p>Cash on delivery is available on this product.</p>
              <p>Easy return and exchange policy within 7  days</p>
        </div>
      </div>

      {/* Description & Review Section */}
      <div className='mt-20'>
        <div className='flex'>
          <b className='border px-5 py-3 text-sm'>Description</b>
          <p className='bloder px-5 py-3 text-sm'> Reviews (122)</p>
        </div>
        <div className='flex flex-col gap-4 border px-6 py-6 text-gray-500'>
        <p>Lovingly made with the softest, high-quality fabrics, this Jellycat friend is designed for endless cuddles and lasting joy.</p>
<p>Crafted with care using eco-friendly materials, it’s a huggable choice for little ones and thoughtful grown-ups alike.</p>

        </div>
      </div>

      {/* Display Latest Products */}
      <RelatedProducts category={productData.category} subCategory={productData.subCategory} />
    </div>
  ) : <div className='opacity-0'></div>;
}

export default Product;