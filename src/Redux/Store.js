import { configureStore } from "@reduxjs/toolkit";
import shopApiSlice from "./serviec";

const store = configureStore({
    reducer: {
       
        [shopApiSlice.reducerPath]: shopApiSlice.reducer

    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware()
        .concat(shopApiSlice.middleware)

})
export default store;
