import React, { useState } from 'react';

export default function MultiCaseF() {

    const [InputData, setInputData] = useState('')
    const [LowerCase, setLowerCase] = useState('')
    const [UpperCase, setUpperCase] = useState('')
    const [TitleCase, setTitleCase] = useState('')

    const input = (e)=> {
        setInputData(e.target.value)
        // console.log(e.target.value)
    }
    
    const LowerFuntion = (e)=> {
        
        setLowerCase(e.target.checked)
        if(e.target.checked === true)
        {
            let lower = InputData.toLowerCase()
            setLowerCase(lower)
            setInputData(lower)
            setTitleCase("")
            setUpperCase("")
        }
    }

    const UpperFunction = (e)=> {

        setUpperCase(e.target.checked)
        if(e.target.checked === true)
        {
            let upper = InputData.toUpperCase()
            setUpperCase(upper)
            setInputData(upper)
            setTitleCase("")
            setLowerCase("")
        }
        
    }
 
    const TitleFuntion = (e)=> {

        setTitleCase(e.target.checked)
        var title = ""
        if(e.target.checked === true)
        {
            let arr = InputData.split(' ')
            if(arr.length === 1)
            {
                title = arr[0].slice(0,1).toUpperCase() + arr[0].slice(1, arr[0].length).toLowerCase()
            }
            else if(arr.length > 1)
            {
                for(var i = 0; i < arr.length; i++)
                {
                    var str = arr[i].slice(0,1).toUpperCase() + arr[i].slice(1, arr[i].length).toLowerCase()
                    title = title + " " + str
                }
            }
            
            setTitleCase(title)
            setInputData(title)
            setUpperCase("")
            setLowerCase("")
            
        }
    }


  return (<div>
    Input Text : <input type="text" onChange={input} value={InputData}></input><br></br>Output Text :<br></br>
    <input type="radio" name="case" onClick={LowerFuntion}></input>Lower Case : <span>{LowerCase}</span><br></br>
    <input type="radio" name="case" onClick={UpperFunction}></input>Upper Case : <span>{UpperCase}</span><br></br>
    <input type="radio" name="case" onClick={TitleFuntion}></input>Title Case : <span>{TitleCase}</span><br></br>
      
  </div>);
}
