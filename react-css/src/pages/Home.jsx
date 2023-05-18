import React from "react";
import CounterComp from "../features/counter/CounterComp";
import InputForm from "../features/inputform/InputForm";
import StyleComp from "../features/styleComponent/StyleComp";
import StyleButton from "../features/styleComponent/StyleButton";
import MyButton from "../features/styleComponent/MyButton";
import CommonButton from "../features/styleComponent/CommonButton";
import SpecialButton from "../features/styleComponent/SpecialButton";
import MyLink from "../features/styleComponent/MyLink";
export default function Home() {
  return (
    <div>
      <MyLink to="/about"></MyLink>
      <CounterComp />
      <InputForm />
      <StyleComp />
      <StyleButton color="red" bgcolor="pink" fontsize="3rem">
        버튼
      </StyleButton>
      <StyleButton color="red" bgcolor="pink" fontsize="2rem">
        버튼
      </StyleButton>
      <StyleButton
        color="red"
        bgcolor="pink"
        fsize="1rem"
        onClick={(e) => {
          e.preventDefault();
          console.log("이벤트");
        }}
      >
        버튼
      </StyleButton>
      <MyButton
        color="red"
        padding="5px"
        bgc="rgba(0,255,0,0.5)"
        onClick={() => alert("클릭하였습니다")}
      >
        A태그
      </MyButton>
      <CommonButton color="blue">버튼 확인</CommonButton>
      <SpecialButton mode="dark">ABC</SpecialButton>
    </div>
  );
}
