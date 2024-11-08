
import '../style/modalStyel.css';
import { useContext } from "react";
import ProductContext from "../context/ProductContex";
import { useNavigate, useParams } from 'react-router-dom';

export default function ModalComponent(  ) {

    const product = useContext( ProductContext );
    console.log( product );
    const params = useParams();
    const navigate = useNavigate();
    
    const getProduct = () => {
        let item;
        product?.productState.filter( ( element ) => {
            return element.id === Number( params.id );
        } )
        .map( element => {
            return item = 
                <div>
                    <h2>{ element.title }</h2>
                    <img src={ element.thumbnail } alt={ element.title } />
                    <p>{ element.description }</p>
                    <p> { element.price } </p>
                </div>
            
        } )
        
        return item;
    };

    const closeModal = () => {
        navigate("/");
    };
    
    return(
        <div className="modal-overlay" >
            {
                params.id && 
                <div className="modal-content">                   
                    { getProduct() }
                    <button className="close-button" onClick={ closeModal }>Close</button>
                </div>
            }
        </div>
        
    )
}