import React from "react";
import { styled } from "styled-components";
/*styled-components를 통해서 a 태그를 디자인하고 - padding
onClick 이벤트를 이용해서 alert창을 출력하세요
 > App.js에 MyButton 호출한 후에 출력
*/
let MyButton = styled.a`
  color: ${(props) => props.color};
  padding: ${(props) => props.padding};
  background-color: ${(props) => props.bgc};
  &:hover {
    color: blue;
  }
`;

export default function myButton({ children, ...rest }) {
  console.log(rest)
  return <MyButton {...rest}>{children}</MyButton>;
}
