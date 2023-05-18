import React from "react";
//module로 쓰지 않을 때는 다음과 같이 들고 올 수 있다.
// import './sass.scss'
//만약 module로 들고오고 싶다면 파일이름을 변경해서 다음과 같이 들고 올 수 있다
import style from "./sass.module.scss";
export default function SassComp() {
  return <div className={style.color}>SassComp</div>;
}
