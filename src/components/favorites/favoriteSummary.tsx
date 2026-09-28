"use client";

import { useDispatch, useSelector } from "react-redux";

import type {
  RootState,
  AppDispatch,
} from "@/store/store";

import { clearFavorite } from "@/store/slices/favoritesSlice";

export default function FavoriteSummary() {
  const dispatch = useDispatch<AppDispatch>();

  const favoriteItems = useSelector(
    (state: RootState) => state.favorites.items
  );

  const totalItems = favoriteItems.length;

  const subtotal = favoriteItems.reduce(
    (total, item) => total + item.price,
    0
  );

  return (
    <div className="rounded-lg border bg-gray-50 p-6 h-auto overflow-hidden flex flex-col">
  <h2 className="text-xl font-bold text-blue-800">
    Favorite Summary
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
    onClick={() => dispatch(clearFavorite())}
    className="mt-4 w-full rounded-md bg-gray-900 px-4 py-3 text-white hover:bg-red-500 shrink-0"
  >
    Clear Favorite
  </button>
</div>
  );
}