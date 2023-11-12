import { useState, useRef } from "react";
import { Provider } from "react-redux";

import { pageStateAction, useStateSelector } from "./store";

import "./App.css";

import Logout from "./logout/Logout";
import Home from "./login/Home";
import Post from "./login/Post";
import PostDetail from "./login/PostDetail";
import Message from "./login/Message";

export const BASEURL = "http://127.0.0.1:12010/";

function App() {
  const pageState = useStateSelector((state) => state.pageState);
  return (
    <>
      {!pageState.loginState ? <Logout /> : <Home />}
      {/* <Message /> */}
    </>
  );
}

export default App;
