import React from "react";
import "./Checkout.css";
import SubTotal from "./SubTotal";
import { useStateValue } from "./StateProvider";

const Checkout = () => {
  const [{ basket }, dispatch] = useStateValue();
  var checkoutList = basket.map((item,index)=>{
    return <label key={index}>{item.title}</label>
  });
  return (
    <div className="checkout">
      <div className="checkout__left">
        <img
          className="checkout_ad"
          alt="checkout ad"
          src="https://dkemhji6i1k0x.cloudfront.net/000_clients/489816/page/489816udYiX0wU.jpg"
        />
        <div>
          <h2 className="checkout__title">Your shopping Basket</h2>
          {checkoutList}
        </div>
      </div>
      <div className="checkout__right">
        <SubTotal />
      </div>
    </div>
  );
};

export default Checkout;
