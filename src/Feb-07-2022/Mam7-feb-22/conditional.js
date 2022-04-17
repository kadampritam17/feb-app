import React from "react";
import { useState } from "react";
import pic from "../images/birds.jpg";
import pic2 from "../images/birds1.jpg";


export default function Conditional() {
  var [flag, setFlag] = useState(false);
  return (
    <div>
      <input
        type="checkbox"
        onChange={(e) => {
          if (e.target.checked) setFlag(true);
          else setFlag(false);
        }}
      />

      {flag ? <img src={pic} width="150" height="100" alt="p1" /> : null}

      {!flag && <img src={pic2} width="150" height="100" alt="p2" />}
    </div>
  );
}
