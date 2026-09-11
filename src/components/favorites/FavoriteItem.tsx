"use client";

import Image from "next/image";
import { useDispatch } from "react-redux";

import type { Product } from "@/types/product";
import type { AppDispatch } from "@/store/store";

import { addItem } from "@/store/slices/cartSlice";
import { removeFavorite } from "@/store/slices/favoritesSlice";

interface FavoriteItemProps {
  product: Product;
}

export default function FavoriteItem({
  product,
}: FavoriteItemProps) {
  const dispatch = useDispatch<AppDispatch>();

  const handleRemoveFavorite = () => {
    dispatch(removeFavorite(product.id));
  };

  const handleAddToCart = () => {
    dispatch(addItem(product));
  };

  return (
    <div className="flex flex-col gap-4 rounded-lg border bg-white p-4 shadow-sm sm:flex-row sm:items-center">
      {/* Product Image */}
      <div className="relative h-40 w-full shrink-0 sm:w-40">
        <Image
          src={product.image}
          alt={product.productName}
          fill
          className="object-contain"
          sizes="160px"
        />
      </div>

      {/* Product Information */}
      <div className="flex-1">
        <p className="text-sm capitalize text-blue-800">
          {product.category}
        </p>

        <h2 className="mt-1 text-lg font-semibold text-blue-400">
          {product.productName}
        </h2>

        <p className="mt-2 text-lg font-bold text-red-400">
          ${product.price.toFixed(2)}
        </p>

        <p className="mt-1 text-sm text-blue-800">
          ⭐ {product.rating.rate}
        </p>
      </div>

      {/* Actions */}
      <div className="flex flex-col gap-2 sm:w-40">
        <button
          onClick={handleAddToCart}
          className="rounded-md bg-black px-4 py-2 text-white hover:bg-gray-800"
        >
          Add to Cart
        </button>

        <button
          onClick={handleRemoveFavorite}
          className="rounded-md border px-4 py-2 text-red-600 hover:bg-red-50"
        >
          Remove
        </button>
      </div>
    </div>
  );
}