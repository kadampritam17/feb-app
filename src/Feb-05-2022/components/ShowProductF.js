import React from 'react';

export default function ShowProductF() {

    const [data,setData] =useState([])

    const getData = ()=>{
        var arr = []
        fetch("http://localhost:9090/product/show", {
            "method": "GET"
          })
        .then(response=> response.json())
        .then((data)=>{
            arr.push(JSON.stringify(data));
            console.log(arr);
        })
        setData(arr);
    }

    const getData1=(e)=>
    {

        var opts = data.map((obj)=>{return <option>{obj.productName} </option>})    
        return opts
    }

    
  return (
    <div>
        <select>
           {getData1}
        </select>
    </div>
  );
}
