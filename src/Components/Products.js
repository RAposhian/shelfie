import React from 'react'
import {Link} from 'react-router-dom'

const Products = props => {
   const {id, name, price, imgurl} = props.products;
   return (
   <section>
      <h1>{name}</h1>
      <h1>{price}</h1>
      <img src={imgurl} alt={name}/>
      <section>
         <button onClick={()=> props.delete(id)}>Delete</button>
         <Link to={`/edit/${id}`}><button>Edit</button></Link>
      </section>
   </section>
 )
}

export default Products