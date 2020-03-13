import React from 'react';
import Products from './Products'
import axios from 'axios'


const Dashboard = props => {
   const {products} = props

   const deleteProducts = (id) => {
      axios.delete(`/api/product/${id}`)
      .then(() => {
         props.getProducts()
      })
      .catch(err => console.log(err))
   }

   return (
    <div>{products.map((e, i) => <Products key={i} products={e} delete={deleteProducts}/>)}</div>  
   )
}

export default Dashboard;