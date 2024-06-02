import React from "react";
import {
  decrementItem,
  incrementItem,
  selectCart,
} from "../../store/slices/cart/cartSlice";
import { useDispatch, useSelector } from "react-redux";

const CheckoutCard = ({ product }) => {
  const cart = useSelector(selectCart);
  const currentProduct = cart.find((item) => item.title === product?.title);
  const dispatch = useDispatch();
  return (
    <div className="flex justify-start items-center h-[10rem] m-4">
      <div className="w-[20%] flex justify-center items-center overflow-hidden max-h-[100%]">
        <img src={product?.img} alt="img" className="w-[100%]" />
      </div>
      <div className="w-[20%]">
        {product?.title}

        <>
          <button
            className="p-1 m-1 bg-[blue] text-[#fff] font-semibold"
            aria-label="Decrement value"
            onClick={() =>
              dispatch(
                decrementItem({
                  title: product?.title,
                  price: product?.price?.amount,
                })
              )
            }
          >
            -
          </button>
          <span>{currentProduct?.quantity}</span>
          <button
            aria-label="Increment value"
            className="p-1 m-1 bg-[blue] text-[#fff] font-semibold"
            onClick={() =>
              dispatch(
                incrementItem({
                  title: product?.title,
                  price: product?.price?.amount,
                })
              )
            }
          >
            +
          </button>
        </>
      </div>
      <div className="w-[60%] flex justify-end items-center">
        {product?.quantity * product?.price}
      </div>
    </div>
  );
};

export default CheckoutCard;
