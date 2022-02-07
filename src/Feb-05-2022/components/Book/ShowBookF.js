import React, { useState } from "react";
import "./ShowBookF.css";


export default function ShowBookF() {

    // const [getBook, setGetBook] = useState([]);
    const [data,setData] =useState([])
    // const ShowAllBook = () => {

    //     fetch("http://localhost:9090/book/show",{
    //       "method": "POST",
    //     })
    //     .then(response=> response.json())
    //     .then((data)=>{
    //       setData(data)
    //         console.log(data);
    //     })
    // }

    const componentDidMount = () =>
    {
        console.log("here")
        fetch("http://localhost:9090/book/show")
        .then(response=> response.json())
        .then(obj=>{
          setData({
            data: obj
          } )
            console.log(obj);
        })
        .catch(err => { console.log(err); 
        });
        // var promise = fetch("http://localhost:9090/book/show", {
        //                "method": "POST",
        //              })
        // var anotherpromise =promise.then(response => {
        //                  return response.json()
        //             })
        // anotherpromise.then(jsondataarr => {
        //                setData({
        //                  data: jsondataarr
        //                } )})
                     
        // promise.catch(err => { console.log(err); 
        //              });

    }


    const getData=()=>
    {
        var opts = data.map((obj)=>{return <option>{obj.productName} </option>})    
        return opts
    }


  return (
    <div>
      <div className="class1">
        {/* <button type="button" onClick={ShowAllBook}>Get</button> */}
        <select>
           {getData}
        </select>
        </div>
    </div>
  );
}
