import { useState } from "react";
import React, { Component }  from 'react';


export default function InputF() {
  let entryData = "Lets start";
  /* const arr = useState("Lets Start3");
  const entryData2 = arr[0];
  const setEntrydata2 = arr[1]; */

  const [entryData2, setEntrydata2] = useState("Lets Start2");
  const [num, setNum] = useState(0);

  const incr=()=> {
    setNum( num + 1 );
  }
  // const decr=()=> {
  //   setNum( num- 1 );
  // }
  return (
    <div>
      <hr></hr>
      <input
        type="text"
        onInput={(e) => {
          setEntrydata2(e.target.value);
        }}
      />
      <br></br>
      Your Entered input is : <span>{entryData2}</span>
      <hr></hr>
      <button onClick={incr}>Increment</button>
      <button onClick={()=> { setNum( num- 1 ) }}>Decrement</button>
      <p>{num}</p>

    </div>
  );
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
