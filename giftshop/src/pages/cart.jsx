import { useDispatch, useSelector } from 'react-redux';
import { removeFromCart } from '../redux/action';
import { MdDelete } from 'react-icons/md';
import Navigation from './navigationBar';
import '../css/cart.css';
import LeftSidebar from './leftsidebar';
import { Link } from 'react-router-dom';
//import { useNavigate } from 'react-router-dom';

const CartPage = () => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.items);
  

  return (
    <div>
      <Navigation />
      <LeftSidebar />
      <h1 className='cartpage-title'>Shopping Cart</h1>
      <br/><br/>
      <div className='clearfix'>
        {products.map((product) => (
          <div className='product-containerrr' key={product.id}>
            <img src={product.imageUrl} alt={product.name} className='product-image' />
            <h3 className='product-name'>{product.name}</h3>
            <p className='product-price'>₹{product.price}</p>
            <div className='button-container'>
            <button className='buybutton'><Link to={`/order/${product.id}`}>Buy Now</Link></button>
            <button className='action-icons' onClick={() => dispatch(removeFromCart(product.id))}>
              <MdDelete />
            </button>
            </div>
          </div>
        ))}
      </div>

      
    </div>
  );
};

export default CartPage;
