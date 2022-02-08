import { Link } from "react-router-dom"
import "./navbar.css"

function AppRoute()
{
    return(<div>
        <div>  
        <div className ="navbar">
            <div className ="menu">
                <span className="menutitle">Menu1</span>
                <div className="menuitems">
                    <Link to="color" > Colored TEXT</Link>
                    <Link to="incr">Increment</Link>
                    <Link to ="math">MathsUtil</Link>
                 </div>
            </div>
            <div className ="menu">
                <span className="menutitle">Menu2</span>
                <div className="menuitems">
                  <Link to="poet">poet</Link>
                  <Link to="conditional">conditional</Link>
                    <a href="#">item3</a>
                </div>
            </div>
            <div className ="menu">
                <span className="menutitle">Menu3</span>
                <div className="menuitems">
                    <a  href="#">item1</a>
                    <a href="#">item2</a>
                    <a href="#">item3</a>
                </div>
            </div>
            <div className ="menu">
                <span className="menutitle">Menu4</span>
                <div className="menuitems">
                    <a  href="#">item1</a>
                    <a href="#">item2</a>
                    <a href="#">item3</a>
                </div>
            </div>
        </div>
        
       
      </div></div>)
      
}

export default AppRoute