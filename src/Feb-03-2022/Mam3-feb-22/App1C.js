import React from 'react'
import ExplorePropsF from './ExplorePropsF'
import JSXDemoC from './JSXDemoC'
import JSXDemoF from './JSXDemoF'
import MyTableC from './MyTableC'
import MyTableF from './MyTableF'


class App1C extends React.Component
{
    //React container calls it
    render()
    {
        var obj = {cost:23}
        var anotherobj ={city:'kolhapur', state:'mah'}
        var str = JSON.stringify(anotherobj)
        var arr = ['red','green']
        var arrofobj=[{proName:'shoes',prodCost:300},{proName:'slippers',prodCost:80},{proName:'sandal',prodCost:450}]
        //let x = 30
        return (
            <div>
                <ExplorePropsF products={arrofobj} colors={arr} place={str} flag={false} num="12" message="its sunny day" info={obj}></ExplorePropsF>


            {/* <div>This is hi from class component</div>
            <JSXDemoC></JSXDemoC>
            <JSXDemoF></JSXDemoF>
             <MyTableC num="21" range="5"></MyTableC> 
            <MyTableF num="7" range="3"></MyTableF>
            <MyTableF num={x} range="4"></MyTableF>
            <MyTableF num="17" range="5"></MyTableF>
 */}            </div>
            )
    }

}


export default App1C