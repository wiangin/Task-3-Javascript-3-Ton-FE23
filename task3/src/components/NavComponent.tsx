import '../style/navStyle.css';
import { Link } from 'react-router-dom';

export default function NavComponent() {

    return(
        <div className='nave-style'>
            <div>
                <p>The Magic Shop</p>
            </div>
            
            <div className='nav-link'>
                <Link to={"/"}>Home</Link>
                <Link to={"/products"}>Search</Link>
                <Link to={'/cartList'}>Cart</Link>
            </div>
            
        </div>
    )
}