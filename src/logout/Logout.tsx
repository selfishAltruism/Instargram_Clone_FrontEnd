import { useSelector, useDispatch } from "react-redux";

import "./Logout.css";

import LoginForm from "./LoginForm";
import SigninForm from "./SigninForm";
import SearchPWForm from "./SearchPWForm";
import { PageState } from "../store";

function Logout(props: any) {
  const dispatch = useDispatch();
  const pageState: PageState = useSelector((state: PageState) => state);

  return (
    <div className="loginoutPageContainer">
      <div className="loginoutDiv">
        <span className="loginoutTitle">Instargram Clone</span>
        {pageState!.actionState === "login" ? (
          <LoginForm />
        ) : pageState!.actionState === "signin" ? (
          <SigninForm />
        ) : (
          <SearchPWForm />
        )}
      </div>
      <div className="signinDiv">
        {pageState!.actionState === "login" ? (
          <>
            <span>계정이 없으신가요?</span>
            <button
              onClick={() => {
                dispatch({ type: "signin" });
              }}
            >
              가입하기
            </button>
          </>
        ) : pageState!.actionState === "signin" ? (
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
  );
}

export default Logout;
