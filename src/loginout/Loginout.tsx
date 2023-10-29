import { useForm, SubmitHandler } from "react-hook-form";

import "./Loginout.css";

type IFormInput = {
  id: string;
  password: string;
};

function Loginout() {
  const { register, handleSubmit } = useForm<IFormInput>();
  const onSubmit: SubmitHandler<IFormInput> = (data) => console.log(data);

  return (
    <div className="loginoutPageContainer">
      <div className="loginoutDiv">
        <span className="loginoutTitle">Instargram Clone</span>
        <form className="loginoutForm" onSubmit={handleSubmit(onSubmit)}>
          <input
            className="idInput"
            placeholder="사용자 이름"
            type="text"
            {...register("id")}
          />
          <input
            className="passwordInput"
            placeholder="비밀번호"
            type="text"
            {...register("password")}
          />
          <input className="submitInput" type="submit" value="로그인" />
        </form>
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

export default Loginout;
