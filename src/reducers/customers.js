
export default function customers(state = [], action) {// reducer
  if (action.type === 'ADD_CUSTOMERS'){
    return action.payload} else
  if (action.type === 'ADD_CUSTOMER'){
    return [...state, action.payload]} else
  if (action.type === 'DEL_CUSTOMER'){
    return state}
  return state;
}
