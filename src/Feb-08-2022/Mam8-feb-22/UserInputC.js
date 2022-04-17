import React from "react";
import Square from "./square";

class UserInputC extends React.Component
{
        state = {num:0}
   

    render()
    {
        return(<div>
            Class Input Example -
            <input type="number"  onChange={(e)=>{this.setState({num:e.target.value})}}></input>
            <Square num={this.state.num}></Square>
        </div>)
    }

}

export default UserInputC