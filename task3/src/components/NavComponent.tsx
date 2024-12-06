import '../style/navStyle.css';
import { Link } from 'react-router-dom';
import cardPic from '../assets/shoppingCartWhite.png';
import { HambergerMeny } from './HambergerMeny';

export default function NavComponent() {

    return(
        <div className='nave-style'>
            <div>
                <p>The Magic Shop</p>
            </div>
            
            <HambergerMeny></HambergerMeny>

            <div className='nav-link'>
                <Link to={"/"}>Home</Link>
                <Link to={"/products"}>Search</Link>
                {/* <Link to={'/cartList'}>Card</Link> */}
                <Link to={'/cartList'}>{ <img className='card-pic' src={ cardPic } alt="" /> }</Link>
            </div>
            
        </div>
    )
}