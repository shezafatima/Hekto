
import React from 'react'

import { allProducts } from '@/sanity/lib/queries'
import { client } from '@/sanity/lib/client';

import { Table , TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Product } from '../../../../types/products';
import Image from 'next/image';
import { urlFor } from '@/sanity/lib/image';
import DeleteButton from './DeleteButton';
import EditProductForm from './EditProductForm';


interface ProductTableProps{
  limit?:number;
  title?:string
}


// async function deleteProduct(productId: string) {
//   try {
//     await client.delete(productId); // Delete the product by its ID
//     alert('Product deleted successfully!');
//   } catch (error) {
//     console.error('Error deleting product:', error);
//     alert('Failed to delete product');
//   }
// }

async function ProductTable({limit,title}:ProductTableProps) {
  const products:Product[] = await client.fetch(allProducts)
  const sortedProducts:Product[] = [...products].sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime());
  const filteredProducts= limit ? sortedProducts.slice(0, limit) : sortedProducts;
  return (
    <div className='mt-10'>
<h3 className="text-2xl mb-4 font-semibold">
{title ? title : "Products"}
</h3>
<Table>
  <TableCaption>
    A list of recent products
  </TableCaption>
  <TableHeader>
    <TableRow>
      <TableHead>
        Name
      </TableHead>
      <TableHead className='hidden md:table-cell'>
        Price
      </TableHead>
      <TableHead className='hidden md:table-cell text-right'>
     Category
      </TableHead>
      <TableHead className='right-2'>
       Action
      </TableHead>
    </TableRow>
  </TableHeader>
  <TableBody>
    {filteredProducts.map((product)=>(
<TableRow key={product._id}>
  <TableCell className='flex items-center gap-2'>
    {
      product.image && (
        <Image
        src={urlFor(product.image).url()}
        width={50}
        height={50}
        alt="product image"
        loading='lazy'
        className=' w-12 h-12'
        />
      )
    }
    {product.name}
  </TableCell>
  <TableCell className='hidden md:table-cell'>
    ${product.price}
  </TableCell>
  <TableCell className='hidden md:table-cell text-right'>
    {product.category}
  </TableCell>
  <TableCell className='flex gap-2'>
  
      <DeleteButton productId={product._id}/>
    
     <EditProductForm productId={product._id}/>
   


    {/* <DeleteButton productId={product._id}/> */}
  {/* <button
                  // onClick={() => deleteProduct(product._id)}
                  className="py-2 text-xs rounded-sm px-4 text-white bg-[#FB2E86] hover:bg-transparent hover:border hover:text-[#FB2E86] hover:border-[#FB2E86]"
                >
                  Delete
                </button> */}
                {/* <EditProductForm productId={product._id}/> */}
  </TableCell>
  </TableRow>
    ))}
  </TableBody>
</Table>
    </div>
  )
}

export default ProductTable