import { createStore, combineReducers } from 'redux'
import menuReducer from './reducers/menuReducer'
import locationReducer from './reducers/locationReducer'

const rootReducer = combineReducers({
  menu: menuReducer,
  location: locationReducer
})

const store = createStore(rootReducer)

export default store