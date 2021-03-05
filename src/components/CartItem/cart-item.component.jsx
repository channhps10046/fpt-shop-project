import React from 'react';
import { connect } from 'react-redux';
import { addItem, clearItemFromCart, removeItem } from '../../redux/cart/cart.actions';

const CartItem = ({item, addItem, removeItem, clearItem }) => {
  const { image, title, price, quantity } = item;
  const fotmatter =  new Intl.NumberFormat('vn', { style: 'currency', currency: 'vnd' });
    return (
        <React.Fragment>
            <tr className="tr-mobile">
                  <td>
                    <div className="img_cart">
                      <img src={image} alt="imageCart" />
                    </div>
                  </td>
                  <td>
                    <h3>{title}</h3>
                  </td>
                  <td style={{width: '155px'}}>
                    <h4>{fotmatter.format(price)}</h4>
                  </td>
                  <td>
                    <div className="amount_group">
                      <button onClick={() => removeItem(item)}>-</button>
                      <div className="amount">{quantity}</div>
                      <button onClick={() => addItem(item) }>+</button>
                    </div>
                  </td>
                  <td className="delete_cart">
                    <i onClick={() => clearItem(item)} className="fa fa-times" aria-hidden="true" />
                  </td>
                </tr>
        </React.Fragment>
    );
};

const mapDispatchToProps = (dispatch) => {
  return {
    addItem: item =>  dispatch(addItem(item)), 
    removeItem: item => dispatch(removeItem(item)),
    clearItem: item => dispatch(clearItemFromCart(item))
  }
}

export default connect(null, mapDispatchToProps)(CartItem);