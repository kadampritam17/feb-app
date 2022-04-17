import React, { Component } from "react";
import "./BlogPageC.css";
import AddCommentF from "./AddCommentF";

export default class BlogPageC extends Component {
  state = { comments: [] };

  componentDidMount = () => {
    var commentnew = [
      { comment: "this is useful", by: "pritam" },
      { comment: "very complicated", by: "pritee" },
      { comment: "i need more", by: "priya" },
      { comment: "this is too bad", by: "pratham" },
    ];

    this.setState({ comments: commentnew });
  };

  addComment = (newCommentObject) => {
    // console.log("from blogpage", newCommentObject);
    var temp = this.state.comments;
    temp.push(newCommentObject);
    this.setState({ comments: temp });
  };

  deleteComment = (index) => {
    //take comments arrOfObjects in temp
    console.log(this.state.comments);
    var temp = this.state.comments;
    // console.log(temp);
    temp.splice(index, 1);
    console.log(temp);
    this.setState({ comments: temp });
  };

  deleteAllComment = () => {
    this.setState({ comments: [] });
  };

  updateComment = (index, newComment) => {
    var temp = this.state.comments;
    temp[index].comment = newComment;
    this.setState({ comments: temp });
    // this.state.comments.forEach((event)=>{console.log(this.state.comments);})
  };

  render() {
    return (
      <div className="BlogPageC">
        <AddCommentF add={this.addComment}></AddCommentF>

        {/* <p>This is a BLOG on REACT usage with lifecycle methods</p> */}
        <button
          onClick={() => {
            this.deleteAllComment();
          }}
        >
          Delete All Comments
        </button>
        {this.state.comments.map((element, index) => {
          return (
            <div key={"a" + index}>
              <Comment
                key={index}
                index={index}
                comment={element.comment}
                by={element.by}
                delete={this.deleteComment}
                update={this.updateComment}
              ></Comment>
              {/* <button key={"b" + index}  onClick={() => { this.deleteComment(index); }} >Delete </button> */}
            </div>
          );
        })}
      </div>
    );
  }
}

class Comment extends React.Component {
  
  commentvalue = "";
  state = { readonlyflag: true };

  render() {
  

    return (
      <div className="Comment">
        {/* <p>this is useful</p>
        <p>Pritam</p> */}
        <input
          type="text"
          readOnly={this.state.readonlyflag}
          key={`comment:${ this.props.comment }`}
          defaultValue={this.props.comment}
          onChange={(event) => {
            this.commentvalue = event.target.value;
          }}
          onInput={() => {
            this.props.update(this.props.index, this.commentvalue);
          }}
        ></input>
        <p>{this.props.by}</p>
        <button
          onClick={() => {
            this.props.delete(this.props.index);
          }}
        >
          Delete
        </button>
        <button
          onClick={() => {
            this.setState({ readonlyflag: false });
          }}
        >
          Update
        </button>
      </div>
    );
  }
}
