import React, { Component } from 'react';

export default class AddBookC extends Component {

  sendData=(e)=>
    {


      fetch("http://localhost:9090/book/add" , 
        {
            "method": "POST",
            "headers":{'Content-Type':'application/json'},
            "body": JSON.stringify({
                bookName: this.state.name,
                bookAuthor: this.state.author,
                bookCost: this.state.cost
           })
        }).then(response=>{this.props.fun()})



      /*   fetch("http://localhost:9090/book/add/"+ this.state.name + "/" + this.state.cost + "/" + this.state.author , 
        {
            "method": "Post",
            "headers":{'Content-Type':'application/json'},
        }).then(response=>{this.props.fun()}) */

    }

  render() {
    return (
          <div id="para">
            <h2>Add a new book</h2>
            <div className="container">
              <div className="mb-3 row">
                  <label  className="col-sm-3 col-form-label">Book Name : </label>
                  <div className="col-sm-9">
                  <input type="text" className="form-control" onBlur={(event)=>{this.setState({name:event.target.value})} } placeholder="Enter Book Name" />
                  </div>
              </div>
              <div className="mb-3 row">
                  <label  className="col-sm-3 col-form-label">Book Cost : </label>
                  <div className="col-sm-9">
                  <input type="number" className="form-control" onBlur={(event)=>{this.setState({cost:event.target.value})}}  placeholder="Enter Book Cost"/>
                  </div>
              </div>
              <div className="mb-3 row">
                  <label  className="col-sm-3 col-form-label">Book Author : </label>
                  <div className="col-sm-9">
                  <input type="text" className="form-control"  onBlur={(event)=>{this.setState({author:event.target.value})}}    placeholder="Enter Book Author"/>
                  </div>
              </div>
            </div>
            <div className="container">
              <button type="button" className="btn btn-primary" id="btn" onClick={this.sendData}>Add Book</button>
            </div>
          </div>
    )
  }
}
