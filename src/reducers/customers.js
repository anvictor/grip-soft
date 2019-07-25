import * as types from '../constants/ActionTypes';

export default function customers(state = [], action) {// reducer
  switch (action.type) {
    case types.ADD_CUSTOMERS:
      return action.payload;

    case types.SET_CUSTOMER: {
      console.log('assign = ', action.payload);debugger;
      alert('assign = ' + action.payload);
      return {...state, customerToEdit: action.payload}
    }
    default:
      return state;
  }
}
