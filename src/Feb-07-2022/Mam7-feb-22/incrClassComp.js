import React from "react"
class Increment extends React.Component {
 
    state = {value: 1};
 
    updateState = () => this.setState({value: (this.state.value + 1)});
 
    render() {
        console.log("here "+this.state.value)
        return (
            <div>
                <p>{this.state.value}</p>
                <button onClick={this.updateState}>Increment Value</button>
            </div>
        );
    }
 
}

export default Increment