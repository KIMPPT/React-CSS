import "./App.css";
import CounterComp from "./features/counter/CounterComp";
import InputForm from "./features/inputform/InputForm";
import StyleComp from "./features/styleComponent/StyleComp";
function App() {
  return (
    <div className="App">
      <CounterComp />
      <InputForm/>
      <StyleComp/>
    </div>
  );
}

export default App;
