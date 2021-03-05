import React from 'react';

const BackImageFixed = () => {
    return (
        <React.Fragment>
              <div className="icon__left hide-on-mobile-tablet">
          <img id="lanterns" className="animated tada infinite" src="img/asset-left.png" alt="" />
        </div>
        <div className="icon__right hide-on-mobile-tablet">
          <img id="lanterns" className="animated tada infinite" src="img/asset-right.png" alt="" />
        </div>
        <div className="backImage hide-on-mobile-tablet">
          <div className="img__left">
            <img className="img__left--cherry" src="img/left-top.png" alt="Cherry Blossom" />
          </div>
          <div className="img__right">
            <img className="img__right--apricot" src="img/right-top.png" alt="Yellow apricot flowers" />
          </div>
        </div>
        </React.Fragment>
    );
};

export default BackImageFixed;