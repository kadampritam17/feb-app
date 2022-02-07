import React from "react";

export default class CalculatorC extends React.Component {
  render() {
    const num1 = parseInt(this.props.num1);
    const num2 = parseInt(this.props.num2);
    const op = this.props.op;
    let result = 0;
    if (op === "+") {
        result = `Addition : ${num1} + ${num2} = ${num1+num2}`;
    }
    else if (op === "-") {
        result = `Subtraction : ${num1} - ${num2} = ${num1-num2}`;
    }
    else if (op === "*") {
        result = `Multiplication : ${num1} * ${num2} = ${num1*num2}`;
    }
    else if (op === "/") {
        result = `Division : ${num1} / ${num2} = ${num1/num2}`;
    }
    else{
        result = `Plz check operator you written`
    }


    return <div>{result}</div>;
  }
}
