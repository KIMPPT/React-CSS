import React from "react";
import { styled } from "styled-components";
/*styled-components 를 이용해 버튼 만들기*/
let Button = styled.a`
  color: ${(props) => props.color};
  background-color: ${(props) => props.bgcolor};
  /*font-size 크기를 받아와서 그 크기대로 출력 */
  font-size: ${(props) => props.fontsize};
`;
//...rest는 나머지 연산자로 남은 매개변수의 값들을 배열/객체로 들고온다
export default function StyleButton({ children, ...rest }) {
  //console.log(children);
  //console.log에서 볼 때는 ...을 빼고 쳐야 한다
  //console.log(rest);
  //위의 props는 rest가 되어서 props.color는 rest.color 즉, rest 객체 중 color의 값을 들고온다
  return (
    <div>
      {/*아래 ...은 스프레드 연산자로 안의 값을 풀어서 씀 */}
      <Button {...rest}>{children}</Button>
    </div>
  );
}
