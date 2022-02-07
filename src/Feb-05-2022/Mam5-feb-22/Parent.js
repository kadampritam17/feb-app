import React from "react"
import "./parent.css"
export default class Parent extends React.Component
{    state={val:0,flag:false}
    doAction =(x)=>{
        this.setState({val:x})
        console.log("doAction called ...")
    }

    componentDidMount=()=>
    {
       console.log("parent component mounted ") 
    }

    componentDidUpdate=()=>{
        console.log("parent component updated/ rerendered ") 
    }

    componentWillUnmount=()=>{
        console.log("parent component unmounted ") 
    }

    render()
    {    return(
        <div>
            <p>show child :<input type="checkbox" onClick={(e)=>{
                if(e.target.checked)
                    this.setState({flag:true})
                else
                    this.setState({flag:false})
            }}/>
            </p>
            <span>This is the Parent value coming from child {this.state.val}</span>
            { this.state.flag?<Child someaction={this.doAction} ></Child> :null  }
        </div>
        )
    }
}
class Child extends React.Component
{   x=0
    componentDidMount=()=>
    {
       console.log("child component mounted ") 
    }

    componentDidUpdate=()=>{
        console.log("child component updated/ rerendered ") 
    }

    componentWillUnmount=()=>{
        console.log("child component unmounted ") 
    }
    render()
    {     return (
            <div className="child">This is the child ---Hello World
            <input type="number" onBlur={(e)=>{this.x = e.target.value}}/>
            <button onClick={()=>{ this.props.someaction(this.x)}}>CALLING PARENT METHOD</button>
            <span>{this.x}</span>
            
             </div>
        )
    }
}



