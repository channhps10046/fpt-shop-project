import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import cpuTower from '../../assets/cpu-tower.png';
import Memorys from '../../assets/memory.png';
import processor from '../../assets/processor.png';
import {  addItem } from '../../redux/cart/cart.actions';

const Product = ({ item, addItem }) => {
  const { id, title, price, ram, screen, cpu, memory, image } = item;
  const fotmatter =  new Intl.NumberFormat('vn', { style: 'currency', currency: 'vnd' });
  const priceFotmat = fotmatter.format(price);


    return (
      <div className="cdt-product">
        <Link className="cdt-link" to={`/product/${id}`}>
            <div className="cdt-product__img">
              <img src={image} alt="iphone" />
            </div>
            </Link>
            <div className="cdt-product__info">
              <span className="cdt-product__info--title cdt">{title}</span>
              <span className="cdt-product__info--price cdt">{priceFotmat}</span>
              <div className="group-config">
                <span className="group-config__cpu para">
                  <img className="icon__mobile" src={processor} alt="processor" />
                 {cpu}
                </span>
                <span className="group-config__mobile para">
                  <i className="fa fa-mobile" aria-hidden="true" />
                  {screen}"
                </span>
                <span className="group-config__ram para">
                  <img className="icon__mobile" src={Memorys} alt="ram" />
                  {ram} GB
                </span>
                <span className="group-config__pc para">
                  <img className="icon__mobile" src={cpuTower} alt="cpu" />
                  {memory} GB
                </span>
              </div>
             
            </div>
            <div className="cdt-btn__group">
                <button className="cdt-btn__group--button" onClick={() => addItem(item)}>mua ngay</button>
              </div>
          </div>
    );
};

const mapDispatchToProps = (dispatch) => {
  return {
    addItem: item => dispatch(addItem(item))
  }
}

export default connect(null, mapDispatchToProps)(Product);