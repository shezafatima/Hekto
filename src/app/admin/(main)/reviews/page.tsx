// import React from 'react'
// import { Review } from '../../../../../types/products'
// import { client } from '@/sanity/lib/client'
// import { allReviews } from '@/sanity/lib/queries'
// import { Table , TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
// async function Reviewpage() {
//   const reviews :Review[] = await client.fetch(allReviews)
  
//  return(
//   <div>
//     <h1>

//       Reviews
//     </h1>
//    <Table>
//   <TableCaption>
//     A list of recent products
//   </TableCaption>
//   <TableHeader>
//     <TableRow>
//       <TableHead>
//         Name
//       </TableHead>
//       <TableHead >
//      Review
//       </TableHead>
//       <TableHead className='hidden md:table-cell text-right'>
//    Date
//       </TableHead>
//     </TableRow>
//   </TableHeader>
//   <TableBody>
//     {reviews.map((review)=>(
// <TableRow key={review._id}>
//   <TableCell className='flex items-center gap-2'>
   
//     {review.name}
//   </TableCell>
//   <TableCell className='hidden md:table-cell'>
//     {review.review}
//   </TableCell>
//   <TableCell className='hidden md:table-cell text-right'>
//     {review._createdAt}
//   </TableCell>
//   </TableRow>
//     ))}
//   </TableBody>
// </Table>
  
//   </div>
//  )
 
// }

// export default Reviewpage
import React from 'react'
import { Review } from '../../../../../types/products'
import { client } from '@/sanity/lib/client'
import { allReviews } from '@/sanity/lib/queries'
import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import Image from 'next/image';
import { urlFor } from '@/sanity/lib/image';
import BackButton from '@/app/components/admin/BackButton';

async function Reviewpage() {
  // Ensure your query (allReviews) includes the product reference, e.g.,
  // *[_type=="review"]{ ..., product->{ title, slug } }
  const reviews: Review[] = await client.fetch(allReviews)
  
  return (
    <div>
      <BackButton text='Go Back' link='/admin'/>
      <h1>Reviews</h1>
      <Table>
        <TableCaption>A list of recent reviews and their associated products</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead>Product</TableHead>
            <TableHead>Name</TableHead>
            <TableHead>Review</TableHead>
            <TableHead className='hidden md:table-cell text-right'>Date</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {reviews.map((review) => (
            <TableRow key={review._id}>
              <TableCell>

              {review.product?.image && (

    <div className="flex items-center gap-2">
      <Image src={urlFor(review.product.image).url()} loading='lazy'  width={500} height={500} alt={review.product.name} className="w-12 h-12 object-cover rounded" />
      <span>{review.product.name}</span>
    </div>
              )
 }
              </TableCell>
              <TableCell>{review.name}</TableCell>
              <TableCell >{review.review}</TableCell>
              <TableCell className='hidden md:table-cell text-right'>
  {new Date(review._createdAt).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  })}
</TableCell>

            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  )
}

export default Reviewpage
