export default function ApiService(data, action){
  let serverPath = 'http://localhost:8000';
  function addCustomer(customer){
    let apiUrl = serverPath + '/api/customers/';
    let myHeaders = new Headers();
    myHeaders.append('Content-Type', 'application/json');
    const Init = {
      method: 'POST',
      headers: myHeaders,
      mode: 'cors',
      cache: 'default',
      body: JSON.stringify(customer)
    };
    const add = fetch(apiUrl,Init);
  }

  switch (action) {
    case 'addCustomer': addCustomer(data);
      break;

    default: break;
  }
}
