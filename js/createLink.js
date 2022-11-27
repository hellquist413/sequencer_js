async function createShortIO(urlToShorten) {
  var data = {
    "domain": "5sc4.short.gy",
    "originalURL": urlToShorten
  };
  await fetch('/api/shortIO', {
 // await fetch('https://api.short.io/links/public', {
      method: 'post',
    headers: {
      'accept': 'application/json',
      'Content-Type': 'application/json',
      'authorization': 'pk_Fyb6rXgT61WeumwC'
    },
    body: JSON.stringify(data)
  }).then(function (response) {
    return response.json();
  }).then(function (data) {
    shortIOresponse = data.shortURL;
    // console.log(shortIOresponse);
    navigator.clipboard.writeText(shortIOresponse);
    return shortIOresponse;
  })
}



async function getShortIOBulk() {
await fetch('/api/shortIOlinks')
.then(function(response){ 
   return JSON.stringify(response);
  }).then(function(response){
  console.log(response)
  })
}