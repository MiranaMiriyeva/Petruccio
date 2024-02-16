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
      let foundProductIncreament = state.find(item => item.id === action.payload.id)
      foundProductIncreament.count++;
      return state
    case 'REMOVE_FROM_ORDERS':
      return state.filter(item => item.id !== action.payload);
    default:
      return state;
  }
};

const initialState = {
  orders: [], 
};

export const theOrdersReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'INCREASE_ITEM_COUNT':
      return {
        ...state,
        orders: state.orders.map(item => {
          if (item.id === action.payload) {
            return { ...item, count: item.count + 1 };
          }
          return item;
        }),
      };
    case 'DECREASE_ITEM_COUNT':
      return {
        ...state,
        orders: state.orders.map(item => {
          if (item.id === action.payload && item.count > 1) {
            return { ...item, count: item.count - 1 };
          }
          return item;
        }).filter(item => item.count > 0), 
      };
    default:
      return state;
  }
};

