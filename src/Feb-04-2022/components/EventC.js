import React from 'react'

export default class EventC extends React.Component {
  showAlert(event) {
    alert("Alert clicked" + event.target.value);
  }
  render(){
    return (
      <div>
        <button value=" first" onClick={this.showAlert}>
          Click me
        </button>
        <button value=" second" onClick={this.showAlert}>
          Click me
        </button>
        <button value=" third" onClick={this.showAlert}>
          Click me
        </button>
        <button value=" fourth" onClick={this.showAlert}>
          Click me
        </button>
      </div>
    );
  }
}

{
  /* <button
  value=" my test component"
  onClick={(e) => {
    alert("button clicked" + e.target.value);
  }}
>
  Click me
</button>; */
}
