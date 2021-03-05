import React from 'react';
import Logo from '../../assets/logo.png';
import Bn from '../../assets/bn.png';
import "./error-page.styles.scss";
import { Link } from 'react-router-dom';

function ErrorPage() {
    return (
        <div className="error-page">
            <div className="group-page">

                <p className="group-page__logo">
                    <img className="group-page__logo--fshop" src={Logo} alt="logo error page"/>
                </p>

                <p className="group-page__logo">
                    <img className="group-page__logo--bn" src={Bn} alt="background"/>
                </p>

                <h1 className="group-page__title">RẤT TIẾC, TRANG BẠN TÌM KIẾM KHÔNG TỒN TẠI</h1>

                <div className="group-page__group-button">
                    <Link to="/" className="group-page__group-button--btn-danger">quay về trang chủ</Link>
                </div>
            </div>
        </div>
    );
}

export default ErrorPage;