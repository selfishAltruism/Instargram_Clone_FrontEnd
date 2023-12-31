import { useSelector, useDispatch } from "react-redux";
import {
  useStateDispatch,
  useStateSelector,
  signin,
  UserState,
  userlogin,
  home,
  login,
} from "../store";
import { BASEURL } from "../App";

import { useState, createContext, Provider, useEffect, useRef } from "react";

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

function Logout(props: any) {
  const dispatch = useStateDispatch();
  const pageState: PageState = useStateSelector((state) => state.pageState);
  const userState: UserState = useStateSelector((state) => state.userState);

  const [id, SetId] = useState("");
  const [pw, SetPw] = useState("");

  const PostLogIn = async (id: string, pw: string) => {
    try {
      const res = await axios({
        url: "/login",
        method: "post",
        baseURL: BASEURL,
        headers: {
          "Content-Type": "application/json",
        },
        data: {
          id: id,
          pw: pw,
        },
      });
      if (res.status === 200) {
        dispatch(
          userlogin({ payload: { id: res.data.id, name: res.data.name } })
        );
        dispatch(login());
      }
      if (res.status === 300) console.log("your input is dismatch with DB");
    } catch (error) {
      console.log("can't use login system", error);
    }
  };

  const useDidMountEffect = (func: any, deps: any[]) => {
    const didMount = useRef(false);

    useEffect(() => {
      if (didMount.current) func();
      else didMount.current = true;
    }, deps);
  };

  useDidMountEffect(() => {
    PostLogIn(id, pw);
  }, [id, pw]);

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
