import '../style/homePageStyle.css';
import menyBtn from '../assets/menuBtn.svg';
import closeBtnPic from '../assets/closeBtn.svg';
import { Link } from 'react-router-dom';
import cardPic from '../assets/shoppingCartWhite.png';



export function HambergerMeny() {

    const closeBtn = () => {
        const sidebar = document.querySelector(".sidebar") as HTMLUListElement;
        sidebar.classList.remove("show");
    };

    const menyClick = () => {
        const sidebar = document.querySelector(".sidebar")as HTMLUListElement;
        sidebar.classList.add("show");
        console.log(sidebar);
        
    };
    return(
        <>
            <div className='nav-hamburger'>
                <img id="menu-icon" src = { menyBtn } alt="menu" onClick={menyClick}></img>
            </div>

                <div className='sidebar'>
                    <div id="close-btn"><img src = {closeBtnPic} alt="close" onClick={closeBtn}></img></div>
                    <div className='sidebar-link'>
                        <Link to={"/"}>Home</Link>
                        <Link to={"/products"}>Search</Link>
                        {/* <Link to={'/cartList'}>Card</Link> */}
                        <Link to={'/cartList'}>{ <img className='card-pic' src={ cardPic } alt="" /> }</Link>
                    </div>
               
                </div>      
        </>   
    )
}