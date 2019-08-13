// Request - Options - Payload
/*
// GET
fetch('https://randomuser.me/api/')
  .then( response => response.json())
  .then( res => data = res)

// POST
let user = {
    "user": "morpheus",
    "pass": "front end"
  }

fetch('https://reqres.in/api/users', {
  method: 'POST',
  body: JSON.stringify(user),
  headers: {'Content-Type': 'application/json'}
}).then( res => res.json())
  .then( res => console.log(res))

let userId = '2'
fetch(`https://reqres.in/api/users/${userId}`)
  .then( res => res.json())
  .then(res => console.log(res))

fetch(`https://reqres.in/api/users/${userId}`, {
  method: 'PATCH',
  body: JSON.stringify(user),
  headers: {'Content-Type': 'application/json'}
}).then( res => res.json())
  .then( res => console.log(res))

// DELETE => elimina informacion
// PATCH => Actualiza información parcial
// PUT => Actualiza información total
*/

const customFetch = (url, method, payload = '') => {
  const endpoint = `https://reqres.in/api/${url}`
  let options = {
    method: method,
    headers: {'Content-Type': 'application/json'}
  }
  if(method !== 'GET' && payload) options.body = payload
  return fetch(endpoint, options)
    .then( response => response.json())
}
// https://reqres.in/api/user

fetch(`https://reqres.in/api/user`)
  .then(response => response.json())
  .then( res => res.data.forEach(e => console.log(e)))