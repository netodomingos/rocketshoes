import React, { Component } from 'react';

import { ProductList } from './styles';

import { MdAddShoppingCart } from 'react-icons/md'

import Api from '../../services/Api'

import { FormatPrice } from '../../util/format' 

export default class Home extends Component {
  state = {
    Products: []
  }

  async componentDidMount(){
    const response = await Api.get('products')

    const data = response.data.map( product => ({
      ...product,
      priceFormatted: FormatPrice(product.price)
    }))

    this.setState({ Products: data }) 
  }

  render(){

    const { Products } = this.state

    return (
      <ProductList>
        { Products.map( product => (
          <li key={product.id}>
          <img 
            src={product.image} 
            alt='Têniss'
          />
          <strong>{product.title}</strong>
          <span>{product.priceFormatted}</span>
  
          <button type='button'>
            <div>
              <MdAddShoppingCart size={16} color='#fff'/> 3
            </div>
  
            <span>Adicionar ao Carrinho</span>
          </button>
  
        </li>
        )) }
      </ProductList>
    );
  }
}
