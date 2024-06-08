import React from "react";
import Logo from "../../images/az-logo-full.svg";
import signin from "../../images/signin.svg";
import cart from "../../images/az-cart-nav.svg";
import arrow from "../../images/down-arrow.svg";
import SignAndCart from "./signAndCart";
import "./Header.css";

export default function TopHeader() {
  return (
    <>
      <div className="top-header">
        <div className="info">
          <div className="logosection">
            <img src={Logo} alt="" />
            <div className="para">
              <p
                style={{
                  color: "#f26d0d",
                  fontFamily:
                    "AutoZoneCond-Heavy, HelveticaNeue-Condensed, OpenSansCondensed, Arial, sans-serif",
                  fontSize: "14px",
                  
                  lineHeight: "18px",
                  textTransform: "uppercase",
                }}
              >
                20% off orders over $100* + Free Next Day Delivery^
              </p>
              <p className="second">
                Eligible Ship-To-Home Items Only. Use Code: MARCHPROMO
              </p>
            </div>
          </div>
          <div className="sign-cart">
            <SignAndCart
              func={signin}
              heading="Sign in"
              side={arrow}
            ></SignAndCart>
            <SignAndCart func={cart} heading="Cart"></SignAndCart>

            <div className="cart sign-class"></div>
          </div>
        </div>
      </div>
    </>
  );
}
