import React, { useContext } from 'react';
import "./filter-products.styles.scss";
import { ProductContext } from '../../context/products';

const Filter = () => {
    const { filters: { search, category, brand, price }, updateFilters } = useContext(ProductContext);
    return (
        <div className="col-3">
        <h4>Tìm kiếm sản phẩm</h4>
        <form className="form-search-item frm">
          <input value={search} onChange={updateFilters} type="text" name="search" className="form-search-item__search" />
        </form>
        <div className="select_group frm">
          <h4>Thương hiệu</h4>
          <select className="select_group__select" name="brand" value={brand} onChange={updateFilters}>
            <option value="all">Tất cả sản phấm</option>
            <option value="1">Asus</option>
            <option value="2">Dell</option>
            <option value="3">MSI</option>
            <option value="4">Acer</option>
            <option value="5">Macbook</option>
            <option value="6">Lenovo</option>
            <option value="7">Apple</option>
            <option value="8">Samsung</option>
            <option value="9">Oppo</option>
            <option value="10">Xiaomi</option>
            <option value="11">Vivo</option>
            <option value="12">Realme</option>
          </select>
        </div>

        <div className="select_group frm">
          <h4>Loại sản phẩm</h4>
          <select className="select_group__select" name="category" value={category} onChange={updateFilters}>
            <option value="all">Tất cả sản phấm</option>
            <option value="1">Điện thoại</option>
            <option value="2">Laptop</option>
            <option value="4">Headphones</option>
            <option value="5">Tablet</option>
          </select>
        </div>

        <div className="check-product-list">
          <h4>Mức giá</h4>
          <div className="checkbox-group">
            <input type="radio" value="all" name="price" onChange={updateFilters} checked={price === "all"} className="checkbox-group__checkboxAll" />
            <span>Tất cả</span>
          </div>
          <div className="checkbox-group">
            <input type="radio" value="10000000" name="price" onChange={updateFilters} checked={price === 10000000} className="checkbox-group__checkboxAll" />
            <span>Dưới 10 triệu</span>
          </div>
          <div className="checkbox-group">
            <input type="radio" value="15000000" name="price" onChange={updateFilters} checked={price === 15000000} className="checkbox-group__checkboxAll" />
            <span>Từ 15 - 25 triệu</span>
          </div>
          <div className="checkbox-group">
            <input type="radio" value="25000000" name="price" onChange={updateFilters} checked={price === 25000000} className="checkbox-group__checkboxAll" />
            <span>25 triệu</span>
          </div>
        </div>
      </div>
    );
};

export default Filter;