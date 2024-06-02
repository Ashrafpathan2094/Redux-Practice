import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectCart } from "../../store/slices/cart/cartSlice";
import CheckoutCard from "../CheckoutCard/CheckoutCard";

const Checkout = ({ setShowModal }) => {
  const cart = useSelector(selectCart);
  const dispatch = useDispatch();
  const calculateSubtotal = () => {
    return cart.reduce((total, product) => {
      return total + product.price * product.quantity;
    }, 0);
  };

  const subtotal = calculateSubtotal();
  return (
    <div className="absolute top-0 bg-gray-100 h-[100vh] z-20">
      <button
        className="px-3 py-1 bg-[black] rounded-[50%] text-[#fff] absolute right-0"
        onClick={() => setShowModal(false)}
      >
        X
      </button>
      {cart.map((product, index) => (
        <CheckoutCard product={product} key={index} />
      ))}

      <div className="flex justify-between items-center">
        <div>Subtotal</div>
        <div>{subtotal}</div>
      </div>
    </div>
  );
};

export default Checkout;
