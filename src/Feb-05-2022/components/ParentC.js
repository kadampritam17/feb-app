import React from 'react';
import './Parent.css';

export default class ParentC extends React.Component {
  
    state = {val:0, flag:false}
    doAction = (x) => {
        this.setState({val:x})
        console.log("doAction is called from parent");
    }

    componentDidMount =()=>{
        console.log("parent componentDidMount");
    }

    componentDidUpdate = ()=>{
        console.log("parent componentDidUpdate");
    }

    componentWillUnmount = ()=>{
        console.log("paent componentWillUnmount");
    }

    render() {
    return (<div className="parent">
        <span>this is a Parent</span>
        <p>Show child : <input type='checkbox' onClick={(event)=>{
                if(event.target.checked) 
                    this.setState({flag: true});
                    else
                    this.setState({flag: false});
            }}/></p>
        {this.state.flag? <Child someactions={this.doAction}></Child> : null }
        <span>Value is coming from child {this.state.val}</span>
    </div>);
  }
}


class Child extends React.Component {
  
    x =0

    componentDidMount =()=>{
        console.log("parent componentDidMount");
    }

    componentDidUpdate = ()=>{
        console.log("parent componentDidUpdate");
    }

    componentWillUnmount = ()=>{
        console.log("paent componentWillUnmount");
    }


  render() {

    return (
        <div className='child'>
            <p>This is a child</p>
            <p>Hello world</p>
            <span>X : {this.x}</span>
            <input type="number" onBlur={(event)=>{this.x = event.target.value}}></input>
            <button onClick={()=>{this.props.someactions(this.x)}}>Calling parent method</button>
        </div>
    );
  }
}
