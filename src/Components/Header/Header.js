import React from 'react';
import { Link } from 'react-router-dom'

import { MdShoppingBasket } from 'react-icons/md'

import { connect } from 'react-redux'

import Logo from '../../assets/images/logo.svg'

import { Container, Cart } from './styles';

function Header({cart}) {
  return (
    <Container>
      <Link to='/'>
        <img src={Logo} alt='RocketShoes' />
      </Link>

      <Cart to='/cart'>
        <div>
          <strong>Meu Carrinho</strong>
          <span>{cart} itens</span>
        </div>
        <MdShoppingBasket size={36}  color='#fff' />
      </Cart>
    </Container>
  );
}

export default connect( state => ({
  cart: state.cart.length,
}))(Header)