let dish = {
  all: {}
}

export default function dishReducer(state=dish, action) {
  switch (action.type) {
    case 'LOAD_DISHES':
      return { ...dish, all: action.dishes }
    default:
      return state
  }
}
