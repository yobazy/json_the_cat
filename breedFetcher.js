const request = require('request');
const breedSearch = process.argv[2];

const url = 'https://api.thecatapi.com/v1/breeds/search?q=' + breedSearch;

request(url, function(error, response, body) {
  console.error('error:', error); // Print the error if one occurred
  console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
  if (body.length === 2)  {
    console.log('No data for requested breed.');
  } else  {
    const data = JSON.parse(body);
    console.log(data[0].description);
  }
});