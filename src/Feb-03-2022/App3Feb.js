// import App1C, * as mylib from "./components/App1C";
// import { App2C } from "./components/App1C";
// import JSXDemoC from "./components/JSXDemoC";
import CalculatorC from "./components/CalculatorC";
import Square from "./components/Square";
import MessageRepeater from "./components/MessageRepeater";
import React  from 'react';



function App3Feb() {
  // console.log(mylib.PI)
  return (
    <>
  <div>
      {/* Trial of mams code 
      <mylib.App1/>
    <mylib.App34></mylib.App34>
    <JSXDemoC></JSXDemoC> 
    <App1C></App1C>
    <App2C></App2C> */}


{/* Assignment */}
      <div>
        CalculatorC is as below: <br></br>
        <CalculatorC num1="40" num2="10" op="+"></CalculatorC>
        <CalculatorC num1="20" num2="10" op="-"></CalculatorC>
        <CalculatorC num1="2" num2="2" op="*"></CalculatorC>
        <CalculatorC num1="100" num2="25" op="/"></CalculatorC>
        Wrong Entry trial :{" "}
        <CalculatorC num1="100" num2="25" op="l"></CalculatorC>
      </div>
      <hr></hr>
      <div>
        Square is as below : <Square num1="40"></Square>
      </div>
      <hr></hr>
      <div>
        MessageRepeater is as below :{" "}
        <MessageRepeater num="100"></MessageRepeater>
      </div>
    </div>
    </>
  );
}
export default App3Feb;
