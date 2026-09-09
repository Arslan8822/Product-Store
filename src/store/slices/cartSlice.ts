// import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
// import type { CartItem, Product } from "@/types/product";

// interface CartState {
//   items: CartItem[];
// }

// const initialState: CartState = {
//   items: [],
// };

// const cartSlice = createSlice({
//   name: "cart",
//   initialState,

//   reducers: {
//     // Add product to cart
//     addItem: (state, action: PayloadAction<Product>) => {
//       const existingItem = state.items.find(
//         (item) => item.product.id === action.payload.id
//       );

//       if (existingItem) {
//         existingItem.quantity += 1;
//       } else {
//         state.items.push({
//           product: action.payload,
//           quantity: 1,
//         });
//       }
//     },

//     // Remove product completely from cart
//     removeItem: (state, action: PayloadAction<number>) => {
//       state.items = state.items.filter(
//         (item) => item.product.id !== action.payload
//       );
//     },

//     // Increase quantity
//     increaseQuantity: (
//       state,
//       action: PayloadAction<number>
//     ) => {
//       const item = state.items.find(
//         (item) => item.product.id === action.payload
//       );

//       if (item) {
//         item.quantity += 1;
//       }
//     },

//     // Decrease quantity
//     decreaseQuantity: (
//       state,
//       action: PayloadAction<number>
//     ) => {
//       const item = state.items.find(
//         (item) => item.product.id === action.payload
//       );

//       if (item) {
//         if (item.quantity > 1) {
//           item.quantity -= 1;
//         } else {
//           state.items = state.items.filter(
//             (item) => item.product.id !== action.payload
//           );
//         }
//       }
//     },

//     // Clear entire cart
//     clearCart: (state) => {
//       state.items = [];
//     },
//   },
// });

// export const {
//   addItem,
//   removeItem,
//   increaseQuantity,
//   decreaseQuantity,
//   clearCart,
// } = cartSlice.actions;

// export default cartSlice.reducer;


import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import type { Product } from "@/types/product";

interface CartItem {
  product: Product;
  quantity: number;
}

interface CartState {
  items: CartItem[];
}

const initialState: CartState = {
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

      if (existingItem) {
        existingItem.quantity += 1;
      } else {
        state.items.push({
          product: action.payload,
          quantity: 1,
        });
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
        existingItem.quantity +=
          action.payload.quantity;
      } else {
        state.items.push(action.payload);
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

      if (item) {
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