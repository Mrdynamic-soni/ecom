import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: "cartSlice",
    initialState: {
        cartItems: []
    },
    reducers: {
        updateCartItems: (state, action) => {
            const newCartData = action?.payload;
            return { ...state, cartItems:  [...state?.cartItems, newCartData] }
        }
    }
})

export default cartSlice.reducer;
export const { updateCartItems } = cartSlice.actions