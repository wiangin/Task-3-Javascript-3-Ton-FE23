// Ton FE23.
//Contains an input field and updates the textState.


import { useState } from "react";
import { useContext } from "react";
import ProductContext from "../context/ProductContex";
import { useNavigate } from "react-router-dom";
import '../style/inputStyle.css';


export default function UserInputComponent() {
    const [ onChangeState, setOnChangeState ] = useState< string >( "" );
    const product = useContext( ProductContext );
    const navigate = useNavigate();

    const onBtnClick = () => {
      
        product?.setUserInputState( onChangeState );
        setOnChangeState( "" );
        navigate( "/products" );
        
    };

    const onChangeInput = ( e: { target: { value: string } } ) => {
        setOnChangeState( e.target.value ) 
    }
    return(
        <div className="search-style">
                <input type="text" onChange={ onChangeInput } value={ onChangeState } placeholder="Search..."/>
                <button onClick={ onBtnClick }>Search</button>
        </div>
    )
};

