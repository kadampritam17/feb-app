import React  from 'react';


export default function MessageRepeater(props) {

    let results = []

    for (let i = 0; i < props.num; i++) {
        var trline =   <li>Hello</li>
        results.push(trline)
    }

    return <div><ol>{results}</ol></div>
}