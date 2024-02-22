export const addToFavorites = (payload) => ({
  type: 'ADD_TO_FAVORITES',
  payload,
});

export const removeFromFavorites = (payload) => ({
  type: 'REMOVE_FROM_FAVORITES',
  payload,
});

export const addToOrders = (payload) => ({
  type: 'ADD_TO_ORDERS',
  payload,
});

export const removeFromOrders = (payload) => ({
  type: 'REMOVE_FROM_ORDERS',
  payload,
});
export const decreaseItemCount = (itemId) => ({
  type: 'COUNT_DECREAMENT',
  payload: itemId,
});

export const increaseItemCount = (itemId) => ({
  type: 'COUNT_INCREAMENT',
  payload: itemId,
});