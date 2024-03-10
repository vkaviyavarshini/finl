import { Link } from 'react-router-dom';
import '../css/leftsidebar.css'; 

const LeftSidebar = () => {
  return (
    <div className='leftsidebar'>
      <br/>
        <h2> CATEGORY </h2>
        <br/>
        <p className='ele'><Link to="/gifts">Gifts</Link></p>
        <p className='ele'><Link to="/cakes">Photo Frame</Link></p>
    </div>
  );
};

export default LeftSidebar;
  