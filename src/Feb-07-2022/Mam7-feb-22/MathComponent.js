import React, { useState } from "react"
import { Link, useNavigate } from "react-router-dom"


export default function MathComponent(props)
{
    const [val,setVal] = useState(0)
    let navigate = useNavigate()
        return(<div>
            <input type="number" onBlur={(e)=>{setVal(e.target.value)}}/>
            <Link to={"tablec/"+val} >ShowTable</Link>

            <button onClick={(e)=>{navigate("/color")}}>Go back</button>
        </div>)
    
}

 /* class MathComponent extends React.Component
{
    state={val:0}

    render()
    {
        return(<div>
            <input type="number" onBlur={(e)=>{this.setState({val:e.target.value})}}/>
            <Link to={"tablec/"+this.state.val} >ShowTable</Link>

            <button onClick={(e)=>{this.props.navigate("-1")}}>Go back</button>
        </div>)
    }

}

 function withNavigation(component) {
    return props => <MathComponent {...props} navigate={useNavigate()} />;
  }

  export default withNavigation(MathComponent) */