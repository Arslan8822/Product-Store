
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import type { favoriteItem, Product } from "@/types/product";
interface FavoritesState {
  items: Product[];
  quantity : number;
}

const initialState: FavoritesState = {
  items: [],
  quantity: 0,
};

const favoritesSlice = createSlice({
  name: "favorites",

  initialState,

  reducers: {
    addFavorite: (
      state,
      action: PayloadAction<Product>
    ) => {
      const exists = state.items.some(
        (product) =>
          product.id === action.payload.id
      );

      if (!exists) {
        state.items.push(action.payload);
      }
    },
 

    removeFavorite: (
      state,
      action: PayloadAction<number>
    ) => {
      state.items = state.items.filter(
        (product) =>
          product.id !== action.payload
      );
    },
     clearFavorite: (state) => {
      state.items = [];
    },
  },
});

export const {
addFavorite,
  removeFavorite,
  clearFavorite,
} = favoritesSlice.actions;

export default favoritesSlice.reducer;