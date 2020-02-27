// EG. 1 SWAPI Star Wars API
// const fetch = require('node-fetch');

// const url = 'https://swapi.co/api/people/1';

// fetch(url, {metod: 'GET'})
// .then(res => res.json())
// .then(res => console.log(res))

// EG. 2 SWAPI Star Wars API
const fetch = require('node-fetch');

const url = 'https://swapi.co/api/people/1';

// use function keyword instead of arrow => if you prefer...
async function getSwapi() {
    let data = await fetch(url, {method: 'GET'});
    console.log(await data.json());
}

getSwapi();