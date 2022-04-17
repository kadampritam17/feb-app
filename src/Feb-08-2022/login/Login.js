import { useState ,} from "react";
import { useDispatch, useSelector } from "react-redux";

export default function Login()
{
    let [user,setUser] = useState('')
    let [pwd,setPwd] = useState('')
    let dispatch = useDispatch();
    const stateEx1=useSelector(state=>state);
    // const login = useSelector(state=>state.login);
    const login=false;

    console.log(stateEx1);
    // console.log(login);
    // let [login,setLogin]=useState (false);


    let verify =()=>
    {
        if(user=='iet' && pwd=='123')
        {
             dispatch({type :'login' , payload:pwd})
           
        }
        else{
           console.log("Incorrect password");
        }
    }

    return (
        <div>
            Enter User Name <input type="text" onBlur={(e)=>{setUser(e.target.value)}}></input>
            Enter Password <input type="text" onBlur={(e)=>{setPwd(e.target.value)}}></input>
            <button onClick={verify}>Login</button>
            {login && <p>Welcome {user}</p> }
            {!login && <p>Incorrect Password</p>}

        </div>
    )
}