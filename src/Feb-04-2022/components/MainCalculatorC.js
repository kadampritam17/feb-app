import React from "react";
import CalculatorC from "./CalculatorC"

export default class MainCalculatorC extends React.Component {
  state = { num1: 0, num2: 0, op:"" };

 
  render() {
    return (
      <div>
        Number1 : <input
          type="number"
          onBlur={(e) => {
            this.setState({ num1: e.target.value });
          }}
        ></input>
        Number2 : <input
          type="number"
          onBlur={(e) => {
            this.setState({ num2: e.target.value });
          }}
        ></input>
        <select onChange={(e) => { this.setState({ op: e.target.value }); }}>
        <option>Select Operation</option>
          <option value="+">Addition(+)</option>
          <option value="-">Subtraction(-)</option>
          <option value="*">Multiplication(*)</option>
          <option value="/">Division(/)</option>
        </select>
        
        <CalculatorC num1={this.state.num1} num2={this.state.num2} op={this.state.op}></CalculatorC>
      </div>
    );
  }
}
