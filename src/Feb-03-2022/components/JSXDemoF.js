import React  from 'react';

function JSXDemoF () {
    let lastname = "kadam"
    let name = "pritam"
    
    let line = <p>Welcome {name} {lastname} to jsxDemoF {2+2} {name.toUpperCase().slice(2,5)}</p>
        return (
           line
            
        )
}

export default JSXDemoF