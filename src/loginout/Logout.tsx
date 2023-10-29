import { useForm, SubmitHandler } from "react-hook-form";

import "./Logout.css";

import LoginForm from "./LoginForm";
import SigninForm from "./SigninForm";

type SearchPasswordIFormInput = {
  id: string;
};

function Logout() {
  return (
    <div className="loginoutPageContainer">
      <div className="loginoutDiv">
        <span className="loginoutTitle">Instargram Clone</span>
        {/* <SigninForm /> */}
        <LoginForm />
      </div>
      <div className="signinDiv">
        <span>계정이 없으신가요?</span>
        <button>가입하기</button>
      </div>
    </div>
  );
}

export default Logout;
