import React, { useContext, useEffect } from 'react';
import "./brand-products.styles.scss";
import { useParams } from 'react-router-dom';
import { ProductContext } from '../../context/products';
import Slider from '../../pages/Slider/slider.componet';
import ProductList from '../ProductList/product-list.component';

const BrandProducts = () => {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
    });
  }, []);

  const { products } = useContext(ProductContext);
  const { id } = useParams();
  const brandProducts = products.filter(item => parseInt(item.brand_id) ===  parseInt(id));

    return (
        <div className="group-list-product">
        <div className="container">

          <Slider/>

          <div className="main_product">
            <div className="row">
              <div className="col-3">
                <h4>Tìm kiếm sản phẩm</h4>
                <form className="form-search-item">
                  <input type="text" className="form-search-item" />
                </form>
                <div className="select_group">
                  <h4>Thương hiệu</h4>
                  <select className="select_group__select">
                    <option value>Tất cả sản phấm</option>
                    <option value>Asus</option>
                    <option value>Dell</option>
                    <option value>Lenovo</option>
                    <option value>Acer</option>
                    <option value>Macbook</option>
                  </select>
                </div>
                <div className="check-product-list">
                  <h4>Mức giá</h4>
                  <div className="checkbox-group">
                    <input type="checkbox" className="checkbox-group__checkboxAll" />
                    <span>Tất cả</span>
                  </div>
                  <div className="checkbox-group">
                    <input type="checkbox" className="checkbox-group__checkboxAll" />
                    <span>Dưới 10 triệu</span>
                  </div>
                  <div className="checkbox-group">
                    <input type="checkbox" className="checkbox-group__checkboxAll" />
                    <span>Từ 10 - 15 triệu</span>
                  </div>
                  <div className="checkbox-group">
                    <input type="checkbox" className="checkbox-group__checkboxAll" />
                    <span>Từ 20 - 25 triệu</span>
                  </div>
                </div>
              </div>
              <div className="col-9">
                <ProductList title="TỔNG HỢP SẢN PHẨM" products={brandProducts}/>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
};

export default BrandProducts;