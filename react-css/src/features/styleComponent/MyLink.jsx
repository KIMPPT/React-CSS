import React from "react";
import { styled } from "styled-components";
import { Link } from "react-router-dom";
//react-router-dom의 Link에 styled-component 적용시키기
let StyleLink = styled(Link)`
  font-size: 1.2rem;
  font-weight: bold;
  color: #ff7c0a;
  text-decoration: none;
`;
export default function MyLink({ children, ...rest }) {
  return <StyleLink {...rest}>MyLink</StyleLink>;
}
