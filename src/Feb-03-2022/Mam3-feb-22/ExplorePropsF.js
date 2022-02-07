export default function ExplorePropsF(props)
{

    //let info = props.info
    //console.log(typeof(info))
    let s=''

    var obj = JSON.parse(props.place)
    if(props.flag)
         s ='this is a Explore Props component flag is true'
    else
       s ='flag is false'

    var prods = props.products

    return (
        <div>
            <p>{s}</p>
            <p>{props.num*props.num}</p>
            <p>{props.message}</p>
            <p> {obj.city}</p>
            <p>{props.info.cost}</p>
            <p>{props.colors}</p>
            <p>{prods[0].proName}</p>
        </div>

    )



}