import React, { useContext } from 'react';
import { Link } from 'react-scroll';
import { ProductContext } from '../../context/products';
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
// import SwiperCore from 'swiper'; 
import 'swiper/swiper.scss';
import 'swiper/components/navigation/navigation.scss';
import 'swiper/components/pagination/pagination.scss';
import 'swiper/components/scrollbar/scrollbar.scss';

SwiperCore.use([Navigation, Pagination, Scrollbar, A11y]);

const PromotionProduct = () => {
  const { products } = useContext(ProductContext);
  const productsPromotion = [...products].filter(item => item.promotion === true);

  const fotmatter =  new Intl.NumberFormat('vn', { style: 'currency', currency: 'vnd' });
  
    return (
        <div className="product__promotion hide-on-mobile-tablet">
              <div className="promotion__title">
                <h1 className="promotion__title--h1">KHUYẾN MÃI HOT</h1>
              </div>
              <div className="promotion-kkkkkkkk">

              {productsPromotion.length > 0 && (
                <Swiper
                spaceBetween={50}
                slidesPerView={4}
              >
                {
                  productsPromotion.map(item => {
                    return (
                      <SwiperSlide key={item.id}>
                        <div className="swiper-slide slide">
                        <Link to={`/product/${item.id}`}>
                      <div className="slide__header">
                          <img src={item.image} alt="imagePromotion" />
                      </div>
                      </Link>
                      <div className="slide__body">
                        <Link to={`/product/${item.id}`} className="slide__body--title">
                          <h3>{item.title}</h3>
                        </Link>
                        <p className="slide__body--price">{fotmatter.format(item.price)}</p>
                      </div>
                    </div>
                  </SwiperSlide>
                    );
                  })
                }  
                 </Swiper>
              )}
                </div>
              </div>
    );
};

export default PromotionProduct;