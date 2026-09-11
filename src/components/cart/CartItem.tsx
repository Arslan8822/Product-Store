"use client";

import Image from "next/image";
import { useDispatch } from "react-redux";

import type { CartItem as CartItemType } from "@/types/product";
import type { AppDispatch } from "@/store/store";

import {
  increaseQuantity,
  decreaseQuantity,
  removeItem,
} from "@/store/slices/cartSlice";

interface CartItemProps {
  item: CartItemType;
}

export default function CartItem({
  item,
}: CartItemProps) {
  const dispatch = useDispatch<AppDispatch>();

  const { product, quantity } = item;

  return (
    <div className="flex flex-col gap-4 rounded-lg border bg-white p-4 sm:flex-row sm:items-center">
      {/* Image */}
      <div className="relative h-32 w-full shrink-0 sm:w-32">
        <Image
          src={product.image}
          alt={product.productName}
          fill
          className="object-contain"
          sizes="128px"
        />
      </div>

      {/* Product Info */}
      <div className="flex-1">
        <h2 className="font-semibold text-blue-500">
          {product.productName}
        </h2>

        <p className="mt-2 text-lg font-bold text-red-500">
          ${product.price.toFixed(2)}
        </p>
      </div>

      {/* Quantity */}
      <div>
        <p className="mb-2 text-sm text-blue-500">
          Quantity
        </p>

        <div className="flex w-fit items-center rounded-md border">
          <button
            onClick={() =>
              dispatch(decreaseQuantity(product.id))
            }
            className="px-4 py-2 hover:bg-gray-100 text-black"
            aria-label="Decrease quantity"
          >
            -
          </button>

          <span className="px-5 text-blue-800">
            {quantity}
          </span>

          <button
            onClick={() =>
              dispatch(increaseQuantity(product.id))
            }
            className="px-4 py-2 hover:bg-gray-100 text-black"
            aria-label="Increase quantity"
          >
            +
          </button>
        </div>
      </div>

      {/* Remove */}
      <button
        onClick={() =>
          dispatch(removeItem(product.id))
        }
        className="rounded-md border px-4 py-2 mt-7 text-red-600 hover:bg-red-50"
      >
        Remove
      </button>
    </div>
  );
}