export function gripSoft(state=  {
  customers: [],
} , action) {// reducer
  if (action.type === 'ADD_CUSTOMER'){
    return {
      ...state,
      customers: [...state.customers, action.payload]
    }
  } else
  if (action.type === 'EDIT_CUSTOMER'){return state} else
  if (action.type === 'DEL_CUSTOMER'){return state} else
    return state;
}
