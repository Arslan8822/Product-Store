"use client";

import { useDispatch, useSelector } from "react-redux";

import type {
  RootState,
  AppDispatch,
} from "@/store/store";

import { clearCart } from "@/store/slices/cartSlice";

export default function CartSummary() {
  const dispatch = useDispatch<AppDispatch>();

  const cartItems = useSelector(
    (state: RootState) => state.cart.items
  );

  const totalItems = cartItems.reduce(
    (total, item) => total + item.quantity,
    0
  );

  const subtotal = cartItems.reduce(
    (total, item) =>
      total + item.product.price * item.quantity,
    0
  );

  return (
    <div className="rounded-lg border bg-gray-50 p-6 h-auto overflow-hidden flex flex-col">
  <h2 className="text-xl font-bold text-blue-800">
    Cart Summary
  </h2>

  <div className="mt-4 space-y-3 flex-1 overflow-y-auto">
    <div className="flex justify-between">
      <span className="font-medium text-blue-500">
        Total Items
      </span>

      <span className="font-medium text-red-500">
        {totalItems}
      </span>
    </div>

    <div className="flex justify-between">
      <span className="font-medium text-blue-500">
        Subtotal
      </span>

      <span className="font-medium text-red-500">
        ${subtotal.toFixed(2)}
      </span>
    </div>

    <div className="border-t pt-3">
      <div className="flex justify-between text-lg font-bold">
        <span className="font-medium text-blue-500">
          Total
        </span>

        <span className="font-medium text-red-500">
          ${subtotal.toFixed(2)}
        </span>
      </div>
    </div>
  </div>

  <button
    onClick={() => dispatch(clearCart())}
    className="mt-4 w-full rounded-md bg-gray-900 px-4 py-3 text-white hover:bg-red-500 shrink-0"
  >
    Clear Cart
  </button>
</div>
  );
}