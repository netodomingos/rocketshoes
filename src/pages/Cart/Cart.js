import React from 'react';

import { Container, ProductTable, Total } from './styled';

import { connect } from 'react-redux'

import { MdRemoveCircleOutline,  MdAddCircleOutline, MdDelete } from 'react-icons/md'

 function Cart({ cart }) {
  return (
    <Container>
      <ProductTable>
        <thead>
          <tr>
            <th/>
            <th>PRODUTO</th>
            <th>QTD</th>
            <th>SUBTOTAL</th>
            <th/>
          </tr>
        </thead>
        <tbody>
          { cart.map( product => (
            <tr>
            <td>
              <img 
                src={product.image} 
                alt={product.title}
              />
            </td>
            <td>
              <strong>{product.title}</strong>
              <span>{product.priceFormatted}</span>
            </td>
            <td>
              <div>
                <button type='button'>
                  <MdRemoveCircleOutline size={20} color='#7159c1'/>
                </button>
                <input type='number' readOnly value={3} />
                <button type='button'>
                  <MdAddCircleOutline size={20} color='#7159c1'/>
                </button>
              </div>
            </td>
            <td>
              <strong>R$ 259,80</strong>
            </td>
            <td>
              <button type='button'>
                <MdDelete size={20} color='#7159c1'/>
              </button>
            </td>
          </tr>
          )) }
        </tbody>
      </ProductTable>
      <footer>
        <button type='button'>Finalizar Pedido</button>

        <Total>
          <span>Total</span>
          <strong>R$ 1200,00</strong>
        </Total>
      </footer>
    </Container>
  );

}

const mapStateToProps = state => ({
  cart: state.cart,
});

export default connect(mapStateToProps)(Cart)
