//E:\Courses\React\part1-app>npm install -D @types/react
import { useState } from "react"
import Square from "./square"

function UserInputEx()
{

    var [num,setNum] = useState(0)
    return (
        <div>
            <input type="number"  onChange={(e)=>{setNum(e.target.value)}}></input>
            <Square num={num}></Square>
        </div>
    )
}

export default UserInputEx