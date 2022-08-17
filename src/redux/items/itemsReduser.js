import { actionType } from './itemsAction.js';

const itemsReduser = (state = [], { type, payload }) => {
  switch (type) {
    case actionType.ADD_ITEM:
      return [...state, payload];
    case actionType.REMOVE_ITEM:
      return state.filter(el => el.id !== payload);
    default:
      return state;
  }
};

export default itemsReduser;
