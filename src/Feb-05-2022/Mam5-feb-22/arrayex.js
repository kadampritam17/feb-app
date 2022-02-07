import React from "react"
export default class ArrayExC extends React.Component
{
    state={nums:[],inputval:0,isActive:[]}

    num =0
    addToArray =()=>{
        var arr = this.state.nums
        arr.push(this.num)
        var actives =this.state.isActive
        actives.push(false)
        //this.setState( state =>{return {state.nums, state.isActive}
        this.setState({nums:arr,isActive:actives})
        
    }

    showSum=()=>{
        let sum =this.state.nums.reduce((a,b)=>{return parseInt(a)+parseInt(b)})
        this.setState({sum:sum})
    }

    clearArr=()=>{
        this.setState({nums:[],inputval:0})
    }

    deletenum=(e)=>{
        var arr = this.state.nums
        let index = e.target.value
        arr.splice(index,index+1)
        this.setState({nums:arr})

    }

    updatenum=(e,index)=>{
        var arr = this.state.nums
        var actives = this.state.isActive
        arr[index] = e.target.value
        actives[index] =false
        this.setState({nums:arr,isActive:actives})
    }


    render()
    {
        return(<div>
            <input type="number" onBlur={(e)=>{this.num=e.target.value}} value={this.state.inputval} onChange={(e)=>{this.setState({inputval:e.target.value})}}/>
            <button onClick={this.addToArray}>add to array</button>
            <button onClick={this.showSum}>show sum</button>
            <button onClick={this.clearArr}>clear array</button>
            <ol>
                {this.state.nums.map((ele,index)=>{ return <li key={index}>{ele} <button value={index} onClick={this.deletenum}>delete</button> {this.state.isActive[index]?<input type="number" onKeyPress={(e)=>{if(e.key === "Enter")this.updatenum(e,index)}}></input>:null}<button onClick={(e)=>{this.setState((state)=>{state.isActive[index]=true;  return state.isActive} )}}>update</button></li>})}
            </ol>
            <p>Sum = {this.state.sum?this.state.sum:0}</p>
        </div>)
    }
}