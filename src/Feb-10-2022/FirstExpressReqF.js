import React, { useState } from 'react'

/* 
$npm install cors

const cors = require('cors')

app.use(cors())
 */

export default function FirstExpressReqF() {

    const [data, setData] = useState();
    const [flag, setFlag] = useState(false);
      if (!flag) {
        fetch(`http://localhost:8000/planet/jupiter`, {
        method: "GET",
      })
        .then((response) => {
          return response.json();
        })
        .then((jsondataarr) => {
          setData(jsondataarr);
          setFlag(true);
        })
        .catch((err) => {
          console.log(err);
        });
      }

  return (
    <div>FirstExpressReqF {data}</div>
  )
}
