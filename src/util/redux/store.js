import { configureStore } from "@reduxjs/toolkit"
import userslice from "./slices/userslice";
import cartSlice from "./slices/cartSlice";

const store = configureStore({
    reducer: { userslice, cartSlice }
})
export default store;