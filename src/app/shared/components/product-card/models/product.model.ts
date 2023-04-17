interface Product {
    id: number;
    title: string;
    price: number;
    images: string;
    category: {
        name:string,
        id: number
    }
    //images: string[]
}

interface ProductDetails {
    id: number;
    title: string;
    price: number;
    images: string[];
    description: string;
    creationAt: string;
    category: {
        name:string,
        id: number
    }
}

interface Category {
    id: number ;
    name: string;
    image: string;
    creationAt: string;

}

export {
    Product,
    ProductDetails,
    Category
}