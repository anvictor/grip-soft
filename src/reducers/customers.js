import * as types from '../constants/ActionTypes';

export default function customers(state = [], action) {// reducer
  switch (action.type) {
    case types.ADD_CUSTOMERS:
      return action.payload;

    case types.SET_CUSTOMER: {
      console.log('SET_CUSTOMER = ', action.payload);debugger;
      alert('SET_CUSTOMER = ' + action.payload);
      return {...state, customerToEdit: action.payload}
    }
    default:
      return state;
  }
}
