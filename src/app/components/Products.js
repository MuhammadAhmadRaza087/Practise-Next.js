import Link from 'next/link'
import React from 'react'


export default async function Products({ getAllProducts }) {
    return (
        getAllProducts.map((product)=>{
            return  <Link href={`/products/${product.id}`}>
            <li key={product.id}>{product.id}, {product.title}</li>
            </Link>
        })
    
  )
}
