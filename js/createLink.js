async function createShortIO(urlToShorten) {
    console.log(urlToShorten);

    const options = {
      method: 'POST',
      url: '/api/shortIO',
      headers: {
        authorization: 'pk_Fyb6rXgT61WeumwC',
      },
      json: {
        originalURL: urlToShorten,
        domain: '5sc4.short.gy'
      },
      responseType: 'json'
    };
    
    got(options).then(response => {
      console.log(response.body);
    });    

}