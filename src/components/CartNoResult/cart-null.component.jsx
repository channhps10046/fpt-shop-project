import React from 'react';
import "./cart-null.styles.scss";
import Logo from "../../assets/null.png";
import { Link } from 'react-router-dom';

const CartNull = () => {
    return (
        <div className="group-cart-null">
            <div className="container">
                <div className="box-cart">
                    <div className="bx-null">
                        <img className="bx-img mb" src={Logo} alt="CartNull"/>
                        <p className="bx-title mb">Không có sản phẩm nào trong giỏ hàng của bạn</p>
                        <Link to="/" className="bx-btn">đến trang chủ fpt shop</Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CartNull;