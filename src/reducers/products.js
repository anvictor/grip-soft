
export default function products(state = [], action) {// reducer
if (action.type === 'ADD_PRODUCTS'){
  return action.payload} else
if (action.type === 'ADD_PRODUCT'){
  return [...state, action.payload]} else
if (action.type === 'DEL_PRODUCT'){
  return state}
return state;
}
