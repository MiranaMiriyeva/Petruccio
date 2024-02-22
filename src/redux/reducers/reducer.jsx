export const favoritesReducer = (state = [], action) => {
  switch (action.type) {
    case 'ADD_TO_FAVORITES':
      return [...state, action.payload];
    case 'REMOVE_FROM_FAVORITES':
      return state.filter(item => item.id !== action.payload);
    default:
      return state;
  }
};

export const ordersReducer = (state = [], action) => {
  switch (action.type) {
    case 'ADD_TO_ORDERS':
      let foundProduct = state.find(item => item.id === action.payload.id)
      if (!foundProduct) {

        return [...state, { ...action.payload, count: 1 }];
      } else {
        foundProduct.count++;
        return state
      }
    case 'COUNT_INCREAMENT':
      let foundProductIncreament = state.find(item => item.id === action.payload)
      foundProductIncreament.count++;
      return [...state]
    case 'COUNT_DECREAMENT':
      let foundProductDecreament = state.find(item => item.id === action.payload)
      if (foundProductDecreament.count === 1) {
        return state.filter(item => item.id !== action.payload);
      }
      else {
        foundProductDecreament.count--;
        return [...state]
      }
    case 'REMOVE_FROM_ORDERS':
      return state.filter(item => item.id !== action.payload);
    default:
      return state;
  }
};




