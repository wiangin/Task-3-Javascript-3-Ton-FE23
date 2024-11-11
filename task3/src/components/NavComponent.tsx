import '../style/navStyle.css';
import { Link } from 'react-router-dom';

export default function NavComponent() {

    return(
        <div className='nave-style'>
            <p>My shop</p>
            <Link to={"/"}>Home</Link>
            <Link to={'/cartList'}>Cart</Link>
        </div>
    )
}