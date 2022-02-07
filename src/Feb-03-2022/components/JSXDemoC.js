import React from 'react';

class JSXDemoC extends React.Component {
    lastname = "kadam"
    name = "pritam"
    //return value of render type must be JSX
    render() {
        // let name = "pritam233"
        return (
            <div className="JSXDemoC">Welcome {this.name} {this.lastname} to jsxDemo</div>
            
        )
    }
}

export default JSXDemoC