import { useSelector, useDispatch } from "react-redux";
import {
  useStateDispatch,
  useStateSelector,
  signin,
  UserState,
} from "../store";
import { BASEURL } from "../App";

import { useState, createContext, Provider, useEffect } from "react";

import "./Logout.css";

import LoginForm from "./LoginForm";
import SigninForm from "./SigninForm";
import SearchPWForm from "./SearchPWForm";
import { PageState } from "../store";
import axios from "axios";

type LoginContext = {
  id?: string;
  SetId?: React.Dispatch<React.SetStateAction<string>>;
  pw?: string;
  SetPw?: React.Dispatch<React.SetStateAction<string>>;
};

export const loginContext = createContext<LoginContext>({});

const PostLogIn = async (id: string, pw: string) => {
  try {
    const res = await axios({
      url: "/trylogin",
      method: "post",
      baseURL: BASEURL,
      data: {
        id: id,
        pw: pw,
      },
    });
  } catch {}
};

function Logout(props: any) {
  const dispatch = useStateDispatch();
  const pageState: PageState = useStateSelector((state) => state.pageState);
  const userState: UserState = useStateSelector((state) => state.userState);

  const [id, SetId] = useState("");
  const [pw, SetPw] = useState("");

  useEffect(() => {}, [id, pw]);

  return (
    <loginContext.Provider value={{ id, pw, SetId, SetPw }}>
      <div className="loginoutPageContainer">
        <div className="loginoutDiv">
          <span className="loginoutTitle">Instargram Clone</span>
          {pageState.actionState === "login" ? (
            <LoginForm />
          ) : pageState.actionState === "signin" ? (
            <SigninForm />
          ) : (
            <SearchPWForm />
          )}
        </div>
        <div className="signinDiv">
          {pageState.actionState === "login" ? (
            <>
              <span>계정이 없으신가요?</span>
              <button
                onClick={() => {
                  dispatch(signin());
                }}
              >
                가입하기
              </button>
            </>
          ) : pageState.actionState === "signin" ? (
            <>
              <span>계정이 있으신가요?</span>
              <button>로그인</button>
            </>
          ) : (
            <>
              <button>로그인 화면으로 돌아가기</button>
            </>
          )}
        </div>
      </div>
    </loginContext.Provider>
  );
}

export default Logout;
