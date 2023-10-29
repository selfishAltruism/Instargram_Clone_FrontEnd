import { useState, useRef } from "react";
import { Provider, createStoreHook } from "react-redux";
import { createStore } from "redux";

import Logout from "./loginout/Logout";

import "./App.css";

export type PageState =
  | { loginState: false; actionState: "login" | "signin" | "searchPW" }
  | { loginState: true; actionState: "main" };

type Action =
  | { type: "login" }
  | { type: "signin" }
  | { type: "searchPW" }
  | { type: "logout" };

let pageState: PageState = { loginState: false, actionState: "login" };

function PageStateReducer(state = pageState, action: Action): PageState {
  const pageStateCopy = { ...state };
  switch (action.type) {
    case "login":
      pageStateCopy.loginState = true;
      pageStateCopy.actionState = "main";
      return pageStateCopy;
    case "signin":
      pageStateCopy.actionState = "signin";
      return pageStateCopy;
    case "searchPW":
      pageStateCopy.actionState = "searchPW";
      return pageStateCopy;
    case "logout":
      pageStateCopy.loginState = false;
      pageStateCopy.actionState = "login";
      return pageStateCopy;
    default:
      return pageStateCopy;
  }
}

let store = createStore(PageStateReducer);

function App() {
  return (
    <Provider store={store}>
      {!pageState.loginState ? <Logout /> : null}
    </Provider>
  );
}

export default App;
