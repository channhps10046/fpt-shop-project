import React, { createContext, useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import axios from 'axios';
import url from '../utils/url';
import { flattenProducts } from '../utils/helpers';

const ProductContext = createContext();

function ProductProvider({ children }) {
  const location = useLocation();
  const search = new URLSearchParams(location.search).get('s');
  const [loading, setLoading] = useState(false);
    const [products, setProduct] = useState([]);
    const [filters, setFilters] = useState({
        search: search || "",
        category: "all",
        price: "all",
        brand: "all"
    });

    const updateFilters = (e) => {
        const type = e.target.type;
        const filter = e.target.name;
        const value = e.target.value;

        let filterValue;

        if (type === "radio") {
            value === "all" ? (filterValue = value) : (filterValue = parseInt(value));
        } else {
            filterValue = value;
        }

        setFilters({...filters, [filter]: filterValue});
    };

    useEffect(() => {

        async function ProductsData() {
          setLoading(true);
          const resp = await axios.get(`${url}/products`);
          setProduct(flattenProducts(resp.data));
          setLoading(false);
        }

        // axios.get(`${url}/products`).then(response => {
        //   setLoading(true);
        //   const products = flattenProducts(response.data);
        //   console.log(products);
        //   setProduct(products);
        //   setLoading(false)
        // });

        ProductsData();
    }, []);


    const getProduct = (category) => products.filter(item => parseInt(item.category_id) === category );

    const filterProduct = () => {
        let newProducts = [...products].sort((a, b) => a.price - b.price);
        const { search, category, brand, price } = filters;

        if(category !== 'all'){
            newProducts = newProducts.filter(item => parseInt(item.category_id) === parseInt(category))
        }

        if(brand !== 'all'){
            newProducts = newProducts.filter(item => parseInt(item.brand_id) === parseInt(brand))
        }

        if (price !== "all") {
            newProducts = newProducts.filter((item) => {
              if (price === 10000000) {
                return item.price < 10000000;
              } else if (price === 15000000) {
                return item.price > 15000000 && item.price < 25000000;
              } else {
                return item.price > 25000000;
              }
            });
          }

          if (search !== "") {
            newProducts = newProducts.filter((item) => {
              let title = item.title.toLowerCase().trim();
              return title.startsWith(search) ? item : null;
            });
          }

          return newProducts;
    }

    return (
        <ProductContext.Provider value={{ products: filterProduct(), getProduct, filters, updateFilters, loading }}>
            { children }
        </ProductContext.Provider>
    );
}

export { ProductProvider, ProductContext };