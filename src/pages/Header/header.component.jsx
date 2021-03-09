import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import "./header.styles.scss";
import "./header-responsive.styles.scss";
import { selectCartItemCount } from '../../redux/cart/cart.selectors';
import { connect } from 'react-redux';
import Logo from '../../assets/logo-ft.png';
// import { ProductContext } from '../../context/products';

const Header = ({ itemCount }) => {

  const [search, setSearch] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    window.location.href = `${window.location.origin}/products?s=${search}`;

  }

  const handleChange = (e) => {
    const { value } = e.target;
    setSearch(value);
  }

    return (
        <div className="header">
        <div className="container">
          <div className="header__group">
            <span className="logo">
              <Link to="/"><img className="logo__image" src={Logo} alt="Logo" /></Link>
              <h2 className="logo__title">Shop<span className="logo__title--doumain">.com.vn</span></h2>
            </span>
            <form onSubmit={handleSubmit}>
              <div className="form__search">
                <input onChange={handleChange} value={search} type="text" className="form__search--control" placeholder="Enter the name of the phone, computer, accessories ... to search" />
                <button type="submit" className="form__search--button"><i className="fa fa-search" aria-hidden="true" /></button>
              </div>
            </form>
            <Link to="/cart" className="cart-link">
            <div className="cart">
              <i className="fa fa-shopping-cart" aria-hidden="true" />
             <h4 className="cart__title">Giỏ hàng</h4>
             <span className="cart__count">{itemCount}</span>
            </div>
            </Link>
          </div>
        </div>
      </div>
    );
};

const mapStateToProps = (state) => {
  return {
    itemCount: selectCartItemCount(state)
  }
}

export default connect(mapStateToProps)(Header);