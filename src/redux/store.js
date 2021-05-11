import {combineReducers, createStore } from "redux";
import memoryReducer from "./memory-reducer";

let reducers = combineReducers({
	memory:memoryReducer
})

let store = createStore(reducers)
window.store = store.getState()
export default store