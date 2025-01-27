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
  }
  