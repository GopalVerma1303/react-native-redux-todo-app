import { applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import React from 'react'
import Navigation from './src/Navigation'

import indexReducer from "./src/redux/reducers/index.reducer";
const store = configureStore({
  reducer: indexReducer,
  middleware: [thunk]
});

export default function App() {
  return (
    <>
      <Provider store={store}>
        <Navigation />
      </Provider>
    </>
  );
}
