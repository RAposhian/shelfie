import React from 'react'
import {Link} from 'react-router-dom'

const Products = props => {
   const {id, name, price, imgurl} = props.products;
   return (
   <section className='product-container'>
      <img className='product-image' src={imgurl} alt={name}/>
      <div className='product-text'>
      <h1>{name}</h1>
      <h1>${price}</h1>
      </div>
      <section className='button-container'>
         <button onClick={()=> props.delete(id)}>Delete</button>
         <Link to={`/edit/${id}`}><button>Edit</button></Link>
      </section>
   </section>
 )
}

export default Products