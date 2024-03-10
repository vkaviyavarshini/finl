import   { useState } from 'react';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import '../css/order.css';
import { useNavigate } from 'react-router-dom';
import PlaceOrder from '../services/orderService';
import Navigation from './navigationBar';


const OrderPage = () => {
  const { id } = useParams();
  const products = useSelector((state) => state.items);
  const navigate = useNavigate();
  const product = products.find((item) => item.id === parseInt(id));

  const [address, setAddress] = useState('');
  const [contact, setContact] = useState('');
  const [customMessage, setCustomMessage] = useState('');

  

  const submitOrder = () => {
    if (address.trim() === '' || contact.trim() === '' || customMessage.trim() === '') {
      alert('Please fill in all the fields before placing the order.');
      return;
    }
    
    console.log('Address:',address);
    console.log('Contact Number:',contact);
    console.log('Custom Message or URL:',customMessage);
    PlaceOrder({
      product_id: product.id,
      product_name: product.name,
      amount: product.price,
      address: address,
      contact: contact,
      text: customMessage

    })
    navigate(`/pay?amount=${product.price}`);
  };


  return (
    <div>
    <Navigation/>
    <br/>
    <br/>
    <br/>
    <div className='order-container'>
      <div >
        <img src={product.imageUrl} alt={product.name} className='product-image' />
        <h3 className='oproduct-name'>{product.name}</h3>
        <p className='oproduct-price'>₹{product.price}</p>
      </div>

      <form className="order-form">
        <label className="form-label" htmlFor="address">
          Address:
        </label>
        <input
          className="form-input"
          type="text"
          id="address"
          name="address"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
          required
        />

        <label className="form-label" htmlFor="contact">
          Contact Number:
        </label>
        <input
          className="form-input"
          type="tel"
          id="contact"
          name="contact"
          value={contact}
          onChange={(e) => setContact(e.target.value)}
          required
        />

        <label className="form-label" htmlFor="custom-message">
          Custom Message or URL:
        </label>
        <textarea
          className="form-input"
          id="custom-message"
          name="custom-message"
          rows="4"
          value={customMessage}
          onChange={(e) => setCustomMessage(e.target.value)}
          required
        ></textarea>
        *to paste the image url refer the guide to 
        <br/>how to generate the image url
        <br/>
        <br/>
        <button className="form-button" type="button" onClick={submitOrder}>
          Place Order
        </button>
      </form>
    </div>
    </div>
  );
};

export default OrderPage;
