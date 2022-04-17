import {useState} from "react"
//initialize state
import {useDispatch, useSelector} from "react-redux"
//useDispatch-change state   useSelector-create store's subscriber
import React from 'react';

export default function Login() 
{
    let [user,setUser]=useState("")
    let [pwd,setPwd]=useState("")
    let dispatch = useDispatch()
    const stateEx1=useSelector(state=>state);
    console.log(stateEx1);
    let [login,setLogin]=useState(false);
    let [flag,setFlag]=useState(false);
    let verify=()=>
    {
        if(user === "Pritam" && pwd==='123')
        {
            dispatch({type:'change',payload:user})
            console.log("Login successful");
            setLogin(true);
        }
        else
        {
            console.log("Invalid username or password");
        }
        setFlag(true)
    }

    return(
    <div>
        Enter User Name:<input type="text" onBlur={(e)=>setUser(e.target.value)}></input>
        Enter Password:<input type="text" onBlur={(e)=>setPwd(e.target.value)}></input>
        <button onClick={verify}>Login</button>
       {flag ? <div>{login ? <p>Welcome {user}</p>:<p>Incorrect Password</p>}</div> :null}
    </div>)
}
