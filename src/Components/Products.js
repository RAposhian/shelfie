import React from 'react'

const Products = props => {
   const {id, name, price, imgurl} = props.products;
   return (
   <section>
      <h1>{name}</h1>
      <h1>{price}</h1>
      <img src={imgurl} alt={name}/>
      <section>
         <button onClick={()=> props.delete(id)}>Delete</button>
         <button>Edit</button>
      </section>
   </section>
 )
}

export default Products