import React from "react";

export default class MyTable extends React.Component {
  render() {
    let n =this.props.num;
    var arr = []
    for (let i = 1; i <= this.props.range; i++) {
        var s = `${n}*${i}=${n * i}`
        var trline =   <tr> <td> {s} </td> </tr>
      arr.push(trline)
    }

    return <table border="1"><tbody>{arr}</tbody></table>;
  }
}
