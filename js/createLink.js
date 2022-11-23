function createShortIO(urlToShorten) {
    console.log(urlToShorten);

    shortIOquery = `https://api.short.cm/links/tweetbot?domain=5sc4.short.gy&apiKey=sk_PXVEvB8Biq7GcG7C&originalURL=` + urlToShorten;

    const response = fetch(shortIOquery, {
    }).then(response => {
      console.log(response.json);
    });       

}