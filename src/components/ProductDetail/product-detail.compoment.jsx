import React, { useContext, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { ProductContext } from '../../context/products';
import "./product-detail.styles.scss";
import "./product-detail.-responsive.styles.scss";
import cpuTower from '../../assets/cpu-tower.png';
import Memorys from '../../assets/memory.png';
import processor from '../../assets/processor.png';
import smartphone from '../../assets/smartphone.png';
import ProductList from '../ProductList/product-list.component';
import { addItem } from '../../redux/cart/cart.actions';
import { connect } from 'react-redux';

const ProductDetail = ({ addItem }) => {

    const { id } = useParams();
    const { products } = useContext(ProductContext);
    const productDetail = products.find(item => item.id === parseInt(id)) || {};
    const { title, price, ram, screen, cpu, memory, image, category_id } = productDetail;
    const relatedProducts = products.filter((item ) => item.category_id === category_id && item.id !== parseInt(id)).slice(0, 4);

    const fotmatter =  new Intl.NumberFormat('vn', { style: 'currency', currency: 'vnd' });
    const priceFotmat = fotmatter.format(price);

    useEffect(() => {
      window.scrollTo({
        top: 0,
        left: 0,
      });
    }, [id]);

    return (
        <div className="group_details">
        <div className="main_detail">
          <div className="container">
            <div className="detail-title">
              <h3>{title}</h3>
            </div>
            <div className="detail_group">
              <div className="detail-left">
                <img src={image} alt="img" />
              </div>
              <div className="detail-right">
                <p className="detail-right__price">{priceFotmat}</p>
                <div className="group-config">
                  <span className="group-config__cpu para">
                    <img className="icon__mobile" src={processor} alt="processor" />
                    <span>{cpu}</span>
                  </span>
                  <span className="group-config__mobile para">
                    <img className="icon__mobile" src={smartphone} alt="processor" />
                    <span>{screen}"</span>
                  </span>
                  <span className="group-config__ram para">
                    <img className="icon__mobile" src={Memorys} alt="ram" />
                    <span>{ram}</span>
                  </span>
                  <span className="group-config__pc para">
                    <img className="icon__mobile" src={cpuTower} alt="cpu" />
                    <span>{memory} GB</span>
                  </span>
                </div>
                <div className="detail-button">
                  <button onClick={() => addItem(productDetail) }>
                    MUA NGAY
                    <p>Giao hàng trong 1 giờ hoặc nhận ngay tại shop</p>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="related-products">
          <div className="container">
            <ProductList products={relatedProducts} title="SẢN PHẨM CÓ LIÊN QUAN"/>
          </div>
        </div>
      </div>
    );
};

const mapDispatchToProps = (dispatch) => {
  return {
    addItem: item => dispatch(addItem(item))
  }
}

export default connect(null, mapDispatchToProps)(ProductDetail);