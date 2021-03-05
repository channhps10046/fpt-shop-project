import React from 'react';
import Brand from '../../components/Brand/brand.component';
import Slider from '../Slider/slider.componet';
import PromotionProduct from '../../components/PromotionProduct/promotion-product.component';
import './home.styles.scss';
import "./home-responsive.styles.scss";
import CategoryProduct from '../../components/CategoryProduct/category-product.component';
import BackImageFixed from '../BackImageFixed/back-image.component';
import Timer from '../../components/Timer/timer.component';

const Home = () => {
    return (
        <React.Fragment>
          <BackImageFixed/>

        <div className="main">
          <div className="container">
            <div className="img__center hide-on-mobile">
              <img src="img/DemNguoc2021.webp" alt="Timer" />
            </div>
            <Timer/>
            <Slider/>
            <Brand/>
            <PromotionProduct/>   
            <CategoryProduct title="ĐIỆN THOẠI NỔI BẬT" category={1}/>
            <CategoryProduct title="MÁY TÍNH NỔI BẬT" category={2}/>
          </div>
        </div>
        </React.Fragment>
    );
};

export default Home;