import { useForm, SubmitHandler } from "react-hook-form";

import "./SigninForm.css";

type SigninIFormInput = {
  email: string;
  name: string;
  id: string;
  password: string;
};

function SigninForm() {
  const { register, handleSubmit } = useForm<SigninIFormInput>();
  const onSubmit: SubmitHandler<SigninIFormInput> = (data) => console.log(data);

  return (
    <>
      <button>Google으로 로그인</button>
      <span>- or -</span>
      <form className="signinoutForm" onSubmit={handleSubmit(onSubmit)}>
        <input
          className="emailInput"
          placeholder="사용자 이메일"
          type="text"
          {...register("email")}
        />
        <input
          className="nameInput"
          placeholder="사용자 성명"
          type="text"
          {...register("name")}
        />
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
    </>
  );
}

export default SigninForm;
