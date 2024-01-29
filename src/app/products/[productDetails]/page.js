import React from 'react'

async function getProductDetails(id) {
  // console.log(id)
  const response = await fetch(`https://dummyjson.com/products/${id}`, {
    method:'GET'
  })
  const result = await response.json();
  // console.log(result);
  return result;
}
export default async function page({params}) {
  // console.log(params);
  const {productDetails} = params;
  const details = await getProductDetails(productDetails); 
  return (
    <div>
      <h1> <b>Product Name </b> : {details.title}</h1>
      <p> <b>Product Category </b>: {details.category}</p>
      <p> <b>Product Description </b>: {details.description}</p>
    </div>
  )
}
