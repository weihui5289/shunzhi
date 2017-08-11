let dish = {
  all: {

  }
}
const dishReducer = (state=dish, action) => {
  switch (action.type) {
    case 'LOAD_DISHES':
      return { ...dish, all: action.dishes }
    default:
      return state
  }
}

export default dishReducer
