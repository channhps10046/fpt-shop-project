import React, { useContext, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { ProductContext } from '../../context/products';
import Slider from '../../pages/Slider/slider.componet';
import Filter from '../Filter/filter-products.component';
import ProductList from '../ProductList/product-list.component';
import NoResult from '../../pages/NoResultPage/no-result-page.component';

const CategoryProductsNavigation = () => {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
    });
  }, []);
    const { products } = useContext(ProductContext);
    const { id } = useParams();
    const cateNavigationProducts = products.filter(item => parseInt(item.category_id) === parseInt(id)); 
    // console.log({products});
    return (
        <div className="group-list-product">
        <div className="container">

          <Slider/>

          <div className="main_product">
            <div className="row">
              <Filter/>
              {
                (!cateNavigationProducts.length) ? (<NoResult/>) : ( <div className="col-9">
                  <ProductList title="TỔNG HỢP SẢN PHẨM" products={cateNavigationProducts}/>
               </div>)
              }
             
            </div>
          </div>
        </div>
      </div>
    );
};

export default CategoryProductsNavigation;