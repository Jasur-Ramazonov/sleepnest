import { createSlice } from "@reduxjs/toolkit";

export const slice = createSlice({
  name: "mySlice",
  initialState: {
    isOpen: false,
    wishlist: [],
  },
  reducers: {
    setIsOpen: (state, action) => {
      state.isOpen = action.payload;
    },
    setWishlist: (state, action) => {
      state.wishlist = action.payload;
    },
  },
});

export const { setIsOpen, setWishlist } = slice.actions;
