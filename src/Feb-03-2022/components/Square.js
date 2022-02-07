import React, { Component }  from 'react';

export default function Square(props) {

    let results = props.num1 * props.num1

    return <div>{results}</div>
}
