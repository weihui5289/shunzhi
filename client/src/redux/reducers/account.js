let account = {
  currentUser: '',
  isAuthenticated: false,
  showAlert: false,
  alertMessage: '',
  id:""
}

export default function accountReducer(state=account, action) {
  switch (action.type) {
    case 'AUTH_USER':
      return { ...state, currentUser: action.username, isAuthenticated: true, id: action.id}
    case 'LOG_OUT':
      return { ...state, currentUser: '', isAuthenticated: false }
    case 'SHOW_ALERT':
      return { ...state, showAlert: true, alertMessage: action.message }
    case 'HIDE_ALERT':
      return { ...state, showAlert: false, alertMessage: '' }
    default:
      return state
  }
}
