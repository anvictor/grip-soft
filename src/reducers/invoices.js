
export default function invoices(state = [], action) {// reducer
  if (action.type === 'ADD_INVOICES'){
    return action.payload} else
  if (action.type === 'ADD_INVOICE'){
    return [...state, action.payload]} else
  if (action.type === 'DEL_INVOICE'){
    return state}
  return state;
}
