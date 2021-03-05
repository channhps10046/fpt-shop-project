import React, { useState } from 'react';
import { connect } from 'react-redux';
import CartItem from '../CartItem/cart-item.component';
import "./cart.styles.scss";
import "./cart-responsive.styles.scss";
import { createStructuredSelector } from 'reselect';
import { selectCartItems, selectCartTotal } from '../../redux/cart/cart.selectors';
import validate from './validateInfor';
import registerUser from '../../strapi/registerUser';
import swal from 'sweetalert';
import CartNull from '../CartNoResult/cart-null.component';
import StripeCheckoutButton from '../stripe-button/strip-button.component';
// import { useHistory } from 'react-router-dom';

const Cart = ({ cartItems, total }) => {
  // const history = useHistory();
  const fotmatter =  new Intl.NumberFormat('vn', { style: 'currency', currency: 'vnd' });
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [username, setUsername] = useState('');
  const [errors, setErrors] = useState({});
  const [toggle, setToggle] = useState(true);

  const handleSubmit =  async (e) => {
    e.preventDefault();
    setErrors(validate(username, phoneNumber, email));
    const passRandom = Math.floor(Math.random() * 1000000000000);
    
    let response;
      
    response = await registerUser({ email, phoneNumber, username, passRandom });

   
    if(response){
      const {user: {username}} = response.data;
      swal({
        title: "Good job!",
        text: `chúc mừng ${username} đã nhập thông tin thành công`,
        icon: "success",
        button: "Ok",
      });
    } 

    setToggle(false);

    return response;
    

  }


  // const handleToggle = () => {
  //   setToggle(!toggle);
  // }

  return (
    <React.Fragment>
      {
      (!cartItems.length) ? <CartNull></CartNull> : 
      (<div className="cart_group">
      <div className="container">
        <h1 className="cart__title">GIỎ HÀNG CỦA BẠN</h1>
        <div className="cart">
          <table>
            <tbody>
              {
                cartItems.map(cartItem => {
                  return ( <CartItem key={cartItem.id} item={cartItem}/> )
                })
              }
            </tbody>
          </table>
          <div className="cart_total">
            <div className="cart_total__price">
              {/* <h4 className="cart_total__price--total"><span className="ghr-1">Tạm tính:</span><span className="cart_total__price--number">23.990.000 đ</span></h4> */}
              {/* <h4 className="cart_total__price--total"><span className="ghr-2">khuyến mãi:</span><span className="cart_total__price--number-light">- 8.000.000 đ</span></h4> */}
              <h4 className="cart_total__price--total"><span className="ghr-1">Tổng tiền:</span><span className="cart_total__price--number">{fotmatter.format(total)}</span></h4>
            </div>
          </div>

          <h1 className="cart__info">Thông tin khách hàng</h1>
          <div className="customer_infomation">
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                  <label className="form-group__label" htmlFor="name">Họ và tên</label>
                  <div className="group-input">
                    <input onChange={e => setUsername(e.target.value)} className="group-input__input" type="text" name="username" value={username} placeholder="Nhập họ và tên"/>
                    <div className="group-error-text">
                    {errors.username && <p className="text_eror">{errors.username}</p>}
                    </div>
                  </div>
              </div>

              <div className="form-group">
                  <label className="form-group__label" htmlFor="name">Số điện thoại</label>
                  <div className="group-input">
                    <input onChange={e => setPhoneNumber(e.target.value)} className="group-input__input" type="text" name="phoneNumber" value={phoneNumber} placeholder="Nhập số điện thoại"/>
                    <div className="group-error-text">
                    {errors.phoneNumber && <p className="text_eror">{errors.phoneNumber}</p>}
                    </div>
                  </div>
              </div>

              <div className="form-group">
                  <label className="form-group__label" htmlFor="name">Email</label>
                  <div className="group-input">
                    <input onChange={e => setEmail(e.target.value)} className="group-input__input" type="text" name="email" value={email} placeholder="Nhập họ và tên nhập email"/>
                    <div className="group-error-text">
                    {errors.email && <p className="text_eror">{errors.email}</p>}
                    </div>
                  </div>
              </div>
              <div className="cart-paypal">
                {
                  (toggle === true) ? (<button type="submit" className="cart-paypal__button">
                <div className="group-title-paypal">
                  <span className="ftitle"> đặt hàng luôn</span>
                  <span className="ltitle">FPT sẽ gọi cho quý khách</span>
                </div>
              </button>) : (<StripeCheckoutButton price={total}/>)
                }
          </div>
            </form>
          </div>
        </div>
      </div>
    </div>)
      }
    </React.Fragment>
  );
};

const mapStateToProps = () => createStructuredSelector({
  cartItems: selectCartItems,
  total: selectCartTotal,
});

export default connect(mapStateToProps)(Cart);