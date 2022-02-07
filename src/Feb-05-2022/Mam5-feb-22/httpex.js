import { Component } from "react";

class HttpEx extends Component {
  constructor() {
    super();
    this.state = { name: "", desc: "", cost: 0, data: [] };
  }

  //CALLBACK method
  componentDidMount() {
    console.log("here");
    fetch("http://localhost:8080/book/allbooks", {
      method: "GET",
    })
      .then((response) => {
        return response.json();
      })
      .then((jsondataarr) => {
        this.setState({
          data: jsondataarr,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  }
  getData = (e) => {
    var opts = this.state.data.map((obj) => {
      return <option>{obj.bookName} </option>;
    });
    return opts;
  };

  sendData = (e) => {
    fetch("http://localhost:8080/product/add", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        productName: this.state.name,
        prodDesc: this.state.desc,
        cost: this.state.cost,
      }),
    });
  };

  getDataUsingSimpleJS = (e) => {
    var http = new XMLHttpRequest();
    http.onload = function () {
      alert(http.response);
    };
    http.open("GET", "http://localhost:8080/book/allbooks/");
    http.send();
  };

  render() {
    return (
      <div>
        <select>{this.getData()}</select>

        <input
          type="text"
          onBlur={(event) => {
            this.setState({ name: event.target.value });
          }}
          placeholder="enter product name"
        />
        <input
          type="text"
          placeholder="enter product desc"
          onBlur={(event) => {
            this.setState({ desc: event.target.value });
          }}
        />
        <input
          type="text"
          placeholder="enter product cost"
          onBlur={(event) => {
            this.setState({ cost: event.target.value });
          }}
        />
        <button onClick={this.sendData}>add</button>
        <button onClick={this.getDataUsingSimpleJS}>get</button>
      </div>
    );
  }
}

export default HttpEx;
