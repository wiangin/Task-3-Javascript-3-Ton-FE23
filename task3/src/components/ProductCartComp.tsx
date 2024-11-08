import { useContext,useState } from "react";
import ProductContext from "../context/ProductContex";
import '../style/productCart.css';
// import ModalComponent from "./ModalComponent";
import { Link, useLocation, useNavigate } from "react-router-dom";
import ModalComponent from "./ModalComponent";




export default function ProductCartComp() {
    const product = useContext( ProductContext );
    // const [ modalState, setModalState ] = useState< boolean >( false );
    const location = useLocation();
    const navigate = useNavigate();
    const modalOpen = location.pathname === "/moreInfo";
    const [ idState, setIdstate ] = useState( );



    // const openModal = ( event: React.MouseEvent ) => {
    //     event.preventDefault();
    //     setModalState( true );
    // };

    const closeModal = () => {
        navigate("/");
    };

    const onClickId = (  ) => {
        console.log();
        
    };

    return(
        <div>
            <ul>
                { product?.productState.map( ( element ) => {
                    return ( 
                        <div className="product-cart" key={ element.id }>
                            <li> 
                                <h2>{element.title}</h2>
                                <img src={element.thumbnail}  alt="" />
                                <Link to="/moreInfo" id="{ element.id }" onClick={ onClickId }>More Info</Link>
                                
                                <ModalComponent onClose={ closeModal } show={ modalOpen } onId={ element.id }/>
                            </li>

                        </div>
                        
                    )
                } ) }
            </ul>
        </div>
    
    )
};