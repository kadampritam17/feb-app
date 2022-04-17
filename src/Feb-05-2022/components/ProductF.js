import React from 'react'
import { useState } from "react";

const Http =() => {

    const [data,setData] =useState('')
    const [productName,setProductName] =useState('')
    const [productCost,setProductCost] =useState('')
    const [productInformation,setProductInformation] =useState('')
    const [productExpiryDate,setProductExpiryDate] =useState('')

    const productNameFunction =(event)=>{
        setProductName(event.target.value)
    }

    const productCostFunction =(event)=>{
        setProductCost(event.target.value)
    }

    const productInformationFunction =(event)=>{
        setProductInformation(event.target.value)
    }

    const productExpiryDateFunction =(event)=>{
        setProductExpiryDate(event.target.value)
    }


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

    const sendData = ()=>{

        fetch("http://localhost:9090/product/add", {
            "method": "POST",
            "headers":{'Content-Type':'application/json'},
            "body": JSON.stringify({
             productName: productName,
             productInformation: productInformation,
             productCost: productCost,
             productExpiryDate: productExpiryDate,
           })
          })
    }

    const getData1=(e)=>
    {

        var opts = data.map((obj)=>{return <option>{obj.productName} </option>})    
        return opts
    }

    return (
        <div>
            <div className="class1"></div>
            <button type="button" onClick={getData}>Get</button>
            <select>
           {getData1}
        </select>
            <p>Product Name : <input type="text" onChange={productNameFunction} ></input></p>
            <p>Product Cost : <input type="text" onChange={productCostFunction} ></input></p>
            <p>Product Information : <input type="text" onChange={productInformationFunction} ></input></p>
            <p>Product Expiry Date : <input type="text" onChange={productExpiryDateFunction} ></input></p>
            <button type="button" onClick={sendData}>Add Product</button>
        </div>
    )
}

export default Http