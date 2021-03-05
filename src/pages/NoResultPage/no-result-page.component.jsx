import React from 'react';
import Logo from '../../assets/noti-search.png';
import "./no-result-page.styles.scss";

function NoResult() {
    return (
        <div className="group-page">
            <div className="page">
            <p className="page__logo">
                <img src={Logo} alt="logo"/>
            </p>
            <p className="page__title">Rất tiếc chúng tôi không tìm thấy kết quả theo yêu cầu của bạn Vui lòng thử lại .</p>
            </div>
        </div>
    );
}

export default NoResult;