"use client";

import Image from "next/image";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import type { Product } from "@/types/product";
import type { RootState, AppDispatch } from "@/store/store";

import { addItem } from "@/store/slices/cartSlice";
import {
  addFavorite,
  removeFavorite,
} from "@/store/slices/favoritesSlice";

interface ProductDetailsProps {
  product: Product;
}

export default function ProductDetails({
  product,
}: ProductDetailsProps) {
  const dispatch = useDispatch<AppDispatch>();

  const [quantity, setQuantity] = useState(1);

  const favorites = useSelector(
    (state: RootState) => state.favorites.items
  );

  const isFavorite = favorites.some(
    (favorite) => favorite.id === product.id
  );

  const handleIncrease = () => {
    setQuantity((current) => current + 1);
  };

  const handleDecrease = () => {
    setQuantity((current) =>
      current > 1 ? current - 1 : 1
    );
  };

  const handleAddToCart = () => {
    for (let i = 0; i < quantity; i++) {
      dispatch(addItem(product));
    }
  };

  const handleFavorite = () => {
    if (isFavorite) {
      dispatch(removeFavorite(product.id));
    } else {
      dispatch(addFavorite(product));
    }
  };

  return (
    <div className="grid grid-cols-1 gap-10 md:grid-cols-2">
      {/* Product Image */}
      <div className="relative h-100 rounded-lg border bg-white">
        <Image
          src={product.image}
          alt={product.title}
          fill
          className="object-contain p-8"
          sizes="(max-width: 768px) 100vw, 50vw"
        />
      </div>

      {/* Product Information */}
      <div>
        <p className="mb-2 text-sm capitalize text-gray-500">
          {product.category}
        </p>

        <h1 className="text-3xl  font-bold">
          {product.title}
        </h1>

        <div className="mt-4 flex items-center gap-4">
          <span className="text-2xl font-bold">
            ${product.price.toFixed(2)}
          </span>

          <span className="text-sm">
            ⭐ {product.rating.rate} (
            {product.rating.count} reviews)
          </span>
        </div>

        <p className="mt-6 leading-7 text-gray-600">
          {product.description}
        </p>

        {/* Quantity */}
        <div className="mt-8">
          <p className="mb-2 font-medium">
            Quantity
          </p>

          <div className="flex w-fit items-center rounded-md border">
            <button
              onClick={handleDecrease}
              className="px-4 py-2 text-lg hover:bg-gray-100 hover:text-black"
            >
              -
            </button>

            <span className="px-5 py-2">
              {quantity}
            </span>

            <button
              onClick={handleIncrease}
              className="px-4 py-2 text-lg hover:bg-gray-100 hover:text-black"
            >
              +
            </button>
          </div>
        </div>

        {/* Actions */}
        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <button
            onClick={handleAddToCart}
            className="rounded-md bg-black px-6 py-3 text-white hover:bg-gray-800"
          >
            Add to Cart
          </button>

          <button
            onClick={handleFavorite}
            className="rounded-md border px-6 py-3 hover:bg-blue-500 "
          >
            {isFavorite
              ? "♥ Remove Favorite"
              : "♡ Add to Favorite"}
          </button>
        </div>
      </div>
    </div>
  );
}