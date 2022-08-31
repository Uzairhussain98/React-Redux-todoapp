import { createStore } from 'redux'
import rootReducer from './reducers/Index.js'


const store = createStore(rootReducer);

export default store