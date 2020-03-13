import React, { Component } from 'react';
import Products from './Products'
import axios from 'axios'


class Dashboard extends Component {
   constructor(props){
      super(props)

      this.state = {
         products: []
      }
   }
  
   componentDidMount = () => {
      axios.get('/api/inventory')
      .then(res => this.setState({products: res.data}))
      .catch(err => console.log(err))
    }
   deleteProducts = (id) => {
      axios.delete(`/api/product/${id}`)
      .then(() => {
         this.componentDidMount()
      })
      .catch(err => console.log(err))
   }

   render(){

      return (
         <div className='dash-container'>{this.state.products.map((e, i) => <Products 
            key={i} 
            products={e} 
            delete={this.deleteProducts}
            editProduct = {this.props.editProduct}
            />)}</div>  
            )
         }
}

export default Dashboard;