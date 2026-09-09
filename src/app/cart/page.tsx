"use client";

import { useSelector } from "react-redux";

import type { RootState } from "@/store/store";

import CartItem from "@/components/cart/CartItem";
import CartSummary from "@/components/cart/CartSummary";
import EmptyState from "@/components/ui/EmptyState";

export default function CartPage() {
  const cartItems = useSelector(
    (state: RootState) => state.cart.items
  );

  return (
    <section className="mx-auto max-w-7xl px-4 py-10 ">
      <h1 className="mb-8 text-3xl font-bold">
        Shopping Cart
      </h1>

      {cartItems.length === 0 ? (
            <EmptyState
        
          title="Your cart is empty."
          message="Add some products to your cart."
        />
      ) : (
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
          {/* Cart Items */}
          <div className="space-y-4 lg:col-span-2">
            {cartItems.map((item) => (
              <CartItem
                key={item.product.id}
                item={item}
              />
            ))}
          </div>

          {/* Summary */}
          <CartSummary />
        </div>
      )}
    </section>
  );
}