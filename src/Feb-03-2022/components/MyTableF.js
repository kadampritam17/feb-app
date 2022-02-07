import React  from 'react';


//react container passing parameter here
//custom attributes ko props bolte hain.... uss parameter ko kuch bhi name de sakte hain
export default function MyTableF (cp){
    let n = cp.num;
    var arr = []
    for (let i = 1; i <= cp.range; i++) {
        var s = `${n}*${i}=${n * i}`
       var trline = 
        <tr>
          <td>
            {s}
          </td>
        </tr>
      arr.push(trline)
    }

    return <table border="1"><tbody>{arr}</tbody></table>;
}
