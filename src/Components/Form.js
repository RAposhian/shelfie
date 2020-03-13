import React, { Component } from 'react';
import axios from 'axios'

export default class Form extends Component {
   constructor(props) {
      super(props);

      this.state = {
         name:'',
         price: 0,
         imgurl: '',
         editProductId: null
      }
      this.handleAdd = this.handleAdd.bind(this);
   }

 
   handleAdd() {
      const {name, price, imgurl} = this.state
      axios.post(`/api/product`, {name, price, imgurl})
      .then(() => {
         this.props.getProducts()
         this.handleCancel()
      })
      .catch(err => console.log(err))
   }

   handleCancel = () => {
      this.setState({name: '', price: 0, imgurl: ''})
   }

   render() {
      return (
         <div>
            <input onChange={e => this.setState({name: e.target.value})} value={this.state.name}/>
            <input type='number' onChange={e=> this.setState({price: e.target.value})} value={this.state.price}/>
            <input onChange={e => this.setState({imgurl: e.target.value})} value={this.state.imgurl} />
            <section>
               <button onClick={this.handleAdd}>Add</button>  
               <button onClick={this.handleCancel}>Cancel</button>
            </section>
         </div>
      )
   }
}