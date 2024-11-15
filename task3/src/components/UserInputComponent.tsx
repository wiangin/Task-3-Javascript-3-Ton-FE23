// Ton FE23.
//Contains input field and update text state.

import { useState } from "react";
import { useContext } from "react";
import ProductContext from "../context/ProductContex";
import { useNavigate } from "react-router-dom";
import '../style/inputStyle.css';


export default function UserInputComponent() {
    const [ inputState, setInputState ] = useState< string >( "" );
    const product = useContext( ProductContext );
    const navigate = useNavigate();

    const onBtnClick = () => {
      
        product?.setTextState( inputState );
        setInputState( "" );
        navigate( "/products" );
        
    };

    const onChangeInput = ( e: { target: { value: string } } ) => {
        setInputState( e.target.value ) 
    }
    return(
        <div className="search-style">
                <input type="text" onChange={ onChangeInput } value={ inputState } placeholder="Search..."/>
                <button onClick={ onBtnClick }>Search</button>
        </div>
    )
};

