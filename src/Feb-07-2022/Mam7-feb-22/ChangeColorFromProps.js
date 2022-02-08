import "./ChangeColorFromProps.css"
export default function ChangeColor(props)
{



    let c = props.color 
    return(<div style={{color:c}}  className="content" >
        TEXT TEXT TEXT
    </div>)
}