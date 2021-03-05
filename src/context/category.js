import React, { createContext, useEffect, useState } from 'react';
import axios from 'axios';
import url from '../utils/url';

const CategoryContext = createContext();

function CategoryProvider({ children }){
    const [category, setCategory] = useState([]);


    useEffect(() => {
        axios.get(`${url}/categories`).then((response) => {
            const category = response.data;

            setCategory(category);
        });

        return () => {};
    }, []);
    return (
        <CategoryContext.Provider value={{ category }}>
            {children}
        </CategoryContext.Provider>
    );
}

export {CategoryProvider, CategoryContext};