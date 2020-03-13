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
      products: [],
      selectedProduct: null
    }
  }  

  componentDidMount = () => {
    axios.get('/api/inventory')
    .then(res => this.setState({products: res.data}))
    .catch(err => console.log(err))
    
  }

  render(){return (
    <div className="App">
      <Header />
      <Form getProducts={this.componentDidMount} selectedProduct={this.state.selectedProduct}/>
      <Dashboard products={this.state.products} getProducts={this.componentDidMount}/>
    </div>
  );
}
}

export default App;
