let comment = {
  all: {}
}

export default function dishReducer(state=comment, action) {
  switch (action.type) {
    case 'LOAD_COMMENTS':
      return { ...state, all: action.comments }
    default:
      return state
  }
}
