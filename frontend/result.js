//GET TOKEN FROM URL
const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
let token = urlParams.get('token')

console.log(token)
let xhr = new XMLHttpRequest();
xhr.open("GET", 'http://localhost:3000/result?token=' + token, true);
xhr.setRequestHeader('Content-Type', 'application/json');
xhr.send();




