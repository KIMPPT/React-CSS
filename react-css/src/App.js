import "./App.css";
import CounterComp from "./features/counter/CounterComp";
import InputForm from "./features/inputform/InputForm";
import StyleComp from "./features/styleComponent/StyleComp";
import StyleButton from "./features/styleComponent/StyleButton";
import MyButton from "./features/styleComponent/MyButton";
function App() {
  return (
    <div className="App">
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
        fontsize="1rem"
        onClick={(e) => {
          e.preventDefault();
          console.log("이벤트");
        }}
      >
        버튼
      </StyleButton>
      <MyButton color="red" padding="5px" bgC="rgba(0,255,0,0.5)" onClick={()=>alert("클릭하였습니다")}>
        A태그
      </MyButton>
    </div>
  );
}

export default App;
