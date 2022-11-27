// Docs on event and context https://docs.netlify.com/functions/build/#code-your-function-2
// /.netlify/functions/shortIOlink

const fetch = require('node-fetch');
const handler = async (event, context, callback) => {

  const url = 'https://api.short.io/api/links?domain_id=519801&limit=5&dateSortOrder=desc';
  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: process.env.SHORTIO_API_TOKEN
    }
  };

  res = await fetch(url, options);
  data = await res.json();

    callback(null, {
      statusCode: 200,
      body: JSON.stringify(data)
    })
}

module.exports = { handler }