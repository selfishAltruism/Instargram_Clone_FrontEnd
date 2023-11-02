import { useState, useRef } from "react";
import { Provider, createStoreHook } from "react-redux";
import { createStore } from "redux";

import Logout from "./logout/Logout";
import Home from "./login/Home";
import Post from "./login/Post";
import PostDetail from "./login/PostDetail";

import "./App.css";
import Message from "./login/Message";

export type PageState =
  | { loginState: false; actionState: "login" | "signin" | "searchPW" }
  | { loginState: true; actionState: "home" | "homePostDetail" };

type Action =
  | { type: "login" | "home" }
  | { type: "signin" }
  | { type: "searchPW" }
  | { type: "logout" }
  | { type: "homePostDetail" };

let pageState: PageState = { loginState: true, actionState: "home" };

function PageStateReducer(state = pageState, action: Action): PageState {
  const pageStateCopy = { ...state };
  switch (action.type) {
    case "login":
      console.log("!!");
      pageStateCopy.loginState = true;
      pageStateCopy.actionState = "home";
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
    case "homePostDetail":
      pageStateCopy.loginState = true;
      pageStateCopy.actionState = "homePostDetail";
      return pageStateCopy;
    case "home":
      console.log("!!");
      pageStateCopy.loginState = true;
      pageStateCopy.actionState = "home";
      return pageStateCopy;
    default:
      return pageStateCopy;
  }
}

let store = createStore(PageStateReducer);

function App() {
  return (
    <Provider store={store}>
      {/* {!pageState.loginState ? <Logout /> : <Home />} */}
      <Message />
    </Provider>
  );
}

export default App;
