import {createStore,combineReducers} from 'redux'
const reducers=combineReducers({
    'counter':countReducer
})

const store=createStore(reducers)
export default store