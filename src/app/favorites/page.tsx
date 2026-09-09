"use client";

import { useSelector } from "react-redux";

import type { RootState } from "@/store/store";

import FavoriteItem from "@/components/favorites/FavoriteItem";
import EmptyState from "@/components/ui/EmptyState";

export default function FavoritesPage() {
  const favoriteItems = useSelector(
    (state: RootState) => state.favorites.items
  );

  return (
    <section className="mx-auto max-w-7xl px-4 py-10">
      <div className="mb-8">
        <h1 className="text-3xl font-bold ">
          Favorites
        </h1>

        <p className="mt-2 text-red-500">
          Products you have added to your favorites.
        </p>
      </div>

      {favoriteItems.length === 0 ? (
        <EmptyState

          title="No favorite products."
          message="Add products to your favorites to see them here."
        />
      ) : (
        <div className="space-y-4">
          {favoriteItems.map((product) => (
            <FavoriteItem
              key={product.id}
              product={product}
            />
          ))}
        </div>
      )}
    </section>
  );
}