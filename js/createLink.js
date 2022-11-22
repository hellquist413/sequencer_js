async function createShortIO(urlToShorten) {
    console.log(urlToShorten);

    const options = {
      method: 'POST',
      url: '/api/shortIO',
      json: {
        originalURL: urlToShorten,
        domain: '5sc4.short.gy'
      },
      responseType: 'json'
    };
    
    fetch(options).then(response => {
      console.log(response.body);
    });    

}