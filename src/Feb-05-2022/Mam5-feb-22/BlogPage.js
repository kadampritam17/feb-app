import React from "react"
import "./parent.css"
export default class BlogPage extends React.Component
{
     state={comments:[]}
    componentDidMount=()=>
    {
        var comments =[{comment:'this is useful',by:'prachi'},
        {comment:'this is very complex',by:'preeti'},
        {comment:'i need more',by:'priya'},
        {comment:'too bad',by:'pranjal'}
        ]
        this.setState({comments:comments})
    }

    deletecomment=(i)=>{
        var temp = this.state.comments
        temp.splice(i,1)
        this.setState({comments:temp})
    }

    updatecomment=(i,newcomment)=>{
        var temp = this.state.comments
        temp[i].comment=newcomment
        this.setState({comments:temp})
        this.state.comments.forEach((e)=>{console.log(e.comment,e.by)})
    }

    render()
    {
        return(<div>
            <p>This is the BLOG on REACT usage with lifecycle methods</p>
            {
            this.state.comments.map(
                (element,index)=>{
                    return(
                    <div key={'d'+index}> 
                    <Comment key={index} index={index}
                       comment={element.comment} 
                       by={element.by}
                       delete={this.deletecomment}
                       update={this.updatecomment}
                       >
                    </Comment>
                {/*     <button key={'b'+index} onClick={()=>{this.deletecomment(index)}}>delete</button> */}
                    </div>
                    )
                    }
                ) 
            }
        </div>)
    }
}

class Comment extends React.Component
{
    commentvalue=''
    state={readonlyflag:true}
    render()
    {
        return(
            <div className="child">
                <input type="text"  readOnly={this.state.readonlyflag}  defaultValue={this.props.comment} onChange={(e)=>{this.commentvalue=e.target.value}} onBlur={()=>{this.props.update(this.props.index,this.commentvalue)}} ></input>
                <p>{this.props.by}</p>
                <button onClick={()=>{this.props.delete(this.props.index)}}>delete</button>
                <button onClick={()=>{ this.setState({readonlyflag:false}) }}>Edit</button>
            </div>
        )
        
    }

}



