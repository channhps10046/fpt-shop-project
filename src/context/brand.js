import axios from 'axios';
import React, { createContext, useEffect, useState } from 'react';
import url from '../utils/url'; 
import { flattenProducts } from '../utils/helpers';

const BrandContext = createContext();

function BrandProvider({ children }){

    const [brand, setBrand] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        async function BrandsData() {
            // setLoading(true);
            const resp = await axios.get(`${url}/brands`);
            setBrand(flattenProducts(resp.data));
            setLoading(true);
          }
  
        BrandsData();
        // axios.get(`${url}/brands`).then((response) => {
        //     const brand = flattenProducts(response.data);
        //     setBrand(brand);
        //     setLoading(true);
        // });
        // return () => {};

    }, []);

    return (
        <BrandContext.Provider value={{ brand, loading }}>
            { children }
        </BrandContext.Provider>
    )
}

export { BrandProvider, BrandContext }