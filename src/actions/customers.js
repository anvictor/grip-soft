import * as types from '../constants/ActionTypes';

export function setCustomer(customer) {
 return dispatch => {
    console.log('actions/customers.js/ SET_CUSTOMER');
    dispatch({type: types.SET_CUSTOMER, payload: customer})
  };
}
export function getCustomer(customer_id) {
  return dispatch => {
    console.log('actions/customers.js/ GET_CUSTOMER');
    dispatch({type: types.GET_CUSTOMER, payload: customer_id})
  };
}
export function delCustomer(customer_id) {
  return dispatch => {
    console.log('actions/customers.js/ DEL_CUSTOMER');
    dispatch({type: types.DEL_CUSTOMER, payload: customer_id})
  };
}
