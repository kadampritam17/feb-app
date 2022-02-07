import React from "react";
import JSXDemoC from "./JSXDemoC";
import JSXDemoF from "./JSXDemoF";
import MyTableC from "./MyTableC";
import MyTableF from "./MyTableF";
import ExplorePropsF from "./ExplorePropsF";



class App1C extends React.Component {
  //react container calls it
  render() {
    let x = 55;
    let obj = { name: "pritam", location: "nsk" };
    let str = JSON.stringify(obj);
    let color = ["red", "green"];
    let arrOfObjects = [
      { prodName: "shoes", prodCost: 3000 },
      { prodName: "slipper", prodCost: 1500 },
      { prodName: "heels", prodCost: 2000 },
    ];

    var obj1 = { cost: 30 };
    return (
      <div>
        <ExplorePropsF
          productArray={arrOfObjects}
          person={str}
          flag={true}
          color={color}
          num="12"
          message="its nice day"
          info={obj1}
        ></ExplorePropsF>
        {/* <div>{color}</div>
        <div className="container">This is hi from class components</div>
        <JSXDemoC></JSXDemoC>
        <JSXDemoF></JSXDemoF>
       <MyTableC num="6" range="5" ></MyTableC>
        <MyTableC num={x} range="5"></MyTableC>
        <MyTableF num="2" range="5"></MyTableF>
        <MyTableF num="3" range="6"></MyTableF>
        <MyTableF num="4" range="3"></MyTableF> */}
      </div>
    );
  }
}
export default App1C;

export const PI = 3.14


export  class App2C extends React.Component {
  render() {
    return <div>Hello</div>;
  }
}




function App1() {
  return (
    <>  {/*  jsx fragment */}
    <div>
      this is default function APP1
    </div>
    <p>paragraph is here</p>
    </>
  );
}
export {App1};


export  function App34() {
  return <div>vdfvd</div>;
}
