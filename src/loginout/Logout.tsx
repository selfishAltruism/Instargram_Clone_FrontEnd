import { useForm, SubmitHandler } from "react-hook-form";

import "./Logout.css";

import LoginForm from "./LoginForm";

type SigninIFormInput = {
  email: string;
  name: string;
  id: string;
  password: string;
};

type SearchPasswordIFormInput = {
  id: string;
};

function Logout() {
  return (
    <div className="loginoutPageContainer">
      <div className="loginoutDiv">
        <span className="loginoutTitle">Instargram Clone</span>
        <LoginForm />
        <span>-또는-</span>
        <button>Google으로 로그인</button>
        <button>비밀번호를 잊으셨나요?</button>
      </div>
      <div className="signinDiv">
        <span>계정이 없으신가요?</span>
        <button>가입하기</button>
      </div>
    </div>
  );
}

export default Logout;
