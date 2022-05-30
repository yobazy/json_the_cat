
const request = require('request');

const fetchBreedDescription = function(breedName, callback) {
  const url = 'https://api.thecatapi.com/v1/breeds/search?q=' + breedName;
  request(url, function(error, body) {
    if (body.body.length == 2)  {
      return callback('did not find that cat', null)
    } else  {
      // console.log(body.body)
      const data = JSON.parse(body.body);
      return callback(null, data[0].description);
    }
  }
)}

module.exports = { fetchBreedDescription };