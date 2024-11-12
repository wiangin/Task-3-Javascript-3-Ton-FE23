
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
                                    <div>
                                        <h3> Description</h3>
                                        <p>{ element.description }</p>
                                    </div>
                                    <div>
                                        <h3>Price</h3> 
                                        <p>{ element.price }</p>
                                    </div>
                                </div> 
                                ) 
                        } )
                    }
                    <button className="close-button" onClick={ closeModal }>Close</button>
                </div>
            }
        </div> 
    )
};

