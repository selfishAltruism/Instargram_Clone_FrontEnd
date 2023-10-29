import { useForm, SubmitHandler } from "react-hook-form";

import "./SearchPWForm.css";

type SearchPWIFormInput = {
  email: string;
};

function SearchPWForm() {
  const { register, handleSubmit } = useForm<SearchPWIFormInput>();
  const onSubmit: SubmitHandler<SearchPWIFormInput> = (data) =>
    console.log(data);

  return (
    <>
      <span>로그인에 문제가 있나요?</span>
      <span>이메일을 작성해주시면</span>
      <span>이메일을 통해 비밀번호를 찾겠습니다.</span>
      <form className="searchPWForm" onSubmit={handleSubmit(onSubmit)}>
        <input
          className="emailInput"
          placeholder="사용자 이메일"
          type="text"
          {...register("email")}
        />
        <input className="submitInput" type="submit" value="비밀번호 찾기" />
      </form>
    </>
  );
}

export default SearchPWForm;
