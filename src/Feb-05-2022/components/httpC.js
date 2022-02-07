import React, { Component } from "react";

export default class httpC extends Component {
  componentDidMount = () => {
    console.log(here);

    var promise = fetch("http://localhost:8080/book/allbooks", {
      method: "GET",
    });
    var anotherpromise = promise.then((response) => {
      return response.json();
      // var d = response.json()
      // console.log("in get" + d);
    });
    anotherpromise.then((jsondataarray) => {
      this.setState({ data: jsondataarray });
    });

    promise.catch((err) => {
      console.log(err);
    });
  };

  getData = (event) => {
    console.log("callled...." + this.book);
    
  };

  sendData = (event) => {
    console.log("called to send data....");
  };

  render() {
    return (
      <div>
        <select>
          <option value=""></option>
        </select>
      </div>
    );
  }
}
