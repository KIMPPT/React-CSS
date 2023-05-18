import React from "react";
import { styled } from "styled-components";
let Title = styled.h1`
  color: blue;
`;

//let StyleButton 이라는 이름으로 a태그에 color값, background-color값을 이용하여 작성
let StyleButton = styled.a`
  color: red;
  background-color: black;
`;
export default function StyleComp() {
  return (
    <div>
      <Title>스타일 컴포넌트입니다</Title>
      <StyleButton>버튼입니다</StyleButton>
    </div>
  );
}
