import React, { useState } from "react";

export default function UpperF() {

    const [inputData, setInputData] = useState('')
    const [upperCase, setUpperCase] = useState('to upper')

    function convert(){
        let input = inputData
        let upper = input.toUpperCase()
        setUpperCase(upper)
        setInputData(upper)
    }
  return (
    <div>
      <input type="text" onChange={(e)=>setInputData(e.target.value)} value={inputData}></input>
      <button onClick={convert}>Convert To Upper</button>
      <span>Converted From : {inputData} == To this : {upperCase}</span>
    </div>
  );
}
