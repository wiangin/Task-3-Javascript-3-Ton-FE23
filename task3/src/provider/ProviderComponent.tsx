import ProductContext from "../context/ProductContex";
import { ProductType, ProductContexObject, PropsType } from "../types/dataType";
import { useState,useEffect } from "react";
import '../style/providerCompStyle.css';


export default function ProviderComponent( { children }: PropsType ) {

    const [ productState, setProductState ] = useState< ProductType[] >( [] );

    // This is state for data from UserInputComponent.
    const [ textState, setTextState ] = useState< string >( "" );
    const [ cartList, setCartList ] = useState< ProductType[] >( [] );
    const [ addTocartState, setAddToCartState ] = useState< number >( 0 ); 
   
    const providerValue: ProductContexObject = {
        productState: productState,
        setProductState: setProductState,
        textState: textState,
        setTextState: setTextState,
        cartList: cartList,
        setCartList: setCartList,
        addTocartState: addTocartState,
        setAddToCartState: setAddToCartState
    }

    useEffect( () => {
        const fetchData = async () => {
            let response;

            if ( providerValue.textState == "" ){
                return response = await fetch( "" );
            } else{
                response = await fetch( `https://dummyjson.com/products/search?q=${ providerValue.textState }`);
            }
            
            const result: ProductType = await response.json();

            setProductState( result.products as ProductType[] )
            
        };

        fetchData();

    }, [ textState ] );

    return(
        <ProductContext.Provider value={ providerValue }>
            { children }
        </ProductContext.Provider>
    )
};