
import React, { Component } from "react";

class HttpEx extends Component
{
    constructor()
    {
        super()
        this.state={id:0,name:'',author:'',cost:0,data:[]}
       
    }

    //CALLBACK method
    componentDidMount()
    {
        console.log("here")
        var promise = fetch("http://localhost:9090/book/show", {
                       "method": "POST",
                     })
        var anotherpromise =promise.then(response => {
                         return response.json()
                    })
        anotherpromise.then(jsondataarr => {
                       this.setState({
                         data: jsondataarr
                       } )})
                     
        promise.catch(err => { console.log(err); 
                     });

    }
    getData=(e)=>
    {

        var opts = this.state.data.map((obj)=>{return <option>{obj.bookName} </option>})    
        return opts
    }


    sendData=(e)=>
    {
        fetch("http://localhost:9090/book/add/"+this.state.name + "/" + this.state.cost + "/" + this.state.author , 
        {
            "method": "Post",
            "headers":{'Content-Type':'application/json'},
            // "body": JSON.stringify({
                // bookId: parseInt(this.state.id),
                // bookName: this.state.name,
                // bookAuthor: this.state.author,
                // bookCost: this.state.cost
        //    })
        })
         
    }

    getDataUsingSimpleJS=(e)=>{
        var http = new XMLHttpRequest();
        http.onload = function(){
            alert(http.response)
        }
        http.open('Post','http://localhost:9090/book/show/')
        http.send();

    }


    render()
    {
     
        return <div><select>
           {this.getData()}
            </select>
        {/* Book Id : <input type="number" onBlur={(event)=>{this.setState({id:event.target.value})} }  placeholder="Enter Book Id"/> */}
        Book Name : <input type="text" onBlur={(event)=>{this.setState({name:event.target.value})} }  placeholder="Enter Book Name"/>
        Book Cost : <input type="number" placeholder="Enter Book Cost" onBlur={(event)=>{this.setState({cost:event.target.value})}}/>
        Book Author : <input type="text" placeholder="Enter Book Author" onBlur={(event)=>{this.setState({author:event.target.value})}}/>
        <button onClick={this.sendData}>add</button>
        <button onClick={this.getDataUsingSimpleJS}>get</button>
        </div>
    }
}

export default HttpEx