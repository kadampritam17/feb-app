import "./CharCountF.css"

export default function CharCountF(props)
{

    let text = props.children


    return(<div className="content">
            Text : {text}
            <p>Chars : {text.length}</p>
    </div>)

}