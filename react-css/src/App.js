import "./App.css";
import CounterComp from "./features/counter/CounterComp";
import InputForm from "./features/inputform/InputForm";
import StyleComp from "./features/styleComponent/StyleComp";
import StyleButton from "./features/styleComponent/StyleButton";
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
      <StyleButton color="red" bgcolor="pink" fontsize="1rem">
        버튼
      </StyleButton>
    </div>
  );
}

export default App;
