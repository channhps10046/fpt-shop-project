import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { BrandContext } from '../../context/brand';
import Loading from '../../pages/Loading/loading.component';

const Brand = () => {
  const { brand, loading } = useContext(BrandContext);
    return (
        <div className="brand__product">
        <ul className="brand">
          {
            loading ? (
              brand.map(item => {
                return  <Link href="#" key={item.id} to={`/brand-products/${item.brand_name}/${item.id}`}>
                <div className="img">
                  <img src={item.image} alt="mobile"/>
                </div>
                <span>{item.brand_name}</span>
              </Link>
              }) 
            ) : (<Loading/>)
          }
        </ul>
      </div>
    );
};

export default Brand;