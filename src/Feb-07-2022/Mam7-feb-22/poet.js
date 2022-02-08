import React,{Component} from 'react'
import './poet.css'
//import pic from './images/bird2.jpg'
import pic1 from "./images/birds.jpg"

class Poet extends Component
{
 
  render()
  {
    return(
      <div className="poetlayout">
      <div className="imagelayout">
      <img  src={pic1} alt="pic"></img>
      </div>
      <div className="info">Prachi Godbole is a new comer in the poetic world
          <br></br>
          She writes poems on nature
      </div>
      </div>
    );
  }

}

export default Poet;
