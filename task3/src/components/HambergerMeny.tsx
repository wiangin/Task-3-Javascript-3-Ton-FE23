import '../style/homePageStyle.css';
import menyBtn from '../assets/menuBtn.svg';
import closeBtnPic from '../assets/closeBtn.svg';



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
        <nav>
            <div>
                <img id="menu-icon" src = { menyBtn } alt="menu" onClick={menyClick}></img>
                <ul className="sidebar">
                    <li id="close-btn"><img src = {closeBtnPic} alt="close" onClick={closeBtn}></img></li>
                    <li>Home</li>
                    <li>About</li>
                    <li>Contact</li>
                </ul>
            </div>
     
        </nav>
    )
}