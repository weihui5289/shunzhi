let user = {
  all: {}
}

export default function userReducer(state=user, action) {
  switch (action.type) {
    case 'LOAD_USERS':
      return { ...state, all: action.users }
    case 'UPDATE_USER':
      console.log('UPDATE_USER...', action.user)
      let userId =  action.userId
      let nextState = { ...state, all: { ...state.all, [userId]: action.user }}
      console.log('nextState', nextState)
      return nextState
    default:
      return state
  }
}
