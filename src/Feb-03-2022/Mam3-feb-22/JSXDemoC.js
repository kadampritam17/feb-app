
import React from 'react'
export default class JSXDemoC extends React.Component
{
    lastname = 'godbole'

    constructor()
    {
        super()
        this.department = 'computer'
    }


    render()  //return value of render must be of type JSX
    {
        let name = 'prachi'
        let arr = ['red','green','blue','yellow']
        let jsxline = <p>Welcome {name} {this.lastname}  {arr} </p>
        //console.log(typeof(jsxline))

        return jsxline
        //return   <p>Welcome {name} { this.lastname} {this.department}</p>

    }

}