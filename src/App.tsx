import { useState, useRef } from "react";

import Loginout from "./loginout/Loginout";

import "./App.css";

type PageState =
  | "logoff-login"
  | "logoff-signin"
  | "logoff-searchpassword"
  | "login";

function App() {
  const [pageState, SetPageState] = useState<PageState>("logoff-login");

  const userKey = useRef<string>("");

  return <>{pageState.split("-")[0] === "logoff" ? <Loginout /> : null}</>;
}

export default App;
