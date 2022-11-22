function createShortIO(urlToShorten) {
    const options = {
        method: 'POST',
        headers: {
          accept: 'application/json',
          'content-type': 'application/json',
          Authorization: 'pk_Fyb6rXgT61WeumwC'
        },
        body: JSON.stringify({originalURL: urlToShorten})
      };
      
      fetch('https://api.short.io/links/public', options)
        .then(response => response.json())
        .then(response => console.log(response))
        .catch(err => console.error(err));
}