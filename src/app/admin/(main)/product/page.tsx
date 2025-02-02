import AddProductForm from '@/app/components/admin/AddProductForm'
import BackButton from '@/app/components/admin/BackButton'
import ProductTable from '@/app/components/admin/ProductTable'
import React from 'react'

function ProductPage() {
  return (
    <>
    <BackButton text='Go Back' link='/admin'/>
    <AddProductForm/>
    <ProductTable/>
    </>
  )
}

export default ProductPage