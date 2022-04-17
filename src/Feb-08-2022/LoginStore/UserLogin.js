
import React  from 'react'
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

function UserLogin(){
    const userName = useSelector(loginState=>loginState.userName);
    const displayMessage = useSelector(loginState=>loginState.displayMessage);
    const [username, setUserName] = useState();
    const [password, setPassword] = useState();
    const dispatch = useDispatch('');

    const login=()=>{
        dispatch({type : "login", userName : username, password : password});
    } //end of login()
    return(
        <div>
            {displayMessage}<p>,</p>{userName}<p>!</p>
            Enter the UserName : <input type = "text" onBlur = {(event)=>{setUserName(event.target.value)}}></input>
            Enter the Password : <input type = "password" onBlur = {(event)=>{setPassword(event.target.value)}}></input>
            <button onClick = {login()}>Login</button>
        </div>
    )
} //end of UserLogin

export default UserLogin;