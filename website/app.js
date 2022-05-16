/* Global Variables */

const { appendFile } = require("fs");
const apiKey = '98be849bf2f51cc7200e7db7e2bcbeed&units=imperial'

// Create a new date instance dynamically with JS
let d = new Date();
let newDate = d.getMonth()+'.'+ d.getDate()+'.'+ d.getFullYear();

const getData = async (url='', data={})=>{
	const response = await fetch(url, {
		method: 'GET',
		credentials: 'same-origin',
		headers: {
			'Content-Type': 'application/json',
		},
	body: JSON.stringify(data),
	}),
};

try {
	const newData = await response.json();
	return newData
}catch(error) {
	console.log('error', error);
}

/* Function to POST data */
const postData = async ( url = '', data = {})=>{
  console.log(data)
  const response = await fetch(url, {
    method: 'POST', // *GET, POST, PUT, DELETE, etc.
    credentials: 'same-origin', // include, *same-origin, omit
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data), // body data type must match "Content-Type" header        
  });

  try {
    const newData = await response.json();
    // console.log(newData);
    return newData
  }catch(error) {
  console.log("error", error);
  // appropriately handle the error
  }
}

// TODO-Call Function
postData('/add', {animal:'cat'})
