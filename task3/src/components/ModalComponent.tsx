//Ton FE23
//Popup modal when user has click "More Info LINK"


import '../style/modalStyel.css';
import { useContext } from "react";
import ProductContext from "../context/ProductContex";
import { useNavigate, useParams } from 'react-router-dom';

export default function ModalComponent( ) {

    const product = useContext( ProductContext );
    const params = useParams();
    const navigate = useNavigate();
    
    const closeModal = () => {
        navigate("/products");
    };
    
    return(
        <div className="modal-overlay" >
            {
                params.id && 
                <div className="modal-content">                   
                    { 
                        product?.productState.filter( ( element ) => {
                            return element.id === Number( params.id );
                        } )
                        .map( element => {
                            return (
                                <div key={ element.id }>
                                    <h2>{ element.title }</h2>
                                    <img src={ element.thumbnail } alt={ element.title } />
                                    <div className='description-container'>
                                        <h3> Description</h3>
                                        <p>{ element.description }</p>
                                    </div>
                                    <div className='price-container'>
                                        <h3>Price</h3> 
                                        <p> { element.price } $</p>
                                    </div>
                                </div> 
                                ) 
                        } )
                    }
                    <button className="close-button" onClick={ closeModal }>&#x2715;</button>
                </div>
            }
        </div> 
    )
};

