import { configureStore } from "@reduxjs/toolkit";
import thunk from "redux-thunk";
import indexReducer from "./reducers/index.reducer";
const store = configureStore({
    reducer: indexReducer,
    middleware: [thunk]
});
export default store