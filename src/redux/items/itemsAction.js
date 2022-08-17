export const actionType = {
  ADD_ITEM: 'ADD_ITEM',
  REMOVE_ITEM: 'REMOVE_ITEM',
};

export const addItem = item => ({
  type: actionType.ADD_ITEM,
  payload: item,
});

export const removeItem = id => ({
  type: actionType.REMOVE_ITEM,
  payload: id,
});
