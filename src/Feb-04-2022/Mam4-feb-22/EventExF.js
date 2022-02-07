function EventExF()
{
    function showAlert(event)
    {
        alert("clicked "+ event.target.value )
    }
    return(
        <div>
            <button value ="first" onClick={showAlert}>Click Me 1</button>
            <button value ="second" onClick={showAlert}>Click Me 2</button>
            <button value ="third" onClick={showAlert}>Click Me 3</button>
            <button value ="fourth" onClick={showAlert}>Click Me 4</button>
        </div>
    )
}

export default EventExF