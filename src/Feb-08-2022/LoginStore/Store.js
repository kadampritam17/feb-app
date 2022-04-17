import { createStore } from "redux";
const loginDetails = {userName : "kalpit", password : "kalpit", displayMessage : ""};
const loginReducer=( loginState = loginDetails, action)=>{
    if(action.type === 'login'){
        console.log(action.userName, action.password);
        if(action.userName === 'kalpit' && action.password === 'kalpit'){
            return{
                displayMessage : "Welcome"
            }
        }
        else{
            return{
                displayMessage: "Wrong Credentials"
            }
        }
    }
    return loginState;
} //end of loginReducer
const LoginStore = createStore(loginReducer);

export default LoginStore;
