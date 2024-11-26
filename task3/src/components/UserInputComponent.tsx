// Ton FE23.
//Contains an input field and updates the textState.


import { useState } from "react";
import { useContext, useEffect } from "react";
import ProductContext from "../context/ProductContex";
import { useNavigate } from "react-router-dom";
import '../style/inputStyle.css';
import { DropDownType } from "../types/dataType";
import DropDownComponent from "./DropDownComponent";


export default function UserInputComponent() {
    const [ onChangeState, setOnChangeState ] = useState< string >( "" );
    const [ showState, setShowState ] = useState( false );

    const product = useContext( ProductContext );

    const navigate = useNavigate();

   
    const onBtnClick = () => {
      
        product?.setUserInputState( onChangeState );
        setOnChangeState( "" );
        setShowState( false );
        navigate( "/products" );

        
    };

    const onChangeInput = ( e: { target: { value: string } } ) => {
        setOnChangeState( e.target.value );
    }


    // This function is for drop down meny
    useEffect( () => {
        
        if( onChangeState.length >= 3 ) {
            
            setShowState( true );
            const fetchData = async () => {
                const response = await fetch( `https://dummyjson.com/products/search?q=${ onChangeState }&limit=3&select=title,price` );
                const result = await response.json();

                // console.log( result.products );
                product?.setDropDownState( result.products as DropDownType[] )
            }
          
            fetchData();
        }

    }, [ onChangeState ] )


    return(
        <div className="search-style">
                <input type="text" onChange={ onChangeInput } value={ onChangeState } placeholder="Search..."/>
                <button onClick={ onBtnClick }>Search</button>
                {
                    showState && <DropDownComponent></DropDownComponent>
                }
        </div>
    )
};

