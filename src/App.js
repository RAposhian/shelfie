import React, { Component } from 'react';
import './App.css';
import Form from './Components/Form'
import Dashboard from './Components/Dashboard'
import Header from './Components/Header'
import axios from 'axios'

class App extends Component {
  constructor(props){
    super(props)

    this.state = {
      products: [{name: 'food', price: 0, imgurl: 'google.com'}, {name: 'Bread', price: 2.50, imgurl: 'bread.com'}, {name:'steve', price: 40, imgurl: 'hedge.com'}]
    }
  }  
  render(){return (
    <div className="App">
      <Header />
      <Form />
      <Dashboard products={this.state.products}/>
    </div>
  );
}
}

export default App;
