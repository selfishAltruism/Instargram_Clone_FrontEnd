import { useState, useRef } from "react";

import Logout from "./loginout/Logout";

import "./App.css";

type PageState =
  | "logoff-login"
  | "logoff-signin"
  | "logoff-searchpassword"
  | "login";

function App() {
  const [pageState, SetPageState] = useState<PageState>("logoff-login");

  const userKey = useRef<string>("");

  return <>{pageState.split("-")[0] === "logoff" ? <Logout /> : null}</>;
}

export default App;
