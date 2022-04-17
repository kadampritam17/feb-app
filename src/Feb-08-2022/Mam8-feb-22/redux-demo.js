const redux = require('redux');

const counterReducer = (state={counter:0},action)=>{

if(action.type === 'increment'){
return {
    counter:state.counter +1 
}
}
if(action.type === 'decrement'){
    return {
        counter:state.counter -1 
    }
    }
return state;
} ;

const store = redux.createStore(counterReducer);

const counterSubscriber = ()=>{
    const latestState = store.getState(); //latest state snapshot
    console.log("Action arrived = ",latestState);
};

const counterSubscriber23= ()=>{

    const latestState = store.getState(); //latest state snapshot
    console.log("I also GOT It = ",latestState);

};

store.subscribe(counterSubscriber);
store.subscribe(counterSubscriber23)


console.log("initial state after first execution of redux "+store.getState().counter)

store.dispatch({type:'increment'})
store.dispatch({type:'increment'})
store.dispatch({type:'decrement'})




