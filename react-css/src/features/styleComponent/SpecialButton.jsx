import React from "react";
import CommonButton from "./CommonButton";
import { styled } from "styled-components";
let Button=styled(CommonButton)`
    background-color: red;
`
export default function SpecialButton() {
  return <div>
    <h3>SpecialButton</h3>
    <Button>abc</Button>
  </div>;
}
