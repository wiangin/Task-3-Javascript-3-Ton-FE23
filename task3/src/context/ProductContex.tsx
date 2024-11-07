import { createContext } from "react";
import { ProductContexObject } from "../types/dataType";


// const defaultValue: ProductType = {
//     title: "",
//     thumbnail: "",
//     description: "",
//     products: []
// };

const ProductContext = createContext< ProductContexObject | undefined >( undefined );

export default ProductContext;