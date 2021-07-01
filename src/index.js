import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { load, save } from "redux-localstorage-simple";
import { Provider } from "react-redux";
import { composeWithDevTools } from "redux-devtools-extension";
import "./app.css";
import reportWebVitals from "./reportWebVitals";
import RootReducer from "./redux/rootReducer";
import { tokenMiddleware } from "./middleware";

export const store = createStore(
  RootReducer,
  load(),
  composeWithDevTools(applyMiddleware(thunk, tokenMiddleware, save()))
);

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
