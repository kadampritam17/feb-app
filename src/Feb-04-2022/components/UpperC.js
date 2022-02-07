import React from "react";

export default class UpperC extends React.Component {
  state = { inputData: "", uc: "" };

  convert = () => {
    let v = this.state.inputData;
    let uk = v.toUpperCase();
    // this.setState({ uc: uk });
    this.setState({ inputData: uk });
  };
  render() {
    return (
      <div>
        <input
          type="text"
          onInput={(e) => {
            this.setState({ inputData: e.target.value })
          }}
          value={this.state.inputData}
        ></input>
        <button onClick={this.convert}>OK</button>
        {/* <span>Converted : {this.state.uc}</span> */}
      </div>
    );
  }
}
