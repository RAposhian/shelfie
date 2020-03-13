import React, { Component } from 'react';

export default class Form extends Component {
   constructor(props) {
      super(props);

      this.state = {
         name:'',
         price: 0,
         imgurl: ''
      }
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
               {/* <button onClick={}>Add</button> need to add the post to the database here*/} 
               <button onClick={this.handleCancel}>Cancel</button>
            </section>
         </div>
      )
   }
}