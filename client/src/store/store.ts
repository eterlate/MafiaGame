import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./reducers/authSlice";


// export const setupStore = () => {
//     return configureStore({
//         reducer: rootReducer,
//         devTools: true
//     })
// }

export const store = configureStore({
    reducer:{
        auth: authReducer
    },
    devTools:true
}) 

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch