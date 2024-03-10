//import React from 'react';
import Navigation from './navigationBar'; 
import { useState } from 'react';
import { FaShoppingCart} from 'react-icons/fa';
import { useDispatch } from 'react-redux';
import LeftSidebar from './leftsidebar';
import { useNavigate } from 'react-router-dom';
//import Footer from './footer';
import { addToCart } from '../redux/action';
import { Link } from 'react-router-dom';  



const Home = () => {

  const imageUrl = 'https://res.cloudinary.com/dg2jouca2/image/upload/v1708586870/homepage_caaktr.png';
  const [products] = useState([
    { id: 1, name: 'Happy Birthday Neon Light Sign', price: 4200, imageUrl: 'https://www.giftsholic.in/cdn/shop/files/GH-162_400x_crop_center.jpg?v=1690197965' },
    { id: 2, name: 'Natural Wood Photo Frame Circle', price: 800, imageUrl: 'https://www.giftsholic.in/cdn/shop/files/GH-129-1_400x_crop_center.jpg?v=1693578501' },
    { id: 3, name: 'Happy Anniversary Neon Light Sign', price: 5000, imageUrl: 'https://www.giftsholic.in/cdn/shop/files/GH-163_400x_crop_center.jpg?v=1690198636' },
  ]);

  const handleAddToCart = (productId) => {
    dispatch(addToCart(products[productId-1]))
    navigate('/cart');
  };
  const dispatch = useDispatch();
    const navigate = useNavigate();

  return (
    <div>
      
      <Navigation/>
      <LeftSidebar/>  
      {/* <RightSidebar/> */} 
      <br/>
      <br/>
      <br/>
      <br/>
      <div className="image-container">
      <Link to="/gifts">      
        <img className='imgc' src={imageUrl} alt="Gift Shop"/>      
      </Link>
      </div>
      <br/>
      <hr/>
      <br/>
      <h1 className='page-title'>Fast Selling Products</h1>
      <div className="clearfix">
        {products.map((product) => (
          <div className="product-container" key={product.id}>
            <img src={product.imageUrl} alt={product.name} className="product-image" />
            <h3 className="product-name">{product.name}</h3>              
            <p className='product-price'>₹{product.price}</p>
            <div className='button-containerr'>
            <button className="action-icons">
              <FaShoppingCart onClick={() => handleAddToCart(product.id)} className="icon" />
            </button>
            </div>
          </div>
        ))}
      </div>
      <br/>
      <hr/>
      <br/>
    </div>
  );
};

export default Home;
