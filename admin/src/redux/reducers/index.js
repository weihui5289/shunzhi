import account from './account'
import dish from './dish'
import { combineReducers } from 'redux'


const rootReducer = combineReducers({
  account,
  dish
})

export default rootReducer
