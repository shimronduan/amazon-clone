import React from "react";
import "./SubTotal.css";
import CurrencyFormat from "react-currency-format";
import { useStateValue } from "./StateProvider";

const SubTotal = () => {
  const [{ basket }, dispatch] = useStateValue();
  const calculatePrice = () => {
    let totalPrice = 0;
    basket.forEach((item) => {
      totalPrice += +item.price;
    });
    return totalPrice;
  };
  return (
    <div className="subtotal">
      <CurrencyFormat
        renderText={(value) => (
          <div>
            <p>
              Subtotal ({basket?.length} items):
              <strong> {calculatePrice()}</strong>
            </p>
            <small className="subtotal__gift">
              <input type="checkbox" /> This order contains a gift
            </small>
          </div>
        )}
        decimalScale={2}
        value={0}
        displayType={"text"}
        thousandSeparator={true}
        prefix={"$"}
      />
      <button>Proceed to Checkout</button>
    </div>
  );
};

export default SubTotal;
