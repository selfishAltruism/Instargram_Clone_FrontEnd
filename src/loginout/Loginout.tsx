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
        <span>Instargram Clone</span>
        <form onSubmit={handleSubmit(onSubmit)}>
          <input type="text" {...register("id")} />
          <input type="text" {...register("password")} />
          <input type="submit" value="로그인" />
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
