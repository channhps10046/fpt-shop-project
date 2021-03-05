import React from 'react';
import Product from '../Product/product.component';

const ProductList = ({ products, title }) => {
    return (
        <div className="featured-phone">
        <div className="featured-phone__title">
          <h3>{title}</h3>
        </div>
        <div className="featured--group">
          {
            products.map((item) => {
              return <Product key={item.id} item={item}/>
            })
          }
        </div>
      </div>
    );
};

export default ProductList;