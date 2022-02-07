import { useState } from "react"


function InputExF()
{
    //let entrydata = "Lets start "
    /* const arr = useState('Lets Start')
    const entrydata2 = arr[0]
    const setEntryData2 = arr[1] */

    const [entrydata2,setEntryData2] = useState('Lets start')
    const [num, setNum] = useState(0)

    return(
        <div>
            <br></br>
            <br></br>
            <input type="text" onChange={(e)=>{ setEntryData2(e.target.value) }}/>
            <br></br>
            You Entered : <span>{entrydata2}</span>

            <button onClick={()=>{setNum(num+1)}}>INCR</button>
            <br></br>
            Num :<span>{num}</span>
            
        </div>
    )
}






export default InputExF