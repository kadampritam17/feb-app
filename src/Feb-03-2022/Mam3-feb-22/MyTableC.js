import React from "react";
export default class MyTableC extends React.Component
{

    render()
    {
        let arrOfTrs = []  
        let n = this.props.num
        for(let i=1;i<=this.props.range;i++)
        {
            var line =`${n}*${i}=${n*i}`
            var trline = <tr><td>{line}</td></tr>
            arrOfTrs.push(trline)
        }

        return(<table border="1"><tbody>{arrOfTrs}</tbody></table>)
    }

}