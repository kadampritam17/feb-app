import React from "react"
import { useParams } from "react-router-dom"

class TableComponentC extends React.Component
{
    state={arr:[]}

    componentDidMount()
    {

       let {v} = this.props.myparams
        console.log("here"+JSON.stringify(this.props.myparams))
        let temp =this.state.arr
        for(var i=0;i<100;i++)
            temp.push(v+'*'+i+'='+(v*i))
        this.setState({arr:temp})

    }

    render()
    {
        return(<div>
            <table border="1">
                <tbody>
                {this.state.arr.map((ele)=>{return <tr><td>{ele}</td></tr>})
                }
                </tbody>
            </table>
        </div>)
    }

}
 
function withParamsanyname() {
    return props => <TableComponentC {...props} myparams={useParams()} />;
  } 
export default withParamsanyname() 



