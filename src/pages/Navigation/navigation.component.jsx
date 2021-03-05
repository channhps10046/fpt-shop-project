import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { CategoryContext } from '../../context/category';
import "./navigation.styles.scss";
import "./navigation-responsive.styles.scss";

const Navigation = () => {
  const { category } = useContext(CategoryContext);
    return (
        <div className="navigation">
        <div className="container">
          <ul className="navigation-group">
            {
              category.map(item => {
                return <li key={item.id}><i className={`fa fa-${item.category_name}`} aria-hidden="true" /><Link to={`/fshop/${item.category_name}/${item.id}`}>{item.category_name}</Link></li>;
              })
            }
          <li><i className="fa fa-product-hunt" aria-hidden="true"/><Link to="/products">Products</Link></li>
            
            {/* <li><i className="fa fa-laptop" aria-hidden="true" /><a href="#">LAPTOP</a></li>
            <li><i className="fa fa-apple" aria-hidden="true" /><a href="#">APPLE</a></li>
            <li><i className="fa fa-clock-o" aria-hidden="true" /><a href="#">WATCH</a></li>
            <li><i className="fa fa-headphones" aria-hidden="true" /><a href="#">HEADPHONE</a></li>
            <li><i className="fa fa-tablet" aria-hidden="true" /><a href="#">TABLET</a></li> */}
          </ul>
        </div>
      </div>
    );
};

export default Navigation;