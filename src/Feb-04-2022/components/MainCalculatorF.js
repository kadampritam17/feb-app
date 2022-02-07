import React, { useState } from "react";

export default function MainCalculatorF() {
  const [num1, setNum1] = useState(0);
  const [num2, setNum2] = useState(0);
  const [result, setResult] = useState("");

  const opFunction = (event) => {
    var result1=0
    var n1 = parseInt(num1)
    var n2 = parseInt(num2)
    if (event.target.value === "+") result1 = n1 + n2;
    else if (event.target.value === "-") result1 = n1 - n2;
    else if (event.target.value === "*") result1 = n1 * n2;
    else if (event.target.value === "/") result1 = n1 / n2;

    setResult(result1);
  };
  return (
    <div>
      Num1 : <input type="number" onChange={(event) => { setNum1(event.target.value); }} ></input>
      Num2 : <input type="number" onChange={(event) => { setNum2(event.target.value); }} ></input>
      <select onChange={opFunction}>
        <option selected disabled>Select Operation</option>
        <option value="+">Addition(+)</option>
        <option value="-">Subtraction(-)</option>
        <option value="*">Multiplication(*)</option>
        <option value="/">Division(/)</option>
      </select>
      <span>{result}</span>
    </div>
  );
}
