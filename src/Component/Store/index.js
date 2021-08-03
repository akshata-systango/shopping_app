import { createStore } from 'redux';

const pointerToReducer = (state = { counter: 0 , showToggler: true}, action) => {
    if (action.type === 'increment') {
        return {
            counter : state.counter + 1,
            showToggler : state.showToggler    
        };
    }
    if (action.type === 'decreament'){
        return {counter : state.counter - 1,
            showToggler : state.showToggler    };
}
if (action.type === 'show'){
    return{
        showToggler : !state.showToggler,
    counter:state.counter};
}
return state;

};


const store = createStore(pointerToReducer);



export default store;