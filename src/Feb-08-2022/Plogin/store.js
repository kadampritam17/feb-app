import {createStore,combineReducers} from 'redux';



/* const counterReducer = (state={counter:0,username:''},action)=>{

    if(action.type==="increment")
    {
        
        let v = state
        v.counter = state.counter +1 

        return  v
        
    }
    if(action.type==="addby")
    {
        let x = action.payload
        let v = state.counter+ parseInt(x)

        let temp = state
        temp.counter =v
        return  temp
        
    }
    if(action.type==="decrement")
    {
        
        let temp =state
        temp.counter = state.counter -1
        return temp;
    }
    if(action.type === "change")
    {
         let newuname = action.payload.uname   
         let temp = state
         temp.uname = newuname
         return temp
    }
    return state

    

} 
 */
 const userDetailsReducer =(state={username:''},action)=>{

    if(action.type === "change")
    {
         let newuname = action.payload   
         return {username:newuname}
    }
    return state

} 

/* const allReducers = combineReducers({
    counter: counterReducer,
    username: userDetailsReducer
    })
 */    

const store = createStore(userDetailsReducer);
export default store;