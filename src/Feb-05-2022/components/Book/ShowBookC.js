import React, { Component } from "react";
import AddBookC from "./AddBookC";

export default class ShowBookC extends Component {
  constructor() {
    super();
    this.state = {
      id: 0,
      name: "",
      author: "",
      cost: 0,
      data: [],
      flag: false,
      book: {},
      tableFlag: false
      // readonlyflag : true
    };
  }

  //CALLBACK method
  componentDidMount() {
    this.getAllBooks();
  }

  getAllBooks = () => {
    console.log("here");
    var promise = fetch("http://localhost:9090/book/show", {
      method: "POST",
    });
    var anotherpromise = promise.then((response) => {
      return response.json();
    });
    anotherpromise.then((jsondataarr) => {
      this.setState({
        data: jsondataarr,
      });
    });

    promise.catch((err) => {
      console.log(err);
    });
  };

  getBookById = (id) => {
    console.log("here");

    for (let i = 0; i < this.state.data.length; i++) {
      if (id === this.state.data[i].bookid) {
        this.setState({ book: this.state.data[i] });
      }
    }

    // var promise = fetch(`http://localhost:9090/book/showById/${id}`, {
    //   method: "POST",
    // });
    // var anotherpromise = promise.then((response) => {
    //   return response.json();
    // });
    // anotherpromise.then((jsondataarr) => {
    //   this.setState({
    //     book: jsondataarr,
    //   });
    //   // console.log(this.state.book);
    // });

    // promise.catch((err) => {
    //   console.log(err);
    // });
  };

  updateBook = (id) => {
    console.log("Update", id);
    fetch(
      "http://localhost:9090/book/update/" +
        id +
        "/" +
        this.state.name +
        "/" +
        this.state.cost +
        "/" +
        this.state.author,
      {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
      }
    );
  };

  deleteBook = (id) => {
    // console.log("DELETE", id);
    fetch("http://localhost:9090/book/deleteById/" + id, {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
    });
  };

  render() {
    return (
      <div>
        <div className="container">
          <div className="row">
            <div className="col-md-9">
              <h2>Book Table</h2>
            </div>
            <div className="col-6 col-md-3">
              <button
                className="btn btn-primary mx-1"
                onClick={() => {
                  this.setState({ flag: true });
                }}
              >
                add book
              </button>
              <button
                type="button"
                className="btn btn-primary mx-1"
                onClick={() => {
                  this.getAllBooks();
                }}
              >
                Get All Book
              </button>
            </div>
          </div>

          <table className="table table-hover table-bordered">
            <thead>
              <tr>
                <th scope="col">Book Id</th>
                <th scope="col">Book Name</th>
                <th scope="col">Book Cost</th>
                <th scope="col">Book Author</th>
                <th scope="col">Action</th>
              </tr>
            </thead>
            <tbody>
              {this.state.data.map((obj, index) => {
                return (
                  <tr key={index} index={index}>
                    <td>{obj.bookid}</td>
                    <td>
                      <input
                        type="text"
                        className="form-control"
                        defaultValue={obj.bookName}
                        onChange={(event) => {
                          this.setState({ name: event.target.value });
                        }}
                      />
                    </td>
                    <td>
                      <input
                        type="text"
                        className="form-control"
                        defaultValue={obj.bookCost}
                        onChange={(event) => {
                          this.setState({ cost: event.target.value });
                        }}
                      />
                    </td>
                    <td>
                      <input
                        type="text"
                        className="form-control"
                        defaultValue={obj.bookAuthor}
                        onChange={(event) => {
                          this.setState({ author: event.target.value });
                        }}
                      />
                    </td>

                    {/* <td>
                      <input
                        type="checkbox"
                        className="form-control"
                        
                        onChange={(event) => {
                          this.setState({ readonlyflag: event.target.value });
                        }}
                      /> 
                    </td> */}
                    {/* by defalut false readonly => method call => readonly true */}
                    <td>
                      <button
                        className="btn btn-primary mx-1"
                        onClick={() => {
                          this.updateBook(obj.bookid);
                        }}
                      >
                        Update Book
                      </button>
                      <button
                        className="btn btn-primary mx-1"
                        onClick={() => {
                          this.deleteBook(obj.bookid);
                        }}
                      >
                        Delete Book
                      </button>
                      <button
                        className="btn btn-primary mx-1"
                        onClick={() => {
                          this.getBookById(obj.bookid);
                          this.setState({ tableFlag: true });
                        }}
                      >
                        Get Book Details
                      </button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>

        
        <div className="container">
          {this.state.flag && <div><hr /><AddBookC fun={this.getAllBooks} /></div>}
        </div>

        
        {this.state.tableFlag && (
          <div className="container"><hr />
            <h2>Book details of {this.state.book.bookid}</h2>
            <table className="table table-hover table-bordered">
              <thead>
                <tr>
                  <td>Id</td>
                  <td>Name</td>
                  <td>Cost</td>
                  <td>Author</td>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>{this.state.book.bookid}</td>
                  <td>{this.state.book.bookName}</td>
                  <td>{this.state.book.bookCost}</td>
                  <td>{this.state.book.bookAuthor}</td>
                </tr>
              </tbody>
            </table>
          </div>
        )}
      </div>
    );
  }
}
