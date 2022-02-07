function MyTableF(props)
{
    let arrOfTrs = []  
    for(let i=1;i<=props.range;i++)
    {
        var line =`${props.num}*${i}=${props.num*i}`
        var trline = <tr><td>{line}</td></tr>
        arrOfTrs.push(trline)
    }

    return(<table border="1"><tbody>{arrOfTrs}</tbody></table>)
}

export default MyTableF