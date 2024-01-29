import React from 'react'


export default async function Products({ getAllProducts }) {
    return (
        getAllProducts.map((product)=>{
            return <li key={product.id}>{product.id}, {product.title}</li>
        })
    
  )
}
