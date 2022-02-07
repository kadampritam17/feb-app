import "./CharCountF.css"
import React  from 'react';



export default function CharCountF(props) {
  let text = props.children;
  return (
    <div className="content">
      Text : {text}
      <p>Char count : {text.length}</p>
    </div>
  );
}
