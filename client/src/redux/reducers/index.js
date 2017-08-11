import { combineReducers } from 'redux'

import account from './account'
import user from './user'
import cart from './cart'
import dish from './dish'
import comment from './comment'

const rootReducer = combineReducers({
  account,
  cart,
  dish,
  comment,
  user
})

export default rootReducer
