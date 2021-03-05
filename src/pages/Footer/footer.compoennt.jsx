import React from 'react';
import "./footer.styles.scss";
import "./footer-responsive.styles.scss";
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <div className="footer__group">
        <div className="container">
            <div className="footer">
                <div className="row">
                    <div className="col-3">
                        <ul className="fs-ftul">
                            <li><Link target="_blank" to="http://frt.vn/">Giới thiệu về công ty</Link></li>
                            <li><Link to="//fptshop.com.vn/ho-tro/chinh-sach-bao-mat" title="">Chính sách bảo mật</Link></li>
                            <li><Link to="//fptshop.com.vn/ho-tro/cau-hoi-thuong-gap" title="Câu hỏi thường gặp mua hàng">Câu hỏi thường gặp mua hàng</Link></li>
                            <li><Link to="//fptshop.com.vn/tos" title="">Quy chế hoạt động</Link></li>
                            <li><Link to="http://hddt.fptshop.com.vn/" title="">Kiểm tra hóa đơn điện tử</Link></li>
                            <li><Link to="//fptshop.com.vn/kiem-tra-bao-hanh?tab=thong-tin-bao-hanh" title="">Tra cứu thông tin bảo hành</Link></li>
                        </ul>
                    </div>

                    <div className="col-3">
                        <ul className="fs-ftul">
                            <li><Link to="//vieclam.fptshop.com.vn/">Tin tuyển dụng</Link></li>
                            <li><Link to="//fptshop.com.vn/tin-tuc/Tin-khuyen-mai" title="">Tin khuyến mãi</Link></li>
                            <li><Link to="//fptshop.com.vn/ho-tro/huong-dan-mua-hang" title="">Hướng dẫn mua online</Link></li>
                            <li><Link to="//fptshop.com.vn/tra-gop" title="">Hướng dẫn mua trả góp</Link></li>
                            <li><Link to="https://fptshop.com.vn/ho-tro/chinh-sach-tra-gop" title="">Chính sách trả góp</Link></li>
                        </ul>
                    </div>

                    <div className="col-3">
                        <ul className="fs-ftul">
                            <li><Link to="//fptshop.com.vn/cua-hang">Hệ thống cửa hàng</Link></li>
                            <li><Link to="//fptshop.com.vn/ho-tro/chinh-sach-bao-hanh" title="">Hệ thống bảo hành</Link></li>
                            <li><Link to="//fptshop.com.vn/kiem-tra-hang-apple-chinh-hang" title="">Kiểm tra hàng Apple chính hãng</Link></li>
                            <li><Link to="//fptshop.com.vn/ho-tro/gioi-thieu-may-doi-tra" title="">Giới thiệu máy đổi trả</Link></li>
                            <li><Link to="https://fptshop.com.vn/ho-tro/chinh-sach-doi-san-pham" title="">Chính sách đổi trả</Link></li>
                        </ul>
                    </div>

                    <div className="col-3 col-3-last">
                        <div className="row">
                            <div className="col-6">
                                <h4>Tư vấn mua hàng (Miễn phí)</h4>
                                <h2>1800 6601 (Nhánh 1)</h2>
                                <h4>Hỗ trợ kỹ thuật</h4>
                                <h2>1800 6601 (Nhánh 2)</h2>
                            </div>  
                            <div className="col-6">
                                <h4>Góp ý, khiếu nại dịch vụ (8h00-22h00)</h4>
                                <h2>1800 6616</h2>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    );
};

export default Footer;