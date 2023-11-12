import { useForm, SubmitHandler } from "react-hook-form";
import { useCallback } from "react";
import axios from "axios";

import "./SigninForm.css";

import { BASEURL } from "../App";

type SigninIFormInput = {
  email: string;
  name: string;
  id: string;
  password: string;
};

const signinreq = axios.create({
  baseURL: "http://127.0.0.1:12010/",
  timeout: 1000,
  headers: {
    "Content-Type": "application/json",
  },
});

const signinPost = async (parameter: SigninIFormInput) => {
  try {
    const res = await signinreq({
      url: "/signup",
      method: "post",
      data: {
        email: parameter.email,
        name: parameter.name,
        id: parameter.id,
        password: parameter.password,
      },
    });
    if (res.status === 300) console.log("your id is already sigin");
    if (res.status === 301) console.log("your email is already sigin");
  } catch (error) {
    console.log("can't use signin system", error);
  }
};

function SigninForm() {
  const { register, handleSubmit } = useForm<SigninIFormInput>();
  const onSubmit: SubmitHandler<SigninIFormInput> = (data) => {
    signinPost({
      email: data.email,
      name: data.name,
      id: data.id,
      password: data.password,
    });
  };
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
        <input className="submitInput" type="submit" value="가입" />
      </form>
    </>
  );
}

export default SigninForm;
