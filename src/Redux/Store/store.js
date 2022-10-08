import { configureStore } from "@reduxjs/toolkit";
import loginReducer from '../Slice/loginSlice.js'
const store = configureStore({
    reducer: {
        login: loginReducer
    }
});

export default store;