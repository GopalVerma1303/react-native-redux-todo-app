import { Provider } from "react-redux";
import React from 'react'
import Navigation from './src/navigation'
import store from "./src/redux/store";

export default function App() {
  return (
    <>
      <Provider store={store}>
        <Navigation />
      </Provider>
    </>
  );
}
