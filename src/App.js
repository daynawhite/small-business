import React from "react";
import { BrowserRouter } from "react-router-dom";
import NavBar from "./containers/NavBar";
import Router from "./Router";
import "./App.css";
import { Provider } from 'react-redux'
import store from './redux/store'

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <NavBar />
        <Router />
      </BrowserRouter>
    </Provider>
  );
}

export default App;