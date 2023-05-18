import React from "react";
import CommonButton from "./CommonButton";
import { styled } from "styled-components";
let ButtonTest = styled(CommonButton)`
  ${(props) => {
    switch (props.mode) {
      case "dark":
        return `
        background-color: green;
        color:white;   
        `;
      case "light":
        return `
                background-color:white;
                color:green;
                border:solid 2px green;
            `;
    }
  }}
`;
export default function SpecialButton({ children, ...rest }) {
  return (
    <div>
      <h3>SpecialButton</h3>
      <ButtonTest {...rest}>{children}</ButtonTest>
    </div>
  );
}
