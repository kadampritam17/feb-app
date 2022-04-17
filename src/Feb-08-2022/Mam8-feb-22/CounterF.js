import { useDispatch, useSelector } from "react-redux";

export default function CounterF()
{   // const counter = useSelector((state)=>{ return state.counter})
     const user = useSelector((state)=>{ return state.username})
     const dispatch = useDispatch()
    let increment=()=>
    {
        dispatch({type:'increment'})
    }
    let decrement=()=>
    {
        dispatch({type:'decrement'})
    }
    let num =0
    let addby =()=>{
        console.log('here',num)
        dispatch({type:'addby',payload:num})
    }

    return ( <div>
                Welcome {user}
            <br></br>
            <input type="number" onBlur={(e)=>{num = e.target.value}}/>
            <br></br>
            Counter = {}
            <button onClick={increment}>Incr</button>
            <button onClick={decrement}>Decr</button>
            <button onClick={addby}>addby</button>
            
        </div>
    )

    
}