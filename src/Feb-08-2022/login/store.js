import {createStore} from "redux";


const MyDataReducer = (state={username:'manasvi',password:'gijare',login:false} ,action)=> {
    if(action.type === "login"){          
        if(action.payload === state.password ){
                return{
                    username : state.username,
                    password : state.password,
                    login : true
            }
        }
        return {
            username : state.username,
                    password : state.password,
                    login : false        
        }
    }
}

const store = createStore(MyDataReducer);
export default store;