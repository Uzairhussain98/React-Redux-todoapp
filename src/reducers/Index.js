import todoReducers from './Todoreducer.js'
import {combineReducers} from 'redux'

const rootReducer = combineReducers({
    todoReducers,

})

export default rootReducer