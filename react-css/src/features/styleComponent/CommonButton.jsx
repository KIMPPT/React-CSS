import React from "react";
//npm으로 설치 시 @를 이용하여 버전 선택 가능
//npm i styled-components@latest
import { styled } from "styled-components";
let Button = styled.a`
  display: inline-block;
  color: white;
  //background-color는 props로 값 받아오기
  background-color: ${(props)=>props.color};
  padding: 5px 7px;
  border-radius: 25px;
`;
//만든 styled-components에 디자인을 추가하고 싶을 때 원본이 되는 component에 className이 들어가 있어야 한다
//...rest를 통해서 props 값을 다 전달했다면 className도 전달된 상태
export default function CommonButton({children,className,...rest}) {
  return <Button className={className} {...rest}>CommonButton</Button>;
}
