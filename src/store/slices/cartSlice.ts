import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import type { Product } from "@/types/product";

interface CartItem {
  product: Product;
  quantity: number;
}

interface CartState {
  items: CartItem[];
}

const MAX_ITEM_QUANTITY = 5;

const initialState: CartState = {
  // items: [{ product: { id: 2, title: "Mens Casual Premium Slim Fit T-Shirts ", price: 22.3, description: "Slim-fitting style, contrast raglan long sleeve, three-button henley placket, light weight & soft fabric for breathable and comfortable wearing. And Solid stitched shirts with round neck made for durability and a great fit for casual fashion wear and diehard baseball fans. The Henley style round neckline includes a three-button placket.", category: "men's clothing", image: "https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg", rating: { rate: 4.1, count: 259 } }, quantity: 1 }],
  items: [],
};


const cartSlice = createSlice({
  name: "cart",

  initialState,

  reducers: {
    addItem: (
      state,
      action: PayloadAction<Product>
    ) => {
      const existingItem = state.items.find(
        (item) => item.product.id === action.payload.id
      );

      if (existingItem && existingItem.quantity < MAX_ITEM_QUANTITY) {
        existingItem.quantity += 1;
      } else {
        if (!existingItem) {
          state.items.push({
            product: action.payload,
            quantity: 1,
          });
        }
      }
    },

    removeItem: (
      state,
      action: PayloadAction<number>
    ) => {
      state.items = state.items.filter(
        (item) => item.product.id !== action.payload
      );
    },

    addToCart: (
      
      state,
      action: PayloadAction<CartItem>
    ) => {
      const existingItem = state.items.find(
        (item) =>
          item.product.id === action.payload.product.id
      );

      if (existingItem) {
        existingItem.quantity = Math.min(
          existingItem.quantity + action.payload.quantity,
          MAX_ITEM_QUANTITY
        );
      } else {
        state.items.push({
          ...action.payload,
          quantity: Math.min(action.payload.quantity, MAX_ITEM_QUANTITY),
        });
      }
    },

    removeFromCart: (
      state,
      action: PayloadAction<number>
    ) => {
      state.items = state.items.filter(
        (item) =>
          item.product.id !== action.payload
      );
    },

    increaseQuantity: (
      state,
      action: PayloadAction<number>
    ) => {
      const item = state.items.find(
        (item) =>
          item.product.id === action.payload
      );

      if (item && item.quantity < MAX_ITEM_QUANTITY) {
        item.quantity += 1;
      }
    },

    decreaseQuantity: (
      state,
      action: PayloadAction<number>
    ) => {
      const item = state.items.find(
        (item) =>
          item.product.id === action.payload
      );

      if (item && item.quantity > 1) {
        item.quantity -= 1;
      }
    },

    clearCart: (state) => {
      state.items = [];
    },
  },
});

export const {
  addToCart,
  removeFromCart,
  addItem,
  removeItem,
  increaseQuantity,
  decreaseQuantity,
  clearCart,
} = cartSlice.actions;

export default cartSlice.reducer;