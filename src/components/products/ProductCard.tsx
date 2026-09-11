"use client";

import Image from "next/image";
import Link from "next/link";
import { useDispatch, useSelector } from "react-redux";

import type { Product } from "@/types/product";
import type { RootState, AppDispatch } from "@/store/store";

import { addItem } from "@/store/slices/cartSlice";

import {
  addFavorite,
  removeFavorite,
} from "@/store/slices/favoritesSlice";

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({
  product,
}: ProductCardProps) {
  const dispatch = useDispatch<AppDispatch>();

  const favorites = useSelector(
    (state: RootState) => state.favorites.items
  );

  const isFavorite = favorites.some(
    (favorite) => favorite.id === product.id
  );

   const handleCart = () => {
    dispatch(addItem(product));
  };

  const handleFavorite = () => {
    if (isFavorite) {
      dispatch(removeFavorite(product.id));
    } else {
      dispatch(addFavorite(product));
    }
  };

  return (
    <div className="flex flex-col rounded-lg border bg-white p-4 shadow-sm transition hover:shadow-md">
      <div className="relative mb-4 h-56">
        <Image
          src={product.image}
          alt={product.productName}
          fill
          className="object-contain"
          sizes="(max-width: 768px) 100vw, 25vw"
        />
      </div>

      <div className="flex flex-1 flex-col">
        <p className="mb-2 text-sm capitalize text-blue-300">
          {product.category}
        </p>

        <h2 className="line-clamp-2 text-blue-400 text-lg font-semibold">
          {product.productName}
        </h2>

        <div className="mt-2 flex items-center justify-between">
          <p className="text-lg font-bold text-blue-800">
            ${product.price.toFixed(2)}
          </p>

          <p className="text-sm text-blue-400">
            ⭐ {product.rating.rate}
          </p>
        </div>

        <div className="mt-auto flex flex-col gap-2 pt-4 sm:flex-row">
          <button
            onClick={handleCart}
            className="flex-1 rounded-md bg-black px-3 py-2 text-sm text-white hover:bg-gray-800"
          >
            Add to Cart
          </button>

          <button
            onClick={handleFavorite}
            className="rounded-md border px-3 py-2 text-black hover:bg-gray-600"
            aria-label={
              isFavorite
                ? "Remove from favorites"
                : "Add to favorites"
            }
          >
            {isFavorite ? "♥" : "♡"}
          </button>
        </div>

        <Link
          href={`/products/${product.id}`}
          className="mt-2 text-center  font-medium underline text-md text-blue-400 hover:text-blue-600"
        >
          View Details
        </Link>
      </div>
    </div>
  );
}