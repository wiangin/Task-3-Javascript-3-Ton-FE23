//Ton FE23
//This provider component manages states and functions for fetching data from the API at https://dummyjson.com.


import ProductContext from "../context/ProductContex";
import { ProductType, ProductContexObject, PropsType } from "../types/dataType";
import { useState, useEffect } from "react";
import '../style/providerCompStyle.css';


export default function ProviderComponent( { children }: PropsType ) {

    const [ productState, setProductState ] = useState< ProductType[] >( [] );
    const [ userInputState, setUserInputState ] = useState< string >( "" );
    const [ cartList, setCartList ] = useState< ProductType[] >( [] );

   
    const providerValue: ProductContexObject = {
        productState: productState,
        setProductState: setProductState,
        userInputState: userInputState,
        setUserInputState: setUserInputState,
        cartList: cartList,
        setCartList: setCartList,
    }

    useEffect( () => {
        const fetchData = async () => {
            let response;

            if ( providerValue.userInputState == "" ){
                response = await fetch( "https://dummyjson.com/products?limit=12" );
            } else{
                response = await fetch( `https://dummyjson.com/products/search?q=${ providerValue.userInputState }`);
            }
            
            const result: ProductType = await response.json();

            setProductState( result.products as ProductType[] )
            
        };

        fetchData();

    }, [ userInputState ] );

    return(
        <ProductContext.Provider value={ providerValue }>
            { children }
        </ProductContext.Provider>
    )
};