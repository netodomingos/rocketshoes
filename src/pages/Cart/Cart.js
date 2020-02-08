import React from 'react';

import { Container, ProductTable, Total } from './styled';

import { MdRemoveCircleOutline,  MdAddCircleOutline, MdDelete } from 'react-icons/md'

export default function Cart() {
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
          <tr>
            <td>
            <img 
              src='https://static.netshoes.com.br/produtos/tenis-nike-revolution-5-masculino/26/HZM-1731-026/HZM-1731-026_zoom1.jpg' 
              alt='Têniss'
            />
            </td>
            <td>
              <strong>Tênis muito massa</strong>
              <span>R$ 129,90</span>
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
