import { createSlice } from "@reduxjs/toolkit";

export const slice = createSlice({
  name: "mySlice",
  initialState: {
    isOpen: false,
    wishlist: [],
    isSetWishes: true,
  },
  reducers: {
    setIsOpen: (state, action) => {
      state.isOpen = action.payload;
    },
    setWishlist: (state, action) => {
      state.wishlist = action.payload;
    },
    setIsSetWishes: (state, action) => {
      state.isSetWishes = action.payload;
    },
  },
});

export const { setIsOpen, setWishlist, setIsSetWishes } = slice.actions;
