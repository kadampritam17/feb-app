import React  from 'react';

export default function EventF() {
  function showAlert(event) {
    alert("Alert clicked" + event.target.value);
  }
  return (
    <div>
      <button value=" first" onClick={showAlert}>
        Click me
      </button>
      <button value=" second" onClick={showAlert}>
        Click me
      </button>
      <button value=" third" onClick={showAlert}>
        Click me
      </button>
      <button value=" fourth" onClick={showAlert}>
        Click me
      </button>
    </div>
  );
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
