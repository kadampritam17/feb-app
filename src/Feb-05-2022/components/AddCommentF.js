import { useState } from "react"
import './AddCommentF.css'

const AddCommentF = (props)=>{

    const [newComment, setNewComment] = useState("")
    const [newName, setNewName] = useState("")
   /*  var comment=newComment
    comment.push("content")

     */

    const setNewNameFuntion = (event) => {
        console.log(event.target.value);
        setNewName(event.target.value)

    }

    const setNewCommentFunctions =(event) => {
        console.log(event.target.value);
        setNewComment(event.target.value)
    }

    const addCommentFuntion =() => {
        console.log(newComment)
        console.log(newName)
        console.log(props);

        var newCommentObject = { 
            comment: newComment,
            by : newName
        }

        console.log(newCommentObject)
        props.add(newCommentObject)
        setNewComment("")
        setNewName("")
    }

    return (
        <div className="addComment">
            <p>Add comment</p>
            <p>Enter Comment : <input type="text" onChange={setNewCommentFunctions} value={newComment}/></p>
            <p>Enter Name : <input type="text" onChange={setNewNameFuntion} value={newName}/></p>
            <p><button type="button" onClick={addCommentFuntion}>Add Comment</button></p>
        
        </div>
    )
}

export default AddCommentF