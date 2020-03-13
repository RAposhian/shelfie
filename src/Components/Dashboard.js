import React from 'react';
import Products from './Products'

const Dashboard = props => {
   const {products} = props
   return (
    <div>{products.map((e, i) => <Products key={i} products={e}/>)}</div>  
   )
}

export default Dashboard;