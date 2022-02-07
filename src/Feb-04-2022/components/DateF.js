import { useState } from "react"
import React, { Component }  from 'react';


const DateF = () => {
    // let dataOne = "2022-02-04"
    // var dataObject = new Date(dataOne)
    // const month = dataObject.toLocaleString('default', {month :'long'})

    const [mydate, setMyDate] = useState("")
    let newDate = new Date(mydate)
    // const month = newDate.toLocaleString('default', {month :'long'})
// var m = mydate.getMonth()
    return(
        <div>
            <input type="date" onChange={(event) =>{setMyDate(event.target.value)}}></input>
            <p>{newDate.toLocaleString('default', {day :'2-digit'})}-{newDate.toLocaleString('default', {month :'2-digit'})}-{newDate.getFullYear()}</p>
        </div>
    )
}

export default DateF;
