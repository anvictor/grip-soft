let customersFromServer = [
  {
    address: "353 Rochester St, Rialto FL 43250",
    createdAt: "2019-07-10T09:47:45.110Z",
    id: 16,
    name: "Mark Benson-1",
    phone: "555-534-2342",
    updatedAt: "2019-07-10T09:47:45.110Z"
  },
  {
    address: "215 Market St, Dansville CA 94325",
    createdAt: "2019-07-10T09:47:45.111Z",
    id: 17,
    name: "Bob Smith-1",
    phone: "555-534-2342",
    updatedAt: "2019-07-10T09:47:45.111Z"
  },
  {
    address: "890 Main St, Fontana IL 31450",
    createdAt: "2019-07-10T09:47:45.111Z",
    id: 18,
    name: "John Draper-1",
    phone: "555-534-2342",
    updatedAt: "2019-07-10T09:47:45.111Z"
  }
  ];
export default function getCustomers() {
 return dispatch => {
    console.log('asyncGetCustomers');
    dispatch({type: 'FETCH_CUSTOMERS_SUCCESS', payload: customersFromServer})
  };
}
