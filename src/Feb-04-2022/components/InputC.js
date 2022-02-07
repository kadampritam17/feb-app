import React from "react";

export default class InputC extends React.Component {
  state = { entryData2: "Lets start", num: 0, num1: 0, num2: 0, num3: 0 };

  incr=()=> {
    this.setState({ num1: this.state.num1 + 1 });
  }
  decr=()=> {
    this.setState({ num3: this.state.num3 - 1 });
  }
  render() {
    return (
      <div>
        <hr></hr>
        <div>
        <input
          type="text"
          onInput={(e) => {
            this.setState({ entryData2: e.target.value });
          }}
        />
        <br></br>
        Your Entered input is : <span>{this.state.entryData2}</span>
        </div>

        <hr></hr>

        <div>Increment the number
        <button
          onClick={() => {
            this.setState({ num: this.state.num + 1 });
          }}
        >
          INCREMENT
        </button>
        <br></br>
        Number : <span>{this.state.num}</span>
        </div>

        <hr></hr>

        <div>Increment the number1
        <button onClick={this.incr}>INCREMENT1</button>
        <br></br>
        Number : <span>{this.state.num1}</span>
        </div>

        <hr></hr>

        <div>Decrement the number2

        <button
          onClick={() => {
            this.setState({ num2: this.state.num2 - 1 });
          }}
        >
          Decrement2
        </button>
        <br></br>
        Number2 : <span>{this.state.num2}</span>
        </div>

        <hr></hr>


        <div>Decrement the number3
        <button onClick={this.decr}>DECREMENT3</button>
        <br></br>
        Number3 : <span>{this.state.num3}</span>
        </div>

        <hr></hr>
      </div>
    );
  }
}

/* export default function InputF() {
  let entryData = "Lets start";
  return (
    <div>
      <hr></hr>
      <input
        type="text"
        onInput={(e) => {
          entryData = e.target.value;
          alert(entryData);
        }}
      />
      <br></br>
      Your Entered input is : <span>{entryData}</span>
    </div>
  );
} */
