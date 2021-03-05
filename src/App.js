import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import "./App.styles.scss";
import BrandProducts from './components/BrandProducts/brand-products.component';
import Cart from './components/Cart/Cart.component';
import CategoryProductsNavigation from './components/CategoryProductNavigation/category-product-navigation';
import ProductDetail from './components/ProductDetail/product-detail.compoment';
import Products from './components/Products/products.component';
import ErrorPage from './pages/ErrorPage/error-page.component';
import Footer from './pages/Footer/footer.compoennt';
import Header from './pages/Header/header.component';
import Home from './pages/Home/home.component';
import Navigation from './pages/Navigation/navigation.component'; 

class App extends Component {
  render() {
    return (
     <div className="wrapper">
       <Header/>
       <Navigation/>
       <Switch>
         <Route exact path="/" component={Home}/>
         <Route path="/products" component={Products}/>
         <Route path="/brand-products/:brand/:id" children={<BrandProducts></BrandProducts>}></Route>
         <Route path="/product/:id" children={<ProductDetail></ProductDetail>}></Route>
         <Route path="/fshop/:cate/:id" children={<CategoryProductsNavigation></CategoryProductsNavigation>}></Route>
         <Route path="/cart" component={Cart}/>
         <Route path="*" component={ErrorPage}/>
       </Switch>
       <Footer/>
     </div>
    );
  }
}
export default App;