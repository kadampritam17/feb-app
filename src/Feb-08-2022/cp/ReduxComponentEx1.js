
import React from 'react'
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

const ReduxComponentEx1=()=>{
    const [enteredName,setEnteredName]=useState();
    const dispatch=useDispatch();//for state change

    //useSelector:to subscriber store 
    const counter=useSelector(state => state.counter);
    const userName=useSelector(state => state.userName);
    const subscriberstate = useSelector(state => state);
    console.log(subscriberstate)
    const setEnteredNameFunction=(event) => {
        setEnteredName(event.target.value);
    }

    const setEnteredNameAction=() => {
       dispatch ({type: 'setUserName' ,value:enteredName})
    }

    const increaseCounterAction=()=>{
        dispatch({type : 'increase' })
    }

    const decreaseCounterAction=()=>{
        dispatch({type : 'decrease' })
    }
    
    return <div>
        <h1>{userName}</h1>
        <div>
            <input type="text" onBlur={setEnteredNameFunction} ></input>
            <p><button type="button" onClick={setEnteredNameAction}>Set new name</button></p>
        </div>
        <h2>{counter}</h2>
        <button onClick={increaseCounterAction} >Increase by 2</button>
        <button onClick={decreaseCounterAction} >Decrease by 2</button>
        
    </div>

}

export default ReduxComponentEx1;