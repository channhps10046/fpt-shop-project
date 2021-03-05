import React, { useContext } from 'react';
import { ProductContext } from '../../context/products';
import ProductList from '../ProductList/product-list.component';

const CategoryProduct = ({ title, category}) => {
    const { getProduct } = useContext(ProductContext);
    return (
        <React.Fragment>
            <ProductList title={title} products={getProduct(category)}/>
        </React.Fragment>
    );
};

export default CategoryProduct;