import { ReactNode } from "react";

export type ProductType = {
    products: ProductType[],
    title: string,
    thumbnail: string,
    description: string,
    brand?: string,
    category?: "smartphones"|"laptops"|"fragrances"| "skincare"|"groceries"|"home-decoration"|"furniture"|"tops"|"womens-dresses"|"womens-shoes"|"mens-shirts"|"mens-shoes"|"mens-watches"|"womens-watches"|"womens-bags"|"womens-jewellery"|"sunglasses"|"automotive"|"motorcycle"|"lighting",
    price?: number,
    rating?: number,
    stock?: number,
    discountPercentage?: number,
    id: number
};

export interface ProductContexObject {
    productState: ProductType[],
    setProductState: React.Dispatch<React.SetStateAction<ProductType[]>>
    textState: string,
    setTextState: React.Dispatch<React.SetStateAction<string>>
    cartList: ProductType[],
    setCartList: React.Dispatch<React.SetStateAction<ProductType[]>>

};

export interface PropsType {
    children : ReactNode
};
