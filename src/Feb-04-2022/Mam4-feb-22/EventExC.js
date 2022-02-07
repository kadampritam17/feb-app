import React from "react"

class EventExC extends React.Component
{
    showAlert(event)
    {
        alert("class component example clicked "+ event.target.value )
    }
    
    render(){
    return(
        <div>
            <button value ="first" onClick={this.showAlert}>Click Me 1</button>
            <button value ="second" onClick={this.showAlert}>Click Me 2</button>
            <button value ="third" onClick={this.showAlert}>Click Me 3</button>
            <button value ="fourth" onClick={this.showAlert}>Click Me 4</button>
        </div>
    )
    }
}

export default EventExC