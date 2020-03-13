import React, { Component } from 'react';
import axios from 'axios'
import {Link} from 'react-router-dom'

export default class Form extends Component {
   constructor(props) {
      super(props);

      this.state = {
         name:'',
         price: 0,
         imgurl: '',
         editProduct: {},
         toggle: null
      }
      this.handleAdd = this.handleAdd.bind(this);
   }

   componentDidUpdate(prevProps) {
      if(prevProps !== this.props) {
         this.setState({
            name: '',
            price: 0,
            imgurl: '',
            toggle: '/add'
         })
      } 
   }

   componentDidMount = () => {
      if(this.state.toggle !== '/add'){
         this.getSingleProduct()
      }
   }

   getSingleProduct = () => {
      axios.get(`/api/inventory/${this.props.match.params.id}`)
      .then(res => {
         this.setState({ editProduct: res.data})
         this.setState({
            name: res.data[0].name,
            price: res.data[0].price,
            imgurl: res.data[0].imgurl,
            toggle: this.props.match.url
         })
      })
      .catch(err => console.log(err))
      
   }

   editProducts = () => {
      const {name, price, imgurl} = this.state;
      axios.put(`/api/products/${this.props.match.params.id}`, {name: name, price: price, imgurl: imgurl})
      .then(()=> {})
      .catch(err => console.log(err))
   }

 
   handleAdd() {
      const {name, price, imgurl} = this.state
      axios.post(`/api/product`, {name, price, imgurl})
      .then(() => {
         this.handleCancel()
      })
      .catch(err => console.log(err))
   }

   handleCancel = () => {
      this.setState({name: '', price: 0, imgurl: ''})
   }

   render() {
      
      return (
         <section className='form-container'>
            <img src='' alt='product' className='image-add-form'></img>
            <h1>Image URL:</h1>
            <input onChange={e => this.setState({imgurl: e.target.value})} value={this.state.imgurl} />
            <h1>Name:</h1>
            <input onChange={e => this.setState({name: e.target.value})} value={this.state.name}/>
            <h1>Cost:</h1>
            <input type='number' onChange={e=> this.setState({price: e.target.value})} value={this.state.price}/>
            <section className='form-buttons'> 
               
               {
               (this.state.toggle === '/add') ?
               <Link to='/'><button onClick={this.handleAdd}>Add to Inventory</button></Link>
               :
               <Link to='/'><button onClick={this.editProducts}>Save</button></Link>
               }
               <button onClick={this.handleCancel}>Cancel</button>
            </section>
         </section>
      )
   }
}