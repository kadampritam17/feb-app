import  React  from "react";
import {connect} from "react-redux"


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
                {/* <button onClick={this.increment}>Incr</button>
                <button onClick={this.decrement}>Decr</button> */}
            </div>
        )
    }
    
}

//subscriber
function mapStateToProps(state) {
    const counter = state.counter;
    return {
      counter
    };
  }
  
//https://react-redux.js.org/api/connect
//will be merged as props to your connected component
  export default connect(mapStateToProps)(Counter);
  