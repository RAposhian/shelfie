import React from 'react'

const Products = props => {
   const {name, price, imgurl} = props.products;
   return (
   <section>
      <h1>{name}</h1>
      <h1>{price}</h1>
      <img src={imgurl} alt={name}/>
   </section>
 )
}

export default Products