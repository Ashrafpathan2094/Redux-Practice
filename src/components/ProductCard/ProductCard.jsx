import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  decrementItem,
  incrementItem,
  selectCart,
} from "../../store/slices/cart/cartSlice";

const ProductCard = ({ product }) => {
  const cart = useSelector(selectCart);
  const currentProduct = cart.find((item) => item.title === product?.title);
  const dispatch = useDispatch();
  return (
    <div className="w-[26%]">
      <div className="flex justify-center items-center">
        <img
          src={product?.images?.edges[0]?.node?.url}
          alt="img"
          className="max-h-[15rem]"
        />
      </div>
      <div className="flex justify-center items-center">
        {product?.description.slice(0, 50)}
      </div>
      <div className="flex justify-between items-center mt-3 mx-10">
        <div className="font-semibold">
          {currentProduct?.quantity > 0
            ? product?.price?.amount * currentProduct?.quantity
            : product?.price?.amount}
        </div>

        <div>
          {currentProduct?.quantity > 0 ? (
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
          ) : (
            <button
              className="p-2 bg-[blue] text-[#fff] font-semibold"
              onClick={() =>
                dispatch(
                  incrementItem({
                    title: product?.title,
                    price: product?.price?.amount,
                    img: product?.images?.edges[0]?.node?.url,
                  })
                )
              }
            >
              Add to Cart
            </button>
          )}
        </div>
        {/* <>{JSON.stringify(cart)}</> */}
        {/* <>{JSON.stringify(currentProduct)}</> */}
      </div>
    </div>
  );
};

export default ProductCard;
