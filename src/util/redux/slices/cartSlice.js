import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: "cartSlice",
    initialState: {
        cartItems: []
    },
    reducers: {
        updateCartItems: (state, action) => {
            const newCartData = action?.payload;
            return { ...state, cartItems: [...state?.cartItems, newCartData] }
        },
        deleteItem: (state, action) => {
            const dataTobeDeleted = action?.payload;
            const index = state.cartItems.findIndex((item) => item.id === dataTobeDeleted);
            console.log(index);
        }
    }
})

export default cartSlice.reducer;
export const { updateCartItems, deleteItem } = cartSlice.actions