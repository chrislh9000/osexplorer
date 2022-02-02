const sdk = require('api')('@opensea/v1.0#1felivgkyk6vyw2');

sdk['retrieving-asset-events']({only_opensea: 'false', offset: '0', limit: '20'})
  .then(res => console.log(res))
  .catch(err => console.error(err));
