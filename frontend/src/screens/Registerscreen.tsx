import { useState } from "react";

function Registerscreen() {
  const [email, setEmail] = useState("");
  const [pwd, setPwd] = useState("");
  const [notiEmail, setNotiEmail] = useState("");
  const [notiPwd, setNotiPwd] = useState("");

  const VALID_SUCCESS = {
    EMAIL: "✅ 올바른 이메일 형식입니다.",
    PWD: "✅ 비밀번호 형식을 만족합니다. ",
  };
  const VALID_FAIL = {
    EMAIL: "❌ 이메일 주소를 형식에 맞게 입력해주세요.",
    PWD: "❌ 다음 조건을 포함해주세요. ",
  };

  function validateEmail(email: string) {
    const regex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
    return regex.test(email);
  }

  function validatePwd(pwd: string) {
    const hasLetter = /[a-zA-Z]/.test(pwd);
    const hasNumber = /[0-9]/.test(pwd);
    const hasSpecialChar = /[!@#$%^*+=-]/.test(pwd);
    const isValidLength = /^.{8,}$/.test(pwd); // pwd.length >= 8
    if (hasLetter && hasNumber && hasSpecialChar && isValidLength) {
      return { isValid: true, message: "" };
    } else {
      const errors = [];
      if (!hasLetter) errors.push("영문자");
      if (!hasNumber) errors.push("숫자");
      if (!hasSpecialChar) errors.push("특수문자");
      if (!isValidLength) errors.push("8자 이상");
      return {
        isValid: false,
        message: errors.join(", "),
      };
    }
  }

  return (
    <>
      <p>이메일</p>
      <input
        name="이메일"
        type="email"
        title="이메일"
        placeholder="예) todo@gmail.com"
        onChange={(e) => {
          const result = validateEmail(e.target.value);
          if (result) setNotiEmail(VALID_SUCCESS.EMAIL);
          else setNotiEmail(VALID_FAIL.EMAIL);
          setEmail(e.target.value);
        }}
      />
      <div>{notiEmail}</div>
      <p />
      <p>비밀번호</p>
      <input
        name="비밀번호"
        type="password"
        title="비밀번호"
        placeholder="영문, 숫자, 특수문자를 포함하여 8자 이상 입력해주세요."
        onChange={(e) => {
          const result = validatePwd(e.target.value);
          if (result.isValid) setNotiPwd(VALID_SUCCESS.PWD);
          else setNotiPwd(VALID_FAIL.PWD + result.message);
          setPwd(e.target.value);
        }}
      />
      <div>{notiPwd}</div>
      <p />
      <button onClick={() => console.log("email: ", email, ", pwd: ", pwd)}>
        submit
      </button>
    </>
  );
}

export default Registerscreen;
