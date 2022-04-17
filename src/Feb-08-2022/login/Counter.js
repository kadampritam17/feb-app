
    import  React  from "react";
    //import {connect} from "react-redux"


class Counter extends React.Component
{

    increment=()=>{
        //Your component will receive dispatch by default,
        this.props.dispatch({type:'increment'})
    }

    decrement=()=>{
        this.props.dispatch({type:'decrement'})
    }

    render()
    {
        return (
            <div>
                <br></br>
                <br></br>
                Counter = {this.props.counter}
                <button onClick={this.increment}>Incr</button>
                <button onClick={this.decrement}>Decr</button> 
            </div>
        )
    }
    
}

export default Counter;