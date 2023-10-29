import { useForm, SubmitHandler } from "react-hook-form";

import "./LoginForm.css";

type LoginIFormInput = {
  id: string;
  password: string;
};

function LoginForm() {
  const { register, handleSubmit } = useForm<LoginIFormInput>();
  const onSubmit: SubmitHandler<LoginIFormInput> = (data) => console.log(data);

  return (
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
  );
}

export default LoginForm;
