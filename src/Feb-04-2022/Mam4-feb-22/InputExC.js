import React from "react"


class InputExC extends React.Component
{
    
    //[entrydata2,setEntryData2] = useState('Lets start')
    state = {entrydata2:'Lets Start', num:0}
   
    incrnum=()=>
    {
        this.setState({num:this.state.num+1})
    }

    render(){
    return(
        <div>
            <br></br>
            <br></br>
            <input type="text" onChange={(e)=>{ //setEntryData2(e.target.value) }
                                          this.setState({entrydata2:e.target.value})
                                        } }/>
            <br></br>
            You Entered : <span>{ this.state.entrydata2 }</span>

            <br></br>
            <button onClick={this.incrnum}>INCR</button>
            <br></br>
            Num :<span>{this.state.num}</span>
        </div>
    )
    }
}


export default InputExC