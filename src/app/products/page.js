import React from 'react'
import Products from '../components/Products';
const allProducts = async () => {
    const response = await fetch('https://dummyjson.com/products',
        {
            method: 'GET'
        })
        const result = await response.json();
        if (result && result.products && result.products.length) {
                return result.products;
        }
}
export default async function page() {
    let productsData = await allProducts();
  return (
   <Products getAllProducts={productsData}/>
  )
}
