import React from "react"
import { useParams } from "react-router-dom"


export default function TableComponent ()
{
    //let obj = useParams()  //it will return the urlparams object with the param value tablec/:num1
    //let num1 = obj.num1
   // let {num1} = useParams()    
    //let v = obj.num1
    let {num1:v}= useParams()

        let temp =[]
        for(var i=0;i<10;i++){
            let s = v+"*"+i+"="+(v*i)
            temp.push(s)
        }
        

        return(<div>
            <table border="1">
                <tbody>
                {temp.map((ele)=>{return <tr><td>{ele}</td></tr>})
                }
                </tbody>
            </table>
        </div>)
    

}






/* 
class TableComponent extends React.Component
{
    state={arr:[]}

    componentDidMount()
    {

       let {v} = this.props.params
        console.log("here"+JSON.stringify(this.props.params))
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

function withParams(component) {
    return props => <TableComponent {...props} params={useParams()} />;
  }
export default withParams(TableComponent) */