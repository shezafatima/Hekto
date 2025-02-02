export interface Product{
    _id:string;
    name:string;
    _type:"product";
    image?:{asset:{
        _ref:string;
        _type:"image";
    }}
    price:number;
    description?:string;
    category:string;
    isFeaturedProduct?:boolean
    createdAt:string
    stock?:number
    review?: Array<Review>;
}
export interface Review{
    name: string;
    review: string;
    _createdAt: string;
    _id: string;
    product?: Product;
  }
 export  interface Order {
    _id: string;
    email: string;
    customerName:string;
    orderDate: string;
    totalPrice:number;// or Date, depending on how you handle dates
    status: string;
    products: {
      _key: string;
      product: {
        _id: string;
        name: string;
        price: number;
        description: string;
        // Add more fields if needed!
      };
    }[];}