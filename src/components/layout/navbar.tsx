"use client";

import Link from "next/link";
import { useSelector } from "react-redux";

import type { RootState } from "@/store/store";

export default function Navbar() {
  const cartItems = useSelector(
    (state: RootState) => state.cart.items
  );

  const favoriteItems = useSelector(
    (state: RootState) => state.favorites.items
  );

  const cartCount = cartItems.reduce(
    (total, item) => total + item.quantity,
    0
  );

  const favoriteCount = favoriteItems.length;

  return (
    <nav className="border-b bg-white ">
      <div className="mx-auto flex max-w-7xl flex-col gap-4 px-4 py-4 sm:flex-row sm:items-center sm:justify-between">
        {/* Logo */}
        <Link
          href="/"
          className="text-xl font-bold text-blue-500"
        >
          Product Store
        </Link>

        {/* Navigation */}
        <div className="flex flex-wrap items-center gap-x-5 gap-y-2 text-red-400 text-sm sm:text-base">
          <Link
            href="/"
            className="hover:text-gray-600"
          >
            Home
          </Link>

          <Link
            href="/products"
            className="hover:text-gray-600"
          >
            Products
          </Link>

          <Link
            href="/cart"
            className="hover:text-gray-600"
          >
            Cart ({cartCount})
          </Link>

          <Link
            href="/favorites"
            className="hover:text-gray-600 "
          >
            Favorites ({favoriteCount})
          </Link>
        </div>
      </div>
    </nav>
  );
}