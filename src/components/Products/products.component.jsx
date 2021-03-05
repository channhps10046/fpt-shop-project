import React, { useContext, useEffect } from 'react';
import { ProductContext } from '../../context/products';
import Loading from '../../pages/Loading/loading.component';
import NoResult from '../../pages/NoResultPage/no-result-page.component';
import Slider from '../../pages/Slider/slider.componet';
import Filter from '../Filter/filter-products.component';
import ProductList from '../ProductList/product-list.component';
import "./products.styles.scss";
import "./products-responsive.styles.scss";

const Products = () => {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
    });
  }, []);

  const { products, loading } = useContext(ProductContext);
    return (
        <div className="group-list-product">
        <div className="container">
          <Slider/>

          <div className="main_product">
            <div className="row">
              <Filter/>
                {/* <NoResult/> */}
                {
                  loading ? (<Loading/>) : (!products.length) ? <NoResult/> : (<div className="col-9">
                    <ProductList title="TỔNG HỢP SẢN PHẨM" products={products}/>
                  </div>)
                }
              {/* <div className="col-9">
                {
                  loading ? (<Loading/>) : (<ProductList title="TỔNG HỢP SẢN PHẨM" products={products}/>)
                }
              </div> */}
            </div>
          </div>
        </div>
      </div>
    );
};

export default Products;