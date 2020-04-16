const redux = require('redux');

const createStore = redux.createStore;
const combineReducers = redux.combineReducers;

// action constant
const BUY_CAKE = 'BUY_CAKE';

const BUY_ICECREAM = 'BUY_ICECREAM';

// action creator
function buyCake() {
    return{
        type: BUY_CAKE
    }
}

function buyIceCream() {
    return{
        type: BUY_ICECREAM
    }
}

const initialCakeState = {  // initial state
    numOfCakes: 10
}

const initialIceCreamState = {  // initial state
    numOfIceCreams: 20
}

// reducer function
const cakeReducer = (state = initialCakeState, action) => {
    switch(action.type){
        case BUY_CAKE: return {
            ...state,
            numOfCakes: state.numOfCakes - 1
        }
        default: return state
    }
}

const iceCreamReducer = (state = initialIceCreamState, action) => {
    switch(action.type){
        case BUY_ICECREAM: return {
            ...state,
            numOfIceCreams: state.numOfIceCreams - 1
        }
        default: return state
    }
}

const rootReducer = combineReducers({
    cake: cakeReducer,
    iceCream: iceCreamReducer
})

// create the store
const store = createStore(rootReducer);
console.log("Initial state : ", store.getState());

const unsubscribe = store.subscribe(() => console.log("Updated state : ", store.getState()));

store.dispatch(buyCake());
store.dispatch(buyCake());
store.dispatch(buyCake());

store.dispatch(buyIceCream());
store.dispatch(buyIceCream());
store.dispatch(buyIceCream());
store.dispatch(buyIceCream());

unsubscribe();