import {createStore} from 'redux';


 const MyDataReducer = (state={counter:0,username:''},action)=>{

    if(action.type==="increment")
    {        
        let v = state.counter +1 

        return  {...state,counter:v}  //this new value will change state triggering subscriber calls
        
    }
    if(action.type==="addby")
    {
        let x = action.payload
        let v = state.counter+ parseInt(x)

        return  {...state,counter:v}
        
    }
    if(action.type==="decrement")
    {
        
        let temp = state.counter -1
        return {...state,counter:temp};
    }
    if(action.type === "change")
    {
         let newuname = action.payload   
         return {...state,username:newuname}
    }
    return state

    

} 
 
/* const counterReducer = (state={counter:0},action)=>{

    if(action.type==="increment")
    {
        
        let v = state.counter +1 

        return  {...state,counter:v}
        
    }
    if(action.type==="addby")
    {
        let x = action.payload
        let v = state.counter+ parseInt(x)

        return  {...state,counter:v}
        
    }
    if(action.type==="decrement")
    {
        
        let temp = state.counter -1
        return {...state,counter:temp};
    }
    return state

   

}*/

/* const userDetailsReducer =(state={username:''},action)=>{

    if(action.type === "change")
    {
         let newuname = action.payload   
         return {username:newuname}
    }
    return state

}  */

 
const store = createStore(MyDataReducer);
export default store;