const Http =() => {
    const getData = ()=>{
        fetch("http://www.7timer.info/bin/api.pl?lon=113.17&lat=23.09&product=astro&output=json")
        .then(response=> response.json())
        .then((obj)=>{
            console.log(obj);
        })
    }

    return (
        <div>
            <button type="button" onClick={getData}>Get</button>
        </div>
    )
}

export default Http