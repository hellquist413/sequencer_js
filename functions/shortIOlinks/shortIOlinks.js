// Docs on event and context https://docs.netlify.com/functions/build/#code-your-function-2
// /.netlify/functions/shortIOlink

const fetch = require('node-fetch');
const handler = async (event, context, callback) => {

  const url = 'https://api.short.io/api/links?domain_id=519801&limit=50&dateSortOrder=desc';
  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: process.env.SHORTIO_API_TOKEN
    }
  };

  res = await fetch(url, options);
  data = await res.json(res);
  // data = JSON.stringify(data);

  // links = JSON.stringify(data);
  // links = data.shortURL;
  // console.log(data.links.shortURL);
  links = data.links;
  let shortLinks = [];

  for(let i = 0; i < links.length; i++) {
    shortLinks.push(data.links[i].shortURL);
    // shortLinks.push(data.links[i].originalURL);
  }
 
  shortLinks = JSON.stringify(shortLinks);

    callback(null,
      {
        statusCode: 200,
        body: shortLinks
      })
}

module.exports = { handler }