import { createStore } from 'redux';

const pointerToReducer = (state = {showToggler: true}, action) => {
if (action.type === 'show'){
    return{
        showToggler : !state.showToggler,
    counter:state.counter};
}
return state;

};


const store = createStore(pointerToReducer);



export default store;